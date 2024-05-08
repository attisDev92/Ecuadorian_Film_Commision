import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: 'https://film-commission.netlify.app/',
  build: {
    rollupOptions: {
      input: './index.html',
    },
    publicDir: 'public',
  }
})
