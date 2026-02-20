import { Metadata } from 'next';
import Link from 'next/link';
import './workshop-branding.css';

export const metadata: Metadata = {
  title: 'Workshop: Branding como Ativo de Negócio | Casa Flora',
  description: 'Como criamos marcas de alto padrão realmente originais e desejadas. A metodologia Casa Flora aplicada na prática. 17 e 18 de março, online.',
  openGraph: {
    title: 'Workshop: Branding como Ativo de Negócio | Casa Flora',
    description: 'A metodologia Casa Flora aplicada na prática. Aprenda a criar marcas de alto padrão realmente originais.',
    images: ['/images/workshop-branding-og.jpg'],
  },
};

const modules = [
  {
    number: '01',
    title: 'Comece por aqui',
    subtitle: 'Por que branding é ativo de negócio',
    image: '/images/experiencia.jpg',
  },
  {
    number: '02',
    title: 'Como treinamos nosso olhar',
    subtitle: 'Referência, repertório e leitura de contexto',
    image: '/images/hospitalidade.jpg',
  },
  {
    number: '03',
    title: 'Como fazemos o diagnóstico',
    subtitle: 'O que olhar, cruzar e decidir',
    image: '/images/raiz.jpg',
  },
  {
    number: '04',
    title: 'O que torna uma marca diferente',
    subtitle: 'Posicionamento, personalidade e escolha',
    image: '/images/garden.jpg',
  },
  {
    number: '05',
    title: 'Como a marca ganha forma',
    subtitle: 'Narrativa, identidade e experiência',
    image: '/images/seiva.png',
  },
  {
    number: 'Final',
    title: 'Como sustentamos marcas',
    subtitle: 'Gestão, experiência e encantamento',
    image: '/images/ambar.png',
  },
];

const pillars = [
  { title: 'Repertório', desc: 'Formação de olhar através de referências diversas e profundas' },
  { title: 'Referência', desc: 'Como usar sem copiar — curadoria intencional' },
  { title: 'Bagagem', desc: 'Experiência cultural como matéria-prima criativa' },
  { title: 'Sensibilidade', desc: 'Percepção do intangível que torna marcas memoráveis' },
  { title: 'Critério', desc: 'Escolhas bem feitas quando tudo é possível' },
];

const benefits = [
  { icon: '📖', title: 'Apostila completa', desc: 'Todo o conteúdo organizado para consulta permanente' },
  { icon: '🛠', title: '10 ferramentas práticas', desc: 'Templates e frameworks de aplicação imediata' },
  { icon: '🎯', title: 'Construção ao vivo', desc: 'Acompanhe o processo real de criação de marca' },
  { icon: '💬', title: 'Mentoria em grupo', desc: 'Sessões de perguntas e direcionamento' },
  { icon: '🎥', title: 'Acesso às gravações', desc: 'Reveja o conteúdo quando e onde quiser' },
];

