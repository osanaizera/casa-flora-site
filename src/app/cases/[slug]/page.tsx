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
      {/* Hero overlay editorial com logo */}
      <section className="case-hero-wrap">
        <div className="case-hero">
          <div className="case-hero__media">
            <Image src={item.heroImage} alt={item.title} fill className="object-cover" priority sizes="100vw" />
          </div>
          <div className="case-hero__overlay" />
          <div className="case-hero__content">
            <div className="case-hero__content-inner">
              {item.logo && (
                <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  width={320}
                  height={140}
                  className="case-hero__brand-logo"
                  priority
                />
              )}
              <h1 className="case-hero__title">{item.tagline || item.title}</h1>
            </div>
            <svg className="case-hero__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 5v14M12 19l-6-6M12 19l6-6" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Menu discreto fixo para sessões */}
      <nav className="case-menu" aria-label="Sessões do case">
        <a href="#sobre">Sobre</a>
        <a href="#desafio">Desafio</a>
        <a href="#abordagem">Abordagem</a>
        <a href="#solucao">Solução</a>
        <a href="#manifesto">Manifesto</a>
        <a href="#galeria">Galeria</a>
      </nav>

      {/* Artigo vertical (magazine roll) */}
      <article className="case-article" aria-labelledby="case-title">
        <header className="case-section">
          <div className="body-small" style={{ color: 'var(--color-gray-700)' }}>
            {item.location} • {item.segment || item.category} • {item.year}
          </div>
          <h1 id="case-title" className="h1" style={{ marginTop: 8 }}>{item.title}</h1>
          {item.client && (<p className="case-modern__client">Cliente: {item.client}</p>)}
          <p className="body-large" style={{ marginTop: 10, maxWidth: '68ch' }}>{item.summary}</p>
        </header>

        <section id="sobre" className="case-section dropcap">
          <h2 className="case-section__title">Sobre</h2>
          <div className="case-columns2">
            <p>{item.aboutHotel || item.description}</p>
          </div>
        </section>

        <section id="desafio" className="case-section">
          <h2 className="case-section__title">Desafio</h2>
          <div className="case-modern__callout">
            <p>{item.challenge}</p>
          </div>
        </section>

        <section id="abordagem" className="case-section">
          <h2 className="case-section__title">Abordagem</h2>
          <div className="case-columns2">
            {(item.approach || []).map((p, i) => (<p key={i}>{p}</p>))}
          </div>
        </section>

        <section id="solucao" className="case-section">
          <h2 className="case-section__title">Solução</h2>
          <ul className="case-modern__bullets">
            {(item.solution || []).map((s, i) => (<li key={i}>{s}</li>))}
          </ul>
          {item.resultsText && (
            <p className="case-modern__body mt-4">{item.resultsText}</p>
          )}
        </section>

        <section id="manifesto" className="case-section">
          <h2 className="case-section__title">Manifesto</h2>
          <p className="case-modern__body" style={{ maxWidth: '68ch' }}>{item.description}</p>
        </section>

        <section id="galeria" className="case-section">
          <h2 className="case-section__title">Galeria</h2>
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

        <footer className="case-section">
          <div className="case-modern__notion">
            {item.notionUrl ? (
              <Link className="underline" href={item.notionUrl} target="_blank" rel="noopener noreferrer">Referência no Notion</Link>
            ) : null}
          </div>
        </footer>
      </article>
    </>
  );
}
