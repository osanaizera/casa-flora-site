import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCaseBySlug, cases } from '@/data/cases';
import { notFound } from 'next/navigation';
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
                  <Image src={item.logo} alt={`${item.title} logo`} width={640} height={280} className="case-hero__brand-logo" priority />
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
            { href: '#redesign', label: 'Redesign' },
            { href: '#resultados', label: 'Resultados' },
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
                  <div className="case-badges">
                    {item.category && (<span className="case-badge case-badge--muted" aria-label="Categoria">{item.category}</span>)}
                    {item.year && (<span className="case-badge case-badge--muted" aria-label="Ano">{item.year}</span>)}
                    {/* Pacote de serviços (ex.: Garden + Ativação Âmbar) */}
                    {item.servicePack && item.servicePack.split('+').map((p, idx) => {
                      const label = p.trim();
                      const lower = label.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
                      const isGarden = lower.includes('garden');
                      const isRaiz = lower.includes('raiz');
                      const variant = isGarden ? 'garden' : isRaiz ? 'raiz' : (lower.includes('ambar') ? 'ambar' : (lower.includes('seiva') ? 'seiva' : 'muted'));
                      const className = `case-badge case-badge--${variant}`;
                      // Garden/Raiz clicam para página de cases
                      if (isGarden || isRaiz) {
                        return (
                          <Link key={idx} href="/#cases" className={className} aria-label={`Ver cases do pacote ${label}`}>
                            {label}
                          </Link>
                        );
                      }
                      return (
                        <span key={idx} className={className}>{label}</span>
                      );
                    })}
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
            {/* Nova estrutura: título/subtítulo e texto à esquerda, cards à direita */}
            <div className="case-grid case-grid--solution">
              <div className="case-grid__left">
                <div className="case-screen__content">
                  <h2 className="case-screen__title">Personalidade da Marca</h2>
                  <h3 className="case-screen__subtitle case-screen__subtitle--caps">ARQUÉTIPOS</h3>
                  <div className="archetype-text">
                    <p className="case-screen__lead">Para traduzir a essência do Insólito, definimos dois arquétipos centrais: <strong>o Mago e o Criativo</strong>. A escolha desses arquétipos reflete diretamente o propósito do hotel e a experiência que ele oferece aos hóspedes.</p>
                    <p className="case-screen__body">A combinação do <strong>Mago</strong> e do <strong>Criativo</strong> posiciona o Insólito como um destino transformador e inspirador, que une estética, brasilidade e inovação. Esses arquétipos guiam toda a estratégia da marca — do redesign da identidade visual à jornada do hóspede — garantindo coerência entre propósito, experiência e comunicação.</p>
                  </div>
                </div>
              </div>

              <div className="case-grid__right archetype-cards-wide">
                {/* Cards dos arquétipos movidos para a direita */}
                <div className="hero__cards">
                  {/* Mago */}
                  <div className="hero__card hero__card--tall hero__card--archetype">
                    <div className="hero__card-bg hero__card-bg--mago"></div>
                    <div className="hero__card-overlay">
                      <div className="hero__card-content">
                        <span className="hero__card-label">Arquétipo</span>
                        <h3 className="hero__card-title">O MAGO</h3>
                        <p className="hero__card-subtitle">O Mago representa transformação, inspiração e descoberta. Ele traduz a capacidade do Insólito de encantar e surpreender.</p>
                        {/* seta removida */}
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
                        {/* seta removida */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Removido resumo duplicado abaixo: já incluído na 3ª coluna do triptico */}
          </div>
        </section>

        {/* Manifesto e Conceito da Marca */}
        <section id="manifesto" className="case-screen case-screen--spacious case-screen--compact manifesto-section">
          <div className="case-screen__container">
            {/* Título centralizado */}
            <div className="case-screen__content" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="case-eyebrow">MANIFESTO</div>
              <h2 className="case-screen__title">Manifesto e conceito da marca</h2>
            </div>

            {/* Vídeo horizontal (YouTube) ocupando toda a largura do container */}
            <div className="case-frame case-frame--wide case-elevate manifesto-video" style={{ margin: '0 0 2rem 0' }}>
              <iframe
                className="manifesto-video__embed"
                src="https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1&playsinline=1"
                title="Manifesto – Insólito"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Texto dos parágrafos abaixo do vídeo em duas colunas */}
            <div className="case-grid case-grid--equal" style={{ marginBottom: '1.5rem' }}>
              <div className="case-grid__left">
                <div className="case-screen__content">
                  <p className="case-screen__body">O manifesto do Insólito traduz o propósito, a essência e a personalidade da marca, reforçando que o hotel vai além de hospedagem: é um lugar de <strong>descoberta, arte e conexão com a brasilidade</strong>. Cada detalhe — da curadoria artística à experiência sensorial — reflete o compromisso do hotel em criar <strong>experiências únicas</strong>.</p>
                  <p className="case-screen__body">Ao final, o manifesto convida o hóspede a vivenciar essa experiência de forma ativa.</p>
                </div>
              </div>
              <div className="case-grid__right">
                <div className="case-screen__content">
                  <p className="case-screen__body">O <strong>conceito central</strong>, <strong>&quot;Descubra Arte em sua Natureza&quot;</strong>, sintetiza a proposta do Insólito de maneira clara e inspiradora. Ele une dois pilares fundamentais da marca:</p>
                  {/* Cards Arte e Natureza na coluna direita */}
                  <div className="manifesto-cards" style={{ marginTop: '1rem' }}>
                    <div className="manifesto-card">
                      <div className="manifesto-card__header">
                        <span className="manifesto-card__icon">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 4h6l3 6h6l-3 6H6l-3-6Z" stroke="currentColor" strokeWidth="1.6"/>
                          </svg>
                        </span>
                        <div className="manifesto-card__title">Arte</div>
                      </div>
                      <div className="manifesto-card__text">Cada espaço, cada quarto e cada experiência são cuidadosamente curados para revelar a criatividade e a cultura brasileiras.</div>
                    </div>
                    <div className="manifesto-card">
                      <div className="manifesto-card__header">
                        <span className="manifesto-card__icon">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12c4-6 10-6 14 0-4 6-10 6-14 0Z" stroke="currentColor" strokeWidth="1.6"/>
                            <path d="M12 7v10" stroke="currentColor" strokeWidth="1.6"/>
                          </svg>
                        </span>
                        <div className="manifesto-card__title">Natureza</div>
                      </div>
                      <div className="manifesto-card__text">A brasilidade e a conexão com o ambiente natural são evidentes no design, na identidade visual e nas experiências oferecidas.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* (Cards movidos para a coluna esquerda acima) */}
          </div>
        </section>

        {/* Redesign da identidade visual */}
        <section id="redesign" className="case-screen case-screen--spacious case-screen--compact">
          <div className="case-screen__container">
            <div className="case-screen__content" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="case-eyebrow">REDESIGN</div>
              <h2 className="case-screen__title">Redesign da identidade visual</h2>
            </div>

            <div className="case-grid case-grid--equal">
              <div className="case-grid__left">
                <div className="case-screen__content">
                  <p className="case-screen__body">O redesign da identidade visual do Insólito teve como objetivo <strong>resgatar a essência da marca e marcar o novo conceito</strong>, traduzindo em elementos visuais sua brasilidade, criatividade e espírito transformador.</p>
                  <p className="case-screen__body">O <strong>logo foi redesenhado</strong> para transmitir organicidade, fluidez e singularidade:</p>

                  {/* Bullets em cards (estilo do case) */}
                  <ul className="redesign-plates">
                    <li>
                      <span className="redesign-plates__icon">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6Z" stroke="currentColor" strokeWidth="1.6"/></svg>
                      </span>
                      <span className="redesign-plates__text">Análise da <strong>essência da marca e da natureza brasileira;</strong></span>
                    </li>
                    <li>
                      <span className="redesign-plates__icon">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.6"/></svg>
                      </span>
                      <span className="redesign-plates__text">Redefinição de tipografia, cores e logo;</span>
                    </li>
                    <li>
                      <span className="redesign-plates__icon">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M4 12c4-6 12-6 16 0-4 6-12 6-16 0Z" stroke="currentColor" strokeWidth="1.6"/></svg>
                      </span>
                      <span className="redesign-plates__text">Mais <strong>curvas</strong>, mais <strong>orgânico</strong>, <strong>único</strong> e <strong>natural</strong>, refletindo a brasilidade;</span>
                    </li>
                    <li>
                      <span className="redesign-plates__icon">
                        <svg viewBox="0 0 24 24" fill="none"><path d="M3 12h6l3 3 3-3h6" stroke="currentColor" strokeWidth="1.6"/></svg>
                      </span>
                      <span className="redesign-plates__text">Uma forma que dialoga com arte e natureza, reforçando a conexão do hotel com experiências sensoriais e culturais.</span>
                    </li>
                  </ul>

                  {/* Imagens lado a lado, proporcionais e menores */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }}>
                    <div className="case-frame case-frame--compact case-elevate" style={{ aspectRatio: '4 / 3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Image src="/images/cases/insolito/rebranding1.png" alt="Redesign do logo do Insólito" width={800} height={600} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    </div>
                    <div className="case-frame case-frame--compact case-elevate" style={{ aspectRatio: '4 / 3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Image src="/images/cases/insolito/rebranding2.png" alt="Aplicação da nova identidade visual" width={800} height={600} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="case-grid__right">
                <div className="case-screen__content">
                  <h3 className="case-screen__subtitle" style={{ marginBottom: '0.5rem' }}>Paleta de cores</h3>
                  <p className="case-screen__body">A <strong>paleta de cores</strong> foi atualizada, tornando-se mais <strong>sóbria e elegante</strong>, mantendo referências à brasilidade e à arte, equilibrando sofisticação e autenticidade.</p>

                  {/* Paleta como cartões (antes → depois) */}
                  <div className="palette-cards-comparison">
                    <div className="palette-cards-section">
                      <div className="palette-section-title">
                        <span className="case-eyebrow">Antiga</span>
                        <h4 className="h4">Primeira paleta de cores</h4>
                      </div>
                      <div className="palette-cards-grid">
                        <div className="palette-card" style={{ backgroundColor: '#d53974', color: '#ffffff' }}>
                          <div className="palette-card__text">Rosa <span className="palette-card__hex">#d53974</span></div>
                        </div>
                        <div className="palette-card" style={{ backgroundColor: '#a8cf4b', color: '#111111' }}>
                          <div className="palette-card__text">Verde-limão <span className="palette-card__hex">#a8cf4b</span></div>
                        </div>
                        <div className="palette-card" style={{ backgroundColor: '#f6ad21', color: '#111111' }}>
                          <div className="palette-card__text">Amarelo/laranja <span className="palette-card__hex">#f6ad21</span></div>
                        </div>
                        <div className="palette-card" style={{ backgroundColor: '#28889c', color: '#ffffff' }}>
                          <div className="palette-card__text">Azul-petróleo <span className="palette-card__hex">#28889c</span></div>
                        </div>
                      </div>
                    </div>

                    <div className="palette-arrow" aria-hidden>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    <div className="palette-cards-section">
                      <div className="palette-section-title">
                        <span className="case-eyebrow">Nova</span>
                        <h4 className="h4">Paleta de cores transformada</h4>
                      </div>
                      <div className="palette-cards-grid">
                        <div className="palette-card" style={{ backgroundColor: '#d53874', color: '#ffffff' }}>
                          <div className="palette-card__text">Rosa <span className="palette-card__hex">#d53874</span></div>
                        </div>
                        <div className="palette-card" style={{ backgroundColor: '#08878b', color: '#ffffff' }}>
                          <div className="palette-card__text">Verde azulado <span className="palette-card__hex">#08878b</span></div>
                        </div>
                        <div className="palette-card" style={{ backgroundColor: '#cdac7f', color: '#111111' }}>
                          <div className="palette-card__text">Bege/amarronzado <span className="palette-card__hex">#cdac7f</span></div>
                        </div>
                        <div className="palette-card" style={{ backgroundColor: '#2a4360', color: '#ffffff' }}>
                          <div className="palette-card__text">Azul escuro <span className="palette-card__hex">#2a4360</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="color-evolution" style={{ marginTop: '1rem', display: 'grid', gap: '12px' }}>
                    <div className="color-palette-group">
                      <span className="color-palette-label">Primeira paleta de cores (antiga)</span>
                      <div className="color-palette-compact">
                        <div className="color-swatch" title="#d53974" style={{ backgroundColor: '#d53974' }}></div>
                        <div className="color-swatch" title="#a8cf4b" style={{ backgroundColor: '#a8cf4b' }}></div>
                        <div className="color-swatch" title="#f6ad21" style={{ backgroundColor: '#f6ad21' }}></div>
                        <div className="color-swatch" title="#28889c" style={{ backgroundColor: '#28889c' }}></div>
                      </div>
                      <div className="color-labels" style={{ display:'grid', gridTemplateColumns:'repeat(2,minmax(0,1fr))', gap:'6px', marginTop:'6px', fontSize:'0.9rem' }}>
                        <div>Rosa: #d53974</div>
                        <div>Verde-limão: #a8cf4b</div>
                        <div>Amarelo/laranja: #f6ad21</div>
                        <div>Azul-petróleo: #28889c</div>
                      </div>
                    </div>
                    <div className="color-palette-group">
                      <span className="color-palette-label color-palette-label--highlight">Paleta de cores transformada (nova)</span>
                      <div className="color-palette-compact">
                        <div className="color-swatch" title="#d53874" style={{ backgroundColor: '#d53874' }}></div>
                        <div className="color-swatch" title="#08878b" style={{ backgroundColor: '#08878b' }}></div>
                        <div className="color-swatch" title="#cdac7f" style={{ backgroundColor: '#cdac7f' }}></div>
                        <div className="color-swatch" title="#2a4360" style={{ backgroundColor: '#2a4360' }}></div>
                      </div>
                      <div className="color-labels" style={{ display:'grid', gridTemplateColumns:'repeat(2,minmax(0,1fr))', gap:'6px', marginTop:'6px', fontSize:'0.9rem' }}>
                        <div>Rosa: #d53874</div>
                        <div>Verde azulado: #08878b</div>
                        <div>Bege/amarronzado: #cdac7f</div>
                        <div>Azul escuro: #2a4360</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados do Rebranding */}
        <section id="resultados" className="case-screen case-screen--spacious case-screen--compact approach-section">
          <div className="case-screen__container">
            {/* Título centralizado */}
            <div className="case-screen__content" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="case-eyebrow" style={{ color: '#fff' }}>RESULTADOS</div>
              <h2 className="case-screen__title" style={{ color: '#fff' }}>Resultados do Rebranding</h2>
            </div>
            
            <div className="case-screen__content" style={{ marginBottom: '3rem' }}>
              <p className="case-screen__body" style={{ color: '#fff', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>O rebranding do Insólito gerou resultados significativos em múltiplas dimensões, confirmando o impacto da estratégia implementada:</p>
            </div>

            {/* 3 blocos com texto e imagem */}
            <div className="results-blocks">
              <div className="result-block">
                <div className="result-block__content">
                  <h3 className="result-block__title" style={{ color: '#fff' }}>Reconhecimento e Avaliação Positiva</h3>
                  <p className="result-block__text" style={{ color: '#fff' }}>O Insólito recebe elogios em plataformas de avaliação, como Booking.com e Expedia, destacando-se pela qualidade do atendimento, conforto das acomodações e o ambiente artístico.</p>
                </div>
                <div className="result-block__image">
                  <div className="case-frame case-frame--compact case-elevate">
                    <Image 
                      src="/images/cases/insolito/resultado0.jpeg" 
                      alt="Reconhecimento e Avaliação Positiva" 
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>

              <div className="result-block">
                <div className="result-block__content">
                  <h3 className="result-block__title" style={{ color: '#fff' }}>Coerência Visual e Identidade Fortalecida</h3>
                  <p className="result-block__text" style={{ color: '#fff' }}>O redesign da identidade visual, incluindo o novo logotipo, paleta de cores sóbria e elegante, trouxe uma coerência visual que reflete a brasilidade, criatividade e transformação.</p>
                </div>
                <div className="result-block__images">
                  <div className="case-images-grid">
                    <div className="case-frame case-frame--compact case-elevate">
                      <Image 
                        src="/images/cases/insolito/resultados1.jpeg" 
                        alt="Coerência Visual - Imagem 1" 
                        width={400}
                        height={300}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                    <div className="case-frame case-frame--compact case-elevate">
                      <Image 
                        src="/images/cases/insolito/resultados2.jpeg" 
                        alt="Coerência Visual - Imagem 2" 
                        width={400}
                        height={300}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="result-block">
                <div className="result-block__content">
                  <h3 className="result-block__title" style={{ color: '#fff' }}>Posicionamento Aplicado em Diferentes Canais</h3>
                  <p className="result-block__text" style={{ color: '#fff' }}>O perfil do Instagram (@insolitohotel) é vibrante! A curadoria de conteúdo, incluindo imagens de obras de arte, detalhes da arquitetura e experiências sensoriais, tem gerado engajamento significativo.</p>
                </div>
                <div className="result-block__image">
                  <div className="case-frame case-frame--compact case-elevate">
                    <Image 
                      src="/images/cases/insolito/resultado 3.jpeg" 
                      alt="Posicionamento em Diferentes Canais" 
                      width={600}
                      height={400}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outros Cases - Carrossel da Home */}
        <section className="cases-showcase" id="outros-cases">
          <div className="cases-showcase__container">
            <h2 className="cases-showcase__title">Outros Cases</h2>
            <div className="cases-showcase__grid">
              {cases.filter(c => c.slug !== slug).slice(0, 2).map((caseItem) => (
                <Link key={caseItem.slug} href={`/cases/${caseItem.slug}`} className="hero__card hero__card--case">
                  <div className="hero__card-overlay">
                    <div className="hero__card-content">
                      <span className="hero__card-label">Case</span>
                      <h3 className="hero__card-title">{caseItem.title}</h3>
                      <p className="hero__card-subtitle">{caseItem.summary}</p>
                    </div>
                  </div>
                  <div className="hero__card-bg" style={{backgroundImage: `url(${caseItem.heroImage})`}}></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final no estilo da home */}
        <section className="cta-final">
          <div className="cases-showcase__container">
            <div className="cases-showcase__bottom-cta">
              <div className="cases-showcase__cta-content">
                <h3 className="cases-showcase__cta-title">Gostou deste projeto?</h3>
                <p className="cases-showcase__cta-description">Cada projeto é único e merece uma abordagem personalizada. Vamos conversar sobre como a Casa Flora pode transformar sua marca em algo verdadeiramente memorável.</p>
                <Link href="/contato" className="cases-showcase__cta-button">
                  <span>Iniciar conversa</span>
                  <div className="cases-showcase__cta-button-glow"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Rodapé preto minimalista */}
        <footer className="site-footer">
          <div className="site-footer__container">
            <div className="site-footer__row">
              <div className="site-footer__brand">Casa Flora</div>
              <nav className="site-footer__nav">
                <Link href="/" className="site-footer__link">Home</Link>
                <Link href="/#servicos" className="site-footer__link">Serviços</Link>
                <Link href="/#cases" className="site-footer__link">Cases</Link>
                <Link href="/#sobre" className="site-footer__link">Sobre</Link>
              </nav>
            </div>
            <div className="site-footer__row site-footer__meta">
              <p>© {new Date().getFullYear()} Casa Flora — Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </>
    );
  }

  // Template editorial para o Búzios Mar
  if (slug === 'buzios-mar' && item) {
    return (
      <>
        {/* Hero */}
        <section className="case-hero-wrap">
          <div className="case-hero">
            <div className="case-hero__media">
              <Image src={item.heroImage} alt={item.title} fill className="object-cover" priority sizes="100vw" />
            </div>
            <div className="case-hero__overlay" />
            <div className="case-hero__content">
              <div className="case-hero__content-inner">
                <h1 className="case-hero__title">BÚZIOS MAR HOTEL</h1>
              </div>
              <svg className="case-hero__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 5v14M12 19l-6-6M12 19l6-6" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </section>

        <ActiveSectionNav
          sections={[
            { href: '#desafio', label: 'Desafio' },
            { href: '#imersao', label: 'Imersão' },
            { href: '#estrategia', label: 'Estratégia' },
            { href: '#posicionamento', label: 'Posicionamento' },
            { href: '#essencia', label: 'Essência' },
            { href: '#conceito', label: 'Conceito' },
            { href: '#implementacao', label: 'Implementação' },
            { href: '#resultados', label: 'Resultados' },
          ]}
        />

        {/* Desafio */}
        <section id="desafio" className="case-screen case-screen--spacious case-screen--compact">
          <div className="case-screen__container">
            <div className="case-screen__content" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="case-eyebrow">DESAFIO</div>
              <h2 className="case-screen__title">Estruturar uma identidade autêntica e competitiva</h2>
            </div>
            <div className="case-text-columns">
              <div className="case-text-column">
                <p className="case-screen__body">Búzios Mar — localização privilegiada, atmosfera descontraída, equipe jovem e hospitaleira, experiências como o rooftop no pôr do sol e a gastronomia caiçara inspirada nos frutos do mar. O grande desafio estratégico estava em <strong>estruturar uma identidade de marca</strong> que traduzisse essas forças em uma narrativa coesa, desejável e competitiva.</p>
                <p className="case-screen__body"><strong>Perfil do hóspede:</strong> majoritariamente casais, em busca de conexão, relaxamento e experiências. <strong>Alta rotatividade:</strong> hóspedes retornam algumas vezes por ano, mas em estadias curtas.</p>
                <p className="case-screen__body"><strong>Experiência marcante no rooftop:</strong> o ritual do drink no pôr do sol pode se tornar assinatura espontânea da marca. <strong>Estilo de atendimento:</strong> equipe jovem e comunicação leve criam um ambiente acolhedor.</p>
              </div>
              <div className="case-text-column">
                <p className="case-screen__body"><strong>Estrutura física:</strong> o grande número de escadas naturalmente restringe o acesso para alguns hóspedes.</p>
                <p className="case-screen__body"><strong>Gastronomia alinhada ao território:</strong> cardápio de frutos do mar e inspiração caiçara como ponto de diferenciação.</p>
                <p className="case-screen__body"><strong>Estética e identidade visual:</strong> predominância do azul (mar) e fachada amarela icônica, ainda pouco aproveitada estrategicamente.</p>
                <p className="case-screen__body">Em síntese, o desafio era <strong>traduzir essas singularidades em um posicionamento claro</strong>, aproveitando tendências de comportamento, turismo e lifestyle, para ser percebido não apenas como um hotel, mas como uma experiência de Búzios.</p>
              </div>
            </div>
            <div className="case-frame case-frame--wide case-elevate case-frame--centered" style={{ marginTop: '18px' }}>
              <Image src="/images/BUZIOS MAR CAPA.png" alt="Rooftop do Búzios Mar" width={1920} height={820} />
            </div>
          </div>
        </section>

        {/* Imersão */}
        <section id="imersao" className="case-screen case-screen--spacious case-screen--compact">
          <div className="case-screen__container">
            <div className="case-screen__content" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="case-eyebrow">IMERSÃO</div>
              <h2 className="case-screen__title">Leituras de campo e rituais da experiência</h2>
            </div>
            <div className="case-text-columns">
              <div className="case-text-column">
                <p className="case-screen__body">A Casa Flora iniciou o projeto com <strong>imersão</strong> na operação, atmosfera e comportamento dos hóspedes. Mapeamos rituais, momentos de destaque e a interação com espaços, equipe e o destino.</p>
                <ul className="redesign-plates" style={{ marginTop: 8 }}>
                  <li><span className="redesign-plates__text"><strong>Experiências instagramáveis:</strong> rooftop no pôr do sol alia estética e significado.</span></li>
                  <li><span className="redesign-plates__text"><strong>Short breaks:</strong> viagens mais curtas e frequentes, por proximidade com grandes capitais.</span></li>
                  <li><span className="redesign-plates__text"><strong>Hospitalidade descontraída:</strong> atendimento leve e próximo como ativo de marca.</span></li>
                </ul>
              </div>
              <div className="case-text-column">
                <ul className="redesign-plates">
                  <li><span className="redesign-plates__text"><strong>Gastronomia local:</strong> culinária que conta histórias do território.</span></li>
                  <li><span className="redesign-plates__text"><strong>Assinaturas visuais:</strong> cores e arquitetura que se tornam ícones nas redes.</span></li>
                </ul>
                <div className="case-frame case-frame--compact case-elevate" style={{ marginTop: 12 }}>
                  <Image src="/images/hospitalidade.jpg" alt="Ambiente descontraído" width={1280} height={720} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estratégia */}
        <section id="estrategia" className="case-screen case-screen--spacious case-screen--compact approach-section">
          <div className="case-screen__container">
            <div className="case-grid case-grid--divided case-grid--left7">
              <div className="case-grid__left">
                <div className="case-screen__content">
                  <div className="case-eyebrow" style={{ color: '#fff' }}>ESTRATÉGIA DE MARCA</div>
                  <h2 className="case-screen__title" style={{ color: '#fff' }}>Pilares estratégicos de posicionamento</h2>
                  <p className="case-screen__body" style={{ color: '#fff' }}>O cenário competitivo de Búzios tende ao formalismo e a estéticas padronizadas. O Búzios Mar <strong>se diferencia pela autenticidade</strong>, leveza e pela experiência que ultrapassa a estadia.</p>
                  <ul className="approach-plates">
                    <li><span className="approach-plates__text">Experiências memoráveis acima do luxo tradicional</span></li>
                    <li><span className="approach-plates__text">Gastronomia caiçara como diferenciação</span></li>
                    <li><span className="approach-plates__text">Comunicação leve e espontânea</span></li>
                    <li><span className="approach-plates__text">Rooftop e vistas como rituais de convivência</span></li>
                  </ul>
                </div>
              </div>
              <div className="case-grid__right case-grid__right--center">
                <div className="case-frame case-frame--portrait case-elevate">
                  <Image src="/images/BUZIOS MAR CAPA.png" alt="Vista do hotel" width={1080} height={1440} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Posicionamento */}
        <section id="posicionamento" className="case-screen case-screen--spacious case-screen--compact">
          <div className="case-screen__container">
            <div className="case-screen__content" style={{ textAlign: 'center' }}>
              <div className="case-eyebrow">POSICIONAMENTO</div>
              <h2 className="case-screen__title">Experiências leves e ensolaradas diante do mar</h2>
              <p className="case-screen__body" style={{ maxWidth: 860, margin: '6px auto 0' }}>Acolhimento sem formalidade, autenticidade gastronômica e vistas que marcam a memória – um convite a viver Búzios com leveza, cor e proximidade.</p>
            </div>
          </div>
        </section>

        {/* Essência e Direcionadores */}
        <section id="essencia" className="case-screen case-screen--spacious case-screen--compact">
          <div className="case-screen__container">
            <div className="case-grid case-grid--divided case-grid--left7">
              <div className="case-grid__left">
                <div className="case-screen__content">
                  <div className="case-eyebrow">ESSÊNCIA E DIRECIONADORES</div>
                  <h3 className="case-screen__subtitle">A leveza do mar em cada detalhe</h3>
                  <ul className="redesign-plates">
                    <li><span className="redesign-plates__text"><strong>Arquétipo:</strong> Explorador – inspira movimento, descoberta e paisagens.</span></li>
                    <li><span className="redesign-plates__text"><strong>Tom de voz:</strong> Direto, próximo e descontraído.</span></li>
                    <li><span className="redesign-plates__text"><strong>Diferenciais:</strong> Rooftop como ícone, gastronomia do território, energia jovem e localização estratégica.</span></li>
                  </ul>
                </div>
              </div>
              <div className="case-grid__right">
                <div className="case-frame case-frame--landscape case-elevate">
                  <Image src="/images/experiencia.jpg" alt="Experiências leves e ensolaradas" width={1600} height={900} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conceito Criativo */}
        <section id="conceito" className="case-screen case-screen--spacious case-screen--compact">
          <div className="case-screen__container">
            <div className="case-screen__content" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div className="case-eyebrow">CONCEITO CRIATIVO</div>
              <h2 className="case-screen__title">Mar, energia jovem e o ritual do pôr do sol</h2>
              <p className="case-screen__body" style={{ maxWidth: 900, margin: '6px auto 0' }}>A narrativa visual e verbal parte de três pilares: conexão com o mar, energia jovem e experiências memoráveis no rooftop – um tripé que guia a expressão e a presença da marca.</p>
            </div>
            <div className="case-images-grid">
              <div className="case-frame case-elevate"><Image src="/images/hospitalidade.jpg" alt="Hospitalidade" width={1280} height={720} /></div>
              <div className="case-frame case-elevate"><Image src="/images/garden.jpg" alt="Energia jovem" width={1280} height={720} /></div>
            </div>
          </div>
        </section>

        {/* Implementação */}
        <section id="implementacao" className="case-screen case-screen--spacious case-screen--compact approach-section">
          <div className="case-screen__container">
            <div className="case-grid case-grid--divided case-grid--left7">
              <div className="case-grid__left">
                <div className="case-screen__content">
                  <div className="case-eyebrow" style={{ color: '#fff' }}>IMPLEMENTAÇÃO</div>
                  <h2 className="case-screen__title" style={{ color: '#fff' }}>Identidade viva nos pontos de contato</h2>
                  <p className="case-screen__body" style={{ color: '#fff' }}>Dualidade azul (mar) e amarelo (arquitetura icônica), comunicação leve e direta e experiências que potencializam rituais – com a gastronomia integrada ao posicionamento.</p>
                  <ul className="approach-plates">
                    <li><span className="approach-plates__text">Sistema visual e verbal consistente</span></li>
                    <li><span className="approach-plates__text">Plano editorial e fotografia</span></li>
                    <li><span className="approach-plates__text">Materiais impressos e ambientação</span></li>
                    <li><span className="approach-plates__text">Site e redes sociais</span></li>
                  </ul>
                </div>
              </div>
              <div className="case-grid__right case-grid__right--center">
                <div className="case-frame case-frame--wide case-elevate">
                  <Image src="/images/BUZIOS MAR CAPA.png" alt="Identidade aplicada" width={1920} height={820} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section id="resultados" className="case-screen case-screen--spacious case-screen--compact">
          <div className="case-screen__container">
            <div className="case-screen__content" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div className="case-eyebrow">RESULTADOS</div>
              <h2 className="case-screen__title">Percepção elevada e presença com identidade</h2>
              <p className="case-screen__body" style={{ maxWidth: 820, margin: '6px auto 0' }}>O reposicionamento fortaleceu a identidade como hotel boutique e ampliou a relevância digital. A marca se consolida como opção diferenciada em Búzios para o público jovem adulto.</p>
            </div>
            <div className="results-blocks">
              <div className="result-block">
                <div className="case-frame case-frame--compact case-elevate">
                  <Image src="/images/experiencia.jpg" alt="Conteúdo e presença" width={1280} height={720} />
                </div>
                <p className="result-block__text">Conteúdo e presença com assinatura visual clara.</p>
              </div>
              <div className="result-block">
                <div className="case-frame case-frame--compact case-elevate">
                  <Image src="/images/hospitalidade.jpg" alt="Rituais e experiências" width={1280} height={720} />
                </div>
                <p className="result-block__text">Rituais e experiências que fortalecem relacionamento.</p>
              </div>
              <div className="result-block">
                <div className="case-frame case-frame--compact case-elevate">
                  <Image src="/images/garden.jpg" alt="Percepção de valor" width={1280} height={720} />
                </div>
                <p className="result-block__text">Percepção de valor elevada com diferenciação.</p>
              </div>
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