export default function WorkshopBrandingPage() {
  return (
    <main className="wb">
      {/* ═══════ HERO ═══════ */}
      <section className="wb-hero">
        <div className="wb-hero__bg" />
        <div className="wb-hero__overlay" />

        {/* floating accent blurs */}
        <div className="wb-hero__accent wb-hero__accent--1" />
        <div className="wb-hero__accent wb-hero__accent--2" />

        <div className="wb-hero__inner">
          <span className="wb-hero__eyebrow">Workshop Casa Flora</span>

          <h1 className="wb-hero__title">
            <span className="wb-hero__title-thin">Branding como</span>
            <span className="wb-hero__title-italic">ativo de negócio</span>
          </h1>

          <p className="wb-hero__sub">
            A metodologia Casa Flora aplicada na prática
          </p>

          <p className="wb-hero__lead">
            Como criamos marcas de alto padrão <strong>realmente originais e desejadas</strong>
          </p>

          <a href="#inscricao" className="wb-cta wb-cta--hero">
            <span>Garantir minha vaga</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <div className="wb-hero__badges">
            <div className="wb-badge">
              <span className="wb-badge__label">Data</span>
              <span className="wb-badge__value">17–18 Mar</span>
            </div>
            <div className="wb-badge">
              <span className="wb-badge__label">Horário</span>
              <span className="wb-badge__value">19h – 22h</span>
            </div>
            <div className="wb-badge">
              <span className="wb-badge__label">Formato</span>
              <span className="wb-badge__value">Online ao vivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROPOSTA ═══════ */}
      <section className="wb-section wb-proposta">
        <div className="wb-container">
          <div className="wb-proposta__grid">
            <div className="wb-proposta__image-col">
              <div className="wb-proposta__image-wrapper">
                <img src="/images/juntos.jpeg" alt="Casa Flora — bastidores" className="wb-proposta__img" />
                <div className="wb-proposta__img-overlay" />
              </div>
            </div>

            <div className="wb-proposta__text-col">
              <span className="wb-eyebrow">A proposta</span>
              <h2 className="wb-heading">
                Este não é um <em>curso</em> tradicional.
              </h2>
              <p className="wb-body wb-body--lg">
                Não partimos do lugar de &ldquo;professores&rdquo;, mas de quem <strong>vive o mercado</strong>, constrói, erra, ajusta e sustenta marcas reais.
              </p>
              <p className="wb-body">
                É um convite para abrir a nossa casa. Compartilhar processos, decisões, bastidores e aprendizados de quem atua diretamente com marcas de alto padrão — especialmente nos universos de <strong>experiência, hospitalidade e lifestyle</strong>.
              </p>
              <p className="wb-body">
                Você não entra para ouvir teoria. Você entra para <strong>ver como fazemos</strong>, <strong>por que escolhemos</strong> e <strong>o que aprendemos ao longo do caminho</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ OLHAR CASA FLORA ═══════ */}
      <section className="wb-section wb-olhar">
        <div className="wb-olhar__bg-image" />
        <div className="wb-olhar__bg-overlay" />

        <div className="wb-container wb-olhar__inner">
          <span className="wb-eyebrow wb-eyebrow--light">O olhar Casa Flora</span>
          <h2 className="wb-heading wb-heading--light">
            Mais do que ferramentas,<br />este curso treina <em>olhar</em>.
          </h2>

          <div className="wb-pillars">
            {pillars.map((p) => (
              <div key={p.title} className="wb-pillar">
                <h3 className="wb-pillar__title">{p.title}</h3>
                <p className="wb-pillar__desc">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="wb-olhar__statement">
            <p>
              Branding de alto padrão não nasce de fórmulas. Nasce de <strong>escolhas bem feitas</strong> em um universo onde tudo é possível.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ MÓDULOS ═══════ */}
      <section className="wb-section wb-modulos">
        <div className="wb-container">
          <span className="wb-eyebrow">Estrutura do curso</span>
          <h2 className="wb-heading">
            6 módulos + 1 bônus
          </h2>
          <p className="wb-subheading">Do pensamento estratégico à aplicação no mundo</p>

          <div className="wb-modules-grid">
            {modules.map((m) => (
              <div key={m.number} className="wb-mod-card">
                <div
                  className="wb-mod-card__bg"
                  style={{ backgroundImage: `url(${m.image})` }}
                />
                <div className="wb-mod-card__overlay" />
                <div className="wb-mod-card__content">
                  <span className="wb-mod-card__num">{m.number}</span>
                  <h3 className="wb-mod-card__title">{m.title}</h3>
                  <p className="wb-mod-card__sub">{m.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bônus card — full-width */}
          <div className="wb-bonus">
            <div
              className="wb-bonus__bg"
              style={{ backgroundImage: 'url(/images/form.jpeg)' }}
            />
            <div className="wb-bonus__overlay" />
            <div className="wb-bonus__content">
              <span className="wb-bonus__badge">Bônus exclusivo</span>
              <h3 className="wb-bonus__title">Como é a Casa Flora por dentro</h3>
              <p className="wb-bonus__sub">
                Bastidores profissionais: briefing, entrega, orientação ao cliente e postura com marcas de alto padrão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ O QUE VOCÊ RECEBE ═══════ */}
      <section className="wb-section wb-benefits">
        <div className="wb-benefits__accent-circle" />
        <div className="wb-container">
          <span className="wb-eyebrow">O que você vai receber</span>
          <h2 className="wb-heading">Tudo para aplicar de verdade</h2>

          <div className="wb-benefits__grid">
            {benefits.map((b) => (
              <div key={b.title} className="wb-benefit-card">
                <span className="wb-benefit-card__icon">{b.icon}</span>
                <h3 className="wb-benefit-card__title">{b.title}</h3>
                <p className="wb-benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ INVESTIMENTO ═══════ */}
      <section id="inscricao" className="wb-section wb-invest">
        <div className="wb-container">
          <div className="wb-invest__layout">
            {/* Left: info */}
            <div className="wb-invest__info">
              <span className="wb-eyebrow">Investimento</span>
              <h2 className="wb-heading">
                Transforme seu <em>olhar</em> sobre branding.
              </h2>

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
                  <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <p className="wb-price-card__note">Vagas limitadas · Pagamento seguro via Hotmart</p>
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
            Pronto para criar marcas<br />que realmente <em>se destacam</em>?
          </h2>
          <a href="#inscricao" className="wb-cta wb-cta--white">
            <span>Garantir minha vaga</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
