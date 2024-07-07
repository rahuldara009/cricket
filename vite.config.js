import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { VitePluginGhPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  base: '/cricket/', // Replace 'cricket' with your GitHub repository name
  
  plugins: [
    react(),
    VitePWA(),
    VitePluginGhPages({
      branch: 'gh-pages',
      push: true,
      dir: 'dist', // Your build output directory
    }),
  ],
});
