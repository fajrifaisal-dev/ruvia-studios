import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Monitor, Settings, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioScrollMosaic } from "@/components/ui/PortfolioScrollMosaic";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--ink)] min-h-[95svh] flex flex-col justify-center pt-24 lg:pt-28">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10 w-full pb-14 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-12 items-center">

            {/* LEFT: Headline + CTA */}
            <div className="flex flex-col items-start">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-white/60 mb-8 tracking-widest uppercase w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open for Projects · Fast Response
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-[clamp(2.4rem,3.8vw+1rem,4.5rem)] font-black leading-[0.93] tracking-[-0.03em] text-white mb-6">
                  Solusi website<br />&amp; sistem digital<br />
                  <span className="text-[var(--accent)] italic">untuk perusahaan.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-[15px] md:text-base text-white/50 mb-8 leading-relaxed font-medium max-w-[480px]">
                  Kami membangun website modern, sistem manajemen bisnis, dan aplikasi custom yang menopang pertumbuhan perusahaan Anda — dari Pontianak &amp; Surabaya.
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
                  <a href={getWhatsAppLink("Halo Ruvia Studios, saya mau berkonsultasi mengenai pembuatan website/sistem untuk bisnis saya.")} target="_blank" rel="noopener noreferrer">
                    <button className="h-12 px-7 text-sm bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-lg inline-flex items-center gap-2 shadow-xl shadow-[var(--accent)]/20 hover:shadow-[var(--accent)]/40 hover:scale-105 transition-all duration-200">
                      Konsultasi Gratis
                    </button>
                  </a>
                  <a href="/portfolio">
                    <button className="h-12 px-7 text-sm bg-transparent hover:bg-white/5 text-white/70 hover:text-white font-semibold rounded-lg inline-flex items-center gap-2 border border-white/15 hover:border-white/30 transition-all duration-200">
                      Lihat Studi Kasus
                    </button>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <p className="text-xs text-white/30 font-medium">
                  ★ Untuk UMKM, startup, retail, hospitality, dan perusahaan Indonesia
                </p>
              </Reveal>
            </div>

            {/* RIGHT: Portfolio Scroll Mosaic */}
            <Reveal delay={0.18}>
              <PortfolioScrollMosaic />
            </Reveal>

          </div>
        </div>
      </section>


      {/* Services Marquee (Oketa Style) */}
      <div className="w-full overflow-hidden bg-[var(--surface-alt)] border-y border-[var(--line)] py-4 flex whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] flex items-center gap-8">
          {[...Array(2)].fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-lg font-bold text-[var(--ink)]">Website Profesional</span>
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
              <span className="text-lg font-bold text-[var(--ink)]">Sistem Bisnis Custom</span>
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
              <span className="text-lg font-bold text-[var(--ink)]">Integrasi API</span>
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
              <span className="text-lg font-bold text-[var(--ink)]">Landing Page SEO</span>
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Ruvia Section (Oketa "Kenapa Kami" Style) */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mb-16 md:w-2/3">
              <h2 className="text-[clamp(2rem,3vw+1rem,3rem)] font-bold leading-tight text-[var(--ink)] mb-4 tracking-tight">Kenapa Ruvia?</h2>
              <p className="text-xl text-[var(--ink-muted)] leading-relaxed">
                Dirancang agar calon pelanggan Anda lebih cepat paham, percaya terhadap merek Anda, dan berani menghubungi bisnis Anda.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-[var(--surface)] p-10 rounded-[24px] border border-[var(--line)] shadow-sm h-full group hover:border-[var(--accent)]/50 transition-colors">
                <div className="w-14 h-14 bg-[var(--accent-soft)] rounded-2xl flex items-center justify-center text-[var(--accent)] mb-8 group-hover:scale-110 transition-transform">
                  <Monitor className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Scope yang Jelas</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed text-lg">
                  Anda tahu persis apa yang akan dibuat sebelum pengembangan dimulai. Tidak ada kejutan tersembunyi atau ekspektasi yang meleset.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bg-[var(--surface)] p-10 rounded-[24px] border border-[var(--line)] shadow-sm h-full group hover:border-[var(--accent)]/50 transition-colors">
                <div className="w-14 h-14 bg-[var(--accent-soft)] rounded-2xl flex items-center justify-center text-[var(--accent)] mb-8 group-hover:scale-110 transition-transform">
                  <Settings className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Solusi Praktis</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed text-lg">
                  Kami fokus menyelesaikan masalah bisnis nyata, bukan menambah kerumitan yang tidak perlu. Sistem yang benar-benar bekerja untuk Anda.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-[var(--surface)] p-10 rounded-[24px] border border-[var(--line)] shadow-sm h-full group hover:border-[var(--accent)]/50 transition-colors">
                <div className="w-14 h-14 bg-[var(--accent-soft)] rounded-2xl flex items-center justify-center text-[var(--accent)] mb-8 group-hover:scale-110 transition-transform">
                  <Plus className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Siap Berkembang</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed text-lg">
                  Mulai dari yang kecil dan kembangkan sistem digital Anda seiring pertumbuhan bisnis. Cepat, aman, dan siap untuk scale.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-[var(--surface)] p-10 rounded-[24px] border border-[var(--line)] shadow-sm h-full group hover:border-[var(--accent)]/50 transition-colors">
                <div className="w-14 h-14 bg-[var(--accent-soft)] rounded-2xl flex items-center justify-center text-[var(--accent)] mb-8 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Serah Terima yang Andal</h3>
                <p className="text-[var(--ink-muted)] leading-relaxed text-lg">
                  Website dan sistem Anda harus tetap mudah dipahami dan dikelola jauh setelah proses peluncuran selesai.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee (Honest tech stack) */}
      <div className="w-full overflow-hidden bg-[var(--ink)] py-12 flex whitespace-nowrap border-y border-[var(--ink-muted)]/20">
        <div className="animate-[marquee_25s_linear_infinite_reverse] flex items-center gap-16 opacity-80 hover:opacity-100 transition-opacity">
          {[...Array(4)].fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-10 w-auto invert opacity-70 hover:opacity-100 transition-all duration-300" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Our Approach Section */}
      <section className="py-24 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-[clamp(2rem,3vw+1rem,3rem)] font-bold leading-tight text-[var(--ink)] mb-4 tracking-tight">Pendekatan Kami</h2>
              <p className="text-lg text-[var(--ink-muted)] leading-relaxed max-w-2xl mx-auto">
                Dari riset kebutuhan bisnis hingga website atau sistem digital yang siap pakai.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Pahami (Understand)", desc: "Memahami tujuan bisnis, target audiens, dan tantangan yang ingin Anda selesaikan." },
              { num: "02", title: "Perencanaan (Plan)", desc: "Menentukan solusi terbaik, alur informasi, dan menetapkan scope kerja yang jelas." },
              { num: "03", title: "Pengembangan (Build)", desc: "Membangun sistem dengan cepat, responsif, aman, dan berorientasi pada kemudahan pengguna." },
              { num: "04", title: "Peluncuran (Launch)", desc: "Deploy ke domain resmi, optimasi SEO dasar, dan serah terima penggunaan lengkap." }
            ].map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.1}>
                <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm relative overflow-hidden group h-full">
                  <div className="text-6xl font-black text-[var(--bg)] absolute -top-2 -right-4 group-hover:scale-110 group-hover:text-[var(--accent-soft)] transition-all duration-500 z-0">{step.num}</div>
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-[var(--accent-strong)] mb-2 uppercase tracking-widest">Tahap {step.num}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-[var(--ink-muted)] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Transparent Pricing) */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <h2 className="text-[clamp(2rem,3vw+1rem,3rem)] font-bold leading-tight text-[var(--ink)] mb-4 tracking-tight">Harga & Paket Transparan</h2>
              <p className="text-lg text-[var(--ink-muted)]">
                Scope jelas, estimasi tepat, dan biaya disepakati di awal sebelum pengerjaan dimulai.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal delay={0.1}>
              <div className="bg-[var(--surface)] rounded-3xl border border-[var(--line)] p-10 shadow-sm flex flex-col h-full hover:border-[var(--ink-muted)] transition-colors">
                <h3 className="text-3xl font-bold mb-2">Website Starter</h3>
                <p className="text-[var(--ink-muted)] mb-8 text-lg">
                  Solusi cepat & praktis untuk bisnis yang baru mulai tampil profesional online.
                </p>
                <div className="text-4xl font-black text-[var(--ink)] mb-8">Rp1.000.000</div>
                <ul className="space-y-4 mb-10 flex-grow text-lg">
                  {[
                    "Website 1 Halaman (Landing Page)",
                    "Domain & Hosting sudah termasuk",
                    "SSL (HTTPS) Keamanan Gratis",
                    "Tombol & Integrasi WhatsApp CTA",
                    "Google Maps & Form Kontak",
                    "Desain Mobile Friendly & Cepat",
                    "Optimasi SEO Dasar On-Page"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--ink)] font-medium">
                      <CheckCircle2 className="w-6 h-6 text-[var(--success)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={getWhatsAppLink("Halo Ruvia Studios, saya tertarik dengan Website Starter Rp1.000.000 untuk bisnis saya.")} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="secondary" className="w-full h-14 text-lg border-2 border-[var(--line)]">Pilih Paket Starter</Button>
                </a>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bg-[var(--ink)] text-white rounded-3xl p-10 shadow-xl flex flex-col relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 bg-[var(--accent)] text-white text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-bl-xl">
                  Rekomendasi
                </div>
                <h3 className="text-3xl font-bold mb-2">Sistem & Web Custom</h3>
                <p className="text-[var(--line)] mb-8 text-lg">
                  Butuh lebih dari sekadar company profile? Kami bangun sistem bisnis & aplikasi custom.
                </p>
                <div className="text-4xl font-black text-white mb-8">Custom Scope</div>
                <ul className="space-y-4 mb-10 flex-grow text-lg">
                  {[
                    "Website multi-halaman & Dashboard custom",
                    "Sistem CRM, Kasir POS & Booking",
                    "Aplikasi web manajemen bisnis",
                    "Modul ERP & Inventaris Gudang",
                    "Integrasi API & Payment Gateway",
                    "Dukungan teknis & Maintenance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white font-medium">
                      <CheckCircle2 className="w-6 h-6 text-[var(--accent-soft)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={getWhatsAppLink("Halo Ruvia Studios, saya ingin berkonsultasi mengenai pembuatan sistem / web custom untuk bisnis saya.")} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full h-14 text-lg bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white border-0">Diskusi Proyek Custom</Button>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[var(--surface-alt)]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-[clamp(2rem,3vw+1rem,3rem)] font-bold leading-tight text-[var(--ink)] mb-4 tracking-tight">Pertanyaan yang Sering Diajukan</h2>
              <p className="text-lg text-[var(--ink-muted)]">Hal-hal penting yang perlu diketahui sebelum memulai proyek bersama Ruvia Studios.</p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {[
              { q: "Berapa biaya pembuatan website?", a: "Mulai dari Rp1.000.000 untuk Paket Starter. Proyek custom seperti dashboard, sistem manajemen bisnis, katalog, atau platform web custom dihitung berdasarkan scope." },
              { q: "Berapa lama proses pengembangannya?", a: "Website standar biasanya membutuhkan 1–2 minggu. Sistem bisnis custom dapat memakan waktu 1 hingga 3 bulan tergantung kompleksitas dan jumlah fitur." },
              { q: "Di mana lokasi Ruvia Studios?", a: "Kami berkantor di Pontianak dan Surabaya, Indonesia. Namun, kami melayani klien dari seluruh Indonesia maupun mancanegara." },
              { q: "Apakah ada layanan maintenance setelah peluncuran?", a: "Ya, kami memastikan serah terima yang andal. Kami menyediakan masa garansi dan menawarkan kontrak maintenance berkelanjutan untuk solusi custom." }
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <details className="bg-[var(--surface)] border border-[var(--line)] rounded-xl group overflow-hidden cursor-pointer shadow-sm">
                  <summary className="font-bold text-lg p-6 flex justify-between items-center outline-none">
                    {faq.q}
                    <Plus className="w-5 h-5 text-[var(--accent-strong)] group-open:rotate-45 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-[var(--ink-muted)] leading-relaxed border-t border-[var(--line)] mt-2">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[var(--accent-strong)] text-white text-center">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mb-8 tracking-wide uppercase backdrop-blur">
              Ruvia Studios
            </div>
            <h2 className="text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-extrabold leading-tight mb-8 tracking-tight">Bangun produk digital Anda hari ini.</h2>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <button className="h-16 px-10 text-lg bg-white text-[var(--ink)] hover:bg-[var(--surface-alt)] shadow-xl hover:scale-105 transition-all border-0 font-bold rounded-xl inline-flex items-center justify-center">
                Mulai Proyek
              </button>
            </a>
          </Reveal>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee_reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}} />
    </>
  );
}
