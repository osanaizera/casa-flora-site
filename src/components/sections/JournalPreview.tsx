'use client';

import Link from 'next/link';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blog-posts';

export default function JournalPreview() {
    // Get the 3 latest posts
    const latestPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <section className="py-24 bg-[var(--color-paper)]">
            <div className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <span className="text-[var(--earth-600)] font-medium tracking-widest uppercase text-sm mb-3 block">
                            Journal
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl text-neutral-900">
                            Insights & Tendências
                        </h2>
                    </div>

                    <Link
                        href="/blog"
                        className="hidden md:inline-flex items-center gap-2 text-neutral-600 hover:text-[var(--earth-600)] transition-colors font-medium group"
                    >
                        Ver todos os artigos
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="transition-transform group-hover:translate-x-1"
                        >
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-neutral-600 hover:text-[var(--earth-600)] transition-colors font-medium"
                    >
                        Ver todos os artigos
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
