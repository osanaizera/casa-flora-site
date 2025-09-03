import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroFade from '@/components/shared/HeroFade';
import { getCaseBySlug, cases } from '@/data/cases';
import { notFound } from 'next/navigation';
import Carousel from '@/components/magazine/Carousel';
import ActiveSectionNav from '@/components/ui/ActiveSectionNav';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
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
  const { slug } = params;
  const item = getCaseBySlug(slug);
  if (!item) return notFound();

  // Template editorial específico para o Insólito
  if (slug === 'insolito' && item) {
    return (
      <>
        {/* Hero overlay editorial com logo */}
        <section className="case-hero-wrap">
          <div className="case-hero case-hero--fixed">
            <div className="case-hero__media">
              <Image src={item.heroImage} alt={item.title} fill className="object-cover" priority sizes="100vw" />
            </div>
            <div className="case-hero__overlay" />
            <div className="case-hero__content">
              <div className="case-hero__content-inner">
                {item.logo && (
                  <Image src={item.logo} alt={`${item.title} logo`} width={720} height={320} className="case-hero__brand-logo" priority />
                )}
                <h1 className={`case-hero__title ${item.tagline ? 'case-hero__tagline' : ''}`}>{item.tagline || item.title}</h1>
              </div>
              <svg className="case-hero__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 5v14M12 19l-6-6M12 19l6-6" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </section>
        <HeroFade />

        {/* Menu discreto fixo para sessões */}
        <ActiveSectionNav sections={[
          { href: '#sobre', label: 'Sobre' },
          { href: '#desafio', label: 'Desafio' },
          { href: '#abordagem', label: 'Abordagem' },
          { href: '#solucao', label: 'Solução' },
          { href: '#manifesto', label: 'Manifesto' },
          { href: '#redesign', label: 'Redesign' },
          { href: '#resultados', label: 'Resultados' },
          { href: '#galeria', label: 'Galeria' }
        ]} />

        {/* Artigo vertical com estrutura e texto exatos */}
        <article className="case-article max-w-6xl mx-auto px-6 md:px-12 py-24 bg-white" aria-labelledby="case-title">
          <header className="py-20 pb-10">
            <div className="max-w-4xl mx-auto px-6">
              <h1 id="case-title" className="text-4xl md:text-5xl font-light tracking-tight">Insólito <strong>Boutique Hotel &amp; Spa</strong></h1>
              <h2 className="text-lg md:text-xl text-gray-600 mt-6 uppercase tracking-[0.08em]">Da arte da essência à experiência da hospitalidade</h2>
            </div>
          </header>

          {/* Faixa contínua de imagens - largura do conteúdo */}
          <section className="pb-8 -mx-6 md:-mx-12" aria-label="Imagens de abertura">
            <div className="flex h-80 border-y border-gray-200 px-2 md:px-3">
              {[
                { src: '/images/cases/insolito/image.png', alt: 'Insólito 1' },
                { src: '/images/cases/insolito/image (1).png', alt: 'Insólito 2' },
                { src: '/images/cases/insolito/image (2).png', alt: 'Insólito 3' },
                { src: '/images/cases/insolito/image (3).png', alt: 'Insólito 4' },
                { src: '/images/cases/insolito/image (4).png', alt: 'Insólito 5' },
              ].map((img, i) => (
                <div key={i} className="relative flex-1 overflow-hidden rounded-lg mx-2 case-elevate">
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    fill 
                    className="object-cover hover:scale-102 transition-transform duration-500" 
                    sizes="20vw"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Texto introdutório exato (coluna única) */}
          <section id="sobre" className="pt-8 pb-16 dropcap">
            <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 leading-relaxed">
              <p>O Insólito é um hotel boutique e spa visualmente vibrante, com alma e estética profundamente brasileiras. Localizado à beira-mar, na praia da Ferradura, em Búzios (RJ), ele é reconhecido por sua curadoria artística: cada quarto é inspirado em uma obra de arte, transformando o espaço em uma galeria viva que celebra artistas nacionais.</p>
              <p>É um lugar onde a hospitalidade encontra cultura, e onde cada detalhe tem um significado.</p>
              <p>Como a própria fundadora e criadora da marca resume:</p>
            </div>
            <figure className="mt-8">
              <div className="max-w-4xl mx-auto px-6">
                <div className="relative h-[min(50vh,480px)] overflow-hidden rounded-lg case-elevate">
                <Image src={'/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.14.png'} alt="Citação da fundadora" fill style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </figure>
          </section>

          <hr className="rule" />

          {/* O desafio */}
          <section id="desafio" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900 uppercase tracking-[0.12em]">O desafio</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>Apesar do potencial único e da força sensorial do espaço, a marca não traduzia, nem no digital nem na experiência do hóspede, toda essa atmosfera rica. A identidade visual carecia de unidade e sofisticação, e o posicionamento não comunicava de forma estratégica o valor do hotel como destino de imersão cultural.</p>
                <p>Havia, também, a necessidade de <strong>resgatar a essência da marca</strong> e traduzir no design o novo conceito, reforçando sua brasilidade e sua singularidade artística.</p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-6 mt-4">
              <div className="space-y-6">
                {[
                  { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.51.png' },
                  { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.50.00.png' },
                ].map((g, i) => (
                <div key={i} className="relative w-full h-[min(50vh,400px)] overflow-hidden rounded-lg case-elevate">
                  <Image src={g.src} alt={`Desafio ${i + 1}`} fill className="object-cover" />
                </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="rule" />

          {/* Nossa abordagem */}
          <section id="abordagem" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900 uppercase tracking-[0.12em]">Nossa abordagem</h2>
              <div className="grid md:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
                <div className="space-y-6">
                  <p>A Casa Flora mergulhou no universo do Insólito, explorando sua história, curadoria artística e experiência sensorial. Nosso trabalho incluiu:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Avaliação do <strong>brand awareness</strong>, analisando comentários e notas de hóspedes em OTAs;</li>
                    <li>Pesquisa qualitativa com stakeholders para entender a visão interna da marca;</li>
                    <li><strong>Análise da concorrência e benchmarking</strong>, levantando rankings de audiência em redes sociais e em OTAs;</li>
                    <li><strong>Análise de tendências em hotelaria e turismo</strong>, combinada com <strong>SWOT</strong> e estudo do comportamento do consumidor pós-pandemia.</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <p>A partir desses insights, desenvolvemos o <strong>universo da marca</strong>, com definição de arquétipos, conceito, manifesto, posicionamento de mercado e <strong>redesign completo da identidade visual</strong>.</p>
                  <p>Na etapa da ativação, definimos tom de voz, editorias de conteúdo, personas, canais de comunicação online e offline, e mapeamos a <strong>jornada do hóspede</strong> do pré-reserva ao pós-estadia.</p>
                  <p>Com a <strong>Ativação Âmbar</strong>, estruturamos a consolidação da nova marca, seguindo o funil estratégico: <strong>conectar, conversar, encantar e rentabilizar</strong>, apoiado por um calendário anual de campanhas e ativações on e off-line.</p>
                </div>
              </div>
            </div>
          </section>

          <hr className="rule" />

          {/* A solução - Arquétipos da marca */}
          <section id="solucao" className="py-16">
            <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 uppercase tracking-[0.12em]">A solução</h2>
                <h3 className="text-xl md:text-2xl font-normal mb-8 text-gray-900 uppercase tracking-[0.08em]">Arquétipos da marca</h3>
              </div>
              <p>Para traduzir a essência do Insólito, definimos dois arquétipos centrais: <strong>o Mago e o Criativo</strong>. A escolha desses arquétipos reflete diretamente o propósito do hotel e a experiência que ele oferece aos hóspedes.</p>
              <p>O <strong>Mago</strong> representa transformação, inspiração e descoberta. Ele traduz a capacidade do Insólito de encantar e surpreender.</p>
            </div>
            <figure className="mt-8">
              <div className="max-w-4xl mx-auto px-6">
                <div className="relative h-[min(50vh,480px)] overflow-hidden rounded-lg border border-gray-200 bg-white">
                <Image src={'/images/cases/insolito/Captura de Tela 2025-08-13 às 09.48.54.png'} alt="Arquétipo Mago" fill className="object-cover" />
                </div>
              </div>
            </figure>
            <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 leading-relaxed mt-8">
              <p>O <strong>Criativo</strong>, por sua vez, expressa originalidade, inventividade e inovação. Ele reflete a estética singular do hotel, a curadoria artística e a brasilidade presente em cada detalhe.</p>
            </div>
            <figure className="mt-8">
              <div className="max-w-4xl mx-auto px-6">
                <div className="relative h-[min(50vh,480px)] overflow-hidden rounded-lg border border-gray-200 bg-white">
                <Image src={'/images/cases/insolito/Captura de Tela 2025-08-13 às 09.49.03.png'} alt="Arquétipo Criativo" fill className="object-cover" />
                </div>
              </div>
            </figure>
            <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 leading-relaxed mt-8">
              <p>A combinação do <strong>Mago e do Criativo</strong> posiciona o Insólito como um destino transformador e inspirador, que une estética, brasilidade e inovação. Esses arquétipos guiam toda a estratégia da marca, desde o redesign da identidade visual até a construção da jornada do hóspede, garantindo coerência entre propósito, experiência e comunicação.</p>
            </div>
          </section>

          <hr className="rule" />

          {/* Manifesto e conceito da marca */}
          <section id="manifesto" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-light mb-2 text-gray-900 uppercase tracking-[0.12em]">Manifesto</h2>
                <h3 className="text-xl md:text-2xl font-normal text-gray-700 uppercase tracking-[0.08em]">e conceito da marca</h3>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 leading-relaxed">
              <p>O manifesto do Insólito traduz o propósito, a essência e a personalidade da marca, reforçando que o hotel vai além de hospedagem: é um lugar de <strong>descoberta, arte e conexão com a brasilidade</strong>. Cada detalhe — da curadoria artística à experiência sensorial — reflete o compromisso do hotel em criar <strong>experiências únicas</strong>.</p>
            </div>
            <div className="max-w-4xl mx-auto px-6 mt-10">
              <div className="case-modern__gallery">
                {[
                  { src: '/images/experiencia.jpg' },
                  { src: '/images/hospitalidade.jpg' },
                ].map((g, i) => (
                <div key={i} className="case-modern__tile">
                  <Image src={g.src} alt={`Manifesto ${i + 1}`} fill className="object-cover" />
                </div>
                ))}
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 leading-relaxed mt-8">
              <p>Ao final, o manifesto convida o hóspede a vivenciar essa experiência de forma ativa. Esse <strong>convite</strong> conecta diretamente ao conceito central da marca, <strong>“Descubra Arte em sua Natureza”</strong>, que guia todas as experiências, comunicações e ativações do hotel, orientando o hóspede a explorar a brasilidade, a arte e a criatividade de cada espaço de forma integrada e inspiradora.</p>
            </div>
            <div className="max-w-4xl mx-auto px-6 mt-10">
              <div className="case-modern__gallery">
                {[
                  { src: '/images/garden.jpg' },
                ].map((g, i) => (
                <div key={i} className="case-modern__tile">
                  <Image src={g.src} alt={`Conceito ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 leading-relaxed mt-8">
              <p>O <strong>conceito central</strong>, <strong>“Descubra Arte em sua Natureza”</strong>, sintetiza a proposta do Insólito de maneira clara e inspiradora. Ele une dois pilares fundamentais da marca:</p>
              <ul className="case-modern__bullets">
                <li><strong>Arte:</strong> cada espaço, cada quarto e cada experiência são cuidadosamente curados para revelar a criatividade e a cultura brasileiras;</li>
                <li><strong>Natureza:</strong> a brasilidade e a conexão com o ambiente natural são evidentes em cada detalhe do design, identidade visual e experiências oferecidas.</li>
              </ul>
            </div>
          </section>

          <hr className="rule" />

          {/* Redesign da identidade visual */}
          <section id="redesign" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900 uppercase tracking-[0.12em]">Redesign da identidade visual</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>O redesign da identidade visual do Insólito teve como objetivo <strong>resgatar a essência da marca e marcar o novo conceito</strong>, traduzindo em elementos visuais sua brasilidade, criatividade e espírito transformador.</p>
              <p>O <strong>logo foi redesenhado</strong> para transmitir organicidade, fluidez e singularidade:</p>
              <ul className="case-modern__bullets">
                <li>Análise da <strong>essência da marca e da natureza brasileira;</strong></li>
                <li>Redefinição de tipografia, cores e logo;</li>
                <li>Mais <strong>curvas</strong>, mais <strong>orgânico</strong>, <strong>único</strong> e <strong>natural</strong>, refletindo a brasilidade;</li>
                <li>Uma forma que dialoga com arte e natureza, reforçando a conexão do hotel com experiências sensoriais e culturais.</li>
              </ul>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-6 mt-4">
              <div className="case-modern__gallery">
                {[
                  { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.50.16.png' },
                  { src: '/images/cases/insolito/Captura de Tela 2025-08-13 às 09.51.01.png' },
                ].map((g, i) => (
                <div key={i} className="case-modern__tile">
                  <Image src={g.src} alt={`Redesign ${i + 1}`} fill className="object-cover" />
                </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="rule" />

          {/* Resultados do Rebranding */}
          <section id="resultados" className="py-16">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-light mb-10 text-gray-900 uppercase tracking-[0.12em] text-center">Resultados do Rebranding</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-normal text-gray-900 uppercase tracking-[0.08em]">Reconhecimento e Avaliação Positiva</h3>
                  <p className="text-gray-700 leading-relaxed">O Insólito recebe elogios em plataformas de avaliação, como Booking.com e Expedia, destacando-se pela qualidade do atendimento, conforto das acomodações e o ambiente artístico. Os hóspedes frequentemente mencionam a experiência sensorial proporcionada pelo hotel, alinhada ao conceito de &quot;Descubra Arte em sua Natureza&quot;.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-normal text-gray-900 uppercase tracking-[0.08em]">Coerência Visual e Identidade Fortalecida</h3>
                  <p className="text-gray-700 leading-relaxed">O redesign da identidade visual, incluindo o novo logotipo, paleta de cores sóbria e elegante, e o manifesto da marca, trouxe uma coerência visual que reflete a brasilidade, criatividade e transformação.</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-normal text-gray-900 uppercase tracking-[0.08em]">Engajamento nas Redes Sociais</h3>
                  <p className="text-gray-700 leading-relaxed">O perfil do Instagram do Insólito (@insolitohotel) é vibrante! A curadoria de conteúdo, incluindo imagens de obras de arte, detalhes da arquitetura e experiências sensoriais, tem gerado engajamento significativo.</p>
                </div>
              </div>
            </div>
            <figure className="mt-8">
              <div className="max-w-4xl mx-auto px-6">
                <div className="relative h-[min(50vh,480px)] overflow-hidden rounded-lg border border-gray-200 bg-white">
                <Image src={'/images/cases/insolito/Captura de Tela 2025-08-13 às 09.55.19.png'} alt="Resultados" fill className="object-cover" />
                </div>
              </div>
            </figure>
          </section>

          <hr className="rule" />

          {/* Galeria */}
          <section id="galeria" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900 uppercase tracking-[0.12em]">Galeria</h2>
            </div>
            <div className="max-w-4xl mx-auto px-6 mt-4">
              <div className="rounded-lg overflow-hidden case-elevate">
                <Carousel
                  slides={(item.gallery || []).map((g, i) => (
                    typeof g === 'string'
                      ? { src: g, alt: `${item.title} ${i + 1}` }
                      : { src: g.src, alt: g.alt ?? `${item.title} ${i + 1}` }
                  ))}
                />
              </div>
            </div>
          </section>

          {/* Meta informações */}
          <section className="py-16 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-4">Serviços Realizados</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-900 text-white">
                      Garden
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-900 text-white">
                      Ativação Âmbar
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-4">Áreas de Atuação</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Rebranding', 'Identidade Visual', 'Brand Awareness', 'Pesquisa de Mercado', 'Benchmarking', 'Conceito de Marca', 'Posicionamento Estratégico', 'Jornada do Hóspede', 'Experiência Sensorial', 'Planejamento de Campanhas'].map((tag, i) => (
                      <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Outros Cases */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 uppercase tracking-[0.12em]">Outros Cases</h2>
                <p className="text-gray-600 mt-4">Explore mais projetos da Casa Flora</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {cases.filter(c => c.slug !== slug).map((caseItem, i) => (
                  <Link key={i} href={`/cases/${caseItem.slug}`} className="group cursor-pointer">
                    <div className="relative h-56 overflow-hidden rounded-lg bg-gray-200 mb-3">
                      {caseItem.heroImage && (
                        <Image 
                          src={caseItem.heroImage} 
                          alt={caseItem.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="text-lg font-medium mb-1">{caseItem.title}</h3>
                        <p className="text-xs opacity-90 mb-1">{caseItem.segment || caseItem.category}</p>
                        {caseItem.year && (
                          <p className="text-xs opacity-75">{caseItem.year}</p>
                        )}
                      </div>
                    </div>
                    <div className="px-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{caseItem.title}</h4>
                      <p className="text-xs text-gray-600 line-clamp-2">{caseItem.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  ← Voltar para Home
                </Link>
                <Link 
                  href="/contato" 
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Quero um projeto assim para o meu negócio →
                </Link>
              </div>
            </div>
          </section>

        </article>
      </>
    );
  }

  // Fallback para demais cases: estrutura editorial genérica
  const sections = [
    { href: '#sobre', label: 'Sobre', enabled: !!(item.description || item.aboutHotel) },
    { href: '#desafio', label: 'Desafio', enabled: !!item.challenge },
    { href: '#abordagem', label: 'Abordagem', enabled: (item.approach || []).length > 0 },
    { href: '#solucao', label: 'Solução', enabled: (item.solution || []).length > 0 },
    { href: '#resultados', label: 'Resultados', enabled: !!(item.resultsText || (item.results || []).length) },
    { href: '#galeria', label: 'Galeria', enabled: (item.gallery || []).length > 0 },
  ].filter(s => s.enabled);

  return (
    <>
      {/* Hero overlay editorial com logo */}
      <section className="case-hero-wrap">
        <div className="case-hero case-hero--fixed">
          <div className="case-hero__media">
            <Image src={item.heroImage} alt={item.title} fill className="object-cover" priority sizes="100vw" />
          </div>
          <div className="case-hero__overlay" />
          <div className="case-hero__content">
            <div className="case-hero__content-inner">
              {item.logo && (
                <Image src={item.logo} alt={`${item.title} logo`} width={280} height={120} className="case-hero__brand-logo" priority />
              )}
              <h1 className="case-hero__title">{item.tagline || item.title}</h1>
            </div>
            <svg className="case-hero__arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 5v14M12 19l-6-6M12 19l6-6" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>
      <HeroFade />

      {/* Menu discreto fixo para sessões */}
      <ActiveSectionNav sections={sections} />

      <article className="case-article max-w-6xl mx-auto px-6 md:px-12 py-24 bg-white" aria-labelledby="case-title">
        <header className="py-14">
          <div className="max-w-4xl mx-auto px-6">
            <h1 id="case-title" className="text-4xl md:text-5xl font-light tracking-tight">{item.client || item.title}</h1>
            <p className="text-sm text-gray-600 mt-3 uppercase tracking-[0.12em]">
              {item.location} • {item.segment || item.category} • {item.year}
            </p>
            {item.summary && <p className="mt-6 text-gray-700 leading-relaxed">{item.summary}</p>}
          </div>
        </header>

        {(item.description || item.aboutHotel) && (
          <section id="sobre" className="py-12">
            <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-light mb-2 text-gray-900 uppercase tracking-[0.12em]">Sobre</h2>
              <p>{item.aboutHotel || item.description}</p>
            </div>
          </section>
        )}

        {item.challenge && (
          <>
          <hr className="rule" />
          <section id="desafio" className="py-12">
            <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-light mb-2 text-gray-900 uppercase tracking-[0.12em]">O desafio</h2>
              <p>{item.challenge}</p>
            </div>
          </section>
          </>
        )}

        {(item.approach || []).length > 0 && (
          <>
          <hr className="rule" />
          <section id="abordagem" className="py-12">
            <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-light mb-2 text-gray-900 uppercase tracking-[0.12em]">Nossa abordagem</h2>
              <ul className="list-disc pl-6 space-y-2">
                {item.approach!.map((a, i) => (<li key={i}>{a}</li>))}
              </ul>
            </div>
          </section>
          </>
        )}

        {(item.solution || []).length > 0 && (
          <>
          <hr className="rule" />
          <section id="solucao" className="py-12">
            <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-light mb-2 text-gray-900 uppercase tracking-[0.12em]">A solução</h2>
              <ul className="list-disc pl-6 space-y-2">
                {item.solution!.map((s, i) => (<li key={i}>{s}</li>))}
              </ul>
            </div>
          </section>
          </>
        )}

        {(item.resultsText || (item.results || []).length) && (
          <>
          <hr className="rule" />
          <section id="resultados" className="py-12">
            <div className="max-w-4xl mx-auto px-6 space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-light mb-2 text-gray-900 uppercase tracking-[0.12em]">Resultados</h2>
              {item.resultsText && <p>{item.resultsText}</p>}
              {(item.results || []).length > 0 && (
                <ul className="list-disc pl-6 space-y-2">
                  {item.results!.map((r, i) => (<li key={i}>{r}</li>))}
                </ul>
              )}
            </div>
          </section>
          </>
        )}

        {(item.gallery || []).length > 0 && (
          <>
          <hr className="rule" />
          <section id="galeria" className="py-12">
            <div className="grid md:grid-cols-3 gap-4">
              {item.gallery!.map((g: string | { src: string; alt?: string; span?: 'wide' | 'tall' | 'normal' }, i: number) => {
                const src = typeof g === 'string' ? g : g.src;
                const alt = typeof g === 'string' ? `${item.title} ${i+1}` : (g.alt || `${item.title} ${i+1}`);
                const span = typeof g === 'string' ? 'normal' : g.span;
                const cls = span === 'wide' ? 'md:col-span-2' : span === 'tall' ? 'row-span-2' : '';
                return (
                  <div key={i} className={`relative h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg border border-gray-200 bg-white ${cls}`}>
                    <Image src={src} alt={alt} fill className="object-cover" />
                  </div>
                );
              })}
            </div>
          </section>
          </>
        )}
      </article>
    </>
  );
}
