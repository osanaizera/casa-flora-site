"use client";

import React, { useState } from "react";

export default function ServicesModern() {
  const [activeTab, setActiveTab] = useState<"branding" | "ativacao" | "extensions">("branding");

  const brandingServices = [
    {
      id: "garden",
      number: "01",
      badge: "Projeto Completo",
      title: "Garden",
      subtitle: "Para marcas que querem crescer com estratégia completa",
      description:
        "O caminho mais completo para estruturar sua marca com estratégia, identidade e aplicação prática. Inclui diagnóstico profundo, posicionamento estratégico, universo simbólico e visual, e plano de ativação da marca.",
      color: "garden",
    },
    {
      id: "raiz",
      number: "02",
      badge: "Base Sólida",
      title: "Raíz",
      subtitle: "Para negócios que precisam organizar sua essência",
      description:
        "Versão compacta e essencial para estruturar a essência e identidade visual da marca de forma ágil e estratégica. Ideal para quem está começando ou precisa de uma base sólida inicial.",
      color: "raiz",
    },
  ];

  return (
    <section className="services-modern" id="servicos">
      <div className="services-modern__container">
        <div className="services-modern__layout">
          {/* Sidebar */}
          <div className="services-modern__sidebar">
            <h2 className="services-modern__title">Nossos Serviços</h2>
            <p className="services-modern__lead">
              Na Casa Flora, desenvolvemos marcas sensoriais, autorais e humanas, que conectam
              negócios e pessoas com estratégia, identidade e impacto real.
            </p>
            <div className="services-modern__details">
              <p>
                Nossos serviços atendem negócios de produtos, serviços e hospitalidade que desejam
                crescer com consistência, autenticidade e presença.
              </p>
              <p>
                Oferecemos projetos completos de branding e extensões que aprofundam a aplicação e a
                gestão contínua da marca.
              </p>
            </div>

            <div className="services-modern__tabs">
              <button
                className={`services-modern__tab ${activeTab === "branding" ? "active" : ""}`}
                onClick={() => setActiveTab("branding")}
              >
                <span className="services-modern__tab-label">01</span>
                <span className="services-modern__tab-title">Projetos de Branding</span>
              </button>
              <button
                className={`services-modern__tab ${activeTab === "ativacao" ? "active" : ""}`}
                onClick={() => setActiveTab("ativacao")}
              >
                <span className="services-modern__tab-label">02</span>
                <span className="services-modern__tab-title">Projetos de Ativação</span>
              </button>
              <button
                className={`services-modern__tab ${activeTab === "extensions" ? "active" : ""}`}
                onClick={() => setActiveTab("extensions")}
              >
                <span className="services-modern__tab-label">03</span>
                <span className="services-modern__tab-title">Acompanhamento e Gestão de Marca</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="services-modern__content">
            {activeTab === "branding" ? (
              <div className="services-modern__branding-grid">
                {brandingServices.map((service) => (
                  <div key={service.id} className="services-modern__glass-card">
                    <div className={`services-modern__glass-bg services-modern__glass-bg--${service.color}`}></div>
                    <div className="services-modern__glass-content">
                      <div className="services-modern__glass-header">
                        <span className="services-modern__glass-number">{service.number}</span>
                        <div className="services-modern__glass-badge">{service.badge}</div>
                        <h3 className="services-modern__glass-title">{service.title}</h3>
                        <p className="services-modern__glass-subtitle">{service.subtitle}</p>
                      </div>
                      <p className="services-modern__glass-description">{service.description}</p>
                      <div className="services-modern__glass-footer">
                        <div className="services-modern__glass-arrow">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : activeTab === "ativacao" ? (
              <div className="services-modern__split">
                {/* Card hero alto e fino com fundo da imagem */}
                <a className="hero__card hero__card--tall services-modern__hero-narrow" href="#servicos-ambar" aria-label="Ativação Âmbar">
                  <div className="hero__card-bg hero__card-bg--ambar"></div>
                  <div className="hero__card-overlay">
                    <div className="hero__card-content">
                      <span className="hero__card-label">Ativação</span>
                      <h3 className="hero__card-title">ÂMBAR</h3>
                      <p className="hero__card-subtitle">Acendimento da presença</p>
                    </div>
                  </div>
                </a>

                {/* Conteúdo ao lado */}
                <div id="servicos-ambar">
                  <div className="services-modern__text-content" style={{ marginBottom: "1rem" }}>
                    <p>
                      A <strong>Ativação Âmbar</strong> é o ponto de partida para marcas que desejam alinhar essência, organizar presença e comunicar com clareza.
                    </p>
                    <p>
                      Mais que um projeto, é um <strong>ritual estratégico de ativação de branding</strong> — intenso, profundo e direcionado.
                    </p>
                    <p>
                      Assim como o âmbar, que cristaliza e protege ao longo do tempo, esse processo dá forma, densidade e luz à identidade da marca.
                    </p>
                    <p>
                      Aplicamos o <strong>Ritual Âmbar</strong> em ciclos de <strong>3, 6 ou 12 meses</strong>.
                    </p>
                  </div>
                  <div className="services-modern__phases-section">
                    <h4 className="services-modern__phases-title">✽ Os três tempos do Ritual Âmbar</h4>
                    <div className="services-modern__phases-list">
                      <div className="services-modern__phase-item">
                        <div className="services-modern__phase-header">
                          <span className="services-modern__phase-number">01</span>
                          <h5 className="services-modern__phase-title">Imersão</h5>
                        </div>
                        <p className="services-modern__phase-description">
                          Mergulho profundo na essência, história e diferenciais da marca. Análise de público, mercado, concorrência e oportunidades.
                        </p>
                      </div>
                      <div className="services-modern__phase-item">
                        <div className="services-modern__phase-header">
                          <span className="services-modern__phase-number">02</span>
                          <h5 className="services-modern__phase-title">Organização</h5>
                        </div>
                        <p className="services-modern__phase-description">
                          Construção da base estratégica: posicionamento, tom de voz, identidade visual, storytelling e plano editorial.
                        </p>
                      </div>
                      <div className="services-modern__phase-item">
                        <div className="services-modern__phase-header">
                          <span className="services-modern__phase-number">03</span>
                          <h5 className="services-modern__phase-title">Ativação</h5>
                        </div>
                        <p className="services-modern__phase-description">
                          Aplicação prática e consistente da marca: campanhas, plano de comunicação, conteúdos, materiais e diretrizes vivas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="services-modern__slide-wrap">
                {/* Etiqueta horizontal deslizante (entra da direita) */}
                <div className="services-modern__slide-tag services-modern__slide-tag--seiva is-active">
                  <div className="services-modern__slide-bg hero__card-bg--seiva" />
                  <div className="services-modern__slide-overlay" />
                  <div className="services-modern__slide-content">
                    <div className="services-modern__slide-header">
                      <div className="case-eyebrow">03 Acompanhamento e Gestão de Marca</div>
                      <h3 className="h3">ACOMPANHAMENTO SEIVA</h3>
                    </div>
                    <div className="services-modern__slide-body">
                      <p><strong>É estratégia contínua e personalizada para crescimento.</strong></p>
                      <p>A <strong>Seiva</strong> é nosso método proprietário de gestão de marca viva, estruturado em ciclos contínuos. Um processo que nutre a essência, organiza a estratégia, fortalece a expressão e garante evolução constante — equilibrando branding, performance e presença no mercado.</p>

                      <h4 className="services-modern__slide-eyebrow">✽ Os quatro E’s do Método Seiva:</h4>
                      <div className="services-modern__list-grid">
                        <div className="services-modern__list-item"><strong><span className="services-modern__initial-e">E</span>ssência</strong> – definições de marca que garantam que cada ação reflita a identidade e objetivos da marca.</div>
                        <div className="services-modern__list-item"><strong><span className="services-modern__initial-e">E</span>stratégia</strong> – planejamento de campanhas e influenciadores, lançamentos, novos produtos ou serviços, marketing digital, ações OOH, ações de publicidade etc..</div>
                        <div className="services-modern__list-item"><strong><span className="services-modern__initial-e">E</span>xpressão</strong> – desenvolvimento de storytelling, acompanhamento do design, canais, materiais físicos e digitais, campanhas e experiências sensoriais aplicadas.</div>
                        <div className="services-modern__list-item"><strong><span className="services-modern__initial-e">E</span>volução</strong> – análise de performance, KPIs e inteligência de marca para crescer com consciência.</div>
                      </div>

                      <div className="services-modern__cta-note">👉 <strong>O que resolve:</strong> dá direção e consistência para marcas em movimento, com acompanhamento contínuo garantindo que cada decisão impulsione resultados.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
