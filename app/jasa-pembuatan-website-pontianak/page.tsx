import { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  MapPin,
  Clock,
  Users,
  ChevronDown,
} from "lucide-react";

const PAGE_URL = `${site.url}/jasa-pembuatan-website-pontianak`;
const pontianakAddress = site.locations.find((l) => l.city === "Pontianak");

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Pontianak & Kalimantan Barat | Ruvia Studios",
  description:
    "Jasa pembuatan website profesional di Pontianak & Kalimantan Barat. Spesialis landing page, company profile, dan sistem bisnis untuk UMKM dan perusahaan. Mulai Rp1.000.000.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Jasa Pembuatan Website Pontianak & Kalimantan Barat | Ruvia Studios",
    description:
      "Website cepat, SEO-friendly, dan profesional untuk bisnis di Pontianak & Kalbar. Mulai Rp1.000.000.",
    images: [
      {
        url: "/brand/ruvia-og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Ruvia Studios – Jasa Pembuatan Website di Pontianak dan Kalimantan Barat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Pontianak & Kalimantan Barat | Ruvia Studios",
    description:
      "Spesialis website & sistem bisnis di Pontianak. Ditangani langsung oleh software engineer. Mulai Rp1.000.000.",
    images: ["/brand/ruvia-og-cover.jpg"],
  },
};

const faqs = [
  {
    q: "Apakah Ruvia Studios punya kantor di Pontianak?",
    a: "Ya. Ruvia Studios beroperasi di Pontianak Kota (Jl. Merdeka Barat No. 30). Kami bisa berdiskusi langsung di Pontianak untuk proyek yang membutuhkan pertemuan tatap muka.",
  },
  {
    q: "Berapa lama proses pembuatan website di Pontianak?",
    a: "Paket Starter (1 halaman) biasanya selesai 1–2 minggu setelah konten diterima. Website lebih kompleks atau sistem bisnis bisa 3–8 minggu tergantung scope dan kompleksitas fitur.",
  },
  {
    q: "Apakah paket Rp1.000.000 termasuk domain dan hosting?",
    a: "Ya. Paket Starter mulai Rp1.000.000 mencakup domain (.com atau .id), hosting 1 tahun, SSL HTTPS, desain responsif, dan integrasi WhatsApp. Tidak ada biaya tersembunyi.",
  },
  {
    q: "Apakah melayani UMKM dan toko di luar kota Pontianak?",
    a: "Tentu. Kami melayani klien dari seluruh Kalimantan Barat termasuk Kubu Raya, Singkawang, Sambas, Mempawah, Sanggau, Sintang, dan Ketapang. Semua koordinasi bisa dilakukan via WhatsApp dan video call.",
  },
  {
    q: "Bisnis saya belum pernah punya website sama sekali, bisa langsung mulai?",
    a: "Bisa. Justru inilah saatnya. Kami bantu Anda mulai dari nol—termasuk memandu pemilihan nama domain, membantu menyiapkan konten dasar, dan memastikan website Anda muncul di Google sejak hari pertama live.",
  },
];

