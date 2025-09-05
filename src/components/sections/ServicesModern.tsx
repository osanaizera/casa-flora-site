"use client";

import React, { useState } from "react";
import Link from "next/link";

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
                  <Link key={service.id} href="/cases" className="services-modern__glass-card" aria-label={`Ver cases do pacote ${service.title}`}>
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
                  </Link>
                ))}
              </div>
            ) : activeTab === "ativacao" ? (
              <div className="services-modern__slide-wrap">
                <div className="services-modern__slide-tag services-modern__slide-tag--ambar is-active">
                  <div className="services-modern__slide-bg hero__card-bg--ambar" />
                  <div className="services-modern__slide-overlay" />
                  <div className="services-modern__slide-inner">
                    <div className="services-modern__slide-content services-modern__slide-content--stack">
                      {/* Cabeçalho e introdução (largura total) */}
                      <div className="services-modern__head">
                        <div className="case-eyebrow">02 Projetos de Ativação</div>
                        <h3 className="h3 services-modern__title">Ativação Âmbar</h3>
                        <div className="services-modern__subtitle">Estrutura e acendimento da presença.</div>
                        <p className="services-modern__paragraph">
                          A <strong>Âmbar</strong> é nossa ativação estratégica de branding. Um processo focado em alinhar essência,
                          organizar a base e acender a presença — da clareza de posicionamento à aplicação consistente da marca,
                          em ciclos de <strong>3, 6 ou 12 meses</strong>.
                        </p>
                      </div>

                      {/* Quadrados do método (4 col) */}
                      <div className="services-modern__es-grid">
                        <div className="services-modern__es-item">
                          <div className="services-modern__list-title">Imersão</div>
                          <div className="services-modern__list-text">Mergulho na essência, público e contexto para identificar verdades, oportunidades e prioridades.</div>
                        </div>
                        <div className="services-modern__es-item">
                          <div className="services-modern__list-title">Organização</div>
                          <div className="services-modern__list-text">Base estratégica: posicionamento, narrativa, tom de voz, identidade e plano de presença.</div>
                        </div>
                        <div className="services-modern__es-item">
                          <div className="services-modern__list-title">Ativação</div>
                          <div className="services-modern__list-text">Aplicação prática com campanhas, conteúdo, materiais e rituais de marca nos canais-chave.</div>
                        </div>
                        <div className="services-modern__es-item">
                          <div className="services-modern__list-title">Consolidação</div>
                          <div className="services-modern__list-text">Rotina de ajustes e melhorias para sustentar consistência e impacto.</div>
                        </div>
                      </div>

                      {/* CTA centralizado */}
                      <div className="services-modern__footer-center">
                        <Link href="/#contato-hero" className="services-modern__cta-btn">Quero conversar sobre ativar minha marca</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="services-modern__slide-wrap">
                {/* Etiqueta horizontal deslizante: fundo + overlay + conteúdo interno */}
                <div className="services-modern__slide-tag services-modern__slide-tag--seiva is-active">
                  <div className="services-modern__slide-bg hero__card-bg--seiva" />
                  <div className="services-modern__slide-overlay" />
                  <div className="services-modern__slide-inner">
                    <div className="services-modern__slide-content services-modern__slide-content--stack">
                      {/* Cabeçalho e introdução (largura total) */}
                      <div className="services-modern__head">
                        <div className="case-eyebrow">03 Acompanhamento e Gestão de Marca</div>
                        <h3 className="h3 services-modern__title">Acompanhamento Seiva</h3>
                        <div className="services-modern__subtitle">É estratégia contínua e personalizada para crescimento.</div>
                        <p className="services-modern__paragraph">
                          A <strong>Seiva</strong> é nosso método proprietário de gestão de marca viva, estruturado em ciclos contínuos. Um processo que nutre a essência, organiza a estratégia, fortalece a expressão e garante evolução constante — equilibrando branding, performance e presença no mercado.
                        </p>
                      </div>

                      {/* Quatro E's em 4 quadrados (largura total) */}
                      <div className="services-modern__es-grid">
                        <div className="services-modern__es-item">
                          <div className="services-modern__list-title">Essência</div>
                          <div className="services-modern__list-text">Definições de marca que garantam que cada ação reflita a identidade e objetivos da marca.</div>
                        </div>
                        <div className="services-modern__es-item">
                          <div className="services-modern__list-title">Estratégia</div>
                          <div className="services-modern__list-text">Planejamento de campanhas e influenciadores, lançamentos, novos produtos/serviços, marketing digital, OOH e publicidade.</div>
                        </div>
                        <div className="services-modern__es-item">
                          <div className="services-modern__list-title">Expressão</div>
                          <div className="services-modern__list-text">Storytelling, acompanhamento de design, canais, materiais físicos e digitais, campanhas e experiências sensoriais.</div>
                        </div>
                        <div className="services-modern__es-item">
                          <div className="services-modern__list-title">Evolução</div>
                          <div className="services-modern__list-text">Análise de performance, KPIs e inteligência de marca para crescer com consciência.</div>
                        </div>
                      </div>

                      {/* CTA centralizado */}
                      <div className="services-modern__footer-center">
                        <Link href="/#contato-hero" className="services-modern__cta-btn">Quero orientação contínua para minha marca</Link>
                      </div>
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
