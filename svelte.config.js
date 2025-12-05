import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null, // No fallback needed for a single-page static site
      precompress: false
    }),
    paths: {
      base: '' // Leave empty unless you need a subpath
    }
  }
};

export default config;
