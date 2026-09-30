import Metadata from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, MapPin } from "lucide-react";

export const metadata = {
  title: "Jasa Pembuatan Website Surabaya | Ruvia Studios",
  description:
    "Jasa pembuatan website profesional, landing page SEO, & sistem bisnis custom di Surabaya, Jawa Timur. Ditangani langsung oleh Software Engineer.",
  keywords: [
    "jasa pembuatan website surabaya",
    "web developer surabaya",
    "website bisnis surabaya",
    "jasa website surabaya",
    "company profile surabaya",
    "software house surabaya",
  ],
  alternates: {
    canonical: `${site.url}/jasa-pembuatan-website-surabaya`,
  },
};

export default function WebsiteSurabayaPage() {
  return (
    <main className="bg-[var(--bg)] min-h-screen pt-24 pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-[var(--line)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-sm font-semibold text-emerald-600 mb-6">
              <MapPin className="w-4 h-4" />
              Layanan Web Development Berbasis di Surabaya
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-[clamp(2.2rem,4vw+1rem,3.8rem)] font-extrabold leading-tight text-[var(--ink)] mb-6 tracking-tight">
              Jasa Pembuatan Website & Sistem di{" "}
              <span className="text-[var(--accent)]">Surabaya</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--ink-muted)] mb-10 max-w-3xl mx-auto leading-relaxed">
              Solusi rekayasa web & platform digital untuk bisnis, studio, dan perusahaan di Surabaya & Jawa Timur. Cepat, aman, dan dirancang untuk konversi konkrit.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppLink(
                  "Halo Ruvia Studios Surabaya, saya ingin konsultasi pembuatan website untuk bisnis saya."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-14 px-8 text-lg bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-xl inline-flex items-center gap-2 shadow-xl">
                  Konsultasi Gratis via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link href="/portfolio">
                <Button
                  variant="secondary"
                  className="h-14 px-8 text-lg border-2 border-[var(--line)]"
                >
                  Lihat Portofolio Proyek
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust & Advantages */}
      <section className="py-20 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold text-center text-[var(--ink)] mb-12">
              Keunggulan Layanan Ruvia Studios Surabaya
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <Zap className="w-10 h-10 text-[var(--accent)] mb-6" />
                <h3 className="text-xl font-bold mb-3">Arsitektur Performa Tinggi</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Menggunakan teknologi standar industri (Next.js & TypeScript) untuk menjamin kecepatan akses optimal di desktop maupun ponsel.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <ShieldCheck className="w-10 h-10 text-[var(--accent)] mb-6" />
                <h3 className="text-xl font-bold mb-3">Target SEO Surabaya & Jawa Timur</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Optimasi kata kunci pencarian lokal dan Schema Structured Data lengkap agar calon pembeli di Surabaya menemukan brand Anda lebih mudah.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-[var(--accent)] mb-6" />
                <h3 className="text-xl font-bold mb-3">Scope & Garansi Jelas</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  Kesepakatan fitur dan estimasi disetujui di awal. Bebas rasa khawatir dengan jaminan dukungan teknis pasca peluncuran.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Package Offer */}
      <section className="py-20 bg-[var(--bg)]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="bg-[var(--surface)] p-10 md:p-14 rounded-3xl border border-[var(--line)] shadow-lg">
              <h2 className="text-3xl font-extrabold mb-4">Paket Website Starter Surabaya</h2>
              <div className="text-4xl font-black text-[var(--accent-strong)] mb-6">
                Rp1.000.000
              </div>
              <p className="text-lg text-[var(--ink-muted)] mb-8 max-w-xl mx-auto">
                Tampil meyakinkan dan terima pesan calon pelanggan langsung di WhatsApp bisnis Anda.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-10">
                {[
                  "Website 1 Halaman (Landing Page)",
                  "Domain & Hosting (Termasuk)",
                  "Keamanan SSL HTTPS Gratis",
                  "Integrasi WhatsApp CTA Instan",
                  "Peta Google Maps Terintegrasi",
                  "Desain Responsif untuk HP & Laptop",
                  "Optimasi SEO On-Page Dasar",
                  "Pengerjaan Cepat 1–2 Minggu",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppLink(
                  "Halo Ruvia Studios Surabaya, saya tertarik dengan Paket Website Starter Rp1.000.000."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-14 px-10 text-lg bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-xl shadow-lg">
                  Pesan Paket Starter Sekarang
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
