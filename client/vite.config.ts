import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve: {
    alias: {
      assets: '/src/assets',
      app: '/src/app',
      pages: '/src/pages',
      widgets: '/src/widgets',
      features: '/src/features',
      entites: '/src/entities',
      shared: '/src/shared',
    },
  }
})
