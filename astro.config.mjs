import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
// import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  security: {
    checkOrigin: true
  },
  site: "https://ciorogarla.eu.org",
  integrations: [tailwind({
    applyBaseStyles: false
  }), svelte(), mdx()],
  output: "static",
  // adapter: cloudflare()
});