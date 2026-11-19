import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base is '/' because the site is served from a custom domain (yourname.is-a.dev).
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
