import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jasa Pembuatan Website & Sistem Bisnis | Ruvia Studios (Pontianak & Surabaya)",
    template: `%s | ${site.name}`,
  },
  description:
    "Jasa pembuatan website profesional, landing page SEO, dan sistem bisnis custom di Pontianak & Surabaya. Ditangani langsung oleh Software Engineer.",
  metadataBase: new URL(site.url),
  authors: [{ name: "Ruvia Studios" }],
  creator: "Ruvia Studios",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    title: "Jasa Pembuatan Website & Sistem Bisnis | Ruvia Studios",
    description:
      "Website cepat, modern, dan SEO-friendly di Pontianak & Surabaya. Ditangani langsung oleh Software Engineer.",
    siteName: site.name,
    images: [
      {
        url: "/brand/ruvia-og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Ruvia Studios – Jasa Pembuatan Website & Sistem Bisnis di Pontianak dan Surabaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website & Sistem Bisnis | Ruvia Studios",
    description:
      "Website cepat, modern, dan SEO-friendly di Pontianak & Surabaya. Ditangani langsung oleh Software Engineer.",
    images: ["/brand/ruvia-og-cover.jpg"],
    creator: "@ruviastudios",
  },
  icons: {
    icon: [{ url: "/brand/ruvia-icon.svg", type: "image/svg+xml" }],
    shortcut: "/brand/ruvia-icon.svg",
    apple: "/brand/ruvia-icon.svg",
  },
  verification: {
    google: "YvG1uuhEkpnkvEcqcKqSZFBZZQqOnFZH7BLUYbyIzLA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/brand/ruvia-icon.svg`,
        description:
          "Studio rekayasa perangkat lunak & jasa pembuatan website profesional berbasis di Pontianak dan Surabaya.",
        telephone: `+${site.whatsapp.number}`,
        email: site.email,
        priceRange: "Rp 1.000.000 - Custom Scope",
        address: site.locations.map((loc) => ({
          "@type": "PostalAddress",
          streetAddress: loc.street,
          addressLocality: loc.city,
          addressRegion: loc.region,
          addressCountry: loc.country,
        })),
        areaServed: ["Pontianak", "Surabaya", "Kalimantan Barat", "Jawa Timur", "Indonesia"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Pembuatan Website & Sistem",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Starter (Landing Page)",
                description: "Website 1 halaman profesional lengkap dengan domain, hosting, SSL, dan integrasi WhatsApp.",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "1000000",
                priceCurrency: "IDR",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sistem & Web Custom",
                description: "Sistem CRM, ERP, Kasir POS, dan aplikasi web custom skala industri.",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "Custom Scope",
                priceCurrency: "IDR",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "id-ID",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };

  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[var(--bg)]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
