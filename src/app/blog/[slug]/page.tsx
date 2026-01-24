import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import HeaderModern from "@/components/layout/HeaderModern";
import NewsletterCTA from "@/components/blog/NewsletterCTA";
import { getPostBySlug, type CmsPost } from "@/lib/cms";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

function getPostImage(post: CmsPost) {
    return (
        post.seoImage ||
        null
    );
}

function getPostDate(post: CmsPost) {
    return (
        post.publishedAt ||
        post.updatedAt ||
        post.createdAt ||
        null
    );
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    try {
        const { slug } = await params;
        const post = await getPostBySlug(slug);
        const title = post.seoTitle || post.title;
        const description = post.seoDescription || post.excerpt || "";
        const image = getPostImage(post);

        return {
            title,
            description,
            alternates: post.canonicalUrl ? { canonical: post.canonicalUrl } : undefined,
            openGraph: {
                title,
                description,
                images: image ? [image] : undefined,
                type: "article",
            },
        };
    } catch {
        return {
            title: "Artigo não encontrado",
        };
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    let post: CmsPost | null = null;
    try {
        const { slug } = await params;
        post = await getPostBySlug(slug);
    } catch {
        post = null;
    }
    if (!post) {
        notFound();
    }

    const html = sanitizeHtml(marked.parse(post.content || "") as string);
    const image = getPostImage(post);
    const date = getPostDate(post);
    const category =
        post.category ||
        post.type ||
        null;
    const author = (post as { author?: string }).author || null;
    const tags = Array.isArray((post as { tags?: string[] }).tags)
        ? (post as { tags?: string[] }).tags ?? []
        : [];

    return (
        <div className="bg-[var(--color-paper)] min-h-screen">
            <HeaderModern />

            <article>
                <header className="pt-32 pb-12 md:pt-40 md:pb-20 container mx-auto px-6 max-w-5xl text-center">
                    {category ? (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold uppercase tracking-wider text-[var(--earth-600)] mb-8">
                            {category}
                        </div>
                    ) : null}
                    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-neutral-900 mb-8 leading-[1.1]">
                        {post.seoTitle || post.title}
                    </h1>
                    {(author || date) ? (
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500 font-medium">
                            {author ? (
                                <div className="flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600">
                                        {author.charAt(0)}
                                    </span>
                                    <span>{author}</span>
                                </div>
                            ) : null}
                            {author && date ? (
                                <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                            ) : null}
                            {date ? (
                                <time dateTime={date}>
                                    {new Date(date).toLocaleDateString("pt-BR", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </time>
                            ) : null}
                        </div>
                    ) : null}
                </header>

                {image ? (
                    <div className="container mx-auto px-6 max-w-6xl mb-16 md:mb-24">
                        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={image}
                                alt={post.seoTitle || post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                ) : null}

                <div className="container mx-auto px-6 max-w-3xl mb-24">
                    <div
                        className="blog-content prose prose-lg prose-neutral prose-headings:font-display prose-headings:font-medium prose-a:text-[var(--earth-600)] hover:prose-a:text-[var(--earth-400)] prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {tags.length ? (
                        <div className="mt-16 pt-8 border-t border-neutral-200">
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </article>

            <NewsletterCTA />

            <div className="bg-white border-t border-neutral-200 py-12">
                <div className="container mx-auto px-6 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-500 hover:text-[var(--earth-600)] transition-colors font-medium">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Voltar para o Journal
                    </Link>
                </div>
            </div>
        </div>
    );
}
