import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--ink)] text-white py-12 px-5 sm:px-8 mt-auto">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Image
              src="/brand/ruvia-logo-light.svg"
              alt={site.name}
              width={120}
              height={32}
              className="h-8 w-auto mb-4"
            />
            <p className="text-[var(--ink-muted)] text-sm max-w-xs leading-relaxed">
              {site.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-[var(--ink-muted)]">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-[var(--accent)] transition-colors">Home</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[var(--accent)] transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-[var(--accent)] transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-[var(--accent)] transition-colors">Privacy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-[var(--ink-muted)]">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--accent)] transition-colors">
                  WhatsApp: {site.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-sm hover:text-[var(--accent)] transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="text-sm text-gray-400 mt-4">
                Based in Pontianak & Surabaya, Indonesia
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--ink-muted)]/20 text-sm text-[var(--ink-muted)] text-center md:text-left">
          © {currentYear} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
