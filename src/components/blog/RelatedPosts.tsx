import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-neutral-50 border-t border-neutral-200 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl font-medium text-neutral-900 mb-10 text-center">
          Leia também
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block h-full"
            >
              <article className="blog-card">
                {/* Background image */}
                <div className="blog-card__bg">
                  {post.image &&
                  post.image !== "/images/blog-placeholder.svg" ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900" />
                  )}
                </div>

                {/* Overlay */}
                <div className="blog-card__overlay">
                  <div className="blog-card__top">
                    {post.tags.length > 0 && (
                      <span className="blog-card__tag">{post.tags[0]}</span>
                    )}
                  </div>

                  <div className="blog-card__content">
                    <span className="blog-card__date">
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                      {" · "}
                      {post.readTime} de leitura
                    </span>

                    <h3 className="blog-card__title">{post.title}</h3>

                    {post.excerpt && (
                      <p className="blog-card__excerpt">{post.excerpt}</p>
                    )}

                    <div className="blog-card__cta">
                      Ler artigo
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--earth-600)] hover:text-[var(--earth-700)] transition-colors"
          >
            Ver todos os artigos
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
