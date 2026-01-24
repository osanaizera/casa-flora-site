import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard, { type BlogCardPost } from "@/components/blog/BlogCard";
import NewsletterCTA from "@/components/blog/NewsletterCTA";
import HeaderModern from "@/components/layout/HeaderModern";
import { listPosts, type CmsPost } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Journal | Casa Flora",
  description: "Insights sobre hospitalidade, design sensorial e arquitetura de marca para hotéis boutique e investidores visionários.",
};

type PageProps = {
  searchParams?: Promise<{
    cursor?: string | string[];
  }>;
};

function mapPostToCard(post: CmsPost): BlogCardPost {
  const imageUrl =
    post.seoImage ||
    null;

  const date =
    post.updatedAt ||
    post.publishedAt ||
    post.createdAt ||
    null;

  const category =
    post.category ||
    post.type ||
    null;

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    imageUrl,
    date,
    category,
  };
}

export default async function BlogPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const cursor = Array.isArray(resolvedSearchParams?.cursor)
    ? resolvedSearchParams?.cursor[0]
    : resolvedSearchParams?.cursor;

  const { data, nextCursor } = await listPosts({
    limit: 10,
    type: "BLOG",
    includeContent: false,
    cursor,
  });

  const posts = data.map(mapPostToCard);
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="bg-[var(--color-paper)] min-h-screen">
      <HeaderModern />

      <BlogHeader />

      <main className="container mx-auto px-6 pb-24">
        {featuredPost ? (
          <section className="mb-24">
            <h2 className="sr-only">Destaque</h2>
            <div className="group relative grid md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-8 border border-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="md:col-span-7 relative aspect-[16/9] md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden">
                {featuredPost.imageUrl ? (
                  <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <Image
                      src={featuredPost.imageUrl}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--earth-200)] via-white to-[var(--earth-100)]" />
                )}
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="mb-6">
                  {featuredPost.category ? (
                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--earth-200)]/30 text-[var(--earth-600)] text-xs font-semibold uppercase tracking-wider mb-4">
                      {featuredPost.category}
                    </span>
                  ) : null}
                  <h3 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-4 group-hover:text-[var(--earth-600)] transition-colors">
                    <a href={`/blog/${featuredPost.slug}`} className="before:absolute before:inset-0">
                      {featuredPost.title}
                    </a>
                  </h3>
                  {featuredPost.excerpt ? (
                    <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  ) : null}
                  {featuredPost.date ? (
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span>
                        {new Date(featuredPost.date).toLocaleDateString("pt-BR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="mb-24">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200 text-neutral-600">
              Nenhum artigo publicado ainda.
            </div>
          </section>
        )}

        {regularPosts.length ? (
          <section className="mb-24">
            <div className="flex items-end justify-between mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-neutral-900">Últimos Artigos</h2>
              <div className="hidden md:flex gap-2">
                {/* Filter buttons could go here */}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        ) : null}

        {nextCursor ? (
          <div className="flex justify-center">
            <Link
              href={`/blog?cursor=${nextCursor}`}
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-[var(--earth-600)] transition-colors font-medium"
            >
              Mais posts
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        ) : null}
      </main>

      <NewsletterCTA />
    </div>
  );
}
