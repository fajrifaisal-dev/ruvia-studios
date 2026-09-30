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

const PAGE_URL = `${site.url}/jasa-pembuatan-website-surabaya`;
const surabayaAddress = site.locations.find((l) => l.city === "Surabaya");

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Surabaya & Jawa Timur | Ruvia Studios",
  description:
    "Jasa pembuatan website profesional di Surabaya & Jawa Timur. Spesialis landing page, sistem booking, company profile, dan ERP untuk UMKM dan perusahaan. Mulai Rp1.000.000.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Jasa Pembuatan Website Surabaya & Jawa Timur | Ruvia Studios",
    description:
      "Jasa pembuatan website profesional di Surabaya & Jawa Timur. Mulai Rp1.000.000 untuk UMKM hingga sistem enterprise.",
    images: [
      {
        url: "/brand/ruvia-og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Ruvia Studios – Jasa Pembuatan Website di Surabaya dan Jawa Timur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Surabaya & Jawa Timur | Ruvia Studios",
    description:
      "Spesialis website & sistem bisnis di Surabaya. Ditangani langsung oleh software engineer. Mulai Rp1.000.000.",
    images: ["/brand/ruvia-og-cover.jpg"],
  },
};

const faqs = [
  {
    q: "Berapa lama proses pembuatan website di Surabaya?",
    a: "Untuk Paket Starter (1 halaman), pengerjaan biasanya selesai dalam 1–2 minggu setelah materi konten diterima. Untuk website multi-halaman atau sistem yang lebih kompleks, durasi berkisar 3–6 minggu tergantung scope dan revisi.",
  },
  {
    q: "Apakah harga Rp1.000.000 sudah termasuk domain dan hosting?",
    a: "Ya. Paket Starter mulai Rp1.000.000 sudah mencakup domain (.com atau .id), hosting selama 1 tahun, SSL HTTPS, dan dukungan teknis pasca-peluncuran. Tidak ada biaya tersembunyi.",
  },
  {
    q: "Apakah bisa konsultasi tatap muka di Surabaya?",
    a: "Ruvia Studios memiliki alamat operasional di Surabaya (Medokan Semampir, Sukolilo). Diskusi proyek dapat dilakukan via WhatsApp, video call, atau pertemuan langsung sesuai kesepakatan.",
  },
  {
    q: "Apa perbedaan layanan Ruvia Studios dengan developer lepas biasa?",
    a: "Kami menggunakan arsitektur teknologi standar industri (Next.js, TypeScript), menerapkan praktik SEO teknis dari awal, dan menyertakan dokumentasi scope yang jelas. Klien berdiskusi langsung dengan engineer—bukan sales—sehingga kebutuhan teknis dipahami dengan tepat.",
  },
  {
    q: "Apakah Ruvia Studios melayani bisnis di luar Surabaya kota?",
    a: "Ya. Kami melayani klien dari seluruh Jawa Timur termasuk Sidoarjo, Gresik, Malang, Mojokerto, dan Pasuruan. Sebagian besar koordinasi dilakukan secara remote, dengan opsi kunjungan untuk proyek skala besar.",
  },
];

