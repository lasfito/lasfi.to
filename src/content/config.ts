import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		template: z.string(),
		url: z.string(),
		date: z
			.string()
			.or(z.date())
			.transform(val => new Date(val)),
		title: z.string(),
		tag: z.array(z.string()),
		autor: z.string(),
		introThumbnail: z.string().optional(),
		keyword: z.string(),
		thumbnail: z.string(),
	}),
});
const tutoriales = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		template: z.string(),
		url: z.string(),
		enlaceyt: z.string(),
		date: z
			.string()
			.or(z.date())
			.transform(val => new Date(val)),
		title: z.string(),
		tag: z.array(z.string()),
		autor: z.string(),
		introThumbnail: z.string().optional(),
		keyword: z.string(),
		thumbnail: z.string(),
	}),
});

export const collections = { blog, tutoriales };
