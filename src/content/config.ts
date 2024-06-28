import { z, defineCollection } from "astro:content";

const pages = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
		title: z.string(),
		underConstruction: z.boolean().optional(),
		cover: image().optional(),
		date: z.date().optional()
    })
})

export const collections = { pages }
