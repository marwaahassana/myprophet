import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // Main Home Page
        main: resolve(__dirname, 'index.html'),
        
        // Navbar Pages
        birth: resolve(__dirname, 'birth.html'),
        childhood: resolve(__dirname, 'childhood.html'),
        youth: resolve(__dirname, 'youth.html'),
        passing: resolve(__dirname, 'passing.html'),
        
        // Footer Pages
        about: resolve(__dirname, 'about.html'),
        resources: resolve(__dirname, 'resources.html'),
        sitemap: resolve(__dirname, 'sitemap.html'),
        
        // New Life Event Pages
        israMiraj: resolve(__dirname, 'isra.html'),
        hijrah: resolve(__dirname, 'hijra.html'),
        revelation: resolve(__dirname, 'iqraa.html.html'),
      },
    },
  },
})