export default function WebsiteSurabayaPage() {
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
            name: "Jasa Website Surabaya",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${PAGE_URL}#business`,
        name: "Ruvia Studios – Jasa Website Surabaya",
        url: PAGE_URL,
        telephone: `+${site.whatsapp.number}`,
        email: site.email,
        description:
          "Jasa pembuatan website profesional dan sistem bisnis custom untuk UMKM dan perusahaan di Surabaya dan Jawa Timur.",
        priceRange: "Rp1.000.000 – Custom Scope",
        areaServed: [
          "Surabaya",
          "Sidoarjo",
          "Gresik",
          "Malang",
          "Mojokerto",
          "Pasuruan",
          "Jawa Timur",
        ],
        address: surabayaAddress
          ? {
              "@type": "PostalAddress",
              streetAddress: surabayaAddress.street,
              addressLocality: surabayaAddress.city,
              addressRegion: surabayaAddress.region,
              addressCountry: surabayaAddress.country,
            }
          : undefined,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Website & Sistem Surabaya",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Starter Surabaya",
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
                  "Halaman About, Layanan, Blog, Kontak, dan galeri proyek. Cocok untuk perusahaan menengah.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sistem Bisnis Custom (ERP / CRM / Booking)",
                description:
                  "Platform manajemen khusus untuk skala industri dan logistik.",
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
          <li className="font-semibold text-[var(--ink)]">Jasa Website Surabaya</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 md:py-22 border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-sm font-semibold text-emerald-600 mb-6">
              <MapPin className="w-4 h-4" />
              Berbasis di Surabaya · Melayani Jawa Timur
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-[clamp(2rem,4vw+1rem,3.6rem)] font-extrabold leading-tight text-[var(--ink)] mb-5 tracking-tight">
              Jasa Pembuatan Website di{" "}
              <span className="text-[var(--accent)]">Surabaya</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--ink-muted)] mb-10 max-w-3xl mx-auto leading-relaxed">
              Banyak bisnis di Surabaya kehilangan calon pelanggan karena tidak punya
              kehadiran digital yang layak—atau punya website tapi lambat, tidak muncul
              di Google, dan tidak bisa ditelusuri dari HP. Kami membangun website yang
              bekerja nyata untuk bisnis Anda.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink(
                  "Halo Ruvia Studios Surabaya, saya ingin konsultasi pembuatan website untuk bisnis saya di Surabaya."
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

      {/* What You Get */}
      <section className="py-20 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-[var(--ink)] mb-4">
              Apa yang Anda Dapatkan
            </h2>
            <p className="text-center text-[var(--ink-muted)] mb-12 max-w-2xl mx-auto">
              Bukan sekadar desain cantik—tapi fondasi digital yang solid untuk mendukung
              pertumbuhan bisnis Anda di Surabaya dan sekitarnya.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <Zap className="w-10 h-10 text-[var(--accent)] mb-6" />
                <h3 className="text-xl font-bold mb-3">Cepat & Lulus Core Web Vitals</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Dibangun dengan Next.js—framework yang dipakai oleh perusahaan teknologi
                  besar. Halaman terbuka cepat bahkan di koneksi 4G, sehingga pengunjung
                  tidak kabur sebelum membaca penawaran Anda.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <ShieldCheck className="w-10 h-10 text-[var(--accent)] mb-6" />
                <h3 className="text-xl font-bold mb-3">SEO Lokal Surabaya & Jawa Timur</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Metadata, Structured Data (Schema.org), dan arsitektur URL yang tepat
                  agar bisnis Anda lebih mudah ditemukan saat calon pelanggan di Surabaya
                  mencari layanan Anda di Google.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-[var(--accent)] mb-6" />
                <h3 className="text-xl font-bold mb-3">Scope Jelas, Tanpa Kaget</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Sebelum pengerjaan dimulai, Anda menerima dokumen scope tertulis berisi
                  fitur, halaman, dan estimasi waktu yang sudah disetujui bersama. Tidak
                  ada biaya mendadak di tengah jalan.
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
              Paket & Harga Website Surabaya
            </h2>
            <p className="text-[var(--ink-muted)] mb-12 max-w-xl mx-auto">
              Transparan sejak awal. Pilih sesuai kebutuhan bisnis Anda.
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
                  Cocok untuk UMKM, toko, dan profesional yang ingin segera go-online
                  dengan tampilan meyakinkan.
                </p>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Landing page 1 halaman profesional",
                    "Domain (.com / .id) & Hosting 1 tahun",
                    "SSL HTTPS & proteksi keamanan dasar",
                    "Integrasi tombol WhatsApp CTA",
                    "Peta Google Maps terintegrasi",
                    "Desain responsif mobile & desktop",
                    "SEO on-page dasar (meta, heading, alt)",
                    "Pengerjaan 1–2 minggu",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppLink(
                    "Halo Ruvia Studios Surabaya, saya tertarik dengan Paket Website Starter Rp1.000.000."
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
                  Untuk bisnis yang butuh lebih dari 1 halaman, sistem booking, kasir
                  POS, CRM, ERP, atau integrasi API pihak ketiga.
                </p>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Website multi-halaman & company profile",
                    "Sistem booking atau reservasi real-time",
                    "Dashboard admin & manajemen konten",
                    "Integrasi payment gateway (QRIS, Midtrans)",
                    "ERP ringan / CRM / Kasir POS",
                    "Laporan & analitik data bisnis",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppLink(
                    "Halo Ruvia Studios Surabaya, saya butuh website/sistem custom. Boleh diskusi scope dan estimasi harganya?"
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
              Alur Kerja Kami
            </h2>
            <p className="text-center text-[var(--ink-muted)] mb-14 max-w-xl mx-auto">
              Transparan dari hari pertama hingga website Anda live di internet.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "Diskusi kebutuhan bisnis, target audiens, dan referensi desain via WhatsApp atau video call.",
              },
              {
                step: "02",
                title: "Plan",
                desc: "Dokumen scope fitur, sitemap, dan estimasi waktu dikirim ke Anda untuk disetujui sebelum pengerjaan dimulai.",
              },
              {
                step: "03",
                title: "Build",
                desc: "Pengerjaan dengan update progres berkala. Anda bisa melihat preview di URL staging sebelum final.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "Deploy ke domain Anda. Kami pastikan semua fitur berjalan sebelum handover, plus dukungan teknis pasca-peluncuran.",
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

      {/* Related Projects */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">
              Proyek Terkait di Jawa Timur
            </h2>
            <p className="text-[var(--ink-muted)] mb-10">
              Berikut contoh pekerjaan nyata dan showcase yang relevan untuk bisnis di Surabaya.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Hello Friday Studio",
                label: "Proyek Klien",
                labelColor: "text-emerald-600 bg-emerald-500/10 border-emerald-500/30",
                desc: "Platform booking multi-cabang berkonsep slow living untuk salon kecantikan & dental studio di Surabaya & Malang.",
                href: "/portfolio/hello-friday",
              },
              {
                title: "Kazi – Nail Beauty Bar",
                label: "Proyek Klien",
                labelColor: "text-emerald-600 bg-emerald-500/10 border-emerald-500/30",
                desc: "Website outlet locator dan price list dinamis untuk jaringan nail art di 15+ coffee shop se-Jawa Timur.",
                href: "/portfolio/kazi-nail-beauty-bar",
              },
            ].map((proj) => (
              <Reveal key={proj.title} delay={0.1}>
                <Link href={proj.href} className="group block">
                  <div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--line)] hover:border-[var(--accent)] transition-colors">
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold mb-3 ${proj.labelColor}`}
                    >
                      {proj.label}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Spoke Pages / Niche Links */}
      <section className="py-20 bg-[var(--surface-alt)] border-t border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">
              Layanan Website Khusus Industri
            </h2>
            <p className="text-[var(--ink-muted)] mb-10">
              Selain layanan umum, kami memiliki rekam jejak mengembangkan sistem spesifik untuk sektor industri berikut di Surabaya:
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <Link href="/website-salon-kecantikan-surabaya" className="group block">
                <div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--line)] hover:border-pink-500 transition-colors h-full">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-pink-500 transition-colors flex items-center justify-between">
                    Salon Kecantikan & Klinik <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                    Sistem reservasi, multi-cabang, dan katalog layanan.
                  </p>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/sistem-manajemen-logistik-surabaya" className="group block">
                <div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--line)] hover:border-blue-500 transition-colors h-full">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors flex items-center justify-between">
                    Logistik & Ekspedisi <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                    Custom ERP, Freight Tracking, dan Manajemen FCL/LCL.
                  </p>
                </div>
              </Link>
            </Reveal>
            {/* Slot untuk niche berikutnya (Konsultan, Hukum) */}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">
              Cakupan Layanan Jawa Timur
            </h2>
            <p className="text-[var(--ink-muted)] mb-8">
              Kami melayani klien dari seluruh Jawa Timur. Koordinasi proyek dapat dilakukan
              secara remote melalui WhatsApp, video call, atau pertemuan langsung untuk
              proyek di sekitar Surabaya.
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {[
              "Surabaya",
              "Sidoarjo",
              "Gresik",
              "Malang",
              "Mojokerto",
              "Pasuruan",
              "Lamongan",
              "Jombang",
              "Tuban",
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
      <section className="py-20 bg-[var(--bg)]">
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
      <section className="py-20 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">
                  Lokasi Kami di Surabaya
                </h2>
                <div className="flex items-start gap-3 text-[var(--ink-muted)] text-sm">
                  <MapPin className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
                  <address className="not-italic leading-relaxed">
                    {surabayaAddress?.street}
                    <br />
                    Surabaya, Jawa Timur, Indonesia
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
                <h3 className="text-xl font-bold mb-3">Siap Diskusi Proyek?</h3>
                <p className="text-sm text-[var(--ink-muted)] mb-6 leading-relaxed">
                  Ceritakan kebutuhan bisnis Anda. Tanpa biaya konsultasi, tanpa komitmen
                  awal. Kami bantu tentukan solusi yang tepat.
                </p>
                <a
                  href={getWhatsAppLink(
                    "Halo Ruvia Studios Surabaya, saya ingin diskusi kebutuhan website untuk bisnis saya."
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
