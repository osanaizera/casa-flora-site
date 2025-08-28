import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCaseBySlug, cases } from '@/data/cases';
import { notFound } from 'next/navigation';
import Carousel from '@/components/magazine/Carousel';

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

  // Template editorial específico para o Insólito
  if (slug === 'insolito' && item) {
    return (
      <>
        {/* Hero overlay editorial com logo */}
        <section className="case-hero-wrap">
          <div className="case-hero">
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

        {/* Artigo vertical com estrutura e texto exatos */}
        <article className="case-article" aria-labelledby="case-title">
          <header className="case-section">
            <h1 id="case-title" className="h1">Insólito <strong>Boutique Hotel &amp; Spa</strong></h1>
            <h2 className="h2" style={{ marginTop: 10 }}>Da arte da essência à experiência da hospitalidade</h2>
          </header>

          {/* Bloco de imagens iniciais (5) */}
          <section className="case-section" aria-label="Imagens de abertura">
            <div className="case-modern__gallery">
              {[
                { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.48.54.png' },
                { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.03.png' },
                { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.14.png' },
                { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.51.png' },
                { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.50.00.png' },
              ].map((g, i) => (
                <div key={i} className="case-modern__tile">
                  <Image src={g.src} alt={`Abertura ${i + 1}`} fill className="object-cover" sizes="(min-width:1280px) 33vw, (min-width:640px) 50vw, 100vw" />
                </div>
              ))}
            </div>
          </section>

          {/* Texto introdutório exato (coluna única) */}
          <section id="sobre" className="case-section dropcap">
            <div style={{ maxWidth: '72ch' }}>
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

          {/* O desafio */}
          <section id="desafio" className="case-section">
            <h2 className="case-section__title">O desafio</h2>
            <div className="case-columns2">
              <p>Apesar do potencial único e da força sensorial do espaço, a marca não traduzia, nem no digital nem na experiência do hóspede, toda essa atmosfera rica. A identidade visual carecia de unidade e sofisticação, e o posicionamento não comunicava de forma estratégica o valor do hotel como destino de imersão cultural.</p>
              <p>Havia, também, a necessidade de <strong>resgatar a essência da marca</strong> e traduzir no design o novo conceito, reforçando sua brasilidade e sua singularidade artística.</p>
            </div>
            <div className="case-modern__gallery" style={{ marginTop: 16 }}>
              {[
                { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.51.png' },
                { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.50.00.png' },
              ].map((g, i) => (
                <div key={i} className="case-modern__tile">
                  <Image src={g.src} alt={`Desafio ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>

          <hr className="rule" />

          {/* Nossa abordagem */}
          <section id="abordagem" className="case-section">
            <h2 className="case-section__title">Nossa abordagem</h2>
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

          {/* A solução - Arquétipos da marca */}
          <section id="solucao" className="case-section">
            <h2 className="case-section__title">A solução</h2>
            <h3 className="h3" style={{ marginBottom: 10 }}>Arquétipos da marca</h3>
            <div className="case-columns2">
              <p>Para traduzir a essência do Insólito, definimos dois arquétipos centrais: <strong>o Mago e o Criativo</strong>. A escolha desses arquétipos reflete diretamente o propósito do hotel e a experiência que ele oferece aos hóspedes.</p>
              <p>O <strong>Mago</strong> representa transformação, inspiração e descoberta. Ele traduz a capacidade do Insólito de encantar e surpreender.</p>
            </div>
            <figure style={{ marginTop: 12 }}>
              <div className="case-modern__tile" style={{ aspectRatio: '4/3' }}>
                <Image src={'/images/cases/insolito/Captura de Tela 2025-08-13 às 09.48.54.png'} alt="Arquétipo Mago" fill className="object-cover" />
              </div>
            </figure>
            <div className="case-columns2" style={{ marginTop: 12 }}>
              <p>O <strong>Criativo</strong>, por sua vez, expressa originalidade, inventividade e inovação. Ele reflete a estética singular do hotel, a curadoria artística e a brasilidade presente em cada detalhe.</p>
            </div>
            <figure style={{ marginTop: 12 }}>
              <div className="case-modern__tile" style={{ aspectRatio: '4/3' }}>
                <Image src={'/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.03.png'} alt="Arquétipo Criativo" fill className="object-cover" />
              </div>
            </figure>
            <div className="case-columns2" style={{ marginTop: 12 }}>
              <p>A combinação do <strong>Mago e do Criativo</strong> posiciona o Insólito como um destino transformador e inspirador, que une estética, brasilidade e inovação. Esses arquétipos guiam toda a estratégia da marca, desde o redesign da identidade visual até a construção da jornada do hóspede, garantindo coerência entre propósito, experiência e comunicação.</p>
            </div>
          </section>

          <hr className="rule" />

          {/* Manifesto e conceito da marca */}
          <section id="manifesto" className="case-section">
            <h2 className="case-section__title">Manifesto e conceito da marca</h2>
            <div className="case-columns2">
              <p>O manifesto do Insólito traduz o propósito, a essência e a personalidade da marca, reforçando que o hotel vai além de hospedagem: é um lugar de <strong>descoberta, arte e conexão com a brasilidade</strong>. Cada detalhe — da curadoria artística à experiência sensorial — reflete o compromisso do hotel em criar <strong>experiências únicas</strong>.</p>
            </div>
            <div className="case-modern__gallery" style={{ marginTop: 16 }}>
              {[
                { src: '/images/experiencia.jpg' },
                { src: '/images/hospitalidade.jpg' },
              ].map((g, i) => (
                <div key={i} className="case-modern__tile">
                  <Image src={g.src} alt={`Manifesto ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="case-columns2" style={{ marginTop: 12 }}>
              <p>Ao final, o manifesto convida o hóspede a vivenciar essa experiência de forma ativa. Esse <strong>convite</strong> conecta diretamente ao conceito central da marca, <strong>“Descubra Arte em sua Natureza”</strong>, que guia todas as experiências, comunicações e ativações do hotel, orientando o hóspede a explorar a brasilidade, a arte e a criatividade de cada espaço de forma integrada e inspiradora.</p>
            </div>
            <div className="case-modern__gallery" style={{ marginTop: 16 }}>
              {[
                { src: '/images/garden.jpg' },
              ].map((g, i) => (
                <div key={i} className="case-modern__tile">
                  <Image src={g.src} alt={`Conceito ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="case-columns2" style={{ marginTop: 12 }}>
              <p>O <strong>conceito central</strong>, <strong>“Descubra Arte em sua Natureza”</strong>, sintetiza a proposta do Insólito de maneira clara e inspiradora. Ele une dois pilares fundamentais da marca:</p>
              <ul className="case-modern__bullets">
                <li><strong>Arte:</strong> cada espaço, cada quarto e cada experiência são cuidadosamente curados para revelar a criatividade e a cultura brasileiras;</li>
                <li><strong>Natureza:</strong> a brasilidade e a conexão com o ambiente natural são evidentes em cada detalhe do design, identidade visual e experiências oferecidas.</li>
              </ul>
            </div>
          </section>

          <hr className="rule" />

          {/* Redesign da identidade visual */}
          <section className="case-section">
            <h2 className="case-section__title">Redesign da identidade visual</h2>
            <div className="case-columns2">
              <p>O redesign da identidade visual do Insólito teve como objetivo <strong>resgatar a essência da marca e marcar o novo conceito</strong>, traduzindo em elementos visuais sua brasilidade, criatividade e espírito transformador.</p>
              <p>O <strong>logo foi redesenhado</strong> para transmitir organicidade, fluidez e singularidade:</p>
              <ul className="case-modern__bullets">
                <li>Análise da <strong>essência da marca e da natureza brasileira;</strong></li>
                <li>Redefinição de tipografia, cores e logo;</li>
                <li>Mais <strong>curvas</strong>, mais <strong>orgânico</strong>, <strong>único</strong> e <strong>natural</strong>, refletindo a brasilidade;</li>
                <li>Uma forma que dialoga com arte e natureza, reforçando a conexão do hotel com experiências sensoriais e culturais.</li>
              </ul>
            </div>
            <div className="case-modern__gallery" style={{ marginTop: 16 }}>
              {[
                // Imagens específicas desta etapa: substituí 09:50:20 e 09:50:30 por 09:50:16 e 09:51:01 (disponíveis)
                { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.50.16.png' },
                { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.51.01.png' },
              ].map((g, i) => (
                <div key={i} className="case-modern__tile">
                  <Image src={g.src} alt={`Redesign ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>

          <hr className="rule" />

          {/* Resultados do Rebranding */}
          <section className="case-section">
            <h2 className="case-section__title">Resultados do Rebranding</h2>
            <div className="case-columns2">
              <h3 className="h3">Reconhecimento e Avaliação Positiva</h3>
              <p>O Insólito recebe elogios em plataformas de avaliação, como Booking.com e Expedia, destacando-se pela qualidade do atendimento, conforto das acomodações e o ambiente artístico. Os hóspedes frequentemente mencionam a experiência sensorial proporcionada pelo hotel, alinhada ao conceito de "Descubra Arte em sua Natureza".</p>
              <h3 className="h3" style={{ marginTop: 16 }}>Coerência Visual e Identidade Fortalecida</h3>
              <p>O redesign da identidade visual, incluindo o novo logotipo, paleta de cores sóbria e elegante, e o manifesto da marca, trouxe uma coerência visual que reflete a brasilidade, criatividade e transformação.</p>
              <h3 className="h3" style={{ marginTop: 16 }}>Engajamento nas Redes Sociais</h3>
              <p>O perfil do Instagram do Insólito (@insolitohotel) é vibrante! A curadoria de conteúdo, incluindo imagens de obras de arte, detalhes da arquitetura e experiências sensoriais, tem gerado engajamento significativo.</p>
            </div>
            <figure style={{ marginTop: 16 }}>
              <div className="case-modern__tile" style={{ aspectRatio: '4/3' }}>
                <Image src={'/images/cases/insolito/Captura de Tela 2025-08-13 às 09.55.19.png'} alt="Resultados" fill className="object-cover" />
              </div>
            </figure>
          </section>

          <hr className="rule" />

          {/* Galeria em carrossel */}
          <section id="galeria" className="case-section">
            <h2 className="case-section__title">Galeria</h2>
            <Carousel slides={(item.gallery || []).map((g, i) => (typeof g === 'string' ? { src: g } : { src: g.src, alt: g.alt }))} />
          </section>

          {/* Aside de tags/serviços */}
          <aside className="case-section" aria-label="Meta">
            <div className="body-small">👉</div>
            <p className="body-regular" style={{ marginTop: 8 }}>
              Tags de serviços realizados:<br />
              <strong>#Garden #Ativação Âmbar</strong>
            </p>
            <p className="body-regular" style={{ marginTop: 8 }}>
              <strong>Serviços:</strong><br />
              #Garden #AtivaçãoÂmbar
            </p>
            <p className="body-regular" style={{ marginTop: 8 }}>
              <strong>Tags:</strong><br />
              #Rebranding #IdentidadeVisual #BrandAwareness #PesquisaDeMercado #Tendências&Comportamento #PesquisaStakehoulders #Benchmarking #ConceitoDeMarca #PosicionamentoEstratégico #JornadaDoHóspede #ExperiênciaSensorial #PlanejamentoDeCampanhas #AtivaçãoÂmbar #HospitalidadeComArte
            </p>
          </aside>

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

  // Fallback para demais cases: estrutura anterior
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
