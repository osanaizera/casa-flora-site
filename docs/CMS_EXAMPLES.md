# CMS Integration Examples

Real-world examples and patterns for SDCMS integration.

---

## Table of Contents

- [Basic Examples](#basic-examples)
- [Advanced Patterns](#advanced-patterns)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Real API Responses](#real-api-responses)

---

## Basic Examples

### Example 1: Simple Blog List

```typescript
// app/blog/page.tsx
import { listPosts } from "@/lib/cms"

export default async function BlogPage() {
  const { data, nextCursor } = await listPosts({
    limit: 10,
    type: "BLOG",
  })

  return (
    <div>
      {data.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
      
      {nextCursor && <a href={`/blog?cursor=${nextCursor}`}>Next Page</a>}
    </div>
  )
}
```

### Example 2: Blog with Categories

```typescript
export default async function BlogPage({ searchParams }: { 
  searchParams: Promise<{ category?: string }> 
}) {
  const { category } = await searchParams
  const { data } = await listPosts({ limit: 10 })

  // Filter by category (if your CMS supports it)
  const filtered = category 
    ? data.filter((p) => p.category === category)
    : data

  return (
    <div>
      <nav>
        <a href="/blog">All</a>
        <a href="/blog?category=design">Design</a>
        <a href="/blog?category=business">Business</a>
      </nav>

      {filtered.map((post) => (
        <article key={post.id}>
          <span className="badge">{post.category}</span>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  )
}
```

### Example 3: Search Functionality

```typescript
export default async function BlogPage({ searchParams }: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q: query } = await searchParams
  const { data } = await listPosts({ limit: 50 })

  // Client-side search (for small datasets)
  const results = query
    ? data.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(query.toLowerCase())
      )
    : data

  return (
    <div>
      <form>
        <input
          type="search"
          name="q"
          placeholder="Search posts..."
          defaultValue={query}
        />
      </form>

      <p>Found {results.length} posts</p>

      {results.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  )
}
```

---

## Advanced Patterns

### Pattern 1: Featured Posts

```typescript
export default async function HomePage() {
  const { data } = await listPosts({ limit: 3 })
  
  // Get 3 most recent posts for homepage
  const featured = data.slice(0, 3)

  return (
    <section>
      <h2>Latest Articles</h2>
      <div className="grid grid-cols-3 gap-4">
        {featured.map((post) => (
          <article key={post.id}>
            {post.seoImage && <img src={post.seoImage} alt={post.title} />}
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.slug}`}>Read more →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
```

### Pattern 2: Related Posts

```typescript
async function getRelatedPosts(currentSlug: string, limit = 3) {
  const { data } = await listPosts({ limit: 20 })
  
  return data
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit)
}

export default async function PostPage({ params }: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const related = await getRelatedPosts(slug)

  return (
    <article>
      {/* Post content */}
      
      <aside>
        <h3>Related Posts</h3>
        {related.map((p) => (
          <a key={p.id} href={`/blog/${p.slug}`}>
            {p.title}
          </a>
        ))}
      </aside>
    </article>
  )
}
```

### Pattern 3: Infinite Scroll

```typescript
"use client"

import { useState, useEffect } from "react"
import type { CmsPost } from "@/lib/cms"

export function InfinitePostList({ initialPosts, initialCursor }: {
  initialPosts: CmsPost[]
  initialCursor?: string
}) {
  const [posts, setPosts] = useState(initialPosts)
  const [cursor, setCursor] = useState(initialCursor)
  const [loading, setLoading] = useState(false)

  const loadMore = async () => {
    if (!cursor || loading) return
    
    setLoading(true)
    const response = await fetch(`/api/blog/posts?cursor=${cursor}`)
    const { data, nextCursor } = await response.json()
    
    setPosts([...posts, ...data])
    setCursor(nextCursor)
    setLoading(false)
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) loadMore()
    })

    const sentinel = document.getElementById("sentinel")
    if (sentinel) observer.observe(sentinel)

    return () => observer.disconnect()
  }, [cursor])

  return (
    <>
      {posts.map((post) => (
        <article key={post.id}>{post.title}</article>
      ))}
      {cursor && <div id="sentinel">Loading...</div>}
    </>
  )
}
```

### Pattern 4: RSS Feed

```typescript
// app/blog/rss.xml/route.ts
import { getAllPosts } from "@/lib/cms"

