import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Deployed at https://slcvet.com (domain root) via Cloudflare Pages.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
