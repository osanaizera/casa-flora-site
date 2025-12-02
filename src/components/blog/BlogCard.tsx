'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/data/blog-posts';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-neutral-800">
                        {post.category}
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3 font-medium">
                        <span>{new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                        <span>{post.readingTime} de leitura</span>
                    </div>

                    <h3 className="text-xl font-display font-medium leading-tight mb-3 text-neutral-900 group-hover:text-[var(--earth-600)] transition-colors">
                        {post.title}
                    </h3>

                    <p className="text-neutral-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center text-[var(--earth-600)] text-sm font-semibold tracking-wide uppercase group-hover:gap-2 transition-all">
                        Ler artigo
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="ml-1 transition-transform group-hover:translate-x-1"
                        >
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </article>
        </Link>
    );
}
