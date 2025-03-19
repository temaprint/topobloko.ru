import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    publishDate: z.string(),
    author: z.object({
      name: z.string(),
      avatar: z.string()
    })
  })
});

export const collections = {
  articles
};