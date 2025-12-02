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
    default: "Casa Flora - Experiências & Hospitalidade",
    template: "%s | Casa Flora",
  },
  description: "Quebramos o óbvio criando marcas memoráveis. Desenvolvemos identidades sensoriais, autorais e profundamente humanas que conectam negócios e pessoas com autenticidade.",
  keywords: ["branding", "identidade visual", "experiências", "hospitalidade", "marcas memoráveis", "design sensorial", "arquitetura de marca"],
  authors: [{ name: "Casa Flora" }],
  creator: "Casa Flora",
  publisher: "Casa Flora",
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
    title: "Casa Flora - Experiências & Hospitalidade",
    description: "Quebramos o óbvio criando marcas memoráveis",
    url: "https://www.casaflora-brand.com.br",
    siteName: "Casa Flora",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // Assuming we might have one, or fallback to something else if not exists, but keeping structure clean.
        width: 1200,
        height: 630,
        alt: "Casa Flora - Branding e Experiências",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Flora - Experiências & Hospitalidade",
    description: "Quebramos o óbvio criando marcas memoráveis",
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
      </head>
      <body className={`${archivo.variable} ${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
