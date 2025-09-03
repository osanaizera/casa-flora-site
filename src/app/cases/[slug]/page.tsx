import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCaseBySlug, cases } from '@/data/cases';
import { notFound } from 'next/navigation';
import HeroFade from '@/components/shared/HeroFade';
import Carousel from '@/components/magazine/Carousel';
import ActiveSectionNav from '@/components/ui/ActiveSectionNav';

type RouteParams = { slug: string };
async function resolveParams(input: RouteParams | Promise<RouteParams>): Promise<RouteParams> {
  // Next.js 15 may pass params as a Promise; support both shapes
  if (typeof (input as any)?.then === 'function') {
    return await (input as Promise<RouteParams>);
  }
  return input as RouteParams;
}

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: RouteParams | Promise<RouteParams> }): Promise<Metadata> {
  const { slug } = await resolveParams(params);
  const item = getCaseBySlug(slug);
  if (!item) return {};
  return {
    title: item.seo?.title ?? `${item.title} | Case | Casa Flora`,
    description: item.seo?.description ?? item.summary,
    openGraph: {
      title: item.seo?.title ?? item.title,
      description: item.seo?.description ?? item.summary,
      images: item.seo?.image ? [{ url: item.seo.image }] : undefined,
      type: 'article'
    }
  };
}