export async function GET() {
  const posts = await getAllPosts()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Your Blog</title>
    <link>https://your-site.com</link>
    <description>Latest posts</description>
    ${posts
      .map(
        (post) => `
    <item>
      <title>${post.title}</title>
      <link>https://your-site.com/blog/${post.slug}</link>
      <description>${post.excerpt}</description>
      <pubDate>${new Date(post.publishedAt!).toUTCString()}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`

  return new Response(rss, {
    headers: { "Content-Type": "application/xml" },
  })
}
```

---

## Error Handling

### Pattern 1: Graceful Degradation

```typescript
export default async function BlogPage() {
  try {
    const { data } = await listPosts({ limit: 10 })
    
    if (data.length === 0) {
      return <p>No posts yet. Check back soon!</p>
    }

    return (
      <div>
        {data.map((post) => (
          <article key={post.id}>{post.title}</article>
        ))}
      </div>
    )
  } catch (error) {
    console.error("Failed to load posts:", error)
    
    return (
      <div className="error">
        <h2>Unable to load posts</h2>
        <p>Please try again later.</p>
      </div>
    )
  }
}
```

### Pattern 2: Loading States

```typescript
import { Suspense } from "react"

function PostsSkeleton() {
  return (
    <div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-full" />
        </div>
      ))}
    </div>
  )
}

async function PostsList() {
  const { data } = await listPosts({ limit: 10 })
  
  return data.map((post) => (
    <article key={post.id}>{post.title}</article>
  ))
}

export default function BlogPage() {
  return (
    <Suspense fallback={<PostsSkeleton />}>
      <PostsList />
    </Suspense>
  )
}
```

### Pattern 3: Retry Logic

```typescript
async function fetchWithRetry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    if (retries === 0) throw error
    
    await new Promise((resolve) => setTimeout(resolve, delay))
    return fetchWithRetry(fn, retries - 1, delay * 2)
  }
}

export default async function BlogPage() {
  const { data } = await fetchWithRetry(() => listPosts({ limit: 10 }))
  
  return <div>{/* ... */}</div>
}
```

---

## Testing

### Unit Tests (Jest)

```typescript
// lib/cms.test.ts
import { listPosts, getPostBySlug } from "./cms"

// Mock fetch
global.fetch = jest.fn()

describe("CMS Client", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should fetch blog posts", async () => {
    const mockResponse = {
      data: [{ id: "1", slug: "test", title: "Test" }],
      nextCursor: "abc123",
    }

    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    })

    const result = await listPosts({ limit: 10 })

    expect(result.data).toHaveLength(1)
    expect(result.data[0].title).toBe("Test")
  })

  it("should handle API errors", async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 401,
      text: async () => "Unauthorized",
    })

    await expect(listPosts({ limit: 10 })).rejects.toThrow("CMS API error 401")
  })
})
```

### Integration Tests (Playwright)

```typescript
// e2e/blog.spec.ts
import { test, expect } from "@playwright/test"

test("blog page loads posts", async ({ page }) => {
  await page.goto("/blog")

  // Wait for posts to load
  await page.waitForSelector("article")

  // Check at least one post is visible
  const posts = await page.locator("article").count()
  expect(posts).toBeGreaterThan(0)

  // Check post has title
  const firstTitle = await page.locator("article h2").first().textContent()
  expect(firstTitle).toBeTruthy()
})

