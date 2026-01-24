export type CmsPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  content?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  seoImage?: string | null;
  canonicalUrl?: string | null;
  publishedAt?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
  type?: string | null;
  category?: string | null;
};

type ListPostsParams = {
  limit?: number;
  cursor?: string;
  type?: string;
  includeContent?: boolean;
};

type ListPostsResponse = {
  data: CmsPost[];
  nextCursor?: string;
};

const baseUrl = process.env.CMS_BASE_URL || "";
const apiKey = process.env.CMS_API_KEY || "";

function getBaseUrl() {
  return baseUrl.replace(/\/$/, "");
}

async function cmsFetch(path: string, init?: RequestInit) {
  if (!baseUrl || !apiKey) {
    throw new Error("Missing CMS env vars");
  }

  const response = await fetch(`${getBaseUrl()}${path}`, {
    ...init,
    headers: {
      "x-api-key": apiKey,
      ...(init?.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(`CMS request failed: ${response.status}`);
  }

  return response.json();
}

export async function listPosts({
  limit = 10,
  cursor,
  type = "BLOG",
  includeContent = false,
}: ListPostsParams = {}): Promise<ListPostsResponse> {
  if (!baseUrl || !apiKey) {
    return { data: [], nextCursor: undefined };
  }
  const params = new URLSearchParams();
  params.set("limit", String(limit));
  params.set("type", type);
  params.set("includeContent", String(includeContent));
  if (cursor) params.set("cursor", cursor);

  return cmsFetch(`/api/content?${params.toString()}`, {
    cache: "no-store",
  });
}

export async function getPostBySlug(slug: string): Promise<CmsPost> {
  return cmsFetch(`/api/content/${encodeURIComponent(slug)}`, {
    cache: "no-store",
  });
}
