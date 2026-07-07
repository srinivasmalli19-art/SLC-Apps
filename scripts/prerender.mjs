// Build-time prerendering.
//
// This app is a client-rendered SPA (createRoot, not hydrateRoot), so a raw
// HTTP fetch of any route — including /apps/slc-gps-camera/privacy-policy,
// the URL submitted to Google Play — returns an empty `<div id="root"></div>`
// with no visible text until JavaScript runs. Some automated URL checks
// (including, historically, Google Play's privacy-policy validator) fetch
// pages without executing JavaScript, which would read that as a blank page.
//
// To fix this without changing app behavior for real users, this script
// runs after `vite build`: it boots the built app in headless Chromium,
// captures the fully-rendered HTML for every route, and writes each one to
// disk as a static index.html at its own path. The <script>/<link> tags are
// preserved, so once a browser loads the page, React takes over exactly as
// it would for any other SPA route — this only changes what a non-JS fetch
// sees on first load.
//
// The route list is derived from data/apps.js (not hand-written), so adding
// a 5th app only requires an entry there plus its 6 page files — nothing
// here needs to change.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { apps, APP_SUB_PAGES } from '../src/data/apps.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const PORT = 4174;
const BASE = `http://localhost:${PORT}`;

const siteRoutes = ['/', '/about', '/contact', '/apps/'];
const appRoutes = apps.flatMap((app) => [
  app.path,
  ...APP_SUB_PAGES.map((sub) => `${app.path}${sub}`),
]);
const routes = [...siteRoutes, ...appRoutes];

function routeToFile(route) {
  if (route === '/') return path.join(distDir, 'index.html');
  const trimmed = route.replace(/^\/|\/$/g, '');
  return path.join(distDir, trimmed, 'index.html');
}

async function waitForServer(url, attempts = 60) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Preview server did not become ready at ${url}`);
}

const server = spawn(
  'npx',
  ['vite', 'preview', '--port', String(PORT), '--base', '/', '--strictPort'],
  { cwd: root, stdio: 'pipe' },
);

let serverOutput = '';
server.stdout.on('data', (d) => (serverOutput += d.toString()));
server.stderr.on('data', (d) => (serverOutput += d.toString()));

try {
  await waitForServer(`${BASE}/`);

  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  for (const route of routes) {
    const url = BASE + route;
    await page.goto(url, { waitUntil: 'load' });
    await page.waitForSelector('.site-footer__bottom', { timeout: 10000 });
    // let the browser settle any layout/paint before snapshotting
    await page.waitForTimeout(50);
    const html = await page.content();

    const outFile = routeToFile(route);
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, html, 'utf8');
    console.log(`prerendered ${route} -> ${path.relative(root, outFile)}`);
  }

  await browser.close();
} catch (err) {
  console.error('Prerender failed:');
  console.error(serverOutput);
  throw err;
} finally {
  server.kill();
}
