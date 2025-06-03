import { defineCollection, z } from "astro:content";

const obsidianMeta = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
  }),
});

const worldbuilding = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    art: z.string().optional(),
  }).passthrough(),
});

export const collections = {
  "obsidian-meta": obsidianMeta,
  "worldbuilding": worldbuilding,
};
