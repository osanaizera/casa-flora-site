# SDCMS Quick Start Guide

> 🚀 Get your blog running in 10 minutes

## Prerequisites

```bash
✅ Next.js 15+
✅ Node.js 18+
✅ CMS deployed and accessible
```

## Step 1: Install (30 seconds)

```bash
pnpm add marked sanitize-html
pnpm add -D @types/sanitize-html
```

## Step 2: Configure (1 minute)

Create `.env.local`:

```bash
CMS_BASE_URL=https://your-cms.vercel.app
CMS_API_KEY=cms_your_api_key_here
CMS_WEBHOOK_SECRET=your_webhook_secret
```

## Step 3: Create CMS Client (2 minutes)

Copy this to `lib/cms.ts`:

```typescript
export interface CmsPost {
  id: string
  slug: string
  title: string
  excerpt?: string | null
  content?: string | null
  seoTitle?: string | null
  seoDescription?: string | null
  seoImage?: string | null
  publishedAt?: string | null
  updatedAt?: string | null
}

const baseUrl = process.env.CMS_BASE_URL?.replace(/\/$/, "") || ""
const apiKey = process.env.CMS_API_KEY || ""

async function cmsFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    headers: { "x-api-key": apiKey, "content-type": "application/json" },
    cache: "no-store",
  })
  if (!response.ok) throw new Error(`CMS error: ${response.status}`)
  return response.json()
}

export async function listPosts(limit = 10) {
  return cmsFetch<{ data: CmsPost[]; nextCursor?: string }>(
    `/api/public/content?limit=${limit}&type=BLOG&includeContent=false`
  )
}

export async function getPostBySlug(slug: string) {
  const result = await cmsFetch<{ data: CmsPost }>(
    `/api/public/content/${slug}?includeContent=true`
  )
  return result.data
}
```

## Step 4: Create Blog Page (3 minutes)

`app/blog/page.tsx`:

```typescript
import { listPosts } from "@/lib/cms"

export default async function BlogPage() {
  const { data: posts } = await listPosts(10)

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="border p-6 rounded">
            <h2 className="text-2xl font-bold">
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
```

## Step 5: Create Post Page (3 minutes)

`app/blog/[slug]/page.tsx`:

```typescript
import { getPostBySlug } from "@/lib/cms"
import { marked } from "marked"
import sanitizeHtml from "sanitize-html"

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  const html = sanitizeHtml(marked.parse(post.content || "") as string)

  return (
    <article className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
```

## Step 6: Add Styles (30 seconds)

Add to `globals.css`:

```css
.prose h1 { @apply text-3xl font-bold my-4; }
.prose h2 { @apply text-2xl font-bold my-4; }
.prose p { @apply my-4 leading-7; }
.prose a { @apply text-blue-600 underline; }
.prose img { @apply max-w-full rounded my-6; }
```

## Step 7: Test (30 seconds)

```bash
pnpm dev
```

Visit: `http://localhost:3000/blog` ✨

---

## What's Next?

1. **Add SEO** → [SEO Guide](./CMS_INTEGRATION_GUIDE.md#5-blog-post-page)
2. **Enable Webhooks** → [Webhook Guide](./CMS_INTEGRATION_GUIDE.md#8-revalidation-webhook)
3. **Optimize Performance** → [Performance Guide](./CMS_INTEGRATION_GUIDE.md#performance-optimization)

---

## Common Issues

**"CMS error 401"** → Check your `CMS_API_KEY`  
**Images not loading** → Configure `next.config.ts` remote patterns  
**Styles not applied** → Make sure CSS is imported in layout

Full troubleshooting: [Guide](./CMS_INTEGRATION_GUIDE.md#troubleshooting)

---

## Need Help?

- 📖 [Full Documentation](./CMS_INTEGRATION_GUIDE.md)
- 🔧 [API Reference](./CMS_INTEGRATION_GUIDE.md#api-reference)
- 🚨 [Troubleshooting](./CMS_INTEGRATION_GUIDE.md#troubleshooting)
