import Image from 'next/image';
import HeaderModern from '@/components/layout/HeaderModern';

export const metadata = {
  title: 'Hospitalidade | Casa Flora',
  description: 'Marcas que dominam a arte de bem-receber.'
};

export default function HospitalidadePage() {
  return (
    <div className="topic-split">
      <HeaderModern />
      {/* Coluna da imagem (altura da tela) */}
      <aside className="topic-split__media">
        <div className="topic-split__media-card">
          <Image src="/images/hospitalidade.jpg" alt="Hospitalidade" fill className="object-cover" priority sizes="50vw" />
          <div className="topic-split__media-overlay" />
          {/* Título e subtítulo sobre a imagem */}
          <div className="topic-split__legend">
            <h1 className="topic-hero__title">Hospitalidade</h1>
            <p className="topic-hero__subtitle">Marcas que dominam a arte de bem-receber.</p>
          </div>
        </div>
      </aside>

      {/* Coluna do conteúdo */}
      <main className="topic-split__content">
        <section className="topic-section--narrow">
          <p>
            Tudo que envolve receber, acolher, hospedar e proporcionar estadias memoráveis.
          </p>
        </section>

        {/* Tipos de negócios */}
        <section className="topic-section--narrow">
          <h2 className="topic-title">Segmentos que atendemos</h2>
          <div className="topic-chips">
            <span className="topic-chip">Hotéis, Pousadas e Hospedagem</span>
            <span className="topic-chip">Resorts</span>
            <span className="topic-chip">Pousadas boutique</span>
            <span className="topic-chip">Casas no Airbnb</span>
            <span className="topic-chip">Spas e Centros de Bem-Estar</span>
            <span className="topic-chip">Centros holísticos e de terapias</span>
            <span className="topic-chip">Espaços de yoga e meditação</span>
            <span className="topic-chip">Clínicas de beleza e saúde</span>
          </div>
        </section>

        {/* O que entregamos */}
        <section className="topic-section--narrow">
          <h2 className="topic-title">Como a Casa Flora atua</h2>
          <div className="topic-columns">
            <ul>
              <li>Posicionamento de marca e narrativa</li>
              <li>Arquitetura de marca e tom de voz</li>
              <li>Jornada do hóspede e rituais</li>
            </ul>
            <ul>
              <li>Identidade espacial e sinalização</li>
              <li>Materialidade, uniformes e amenities</li>
              <li>Ativação, calendário e conteúdo</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
