import Image from "next/image";
import Link from "next/link";

export type BlogCardPost = {
    id: string;
    slug: string;
    title: string;
    excerpt?: string | null;
    imageUrl?: string | null;
    date?: string | null;
    category?: string | null;
};

interface BlogCardProps {
    post: BlogCardPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    const formattedDate = post.date
        ? new Date(post.date).toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })
        : null;

    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <article className="blog-card">
                {/* Background image */}
                <div className="blog-card__bg">
                    {post.imageUrl ? (
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900" />
                    )}
                </div>

                {/* Overlay */}
                <div className="blog-card__overlay">
                    {/* Top: Category tag */}
                    <div className="blog-card__top">
                        {post.category && (
                            <span className="blog-card__tag">
                                {post.category}
                            </span>
                        )}
                    </div>

                    {/* Bottom: Content */}
                    <div className="blog-card__content">
                        {formattedDate && (
                            <span className="blog-card__date">{formattedDate}</span>
                        )}

                        <h3 className="blog-card__title">
                            {post.title}
                        </h3>

                        {post.excerpt && (
                            <p className="blog-card__excerpt">
                                {post.excerpt}
                            </p>
                        )}

                        <div className="blog-card__cta">
                            Ler artigo
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
