import { site } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Star, ArrowRight, Monitor, Code, Settings, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      {/* Hero Section — Split Screen Premium */}
      <section className="relative overflow-hidden bg-[var(--bg)] pt-20 pb-0 md:pt-28">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:28px_28px]"></div>
        <div className="absolute left-1/4 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-[var(--accent)] opacity-10 blur-[120px]"></div>
        <div className="absolute right-1/4 top-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-purple-400 opacity-10 blur-[100px]"></div>
        
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[85vh]">
            {/* Left: CTA */}
            <div className="flex flex-col items-start text-left py-12 pb-10 lg:py-0">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-sm font-semibold text-[var(--accent-strong)] mb-8 tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
                  Tersedia untuk Proyek Baru
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-[clamp(2.6rem,5vw+1rem,4.75rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--ink)] mb-6">
                  Solusi digital untuk{" "}
                  <span className="relative inline-block">
                    <span className="text-[var(--accent)]">bisnis berkembang.</span>
                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                      <path d="M1 5.5C50 2 100 1 150 3.5C200 6 250 7 299 5.5" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5"/>
                    </svg>
                  </span>
                </h1>
              </Reveal>
              
              <Reveal delay={0.2}>
                <p className="text-lg md:text-xl text-[var(--ink-muted)] mb-10 leading-relaxed font-medium max-w-xl">
                  Kami membangun website profesional dan sistem digital praktis yang membantu bisnis Anda tumbuh, terhubung dengan pelanggan, dan beroperasi lebih efisien.
                </p>
              </Reveal>
              
              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                  <a href={getWhatsAppLink("Halo Ruvia Studios, saya ingin memulai proyek digital untuk bisnis saya.")} target="_blank" rel="noopener noreferrer">
                    <button className="h-14 px-8 text-base bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-xl inline-flex items-center gap-2 shadow-2xl shadow-[var(--accent)]/30 hover:scale-105 hover:shadow-[var(--accent)]/50 transition-all duration-300">
                      Mulai Proyek
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </a>
                  <a href="/portfolio">
                    <button className="h-14 px-8 text-base bg-[var(--surface)] hover:bg-[var(--surface-alt)] text-[var(--ink)] font-semibold rounded-xl inline-flex items-center gap-2 border border-[var(--line)] hover:border-[var(--ink-muted)] transition-all duration-300">
                      Lihat Portfolio
                    </button>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--ink-muted)] py-6 border-t border-b border-[var(--line)] w-full">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium">Scope Jelas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium">Harga Transparan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium">Pengiriman Cepat</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Floating UI Mockup */}
            <Reveal delay={0.35}>
              <div className="relative h-[500px] lg:h-[640px] flex items-center justify-center pb-8 lg:pb-0">
                {/* Main Dashboard Card */}
                <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-2xl border border-[var(--line)] overflow-hidden">
                  <div className="bg-[var(--surface-alt)] px-4 py-3 flex items-center gap-2 border-b border-[var(--line)]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 mx-3 bg-white rounded-md px-3 py-1.5 text-xs text-[var(--ink-muted)] border border-[var(--line)] truncate">
                      ruviastudios.com/dashboard
                    </div>
                  </div>
                  <div className="p-5 bg-[var(--bg)]">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <div className="text-xs text-[var(--ink-muted)] mb-1">Total Pendapatan</div>
                        <div className="text-2xl font-black text-[var(--ink)]">Rp 48.2 Jt</div>
                      </div>
                      <div className="w-10 h-10 bg-[var(--accent-soft)] rounded-xl flex items-center justify-center">
                        <Monitor className="w-5 h-5 text-[var(--accent)]" />
                      </div>
                    </div>
                    <div className="flex items-end gap-1.5 h-20 mb-5">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm" style={{
                          height: `${h}%`,
                          backgroundColor: i === 10 ? 'var(--accent)' : i === 11 ? 'var(--accent-soft)' : '#e2e8f0',
                          opacity: i > 8 ? 1 : 0.5,
                        }} />
                      ))}
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: "Traffic Website", val: "+24%", ok: true },
                        { label: "Tingkat Konversi", val: "+8.2%", ok: true },
                        { label: "Tingkat Keluar", val: "-12%", ok: false },
                      ].map((row, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-[var(--line)] last:border-0">
                          <span className="text-sm text-[var(--ink-muted)]">{row.label}</span>
                          <span className={`text-sm font-bold ${row.ok ? "text-emerald-500" : "text-[var(--accent)]"}`}>{row.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating card top-right */}
                <div className="absolute top-2 -right-2 lg:-right-6 bg-white rounded-xl shadow-xl border border-[var(--line)] p-4 w-44" style={{ animation: "heroFloat 6s ease-in-out infinite" }}>
                  <div className="text-xs text-[var(--ink-muted)] mb-1">Proyek Baru</div>
                  <div className="font-bold text-sm text-[var(--ink)] mb-2">Landing Page SEO</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-xs text-emerald-600 font-semibold">Sedang Dikerjakan</span>
                  </div>
                </div>

                {/* Floating card bottom-left */}
                <div className="absolute bottom-12 -left-2 lg:-left-8 bg-[var(--ink)] rounded-xl shadow-xl p-4 w-48" style={{ animation: "heroFloat 8s ease-in-out 1.5s infinite" }}>
                  <div className="text-xs text-white/50 mb-2">Status Sistem</div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: "pulse 2s infinite" }}></div>
                    <span className="text-xs text-white font-semibold">Semua sistem aktif</span>
                  </div>
                  <div className="space-y-1.5">
                    {["API", "Database", "CDN"].map((s, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-xs text-white/50">{s}</span>
                        <span className="text-xs text-emerald-400 font-bold">100%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge top-left */}
                <div className="absolute top-14 -left-2 lg:-left-4 bg-[var(--accent)] text-white rounded-xl shadow-lg p-3 flex items-center gap-3" style={{ animation: "heroFloat 7s ease-in-out 3s infinite" }}>
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-black">Klien Puas</div>
                    <div className="text-xs opacity-75">20+ proyek</div>
                  </div>
                </div>
              </div>
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
              <h2 className="text-[clamp(2rem,3vw+1rem,3rem)] font-bold leading-tight text-[var(--ink)] mb-4 tracking-tight">Our Approach</h2>
              <p className="text-lg text-[var(--ink-muted)] leading-relaxed max-w-2xl mx-auto">
                From researching business needs to a ready-to-use website or system.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Understand", desc: "Understanding your business needs, audience, and current problems." },
              { num: "02", title: "Plan", desc: "Defining the right solution, structure, and setting a clear scope." },
              { num: "03", title: "Build", desc: "Developing the system reliably, responsively, and practically." },
              { num: "04", title: "Launch", desc: "Deploying it properly with SEO optimization and handing it over." }
            ].map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.1}>
                <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--line)] shadow-sm relative overflow-hidden group h-full">
                  <div className="text-6xl font-black text-[var(--bg)] absolute -top-2 -right-4 group-hover:scale-110 group-hover:text-[var(--accent-soft)] transition-all duration-500 z-0">{step.num}</div>
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-[var(--accent-strong)] mb-2 uppercase tracking-widest">{step.num} Step</div>
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
              <h2 className="text-[clamp(2rem,3vw+1rem,3rem)] font-bold leading-tight text-[var(--ink)] mb-4 tracking-tight">Pricing</h2>
              <p className="text-lg text-[var(--ink-muted)]">
                Clear requirements; agree on scope, timeline, and costs before development begins.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal delay={0.1}>
              <div className="bg-[var(--surface)] rounded-3xl border border-[var(--line)] p-10 shadow-sm flex flex-col h-full hover:border-[var(--ink-muted)] transition-colors">
                <h3 className="text-3xl font-bold mb-2">Website Starter</h3>
                <p className="text-[var(--ink-muted)] mb-8 text-lg">
                  A practical starting point for businesses that need a professional online presence.
                </p>
                <div className="text-4xl font-black text-[var(--ink)] mb-8">Rp1 Juta</div>
                <ul className="space-y-4 mb-10 flex-grow text-lg">
                  {["Responsive design", "Business information", "WhatsApp integration", "Basic SEO", "Performance optimization", "Deployment"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--ink)] font-medium">
                      <CheckCircle2 className="w-6 h-6 text-[var(--success)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={getWhatsAppLink("Halo Ruvia Studios, saya tertarik dengan Website Starter untuk bisnis saya.")} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="secondary" className="w-full h-14 text-lg border-2 border-[var(--line)]">Choose Starter</Button>
                </a>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bg-[var(--ink)] text-white rounded-3xl p-10 shadow-xl flex flex-col relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 bg-[var(--accent)] text-white text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-bl-xl">
                  Popular
                </div>
                <h3 className="text-3xl font-bold mb-2">Custom Solutions</h3>
                <p className="text-[var(--line)] mb-8 text-lg">
                  Need something beyond a company profile? We can build complex business systems.
                </p>
                <div className="text-4xl font-black text-white mb-8">Custom Quote</div>
                <ul className="space-y-4 mb-10 flex-grow text-lg">
                  {["Custom websites & dashboards", "CRM & Booking systems", "Business applications", "ERP modules", "API integrations", "Maintenance & support"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white font-medium">
                      <CheckCircle2 className="w-6 h-6 text-[var(--accent-soft)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full h-14 text-lg bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white border-0">Discuss a Project</Button>
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
