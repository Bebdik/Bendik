import { defineCollection, z } from "astro:content";

// Existing collections
const obsidianMeta = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    publish: z.boolean().optional(),
    category: z.string().optional(),
  }),
});

const worldbuilding = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    art: z.string().optional(),
    publish: z.boolean().optional(),
  }).passthrough(),
});

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    publish: z.boolean().optional(),
    art: z.string().optional(),
    metadata: z.record(z.any()).optional(),
    tags: z.array(z.string()).optional(),
  }).passthrough(), 
});

// Export all collections
export const collections = {
  "obsidian-meta": obsidianMeta,
  "worldbuilding": worldbuilding,
  "work": work,
};
