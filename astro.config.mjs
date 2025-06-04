import { defineConfig } from 'astro/config';
import remarkWikiLink from 'remark-wiki-link';

function slugify(str) {
  return str
    .replace(/\.md$/i, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w/-]+/g, '')
    .replace(/-+/g, '-')
    .replace(/\/+/g, '/')
    .toLowerCase();
}

export default defineConfig({
  markdown: {
    remarkPlugins: [
      [remarkWikiLink, {
        aliasDivider: '|', // <--- Add this line!
        hrefTemplate: (permalink) => `/worldbuilding/${slugify(permalink)}`,
        pageResolver: (name) => [slugify(name)],
        wikiLinkResolver: (permalink) => slugify(permalink),
        wikiLinkClassName: 'wikilink', 
      }]
    ]
  }
});