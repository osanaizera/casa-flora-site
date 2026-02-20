import { Metadata } from 'next';
import Link from 'next/link';
import './workshop-branding.css';

export const metadata: Metadata = {
  title: 'Workshop: Branding como Ativo de Negócio | Casa Flora',
  description:
    'Como criamos marcas de alto padrão realmente originais e desejadas. A metodologia Casa Flora aplicada na prática. 17 e 18 de março, online.',
  openGraph: {
    title: 'Workshop: Branding como Ativo de Negócio | Casa Flora',
    description:
      'A metodologia Casa Flora aplicada na prática. Aprenda a criar marcas de alto padrão realmente originais.',
    images: ['/images/workshop-branding-og.jpg'],
  },
};

export default function WorkshopBrandingPage() {
  return (
    <main className="wb">
      {/* ═══════ HERO ═══════ */}
      <section className="wb-hero">
        <div className="wb-hero__bg" />
        <div className="wb-hero__overlay" />

        <div className="wb-hero__inner">
          <span className="wb-hero__eyebrow">Workshop Casa Flora</span>

          <h1 className="wb-hero__title">
            <span className="wb-hero__title-thin">Branding como</span>
            <span className="wb-hero__title-italic">ativo de negócio</span>
          </h1>

          <p className="wb-hero__sub">
            A metodologia Casa Flora aplicada na prática
          </p>

          <a href="#inscricao" className="wb-cta wb-cta--hero">
            <span>Garantir minha vaga</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10h12M12 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className="wb-hero__badges">
            <div className="wb-badge">
              <span className="wb-badge__value">17–18 Mar</span>
            </div>
            <div className="wb-badge">
              <span className="wb-badge__value">19h – 22h</span>
            </div>
            <div className="wb-badge">
              <span className="wb-badge__value">Online ao vivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROPOSTA — BENTO GRID ═══════ */}
      <section className="wb-section wb-proposta">
        <div className="wb-container">
          <div className="wb-section__header">
            <span className="wb-eyebrow">A proposta</span>
          </div>

          <div className="bento-grid">
            {/* Card 1: Grande com imagem — span 2 cols + 2 rows */}
            <div className="bento-card bento-card--img bento-card--wide bento-card--tall">
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/juntos.jpeg)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content">
                <p className="bento-card__desc" style={{ opacity: 1, marginBottom: 12 }}>
                  É um convite para abrir a nossa casa. Compartilhar processos, decisões,
                  bastidores e aprendizados de quem atua diretamente com marcas de alto
                  padrão.
                </p>
                <h3 className="bento-card__title--lg" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  margin: 0,
                }}>
                  Experiência, hospitalidade e lifestyle
                </h3>
              </div>
            </div>

            {/* Card 2: Texto — Este não é um curso */}
            <div className="bento-card bento-card--text bento-card--wide">
              <div className="bento-card__content">
                <h3 className="bento-card__title--lg" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 300,
                  lineHeight: 1.3,
                  margin: 0,
                  color: 'var(--neutral-900)',
                }}>
                  Este não é um <em style={{ fontStyle: 'italic', color: 'var(--earth-600)' }}>curso</em> tradicional.
                </h3>
                <p className="bento-card__desc bento-card__desc--dark" style={{ marginTop: 16 }}>
                  Não partimos do lugar de &ldquo;professores&rdquo;, mas de quem{' '}
                  <strong>vive o mercado</strong>, constrói, erra, ajusta e sustenta marcas reais.
                </p>
              </div>
            </div>

            {/* Card 3: Stats — 2 noites */}
            <div className="bento-card bento-card--dark">
              <div className="bento-card__content bento-card__content--center">
                <p className="bento-card__stat">2</p>
                <p className="bento-card__desc" style={{ opacity: 0.6, textAlign: 'center' }}>
                  noites intensivas
                </p>
              </div>
            </div>

            {/* Card 4: Stats — 6 horas */}
            <div className="bento-card bento-card--earth">
              <div className="bento-card__content bento-card__content--center">
                <p className="bento-card__stat">6h</p>
                <p className="bento-card__desc" style={{ opacity: 0.8, textAlign: 'center' }}>
                  de conteúdo prático
                </p>
              </div>
            </div>

            {/* Card 5: Citação */}
            <div className="bento-card bento-card--quote bento-card--wide">
              <div className="bento-card__content" style={{ justifyContent: 'center', padding: 40 }}>
                <p className="bento-card__quote-text">
                  &ldquo;Você não entra para ouvir teoria. Você entra para ver como
                  fazemos, por que escolhemos e o que aprendemos ao longo do caminho.&rdquo;
                </p>
                <span className="bento-card__quote-author">— Casa Flora</span>
              </div>
            </div>

            {/* Card 6: Stats — 100% */}
            <div className="bento-card bento-card--img">
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/hospitalidade.jpg)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content bento-card__content--center">
                <p className="bento-card__stat">100%</p>
                <p className="bento-card__desc" style={{ opacity: 0.9, textAlign: 'center' }}>
                  prática
                </p>
              </div>
            </div>

            {/* Card 7: Stats — 10+ */}
            <div className="bento-card bento-card--text">
              <div className="bento-card__content bento-card__content--center">
                <p className="bento-card__stat" style={{ color: 'var(--earth-600)' }}>10+</p>
                <p className="bento-card__desc bento-card__desc--dark" style={{ textAlign: 'center' }}>
                  ferramentas e frameworks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ OLHAR CASA FLORA — BENTO GRID ═══════ */}
      <section className="wb-section wb-olhar">
        <div className="wb-container">
          <div className="wb-section__header">
            <span className="wb-eyebrow" style={{ color: 'var(--earth-400)' }}>
              O olhar Casa Flora
            </span>
            <h2 className="wb-heading wb-heading--light">
              Mais do que ferramentas,
              <br />
              este curso treina <em>olhar</em>.
            </h2>
          </div>

          <div className="bento-grid">
            {/* Pilar 1: Repertório — wide com imagem */}
            <div className="bento-card bento-card--img bento-card--wide" style={{ minHeight: 320 }}>
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/garden.jpg)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content">
                <span className="wb-pill wb-pill--light" style={{ alignSelf: 'flex-start', marginBottom: 12 }}>
                  Pilar 01
                </span>
                <h3 className="bento-card__title">Repertório</h3>
                <p className="bento-card__desc" style={{ opacity: 0.85 }}>
                  Formação de olhar através de referências diversas e profundas
                </p>
              </div>
            </div>

            {/* Pilar 2: Referência — text card */}
            <div className="bento-card bento-card--text" style={{
              background: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(255,255,255,0.1)',
            }}>
              <div className="bento-card__content" style={{ color: '#fff', justifyContent: 'center' }}>
                <span className="bento-card__label" style={{ color: 'var(--earth-400)' }}>Pilar 02</span>
                <h3 className="bento-card__title">Referência</h3>
                <p className="bento-card__desc" style={{ color: 'rgba(255,255,255,0.6)', opacity: 1 }}>
                  Como usar sem copiar — curadoria intencional
                </p>
              </div>
            </div>

            {/* Pilar 3: Bagagem — text card */}
            <div className="bento-card bento-card--text" style={{
              background: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(255,255,255,0.1)',
            }}>
              <div className="bento-card__content" style={{ color: '#fff', justifyContent: 'center' }}>
                <span className="bento-card__label" style={{ color: 'var(--earth-400)' }}>Pilar 03</span>
                <h3 className="bento-card__title">Bagagem</h3>
                <p className="bento-card__desc" style={{ color: 'rgba(255,255,255,0.6)', opacity: 1 }}>
                  Experiência cultural como matéria-prima criativa
                </p>
              </div>
            </div>

            {/* Pilar 4: Sensibilidade — imagem */}
            <div className="bento-card bento-card--img bento-card--wide" style={{ minHeight: 280 }}>
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/raiz.jpg)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content">
                <span className="wb-pill wb-pill--light" style={{ alignSelf: 'flex-start', marginBottom: 12 }}>
                  Pilar 04
                </span>
                <h3 className="bento-card__title">Sensibilidade</h3>
                <p className="bento-card__desc" style={{ opacity: 0.85 }}>
                  Percepção do intangível que torna marcas memoráveis
                </p>
              </div>
            </div>

            {/* Pilar 5: Critério — accent card */}
            <div className="bento-card bento-card--wide" style={{ background: 'var(--earth-600)' }}>
              <div className="bento-card__content" style={{ color: '#fff', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <span className="bento-card__label" style={{ color: 'rgba(255,255,255,0.6)' }}>Pilar 05</span>
                <h3 className="bento-card__title" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>Critério</h3>
                <p className="bento-card__desc" style={{ opacity: 0.85, maxWidth: 400 }}>
                  Escolhas bem feitas quando tudo é possível
                </p>
              </div>
            </div>
          </div>

          {/* Statement */}
          <div style={{
            maxWidth: 700,
            margin: '48px auto 0',
            padding: '32px 40px',
            borderLeft: '3px solid var(--earth-400)',
            textAlign: 'left',
          }}>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.75)',
              margin: 0,
            }}>
              Branding de alto padrão não nasce de fórmulas. Nasce de{' '}
              <strong style={{ color: '#fff' }}>escolhas bem feitas</strong> em um universo onde
              tudo é possível.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ MÓDULOS — BENTO GRID ═══════ */}
      <section className="wb-section wb-modulos">
        <div className="wb-container">
          <div className="wb-section__header">
            <span className="wb-eyebrow">Estrutura do curso</span>
            <h2 className="wb-heading">
              6 módulos + 1 bônus
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--neutral-600)',
              maxWidth: 600,
              margin: '0 auto',
            }}>
              Do pensamento estratégico à aplicação no mundo
            </p>
          </div>

          <div className="bento-grid bento-grid--3">
            {/* Módulo 01 — tall */}
            <div className="bento-card bento-card--img bento-card--tall">
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/experiencia.jpg)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content">
                <span className="bento-card__num">Módulo 01</span>
                <h3 className="bento-card__title">Comece por aqui</h3>
                <p className="bento-card__sub">Por que branding é ativo de negócio</p>
              </div>
            </div>

            {/* Módulo 02 */}
            <div className="bento-card bento-card--img">
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/hospitalidade.jpg)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content">
                <span className="bento-card__num">Módulo 02</span>
                <h3 className="bento-card__title">Como treinamos nosso olhar</h3>
                <p className="bento-card__sub">Referência, repertório e leitura de contexto</p>
              </div>
            </div>

            {/* Módulo 03 */}
            <div className="bento-card bento-card--img">
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/raiz.jpg)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content">
                <span className="bento-card__num">Módulo 03</span>
                <h3 className="bento-card__title">Como fazemos o diagnóstico</h3>
                <p className="bento-card__sub">O que olhar, cruzar e decidir</p>
              </div>
            </div>

            {/* Módulo 04 */}
            <div className="bento-card bento-card--img">
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/garden.jpg)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content">
                <span className="bento-card__num">Módulo 04</span>
                <h3 className="bento-card__title">O que torna uma marca diferente</h3>
                <p className="bento-card__sub">Posicionamento, personalidade e escolha</p>
              </div>
            </div>

            {/* Módulo 05 — tall */}
            <div className="bento-card bento-card--img bento-card--tall">
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/seiva.png)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content">
                <span className="bento-card__num">Módulo 05</span>
                <h3 className="bento-card__title">Como a marca ganha forma</h3>
                <p className="bento-card__sub">Narrativa, identidade e experiência</p>
              </div>
            </div>

            {/* Módulo 06 — Final */}
            <div className="bento-card bento-card--img">
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/ambar.png)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content">
                <span className="bento-card__num">Módulo Final</span>
                <h3 className="bento-card__title">Como sustentamos marcas</h3>
                <p className="bento-card__sub">Gestão, experiência e encantamento</p>
              </div>
            </div>
          </div>

          {/* Bônus — full width */}
          <div className="wb-bonus">
            <div className="bento-card bento-card--img bento-card--full" style={{ minHeight: 300 }}>
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/form.jpeg)' }}
              />
              <div className="bento-card__overlay bento-card__overlay--full" />
              <div className="bento-card__content" style={{ maxWidth: 640 }}>
                <span className="wb-pill" style={{ alignSelf: 'flex-start', marginBottom: 16 }}>
                  Bônus exclusivo
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                  fontWeight: 400,
                  color: '#fff',
                  margin: '0 0 12px',
                  lineHeight: 1.2,
                }}>
                  Como é a Casa Flora por dentro
                </h3>
                <p className="bento-card__desc" style={{ opacity: 0.75 }}>
                  Bastidores profissionais: briefing, entrega, orientação ao cliente e postura
                  com marcas de alto padrão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BENEFÍCIOS — BENTO GRID ═══════ */}
      <section className="wb-section wb-benefits">
        <div className="wb-container">
          <div className="wb-section__header">
            <span className="wb-eyebrow">O que você vai receber</span>
            <h2 className="wb-heading">Tudo para aplicar de verdade</h2>
          </div>

          <div className="bento-grid">
            {/* Benefit 1: Apostila — wide + imagem */}
            <div className="bento-card bento-card--img bento-card--wide" style={{ minHeight: 280 }}>
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/cases/insolito/resultado0.jpeg)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content">
                <span className="wb-benefit-icon">📖</span>
                <h3 className="bento-card__title">Apostila completa</h3>
                <p className="bento-card__desc" style={{ opacity: 0.85 }}>
                  Todo o conteúdo organizado para consulta permanente
                </p>
              </div>
            </div>

            {/* Benefit 2: Ferramentas — número grande */}
            <div className="bento-card bento-card--dark bento-card--tall">
              <div className="bento-card__content bento-card__content--center">
                <span className="wb-benefit-icon wb-benefit-icon--lg">🛠</span>
                <p className="bento-card__stat" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>10+</p>
                <h3 className="bento-card__title" style={{ textAlign: 'center' }}>
                  Ferramentas práticas
                </h3>
                <p className="bento-card__desc" style={{ textAlign: 'center', opacity: 0.6 }}>
                  Templates e frameworks de aplicação imediata
                </p>
              </div>
            </div>

            {/* Benefit 3: Construção ao vivo */}
            <div className="bento-card bento-card--text">
              <div className="bento-card__content" style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <span className="wb-benefit-icon wb-benefit-icon--lg">🎯</span>
                <h3 className="bento-card__title" style={{ color: 'var(--neutral-900)' }}>
                  Construção ao vivo
                </h3>
                <p className="bento-card__desc bento-card__desc--dark" style={{ textAlign: 'center' }}>
                  Acompanhe o processo real de criação de marca
                </p>
              </div>
            </div>

            {/* Benefit 4: Mentoria — imagem */}
            <div className="bento-card bento-card--img" style={{ minHeight: 260 }}>
              <div
                className="bento-card__bg"
                style={{ backgroundImage: 'url(/images/cases/insolito/resultados1.jpeg)' }}
              />
              <div className="bento-card__overlay" />
              <div className="bento-card__content">
                <span className="wb-benefit-icon">💬</span>
                <h3 className="bento-card__title">Mentoria em grupo</h3>
                <p className="bento-card__desc" style={{ opacity: 0.85 }}>
                  Sessões de perguntas e direcionamento
                </p>
              </div>
            </div>

            {/* Benefit 5: Gravações — earth accent */}
            <div className="bento-card bento-card--earth bento-card--wide">
              <div className="bento-card__content" style={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                flexDirection: 'row',
                gap: 24,
                flexWrap: 'wrap',
              }}>
                <span style={{ fontSize: '3rem' }}>🎥</span>
                <div>
                  <h3 className="bento-card__title">Acesso às gravações</h3>
                  <p className="bento-card__desc" style={{ opacity: 0.85 }}>
                    Reveja o conteúdo quando e onde quiser
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ INVESTIMENTO ═══════ */}
      <section id="inscricao" className="wb-section wb-invest">
        <div className="wb-container">
          <div className="wb-section__header" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="wb-eyebrow">Investimento</span>
            <h2 className="wb-heading">
              Transforme seu <em>olhar</em> sobre branding.
            </h2>
          </div>

          <div className="wb-invest__layout">
            {/* Left: info */}
            <div className="wb-invest__info">
              <div className="wb-invest__details">
                <div className="wb-invest__detail">
                  <span className="wb-invest__detail-icon">📅</span>
                  <div>
                    <strong>17 e 18 de março</strong>
                    <span>Terça e quarta-feira</span>
                  </div>
                </div>
                <div className="wb-invest__detail">
                  <span className="wb-invest__detail-icon">🕖</span>
                  <div>
                    <strong>19h às 22h</strong>
                    <span>Horário de Brasília</span>
                  </div>
                </div>
                <div className="wb-invest__detail">
                  <span className="wb-invest__detail-icon">💻</span>
                  <div>
                    <strong>Online, ao vivo</strong>
                    <span>Com acesso às gravações</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: pricing card */}
            <div className="wb-price-card">
              <div className="wb-price-card__ribbon">Primeiras 5 vagas</div>
              <div className="wb-price-card__old">R$ 1.497</div>
              <div className="wb-price-card__current">
                <span className="wb-price-card__currency">R$</span>
                <span className="wb-price-card__amount">997</span>
              </div>
              <p className="wb-price-card__installment">ou 12× de R$ 97 via Hotmart</p>
              <a
                href="https://pay.hotmart.com/XXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="wb-cta wb-cta--price"
              >
                <span>Garantir vaga agora</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12M12 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <p className="wb-price-card__note">
                Vagas limitadas · Pagamento seguro via Hotmart
              </p>
              <div className="wb-price-card__after">
                <strong>Após as 5 primeiras:</strong> R$ 1.497
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER CTA ═══════ */}
      <section className="wb-footer-cta">
        <div className="wb-footer-cta__bg" />
        <div className="wb-footer-cta__overlay" />
        <div className="wb-footer-cta__inner">
          <h2 className="wb-footer-cta__title">
            Pronto para criar marcas
            <br />
            que realmente <em>se destacam</em>?
          </h2>
          <a href="#inscricao" className="wb-cta wb-cta--white">
            <span>Garantir minha vaga</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10h12M12 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p className="wb-footer-cta__back">
            <Link href="/">← Voltar para Casa Flora</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
