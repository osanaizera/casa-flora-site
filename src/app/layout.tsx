import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.casaflora-brand.com.br"),
  title: {
    default: "Casa Flora Branding e Design | Agência de Design no Rio de Janeiro",
    template: "%s | Casa Flora Branding e Design",
  },
  description: "Agência de design em Ipanema, Rio de Janeiro. Quebramos o óbvio criando marcas memoráveis. Desenvolvemos identidades sensoriais, autorais e profundamente humanas que conectam negócios e pessoas.",
  keywords: [
    "branding",
    "identidade visual",
    "agência de design",
    "design rio de janeiro",
    "branding ipanema",
    "casa flora branding",
    "casa flora brand",
    "marcas memoráveis",
    "design sensorial",
    "arquitetura de marca",
    "experiências",
    "hospitalidade"
  ],
  authors: [{ name: "Casa Flora Branding e Design" }],
  creator: "Casa Flora Branding e Design",
  publisher: "Casa Flora Branding e Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Casa Flora Branding e Design | Agência de Design no Rio de Janeiro",
    description: "Agência de design em Ipanema, Rio de Janeiro. Quebramos o óbvio criando marcas memoráveis.",
    url: "https://www.casaflora-brand.com.br",
    siteName: "Casa Flora Branding e Design",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Flora Branding e Design - Agência de Design no Rio de Janeiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Flora Branding e Design | Agência de Design no Rio de Janeiro",
    description: "Agência de design em Ipanema. Quebramos o óbvio criando marcas memoráveis.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // canonical handled per-page
};

// Schema.org FAQ for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual a diferença entre branding e identidade visual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Branding é o processo estratégico completo de construção de marca — envolve posicionamento, essência, narrativa e experiência. Identidade visual é a expressão gráfica da marca: logo, cores, tipografia e elementos visuais. Um é estratégia, o outro é design."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo leva um projeto de branding completo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Um projeto Garden (completo) leva em média 2-3 meses, incluindo imersão estratégica, desenvolvimento de universo simbólico, identidade visual e plano de ativação. Projetos Raíz (essenciais) levam 4-6 semanas."
      }
    },
    {
      "@type": "Question",
      "name": "A Casa Flora atende apenas empresas de hospitalidade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. Embora tenhamos especialização em Hospitalidade e Experiências, atendemos marcas de produtos, serviços e varejo que buscam crescer com consistência, autenticidade e presença sensorial."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre os pacotes Garden e Raíz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Garden é o projeto completo: estratégia profunda, universo simbólico, identidade visual e plano de ativação. Raíz é a versão essencial, focada em estruturar essência e identidade visual de forma ágil para quem está começando ou precisa de uma base sólida."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona o processo de branding na Casa Flora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Iniciamos com imersão e pesquisa para entender sua essência. Depois desenvolvemos posicionamento estratégico, universo simbólico e narrativa de marca. Por fim, criamos a identidade visual e o plano de ativação. Cada etapa é colaborativa e validada com você."
      }
    }
  ]
};

// Schema.org Service for service catalog
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Branding e Design de Marca",
  "provider": {
    "@type": "Organization",
    "name": "Casa Flora Branding e Design",
    "url": "https://www.casaflora-brand.com.br"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pacotes de Branding",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Garden - Projeto Completo",
          "description": "Estratégia completa, identidade visual, universo simbólico e plano de ativação para marcas que querem crescer com consistência."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Raíz - Base Sólida",
          "description": "Versão essencial para estruturar essência e identidade visual de forma ágil e estratégica."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ativação Âmbar",
          "description": "Projeto de ativação e implementação da marca em pontos de contato estratégicos."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Acompanhamento Seiva",
          "description": "Gestão contínua de marca com curadoria mensal e suporte estratégico."
        }
      }
    ]
  }
};

// Schema.org LocalBusiness structured data for GMB association
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.casaflora-brand.com.br/#organization",
  "name": "Casa Flora Branding e Design",
  "alternateName": "Casa Flora Brand",
  "description": "Agência de design em Ipanema, Rio de Janeiro especializada em branding, identidade visual e experiências de marca memoráveis.",
  "url": "https://www.casaflora-brand.com.br",
  "telephone": "+55-21-99550-5403",
  "email": "contato@casaflora-brand.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Visc. de Pirajá, 495",
    "addressLocality": "Rio de Janeiro",
    "addressRegion": "RJ",
    "postalCode": "22410-002",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -22.9838,
    "longitude": -43.2044
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/casaflorabrand/",
    "https://www.linkedin.com/company/casaflorabrand/"
  ],
  "priceRange": "$$$",
  "image": "https://www.casaflora-brand.com.br/images/og-image.jpg",
  "logo": "https://www.casaflora-brand.com.br/images/favicon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Garantir favicon explícito */}
        <link rel="icon" href="/images/favicon.png" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G1Q6ZLFQJ7"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-G1Q6ZLFQJ7');`}
        </Script>
        {/* Schema.org LocalBusiness JSON-LD for GMB association */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Schema.org FAQ for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Schema.org Service for service catalog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`${archivo.variable} ${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
