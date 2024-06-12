import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // or any port you prefer
  },
  build: {
    outDir: 'build',
  },
})
