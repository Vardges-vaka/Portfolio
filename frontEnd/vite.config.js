import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split the rarely-changing vendors into their own chunks so they cache
    // across deploys and load in parallel with the app code. (lucide-react is
    // imported icon-by-icon and tree-shaken, so it stays with its consumers.)
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-d3': ['d3-force'],
        },
      },
    },
    chunkSizeWarningLimit: 700,
  },
})
