import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F19] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Subtitle (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/brand/ruvia-logo-light.svg"
                alt={site.name}
                width={130}
                height={34}
                className="h-8 w-auto"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Digital solutions for growing businesses.
            </p>
          </div>

          {/* Col 2: Navigasi (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/jasa-pembuatan-website-surabaya" className="text-slate-300 hover:text-white transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/insight" className="text-slate-300 hover:text-white transition-colors">
                  Insight
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Kontak (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  WhatsApp: +62 896-3387-3532
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@ruviastudios.com"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  hello@ruviastudios.com
                </a>
              </li>
              <li className="text-slate-500 text-xs pt-2">
                Based in Pontianak &amp; Surabaya, Indonesia
              </li>
            </ul>
          </div>

          {/* Col 4: Ikuti Kami (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
              Ikuti Kami
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                >
                  Instagram <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
                >
                  LinkedIn <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {currentYear} Ruvia Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
