import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jzhan2543.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
