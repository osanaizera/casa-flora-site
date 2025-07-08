'use client';

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Garden — Projeto Completo",
      description: "Caminho mais completo para estruturar marca com estratégia, identidade e aplicação prática. Inclui diagnóstico profundo, posicionamento estratégico e plano de ativação."
    },
    {
      number: "02", 
      title: "Raíz — Projeto Pocket",
      description: "Versão compacta e essencial para estruturar essência e identidade visual. Ágil e estratégico, ideal para negócios que precisam organizar a marca."
    },
    {
      number: "03",
      title: "Extensões & Projetos",
      description: "Plano de ativação, gestão contínua, cultura organizacional, jornada de encantamento, arquitetura de marca e naming. Projetos complementares especializados."
    }
  ];

  return (
    <section className="services">
      <div className="services__grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card__number">{service.number}</div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}