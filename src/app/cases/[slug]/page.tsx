import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCaseBySlug, cases } from '@/data/cases';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return {};
  return {
    title: item.seo?.title ?? `${item.title} | Case | Casa Flora` ,
    description: item.seo?.description ?? item.summary,
    openGraph: {
      title: item.seo?.title ?? item.title,
      description: item.seo?.description ?? item.summary,
      images: item.seo?.image ? [{ url: item.seo.image }] : undefined,
      type: 'article'
    }
  };
}

export default async function CaseDetail({ params }: Props) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return notFound();

  return (
    <>
      {/* Hero overlay editorial */}
      <section className="case-hero-wrap">
        <div className="case-hero">
          <div className="case-hero__media">
            <Image src={item.heroImage} alt={item.title} fill className="object-cover" priority sizes="100vw" />
          </div>
          <div className="case-hero__overlay" />
          <div className="case-hero__content">
            <h1 className="case-hero__title">{item.tagline || item.title}</h1>
            <div className="case-hero__scroll">rolar</div>
          </div>
        </div>
      </section>

      <article className="min-h-screen case-modern" aria-labelledby="case-title">
      <div className="grid lg:grid-cols-[460px_1fr] xl:grid-cols-[520px_1fr] 2xl:grid-cols-[600px_1fr] min-h-screen">
        {/* Coluna esquerda (sticky) — composição artística */}
        <aside className="case-modern__aside relative border-r border-[var(--color-gray-200)]">
          <div className="sticky top-0 h-screen flex flex-col">
            {/* Fundo com acento sutil */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[rgba(225,29,72,0.06)] blur-3xl" />
              <div className="absolute bottom-10 -right-10 w-64 h-64 rounded-full bg-[rgba(20,83,45,0.06)] blur-3xl" />
            </div>

            <div className="case-modern__aside-inner px-8 pt-28 pb-6">
              <div className="case-modern__meta">
                <span>{item.location}</span>
                {item.segment && (<><span>•</span><span>{item.segment}</span></>)}
                {(item.tagline || item.servicePack) && (<><span>•</span><span>{item.tagline || item.servicePack}</span></>)}
                <span>•</span>
                <span>{item.year}</span>
              </div>
              <h1 id="case-title" className="case-modern__title">{item.title}</h1>
              {item.client && (
                <p className="case-modern__client">Cliente: {item.client}</p>
              )}
              <p className="case-modern__lead">{item.summary}</p>

              <nav className="case-modern__toc" aria-label="Sumário do case">
                <a href="#sobre">Sobre</a>
                <a href="#desafio">Desafio</a>
                <a href="#abordagem">Abordagem</a>
                <a href="#solucao">Solução</a>
                <a href="#galeria">Galeria</a>
              </nav>
            </div>

            <div className="mt-auto px-8 pb-8">
              <h3 className="case-modern__aside-sub">Resultados</h3>
              <ul className="case-modern__aside-list">
                {item.results.map((r, i) => (
                  <li key={i}>• {r}</li>
                ))}
              </ul>
              {item.notionUrl && (
                <p className="case-modern__notion">
                  <Link className="underline" href={item.notionUrl} target="_blank" rel="noopener noreferrer">Referência do projeto no Notion</Link>
                </p>
              )}
            </div>
          </div>
        </aside>

        {/* Coluna direita (conteúdo visual) */}
        <main className="bg-[var(--color-paper)]">

          <section id="sobre" className="case-modern__section">
            <h2 className="case-modern__section-title">Sobre o hotel</h2>
            <p className="case-modern__body">{item.aboutHotel || item.description}</p>
          </section>

          <section id="desafio" className="case-modern__section">
            <h2 className="case-modern__section-title">O desafio</h2>
            <div className="case-modern__callout">
              <p>{item.challenge}</p>
            </div>
          </section>

          <section id="abordagem" className="case-modern__section">
            <h2 className="case-modern__section-title">Nossa abordagem</h2>
            <div className="case-modern__list">
              {(item.approach || []).map((p, i) => (<p key={i}>{p}</p>))}
            </div>
          </section>

          <section id="solucao" className="case-modern__section">
            <h2 className="case-modern__section-title">A solução</h2>
            <ul className="case-modern__bullets">
              {(item.solution || []).map((s, i) => (<li key={i}>{s}</li>))}
            </ul>
            {item.resultsText && (
              <p className="case-modern__body mt-4">{item.resultsText}</p>
            )}
          </section>

          <section id="galeria" className="case-modern__section pb-16">
            <h2 className="case-modern__section-title">Galeria Visual</h2>
            <div className="case-modern__gallery">
              {item.gallery.map((g, i) => {
                const obj = typeof g === 'string' ? { src: g } : g;
                const span = obj.span || 'normal';
                const cls = span === 'wide' ? 'case-modern__tile case-modern__tile--wide' : span === 'tall' ? 'case-modern__tile case-modern__tile--tall' : 'case-modern__tile';
                return (
                  <div key={i} className={cls}>
                    <Image src={obj.src} alt={obj.alt || `${item.title} ${i + 1}`} fill className="object-cover" sizes="(min-width:1280px) 33vw, (min-width:640px) 50vw, 100vw" />
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </article>
    </>
  );
}
