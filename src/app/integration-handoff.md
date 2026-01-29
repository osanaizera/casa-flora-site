# SDCMS Integration Handoff (Next.js)

This document is for a third-party engineer/AI to integrate the SDCMS blog into a Next.js site.

## 0) CMS base URL

- If the CMS is only running on your local machine (ex: `http://localhost:3000`), it will NOT work from a different server.
- Use one of:
  - Deploy CMS (Vercel or similar) and use the public URL.
  - Use a tunnel (ngrok, Cloudflare Tunnel) and use the public URL.

## 1) Environment variables

Set these in the client site environment (Vercel or `.env`). Prefer direct fetch (no SDK) to avoid registry issues. A public SDK can be added later when the API is stable.
```
CMS_BASE_URL=https://your-cms-url.com
CMS_API_KEY=cms_xxxxxxxxxxxxx
CMS_WEBHOOK_SECRET=xxxxxxxxxxxxxxxx
```

Notes:
- Do NOT expose the API key on the client side.
- Use server-side only (SSR/SSG/ISR).

## 2) Dependencies

```
pnpm add marked sanitize-html
```

## 3) CMS client helper

Create `lib/cms.ts`:
```ts
const baseUrl = process.env.CMS_BASE_URL!.replace(/\/$/, "")
const apiKey = process.env.CMS_API_KEY!

type CmsListResponse<T> = { data: T[]; nextCursor?: string }

export async function cmsFetch<T>(path: string, init: RequestInit = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "x-api-key": apiKey,
      "content-type": "application/json",
      ...(init.headers || {}),
    },
    cache: "no-store",
  })

  if (!response.ok) {
    const body = await response.text().catch(() => "")
    throw new Error(`CMS error ${response.status}: ${body}`)
  }

  return response.json() as Promise<{ data: T } & Record<string, unknown>>
}

export async function listPosts(params: Record<string, string | number | boolean | undefined>) {
  const search = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) search.set(key, String(value))
  }
  return cmsFetch<CmsListResponse<any>>(`/api/public/content?${search.toString()}`)
}

export async function getPostBySlug(slug: string) {
  const payload = await cmsFetch<any>(`/api/public/content/${slug}?includeContent=true`)
  return payload.data ?? payload
}
```

Important:
- The CMS always wraps responses in `{ data: ... }`. Use `payload.data` (list responses include `data` + `nextCursor`).
- The list endpoint returns `content: null` by design; fetch `/api/public/content/:slug?includeContent=true` for full body.

## 4) Blog list page

Create `app/blog/page.tsx`:
```tsx
import { listPosts } from "@/lib/cms"

export default async function BlogIndex() {
  const { data, nextCursor } = await listPosts({
    limit: 10,
    type: "BLOG",
    includeContent: false,
  })

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
            {post.excerpt ? <p>{post.excerpt}</p> : null}
          </li>
        ))}
      </ul>

      {nextCursor ? <a href={`/blog?cursor=${nextCursor}`}>More posts</a> : null}
    </main>
  )
}
```

## 5) Blog post page (SEO + Markdown)

Create `app/blog/[slug]/page.tsx`:
```tsx
import { getPostBySlug } from "@/lib/cms"
import { marked } from "marked"
import sanitizeHtml from "sanitize-html"
import type { Metadata } from "next"

type PageProps = { params: { slug: string } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  const title = post.seoTitle || post.title
  const description = post.seoDescription || post.excerpt || ""

  return {
    title,
    description,
    alternates: post.canonicalUrl ? { canonical: post.canonicalUrl } : undefined,
    openGraph: {
      title,
      description,
      images: post.seoImage ? [post.seoImage] : undefined,
      type: "article",
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)
  const html = sanitizeHtml(marked.parse(post.content || ""))

  return (
    <article className="blog-content">
      {post.seoImage ? <img src={post.seoImage} alt={post.seoTitle || post.title} /> : null}
      <h1>{post.seoTitle || post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
```

## 6) Basic styles

