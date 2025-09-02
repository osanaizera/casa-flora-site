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
        {/* Header também no conteúdo (UX/SEO) */}
        <header className="topic-split__header">
          <h1 className="topic-hero__title topic-split__title">Hospitalidade</h1>
          <p className="topic-hero__subtitle" style={{ color: 'var(--color-ink)' }}>Marcas que dominam a arte de bem-receber.</p>
        </header>

        <section className="topic-section--narrow">
          <p>
            Espaços que entendem que cada chegada, cada gesto e cada detalhe é uma oportunidade de acolher, surpreender e criar vínculo. Aqui, a atmosfera é viva: é o aroma, a textura, a iluminação, o ritmo da música. É o toque humano que transforma visitantes em hóspedes e clientes em amigos.
          </p>
        </section>

        {/* Tipos de negócios */}
        <section className="topic-section--narrow">
          <h2 className="topic-title">Para quem criamos hospitalidade</h2>
          <div className="topic-chips">
            <span className="topic-chip">Hotéis Boutique & Pousadas</span>
            <span className="topic-chip">Resorts & Glampings</span>
            <span className="topic-chip">Spas & Wellness</span>
            <span className="topic-chip">Restaurantes de Hotel</span>
            <span className="topic-chip">Clubes & Beach Clubs</span>
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
