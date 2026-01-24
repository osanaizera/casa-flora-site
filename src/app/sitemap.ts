import type { MetadataRoute } from "next";
import { listPosts } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.casaflora-brand.com.br";

    // Páginas estáticas
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/experiencias`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/hospitalidade`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/sobre`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contato`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/cases`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/servicos`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/produtos`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/downloads`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    const blogPages: MetadataRoute.Sitemap = [];
    let cursor: string | undefined;

    while (true) {
        const { data, nextCursor } = await listPosts({
            limit: 50,
            type: "BLOG",
            includeContent: false,
            cursor,
        });

        for (const post of data) {
            const lastModified =
                post.updatedAt ||
                post.publishedAt ||
                post.createdAt ||
                new Date().toISOString();

            blogPages.push({
                url: `${baseUrl}/blog/${post.slug}`,
                lastModified,
                changeFrequency: "monthly",
                priority: 0.6,
            });
        }

        if (!nextCursor) break;
        cursor = nextCursor;
    }

    return [...staticPages, ...blogPages];
}
