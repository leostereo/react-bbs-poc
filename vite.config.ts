import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    fs: {
      // Allow serving files outside of the root
      allow: [
        "../.."
      ]
    }
  },
  optimizeDeps: { exclude: ["@babylonjs/havok"] },
})