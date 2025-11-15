import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        men: path.resolve(__dirname, 'pages/men.html'),
        women: path.resolve(__dirname, 'pages/women.html'),
        kids: path.resolve(__dirname, 'pages/kids.html'),
        collection: path.resolve(__dirname, 'pages/collection.html'),
        review: path.resolve(__dirname, 'pages/review.html'),
        contact: path.resolve(__dirname, 'pages/contact.html'),
        login: path.resolve(__dirname, 'pages/login.html'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
