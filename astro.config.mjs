// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production origin. Used for canonical URLs, Open Graph tags, and the sitemap.
export default defineConfig({
  site: 'https://projectpineapple.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // /thanks is a post-booking confirmation and is set to noindex.
      filter: (page) => !page.endsWith('/thanks'),
    }),
  ],
});
