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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {post.image && post.image !== "/images/blog-placeholder.svg" ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                    <span className="text-neutral-400 text-sm">
                      Sem imagem
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5">
                {post.tags.length > 0 && (
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[var(--earth-600)] mb-2">
                    {post.tags[0]}
                  </span>
                )}

                <h3 className="font-display text-lg font-medium text-neutral-900 leading-snug mb-2 group-hover:text-[var(--earth-700)] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                )}

                <div className="mt-3 flex items-center gap-2 text-xs text-neutral-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                  <span>{post.readTime} de leitura</span>
                </div>
              </div>
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
