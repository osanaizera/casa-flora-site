import type { Metadata } from "next";
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
  alternates: {
    canonical: "/",
  },
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
        {/* Schema.org LocalBusiness JSON-LD for GMB association */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${archivo.variable} ${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
