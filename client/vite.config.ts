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
      app: '/src/app',
      pages: '/src/pages',
      shared: '/src/shared',
      widgets: '/src/widgets',
    },
  }
})
