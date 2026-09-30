import { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  CheckCircle2,
  ArrowRight,
  Truck,
  Box,
  MapPin,
  ClipboardList,
  ChevronDown,
} from "lucide-react";

const PAGE_URL = `${site.url}/sistem-manajemen-logistik-surabaya`;

export const metadata: Metadata = {
  title: "Sistem Manajemen Logistik & ERP di Surabaya | Ruvia Studios",
  description:
    "Pembuatan Custom ERP, sistem manajemen logistik (FCL/LCL), dan pelacakan kargo untuk perusahaan ekspedisi di Surabaya dan sekitarnya.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Sistem Manajemen Logistik & ERP di Surabaya | Ruvia Studios",
    description:
      "Pembuatan Custom ERP, sistem manajemen logistik (FCL/LCL), dan pelacakan kargo untuk perusahaan ekspedisi di Surabaya.",
    images: [
      {
        url: "/brand/ruvia-og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Sistem Manajemen Logistik Surabaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistem Manajemen Logistik & ERP di Surabaya | Ruvia Studios",
    description:
      "Pembuatan Custom ERP, sistem manajemen logistik (FCL/LCL), dan pelacakan kargo di Surabaya.",
    images: ["/brand/ruvia-og-cover.jpg"],
  },
};

const faqs = [
  {
    q: "Apakah Ruvia Studios berpengalaman dalam domain logistik laut (FCL/LCL)?",
    a: "Ya. Kami memiliki pemahaman mendalam tentang alur bisnis logistik, mulai dari penerimaan barang di gudang (tally), pembuatan Delivery Order (DO), manifestasi kontainer (FCL/LCL), jadwal kapal, hingga proses stripping di pelabuhan tujuan.",
  },
  {
    q: "Berapa lama waktu pembuatan Custom ERP Logistik?",
    a: "Tergantung skala dan cakupan fitur. Untuk sistem logistik tingkat dasar (Penerimaan Barang & Tracking Resi), bisa selesai dalam 4–6 minggu. Untuk ERP end-to-end yang mencakup penagihan (invoicing) dan manajemen aset armada, butuh waktu 3–6 bulan.",
  },
  {
    q: "Apakah sistem ini berbasis web (bisa dibuka di mana saja)?",
    a: "Betul. Kami membangun sistem berbasis cloud (Next.js) yang responsif. Tally checker di gudang bisa mengupdate status barang dari tablet, sementara manajemen di kantor pusat Surabaya bisa memantau dashboard operasional secara real-time dari laptop.",
  },
  {
    q: "Apakah bisa diintegrasikan dengan website perusahaan (Company Profile)?",
    a: "Sangat bisa. Kami dapat membuat portal khusus (misal: tracking.ekspedisianda.com) atau menyediakan widget pelacakan resi langsung di beranda website company profile Anda agar pelanggan bisa mandiri mengecek status kargo.",
  },
  {
    q: "Apakah keamanan data pelanggan ekspedisi terjamin?",
    a: "Kami menerapkan standar keamanan industri termasuk enkripsi database, koneksi SSL (HTTPS), serta arsitektur backend modern. Sistem juga dilengkapi role-based access control (RBAC), sehingga hak akses kasir, admin gudang, dan manajer dibedakan.",
  },
  {
    q: "Teknologi (Tech Stack) apa yang digunakan untuk membuat ERP Logistik ini?",
    a: "Sangat fleksibel dan menyesuaikan scope/budget Anda. Kami menguasai berbagai stack modern: Next.js atau Vue untuk *frontend* yang responsif, Node.js/NestJS, Python, maupun PHP untuk *backend*, hingga aplikasi berbasis Desktop jika diperlukan untuk operasional internal yang terisolasi.",
  },
];

export default function SistemManajemenLogistikPage() {
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
            name: "Sistem Logistik",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Pembuatan Sistem Manajemen Logistik & ERP Surabaya",
        provider: {
          "@type": "Organization",
          name: site.name,
        },
        description:
          "Pengembangan Custom ERP dan perangkat lunak operasional logistik (cargo tracking, FCL/LCL management, invoicing) untuk perusahaan ekspedisi di pelabuhan Surabaya.",
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
          <li className="font-semibold text-[var(--ink)]">Logistik & ERP</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 md:py-22 border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm font-semibold text-blue-600 mb-6">
              <Truck className="w-4 h-4" />
              Solusi Digital Khusus Perusahaan Ekspedisi
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-[clamp(2rem,4vw+1rem,3.6rem)] font-extrabold leading-tight text-[var(--ink)] mb-5 tracking-tight">
              Website Ekspedisi & <span className="text-[var(--accent)]">Custom ERP Logistik</span> di Surabaya
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--ink-muted)] mb-10 max-w-3xl mx-auto leading-relaxed">
              Dua solusi untuk perusahaan ekspedisi Anda: Tingkatkan omzet melalui <b>Website Marketing SEO</b> (rute & cek tarif) untuk menggaet pelanggan baru, atau modernisasi sistem operasional Anda melalui migrasi ke <b>Custom ERP Logistik</b> yang modern dan anti-lemot.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink(
                  "Halo Ruvia Studios, perusahaan saya di Surabaya bergerak di bidang ekspedisi/logistik. Saya ingin diskusi mengenai pembuatan website marketing / sistem operasional ERP."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-14 px-8 text-base bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-xl inline-flex items-center gap-2 shadow-xl">
                  Konsultasi Kebutuhan IT via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 Solusi Utama */}
      <section className="py-20 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-[var(--ink)] mb-4">
              Dua Kendala Utama Ekspedisi & Solusinya
            </h2>
            <p className="text-center text-[var(--ink-muted)] mb-12 max-w-2xl mx-auto">
              Perusahaan ekspedisi di Surabaya biasanya menghadapi masalah di dua sisi: sisi pencarian pelanggan (marketing) dan sisi efisiensi internal (operasional).
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--line)] shadow-sm h-full">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-emerald-600 w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Sisi Marketing: Website Sulit Ditemukan</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed mb-6">
                  Calon pengirim barang mencari "Ekspedisi Surabaya Makassar termurah" di Google, tapi yang muncul malah website kompetitor. Anda kehilangan prospek berharga setiap hari.
                </p>
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                  <span className="font-bold text-emerald-700 block mb-1">Solusi: Website Company Profile SEO</span>
                  <span className="text-sm text-emerald-800">Website modern dengan fitur pencarian rute, tabel <i>price list</i> yang dinamis, portofolio armada, dan optimasi SEO lokal agar mendominasi halaman pertama Google.</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[var(--surface)] p-8 rounded-3xl border border-[var(--line)] shadow-sm h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Box className="text-blue-600 w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Sisi Operasional: Sistem Lama Lemot & Vendor Pasif</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed mb-6">
                  Perusahaan Anda sudah punya aplikasi ERP lama dari vendor, tapi servernya lambat, fitur kaku, dan ketika minta perbaikan/pengembangan butuh waktu sangat lama.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                  <span className="font-bold text-blue-700 block mb-1">Solusi: Migrasi ke Custom ERP Modern</span>
                  <span className="text-sm text-blue-800">Kami merancang ulang dan melakukan migrasi dari sistem lama Anda ke arsitektur perangkat lunak yang modern dan super cepat. Tech stack yang kami gunakan fleksibel (Next.js, Python, PHP, NestJS, Vue, hingga Desktop) menyesuaikan kebutuhan *budget* dan skalabilitas klien.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Package & Pricing */}
      <section className="py-20 bg-[var(--bg)] border-y border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">
              Layanan Sesuai Kebutuhan Anda
            </h2>
            <p className="text-[var(--ink-muted)] mb-12 max-w-xl mx-auto">
              Apakah Anda butuh mesin pencari pelanggan (Website) atau mesin efisiensi operasional (ERP)?
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-[var(--surface)] p-8 md:p-10 rounded-3xl border border-[var(--line)] shadow-sm relative text-left">
                <h3 className="text-2xl font-extrabold mb-2">Website Logistik & SEO</h3>
                <div className="text-3xl font-black text-[var(--accent-strong)] mb-1">
                  Mulai Rp1.000.000
                </div>
                <p className="text-sm text-[var(--ink-muted)] mb-6 mt-2">
                  Cocok untuk memperkuat *branding* dan mendatangkan calon pengirim barang dari internet.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Company Profile Ekspedisi Modern</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Tabel Price List Rute & Tujuan</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Optimasi SEO Spesifik Rute (Ex: Surabaya-Makassar)</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Widget Tombol WhatsApp Admin CS</span>
                  </li>
                </ul>
                <a
                  href={getWhatsAppLink(
                    "Halo Ruvia Studios Surabaya, saya tertarik membuat Website Marketing & SEO untuk ekspedisi saya."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-auto"
                >
                  <Button variant="secondary" className="w-full h-12 font-bold rounded-xl border-2 border-[var(--line)]">
                    Pesan Website Ekspedisi
                  </Button>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[var(--surface)] p-8 md:p-10 rounded-3xl border-2 border-[var(--accent)] shadow-lg relative text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--accent)] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Sistem Operasional
                </div>
                <h3 className="text-2xl font-extrabold mb-2">Custom Logistik ERP</h3>
                <div className="text-2xl font-black text-[var(--ink)] mb-1">
                  Sistem Tailor-Made / Migrasi
                </div>
                <p className="text-sm text-[var(--ink-muted)] mb-6 mt-4">
                  Solusi pengganti sistem vendor lama yang kaku dan lemot.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <span>Migrasi dari Software/Vendor Lama</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <span>Tally Checker & Freight Tracking Online</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <span>Manajemen FCL/LCL, Rute, Kapal & DO</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <span>Otomatisasi Invoice & Penagihan</span>
                  </li>
                </ul>
                <a
                  href={getWhatsAppLink(
                    "Halo Ruvia Studios Surabaya, saya tertarik modernisasi/migrasi sistem ERP untuk ekspedisi saya. Bisa kita jadwalkan meeting?"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-auto"
                >
                  <Button className="w-full h-12 bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-xl">
                    Diskusi Migrasi ERP
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
              Konsep Sistem Skala Enterprise (Demo)
            </h2>
            <p className="text-center text-[var(--ink-muted)] mb-12 max-w-2xl mx-auto">
              Berbekal pemahaman domain pengetahuan industri (Domain Knowledge) seputar *supply chain*, kami mendesain struktur database dan arsitektur kokoh untuk menangani ribuan tonase per hari.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <Link href="/portfolio/custom-erp" className="group block h-full">
                <div className="bg-[var(--surface)] p-6 rounded-3xl border border-[var(--line)] hover:border-blue-500 transition-colors h-full flex flex-col">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/30 text-xs font-semibold mb-4 w-fit">
                    Demo Konsep ERP
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                    Custom ERP & Supply Chain
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed flex-grow mb-6">
                    Sistem manajemen sumber daya (ERP) custom dengan penekanan pada modularitas. Mengelola pencatatan armada kargo laut, manifes muatan kontainer (FCL/LCL), hingga manajemen jadwal dan destinasi rute.
                  </p>
                  <div className="text-sm font-semibold text-blue-500 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Lihat Demo ERP <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.2}>
              <Link href="/portfolio/logistic-freight-tracking" className="group block h-full">
                <div className="bg-[var(--surface)] p-6 rounded-3xl border border-[var(--line)] hover:border-blue-500 transition-colors h-full flex flex-col">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/30 text-xs font-semibold mb-4 w-fit">
                    Demo Cargo Tracking
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                    Logistics & Freight Tracking
                  </h3>
                  <p className="text-sm text-[var(--ink-muted)] leading-relaxed flex-grow mb-6">
                    Platform khusus untuk perusahaan logistik dan ekspedisi. Memungkinkan admin mengelola AWB dan pelanggan melacak status pengiriman armada truk hingga kapal laut lintas pulau (Surabaya, Makassar, Pontianak) secara real-time.
                  </p>
                  <div className="text-sm font-semibold text-blue-500 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Lihat Demo Tracking <ArrowRight className="w-4 h-4" />
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
              Bagaimana Kami Membangun ERP Anda?
            </h2>
            <p className="text-[var(--ink-muted)] mb-10 max-w-2xl">
              Proses *software engineering* untuk sistem logistik tidak bisa instan. Kita harus memastikan alur data persis sama dengan kondisi nyata lapangan di gudang.
            </p>
          </Reveal>
          <div className="mt-8 space-y-6">
            {[
              { step: "1. Requirement Gathering (Observasi)", desc: "Tim engineer kami akan mewawancarai admin operasional, bagian gudang, dan tim finance Anda (bisa meeting di Surabaya atau remote) untuk membedah SOP lama." },
              { step: "2. Database Design & Mockup", desc: "Kami merancang *Data Flow* dan wireframe antarmuka. Anda akan mereview apakah layar input data sudah lengkap (seperti field kubikasi, tonase, penerima, dsb)." },
              { step: "3. Modular Development", desc: "Pembangunan sistem secara bertahap (Agile). Misalnya modul Tracking Resi diselesaikan dulu agar langsung bisa dipakai, kemudian disusul modul Invoice." },
              { step: "4. Deployment & Training", desc: "Sistem diluncurkan ke server Cloud. Kami mendampingi masa transisi staf Anda menggunakan sistem baru selama fase awal." },
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

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-10">
              Tanya Jawab (Sistem Logistik)
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
            <h3 className="text-2xl font-bold mb-6">Hentikan Kekacauan Data Manual Sekarang</h3>
            <a
              href={getWhatsAppLink(
                "Halo Ruvia Studios, perusahaan logistik saya butuh sistem ERP. Bisa kita diskusikan?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button className="h-14 px-8 text-base bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg">
                Jadwalkan Konsultasi IT Gratis
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
