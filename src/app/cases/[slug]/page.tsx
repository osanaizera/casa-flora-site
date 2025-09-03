import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCaseBySlug, cases } from '@/data/cases';
import { notFound } from 'next/navigation';
import Carousel from '@/components/magazine/Carousel';
import ActiveSectionNav from '@/components/ui/ActiveSectionNav';

type RouteParams = { slug: string };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }): Promise<Metadata> {
  const { slug } = await params;
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

export default async function CaseDetail({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return notFound();

  // Template editorial para o Insólito
  if (slug === 'insolito' && item) {
    return (
      <>
        {/* Hero full-screen estático (sem cortina, sem logo no canto) */}
        <section className="case-hero-wrap">
          <div className="case-hero">
            <div className="case-hero__media">
              <Image src={item.heroImage} alt={item.title} fill className="object-cover" priority sizes="100vw" />
            </div>
            <div className="case-hero__overlay" />
            <div className="case-hero__content">
              <div className="case-hero__content-inner">
                {item.logo && (
                  <Image src={item.logo} alt={`${item.title} logo`} width={320} height={140} className="case-hero__brand-logo" priority />
                )}
                <h1 className="case-hero__title">DA ARTE DA ESSÊNCIA À EXPERIÊNCIA DA HOSPITALIDADE</h1>
              </div>
              <svg className="case-hero__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 5v14M12 19l-6-6M12 19l6-6" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </section>

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

        {/* Seções em tela cheia no estilo da home */}

        {/* Sobre */}
        <section id="sobre" className="case-screen case-screen--spacious case-screen--compact">
          <div className="case-screen__container">
            <div className="case-grid case-grid--divided case-grid--left7">
              <div className="case-grid__left">
                <div className="case-screen__content">
                  <div className="case-eyebrow">SOBRE</div>
                  <h2 className="case-screen__title">Descubra o Insólito Boutique Hotel &amp; Spa</h2>
                  <div className="case-screen__badges">
                    {item.category && (<div className="services-modern__glass-badge">{item.category}</div>)}
                    {item.service && (<div className="services-modern__glass-badge">{item.service}</div>)}
                    {item.year && (<div className="services-modern__glass-badge">{item.year}</div>)}
                  </div>
                  <div className="case-text-narrow">
                    <p className="case-screen__lead">O Insólito é um hotel boutique e spa visualmente vibrante, com alma e estética profundamente brasileiras. Localizado à beira-mar, na praia da Ferradura, em Búzios (RJ), ele é reconhecido por sua curadoria artística: cada quarto é inspirado em uma obra de arte, transformando o espaço em uma galeria viva que celebra artistas nacionais.</p>
                    <p className="case-screen__body">É um lugar onde a hospitalidade encontra cultura, e onde cada detalhe tem um significado. Como a própria fundadora e criadora da marca resume:</p>
                  </div>
                </div>
              </div>
              <div className="case-grid__right">
                <div className="services-modern__glass-card services-modern__glass-card--taller">
                  <div className="services-modern__glass-bg services-modern__glass-bg--insolito-quote"></div>
                  <div className="services-modern__glass-content">
                    <div className="quote-card">
                      <p className="quote-card__text">“Eu queria que as pessoas, os hóspedes estrangeiros que recebo, pudessem, descobrir o país como eu, com o melhor de sua arte”</p>
                      <p className="quote-card__author">— Emamnuelle Meeus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desafio */}
        <section id="desafio" className="case-screen case-screen--spacious case-screen--compact">
          <div className="case-screen__container">
            
            {/* Título centralizado */}
            <div className="case-screen__content" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="case-eyebrow">DESAFIO</div>
              <h2 className="case-screen__title">O Resgate da Essência da Marca</h2>
            </div>
            
            {/* Texto em duas colunas justificadas */}
            <div className="case-text-columns" style={{ marginBottom: '4rem' }}>
              <div className="case-text-column">
                <p className="case-screen__body">Apesar do potencial único e da força sensorial do espaço, a marca não traduzia, nem no digital nem na experiência do hóspede, toda essa atmosfera rica. A identidade visual carecia de unidade e sofisticação, e o posicionamento não comunicava de forma estratégica o valor do hotel como destino de imersão cultural.</p>
              </div>
              <div className="case-text-column">
                <p className="case-screen__body">Havia, também, a necessidade de <strong>resgatar a essência da marca</strong> e traduzir no design o novo conceito, reforçando sua brasilidade e sua singularidade artística.</p>
                <p className="case-screen__body">Inspirados pela cultura, pela natureza e pela história do Brasil, traduzimos essa essência em formas orgânicas e vivas, profundamente conectadas às nossas raízes.</p>
              </div>
            </div>
            
            {/* Imagens lado a lado */}
            <div className="case-images-grid">
              <div className="case-frame case-elevate">
                <Image 
                  src="/images/cases/insolito/desafio1.png" 
                  alt="O poder do ambiente mágico - Mago" 
                  width={1600}
                  height={900}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="case-frame case-elevate">
                <Image 
                  src="/images/cases/insolito/desafio2.png" 
                  alt="Inspiração para se sentir mais criativo - Criativo" 
                  width={1600}
                  height={900}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Abordagem */}
        <section id="abordagem" className="case-screen case-screen--spacious case-screen--compact approach-section">
          <div className="case-screen__container">
            <div className="case-grid case-grid--divided case-grid--left7">
              <div className="case-grid__left">
                <div className="case-screen__content">
                  <div className="case-eyebrow" style={{ color: '#fff' }}>ABORDAGEM</div>
                  <h2 className="case-screen__title" style={{ color: '#fff' }}>Nossa abordagem</h2>
                  <p className="case-screen__body" style={{ color: '#fff' }}>A Casa Flora mergulhou no universo do Insólito, explorando sua história, curadoria artística e experiência sensorial. Nosso trabalho incluiu:</p>
                  <ul className="approach-plates">
                    <li>
                      <span className="approach-plates__icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" stroke="currentColor" strokeWidth="1.6"/>
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6"/>
                        </svg>
                      </span>
                      <span className="approach-plates__text">Avaliação do <strong>brand awareness</strong>, analisando comentários e notas de hóspedes em OTAs;</span>
                    </li>
                    <li>
                      <span className="approach-plates__icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.6"/>
                          <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.6"/>
                          <path d="M22 21v-2c0-1.657-1.343-3-3-3h-1" stroke="currentColor" strokeWidth="1.6"/>
                          <circle cx="18" cy="10" r="2" stroke="currentColor" strokeWidth="1.6"/>
                        </svg>
                      </span>
                      <span className="approach-plates__text">Pesquisa qualitativa com stakeholders para entender a visão interna da marca;</span>
                    </li>
                    <li>
                      <span className="approach-plates__icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.6"/>
                          <path d="M7 16v-4m5 4v-8m5 8v-6" stroke="currentColor" strokeWidth="1.6"/>
                        </svg>
                      </span>
                      <span className="approach-plates__text"><strong>Análise da concorrência e benchmarking</strong>, levantando rankings de audiência em redes sociais e em OTAs;</span>
                    </li>
                    <li>
                      <span className="approach-plates__icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 12h6l3-8 3 16 3-8h3" stroke="currentColor" strokeWidth="1.6"/>
                        </svg>
                      </span>
                      <span className="approach-plates__text"><strong>Análise de tendências em hotelaria e turismo</strong>, combinada com <strong>SWOT</strong> e estudo do comportamento do consumidor pós-pandemia.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="case-grid__right">
                <div className="case-screen__content">
                  <div className="approach-card">
                  <p className="case-screen__body">A partir desses insights, desenvolvemos o <strong>universo da marca</strong>, com definição de arquétipos, conceito, manifesto, posicionamento de mercado e <strong>redesign completo da identidade visual</strong>.</p>
                  <p className="case-screen__body">Na etapa da ativação, definimos tom de voz, editorias de conteúdo, personas, canais de comunicação online e offline, e mapeamos a <strong>jornada do hóspede</strong> do pré-reserva ao pós-estadia.</p>
                  <p className="case-screen__body">Com a <strong>Ativação Âmbar</strong>, estruturamos a consolidação da nova marca, seguindo o funil estratégico: <strong>conectar, conversar, encantar e rentabilizar</strong>, apoiado por um calendário anual de campanhas e ativações on e off-line.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solução */}
        <section id="solucao" className="case-screen case-screen--spacious case-screen--compact">
          <div className="case-screen__container">
            {/* Cabeçalho da sessão ocupando 100% */}
            <div className="case-screen__content" style={{ marginBottom: 24 }}>
              <h2 className="case-screen__title">A solução</h2>
              <h3 className="case-screen__subtitle case-screen__subtitle--caps">ARQUÉTIPOS DA MARCA</h3>
            </div>

            {/* Duas colunas: esquerda texto + cards (triptych), direita carrossel 2 imagens */}
            <div className="case-grid case-grid--solution">
              <div className="case-grid__left">
                <div className="case-screen__content">
                  <p className="case-screen__lead">Para traduzir a essência do Insólito, definimos dois arquétipos centrais: <strong>o Mago e o Criativo</strong>. A escolha desses arquétipos reflete diretamente o propósito do hotel e a experiência que ele oferece aos hóspedes.</p>

                  {/* Dois cards no padrão da home + resumo como terceira coluna */}
                  <div className="archetype-grid" style={{ marginTop: '22px' }}>
                    {/* Mago */}
                    <div className="hero__card hero__card--tall hero__card--archetype">
                      <div className="hero__card-bg hero__card-bg--mago"></div>
                      <div className="hero__card-overlay">
                        <div className="hero__card-content">
                          <span className="hero__card-label">Arquétipo</span>
                          <h3 className="hero__card-title">O MAGO</h3>
                          <p className="hero__card-subtitle">O Mago representa transformação, inspiração e descoberta. Ele traduz a capacidade do Insólito de encantar e surpreender.</p>
                          <div className="hero__card-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Criativo */}
                    <div className="hero__card hero__card--tall hero__card--archetype">
                      <div className="hero__card-bg hero__card-bg--criativo"></div>
                      <div className="hero__card-overlay">
                        <div className="hero__card-content">
                          <span className="hero__card-label">Arquétipo</span>
                          <h3 className="hero__card-title">O CRIATIVO</h3>
                          <p className="hero__card-subtitle">O Criativo, por sua vez, expressa originalidade, inventividade e inovação. Ele reflete a estética singular do hotel, a curadoria artística e a brasilidade presente em cada detalhe.</p>
                          <div className="hero__card-arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Resumo ao lado direito dos cards */}
                    <div className="archetype-summary">
                      <p className="case-screen__body">A combinação do <strong>Mago</strong> e do <strong>Criativo</strong> posiciona o Insólito como um destino transformador e inspirador, que une estética, brasilidade e inovação. Esses arquétipos guiam toda a estratégia da marca — do redesign da identidade visual à jornada do hóspede — garantindo coerência entre propósito, experiência e comunicação.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="case-grid__right case-grid__right--center">
                <div className="case-frame case-frame--landscape case-frame--centered case-elevate">
                  <Carousel
                    aspect="16/10"
                    border={false}
                    sizes="(min-width: 1024px) 48vw, 92vw"
                    fit="contain"
                    slides={[
                      { src: '/images/cases/insolito/desafio1.png', alt: 'Arquétipo Mago' },
                      { src: '/images/cases/insolito/desafio2.png', alt: 'Arquétipo Criativo' },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Removido resumo duplicado abaixo: já incluído na 3ª coluna do triptico */}
          </div>
        </section>

        {/* Galeria */}
        <section id="galeria" className="case-screen">
          <div className="case-screen__container">
            <div className="case-screen__content">
              <h2 className="case-screen__title">Galeria</h2>
              <div className="case-frame case-frame--wide case-elevate" style={{ marginTop: 16 }}>
                <Carousel slides={(item.gallery || []).map((g) => (typeof g === 'string' ? { src: g } : { src: g.src, alt: g.alt }))} />
              </div>
              {item.notionUrl ? (
                <p className="case-screen__meta"><Link className="underline" href={item.notionUrl} target="_blank" rel="noopener noreferrer">Referência no Notion</Link></p>
              ) : null}
            </div>
          </div>
        </section>
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
