import { site } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Ruvia Studios for your digital solutions.",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--ink)] min-h-screen pt-24 pb-32 text-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <h1 className="text-[clamp(3rem,6vw+1rem,5rem)] font-bold tracking-tight mb-8 max-w-3xl leading-tight">
            Hubungi tim developer kami.
          </h1>
          <p className="text-xl text-[var(--line)] mb-20 max-w-2xl leading-relaxed">
            Punya ide produk digital, butuh landing page, atau ingin optimasi sistem bisnis Anda? Diskusikan langsung dengan tim kami tanpa perantara.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-24">
          <Reveal delay={0.1} className="w-full">
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group border-b border-white/20 pb-8 hover:border-[var(--accent)] transition-colors"
            >
              <div className="text-sm font-bold text-white/50 tracking-widest uppercase mb-4">WhatsApp</div>
              <div className="flex justify-between items-center">
                <div className="text-3xl md:text-4xl font-bold group-hover:text-[var(--accent-soft)] transition-colors">
                  {site.whatsapp.display}
                </div>
                <ArrowUpRight className="w-8 h-8 text-white/30 group-hover:text-[var(--accent)] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <div className="pb-8 h-full flex flex-col justify-end">
              <div className="text-sm font-bold text-white/50 tracking-widest uppercase mb-4">Pendekatan Kami</div>
              <p className="text-[var(--line)] leading-relaxed text-lg">
                Kami bekerja secara langsung dengan pemilik bisnis dan tim teknis. Tanpa perantara akun eksekutif, pesan Anda langsung ditangani oleh engineer yang membangun produk.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.3} className="w-full">
            <a 
              href={`mailto:${site.email}`}
              className="block group border-b border-white/20 pb-8 hover:border-[var(--accent)] transition-colors"
            >
              <div className="text-sm font-bold text-white/50 tracking-widest uppercase mb-4">Email Utama</div>
              <div className="flex justify-between items-center">
                <div className="text-3xl md:text-4xl font-bold group-hover:text-[var(--accent-soft)] transition-colors break-all">
                  {site.email}
                </div>
                <ArrowUpRight className="w-8 h-8 text-white/30 group-hover:text-[var(--accent)] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="border-t border-white/10 pt-16">
            <h2 className="text-sm font-bold text-white/50 tracking-widest uppercase mb-10">Lokasi Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {site.locations.map((loc, idx) => {
                const query = encodeURIComponent((site.showStreetAddress ? loc.street + ", " : "") + loc.city);
                return (
                  <div key={idx} className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-4">{loc.city}</h3>
                    <p className="text-[var(--line)] mb-6 text-lg">
                      {site.showStreetAddress ? loc.street : ""}<br />
                      {loc.city}, {loc.region}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-[var(--accent-soft)] hover:text-white transition-colors uppercase tracking-wider"
                    >
                      Lihat di Maps <ArrowUpRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
