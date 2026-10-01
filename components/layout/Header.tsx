"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

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
          isScrolled ? "pt-4 px-4 sm:px-8" : "py-0 px-0"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-300 w-full ${
            isScrolled
              ? "max-w-6xl bg-white/95 backdrop-blur-xl border border-black/10 rounded-full px-6 sm:px-8 py-3 shadow-2xl shadow-black/10 text-gray-900"
              : "max-w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 py-4 px-6 sm:px-8 text-gray-900"
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
              className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105"
              style={{ width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#4F46E5] transition-colors"
            >
              Beranda
            </Link>

            {/* Dropdown Layanan */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[#4F46E5] transition-colors py-2"
              >
                Layanan{" "}
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-max bg-[#0F172A] text-white p-7 rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/10 z-50">
                <div className="flex gap-10">
                  <div className="w-60">
                    <h4 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">Solusi Utama</h4>
                    <ul className="space-y-3.5 text-xs">
                      <li>
                        <Link
                          href="/jasa-pembuatan-website-surabaya"
                          className="block group/link"
                        >
                          <div className="font-bold mb-0.5 group-hover/link:text-indigo-400 transition-colors">Website Perusahaan</div>
                          <div className="text-[11px] text-slate-400 leading-relaxed">Company profile &amp; landing page.</div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sistem-manajemen-logistik-surabaya"
                          className="block group/link"
                        >
                          <div className="font-bold mb-0.5 group-hover/link:text-indigo-400 transition-colors">Sistem Bisnis Custom</div>
                          <div className="text-[11px] text-slate-400 leading-relaxed">ERP, POS, booking, &amp; CRM.</div>
                        </Link>
                      </li>
                      <li>
                        <a
                          href={getWhatsAppLink("Halo Ruvia Studios, saya ingin konsultasi API & Integrasi.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group/link"
                        >
                          <div className="font-bold mb-0.5 group-hover/link:text-indigo-400 transition-colors">API &amp; Integrasi</div>
                          <div className="text-[11px] text-slate-400 leading-relaxed">WhatsApp API &amp; Payment Gateway.</div>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-52">
                    <h4 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">Layanan Lokasi</h4>
                    <ul className="space-y-3.5 text-xs">
                      <li>
                        <Link
                          href="/jasa-pembuatan-website-pontianak"
                          className="block group/link"
                        >
                          <div className="font-bold mb-0.5 group-hover/link:text-indigo-400 transition-colors">Website Pontianak</div>
                          <div className="text-[11px] text-slate-400 leading-relaxed">Kantor Pontianak.</div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/jasa-pembuatan-website-surabaya"
                          className="block group/link"
                        >
                          <div className="font-bold mb-0.5 group-hover/link:text-indigo-400 transition-colors">Website Surabaya</div>
                          <div className="text-[11px] text-slate-400 leading-relaxed">Kantor Surabaya.</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-[#4F46E5] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/insight"
              className="text-gray-700 hover:text-[#4F46E5] transition-colors"
            >
              Insight
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#4F46E5] transition-colors"
            >
              Kontak
            </Link>
          </nav>

          {/* Right Action Button (Pill Button) */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink("Halo Ruvia Studios, saya ingin berdiskusi untuk memulai proyek.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 font-bold !text-white transition-all shadow-md hover:shadow-indigo-500/25 hover:scale-105 px-6 text-sm bg-[#4F46E5] hover:bg-[#4338CA] rounded-full"
            >
              Mulai Proyek
              <ArrowRight className="w-3.5 h-3.5" />
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
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0F172A] text-white p-7 shadow-2xl border-l border-white/10 flex flex-col justify-between z-50 overflow-y-auto">
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
                  className="block text-lg font-bold text-gray-100 hover:text-indigo-400 transition-colors"
                >
                  Beranda
                </Link>

                {/* Layanan Accordion */}
                <div>
                  <button
                    onClick={() => setIsLayananOpen(!isLayananOpen)}
                    className="flex items-center justify-between w-full text-lg font-bold text-gray-100 hover:text-indigo-400 transition-colors"
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
                      <Link
                        href="/jasa-pembuatan-website-surabaya"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-slate-300 hover:text-indigo-400"
                      >
                        Website Perusahaan
                      </Link>
                      <Link
                        href="/sistem-manajemen-logistik-surabaya"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-slate-300 hover:text-indigo-400"
                      >
                        Sistem Bisnis Custom
                      </Link>
                      <a
                        href={getWhatsAppLink("Halo Ruvia Studios, saya ingin konsultasi API & Integrasi.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-slate-300 hover:text-indigo-400"
                      >
                        API &amp; Integrasi
                      </a>
                    </div>
                  )}
                </div>

                <Link
                  href="/portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-100 hover:text-indigo-400 transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/insight"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-100 hover:text-indigo-400 transition-colors"
                >
                  Insight
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold text-gray-100 hover:text-indigo-400 transition-colors"
                >
                  Kontak
                </Link>
              </nav>
            </div>

            {/* Drawer Footer Action */}
            <div className="pt-6 border-t border-white/10 space-y-5">
              <a
                href={getWhatsAppLink("Halo Ruvia Studios, saya ingin berdiskusi untuk memulai proyek.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold rounded-full text-sm shadow-xl"
              >
                Mulai Proyek
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
