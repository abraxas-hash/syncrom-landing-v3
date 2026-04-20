import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.VERCEL_ENV === "preview"
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000";

const title = "Syncrom AI — Automatización con IA + n8n para tu negocio";
const description =
  "Automatizamos negocios hispanohablantes con n8n e Inteligencia Artificial. Libera 20+ horas semanales sin contratar más personal. Consulta gratuita disponible.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Syncrom AI | Automatización de negocios con n8n e Inteligencia Artificial",
  description: "Automatizamos flujos de trabajo en empresas hispanohablantes usando n8n e Inteligencia Artificial. Ahorra más de 20 horas semanales sin contratar personal extra.",
  keywords: [
    "Automatización de procesos",
    "Inteligencia Artificial",
    "Agencia de automatización",
    "n8n español",
    "Agentes IA",
    "Automatizar WhatsApp",
    "Flujos de trabajo",
    "Transformación digital",
    "Make",
    "Syncrom AI"
  ],
  authors: [{ name: "Syncrom AI", url: siteUrl }],
  creator: "Syncrom AI",
  publisher: "Syncrom AI",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    title: "Syncrom AI | Automatización de negocios con n8n e IA",
    description: "Automatizamos flujos de trabajo en empresas hispanohablantes usando n8n e Inteligencia Artificial.",
    siteName: "Syncrom AI",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Syncrom AI Banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syncrom AI | Automatización con IA",
    description: "Automatiza tu negocio y libera más de 20 horas semanales.",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Syncrom AI",
  url: siteUrl,
  logo: `${siteUrl}/images/syncrom_logo.png`,
  description: "Automatizamos negocios hispanohablantes con n8n e Inteligencia Artificial.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+51-908-776-199",
    contactType: "customer service",
    email: "syncromai2@gmail.com",
    availableLanguage: "Spanish"
  },
  sameAs: [
    "https://web.facebook.com/profile.php?id=61579409871976",
    "https://www.instagram.com/syncrom_automation/"
  ]
};

import { CustomCursor } from "@/components/custom-cursor";
import { CookieConsent } from "@/components/cookie-consent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth shadcn dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`font-body antialiased ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <CustomCursor />
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
