import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import sitemapPlugin from './src/plugins/sitemap.js'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/unoeilsurlecode/' : '/',
  plugins: [
    vue(),
    mode !== 'production' && vueDevTools(),
    sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
}))