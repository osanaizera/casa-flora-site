import Image from "next/image";
import MagazineLayout from "@/components/magazine/MagazineLayout";
import Spread from "@/components/magazine/Spread";
import styles from "@/components/magazine/magazine.module.css";

export default function MagazinePrototypePage() {
  return (
    <main>
      <MagazineLayout>
        {/* Cover */}
        <Spread ariaLabel="Capa" role="region">
          <header>
            <div style={{ textTransform: "uppercase", letterSpacing: ".12em", fontSize: 12 }}>Casa Flora</div>
            <h1 className="h1" style={{ marginTop: 16 }}>Branding com espírito editorial</h1>
            <div className={styles.rule} />
          </header>
          <div className={`${styles.lede} ${styles.dropCap}`}>
            <p>
              Direção de marca para hotéis boutique, clínicas e negócios de bem-estar. Uma experiência de leitura com diagramação clean, imagens em destaque e rolagem vertical — como uma revista contemporânea.
            </p>
          </div>
          <footer style={{ alignSelf: "end", color: "#999", fontSize: 12 }}>Edição de exploração · Rolagem vertical</footer>
        </Spread>

        {/* Feature image + lede in columns */}
        <Spread ariaLabel="Destaque visual" role="region">
          <div className="h2" style={{ marginBottom: 16 }}>Sofisticação, clareza e silêncio visual</div>
          <div className={styles.columns2}>
            <p>
              Fundo branco chapado. Tipografia preta. Espaços generosos. Nada compete com o conteúdo — a atenção vai para a narrativa e para as imagens.
            </p>
            <p>
              A diagramação trabalha o respiro como elemento de luxo. Em hospitalidade e bem‑estar, o silêncio visual valoriza a sensação de cuidado e excelência.
            </p>
          </div>
          <div className={styles.fullBleed} aria-label="Imagem em destaque">
            <Image src="/images/hospitalidade.jpg" alt="Hospitalidade" fill style={{ objectFit: "cover" }} priority />
          </div>
        </Spread>

        {/* Pull quote */}
        <Spread ariaLabel="Citação" role="region" variant="narrow">
          <blockquote className={styles.pullQuote}>
            “Marcas que inspiram confiança nascem do cuidado com cada detalhe.”
          </blockquote>
          <div />
          <div style={{ color: "#666", fontSize: 14 }}>— Casa Flora</div>
        </Spread>

        {/* Services index */}
        <Spread ariaLabel="Serviços" role="region">
          <header>
            <div style={{ textTransform: "uppercase", letterSpacing: ".12em", fontSize: 12 }}>Serviços</div>
            <h2 className="h2" style={{ marginTop: 12 }}>O que entregamos</h2>
          </header>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <ul style={{ listStyle: "disc", paddingLeft: 20, lineHeight: 1.7 }}>
              <li>Estratégia e plataforma de marca</li>
              <li>Identidade visual e verbal</li>
              <li>Direção criativa e editorial</li>
            </ul>
            <ul style={{ listStyle: "disc", paddingLeft: 20, lineHeight: 1.7 }}>
              <li>Experiência de marca em hospitalidade</li>
              <li>Brand guidelines e rollout</li>
              <li>Curadoria de imagens e narrativa</li>
            </ul>
          </div>
          <div style={{ alignSelf: "end", fontSize: 12, color: "#999" }}>Clean e direto, sem efeitos visuais pesados</div>
        </Spread>

        {/* Cases index (editorial grid) */}
        <Spread ariaLabel="Cases" role="region" variant="wide">
          <header>
            <div style={{ textTransform: "uppercase", letterSpacing: ".12em", fontSize: 12 }}>Cases</div>
            <h2 className="h2" style={{ marginTop: 12 }}>Projetos em destaque</h2>
          </header>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "start" }}>
            {[
              { src: "/images/experiencia.jpg", title: "Hotel Boutique A" },
              { src: "/images/hospitalidade.jpg", title: "Clínica Wellness B" },
              { src: "/images/experiencia.jpg", title: "Retiro de Luxo C" },
            ].map((item) => (
              <figure key={item.title} style={{ margin: 0 }}>
                <div style={{ position: "relative", height: "48vh", border: "1px solid #eee" }}>
                  <Image src={item.src} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <figcaption style={{ marginTop: 8 }}>{item.title}</figcaption>
              </figure>
            ))}
          </div>
          <div />
        </Spread>

        {/* Contact CTA */}
        <Spread ariaLabel="Contato" role="region">
          <header>
            <h2 className="h2">Prontos para conversar?</h2>
          </header>
          <div>
            <p className="body-large" style={{ maxWidth: "50ch" }}>
              Projetos sob medida para marcas que buscam sofisticação e consistência. Entre em contato para iniciarmos o diagnóstico.
            </p>
          </div>
          <div style={{ alignSelf: "end" }}>
            <a href="/contato" className="nav__cta">Falar com a Casa Flora</a>
          </div>
        </Spread>
      </MagazineLayout>
    </main>
  );
}
