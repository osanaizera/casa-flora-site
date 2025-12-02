import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import HeaderModern from '@/components/layout/HeaderModern';
import NewsletterCTA from '@/components/blog/NewsletterCTA';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Artigo não encontrado',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-[var(--color-paper)] min-h-screen">
            <HeaderModern />

            <article>
                {/* Hero Header */}
                <header className="pt-32 pb-12 md:pt-40 md:pb-20 container mx-auto px-6 max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold uppercase tracking-wider text-[var(--earth-600)] mb-8">
                        {post.category}
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-neutral-900 mb-8 leading-[1.1]">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-sm text-neutral-500 font-medium">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-600">
                                {post.author.charAt(0)}
                            </span>
                            <span>{post.author}</span>
                        </div>
                        <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </time>
                        <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                        <span>{post.readingTime} de leitura</span>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="container mx-auto px-6 max-w-6xl mb-16 md:mb-24">
                    <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 max-w-3xl mb-24">
                    <div
                        className="prose prose-lg prose-neutral prose-headings:font-display prose-headings:font-medium prose-a:text-[var(--earth-600)] hover:prose-a:text-[var(--earth-400)] prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div className="mt-16 pt-8 border-t border-neutral-200">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            <NewsletterCTA />

            {/* Navigation Footer */}
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
