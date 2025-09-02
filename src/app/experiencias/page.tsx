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
        <header className="topic-split__header">
          <h1 className="topic-hero__title topic-split__title">Experiências</h1>
          <p className="topic-hero__subtitle">Marcas que transformam interações em memórias vivas.</p>
        </header>

        <section className="topic-section--narrow">
          <p>
            São aquelas que criam universos sensoriais e imersivos — onde o cliente não apenas consome, mas vive algo que ficará marcado. Cada detalhe é pensado para despertar emoções: o som ambiente que conversa com a proposta, o cuidado no design, a narrativa que conduz o visitante por uma jornada.
          </p>
        </section>

        {/* Tipos de negócios */}
        <section className="topic-section--narrow">
          <h2 className="topic-title">Para quem criamos experiências</h2>
          <div className="topic-chips">
            <span className="topic-chip">Museus & Centros Culturais</span>
            <span className="topic-chip">Flagships & Varejo Autoral</span>
            <span className="topic-chip">Restaurantes & Bares</span>
            <span className="topic-chip">Parques & Atrações</span>
            <span className="topic-chip">Eventos & Pop-ups</span>
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
