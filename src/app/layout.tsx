import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Import Archivo via CDN for now
const archivo = {
  variable: "--font-display",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Flora - Experiências & Hospitalidade",
  description: "Quebramos o óbvio criando marcas memoráveis. Desenvolvemos identidades sensoriais, autorais e profundamente humanas que conectam negócios e pessoas com autenticidade.",
  keywords: "branding, identidade visual, experiências, hospitalidade, marcas memoráveis",
  authors: [{ name: "Casa Flora" }],
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Casa Flora - Experiências & Hospitalidade",
    description: "Quebramos o óbvio criando marcas memoráveis",
    type: "website",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Garantir favicon explícito */}
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={`${archivo.variable} ${inter.variable} antialiased`}>
        <main role="main">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
