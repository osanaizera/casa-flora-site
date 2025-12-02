import { Metadata } from 'next';
import Image from 'next/image';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogCard from '@/components/blog/BlogCard';
import NewsletterCTA from '@/components/blog/NewsletterCTA';
import { blogPosts } from '@/data/blog-posts';
import HeaderModern from '@/components/layout/HeaderModern';

export const metadata: Metadata = {
  title: 'Journal | Casa Flora',
  description: 'Insights sobre hospitalidade, design sensorial e arquitetura de marca para hotéis boutique e investidores visionários.',
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Featured post is the first one
  const featuredPost = sortedPosts[0];
  const regularPosts = sortedPosts.slice(1);

  return (
    <div className="bg-[var(--color-paper)] min-h-screen">
      <HeaderModern />

      <BlogHeader />

      <main className="container mx-auto px-6 pb-24">
        {/* Featured Post */}
        <section className="mb-24">
          <h2 className="sr-only">Destaque</h2>
          <div className="group relative grid md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-8 border border-neutral-200 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="md:col-span-7 relative aspect-[16/9] md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--earth-200)]/30 text-[var(--earth-600)] text-xs font-semibold uppercase tracking-wider mb-4">
                  {featuredPost.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-medium leading-tight mb-4 group-hover:text-[var(--earth-600)] transition-colors">
                  <a href={`/blog/${featuredPost.slug}`} className="before:absolute before:inset-0">
                    {featuredPost.title}
                  </a>
                </h3>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <span className="font-medium text-neutral-900">{featuredPost.author}</span>
                  <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                  <span>{new Date(featuredPost.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Post Grid */}
        <section className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-neutral-900">Últimos Artigos</h2>
            <div className="hidden md:flex gap-2">
              {/* Filter buttons could go here */}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </main>

      <NewsletterCTA />
    </div>
  );
}