test("blog post page renders content", async ({ page }) => {
  await page.goto("/blog")
  
  // Click first post
  await page.locator("article a").first().click()

  // Wait for content
  await page.waitForSelector(".blog-content")

  // Check content is rendered
  const content = await page.locator(".blog-content").textContent()
  expect(content?.length).toBeGreaterThan(100)
})
```

---

## Real API Responses

### List Posts Response

**Request:**
```bash
GET https://sdcms-web.vercel.app/api/public/content?limit=2&type=BLOG&includeContent=false
```

**Response:**
```json
{
  "data": [
    {
      "id": "09a44fba-0fff-45ea-b420-a09ca3a0826a",
      "title": "Design e Experiência: Construindo Relações Sólidas com Clientes Premium",
      "slug": "design-experiencia-clientes-premium",
      "excerpt": "Descubra como o design e a experiência do cliente podem fortalecer relações com clientes premium.",
      "seoTitle": "Design e Experiência: Fortalecendo Relações com Clientes Premium",
      "seoDescription": "Aprenda a importância do design e da experiência do cliente na construção de relações sólidas com clientes premium. Dicas e insights para sua estratégia.",
      "seoImage": null,
      "canonicalUrl": null,
      "content": null,
      "publishedAt": "2026-01-28T17:01:21.956Z",
      "updatedAt": "2026-01-28T17:01:21.958Z"
    },
    {
      "id": "400cf271-73f4-4aba-bdc8-9c5e67db06e2",
      "title": "Estudo de Marcas: O Que as Melhores do Mercado Têm em Comum?",
      "slug": "estudo-marcas-melhores-mercado",
      "excerpt": "Descubra os elementos comuns que fazem as melhores marcas do mercado se destacarem e como isso se aplica ao design de alto padrão.",
      "seoTitle": "O Que as Melhores Marcas Têm em Comum? - Casa Flora",
      "seoDescription": "Explore os fatores que unificam as melhores marcas do mercado e como isso se relaciona com o design de alto padrão em nosso workshop.",
      "seoImage": null,
      "canonicalUrl": null,
      "content": null,
      "publishedAt": "2026-01-25T12:54:08.574Z",
      "updatedAt": "2026-01-25T12:54:08.576Z"
    }
  ],
  "nextCursor": "1769345648574|400cf271-73f4-4aba-bdc8-9c5e67db06e2"
}
```

### Single Post Response

**Request:**
```bash
GET https://sdcms-web.vercel.app/api/public/content/design-experiencia-clientes-premium?includeContent=true
```

**Response (truncated):**
```json
{
  "data": {
    "id": "09a44fba-0fff-45ea-b420-a09ca3a0826a",
    "title": "Design e Experiência: Construindo Relações Sólidas com Clientes Premium",
    "slug": "design-experiencia-clientes-premium",
    "excerpt": "Descubra como o design e a experiência do cliente podem fortalecer relações com clientes premium.",
    "seoTitle": "Design e Experiência: Fortalecendo Relações com Clientes Premium",
    "seoDescription": "Aprenda a importância do design e da experiência do cliente na construção de relações sólidas com clientes premium.",
    "seoImage": null,
    "canonicalUrl": null,
    "content": "# Design e Experiência: Construindo Relações Sólidas com Clientes Premium\n\nNo mundo dos negócios de alto padrão...",
    "publishedAt": "2026-01-28T17:01:21.956Z",
    "updatedAt": "2026-01-28T17:01:21.958Z"
  }
}
```

### Error Response (404)

**Request:**
```bash
GET https://sdcms-web.vercel.app/api/public/content/invalid-slug
```

**Response:**
```json
{
  "error": "Not found",
  "code": "not_found"
}
```

### Error Response (401)

**Request:**
```bash
GET https://sdcms-web.vercel.app/api/public/content?limit=1
# With invalid API key
```

**Response:**
```json
{
  "error": "Unauthorized",
  "code": "unauthorized"
}
```

---

## Performance Benchmarks

Based on real-world testing:

| Operation | Response Time | Notes |
|-----------|--------------|-------|
| List 1 post | ~0.9s | Minimal overhead |
| List 10 posts | ~0.9s | Same as 1 post |
| List 50 posts | ~0.9s | Pagination efficient |
| Get single post | ~1.0s | With full content |
| Webhook | <100ms | Local processing |

---

## Best Practices Summary

✅ **Do:**
- Use `includeContent: false` for listings
- Implement error boundaries
- Add loading states
- Cache responses with ISR
- Sanitize HTML content
- Use TypeScript types

❌ **Don't:**
- Expose API keys in client code
- Fetch all posts at once (use pagination)
- Skip error handling
- Render unsanitized markdown
- Make unnecessary API calls

---

For more examples, see the [Full Documentation](./CMS_INTEGRATION_GUIDE.md).
