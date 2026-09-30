"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

import { site } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "pt-4 px-4 sm:px-8" : "py-5 px-5 sm:px-8 bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "max-w-6xl bg-white/95 backdrop-blur-xl border border-black/10 rounded-full px-8 py-3 shadow-2xl shadow-black/10 text-gray-900"
              : "max-w-6xl w-full bg-[var(--bg)]/80 backdrop-blur-md border-b border-transparent py-1 text-[var(--ink)]"
          }`}
        >
          {/* Brand Logo (Far Left) */}
          <Link href="/" className="flex items-center gap-2 group shrink-0 pr-6">
            <Image
              src="/brand/ruvia-logo.svg"
              alt={site.name}
              width={128}
              height={34}
              priority
              className="h-8 w-auto transition-transform group-hover:scale-105"
              style={{ width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation (Center Right, Spaced Out) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link
              href="/"
              className="text-gray-700 hover:text-[var(--accent-strong)] transition-colors"
            >
              Beranda
            </Link>

            {/* Dropdown Layanan */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[var(--accent-strong)] transition-colors py-2"
              >
                Layanan{" "}
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-max bg-[var(--ink)] text-white p-8 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/10 z-50">
                <div className="flex gap-12">
                  <div className="w-64">
                    <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-5">Solusi Utama</h4>
                    <ul className="space-y-4 text-xs">
                      <li>
                        <a
                          href={getWhatsAppLink("Halo Ruvia Studios, saya ingin konsultasi layanan Corporate Website untuk bisnis saya.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group/link"
                        >
                          <div className="font-bold mb-1 group-hover/link:text-[var(--accent-soft)] transition-colors">Corporate Website</div>
                          <div className="text-[11px] text-white/60 leading-relaxed">Jadikan wajah digital perusahaan Anda tampil profesional.</div>
                        </a>
                      </li>
                      <li>
                        <a
                          href={getWhatsAppLink("Halo Ruvia Studios, saya ingin konsultasi layanan Sistem Manajemen Bisnis / POS untuk bisnis saya.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group/link"
                        >
                          <div className="font-bold mb-1 group-hover/link:text-[var(--accent-soft)] transition-colors">Sistem Manajemen Bisnis</div>
                          <div className="text-[11px] text-white/60 leading-relaxed">Otomatisasi operasional dan pantau performa bisnis.</div>
                        </a>
                      </li>
                      <li>
                        <a
                          href={getWhatsAppLink("Halo Ruvia Studios, saya ingin konsultasi layanan API & Integrasi untuk sistem saya.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group/link"
                        >
                          <div className="font-bold mb-1 group-hover/link:text-[var(--accent-soft)] transition-colors">API & Integrasi</div>
                          <div className="text-[11px] text-white/60 leading-relaxed">Hubungkan aplikasi, servis, dan data dengan aman.</div>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-56">
                    <h4 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-5">Layanan Lokasi</h4>
                    <ul className="space-y-4 text-xs">
                      <li>
                        <Link
                          href="/jasa-pembuatan-website-pontianak"
                          className="block group/link"
                        >
                          <div className="font-bold mb-1 group-hover/link:text-[var(--accent-soft)] transition-colors">Website Pontianak</div>
                          <div className="text-[11px] text-white/60 leading-relaxed">Spesialis web & sistem di Pontianak.</div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/jasa-pembuatan-website-surabaya"
                          className="block group/link"
                        >
                          <div className="font-bold mb-1 group-hover/link:text-[var(--accent-soft)] transition-colors">Website Surabaya</div>
                          <div className="text-[11px] text-white/60 leading-relaxed">Jasa pembuatan website Surabaya.</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-[var(--accent-strong)] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/insight"
              className="text-gray-700 hover:text-[var(--accent-strong)] transition-colors"
            >
              Insight
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[var(--accent-strong)] transition-colors"
            >
              Kontak
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-4 pl-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center font-bold text-white transition-all shadow-md hover:scale-105 px-6 text-sm bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] rounded-full"
            >
              Start a Project
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="md:hidden p-2 rounded-full text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[var(--ink)] text-white p-7 shadow-2xl border-l border-white/10 flex flex-col justify-between z-50 overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <Image
                  src="/brand/ruvia-logo-light.svg"
                  alt={site.name}
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                  style={{ width: "auto" }}
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white rounded-full bg-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-6">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-100 hover:text-[var(--accent-soft)] transition-colors"
                >
                  Beranda
                </Link>

                {/* Layanan Accordion */}
                <div>
                  <button
                    onClick={() => setIsLayananOpen(!isLayananOpen)}
                    className="flex items-center justify-between w-full text-lg font-bold text-gray-100 hover:text-[var(--accent-soft)] transition-colors"
                  >
                    <span>Layanan</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isLayananOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isLayananOpen && (
                    <div className="pl-4 mt-4 space-y-3.5 border-l border-white/10 text-sm">
                      <a
                        href={getWhatsAppLink("Halo Ruvia Studios, saya ingin konsultasi layanan Corporate Website.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-gray-300 hover:text-[var(--accent-soft)]"
                      >
                        Corporate Website
                      </a>
                      <a
                        href={getWhatsAppLink("Halo Ruvia Studios, saya ingin konsultasi layanan Sistem Manajemen Bisnis / POS.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-gray-300 hover:text-[var(--accent-soft)]"
                      >
                        Sistem Manajemen Bisnis (ERP/POS)
                      </a>
                      <a
                        href={getWhatsAppLink("Halo Ruvia Studios, saya ingin konsultasi layanan API & Integrasi.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-gray-300 hover:text-[var(--accent-soft)]"
                      >
                        API & Integrasi
                      </a>
                      <a
                        href={getWhatsAppLink("Halo Ruvia Studios, saya butuh Konsultasi Gratis.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-gray-300 hover:text-[var(--accent-soft)]"
                      >
                        Konsultasi Gratis
                      </a>
                    </div>
                  )}
                </div>

                <Link
                  href="/portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-100 hover:text-[var(--accent-soft)] transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/insight"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-100 hover:text-[var(--accent-soft)] transition-colors"
                >
                  Insight
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-100 hover:text-[var(--accent-soft)] transition-colors"
                >
                  Kontak
                </Link>
              </nav>
            </div>

            {/* Drawer Footer Action */}
            <div className="pt-6 border-t border-white/10 space-y-5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3.5 bg-[var(--accent)] hover:bg-[#6350e6] text-white font-bold rounded-full text-sm shadow-xl"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
