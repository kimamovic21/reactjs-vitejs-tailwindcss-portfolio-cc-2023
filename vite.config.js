import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/reactjs-vitejs-tailwindcss-portfolio-cc-2023',
  plugins: [react()],
});
