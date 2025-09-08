import Image from 'next/image';
import HeaderModern from '@/components/layout/HeaderModern';

export const metadata = {
  title: 'Experiências | Casa Flora',
  description: 'Marcas que transformam interações em memórias vivas.'
};

export default function ExperienciasPage() {
  return (
    <div className="topic-split">
      <HeaderModern />
      {/* Coluna da imagem (altura da tela) */}
      <aside className="topic-split__media">
        <div className="topic-split__media-card">
          <Image src="/images/experiencia.jpg" alt="Experiências" fill className="object-cover" priority sizes="50vw" />
          <div className="topic-split__media-overlay" />
          {/* Título e subtítulo sobre a imagem */}
          <div className="topic-split__legend">
            <h1 className="topic-hero__title">Experiências</h1>
            <p className="topic-hero__subtitle">Marcas que transformam interações em memórias vivas.</p>
          </div>
        </div>
      </aside>

      {/* Coluna do conteúdo */}
      <main className="topic-split__content">
        <section className="topic-section--narrow">
          <p>
            Tudo que envolve criar sensações, narrativas e vivências únicas — no espaço, no design, na estética e na relação com o público.
          </p>
        </section>

        {/* Tipos de negócios */}
        <section className="topic-section--narrow">
          <h2 className="topic-title">Segmentos que atendemos</h2>
          <div className="topic-chips">
            <span className="topic-chip">Restaurantes</span>
            <span className="topic-chip">Cafeterias</span>
            <span className="topic-chip">Bares</span>
            <span className="topic-chip">Espaços gastronômicos</span>
            <span className="topic-chip">Estúdios criativos</span>
            <span className="topic-chip">Escritório de Arquitetura</span>
            <span className="topic-chip">Escritório de Advocacia</span>
            <span className="topic-chip">Espaços para Eventos</span>
            <span className="topic-chip">Projetos imobiliários</span>
          </div>
        </section>

        {/* O que entregamos */}
        <section className="topic-section--narrow">
          <h2 className="topic-title">Como a Casa Flora atua</h2>
          <div className="topic-columns">
            <ul>
              <li>Direção sensorial (som, aroma, luz, textura)</li>
              <li>Conceito, narrativa e universo simbólico</li>
              <li>Jornada do visitante e rituais</li>
            </ul>
            <ul>
              <li>Identidade espacial e ambientação</li>
              <li>Sinalização, fluxos e microinterações</li>
              <li>Ativações e calendário de experiências</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
