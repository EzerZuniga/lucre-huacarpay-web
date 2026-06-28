import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    host: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('react-router-dom') || id.includes('react-router')) return 'router'
          if (id.includes('react-icons')) return 'icons'
          if (id.includes('axios')) return 'http'
          if (id.includes('zod')) return 'validation'
          if (id.includes('react')) return 'vendor'
          return undefined
        },
      },
    },
  },
  preview: {
    port: 4173,
    host: true,
  },
})
