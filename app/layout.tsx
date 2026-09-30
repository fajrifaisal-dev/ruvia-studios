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
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  metadataBase: new URL(site.url),
  keywords: ["Software House", "Jasa Pembuatan Website", "Web Development", "Corporate Website", "Sistem ERP", "Next.js", "Pontianak", "Surabaya"],
  authors: [{ name: "Ruvia Studios" }],
  creator: "Ruvia Studios",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    title: site.name,
    description: site.tagline,
    siteName: site.name,
    images: [
      {
        url: "/asset-porto/corporate_showcase.png", // Fallback OG image
        width: 1200,
        height: 630,
        alt: "Ruvia Studios - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
    images: ["/asset-porto/corporate_showcase.png"],
    creator: "@ruviastudios",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              description: site.tagline,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: `+${site.whatsapp.number}`,
                contactType: "sales",
                availableLanguage: ["en", "id"],
              },
              areaServed: site.serviceArea,
              location: site.locations.map((loc) => ({
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: site.showStreetAddress ? loc.street : undefined,
                  addressLocality: loc.city,
                  addressRegion: loc.region,
                  addressCountry: loc.country,
                },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: site.name,
              url: site.url,
            }),
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
