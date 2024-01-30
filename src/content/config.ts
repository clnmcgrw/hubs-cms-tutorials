import { z, reference, defineCollection } from 'astro:content';

const authorSchema = z.object({
  name: z.string(),
  title: z.string(),
  image: z.string().optional()
});

const difficultySchema = z.object({
  name: z.string(),
  description: z.string(),
});

const postSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  draft: z.boolean(),
  author: reference('authors'),
  difficulty: reference('difficulty'),
  published: z.date().optional(),
  edited: z.date().optional(),
  homepage: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
  relatedTips: z.array(reference('posts')).optional()
});

export const collections = {
  posts: defineCollection({
    type: 'content',
    schema: postSchema,
  }),
  authors: defineCollection({
    type: 'data',
    schema: authorSchema,
  }),
  difficulty: defineCollection({
    type: 'data',
    schema: difficultySchema,
  }),
};
