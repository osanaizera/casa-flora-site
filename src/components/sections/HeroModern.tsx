'use client';

import Link from 'next/link';

export default function HeroModern() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="fade-in">Quebramos</span>{' '}
          <span className="fade-in italic">o óbvio</span>{' '}
          <span className="fade-in">criando</span>{' '}
          <span className="fade-in">marcas</span>{' '}
          <span className="fade-in outline">memoráveis</span>
        </h1>
        <p className="hero__description fade-in">
          Transformamos negócios em organismos vivos — Unimos pesquisa e criação para marcas que cultivam experiência e hospitalidade.
        </p>
        <Link href="/#contato-hero" className="hero__cta-button fade-in">
          Começar Projeto
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
      <div className="hero__visual">
        <div className="hero__cards">
          <Link href="/experiencias" className="hero__card hero__card--experiencias">
            <div className="hero__card-overlay">
              <div className="hero__card-content">
                <span className="hero__card-label">01</span>
                <h3 className="hero__card-title">Experiências</h3>
                <p className="hero__card-subtitle">Núcleo focado em marcas que querem elevar a experiência através do branding</p>
                <div className="hero__card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hero__card-bg hero__card-bg--experiencias"></div>
          </Link>

          <Link href="/hospitalidade" className="hero__card hero__card--hospitalidade">
            <div className="hero__card-overlay">
              <div className="hero__card-content">
                <span className="hero__card-label">02</span>
                <h3 className="hero__card-title">Hospitalidade</h3>
                <p className="hero__card-subtitle">Branding focado em lugares que fazem a arte de bem receber</p>
                <div className="hero__card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hero__card-bg hero__card-bg--hospitalidade"></div>
          </Link>
        </div>

        {/* Floating accent elements */}
        <div className="hero__accent hero__accent--1"></div>
        <div className="hero__accent hero__accent--2"></div>
      </div>
    </section>
  );
}
