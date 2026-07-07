# SLC Apps Portal

The full website for SLC Technologies, hosted at `https://slcvet.com`.
Built with React + Vite, deployed on Cloudflare Pages (GoDaddy is kept only
as the domain registrar). Independent project — does not share code with
any of the applications it describes (SLC GPS Camera, JeevaMitra,
Pasumithra, SLC Vet).

## Site structure

```
/                                  Home
/about                             About SLC Technologies
/apps/                             Apps index (all apps)
/apps/<app-slug>/                  App About page
/apps/<app-slug>/features
/apps/<app-slug>/privacy-policy    <- Google Play submits this URL per app
/apps/<app-slug>/support
/apps/<app-slug>/terms
/apps/<app-slug>/contact
/contact                          Site-level contact (general inquiries)
```

Current app slugs: `slc-gps-camera`, `jeevamitra`, `pasumithra`, `slc-vet`.

### Adding a future app

1. Add an entry to `src/data/apps.js` (`apps` array).
2. Create `src/pages/apps/<slug>/{About,Features,PrivacyPolicy,Support,Terms,Contact}.jsx`.
3. Add one route block to `src/App.jsx` (copy an existing app's block, e.g. `slc-gps-camera`'s).

Nothing else needs to change — `scripts/prerender.mjs` derives its route
list from `data/apps.js`, so the new app's pages are prerendered
automatically.

## Develop

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build:prerender
```

Runs `vite build`, then a prerender step (`scripts/prerender.mjs`) that
snapshots the fully-rendered HTML for every route into `dist/`. Always use
this for production builds — plain `npm run build` produces a client-only
bundle where a raw HTTP fetch of any page returns an empty shell until
JavaScript runs, which is unsuitable for the Privacy Policy URLs submitted
to Google Play (see "Why prerendering" below). `dist/` is uploaded to
Cloudflare Pages as-is — no extra packaging step needed.

## Why prerendering

This app renders entirely client-side (`createRoot`, not `hydrateRoot`).
Google Play's privacy-policy URL check — like many automated URL
validators — has a documented history of not reliably executing
JavaScript. Without prerendering, `curl`-ing e.g.
`/apps/slc-gps-camera/privacy-policy` returns `<div id="root"></div>` with
no visible text. `npm run build:prerender` fixes this by writing the real,
rendered HTML to disk for every route, so each app's submitted URL returns
full policy text with zero JavaScript execution. Regular users still get
the normal single-page-app experience — the prerendered HTML is just a
first-paint snapshot that React re-renders over on load.

Re-run `npm run build:prerender` (not just `vite build`) any time page
content changes, so the static snapshots stay in sync with the source.

## Deployment: Cloudflare Pages

| Setting | Value |
|---|---|
| Build command | `npm run build:prerender` |
| Build output directory | `dist` |
| Custom domains | `slcvet.com`, `www.slcvet.com` |

GoDaddy remains the domain registrar; DNS/nameservers point to Cloudflare,
and Cloudflare Pages serves the whole site directly at the domain root —
no Worker, no path proxying (that was an earlier, since-abandoned
architecture that briefly coexisted with a separate GoDaddy-hosted site).

## Routing / hosting notes

- Vite `base` is `/` and the app has no React Router `basename` — the site
  is served from the domain root.
- Because every route is prerendered as a real directory with its own
  `index.html`, most requests are served as static files directly —
  `public/_redirects` exists purely as a fallback for unmatched paths,
  which render the app's client-side 404 page.
