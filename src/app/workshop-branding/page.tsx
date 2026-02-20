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

export default function WorkshopBrandingPage() {
  return (
    <main className="workshop-branding">
      {/* Hero Section */}
      <section className="workshop-hero">
        <div className="workshop-hero__container">
          <div className="workshop-hero__content">
            <span className="workshop-hero__eyebrow">WORKSHOP CASA FLORA</span>
            <h1 className="workshop-hero__title">
              <span className="workshop-hero__title-line">Branding como</span>
              <span className="workshop-hero__title-line workshop-hero__title-line--accent">ativo de negócio</span>
            </h1>
            <p className="workshop-hero__subtitle">
              A metodologia Casa Flora aplicada na prática
            </p>
            <div className="workshop-hero__highlight">
              <p className="workshop-hero__lead">
                Como criamos marcas de alto padrão<br />
                <strong>realmente originais e desejadas</strong>
              </p>
            </div>
            <a href="#inscricao" className="workshop-hero__cta">
              <span>Garantir minha vaga</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="workshop-hero__info-grid">
              <div className="workshop-hero__info-item">
                <svg className="workshop-hero__info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <span className="workshop-hero__info-label">Data</span>
                  <span className="workshop-hero__info-value">17 e 18 de março</span>
                  <span className="workshop-hero__info-detail">Terça e quarta</span>
                </div>
              </div>
              <div className="workshop-hero__info-item">
                <svg className="workshop-hero__info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <span className="workshop-hero__info-label">Horário</span>
                  <span className="workshop-hero__info-value">19h às 22h</span>
                  <span className="workshop-hero__info-detail">3 horas por encontro</span>
                </div>
              </div>
              <div className="workshop-hero__info-item">
                <svg className="workshop-hero__info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <span className="workshop-hero__info-label">Formato</span>
                  <span className="workshop-hero__info-value">Online, ao vivo</span>
                  <span className="workshop-hero__info-detail">Com acesso às gravações</span>
                </div>
              </div>
            </div>
          </div>
          <div className="workshop-hero__visual">
            <div className="workshop-hero__card workshop-hero__card--main">
              <div className="workshop-hero__card-bg"></div>
              <div className="workshop-hero__card-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposta Section */}
      <section className="workshop-section workshop-section--proposta">
        <div className="workshop-section__container">
          <div className="workshop-section__header">
            <span className="workshop-section__eyebrow">A PROPOSTA DO CURSO</span>
            <h2 className="workshop-section__title">Este não é um curso tradicional.</h2>
          </div>
          <div className="workshop-section__content">
            <div className="workshop-section__text-block">
              <p className="workshop-section__lead">
                Não partimos do lugar de &ldquo;professores&rdquo;, mas de quem <strong>vive o mercado</strong>, constrói, erra, ajusta e sustenta marcas reais.
              </p>
              <p className="workshop-section__body">
                É um convite para abrir a nossa casa. Compartilhar processos, decisões, bastidores e aprendizados de quem atua diretamente com marcas de alto padrão — especialmente nos universos de <strong>experiência, hospitalidade e lifestyle</strong>.
              </p>
              <p className="workshop-section__body">
                Assim como em uma casa bem recebida, você não entra para ouvir teoria. Você entra para <strong>ver como fazemos</strong>, <strong>por que escolhemos</strong> e <strong>o que aprendemos ao longo do caminho</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Olhar Casa Flora Section */}
      <section className="workshop-section workshop-section--olhar">
        <div className="workshop-section__container">
          <div className="workshop-section__header">
            <span className="workshop-section__eyebrow">O OLHAR CASA FLORA</span>
            <h2 className="workshop-section__title">
              Mais do que ferramentas,<br />este curso treina <em>olhar</em>.
            </h2>
          </div>
          <div className="workshop-pillars">
            <div className="workshop-pillars__grid">
              <div className="workshop-pillars__item">
                <div className="workshop-pillars__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="workshop-pillars__title">Repertório</h3>
              </div>
              <div className="workshop-pillars__item">
                <div className="workshop-pillars__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="workshop-pillars__title">Referência</h3>
              </div>
              <div className="workshop-pillars__item">
                <div className="workshop-pillars__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="workshop-pillars__title">Bagagem cultural</h3>
              </div>
              <div className="workshop-pillars__item">
                <div className="workshop-pillars__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="workshop-pillars__title">Sensibilidade</h3>
              </div>
              <div className="workshop-pillars__item">
                <div className="workshop-pillars__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="workshop-pillars__title">Critério</h3>
              </div>
            </div>
          </div>
          <div className="workshop-section__content">
            <p className="workshop-section__body">
              Branding de alto padrão não nasce de fórmulas. Nasce de <strong>escolhas bem feitas em um universo onde tudo é possível</strong>.
            </p>
            <div className="workshop-section__highlights">
              <div className="workshop-highlight">
                <svg className="workshop-highlight__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 7v6c0 4.4 3.1 8 7 9 3.9-1 7-4.6 7-9V7l-7-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Como fugimos do óbvio</span>
              </div>
              <div className="workshop-highlight">
                <svg className="workshop-highlight__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 7v6c0 4.4 3.1 8 7 9 3.9-1 7-4.6 7-9V7l-7-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Como evitamos a padronização e a comoditização</span>
              </div>
              <div className="workshop-highlight">
                <svg className="workshop-highlight__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 7v6c0 4.4 3.1 8 7 9 3.9-1 7-4.6 7-9V7l-7-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Como criamos marcas que não são <em>mainstream</em></span>
              </div>
              <div className="workshop-highlight">
                <svg className="workshop-highlight__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 7v6c0 4.4 3.1 8 7 9 3.9-1 7-4.6 7-9V7l-7-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Como transformamos branding em <strong>ativo real de negócio</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos Section */}
      <section className="workshop-section workshop-section--modulos">
        <div className="workshop-section__container">
          <div className="workshop-section__header">
            <span className="workshop-section__eyebrow">ESTRUTURA DO CURSO</span>
            <h2 className="workshop-section__title">
              O curso acompanha o processo real de construção de uma marca
            </h2>
            <p className="workshop-section__subtitle">
              Do pensamento estratégico à aplicação no mundo
            </p>
          </div>

          {/* Módulo 1 */}
          <div className="workshop-module">
            <div className="workshop-module__header">
              <span className="workshop-module__number">Módulo 1</span>
              <h3 className="workshop-module__title">Comece por aqui</h3>
              <p className="workshop-module__subtitle">Por que branding é ativo de negócio no alto padrão</p>
            </div>
            <div className="workshop-module__content">
              <p className="workshop-module__intro">Neste módulo falamos sobre a base de tudo:</p>
              <ul className="workshop-module__list">
                <li>O que realmente diferencia marcas de alto padrão</li>
                <li>O que não é alto padrão (e por que isso importa)</li>
                <li>Por que o cliente que pode comprar em qualquer lugar escolhe uma marca específica</li>
                <li>Branding como escolha, não como conveniência</li>
                <li>O que aprendemos atendendo marcas que vivem de percepção, não de preço</li>
              </ul>
              <p className="workshop-module__note">
                <em>Aqui a gente não ensina. A gente conta como pensa.</em>
              </p>
            </div>
          </div>

          {/* Módulo 2 */}
          <div className="workshop-module">
            <div className="workshop-module__header">
              <span className="workshop-module__number">Módulo 2</span>
              <h3 className="workshop-module__title">Como treinamos nosso olhar</h3>
              <p className="workshop-module__subtitle">Referência, repertório e leitura de contexto</p>
            </div>
            <div className="workshop-module__content">
              <p className="workshop-module__intro">Entramos na formação de repertório e leitura de mundo:</p>
              <ul className="workshop-module__list">
                <li>Como formamos repertório</li>
                <li>Como usamos referência sem copiar</li>
                <li>O que observamos antes de criar</li>
                <li>Como ler mercado, comportamento e cultura</li>
                <li>Padaria do Seu Zé × Marca de alto padrão</li>
                <li>O que o público de alto padrão realmente valoriza</li>
              </ul>
            </div>
          </div>

          {/* Módulo 3 */}
          <div className="workshop-module">
            <div className="workshop-module__header">
              <span className="workshop-module__number">Módulo 3</span>
              <h3 className="workshop-module__title">Como fazemos o diagnóstico</h3>
              <p className="workshop-module__subtitle">O que olhar, o que cruzar e o que decidir</p>
            </div>
            <div className="workshop-module__content">
              <p className="workshop-module__intro">Aqui mostramos a análise estratégica na prática:</p>
              <ul className="workshop-module__list">
                <li>Como lemos marcas na prática</li>
                <li>O que dá certo e o que dá errado</li>
                <li>O que evitar desde o início</li>
                <li>Como cruzamos mercado, marca e público</li>
                <li>O que aprendemos depois de errar e acertar</li>
                <li>Diagnóstico como base de todas as decisões</li>
              </ul>
            </div>
          </div>

          {/* Módulo 4 */}
          <div className="workshop-module">
            <div className="workshop-module__header">
              <span className="workshop-module__number">Módulo 4</span>
              <h3 className="workshop-module__title">O que realmente torna uma marca diferente</h3>
              <p className="workshop-module__subtitle">Posicionamento, personalidade e escolha</p>
            </div>
            <div className="workshop-module__content">
              <p className="workshop-module__intro">Onde nasce a singularidade:</p>
              <ul className="workshop-module__list">
                <li>Por que personalidade não é estética</li>
                <li>Como fugir da padronização</li>
                <li>Como escolher quando &ldquo;tudo pode&rdquo;</li>
                <li>Arquétipos como ferramenta, não como rótulo</li>
                <li>Como criamos marcas realmente originais</li>
                <li>O que aprendemos depois de construir X projetos</li>
              </ul>
            </div>
          </div>

          {/* Módulo 5 */}
          <div className="workshop-module">
            <div className="workshop-module__header">
              <span className="workshop-module__number">Módulo 5</span>
              <h3 className="workshop-module__title">Como a marca ganha forma no mundo</h3>
              <p className="workshop-module__subtitle">Narrativa, identidade e experiência</p>
            </div>
            <div className="workshop-module__content">
              <p className="workshop-module__intro">A marca começa a se expressar:</p>
              <ul className="workshop-module__list">
                <li>Como nasce o tom de voz</li>
                <li>Verdades da marca (no lugar de missão e valores)</li>
                <li>Moodboard como ferramenta estratégica</li>
                <li>Conceito gráfico e universo visual</li>
                <li>Como manter coerência entre discurso e entrega</li>
                <li>Marca no digital × marca no físico</li>
              </ul>
            </div>
          </div>

          {/* Módulo Final */}
          <div className="workshop-module">
            <div className="workshop-module__header">
              <span className="workshop-module__number">Módulo Final</span>
              <h3 className="workshop-module__title">Como sustentamos marcas no tempo</h3>
              <p className="workshop-module__subtitle">Gestão, experiência e encantamento</p>
            </div>
            <div className="workshop-module__content">
              <p className="workshop-module__intro">Porque marca não termina na entrega:</p>
              <ul className="workshop-module__list">
                <li>Marca não é projeto, é gestão</li>
                <li>Como manter consistência</li>
                <li>O que sustenta o desejo no longo prazo</li>
                <li>O que aprendemos depois de atender hotéis de alto padrão</li>
                <li>Experiência como consequência de boas decisões</li>
              </ul>
            </div>
          </div>

          {/* Módulo Bônus */}
          <div className="workshop-module workshop-module--bonus">
            <div className="workshop-module__header">
              <span className="workshop-module__number">Módulo Bônus</span>
              <h3 className="workshop-module__title">Como é a Casa Flora por dentro</h3>
              <p className="workshop-module__subtitle">Bastidores profissionais</p>
            </div>
            <div className="workshop-module__content">
              <p className="workshop-module__intro">Abrimos nossos bastidores profissionais:</p>
              <ul className="workshop-module__list">
                <li>Como é nossa reunião de briefing</li>
                <li>Como é nossa entrega</li>
                <li>Como orientamos clientes a aplicar a marca</li>
                <li>Postura profissional</li>
                <li>O que clientes de alto padrão valorizam (e rejeitam)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai receber */}
      <section className="workshop-section workshop-section--receber">
        <div className="workshop-section__container">
          <div className="workshop-section__header">
            <span className="workshop-section__eyebrow">O QUE VOCÊ VAI RECEBER</span>
            <h2 className="workshop-section__title">Tudo que você precisa</h2>
          </div>
          <div className="workshop-benefits">
            <div className="workshop-benefit">
              <div className="workshop-benefit__icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M28 8H4a2 2 0 00-2 2v12a2 2 0 002 2h24a2 2 0 002-2V10a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 8V6a2 2 0 012-2h16a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="workshop-benefit__title">Apostila completa</h3>
              <p className="workshop-benefit__description">Todo o conteúdo organizado e pronto para consulta</p>
            </div>
            <div className="workshop-benefit">
              <div className="workshop-benefit__icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M24 12l-8 8-8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 4h24v24H4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="workshop-benefit__title">10 ferramentas práticas</h3>
              <p className="workshop-benefit__description">Templates e frameworks de aplicação imediata</p>
            </div>
            <div className="workshop-benefit">
              <div className="workshop-benefit__icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 8v8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="workshop-benefit__title">Construção de marca ao vivo</h3>
              <p className="workshop-benefit__description">Acompanhe o processo real ao longo do curso</p>
            </div>
            <div className="workshop-benefit">
              <div className="workshop-benefit__icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M24 28V14a4 4 0 00-4-4h-8a4 4 0 00-4 4v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="workshop-benefit__title">Mentoria em grupo</h3>
              <p className="workshop-benefit__description">Sessões de dúvidas após os encontros</p>
            </div>
            <div className="workshop-benefit">
              <div className="workshop-benefit__icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 26v-2a6 6 0 016-6h8a6 6 0 016 6v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 10a4 4 0 11-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="workshop-benefit__title">Acesso às gravações</h3>
              <p className="workshop-benefit__description">Reveja o conteúdo quando quiser</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investimento & CTA */}
      <section id="inscricao" className="workshop-section workshop-section--investimento">
        <div className="workshop-section__container">
          <div className="workshop-pricing">
            <div className="workshop-pricing__content">
              <div className="workshop-pricing__header">
                <span className="workshop-pricing__eyebrow">INFORMAÇÕES</span>
                <h2 className="workshop-pricing__title">Investimento</h2>
              </div>
              <div className="workshop-pricing__info">
                <div className="workshop-pricing__info-row">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <strong>17 e 18 de março</strong>
                    <span>Terça e quarta</span>
                  </div>
                </div>
                <div className="workshop-pricing__info-row">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <strong>19h às 22h</strong>
                    <span>Horário de Brasília</span>
                  </div>
                </div>
                <div className="workshop-pricing__info-row">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <strong>Online, ao vivo</strong>
                    <span>Plataforma Zoom</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="workshop-pricing__cta-wrapper">
              <div className="workshop-pricing__card">
                <div className="workshop-pricing__badge">Primeiras 5 vagas</div>
                <div className="workshop-pricing__price-strike">
                  <span className="workshop-pricing__old-price">R$ 1.497</span>
                </div>
                <div className="workshop-pricing__price">
                  <span className="workshop-pricing__currency">R$</span>
                  <span className="workshop-pricing__amount">997</span>
                </div>
                <p className="workshop-pricing__installment">ou em até 12x de R$ 97</p>
                <a href="https://pay.hotmart.com/XXXXXX" target="_blank" rel="noopener noreferrer" className="workshop-pricing__button">
                  <span>Garantir vaga agora</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <p className="workshop-pricing__note">Vagas limitadas • Pagamento via Hotmart</p>
              </div>
              <div className="workshop-pricing__after-card">
                <p className="workshop-pricing__after-text">
                  <strong>Após as primeiras 5 vagas:</strong> R$ 1.497
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="workshop-footer-cta">
        <div className="workshop-footer-cta__container">
          <h2 className="workshop-footer-cta__title">
            Pronto para criar marcas<br />que realmente se destacam?
          </h2>
          <a href="#inscricao" className="workshop-footer-cta__button">
            <span>Garantir minha vaga</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="workshop-footer-cta__back">
            <Link href="/">← Voltar para Casa Flora</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
