import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { site } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center border-b border-transparent bg-[var(--bg)]/80 px-5 backdrop-blur transition-all sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/ruvia-logo (1).svg"
            alt={site.name}
            width={120}
            height={32}
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold hover:text-[var(--accent-strong)] transition-colors">
            Beranda
          </Link>
          
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold hover:text-[var(--accent-strong)] transition-colors py-4">
              Layanan <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-max bg-[var(--ink)] text-white p-8 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/10 z-50">
              <div className="flex gap-12">
                <div className="w-64">
                  <h4 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-6">Solusi Utama</h4>
                  <ul className="space-y-6">
                    <li>
                      <a href={getWhatsAppLink("Halo Ruvia Studios, saya ingin konsultasi layanan Corporate Website untuk bisnis saya.")} target="_blank" rel="noopener noreferrer" className="block group/link">
                        <div className="font-bold mb-1 group-hover/link:text-[var(--accent-soft)] transition-colors">Corporate Website</div>
                        <div className="text-xs text-white/60 leading-relaxed">Jadikan wajah digital perusahaan Anda tampil profesional.</div>
                      </a>
                    </li>
                    <li>
                      <a href={getWhatsAppLink("Halo Ruvia Studios, saya ingin konsultasi layanan Sistem Manajemen Bisnis / POS untuk bisnis saya.")} target="_blank" rel="noopener noreferrer" className="block group/link">
                        <div className="font-bold mb-1 group-hover/link:text-[var(--accent-soft)] transition-colors">Sistem Manajemen Bisnis</div>
                        <div className="text-xs text-white/60 leading-relaxed">Otomatisasi operasional dan pantau performa bisnis.</div>
                      </a>
                    </li>
                    <li>
                      <a href={getWhatsAppLink("Halo Ruvia Studios, saya ingin konsultasi layanan API & Integrasi untuk sistem saya.")} target="_blank" rel="noopener noreferrer" className="block group/link">
                        <div className="font-bold mb-1 group-hover/link:text-[var(--accent-soft)] transition-colors">API & Integrasi</div>
                        <div className="text-xs text-white/60 leading-relaxed">Hubungkan aplikasi, servis, dan data dengan aman.</div>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="w-48">
                  <h4 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-6">Kebutuhan Digital</h4>
                  <ul className="space-y-6">
                    <li>
                      <a href={getWhatsAppLink("Halo Ruvia Studios, saya butuh bantuan Optimasi Performa / SEO untuk website saya.")} target="_blank" rel="noopener noreferrer" className="block group/link">
                        <div className="font-bold mb-1 group-hover/link:text-[var(--accent-soft)] transition-colors">Optimasi Performa</div>
                        <div className="text-xs text-white/60 leading-relaxed">Website cepat dan handal.</div>
                      </a>
                    </li>
                    <li>
                      <a href={getWhatsAppLink("Halo Ruvia Studios, saya butuh Konsultasi Gratis untuk kebutuhan digital bisnis saya.")} target="_blank" rel="noopener noreferrer" className="block group/link">
                        <div className="font-bold mb-1 group-hover/link:text-[var(--accent-soft)] transition-colors">Konsultasi Gratis</div>
                        <div className="text-xs text-white/60 leading-relaxed">Diskusikan kebutuhan Anda tanpa biaya.</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link href="/portfolio" className="text-sm font-semibold hover:text-[var(--accent-strong)] transition-colors">
            Portfolio
          </Link>
          <Link href="/insight" className="text-sm font-semibold hover:text-[var(--accent-strong)] transition-colors">
            Insight
          </Link>
          <Link href="/contact" className="text-sm font-semibold hover:text-[var(--accent-strong)] transition-colors">
            Kontak
          </Link>
          <div className="flex items-center gap-1 border-l border-[var(--line)] pl-6 ml-2">
            <button className="text-xs font-semibold text-[var(--accent-strong)] bg-[var(--accent-soft)] px-2 py-1 rounded-md transition-colors">
              ID
            </button>
            <span className="text-[var(--line)]">/</span>
            <button className="text-xs font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors px-2 py-1">
              EN
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-4">

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-[var(--radius-control)] bg-[var(--accent-strong)] px-4 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}
