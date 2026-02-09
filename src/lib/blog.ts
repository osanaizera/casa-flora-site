/**
 * Blog Adapter Layer
 *
 * Maps CMS responses to a stable internal `Post` contract,
 * isolating page components from the CMS schema.
 */
import {
  listPosts,
  listAllPosts,
  getPost,
  type CMSContentItem,
  type CMSContentDetail,
} from "@/lib/cms";
import {
  absolutizeCmsAssetUrl,
  getCmsBaseUrlForAssets,
} from "@/lib/sdcms-assets";

// ─── Internal Post type ───────────────────────

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  author: string;
  readTime: string; // "X min"
  image: string; // absolute URL
  tags: string[];
  lang: string;
  content: string; // raw Markdown
  seoTitle?: string | null;
  seoDescription?: string | null;
  seoImage?: string | null;
  canonicalUrl?: string | null;
  robots?: string | null;
  jsonLd?: Record<string, unknown> | null;
};

// ─── Helpers ──────────────────────────────────

const PLACEHOLDER_IMAGE = "/images/blog-placeholder.svg";

/** Estimate read time from word count */
function estimateReadTime(content: string): string {
  const words = (content || "").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

/** Extract first image URL from Markdown content */
function extractFirstImageFromMarkdown(md: string): string | null {
  if (!md) return null;
  // Markdown syntax: ![alt](url)
  const mdImg = /!\[(?:[^\]]*)\]\(([^)]+)\)/.exec(md);
  if (mdImg) return mdImg[1];
  // HTML img tags
  const htmlImg = /<img[^>]+src=["']([^"']+)["']/.exec(md);
  if (htmlImg) return htmlImg[1];
  return null;
}

/** Resolve the best image for a post with priority: seoImage → first MD image → placeholder */
function resolveImage(
  item: CMSContentItem | CMSContentDetail,
): string {
  const cmsBase = getCmsBaseUrlForAssets();

  if (item.seoImage) {
    return absolutizeCmsAssetUrl(item.seoImage, cmsBase);
  }

  const contentField =
    "content" in item && typeof item.content === "string" ? item.content : "";
  const fromMd = extractFirstImageFromMarkdown(contentField);
  if (fromMd) {
    return absolutizeCmsAssetUrl(fromMd, cmsBase);
  }

  return PLACEHOLDER_IMAGE;
}

/** Format ISO date to YYYY-MM-DD */
function toDateString(iso?: string | null): string {
  if (!iso) return new Date().toISOString().slice(0, 10);
  return new Date(iso).toISOString().slice(0, 10);
}

// ─── Mappers ──────────────────────────────────

function mapListItem(item: CMSContentItem): Post {
  return {
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt || "",
    date: toDateString(item.publishedAt || item.updatedAt),
    author: item.authorName || "Casa Flora",
    readTime: estimateReadTime(item.content || item.excerpt || ""),
    image: resolveImage(item),
    tags: item.tags ?? [],
    lang: item.lang || "pt",
    content: item.content || "",
    seoTitle: item.seoTitle,
    seoDescription: item.seoDescription,
    seoImage: item.seoImage
      ? absolutizeCmsAssetUrl(item.seoImage, getCmsBaseUrlForAssets())
      : null,
    canonicalUrl: item.canonicalUrl,
    robots: item.robots,
  };
}

function mapDetail(item: CMSContentDetail): Post {
  return {
    ...mapListItem(item),
    content: item.content,
    readTime: estimateReadTime(item.content),
    jsonLd: item.jsonLd,
  };
}

// ─── Public API ───────────────────────────────

/** Get a single post by slug (with full content) */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const detail = await getPost(slug);
  if (!detail) return null;
  return mapDetail(detail);
}

/** Get all published posts, optionally filtered by lang */
export async function getAllPosts(lang?: string): Promise<Post[]> {
  const items = await listAllPosts("BLOG");
  const posts = items.map(mapListItem);

  if (lang) {
    return posts.filter((p) => p.lang === lang);
  }

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/** Get the most recent post as "featured" */
export async function getFeaturedPost(lang?: string): Promise<Post | undefined> {
  const posts = await getAllPosts(lang);
  return posts[0];
}

/** Get all slugs (for static generation / sitemap) */
export async function getAllSlugs(): Promise<string[]> {
  const items = await listAllPosts("BLOG");
  return items.map((i) => i.slug);
}