export default async function CaseDetail({ params }: { params: RouteParams | Promise<RouteParams> }) {
  const { slug } = await resolveParams(params);
  const item = getCaseBySlug(slug);
  if (!item) return notFound();

  // Template editorial para o Insólito
  if (slug === 'insolito' && item) {
    return (
      <>
        {/* Hero overlay editorial com logo e frase no centro */}
        <section className="case-hero-wrap">
          <div className="case-hero case-hero--fixed">
            {item.logo && (
              <div className="case-hero__logo" aria-hidden>
                <Image src={item.logo} alt="Logo do projeto" width={160} height={72} style={{ height: 'auto', width: 'auto' }} />
              </div>
            )}
            <div className="case-hero__media">
              <Image src={item.heroImage} alt={item.title} fill className="object-cover" priority sizes="100vw" />
            </div>
            <div className="case-hero__overlay" />
            <div className="case-hero__content">
              <div className="case-hero__content-inner">
                {item.logo && (
                  <Image src={item.logo} alt={`${item.title} logo`} width={360} height={160} className="case-hero__brand-logo" priority />
                )}
                <h1 className="case-hero__title">Da arte da essência à experiência da hospitalidade</h1>
              </div>
              <svg className="case-hero__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 5v14M12 19l-6-6M12 19l6-6" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </section>
        <HeroFade />

        {/* Menu lateral flutuante com realce de sessão ativa */}
        <ActiveSectionNav
          sections={[
            { href: '#sobre', label: 'Sobre' },
            { href: '#desafio', label: 'Desafio' },
            { href: '#abordagem', label: 'Abordagem' },
            { href: '#solucao', label: 'Solução' },
            { href: '#manifesto', label: 'Manifesto' },
            { href: '#galeria', label: 'Galeria' },
          ]}
        />

        {/* Conteúdo editorial recuperado */}
        <article className="case-article" aria-labelledby="case-title">
          <header className="case-section">
            <h1 id="case-title" className="h1">Insólito <strong>Boutique Hotel &amp; Spa</strong></h1>
            <h2 className="h2" style={{ marginTop: 10 }}>Da arte da essência à experiência da hospitalidade</h2>
          </header>

          {/* Carrossel inicial */}
          <section className="case-section" aria-label="Imagens de abertura">
            <div className="case-media">
              <Carousel
                aspect="16/10"
                border={false}
                sizes="(min-width: 1024px) 720px, 92vw"
                fit="cover"
                slides={[
                  { src: '/images/cases/insolito/image.png', alt: 'Insólito 1' },
                  { src: '/images/cases/insolito/image (1).png', alt: 'Insólito 2' },
                  { src: '/images/cases/insolito/image (2).png', alt: 'Insólito 3' },
                  { src: '/images/cases/insolito/image (3).png', alt: 'Insólito 4' },
                  { src: '/images/cases/insolito/image (4).png', alt: 'Insólito 5' },
                ]}
              />
            </div>
          </section>

          {/* Sobre */}
          <section id="sobre" className="case-section dropcap">
            <div className="case-text--narrow">
              <p>O Insólito é um hotel boutique e spa visualmente vibrante, com alma e estética profundamente brasileiras. Localizado à beira-mar, na praia da Ferradura, em Búzios (RJ), ele é reconhecido por sua curadoria artística: cada quarto é inspirado em uma obra de arte, transformando o espaço em uma galeria viva que celebra artistas nacionais.</p>
              <p>É um lugar onde a hospitalidade encontra cultura, e onde cada detalhe tem um significado.</p>
              <p>Como a própria fundadora e criadora da marca resume:</p>
            </div>
            <figure style={{ marginTop: 16 }}>
              <div className="case-media case-media--landscape">
                <Image src={'/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.14.png'} alt="Citação da fundadora" fill style={{ objectFit: 'contain' }} />
              </div>
            </figure>
          </section>

          <hr className="rule" />

          {/* Desafio */}
          <section id="desafio" className="case-section">
            <div className="case-text--narrow">
              <h2 className="case-section__title">O desafio</h2>
              <p>Apesar do potencial único e da força sensorial do espaço, a marca não traduzia, nem no digital nem na experiência do hóspede, toda essa atmosfera rica. A identidade visual carecia de unidade e sofisticação, e o posicionamento não comunicava de forma estratégica o valor do hotel como destino de imersão cultural.</p>
              <p>Havia, também, a necessidade de <strong>resgatar a essência da marca</strong> e traduzir no design o novo conceito, reforçando sua brasilidade e sua singularidade artística.</p>
            </div>
            <div className="case-media" style={{ marginTop: 16 }}>
              <div className="case-modern__gallery">
                {[
                  { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.51.png' },
                  { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.50.00.png' },
                ].map((g, i) => (
                <div key={i} className="case-modern__tile">
                  <Image src={g.src} alt={`Desafio ${i + 1}`} fill className="object-cover" />
                </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="rule" />

          {/* Abordagem */}
          <section id="abordagem" className="case-section">
            <div className="case-text--narrow">
              <h2 className="case-section__title">Nossa abordagem</h2>
            </div>
            <div className="case-columns2">
              <p>A Casa Flora mergulhou no universo do Insólito, explorando sua história, curadoria artística e experiência sensorial. Nosso trabalho incluiu:</p>
              <ul className="case-modern__bullets">
                <li>Avaliação do <strong>brand awareness</strong>, analisando comentários e notas de hóspedes em OTAs;</li>
                <li>Pesquisa qualitativa com stakeholders para entender a visão interna da marca;</li>
                <li><strong>Análise da concorrência e benchmarking</strong>, levantando rankings de audiência em redes sociais e em OTAs;</li>
                <li><strong>Análise de tendências em hotelaria e turismo</strong>, combinada com <strong>SWOT</strong> e estudo do comportamento do consumidor pós-pandemia.</li>
              </ul>
              <p>A partir desses insights, desenvolvemos o <strong>universo da marca</strong>, com definição de arquétipos, conceito, manifesto, posicionamento de mercado e <strong>redesign completo da identidade visual</strong>.</p>
              <p>Na etapa da ativação, definimos tom de voz, editorias de conteúdo, personas, canais de comunicação online e offline, e mapeamos a <strong>jornada do hóspede</strong> do pré-reserva ao pós-estadia.</p>
              <p>Com a <strong>Ativação Âmbar</strong>, estruturamos a consolidação da nova marca, seguindo o funil estratégico: <strong>conectar, conversar, encantar e rentabilizar</strong>, apoiado por um calendário anual de campanhas e ativações on e off-line.</p>
            </div>
          </section>

          <hr className="rule" />

          {/* Solução - Arquétipos */}
          <section id="solucao" className="case-section">
            <div className="case-text--narrow">
              <h2 className="case-section__title">A solução</h2>
            </div>
            <div className="case-text--narrow">
              <h3 className="h3" style={{ marginBottom: 10 }}>Arquétipos da marca</h3>
            </div>
            <div className="case-text--narrow">
              <p>Para traduzir a essência do Insólito, definimos dois arquétipos centrais: <strong>o Mago e o Criativo</strong>. A escolha desses arquétipos reflete diretamente o propósito do hotel e a experiência que ele oferece aos hóspedes.</p>
              <p>O <strong>Mago</strong> representa transformação, inspiração e descoberta. Ele traduz a capacidade do Insólito de encantar e surpreender.</p>
            </div>
            <figure style={{ marginTop: 12 }}>
              <div className="case-media case-media--landscape">
                <Image src={'/images/cases/insolito/Captura de Tela 2025-08-13 às 09.48.54.png'} alt="Arquétipo Mago" fill className="object-cover" />
              </div>
            </figure>
            <div className="case-text--narrow" style={{ marginTop: 12 }}>
              <p>O <strong>Criativo</strong>, por sua vez, expressa originalidade, inventividade e inovação. Ele reflete a estética singular do hotel, a curadoria artística e a proposta de experiência que valoriza a cultura brasileira em sua pluralidade, com leveza e sofisticação.</p>
            </div>
          </section>

          <hr className="rule" />

          {/* Manifesto */}
          <section id="manifesto" className="case-section">
            <div className="case-text--narrow">
              <h2 className="case-section__title">Manifesto</h2>
              <p className="case-modern__body" style={{ maxWidth: '68ch' }}>{item.description}</p>
            </div>
          </section>

          {/* Galeria */}
          <section id="galeria" className="case-section">
            <div className="case-text--narrow">
              <h2 className="case-section__title">Galeria</h2>
            </div>
            <div className="case-media" style={{ marginTop: 16 }}>
              <Carousel slides={(item.gallery || []).map((g, i) => (typeof g === 'string' ? { src: g } : { src: g.src, alt: g.alt }))} />
            </div>
          </section>

          {/* Meta / Notion */}
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

  // Template padrão para outros cases (mantém estrutura existente temporariamente)
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-light mb-8">{item.title}</h1>
      <p className="text-xl mb-12">{item.description}</p>
      {/* Adicionar outros cases aqui com mesmo padrão visual */}
    </div>
  );
}
