import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  optimizeDeps: {
    include: ['bootstrap-vue']
  },
  resolve: {
    alias: {
      // Resolve paths relative to the current module file using import.meta.url
      '@': new URL('./src', import.meta.url).pathname
    }
  }
})
