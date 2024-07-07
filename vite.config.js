import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cricket/', // Replace 'cricket' with your GitHub repository name
  
  plugins: [
    react(),
  ],
});
