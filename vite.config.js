import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs-extra'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://attisDev92.github.io/Ecuadorian_Film_Commision',
  build: {
    rollupOptions: {
      input: './index.html',
      plugins: [
        {
          name: 'vite-plugin-assers-in-src',
          enforce: 'pre',
          async build(config) {
            await copy(`${config.root}/src/assets/images`, `${config.root}/public/assets/images`)
            await copy(`${config.root}/src/assets/data`, `${config.root}/public/assets/data`)
          }
        }
      ]
    },
    publicDir: 'public',
  }
})
