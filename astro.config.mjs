// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User/organization GitHub Pages site (ashutoshaay26.github.io) — served from root,
// so no `base` path is required.
export default defineConfig({
  site: 'https://ashutoshaay26.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