export default function WebsitePontianakPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Jasa Website Pontianak",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${PAGE_URL}#business`,
        name: "Ruvia Studios – Jasa Website Pontianak",
        url: PAGE_URL,
        telephone: `+${site.whatsapp.number}`,
        email: site.email,
        description:
          "Jasa pembuatan website profesional dan sistem bisnis custom untuk UMKM dan perusahaan di Pontianak dan Kalimantan Barat.",
        priceRange: "Rp1.000.000 – Custom Scope",
        areaServed: [
          "Pontianak",
          "Kubu Raya",
          "Singkawang",
          "Sambas",
          "Mempawah",
          "Sanggau",
          "Sintang",
          "Ketapang",
          "Kalimantan Barat",
        ],
        address: pontianakAddress
          ? {
              "@type": "PostalAddress",
              streetAddress: pontianakAddress.street,
              addressLocality: pontianakAddress.city,
              addressRegion: pontianakAddress.region,
              addressCountry: pontianakAddress.country,
            }
          : undefined,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Website & Sistem Pontianak",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Starter Pontianak",
                description:
                  "Landing page 1 halaman profesional dengan domain, hosting, SSL, SEO dasar, dan integrasi WhatsApp. Siap dalam 1–2 minggu.",
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
                name: "Website Multi-Halaman & Company Profile",
                description:
                  "Halaman About, Layanan, Blog, Kontak, dan galeri proyek.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sistem Bisnis Custom (Kasir POS / Booking / CRM)",
                description:
                  "Platform manajemen khusus untuk berbagai skala dan jenis usaha.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-[var(--bg)] min-h-screen pt-24 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-5xl px-5 sm:px-8 pt-4 pb-2 text-xs text-[var(--ink-muted)]"
      >
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-[var(--accent)] transition-colors">
              Beranda
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-semibold text-[var(--ink)]">Jasa Website Pontianak</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 md:py-22 border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-sm font-semibold text-emerald-600 mb-6">
              <MapPin className="w-4 h-4" />
              Kantor di Pontianak · Melayani Seluruh Kalimantan Barat
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-[clamp(2rem,4vw+1rem,3.6rem)] font-extrabold leading-tight text-[var(--ink)] mb-5 tracking-tight">
              Jasa Pembuatan Website Profesional di{" "}
              <span className="text-[var(--accent)]">Pontianak</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--ink-muted)] mb-10 max-w-3xl mx-auto leading-relaxed">
              Persaingan bisnis di Pontianak semakin ketat, tapi sebagian besar UMKM
              dan toko masih mengandalkan promosi dari mulut ke mulut dan feed Instagram.
              Website yang tepat memberi Anda kehadiran 24 jam di Google—bahkan saat
              Anda sedang tidur.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink(
                  "Halo Ruvia Studios Pontianak, saya ingin konsultasi pembuatan website untuk bisnis saya di Pontianak."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-14 px-8 text-base bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-xl inline-flex items-center gap-2 shadow-xl">
                  Konsultasi Gratis via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link href="/portfolio">
                <Button
                  variant="secondary"
                  className="h-14 px-8 text-base border-2 border-[var(--line)]"
                >
                  Lihat Portofolio Proyek
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why You Need a Website */}
      <section className="py-20 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-[var(--ink)] mb-4">
              Mengapa Bisnis di Pontianak Butuh Website Sekarang?
            </h2>
            <p className="text-center text-[var(--ink-muted)] mb-12 max-w-2xl mx-auto">
              Profil WhatsApp Business dan akun Instagram tidak cukup untuk membangun
              kepercayaan pelanggan yang belum pernah bertemu Anda sebelumnya.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <Zap className="w-10 h-10 text-[var(--accent)] mb-6" />
                <h3 className="text-xl font-bold mb-3">Tampil di Google Pontianak</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Saat seseorang di Pontianak mencari "toko baju murah Pontianak" atau
                  "catering Pontianak", website Anda yang muncul—bukan kompetitor yang
                  sudah duluan online.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <ShieldCheck className="w-10 h-10 text-[var(--accent)] mb-6" />
                <h3 className="text-xl font-bold mb-3">Bangun Kepercayaan Pelanggan Baru</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Website dengan alamat, foto, portofolio, dan ulasan membuat calon
                  pelanggan baru lebih percaya untuk menghubungi Anda dibandingkan hanya
                  lihat profil Instagram.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-[var(--accent)] mb-6" />
                <h3 className="text-xl font-bold mb-3">Ditangani Engineer Lokal Pontianak</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Anda bisa diskusi langsung—via WhatsApp, video call, atau tatap muka
                  di kantor kami di Pontianak Kota. Tidak ada biaya konsultasi awal.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Package & Pricing */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">
              Paket & Harga Website Pontianak
            </h2>
            <p className="text-[var(--ink-muted)] mb-12 max-w-xl mx-auto">
              Harga transparan tanpa biaya tersembunyi. Konsultasi dahulu jika belum yakin
              paket mana yang cocok.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-[var(--surface)] p-8 md:p-10 rounded-3xl border-2 border-[var(--accent)] shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--accent)] text-white text-xs font-bold rounded-full">
                  PALING POPULER
                </div>
                <h3 className="text-2xl font-extrabold mb-2">Paket Starter</h3>
                <div className="text-4xl font-black text-[var(--accent-strong)] mb-4">
                  Rp1.000.000
                </div>
                <p className="text-sm text-[var(--ink-muted)] mb-6">
                  Ideal untuk UMKM, warung makan, salon, jasa laundry, toko online, dan
                  profesional freelance di Pontianak yang ingin segera go-online.
                </p>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Landing page 1 halaman profesional",
                    "Domain (.com / .id) & Hosting 1 tahun",
                    "SSL HTTPS & keamanan dasar",
                    "Tombol WhatsApp CTA langsung",
                    "Peta Google Maps terintegrasi",
                    "Desain responsif HP & desktop",
                    "SEO on-page dasar",
                    "Selesai dalam 1–2 minggu",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppLink(
                    "Halo Ruvia Studios Pontianak, saya tertarik dengan Paket Website Starter Rp1.000.000."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full h-12 bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-xl">
                    Pesan Sekarang
                  </Button>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[var(--surface)] p-8 md:p-10 rounded-3xl border border-[var(--line)] shadow-sm">
                <h3 className="text-2xl font-extrabold mb-2">Paket Custom</h3>
                <div className="text-2xl font-black text-[var(--ink)] mb-1">
                  Harga Sesuai Scope
                </div>
                <p className="text-xs text-[var(--ink-muted)] mb-4">
                  Konsultasikan kebutuhan untuk mendapat estimasi
                </p>
                <p className="text-sm text-[var(--ink-muted)] mb-6">
                  Untuk toko online, rumah makan dengan menu digital, klinik dengan
                  sistem antrian, atau perusahaan yang butuh website company profile
                  beserta sistem manajemen internal.
                </p>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Website multi-halaman & company profile",
                    "Menu digital / katalog produk interaktif",
                    "Sistem antrian atau booking online",
                    "Integrasi pembayaran (QRIS / Midtrans)",
                    "Dashboard admin manajemen konten",
                    "Sistem kasir POS atau CRM ringan",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppLink(
                    "Halo Ruvia Studios Pontianak, saya butuh website/sistem custom. Boleh diskusi scope dan estimasi harganya?"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="secondary"
                    className="w-full h-12 border-2 border-[var(--line)] font-bold rounded-xl"
                  >
                    Diskusi Scope & Harga
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-[var(--ink)] mb-4">
              Cara Kerja Kami
            </h2>
            <p className="text-center text-[var(--ink-muted)] mb-14 max-w-xl mx-auto">
              Proses yang jelas dan terdokumentasi dari awal hingga website Anda online.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "Anda ceritakan bisnis, target pelanggan, dan harapan dari website. Bisa via WhatsApp, video call, atau tatap muka di kantor Pontianak.",
              },
              {
                step: "02",
                title: "Plan",
                desc: "Kami siapkan dokumen scope tertulis: halaman apa saja, fitur apa, perkiraan waktu dan biaya. Anda setujui sebelum kami mulai kerja.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Proses pengerjaan dengan laporan progres berkala. Anda bisa melihat dan berkomentar di URL preview sebelum website final.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "Website aktif di domain Anda. Kami pastikan semua berjalan baik dan memberikan panduan dasar pengelolaan konten.",
              },
            ].map((item) => (
              <Reveal key={item.step} delay={0.1}>
                <div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--line)]">
                  <div className="text-4xl font-black text-[var(--accent)]/20 mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-[var(--bg)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">
              Cakupan Layanan Kalimantan Barat
            </h2>
            <p className="text-[var(--ink-muted)] mb-8">
              Ruvia Studios melayani bisnis dari seluruh Kalimantan Barat. Koordinasi
              proyek dapat dilakukan sepenuhnya secara remote via WhatsApp dan video
              call—atau tatap muka untuk klien di sekitar Pontianak.
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {[
              "Pontianak",
              "Kubu Raya",
              "Singkawang",
              "Sambas",
              "Mempawah",
              "Sanggau",
              "Sintang",
              "Kapuas Hulu",
              "Melawi",
              "Ketapang",
            ].map((kota) => (
              <span
                key={kota}
                className="px-4 py-2 bg-[var(--surface)] border border-[var(--line)] rounded-full text-sm font-semibold text-[var(--ink)]"
              >
                {kota}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-10">
              Pertanyaan yang Sering Diajukan
            </h2>
          </Reveal>
          <div className="divide-y divide-[var(--line)]">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={0.05 * idx}>
                <details className="group py-5 cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 text-base font-semibold text-[var(--ink)] list-none">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-[var(--ink-muted)] group-open:rotate-180 transition-transform shrink-0" />
                  </summary>
                  <p className="mt-3 text-sm text-[var(--ink-muted)] leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Address + CTA */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">
                  Lokasi Kami di Pontianak
                </h2>
                <div className="flex items-start gap-3 text-[var(--ink-muted)] text-sm">
                  <MapPin className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
                  <address className="not-italic leading-relaxed">
                    {pontianakAddress?.street}
                    <br />
                    Pontianak, Kalimantan Barat, Indonesia
                  </address>
                </div>
                <div className="flex items-center gap-3 text-[var(--ink-muted)] text-sm mt-4">
                  <Clock className="w-5 h-5 text-[var(--accent)] shrink-0" />
                  <span>Senin–Sabtu, 09.00–18.00 WIB</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--ink-muted)] text-sm mt-3">
                  <Users className="w-5 h-5 text-[var(--accent)] shrink-0" />
                  <span>Konsultasi via WhatsApp · Video Call · Pertemuan Langsung</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--line)] text-center">
                <h3 className="text-xl font-bold mb-3">Siap Mulai Proyek Anda?</h3>
                <p className="text-sm text-[var(--ink-muted)] mb-6 leading-relaxed">
                  Ceritakan bisnis Anda dan kami bantu tentukan solusi digital yang tepat.
                  Konsultasi gratis, tanpa komitmen awal.
                </p>
                <a
                  href={getWhatsAppLink(
                    "Halo Ruvia Studios Pontianak, saya ingin diskusi kebutuhan website untuk bisnis saya di Pontianak."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full h-12 bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-xl inline-flex items-center justify-center gap-2">
                    Chat via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
