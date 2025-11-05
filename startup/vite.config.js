import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // frontend runs here
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // your Express backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
