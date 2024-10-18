import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// Node 14 & 16
// import manifest from './manifest.json'
// Node >=17
import manifest from './manifest.json' assert { type: 'json' };

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  // root: 'src',
  base: './',
  server: {
    port: 3001,
  },
});
