import { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

const PAGE_URL = `${site.url}/website-salon-kecantikan-surabaya`;

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Salon Kecantikan di Surabaya | Ruvia Studios",
  description:
    "Website & sistem reservasi untuk salon kecantikan, klinik estetik, dan nail art di Surabaya. Atasi double booking dan permudah pelanggan mencari lokasi cabang Anda.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Jasa Pembuatan Website Salon Kecantikan di Surabaya",
    description:
      "Website & sistem reservasi untuk salon kecantikan, klinik estetik, dan nail art di Surabaya. Mulai Rp1.000.000.",
    images: [
      {
        url: "/brand/ruvia-og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website Salon Kecantikan Surabaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Salon Kecantikan di Surabaya",
    description:
      "Website & sistem reservasi untuk salon kecantikan, klinik estetik, dan nail art di Surabaya. Mulai Rp1.000.000.",
    images: ["/brand/ruvia-og-cover.jpg"],
  },
};

const faqs = [
  {
    q: "Apakah pelanggan harus mendownload aplikasi untuk booking salon?",
    a: "Tidak perlu. Sistem reservasi yang kami bangun berbasis website. Pelanggan cukup membuka link dari bio Instagram atau Google, pilih layanan, pilih jadwal kosong, lalu konfirmasi via WhatsApp tanpa perlu menginstal aplikasi tambahan.",
  },
  {
    q: "Bisa tidak jika saya hanya butuh website profil tanpa fitur booking?",
    a: "Tentu bisa. Anda bisa memilih Paket Starter untuk membuat landing page berisi profil salon, daftar harga, dan galeri hasil perawatan, dengan tombol pemesanan yang langsung mengarah ke WhatsApp admin Anda.",
  },
  {
    q: "Bagaimana jika salon saya punya beberapa cabang di Surabaya?",
    a: "Kami bisa membuatkan fitur pemilih cabang (Multi-Branch Locator). Pelanggan dapat melihat cabang mana yang paling dekat, jam buka masing-masing, dan melihat jadwal kosong spesifik untuk cabang tersebut.",
  },
  {
    q: "Apakah website ini bisa menampilkan portofolio hasil makeup atau nail art?",
    a: "Sangat bisa. Kami merancang desain khusus (seringkali dengan tema Dark Mode yang elegan atau Pastel yang estetik) untuk menonjolkan galeri foto sebelum-sesudah (before-after) layanan Anda.",
  },
  {
    q: "Berapa lama website salon kecantikan ini selesai dikerjakan?",
    a: "Untuk website profil standar memakan waktu 1–2 minggu. Jika Anda membutuhkan sistem reservasi real-time (custom dashboard), waktu pengerjaan berkisar 3–6 minggu.",
  },
];

export default function WebsiteSalonKecantikanPage() {
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
            item: `${site.url}/jasa-pembuatan-website-surabaya`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Website Salon Kecantikan",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Pembuatan Website & Sistem Reservasi Salon Kecantikan Surabaya",
        provider: {
          "@type": "Organization",
          name: site.name,
        },
        description:
          "Layanan rekayasa digital untuk salon kecantikan, nail art, dan klinik estetik di Surabaya. Meliputi profil digital, katalog harga, dan sistem reservasi online.",
        areaServed: {
          "@type": "City",
          name: "Surabaya",
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
          <li>
            <Link
              href="/jasa-pembuatan-website-surabaya"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Jasa Website Surabaya
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-semibold text-[var(--ink)]">Salon Kecantikan</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 md:py-22 border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-sm font-semibold text-pink-600 mb-6">
              <Sparkles className="w-4 h-4" />
              Solusi Digital Khusus Beauty & Wellness
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-[clamp(2rem,4vw+1rem,3.6rem)] font-extrabold leading-tight text-[var(--ink)] mb-5 tracking-tight">
              Jasa Pembuatan Website untuk <span className="text-[var(--accent)]">Salon Kecantikan</span> di Surabaya
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--ink-muted)] mb-10 max-w-3xl mx-auto leading-relaxed">
              Tingkatkan kelas salon kecantikan, klinik estetik, atau nail art Anda dengan website elegan. Permudah pelanggan Surabaya melihat daftar harga, menemukan lokasi cabang terdekat, dan melakukan reservasi tanpa antri chat admin.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink(
                  "Halo Ruvia Studios Surabaya, saya memiliki salon kecantikan dan ingin konsultasi pembuatan website."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-14 px-8 text-base bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-xl inline-flex items-center gap-2 shadow-xl">
                  Konsultasi Khusus Salon via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-[var(--ink)] mb-4">
              Masalah Operasional Salon yang Sering Terjadi
            </h2>
            <p className="text-center text-[var(--ink-muted)] mb-12 max-w-2xl mx-auto">
              Mengelola salon kecantikan bukan hanya soal kualitas pelayanan, tapi juga kenyamanan pelanggan saat mendaftar.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-red-500 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Admin Chat Kewalahan</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Semua reservasi masuk melalui WhatsApp manual. Admin harus berulang kali membalas pertanyaan yang sama tentang harga, jam buka, dan ketersediaan slot.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-red-500 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Risiko Double Booking</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Pencatatan buku tamu manual rawan kesalahan. Kadang ada dua pelanggan dijadwalkan di jam yang sama untuk terapis yang sama.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-red-500 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Promo Hilang di IG Story</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Anda memposting harga promo di Instagram Story, tapi hilang dalam 24 jam. Pelanggan baru kesulitan mencari katalog layanan yang lengkap.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features Solution */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-[var(--ink)] mb-4">
              Fitur Utama untuk Kesuksesan Salon Anda
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Reveal delay={0.1}>
              <div className="flex gap-4">
                <CalendarDays className="w-8 h-8 text-[var(--accent)] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Sistem Reservasi Mandiri (Self-Service Booking)</h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                    Pelanggan memilih jenis layanan, terapis, dan slot jam kosong secara langsung di website tanpa harus menunggu admin membalas.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex gap-4">
                <MapPin className="w-8 h-8 text-[var(--accent)] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Pencari Cabang (Multi-Branch Locator)</h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                    Jika Anda memiliki beberapa cabang di Surabaya (misal: Barat, Pusat, Timur), pelanggan bisa melihat peta interaktif dan memilih cabang terdekat.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex gap-4">
                <Sparkles className="w-8 h-8 text-[var(--accent)] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Katalog Layanan & Harga Dinamis</h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                    Tampilkan price list lengkap (hair treatment, facial, eyelash, dll) yang selalu terupdate, dengan label promo atau paket khusus.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex gap-4">
                <ShieldCheck className="w-8 h-8 text-[var(--accent)] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Desain Estetik Sesuai Brand</h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                    Tampilan UI/UX disesuaikan dengan identitas brand Anda—apakah berkonsep slow-living, mewah (premium dark mode), atau ceria dan energik.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Package & Pricing */}
      <section className="py-20 bg-[var(--surface-alt)] border-y border-[var(--line)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">
              Pilih Paket Website Salon Anda
            </h2>
            <p className="text-[var(--ink-muted)] mb-12 max-w-xl mx-auto">
              Dari landing page sederhana hingga sistem booking cabang yang kompleks.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-[var(--surface)] p-8 md:p-10 rounded-3xl border border-[var(--line)] shadow-sm">
                <h3 className="text-2xl font-extrabold mb-2">Landing Page Salon</h3>
                <div className="text-4xl font-black text-[var(--accent-strong)] mb-4">
                  Rp1.000.000
                </div>
                <p className="text-sm text-[var(--ink-muted)] mb-6">
                  Solusi cepat untuk menampilkan profil, layanan, dan rute Google Maps.
                </p>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Website 1 Halaman Premium</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Domain (.com) & Hosting 1 Tahun</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Integrasi Kontak WhatsApp Instan</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Galeri Foto & Daftar Harga Statis</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[var(--surface)] p-8 md:p-10 rounded-3xl border-2 border-pink-500 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
                  DIREKOMENDASIKAN
                </div>
                <h3 className="text-2xl font-extrabold mb-2">Salon Booking System</h3>
                <div className="text-2xl font-black text-[var(--ink)] mb-1">
                  Mulai <span className="text-[var(--accent-strong)]">[ISI: Estimasi]</span>
                </div>
                <p className="text-xs text-[var(--ink-muted)] mb-4">
                  *Harga menyesuaikan kerumitan fitur
                </p>
                <p className="text-sm text-[var(--ink-muted)] mb-6">
                  Untuk klinik kecantikan atau salon skala menengah yang butuh manajemen operasional otomatis.
                </p>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                    <span>Sistem Reservasi Tanggal & Jam</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                    <span>Manajemen Multi-Cabang</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                    <span>Database Terapis & Jadwal Kerjanya</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                    <span>Notifikasi Konfirmasi Otomatis</span>
                  </li>
                </ul>
                <a
                  href={getWhatsAppLink(
                    "Halo Ruvia Studios Surabaya, saya tertarik berdiskusi soal fitur Salon Booking System kustom."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full h-12 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl">
                    Konsultasikan Fitur
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Showcase Real Projects */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-[var(--ink)] mb-4">
              Bukti Nyata Kinerja Kami di Sektor Kecantikan
            </h2>
            <p className="text-center text-[var(--ink-muted)] mb-12 max-w-2xl mx-auto">
              Kami telah merancang identitas digital berkelas tinggi untuk merek kecantikan nyata.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <Link href="/portfolio/hello-friday" className="group block h-full">
                <div className="bg-[var(--surface)] p-6 rounded-3xl border border-[var(--line)] hover:border-pink-500 transition-colors h-full flex flex-col">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 text-xs font-semibold mb-4 w-fit">
                    Proyek Klien (Real Case)
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">
                    Hello Friday Studio
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed flex-grow mb-6">
                    Membangun platform berkonsep slow-living dengan tema Dark Mode elegan. Mengatasi masalah reservasi manual dengan sistem booking cabang Surabaya & Malang.
                  </p>
                  <div className="text-sm font-semibold text-pink-500 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Baca Studi Kasus <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.2}>
              <Link href="/portfolio/kazi-nail-beauty-bar" className="group block h-full">
                <div className="bg-[var(--surface)] p-6 rounded-3xl border border-[var(--line)] hover:border-pink-500 transition-colors h-full flex flex-col">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 text-xs font-semibold mb-4 w-fit">
                    Proyek Klien (Real Case)
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">
                    Kazi - Nail Beauty Bar
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed flex-grow mb-6">
                    Solusi website cerah dan energik untuk jaringan nail art dengan tantangan outlet locator di 15+ lokasi coffee shop se-Jawa. Menampilkan price list interaktif.
                  </p>
                  <div className="text-sm font-semibold text-pink-500 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Baca Studi Kasus <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">
              Proses Pembuatan (Estimasi 2–4 Minggu)
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {[
              { step: "1. Pengumpulan Materi", desc: "Anda mengirimkan foto salon, foto hasil perawatan, logo, daftar harga, dan info cabang." },
              { step: "2. Perancangan Desain", desc: "Kami mengajukan desain (mockup) dengan gaya estetika yang sesuai brand salon Anda." },
              { step: "3. Pengembangan Fitur", desc: "Tim engineer kami membangun fitur booking, katalog harga, dan memastikan website lolos audit performa Google." },
              { step: "4. Peluncuran", desc: "Website siap diakses publik. Kami melatih staf Anda cara menerima notifikasi booking." },
            ].map((item, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <div className="flex gap-4 p-5 bg-[var(--surface)] rounded-xl border border-[var(--line)]">
                  <div className="font-bold text-[var(--ink)] whitespace-nowrap">{item.step}</div>
                  <div className="hidden sm:block text-[var(--line)] w-px h-auto"></div>
                  <div className="text-[var(--ink-muted)] text-sm leading-relaxed">{item.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section Khusus Salon */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-10">
              Tanya Jawab Seputar Website Salon
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

      {/* Internal Links & CTA */}
      <section className="py-16 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <h3 className="text-2xl font-bold mb-6">Siap Mengubah Cara Pelanggan Booking Salon Anda?</h3>
            <a
              href={getWhatsAppLink(
                "Halo Ruvia Studios Surabaya, saya tertarik bikin website untuk klinik/salon kecantikan saya."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button className="h-14 px-8 text-base bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl shadow-lg">
                Tanya Konsultasi Sekarang
              </Button>
            </a>
            
            <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm text-[var(--ink-muted)]">
              <Link href="/jasa-pembuatan-website-surabaya" className="hover:text-[var(--accent)] underline underline-offset-4">Jasa Pembuatan Website Surabaya</Link>
              <span>|</span>
              <Link href="/layanan/sistem-manajemen-bisnis" className="hover:text-[var(--accent)] underline underline-offset-4">Sistem Manajemen Bisnis</Link>
              <span>|</span>
              <Link href="/portfolio" className="hover:text-[var(--accent)] underline underline-offset-4">Portofolio Kami</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
