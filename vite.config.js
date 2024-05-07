import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://film-commission.netlify.app/',
  build: {
    rollupOptions: {
      input: './index.html',
      plugins: [
        {
          name: 'vite-plugin-assers-in-src',
          enforce: 'pre',
          async build(config) {
            await copy(`${config.root}/src/assets`, `${config.root}/public/assets`)
          }
        }
      ]
    },
    publicDir: 'public',
  }
})
