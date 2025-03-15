import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      fastRefresh: false
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
          ui: ['lucide-react']
        }
      }
    },
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
});