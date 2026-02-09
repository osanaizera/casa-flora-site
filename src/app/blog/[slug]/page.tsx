import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeaderModern from "@/components/layout/HeaderModern";
import NewsletterCTA from "@/components/blog/NewsletterCTA";
import { getPostBySlug } from "@/lib/blog";
import { getAllSlugs } from "@/lib/blog";
import { renderMarkdown, extractFirstImage } from "@/lib/markdown";

import "./blog-content.css";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SITE_URL = process.env.SITE_URL || "https://www.casaflora-brand.com.br";

// ─── Static Params for ISR ────────────────────

export async function generateStaticParams() {
  try {
    const slugs = await getAllSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

// ─── SEO Metadata ─────────────────────────────

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: "Artigo não encontrado" };

    const title = post.seoTitle || post.title;
    const description = post.seoDescription || post.excerpt || "";
    const image = post.seoImage || post.image;
    const canonicalUrl =
      post.canonicalUrl || `${SITE_URL}/blog/${slug}`;

    return {
      title,
      description,
      alternates: {
        canonical: canonicalUrl,
      },
      ...(post.robots
        ? {
            robots: {
              index: !post.robots.includes("noindex"),
              follow: !post.robots.includes("nofollow"),
            },
          }
        : {}),
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        type: "article",
        publishedTime: post.date,
        authors: [post.author],
        tags: post.tags,
        images: image
          ? [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: title,
              },
            ]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: image ? [image] : undefined,
      },
    };
  } catch {
    return { title: "Artigo não encontrado" };
  }
}

// ─── Page Component ───────────────────────────

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Extract hero image from content (shown separately above the article)
  const { imageUrl: heroFromContent, contentWithoutImage } =
    extractFirstImage(post.content || "");

  // Render Markdown → HTML using the unified pipeline
  const contentHtml = await renderMarkdown(contentWithoutImage);

  const heroImage = post.seoImage || heroFromContent || post.image;
  const date = post.date;
  const tags = post.tags || [];
  const author = post.author;
  const readTime = post.readTime;

  // Build JSON-LD structured data
  const jsonLd = post.jsonLd || {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    image: heroImage || undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Casa Flora Branding e Design",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/favicon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.canonicalUrl || `${SITE_URL}/blog/${slug}`,
    },
  };

  return (
    <div className="bg-[var(--color-paper)] min-h-screen">
      <HeaderModern />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="pt-32 pb-12 md:pt-40 md:pb-20 container mx-auto px-6 max-w-5xl text-center">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold uppercase tracking-wider text-[var(--earth-600)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-neutral-900 mb-8 leading-[1.1]">
            {post.seoTitle || post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500 font-medium">
            {author && (
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600">
                  {author.charAt(0)}
                </span>
                <span>{author}</span>
              </div>
            )}
            {author && date && (
              <span className="w-1 h-1 bg-neutral-300 rounded-full" />
            )}
            {date && (
              <time dateTime={date}>
                {new Date(date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            )}
            {readTime && (
              <>
                <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                <span>{readTime} de leitura</span>
              </>
            )}
          </div>
        </header>

        {heroImage && heroImage !== "/images/blog-placeholder.svg" && (
          <div className="container mx-auto px-6 max-w-6xl mb-16 md:mb-24">
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt={post.seoTitle || post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        )}

        <div className="container mx-auto px-6 max-w-3xl mb-24">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tags=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full hover:bg-[var(--earth-100)] hover:text-[var(--earth-700)] transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <NewsletterCTA />

      <div className="bg-white border-t border-neutral-200 py-12">
        <div className="container mx-auto px-6 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-[var(--earth-600)] transition-colors font-medium"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar para o Journal
          </Link>
        </div>
      </div>
    </div>
  );
}
