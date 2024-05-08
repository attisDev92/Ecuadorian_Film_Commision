import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'http://ecuadorfilmcommission.com/',
  build: {
    rollupOptions: {
      input: './index.html',
    },
    publicDir: 'public',
  }
})
