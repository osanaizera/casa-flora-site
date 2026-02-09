import "server-only";

// ─── Environment ──────────────────────────────
const baseUrl = (process.env.CMS_BASE_URL ?? "").replace(/\/$/, "");
const apiKey = process.env.CMS_API_KEY ?? "";

// ─── Types ────────────────────────────────────

/** Shape returned by GET /api/public/content (list item) */
export interface CMSContentItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  seoImage: string | null;
  publishedAt: string;
  updatedAt?: string;
  createdAt?: string;
  authorName?: string | null;
  tags?: string[] | null;
  lang?: string | null;
  robots?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  canonicalUrl?: string | null;
  type?: string | null;
  category?: string | null;
  content?: string; // only with includeContent=true
}

/** Shape returned by GET /api/public/content/:slug */
export interface CMSContentDetail extends CMSContentItem {
  content: string;
  type: string;
  jsonLd?: Record<string, unknown> | null;
}

/** Webhook payload */
export interface CMSWebhookPayload {
  event:
    | "content.published"
    | "content.updated"
    | "content.unpublished"
    | "content.deleted";
  emittedAt: string;
  clientId: string;
  siteId: string;
  post: {
    id: string;
    slug: string;
    title: string;
    type: string;
    publishedAt: string;
    updatedAt: string;
    seoTitle: string | null;
    seoDescription: string | null;
    seoImage: string | null;
    canonicalUrl: string | null;
  };
  previousSlug?: string;
}

/** Params for paginated list */
export type ListPostsParams = {
  limit?: number;
  cursor?: string;
  type?: string;
  lang?: string;
  search?: string;
  tags?: string;
  includeContent?: boolean;
};

export type ListPostsResponse = {
  data: CMSContentItem[];
  nextCursor?: string;
};

// ─── Generic Fetch ────────────────────────────

export async function cmsFetch<T>(
  path: string,
  init: RequestInit = {},
): Promise<{ data: T; nextCursor?: string }> {
  if (!baseUrl || !apiKey) {
    throw new Error("SDCMS: Missing CMS_BASE_URL or CMS_API_KEY.");
  }

  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      "x-api-key": apiKey,
      "content-type": "application/json",
      ...(init.headers ?? {}),
    },
    // ISR: cache with tag-based revalidation via webhooks + 1h fallback
    next: { tags: ["cms-posts"], revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`SDCMS fetch error ${response.status}: ${url}`);
  }

  return response.json();
}

// ─── Public Helpers ───────────────────────────

/**
 * Fetch a single page of posts (uses cursor-based pagination).
 */
export async function listPosts(
  params: ListPostsParams = {},
): Promise<ListPostsResponse> {
  const {
    limit = 20,
    cursor,
    type = "BLOG",
    lang,
    search,
    tags,
    includeContent = false,
  } = params;

  if (!baseUrl || !apiKey) {
    return { data: [], nextCursor: undefined };
  }

  const qs = new URLSearchParams({
    type,
    limit: String(limit),
    includeContent: String(includeContent),
  });
  if (cursor) qs.set("cursor", cursor);
  if (lang) qs.set("lang", lang);
  if (search) qs.set("search", search);
  if (tags) qs.set("tags", tags);

  const res = await cmsFetch<CMSContentItem[]>(
    `/api/public/content?${qs.toString()}`,
  );

  return { data: res.data, nextCursor: res.nextCursor };
}

/**
 * Fetch ALL blog posts by paginating internally.
 * Useful for sitemap generation and static paths.
 */
export async function listAllPosts(
  type = "BLOG",
): Promise<CMSContentItem[]> {
  const all: CMSContentItem[] = [];
  let cursor: string | undefined;

  do {
    const res = await listPosts({ limit: 50, type, cursor });
    all.push(...res.data);
    cursor = res.nextCursor;
  } while (cursor);

  return all;
}

/**
 * Fetch a single post with full Markdown body.
 */
export async function getPost(
  slug: string,
): Promise<CMSContentDetail | null> {
  try {
    const res = await cmsFetch<CMSContentDetail>(
      `/api/public/content/${encodeURIComponent(slug)}`,
    );
    return res.data;
  } catch {
    return null;
  }
}

// Legacy alias used by existing pages
export type CmsPost = CMSContentItem;
export async function getPostBySlug(slug: string) {
  return getPost(slug);
}
