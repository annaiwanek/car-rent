import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  esbuild: {
    loader: 'jsx',
    include: [
      // Add this for jsx files if they are not inside src folder
      'src/**/*.jsx',
      'src/**/*.js',
    ],
    exclude: [],
  },
});
