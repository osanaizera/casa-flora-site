# CMS Integration Documentation

Complete documentation for integrating SDCMS (Headless CMS) with Next.js applications.

## 📚 Documentation Index

### [Quick Start Guide](./CMS_QUICK_START.md)
**Perfect for:** Getting started quickly  
**Time:** 10 minutes  
Get your blog running with minimal setup.

### [Complete Integration Guide](./CMS_INTEGRATION_GUIDE.md)
**Perfect for:** Comprehensive understanding  
**Time:** 30 minutes read  
Full documentation covering:
- Architecture overview
- Complete API reference
- Step-by-step implementation
- Advanced topics
- Troubleshooting
- Performance optimization
- Security best practices
- Deployment guide

### [Examples & Patterns](./CMS_EXAMPLES.md)
**Perfect for:** Practical implementation  
**Time:** As needed  
Real-world code examples:
- Basic usage patterns
- Advanced implementations
- Error handling strategies
- Testing approaches
- Real API responses

## 🎯 Choose Your Path

### I want to get started ASAP
→ Start with [Quick Start Guide](./CMS_QUICK_START.md)

### I need to understand everything
→ Read the [Complete Integration Guide](./CMS_INTEGRATION_GUIDE.md)

### I need specific examples
→ Browse [Examples & Patterns](./CMS_EXAMPLES.md)

### I have a problem
→ Check [Troubleshooting Section](./CMS_INTEGRATION_GUIDE.md#troubleshooting)

## 🏗️ What is This?

This is a **Headless CMS** integration that follows industry-standard patterns used by:
- Contentful
- Sanity
- Strapi
- Ghost
- Prismic

**Architecture:** API-First / JAMstack  
**Pattern:** Decoupled content management and presentation  
**Technology:** REST API with webhook-based cache invalidation

## ⚡ Quick Reference

### Environment Variables
```bash
CMS_BASE_URL=https://your-cms.vercel.app
CMS_API_KEY=cms_xxxxxxxxxxxxx
CMS_WEBHOOK_SECRET=xxxxxxxxxxxxx
```

### Essential Endpoints
```
GET  /api/public/content                    # List posts
GET  /api/public/content/:slug              # Get single post
POST /api/sdcms/revalidate                  # Webhook (internal)
GET  /api/sdcms/health                      # Health check
```

### Key Concepts
- **Headless CMS**: Content backend separate from presentation
- **ISR**: Incremental Static Regeneration for performance
- **Webhooks**: Real-time cache invalidation
- **Markdown**: Content format with full formatting support

## 📊 Performance

- List posts: ~0.9s
- Get single post: ~1.0s
- Webhook processing: <100ms
- Static pages after first load: <50ms

## 🔒 Security

- Server-side only API access
- HMAC signature verification for webhooks
- HTML sanitization for XSS prevention
- HTTPS-only connections

## 🚀 Features

✅ Full TypeScript support  
✅ SEO optimized (meta tags, sitemap)  
✅ Image optimization ready  
✅ Markdown with syntax highlighting  
✅ Cursor-based pagination  
✅ Real-time updates via webhooks  
✅ Error handling & retry logic  
✅ Health monitoring  

## 📝 Quick Code Examples

### Fetch Posts
```typescript
import { listPosts } from "@/lib/cms"

const { data, nextCursor } = await listPosts({
  limit: 10,
  type: "BLOG",
})
```

### Render Post
```typescript
import { getPostBySlug } from "@/lib/cms"
import { marked } from "marked"

const post = await getPostBySlug("my-post")
const html = marked.parse(post.content || "")
```

### Check Health
```bash
curl https://your-site.com/api/sdcms/health
```

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| 401 Unauthorized | Check `CMS_API_KEY` |
| Images not loading | Configure `next.config.ts` |
| Webhook not working | Verify `CMS_WEBHOOK_SECRET` |
| Slow performance | Enable ISR with `revalidate` |

Full troubleshooting: [Guide](./CMS_INTEGRATION_GUIDE.md#troubleshooting)

## 📦 Dependencies

```json
{
  "dependencies": {
    "marked": "latest",
    "sanitize-html": "latest"
  },
  "devDependencies": {
    "@types/sanitize-html": "latest"
  }
}
```

## 🔗 External Resources

- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Marked.js Documentation](https://marked.js.org/)
- [sanitize-html Options](https://github.com/apostrophecms/sanitize-html)

## 📅 Last Updated

**Version:** 1.0.0  
**Date:** January 28, 2026  
**Status:** Production Ready ✅

---

**Need help?** Check the troubleshooting section or open an issue.
