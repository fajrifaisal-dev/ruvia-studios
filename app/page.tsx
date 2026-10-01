import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  ArrowRight, 
  Plus
} from "lucide-react";

import { getWhatsAppLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";
import { portfolioProjects } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden font-sans">
      
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO SECTION — Premium Cinematic Dark SaaS
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[95vh] flex items-center" style={{ background: "#040811" }}>
        
        {/* ── Background Image Blended Naturally ── */}
        <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
          <div className="relative w-full lg:w-[70%] h-full">
            <Image
              src="/asset-porto/Gemini_Generated_Image_tqkzahtqkzahtqkz.jpg"
              alt="Modern tech workspace"
              fill
              priority
              className="object-cover opacity-40 lg:opacity-[0.85]"
              style={{ objectPosition: "center 75%" }}
            />
            {/* Gradient overlays to blend the image seamlessly into the dark background, but keep the laptop visible */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040811] via-[#040811]/80 lg:via-[#040811]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040811] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#040811]/10 to-transparent" />
          </div>
        </div>

        {/* ── Subtle Ambient Glows ── */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-[#4f46e5] opacity-[0.12] blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#8b5cf6] opacity-[0.08] blur-[100px] pointer-events-none z-0" />

        {/* ── Content Container ── */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-14 relative z-10 w-full py-20 lg:py-32">
          
          {/* Asymmetric composition: Content constrained to the left */}
          <div className="max-w-2xl flex flex-col items-start">

            {/* Eyebrow */}
            <Reveal>
              <div
                className="mb-6"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  color: "#818cf8",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Premium Digital Solutions
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={0.05}>
              <h1
                className="mb-6"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                }}
              >
                Membangun <br />
                sistem digital <br />
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    background: "linear-gradient(90deg, #a5b4fc 0%, #e879f9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    paddingRight: "10px",
                  }}
                >
                  untuk masa depan.
                </span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.12}>
              <p
                className="mb-10 leading-relaxed"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.1rem",
                  color: "#94a3b8",
                  maxWidth: "500px",
                }}
              >
                Kami adalah mitra teknologi terpercaya, membantu perusahaan bertransformasi melalui website modern, sistem manajemen kustom, dan perangkat lunak skala enterprise.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppLink("Halo Ruvia Studios, saya tertarik untuk membangun sistem digital bagi perusahaan saya.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-8 py-4 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "#e0e7ff",
                    color: "#0f172a",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    boxShadow: "0 8px 25px rgba(255,255,255,0.12)",
                    textDecoration: "none",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Mulai Proyek <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>

                <a
                  href="/portfolio"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    height: "52px",
                    padding: "0 28px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#e2e8f0",
                    background: "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(12px)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  className="hover:bg-white/10 hover:border-white/30"
                >
                  Lihat Portofolio
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: TENTANG KAMI (About Us - Light Theme)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
                  TENTANG KAMI
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                  Ruvia Studio
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                  Dirancang agar Anda lebih cepat memahami kebutuhan pelanggan, percaya terhadap merek Anda, dan berani menghubungi kami untuk memulai proyek.
                </p>
              </Reveal>
            </div>

            {/* Right Narrative Paragraph Column */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-gray-100">
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium mb-8">
                    Kami adalah studio digital yang fokus pada pengembangan website dan sistem bisnis yang nyata, bukan sekadar tampilan menarik. Setiap solusi kami dirancang dengan proses yang jelas, komunikasi yang terbuka, dan hasil yang berorientasi pada bisnis Anda.
                  </p>

                  {/* Tech Stack Scrolling Ticker */}
                  <style>{`
                    @keyframes ticker {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                  `}</style>
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 px-2 py-4">
                    {/* Gradient Masks for smooth fade out */}
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
                    
                    <div 
                      className="flex w-max items-center"
                      style={{ animation: "ticker 20s linear infinite" }}
                    >
                      {/* Render 2 sets for seamless loop */}
                      {[1, 2].map((set) => (
                        <div key={set} className="flex gap-10 items-center px-5">
                          {[
                            "laravel/laravel-original.svg",
                            "nodejs/nodejs-original.svg",
                            "php/php-original.svg",
                            "python/python-original.svg",
                            "vuejs/vuejs-original.svg",
                            "react/react-original.svg",
                            "wordpress/wordpress-plain.svg",
                            "mysql/mysql-original.svg",
                            "postgresql/postgresql-original.svg",
                            "mongodb/mongodb-original.svg"
                          ].map((icon, i) => (
                            <img 
                              key={i} 
                              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`}
                              alt="tech"
                              className="h-6 sm:h-7 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: LAYANAN KAMI (Services - Light Theme)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          
          <Reveal>
            <div className="max-w-2xl mb-16">
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
                LAYANAN KAMI
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Solusi digital yang mendukung pertumbuhan bisnis.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Website Perusahaan",
                desc: "Company profile, landing page, atau website bisnis yang profesional dan mudah dikelola."
              },
              {
                title: "Sistem Bisnis Custom",
                desc: "Sistem manajemen, POS, inventory, booking, dan aplikasi sesuai kebutuhan operasional Anda."
              },
              {
                title: "Integrasi API",
                desc: "Integrasi dengan payment gateway, CRM, WhatsApp, atau layanan pihak ketiga lainnya."
              },
              {
                title: "Pengembangan Lanjutan",
                desc: "Maintenance, pengembangan fitur, dan optimasi performa untuk jangka panjang."
              }
            ].map((service, idx) => (
              <Reveal key={service.title} delay={idx * 0.1}>
                <div className="pt-6 border-t-2 border-gray-200 hover:border-[#4F46E5] transition-colors duration-300 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: PROSES KERJA (Work Process - 01 to 04)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
              <div className="lg:col-span-6">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
                  PROSES KERJA
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Pendekatan yang jelas, dari awal hingga selesai.
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  Kami percaya proyek yang baik lahir dari proses yang terstruktur. Karena itu, setiap tahap kami jalankan dengan komunikasi yang terbuka dan fokus pada hasil yang sesuai kebutuhan Anda.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Riset Bisnis", desc: "Kami pahami audiens, pemicu kebutuhan, kompetitor, dan peluang keyword sebelum menyusun website atau sistem." },
              { num: "02", title: "Desain & Copy", desc: "Struktur halaman, UI, dan copywriting dibuat untuk company profile, landing page SEO, dan website bisnis yang jelas." },
              { num: "03", title: "Development", desc: "Website dan sistem bisnis custom dibangun cepat, responsif, aman, dan mudah dirawat dengan stack modern." },
              { num: "04", title: "Launch & Optimasi", desc: "Metadata, sitemap, robots.txt, performa, dan SEO on-page disiapkan agar halaman lebih mudah dipahami Google." }
            ].map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.1}>
                <div className="pt-6 border-t border-gray-200">
                  <div className="text-4xl sm:text-5xl font-light text-slate-300 mb-4 font-mono">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: PORTOFOLIO (Featured Portfolio - Unsplash)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
                  PORTOFOLIO
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Beberapa proyek yang sudah kami kerjakan.
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4F46E5] hover:text-[#4338CA] transition-colors group shrink-0"
              >
                Lihat semua project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.slice(0, 3).map((project, idx) => (
              <Reveal key={project.title} delay={idx * 0.1} className="h-full">
                <Link href={`/portfolio/${project.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col h-full">
                    
                    {/* Browser Bar Frame */}
                    <div className="bg-gray-100 px-4 py-2.5 border-b border-gray-200 flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>

                    {/* Image */}
                    <div className="aspect-video relative w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>

                    {/* Meta */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#4F46E5] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        {project.category}
                      </p>
                    </div>

                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: PAKET & HARGA (Pricing Section - Asymmetric)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
              <div className="lg:col-span-6">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
                  PAKET &amp; HARGA
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Harga yang transparan, sesuai dengan kebutuhan.
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  Teknologi yang tepat dengan biaya yang jelas. Berikut contoh paket yang paling banyak dipilih oleh klien kami.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Pricing Cards (8 Columns) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Website Starter */}
              <Reveal delay={0.1}>
                <div className="bg-slate-50 rounded-3xl border border-gray-200/80 p-8 flex flex-col h-full justify-between hover:border-gray-300 transition-all relative overflow-hidden">
                  {/* Optional Popular Badge */}
                  <div className="absolute top-0 right-0 bg-[#4F46E5] text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-bl-xl">
                    Popular
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Website Starter</h3>
                    <p className="text-sm text-gray-500 mb-4 font-normal leading-relaxed">
                      Untuk landing page, company profile, dan website bisnis sederhana yang SEO-ready.
                    </p>
                    <div className="text-3xl font-extrabold text-gray-900 mb-6">Rp1 Juta</div>
                    <ul className="space-y-3 text-sm text-gray-600 mb-8 font-normal">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-1.5 shrink-0" />
                        <span>Landing page / website company profile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-1.5 shrink-0" />
                        <span>Harga mulai Rp1 juta</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-1.5 shrink-0" />
                        <span>Desain responsif</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-1.5 shrink-0" />
                        <span>Form kontak dan WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-1.5 shrink-0" />
                        <span>SEO dasar dan optimasi performa</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href={getWhatsAppLink("Halo Ruvia Studios, saya tertarik dengan paket Website Starter (mulai Rp1 Juta) untuk bisnis saya.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-[#0e1427] hover:bg-[#0e1427]/90 !text-white rounded-xl text-sm font-bold transition-colors gap-1.5"
                  >
                    Konsultasi Gratis &rarr;
                  </a>
                </div>
              </Reveal>

              {/* Card 2: Build Custom */}
              <Reveal delay={0.2}>
                <div className="bg-slate-50 rounded-3xl border border-gray-200/80 p-8 flex flex-col h-full justify-between hover:border-gray-300 transition-all">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Build Custom</h3>
                    <p className="text-sm text-gray-500 mb-4 font-normal leading-relaxed">
                      Untuk membangun sistem manajemen bisnis, dashboard, POS, katalog, atau aplikasi web custom sampai siap digunakan.
                    </p>
                    <div className="text-3xl font-extrabold text-gray-900 mb-6">Custom</div>
                    <ul className="space-y-3 text-sm text-gray-600 mb-8 font-normal">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-1.5 shrink-0" />
                        <span><strong>Semua yang ada di Website Starter</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-1.5 shrink-0" />
                        <span>UI/UX dan prototype</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-1.5 shrink-0" />
                        <span>Frontend, backend, dan database</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-1.5 shrink-0" />
                        <span>Integrasi API dan layanan pihak ketiga</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] mt-1.5 shrink-0" />
                        <span>Maintenance &amp; pengembangan lanjutan</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    href={getWhatsAppLink("Halo Ruvia Studios, saya ingin berkonsultasi untuk pembuatan sistem Custom bagi perusahaan saya.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-transparent border-2 border-[#0e1427] text-[#0e1427] hover:bg-[#0e1427] hover:!text-white rounded-xl text-sm font-bold transition-colors gap-1.5"
                  >
                    Konsultasi Gratis &rarr;
                  </a>
                </div>
              </Reveal>

            </div>

            {/* Right Side Minimalist Visual Artwork (4 Columns) */}
            <div className="lg:col-span-4">
              <Reveal delay={0.25}>
                <div className="relative rounded-3xl overflow-hidden aspect-square sm:aspect-auto sm:h-full min-h-[320px] bg-slate-900">
                  <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
                    alt="Ruvia Studio Architecture"
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-8 flex items-end">
                    <p className="text-white text-sm font-medium leading-relaxed">
                      Solusi sistem custom &amp; ERP terpadu untuk kebutuhan spesifik perusahaan Anda.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7: FAQ (Accordion Section - Light Theme)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Header Column (4 Columns) */}
            <div className="lg:col-span-4">
              <Reveal>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3 block">
                  FAQ
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Pertanyaan yang sering diajukan.
                </h2>
              </Reveal>
            </div>

            {/* Right Accordion List Column (8 Columns) */}
            <div className="lg:col-span-8 space-y-4">
              {[
                {
                  q: "Berapa biaya pembuatan website?",
                  a: "Biaya dimulai dari Rp1.000.000 untuk Landing Page dan Rp2.000.000 untuk Website Company Profile (termasuk domain & hosting 1 tahun). Untuk sistem bisnis kustom atau ERP, biaya disesuaikan dengan lingkup kebutuhan Anda."
                },
                {
                  q: "Berapa lama proses pengerjaannya?",
                  a: "Untuk Landing Page biasanya membutuhkan 5–7 hari kerja, dan Company Profile membutuhkan 7–10 hari kerja. Sementara sistem bisnis custom membutuhkan waktu 2 hingga 6 minggu."
                },
                {
                  q: "Apakah domain dan hosting termasuk?",
                  a: "Ya, seluruh paket website standar kami sudah termasuk biaya sewa domain (.com / .id) dan cloud hosting selama 1 tahun penuh."
                },
                {
                  q: "Apakah bisa request fitur khusus?",
                  a: "Tentu saja! Kami berpengalaman mengembangkan fitur khusus seperti kasir POS, sistem booking reservasi, integrasi WhatsApp API, hingga sistem manajemen persediaan barang (ERP)."
                },
                {
                  q: "Bagaimana setelah website selesai?",
                  a: "Kami melakukan serah terima akun lengkap beserta panduan penggunaan. Kami juga memberikan dukungan garansi perbaikan bug dan opsi maintenance minor secara berkala."
                }
              ].map((faq, idx) => (
                <Reveal key={faq.q} delay={idx * 0.08}>
                  <details className="bg-white border border-gray-200/80 rounded-2xl group overflow-hidden cursor-pointer shadow-sm">
                    <summary className="font-bold text-base sm:text-lg p-6 flex justify-between items-center outline-none select-none text-gray-900">
                      <span>{faq.q}</span>
                      <Plus className="w-5 h-5 text-[#4F46E5] group-open:rotate-45 transition-transform shrink-0 ml-4" />
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8: MULAI SEKARANG (Bottom CTA - Dark Mode #0F172A)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0F172A] text-white py-24 lg:py-32 text-center">
        {/* Glow & Diagonal Line Overlay */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4F46E5] opacity-20 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 relative z-10">
          <Reveal>
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4 block">
              MULAI SEKARANG
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-white">
              Bangun produk digital Anda <br className="hidden sm:inline" /> bersama Ruvia Studio.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl mx-auto font-normal">
              Diskusikan kebutuhan Anda dan dapatkan rekomendasi solusi yang paling sesuai untuk bisnis Anda.
            </p>
            <a
              href={getWhatsAppLink("Halo Ruvia Studios, saya mau mulai berdiskusi tentang proyek digital saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 px-9 text-base font-bold bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-all duration-200 items-center justify-center gap-2"
            >
              Mulai Proyek
              <ArrowRight className="w-5 h-5" />
            </a>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