Add to global CSS:
```css
.blog-content h1 { font-size: 2.5rem; margin: 2rem 0 1rem; }
.blog-content h2 { font-size: 2rem; margin: 2rem 0 1rem; }
.blog-content h3 { font-size: 1.5rem; margin: 1.5rem 0 0.75rem; }
.blog-content p { line-height: 1.7; margin: 1rem 0; }
.blog-content a { text-decoration: underline; }
.blog-content ul, .blog-content ol { padding-left: 1.5rem; margin: 1rem 0; }
.blog-content li { margin: 0.4rem 0; }
.blog-content ul { padding-left: 1.5rem; margin: 1rem 0; }
.blog-content pre { background: #0f172a; color: #e2e8f0; padding: 1rem; overflow-x: auto; }
.blog-content blockquote { border-left: 3px solid #94a3b8; padding-left: 1rem; margin: 1.5rem 0; color: #94a3b8; }
.blog-content img { max-width: 100%; height: auto; margin: 1.5rem 0; }
```

Note:
- The CMS preview applies its own typography CSS. On the client site, you must provide typography styles (like above) to avoid "cramped" content.
- This is intentionally minimal so each brand can customize spacing and font sizes.
- Cover images use `seoImage`; inline images are standard Markdown: `![alt](url)`.
- If you use `next/image`, allow the storage domain in `next.config.js` (`images.remotePatterns`).
- **Critical**: Ensure the `content-images` bucket in Supabase Storage is set to **Public**. If it is private, the `seoImage` URLs will block access for external sites.

## 7) Healthcheck (recommended)

Create `app/api/sdcms/health/route.ts`:
```ts
import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = process.env.CMS_BASE_URL || ""
  const apiKey = process.env.CMS_API_KEY || ""

  if (!baseUrl || !apiKey) {
    return NextResponse.json({ ok: false, cmsOk: false, message: "Missing CMS env vars" }, { status: 500 })
  }

  const response = await fetch(`${baseUrl.replace(/\\/$/, "")}/api/public/content?limit=1&includeContent=false`, {
    headers: { "x-api-key": apiKey },
    cache: "no-store",
  })

  return NextResponse.json({
    ok: true,
    cmsOk: response.ok,
    message: response.ok ? "CMS reachable" : "CMS error",
  })
}
```

## 8) Revalidation webhook (recommended)

Create `app/api/sdcms/revalidate/route.ts`:
```ts
import crypto from "crypto"
import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

function verifySignature(secret: string, timestamp: string, body: string, signature: string) {
  const message = `${timestamp}.${body}`
  const expected = crypto.createHmac("sha256", secret).update(message).digest("hex")
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
}

export async function POST(request: Request) {
  const secret = process.env.CMS_WEBHOOK_SECRET || ""
  const timestamp = request.headers.get("x-sdcms-timestamp") || ""
  const signature = request.headers.get("x-sdcms-signature") || ""
  const body = await request.text()

  if (!secret || !timestamp || !signature) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }
  if (!verifySignature(secret, timestamp, body, signature)) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const payload = JSON.parse(body)
  const slug = payload.post?.slug
  const previousSlug = payload.previousSlug

  revalidatePath("/blog")
  if (slug) revalidatePath(`/blog/${slug}`)
  if (previousSlug && previousSlug !== slug) {
    revalidatePath(`/blog/${previousSlug}`)
  }

  return NextResponse.json({ ok: true })
}
```

## 9) Sitemap (SEO)

Create `app/sitemap.ts`:
```ts
import type { MetadataRoute } from "next"
import { listPosts } from "@/lib/cms"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = []
  let cursor: string | undefined

  while (true) {
    const { data, nextCursor } = await listPosts({
      limit: 50,
      type: "BLOG",
      includeContent: false,
      cursor,
    })

    for (const post of data) {
      entries.push({
        url: `https://your-site.com/blog/${post.slug}`,
        lastModified: post.updatedAt,
      })
    }

    if (!nextCursor) break
    cursor = nextCursor
  }

  return entries
}
```

## 10) Minimal checklist
- [ ] `CMS_BASE_URL`, `CMS_API_KEY`, `CMS_WEBHOOK_SECRET` set in environment
- [ ] Blog list + blog post pages added
- [ ] Markdown rendered with sanitization
- [ ] Webhook for revalidation enabled
- [ ] Healthcheck route configured
- [ ] Sitemap configured
