import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      ignored: [
        '**/node_modules/**',
        '**/dist/**',
        'C:/Users/vanes/AppData/**',
        '**/.git/**'
      ]
    }
  }
})