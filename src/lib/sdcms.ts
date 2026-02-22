import { createSDCMSClient } from "@sdcms/nextjs";

/**
 * SDCMS client configured for Casa Flora
 */
export const sdcms = createSDCMSClient({
  apiUrl:
    process.env.NEXT_PUBLIC_SDCMS_API_URL ||
    "https://sdcms-web.vercel.app",
  clientSlug: "casa-flora",
  debug: process.env.NODE_ENV === "development",
  revalidate: 3600, // Revalidate every hour
});

/**
 * Get all SEO metadata from SDCMS
 */
export async function getSDCMSMetadata() {
  try {
    return await sdcms.getSEOMetadata();
  } catch (error) {
    console.error("Failed to fetch SDCMS metadata:", error);
    throw error;
  }
}

/**
 * Get blog posts from SDCMS
 */
export async function getBlogPosts(options?: {
  limit?: number;
  offset?: number;
  tags?: string[];
  type?: string;
  lang?: string;
}) {
  try {
    return await sdcms.getBlogPosts(options);
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw error;
  }
}

/**
 * Get single blog post by ID
 */
export async function getBlogPost(id: string) {
  try {
    return await sdcms.getBlogPost(id);
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    throw error;
  }
}

/**
 * Get full content body for a post
 */
export async function getContentBody(id: string) {
  try {
    return await sdcms.getContentBody(id);
  } catch (error) {
    console.error("Failed to fetch content body:", error);
    return null;
  }
}
