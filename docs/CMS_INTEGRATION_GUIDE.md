# SDCMS Integration Guide for Next.js

> **Version:** 1.0.0  
> **Last Updated:** January 28, 2026  
> **Architecture:** Headless CMS with REST API  
> **Status:** Production Ready ✅

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Implementation Guide](#implementation-guide)
- [Advanced Topics](#advanced-topics)
- [Troubleshooting](#troubleshooting)
- [Performance Optimization](#performance-optimization)
- [Security Best Practices](#security-best-practices)
- [Deployment](#deployment)

---

## Overview

### What is SDCMS?

SDCMS is a **Headless CMS** (Content Management System) that provides a RESTful API for managing and delivering blog content. It follows the **API-First** architecture pattern, allowing complete decoupling between content management and content presentation.

### Key Features

- ✅ **RESTful API** - Standard HTTP methods with JSON responses
- ✅ **Markdown Support** - Rich text content in Markdown format
- ✅ **SEO Optimized** - Built-in meta tags and canonical URLs
- ✅ **Real-time Updates** - Webhook-based cache invalidation
- ✅ **Type-Safe** - Full TypeScript support
- ✅ **Image Management** - Integrated with Supabase Storage
- ✅ **Cursor-based Pagination** - Efficient for large datasets

### Similar Solutions

This architecture is used by industry-leading platforms:
- **Contentful** - Headless CMS with Content Delivery API
- **Sanity** - API-first content platform
- **Strapi** - Open-source headless CMS
- **Ghost** - Professional publishing with Content API
- **Prismic** - Headless website builder

---

## Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────┐
│                     Content Lifecycle                    │
└─────────────────────────────────────────────────────────┘

1. Editor publishes content in CMS
                ↓
2. CMS stores in database (Supabase)
                ↓
3. Next.js fetches via Content API (SSR/SSG/ISR)
                ↓
4. Page rendered and cached
                ↓
5. Editor updates content → Webhook fired
                ↓
6. Next.js receives webhook → Cache invalidated
                ↓
7. Next request fetches fresh content
```

### Component Interaction

```
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│              │         │              │         │              │
│   SDCMS      │◄────────│   Next.js    │◄────────│    User      │
│   (Backend)  │ API     │   (Frontend) │ HTTP    │   (Browser)  │
│              │─────────►│              │─────────►│              │
└──────────────┘ JSON    └──────────────┘ HTML    └──────────────┘
       │                        │
       │ Webhook               │ Revalidate
       └────────────────────────┘
```

### Technology Stack

**Backend (CMS):**
- Framework: Next.js
- Database: PostgreSQL (Supabase)
- Storage: Supabase Storage
- Hosting: Vercel

**Frontend (Your Site):**
- Framework: Next.js 15+
- Rendering: SSR + ISR
- Markdown: `marked` + `sanitize-html`

---

## Getting Started

### Prerequisites

- Node.js 18+ or later
- Next.js 15+ project
- CMS deployed and accessible via public URL

### Step 1: Environment Configuration

Create or update `.env.local` in your Next.js project root:

```bash
# CMS Connection
CMS_BASE_URL=https://your-cms-domain.vercel.app
CMS_API_KEY=cms_xxxxxxxxxxxxxxxxxxxx

# Webhook Security (Optional but recommended)
CMS_WEBHOOK_SECRET=your_webhook_secret_here
```

**Security Notes:**
- ⚠️ **NEVER** commit `.env.local` to Git
- ⚠️ **NEVER** expose `CMS_API_KEY` in client-side code
- ✅ Use environment variables only in Server Components or API Routes
- ✅ Add `.env.local` to `.gitignore`

### Step 2: Install Dependencies

```bash
pnpm add marked sanitize-html
pnpm add -D @types/sanitize-html
```

**Why these packages?**
- `marked` - Converts Markdown to HTML (fast, secure, extensible)
- `sanitize-html` - Prevents XSS attacks by sanitizing HTML output

### Step 3: Project Structure

Your project should follow this structure:

```
your-nextjs-app/
├── src/
│   ├── lib/
│   │   └── cms.ts                    # CMS client & types
│   ├── app/
│   │   ├── blog/
│   │   │   ├── page.tsx              # Blog list page
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Blog post page
│   │   ├── api/
│   │   │   └── sdcms/
│   │   │       ├── health/
│   │   │       │   └── route.ts      # Health check endpoint
│   │   │       └── revalidate/
│   │   │           └── route.ts      # Webhook handler
│   │   └── sitemap.ts                # Dynamic sitemap
│   └── styles/
│       └── globals.css               # Blog content styles
├── .env.local                        # Environment variables (gitignored)
└── next.config.ts                    # Next.js configuration
```

---

## API Reference

### Base URL

All API requests are made to:
```
https://your-cms-domain.vercel.app/api/public/content
```

### Authentication

All requests require an API key in the header:

```http
x-api-key: cms_your_api_key_here
```

### Endpoints

#### 1. List Content

```http
GET /api/public/content
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `limit` | number | No | 10 | Number of items per page (1-100) |
| `type` | string | No | - | Filter by content type (e.g., "BLOG", "PAGE") |
| `cursor` | string | No | - | Pagination cursor from previous response |
| `includeContent` | boolean | No | false | Include full markdown content |

**Request Example:**

```bash
curl "https://sdcms-web.vercel.app/api/public/content?limit=10&type=BLOG&includeContent=false" \
  -H "x-api-key: cms_your_key"
```

**Response Structure:**

```typescript
{
  data: Array<{
    id: string
    slug: string
    title: string
    excerpt: string | null
    seoTitle: string | null
    seoDescription: string | null
    seoImage: string | null
    canonicalUrl: string | null
    content: string | null        // null unless includeContent=true
    publishedAt: string | null     // ISO 8601 timestamp
    updatedAt: string | null       // ISO 8601 timestamp
  }>
  nextCursor?: string              // Present if more pages available
}
```

**Real Response Example:**

```json
{
  "data": [
    {
      "id": "09a44fba-0fff-45ea-b420-a09ca3a0826a",
      "title": "Design e Experiência: Construindo Relações",
      "slug": "design-experiencia-clientes-premium",
      "excerpt": "Descubra como o design e a experiência...",
      "seoTitle": "Design e Experiência: Fortalecendo Relações",
      "seoDescription": "Aprenda a importância do design...",
      "seoImage": null,
      "canonicalUrl": null,
      "content": null,
      "publishedAt": "2026-01-28T17:01:21.956Z",
      "updatedAt": "2026-01-28T17:01:21.958Z"
    }
  ],
  "nextCursor": "1769619681956|09a44fba-0fff-45ea-b420-a09ca3a0826a"
}
```

**Performance:** ~0.9s for 50 items

#### 2. Get Single Content

```http
GET /api/public/content/:slug
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `includeContent` | boolean | No | false | Include full markdown content |

**Request Example:**

```bash
curl "https://sdcms-web.vercel.app/api/public/content/design-experiencia-clientes-premium?includeContent=true" \
  -H "x-api-key: cms_your_key"
```

**Response Structure:**

```typescript
{
  data: {
    id: string
    slug: string
    title: string
    excerpt: string | null
    seoTitle: string | null
    seoDescription: string | null
    seoImage: string | null
    canonicalUrl: string | null
    content: string                 // Full Markdown content
    publishedAt: string | null
    updatedAt: string | null
  }
}
```

**Content Format:**

The `content` field contains Markdown with:
- Standard Markdown syntax
- Inline images: `![alt](https://...)`
- Headings, lists, links, blockquotes
- Code blocks with syntax highlighting

### Error Responses

#### 401 Unauthorized

```json
{
  "error": "Unauthorized",
  "code": "unauthorized"
}
```

**Cause:** Invalid or missing API key

#### 404 Not Found

```json
{
  "error": "Not found",
  "code": "not_found"
}
```

**Cause:** Content with specified slug doesn't exist

#### 500 Internal Server Error

```json
{
  "error": "Internal server error",
  "code": "internal_error"
}
```

**Cause:** CMS server error (rare)

---

## Implementation Guide

### 1. CMS Client (`lib/cms.ts`)

Create a type-safe client for interacting with the CMS:

```typescript
// lib/cms.ts

/**
 * CMS Post Type Definition
 * Represents a blog post or page from the CMS
 */
export interface CmsPost {
  id: string
  slug: string
  title: string
  excerpt?: string | null
  content?: string | null
  seoTitle?: string | null
  seoDescription?: string | null
  seoImage?: string | null
  canonicalUrl?: string | null
  publishedAt?: string | null
  updatedAt?: string | null
  createdAt?: string | null
  type?: string | null
  category?: string | null
}

/**
 * List API Response Structure
 */
interface ListPostsResponse {
  data: CmsPost[]
  nextCursor?: string
}

/**
 * Parameters for listing posts
 */
interface ListPostsParams {
  limit?: number
  cursor?: string
  type?: string
  includeContent?: boolean
}

// Environment variables
const baseUrl = process.env.CMS_BASE_URL || ""
const apiKey = process.env.CMS_API_KEY || ""

/**
 * Normalize base URL by removing trailing slash
 */
function getBaseUrl(): string {
  return baseUrl.replace(/\/$/, "")
}

/**
 * Generic CMS fetch function with error handling
 * @throws {Error} If request fails or credentials are missing
 */
async function cmsFetch<T>(path: string, init?: RequestInit): Promise<T> {
  if (!baseUrl || !apiKey) {
    throw new Error("Missing CMS_BASE_URL or CMS_API_KEY environment variables")
  }

  const response = await fetch(`${getBaseUrl()}${path}`, {
    ...init,
    headers: {
      "x-api-key": apiKey,
      "content-type": "application/json",
      ...(init?.headers || {}),
    },
    // Disable caching for ISR to work properly
    cache: "no-store",
  })

  if (!response.ok) {
    const body = await response.text().catch(() => "")
    throw new Error(`CMS API error ${response.status}: ${body}`)
  }

  return response.json() as Promise<T>
}

/**
 * List posts with pagination support
 * 
 * @example
 * ```ts
 * const { data, nextCursor } = await listPosts({
 *   limit: 10,
 *   type: "BLOG",
 *   includeContent: false
 * })
 * ```
 */
export async function listPosts({
  limit = 10,
  cursor,
  type = "BLOG",
  includeContent = false,
}: ListPostsParams = {}): Promise<ListPostsResponse> {
  // Return empty result if CMS is not configured
  if (!baseUrl || !apiKey) {
    console.warn("CMS not configured, returning empty result")
    return { data: [], nextCursor: undefined }
  }

  const params = new URLSearchParams()
  params.set("limit", String(limit))
  params.set("type", type)
  params.set("includeContent", String(includeContent))
  if (cursor) params.set("cursor", cursor)

  return cmsFetch<ListPostsResponse>(`/api/public/content?${params.toString()}`)
}

/**
 * Get a single post by slug
 * 
 * @throws {Error} If post not found or API error
 * 
 * @example
 * ```ts
 * const post = await getPostBySlug("my-blog-post")
 * ```
 */
export async function getPostBySlug(slug: string): Promise<CmsPost> {
  const payload = await cmsFetch<{ data: CmsPost }>(
    `/api/public/content/${encodeURIComponent(slug)}?includeContent=true`
  )
  
  // Handle both wrapped and direct responses
  return payload.data ?? (payload as unknown as CmsPost)
}

/**
 * Get all posts (with pagination handling)
 * Useful for sitemap generation
 * 
 * @example
 * ```ts
 * const allPosts = await getAllPosts()
 * ```
 */
export async function getAllPosts(): Promise<CmsPost[]> {
  const allPosts: CmsPost[] = []
  let cursor: string | undefined

  while (true) {
    const { data, nextCursor } = await listPosts({
      limit: 50,
      type: "BLOG",
      includeContent: false,
      cursor,
    })

    allPosts.push(...data)

    if (!nextCursor) break
    cursor = nextCursor
  }

  return allPosts
}
```

### 2. Blog List Page (`app/blog/page.tsx`)

```typescript
// app/blog/page.tsx
import { Metadata } from "next"
import Link from "next/link"
import { listPosts, type CmsPost } from "@/lib/cms"

export const metadata: Metadata = {
  title: "Blog | Your Site",
  description: "Latest articles and insights",
}

interface PageProps {
  searchParams?: Promise<{
    cursor?: string
  }>
}

export default async function BlogPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined
  const cursor = resolvedSearchParams?.cursor

  const { data: posts, nextCursor } = await listPosts({
    limit: 12,
    type: "BLOG",
    includeContent: false,
    cursor,
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {post.seoImage && (
              <img
                src={post.seoImage}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              {post.excerpt && (
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
              )}
              {post.publishedAt && (
                <time className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
                </time>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4">
        {cursor && (
          <Link
            href="/blog"
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            ← First Page
          </Link>
        )}
        {nextCursor && (
          <Link
            href={`/blog?cursor=${nextCursor}`}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Next Page →
          </Link>
        )}
      </div>
    </div>
  )
}
```

### 3. Blog Post Page (`app/blog/[slug]/page.tsx`)

```typescript
// app/blog/[slug]/page.tsx
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { marked } from "marked"
import sanitizeHtml from "sanitize-html"
import { getPostBySlug, type CmsPost } from "@/lib/cms"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = await getPostBySlug(slug)

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
        publishedTime: post.publishedAt || undefined,
        modifiedTime: post.updatedAt || undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: post.seoImage ? [post.seoImage] : undefined,
      },
    }
  } catch {
    return {
      title: "Post Not Found",
    }
  }
}

/**
 * Blog post page component
 */
export default async function BlogPostPage({ params }: PageProps) {
  let post: CmsPost

  try {
    const { slug } = await params
    post = await getPostBySlug(slug)
  } catch {
    notFound()
  }

  // Configure marked for security and features
  marked.setOptions({
    gfm: true,        // GitHub Flavored Markdown
    breaks: true,     // Convert \n to <br>
  })

  // Parse and sanitize HTML
  const html = sanitizeHtml(marked.parse(post.content || "") as string, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h1", "h2"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title", "width", "height"],
    },
  })

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Header */}
      <header className="mb-8">
        {post.seoImage && (
          <img
            src={post.seoImage}
            alt={post.seoTitle || post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {post.seoTitle || post.title}
        </h1>
        {post.publishedAt && (
          <time className="text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
      </header>

      {/* Content */}
      <div
        className="blog-content prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  )
}
```

### 4. Health Check (`app/api/sdcms/health/route.ts`)

```typescript
// app/api/sdcms/health/route.ts
import { NextResponse } from "next/server"

/**
 * Health check endpoint to verify CMS connectivity
 * 
 * @returns JSON with health status
 * 
 * @example
 * GET /api/sdcms/health
 * Response: { ok: true, cmsOk: true, message: "CMS reachable" }
 */
export async function GET() {
  const baseUrl = process.env.CMS_BASE_URL || ""
  const apiKey = process.env.CMS_API_KEY || ""

  // Check if environment variables are configured
  if (!baseUrl || !apiKey) {
    return NextResponse.json(
      {
        ok: false,
        cmsOk: false,
        message: "Missing CMS environment variables",
        details: {
          hasBaseUrl: !!baseUrl,
          hasApiKey: !!apiKey,
        },
      },
      { status: 500 }
    )
  }

  try {
    // Test CMS connectivity with minimal request
    const response = await fetch(
      `${baseUrl.replace(/\/$/, "")}/api/public/content?limit=1&includeContent=false`,
      {
        headers: { "x-api-key": apiKey },
        cache: "no-store",
      }
    )

    const isHealthy = response.ok

    return NextResponse.json(
      {
        ok: true,
        cmsOk: isHealthy,
        message: isHealthy ? "CMS reachable" : "CMS returned error",
        statusCode: response.status,
        timestamp: new Date().toISOString(),
      },
      { status: isHealthy ? 200 : 503 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        cmsOk: false,
        message: "Failed to connect to CMS",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 503 }
    )
  }
}
```

### 5. Webhook Handler (`app/api/sdcms/revalidate/route.ts`)

```typescript
// app/api/sdcms/revalidate/route.ts
import crypto from "crypto"
import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

/**
 * Verify webhook signature for security
 * Implements HMAC SHA-256 signature verification
 */
function verifySignature(
  secret: string,
  timestamp: string,
  body: string,
  signature: string
): boolean {
  const message = `${timestamp}.${body}`
  const expected = crypto.createHmac("sha256", secret).update(message).digest("hex")

  try {
    const signatureBuffer = Buffer.from(signature, "hex")
    const expectedBuffer = Buffer.from(expected, "hex")

    if (signatureBuffer.length !== expectedBuffer.length) {
      return false
    }

    return crypto.timingSafeEqual(signatureBuffer, expectedBuffer)
  } catch {
    return false
  }
}

/**
 * Webhook endpoint for cache revalidation
 * Called by CMS when content is published, updated, or deleted
 * 
 * @security Requires valid HMAC signature
 * 
 * Headers expected:
 * - x-sdcms-timestamp: Unix timestamp
 * - x-sdcms-signature: HMAC SHA-256 signature
 * - x-sdcms-event: Event type (optional)
 * 
 * Body format:
 * {
 *   post: { slug: string, ... },
 *   previousSlug?: string
 * }
 */
export async function POST(request: Request) {
  const secret = process.env.CMS_WEBHOOK_SECRET || ""
  const timestamp = request.headers.get("x-sdcms-timestamp") || ""
  const signature = request.headers.get("x-sdcms-signature") || ""
  const event = request.headers.get("x-sdcms-event") || "unknown"

  // Read body once
  const body = await request.text()

  // Validate required headers
  if (!secret) {
    console.error("[Webhook] CMS_WEBHOOK_SECRET not configured")
    return NextResponse.json(
      { ok: false, error: "Webhook not configured" },
      { status: 500 }
    )
  }

  if (!timestamp || !signature) {
    console.error("[Webhook] Missing timestamp or signature")
    return NextResponse.json(
      { ok: false, error: "Missing required headers" },
      { status: 401 }
    )
  }

  // Verify signature
  if (!verifySignature(secret, timestamp, body, signature)) {
    console.error("[Webhook] Invalid signature")
    return NextResponse.json(
      { ok: false, error: "Invalid signature" },
      { status: 401 }
    )
  }

  // Parse payload
  let payload: { post?: { slug: string }; previousSlug?: string }
  try {
    payload = JSON.parse(body)
  } catch {
    console.error("[Webhook] Invalid JSON payload")
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 }
    )
  }

  const slug = payload.post?.slug
  const previousSlug = payload.previousSlug

  console.log(`[Webhook] Event: ${event}, Slug: ${slug}`)

  // Revalidate paths
  try {
    // Always revalidate blog index
    revalidatePath("/blog")
    console.log("[Webhook] Revalidated /blog")

    // Revalidate current slug
    if (slug) {
      revalidatePath(`/blog/${slug}`)
      console.log(`[Webhook] Revalidated /blog/${slug}`)
    }

    // Revalidate previous slug if changed
    if (previousSlug && previousSlug !== slug) {
      revalidatePath(`/blog/${previousSlug}`)
      console.log(`[Webhook] Revalidated /blog/${previousSlug}`)
    }

    return NextResponse.json({
      ok: true,
      revalidated: ["/blog", slug ? `/blog/${slug}` : null, previousSlug].filter(Boolean),
    })
  } catch (error) {
    console.error("[Webhook] Revalidation error:", error)
    return NextResponse.json(
      { ok: false, error: "Revalidation failed" },
      { status: 500 }
    )
  }
}
```

### 6. Dynamic Sitemap (`app/sitemap.ts`)

```typescript
// app/sitemap.ts
import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/cms"

/**
 * Generate dynamic sitemap including blog posts
 * Automatically updates when new content is published
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://your-site.com"

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ]

  // Dynamic blog posts
  try {
    const posts = await getAllPosts()

    const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt || Date.now()),
      changeFrequency: "monthly",
      priority: 0.6,
    }))

    return [...staticPages, ...blogPages]
  } catch (error) {
    console.error("Sitemap generation error:", error)
    return staticPages
  }
}
```

### 7. Blog Content Styles (`globals.css`)

```css
/* Blog content typography styles */
.blog-content {
  @apply text-gray-800;
}

.blog-content h1 {
  @apply text-4xl font-bold mt-8 mb-4 text-gray-900;
}

.blog-content h2 {
  @apply text-3xl font-bold mt-8 mb-4 text-gray-900;
}

.blog-content h3 {
  @apply text-2xl font-semibold mt-6 mb-3 text-gray-900;
}

.blog-content h4 {
  @apply text-xl font-semibold mt-4 mb-2 text-gray-900;
}

.blog-content p {
  @apply text-base leading-7 my-4;
}

.blog-content a {
  @apply text-blue-600 hover:text-blue-800 underline;
}

.blog-content strong {
  @apply font-semibold text-gray-900;
}

.blog-content em {
  @apply italic;
}

.blog-content ul {
  @apply list-disc list-outside pl-6 my-4 space-y-2;
}

.blog-content ol {
  @apply list-decimal list-outside pl-6 my-4 space-y-2;
}

.blog-content li {
  @apply leading-7;
}

.blog-content blockquote {
  @apply border-l-4 border-gray-300 pl-4 my-4 italic text-gray-700;
}

.blog-content code {
  @apply bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono;
}

.blog-content pre {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6;
}

.blog-content pre code {
  @apply bg-transparent text-gray-100 p-0;
}

.blog-content img {
  @apply max-w-full h-auto rounded-lg my-6;
}

.blog-content hr {
  @apply border-gray-300 my-8;
}

.blog-content table {
  @apply w-full border-collapse my-6;
}

.blog-content th {
  @apply bg-gray-100 border border-gray-300 px-4 py-2 text-left font-semibold;
}

.blog-content td {
  @apply border border-gray-300 px-4 py-2;
}
```

---

## Advanced Topics

### Incremental Static Regeneration (ISR)

For better performance, enable ISR on blog pages:

```typescript
// app/blog/[slug]/page.tsx

export const revalidate = 3600 // Revalidate every hour

// Or per-request basis
export const dynamic = "force-static"
export const dynamicParams = true
```

### Image Optimization

If using `next/image`, configure remote patterns:

```typescript
// next.config.ts
import type { NextConfig } from "next"

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plqkfyjzulvdztmasyft.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
}

export default config
```

### Error Handling with Retry Logic

```typescript
// lib/cms.ts

async function cmsFetchWithRetry<T>(
  path: string,
  init?: RequestInit,
  maxRetries = 3
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await cmsFetch<T>(path, init)
    } catch (error) {
      if (attempt === maxRetries) throw error
      
      // Exponential backoff: 1s, 2s, 4s
      const delay = 1000 * Math.pow(2, attempt - 1)
      await new Promise((resolve) => setTimeout(resolve, delay))
      
      console.warn(`Retry ${attempt}/${maxRetries} for ${path}`)
    }
  }
  throw new Error("Max retries exceeded")
}
```

### TypeScript Strict Mode

For maximum type safety:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Custom Markdown Renderer

For advanced markdown features:

```typescript
import { marked } from "marked"

// Custom renderer
const renderer = new marked.Renderer()

// Custom heading with anchor links
renderer.heading = ({ text, depth }) => {
  const slug = text.toLowerCase().replace(/[^\w]+/g, "-")
  return `
    <h${depth} id="${slug}">
      <a href="#${slug}" class="heading-anchor">${text}</a>
    </h${depth}>
  `
}

marked.use({ renderer })
```

---

## Troubleshooting

### Common Issues

#### 1. "CMS error 401: Unauthorized"

**Cause:** Invalid or missing API key

**Solutions:**
- Verify `CMS_API_KEY` in `.env.local`
- Check if key has been revoked in CMS admin
- Ensure no extra spaces in the key
- Restart dev server after updating env vars

```bash
# Test API key
curl -s "https://your-cms.vercel.app/api/public/content?limit=1" \
  -H "x-api-key: your_key" \
  -w "\nStatus: %{http_code}\n"
```

#### 2. "Cannot read properties of undefined (reading 'map')"

**Cause:** API response structure mismatch

**Solution:** Verify `data` field exists in response

```typescript
// Add safety check
const { data = [], nextCursor } = await listPosts({ ... })
```

#### 3. Images Not Loading

**Causes:**
- Supabase bucket is private
- CORS not configured
- Domain not allowed in Next.js

**Solutions:**

1. Make bucket public in Supabase:
   ```sql
   -- In Supabase SQL Editor
   UPDATE storage.buckets 
   SET public = true 
   WHERE name = 'content-images';
   ```

2. Configure CORS in Supabase Storage settings

3. Add domain to `next.config.ts` (shown above)

#### 4. Webhook Not Working

**Debug checklist:**
- [ ] `CMS_WEBHOOK_SECRET` matches in both CMS and Next.js
- [ ] Webhook URL is correct in CMS settings
- [ ] Endpoint is publicly accessible (not localhost)
- [ ] Check webhook logs in CMS admin
- [ ] Test manually:

```bash
# Generate signature (requires secret)
echo -n "1234567890.{\"post\":{\"slug\":\"test\"}}" | \
  openssl dgst -sha256 -hmac "your_secret" -hex

# Send webhook
curl -X POST https://your-site.com/api/sdcms/revalidate \
  -H "x-sdcms-timestamp: 1234567890" \
  -H "x-sdcms-signature: generated_signature" \
  -H "Content-Type: application/json" \
  -d '{"post":{"slug":"test"}}'
```

#### 5. Slow Page Load

**Causes:**
- API latency
- Large content payloads
- No caching strategy

**Solutions:**

1. Enable ISR:
```typescript
export const revalidate = 3600
```

2. Use `includeContent: false` for listings

3. Implement request caching:
```typescript
const response = await fetch(url, {
  next: { revalidate: 3600 }
})
```

#### 6. TypeScript Errors

**Common fix:**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
pnpm install

# Restart TypeScript server in VS Code
# Cmd/Ctrl + Shift + P > "TypeScript: Restart TS Server"
```

### Debug Mode

Enable detailed logging:

```typescript
// lib/cms.ts
const DEBUG = process.env.NODE_ENV === "development"

async function cmsFetch<T>(path: string, init?: RequestInit): Promise<T> {
  if (DEBUG) {
    console.log(`[CMS] Fetching: ${path}`)
    console.time(`[CMS] ${path}`)
  }

  const response = await fetch(`${getBaseUrl()}${path}`, { ...init })

  if (DEBUG) {
    console.timeEnd(`[CMS] ${path}`)
    console.log(`[CMS] Status: ${response.status}`)
  }

  return response.json()
}
```

### Health Check Monitoring

Monitor CMS health:

```typescript
// app/api/cron/health/route.ts
export async function GET() {
  const health = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sdcms/health`)
  const data = await health.json()

  if (!data.cmsOk) {
    // Send alert (e.g., to Slack, Discord, email)
    await sendAlert("CMS is down!", data)
  }

  return Response.json(data)
}
```

---

## Performance Optimization

### Metrics

Based on real-world testing with current CMS:

| Operation | Time | Description |
|-----------|------|-------------|
| List 10 posts | ~0.9s | Without content |
| List 50 posts | ~0.9s | Pagination efficient |
| Get single post | ~1.0s | With full content |
| Webhook processing | <100ms | Cache invalidation |

### Optimization Strategies

#### 1. Parallel Requests

```typescript
// Fetch multiple posts in parallel
const slugs = ["post-1", "post-2", "post-3"]
const posts = await Promise.all(
  slugs.map((slug) => getPostBySlug(slug))
)
```

#### 2. Request Deduplication

Next.js automatically deduplicates identical `fetch` requests during SSR:

```typescript
// These two calls will only make ONE request
const post1 = await getPostBySlug("my-slug")
const post2 = await getPostBySlug("my-slug") // Cached
```

#### 3. Selective Field Loading

```typescript
// Only load excerpts for listing
await listPosts({ includeContent: false })

// Load full content only when needed
await getPostBySlug(slug) // includeContent: true
```

#### 4. Static Generation for Popular Posts

```typescript
// app/blog/[slug]/page.tsx

export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  // Pre-render top 10 most popular posts
  return posts
    .slice(0, 10)
    .map((post) => ({
      slug: post.slug,
    }))
}
```

#### 5. Edge Caching (Vercel)

```typescript
export const runtime = "edge" // Deploy to edge
export const revalidate = 3600 // Cache for 1 hour
```

### Bundle Size Optimization

```bash
# Analyze bundle
npm run build
# Check .next/analyze/ output

# Reduce marked.js size
import { marked } from "marked/lib/marked.esm.js"

# Tree-shake sanitize-html
import sanitize from "sanitize-html/dist/sanitize-html.js"
```

---

## Security Best Practices

### 1. Environment Variables

```bash
# ✅ Good - Server-only
CMS_API_KEY=cms_xxxxx

# ❌ Bad - Exposed to browser
NEXT_PUBLIC_CMS_API_KEY=cms_xxxxx
```

### 2. Content Sanitization

**Always sanitize** user-generated content:

```typescript
import sanitizeHtml from "sanitize-html"

const clean = sanitizeHtml(markdown, {
  allowedTags: [
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "a", "ul", "ol", "li",
    "strong", "em", "code", "pre",
    "blockquote", "img"
  ],
  allowedAttributes: {
    a: ["href", "title", "target", "rel"],
    img: ["src", "alt", "title"],
  },
  allowedSchemes: ["http", "https", "mailto"],
})
```

### 3. CSRF Protection

Webhook endpoint is protected by HMAC signature verification:

```typescript
function verifySignature(secret: string, timestamp: string, body: string, signature: string) {
  const message = `${timestamp}.${body}`
  const expected = crypto.createHmac("sha256", secret).update(message).digest("hex")
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
}
```

### 4. Rate Limiting

Implement rate limiting for public endpoints:

```typescript
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
})

export async function GET(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "127.0.0.1"
  const { success } = await ratelimit.limit(ip)

  if (!success) {
    return new Response("Too Many Requests", { status: 429 })
  }

  // Continue with request...
}
```

### 5. HTTPS Only

Ensure all API calls use HTTPS:

```typescript
const baseUrl = process.env.CMS_BASE_URL!

if (!baseUrl.startsWith("https://")) {
  throw new Error("CMS_BASE_URL must use HTTPS")
}
```

---

## Deployment

### Vercel Deployment

1. **Push to Git:**
```bash
git add .
git commit -m "Add CMS integration"
git push origin main
```

2. **Configure Environment Variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add `CMS_BASE_URL`
   - Add `CMS_API_KEY`
   - Add `CMS_WEBHOOK_SECRET`

3. **Configure Webhook in CMS:**
   - Webhook URL: `https://your-site.vercel.app/api/sdcms/revalidate`
   - Events: `content.published`, `content.updated`, `content.deleted`

4. **Deploy:**
```bash
vercel --prod
```

### Environment-Specific Configuration

```bash
# .env.local (development)
CMS_BASE_URL=http://localhost:3000

# .env.production (Vercel)
CMS_BASE_URL=https://your-cms.vercel.app
```

### Deployment Checklist

- [ ] Environment variables configured in Vercel
- [ ] Webhook URL configured in CMS
- [ ] Health check endpoint responding
- [ ] Test webhook manually
- [ ] Verify sitemap generation
- [ ] Check image loading
- [ ] Test ISR revalidation
- [ ] Monitor error logs
- [ ] Set up uptime monitoring

### Monitoring

```typescript
// Add logging for production
if (process.env.NODE_ENV === "production") {
  console.log("[CMS] Fetched blog posts:", data.length)
}
```

Use monitoring tools:
- Vercel Analytics
- Sentry for error tracking
- LogRocket for session replay

---

## Checklist

### Initial Setup
- [ ] Install dependencies (`marked`, `sanitize-html`)
- [ ] Create `lib/cms.ts` with type definitions
- [ ] Configure environment variables
- [ ] Add blog content styles to CSS

### Core Features
- [ ] Blog list page (`app/blog/page.tsx`)
- [ ] Blog post page (`app/blog/[slug]/page.tsx`)
- [ ] Dynamic sitemap (`app/sitemap.ts`)
- [ ] Health check endpoint
- [ ] Webhook handler

### Testing
- [ ] Test blog list loads correctly
- [ ] Test single post loads with content
- [ ] Test pagination works
- [ ] Test 404 for invalid slug
- [ ] Test health check endpoint
- [ ] Test webhook manually

### Production
- [ ] Configure Vercel environment variables
- [ ] Set up webhook in CMS admin
- [ ] Enable ISR for performance
- [ ] Configure image domains
- [ ] Test webhook triggers revalidation
- [ ] Monitor CMS health

---

## Additional Resources

### Documentation
- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Next.js Caching](https://nextjs.org/docs/app/building-your-application/caching)
- [Marked.js Documentation](https://marked.js.org/)
- [sanitize-html Options](https://github.com/apostrophecms/sanitize-html#what-are-the-default-options)

### Tools
- [Postman](https://www.postman.com/) - API testing
- [ngrok](https://ngrok.com/) - Local webhook testing
- [Webhook.site](https://webhook.site/) - Webhook debugging

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## License

This documentation is provided as-is for integration purposes.

---

**Document Version:** 1.0.0  
**Last Updated:** January 28, 2026  
**Maintainer:** Casa Flora Development Team
