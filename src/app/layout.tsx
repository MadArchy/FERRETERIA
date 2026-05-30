import type { Metadata } from "next";
import "./globals.css";
import { assetPath } from "@/lib/site";

const SITE_URL = "https://ferreteriaelkiosko.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ferretería El Kiosko | Herramientas, Materiales y Ferretería en General",
    template: "%s | Ferretería El Kiosko",
  },
  description:
    "Compra herramientas, materiales de construcción, electricidad, plomería, pintura y ferretería general en Ferretería El Kiosko. Atención personalizada para hogares, maestros de obra y empresas.",
  keywords: [
    "ferretería",
    "herramientas",
    "materiales de construcción",
    "electricidad",
    "plomería",
    "pintura",
    "ferretería cerca de mí",
    "tornillería",
    "seguridad industrial",
    "jardinería",
    "ferretería El Kiosko",
    "ferretería Cúcuta",
    "ferretería Barrio Dona Ceci",
  ],
  authors: [{ name: "Ferretería El Kiosko" }],
  creator: "Ferretería El Kiosko",
  publisher: "Ferretería El Kiosko",
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
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "Ferretería El Kiosko",
    title: "Ferretería El Kiosko | Herramientas, Materiales y Ferretería en General",
    description:
      "Compra herramientas, materiales de construcción, electricidad, plomería, pintura y ferretería general en Ferretería El Kiosko.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ferretería El Kiosko - Herramientas y materiales de calidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferretería El Kiosko",
    description: "Herramientas, materiales de construcción y ferretería general.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// Schema.org LocalBusiness JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  name: "Ferretería El Kiosko",
  description:
    "Ferretería El Kiosko ofrece herramientas, materiales de construcción, electricidad, plomería, pintura y ferretería general.",
  url: SITE_URL,
  telephone: "+573228745300",
  email: "contacto@ferreteriaelkiosko.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cl. 2 #6-36, Barrio Dona Ceci",
    addressLocality: "Cúcuta",
    addressRegion: "Norte de Santander",
    addressCountry: "CO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:30",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "COP",
  paymentAccepted: "Cash, Credit Card, Transfer",
  sameAs: [
    "https://www.facebook.com/ferreteriaelkiosko",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href={assetPath("/images/logo-fk.svg")}
          as="image"
          type="image/svg+xml"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
