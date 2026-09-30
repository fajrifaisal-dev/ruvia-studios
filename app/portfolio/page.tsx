import { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Menjelajahi implementasi nyata dari desain dan rekayasa perangkat lunak untuk klien Ruvia Studios.",
};

export default function PortfolioPage() {
  const projects = [
    {
      title: "Hello Friday",
      client: "Beauty & Wellness",
      desc: "Platform digital premium untuk beauty & wellness berkonsep slow living. Showcase ini menonjolkan fitur pencarian multi-cabang (Surabaya & Malang), galeri ambience studio yang menenangkan, serta alur reservasi instan. Desainnya menggunakan tema dark mode yang eksklusif.",
      image: "/asset-porto/Gemini_Generated_Image_olme1jolme1jolme.jpg",
      tags: ["Dark Mode UI", "Multi-Branch Search", "Instant Booking"],
    },
    {
      title: "Kazi - Nail Beauty Bar",
      client: "Beauty & Lifestyle",
      desc: "Website untuk jaringan nail art yang terintegrasi di dalam coffee shop. Showcase ini menonjolkan desain yang lebih cerah (playful), fitur Outlet Finder instan untuk menemukan 15+ lokasi, dan kemudahan reservasi langsung melalui WhatsApp.",
      image: "/asset-porto/Gemini_Generated_Image_2ej6jm2ej6jm2ej6.jpg",
      tags: ["Playful UI", "Outlet Finder", "WhatsApp Booking"],
    },
    {
      title: "Custom ERP & Supply Chain",
      client: "Enterprise & Operations",
      desc: "Sistem manajemen sumber daya perusahaan terpadu untuk efisiensi inventaris, alur kerja operasional, dan otomatisasi laporan keuangan.",
      image: "/asset-porto/erp_showcase.png",
      tags: ["Enterprise ERP", "Inventory Control", "Financial Reports"],
    },
    {
      title: "Logistics & Freight Tracking",
      client: "Logistics & Transport",
      desc: "Landing page interaktif & portal pelacakan armada pengiriman barang real-time dengan kalkulator tarif otomatis.",
      image: "/asset-porto/logistics_showcase.png",
      tags: ["Real-time Tracking", "Rate Calculator", "Fleet Management"],
    },
    {
      title: "Executive Company Profile",
      client: "Corporate & Business",
      desc: "Company profile premium dengan animasi mikro modern, integrasi katalog produk, dan formulir konsultasi instan.",
      image: "/asset-porto/corporate_showcase.png",
      tags: ["Interactive UI", "Brand Identity", "Lead Generation"],
    },
    {
      title: "Smart CRM & Client Portal",
      client: "Client Portal / CRM",
      desc: "Platform CRM terpusat untuk memantau siklus pelanggan, pipeline penjualan, dan manajemen tiket dukungan layanan.",
      image: "/asset-porto/crm_showcase.png",
      tags: ["Sales Pipeline", "Customer Insights", "Ticket Management"],
    },
  ];

  return (
    <div className="bg-[var(--ink)] min-h-screen text-white pt-24 pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h1 className="text-xl md:text-2xl text-[var(--line)] leading-relaxed font-medium">
              Menjelajahi implementasi nyata dari desain dan rekayasa perangkat lunak untuk menyelesaikan tantangan bisnis klien kami di Indonesia.
            </h1>
          </div>
        </Reveal>

        {/* Process Timeline — Animated Network */}
        <div className="mb-24 w-full overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div className="min-w-[720px] relative">
            <svg viewBox="0 0 880 260" fill="none" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7460f7" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.7"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* ── CONNECTOR 01→02 ── */}
              <line x1="185" y1="130" x2="235" y2="130" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="5 4"/>
              <circle r="5" fill="#7460f7" filter="url(#glow)">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="0s">
                  <mpath href="#p1"/>
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="0s"/>
              </circle>
              <path id="p1" d="M185,130 L235,130" fill="none"/>

              {/* ── CONNECTOR 02→03 ── */}
              <line x1="410" y1="130" x2="460" y2="130" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="5 4"/>
              <circle r="5" fill="#7460f7" filter="url(#glow)">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.83s">
                  <mpath href="#p2"/>
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="0.83s"/>
              </circle>
              <path id="p2" d="M410,130 L460,130" fill="none"/>

              {/* ── CONNECTOR 03→04 ── */}
              <line x1="635" y1="130" x2="685" y2="130" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="5 4"/>
              <circle r="5" fill="#34d399" filter="url(#glow)">
                <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.67s">
                  <mpath href="#p3"/>
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="1.67s"/>
              </circle>
              <path id="p3" d="M635,130 L685,130" fill="none"/>

              {/* CARD 01 — RESEARCH */}
              <g transform="translate(10, 48)">
                <rect width="175" height="165" rx="14" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" fill="white" fillOpacity="0.04"/>
                <rect x="55" y="12" width="65" height="100" rx="10" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" fill="none"/>
                <rect x="62" y="20" width="51" height="7" rx="2" fill="white" fillOpacity="0.1"/>
                <rect x="62" y="31" width="36" height="5" rx="2" fill="white" fillOpacity="0.15"/>
                <rect x="62" y="40" width="51" height="24" rx="3" fill="white" fillOpacity="0.07"/>
                <rect x="62" y="69" width="24" height="4" rx="2" fill="white" fillOpacity="0.15"/>
                <rect x="62" y="77" width="51" height="4" rx="2" fill="white" fillOpacity="0.08"/>
                <rect x="62" y="85" width="38" height="4" rx="2" fill="white" fillOpacity="0.08"/>
                <circle cx="22" cy="40" r="12" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" fill="none"/>
                <line x1="30" y1="48" x2="40" y2="58" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="22" cy="40" r="12" stroke="#7460f7" fill="none">
                  <animate attributeName="r" values="12;20;12" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="strokeOpacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
                </circle>
                <text x="10" y="158" fontSize="7.5" fill="white" fillOpacity="0.35" fontFamily="monospace" fontWeight="700" letterSpacing="2">01. RESEARCH</text>
              </g>

              {/* CARD 02 — SYSTEM DESIGN */}
              <g transform="translate(235, 48)">
                <rect width="175" height="165" rx="14" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" fill="white" fillOpacity="0.04"/>
                <rect x="14" y="14" width="147" height="100" rx="7" stroke="white" strokeOpacity="0.15" strokeWidth="1.5" fill="none"/>
                <rect x="14" y="14" width="147" height="16" rx="7" fill="white" fillOpacity="0.07"/>
                <circle cx="26" cy="22" r="3" fill="white" fillOpacity="0.2"/>
                <circle cx="36" cy="22" r="3" fill="white" fillOpacity="0.2"/>
                <circle cx="46" cy="22" r="3" fill="white" fillOpacity="0.2"/>
                <rect x="22" y="36" width="30" height="70" rx="4" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.08" strokeWidth="1"/>
                <rect x="27" y="44" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.2"/>
                <rect x="27" y="52" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.1"/>
                <rect x="27" y="60" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.1"/>
                <rect x="59" y="36" width="94" height="30" rx="4" fill="white" fillOpacity="0.07"/>
                <rect x="59" y="72" width="44" height="14" rx="4" fill="white" fillOpacity="0.04"/>
                <rect x="109" y="72" width="44" height="14" rx="4" fill="white" fillOpacity="0.04"/>
                <path d="M143 50 L148 60 L145 58 L144 64 L141 54 L137 56 Z" fill="white">
                  <animate attributeName="fillOpacity" values="0.15;0.7;0.15" dur="1.5s" repeatCount="indefinite"/>
                </path>
                <text x="10" y="158" fontSize="7.5" fill="white" fillOpacity="0.35" fontFamily="monospace" fontWeight="700" letterSpacing="1.5">02. SYSTEM DESIGN</text>
              </g>

              {/* CARD 03 — DEVELOPMENT */}
              <g transform="translate(460, 48)">
                <rect width="175" height="165" rx="14" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" fill="white" fillOpacity="0.04"/>
                <rect x="14" y="14" width="147" height="100" rx="6" stroke="white" strokeOpacity="0.12" strokeWidth="1" fill="white" fillOpacity="0.03"/>
                <rect x="14" y="14" width="147" height="14" rx="6" fill="white" fillOpacity="0.06"/>
                {[
                  { x: 24, w: 20, c: "#7460f7", d: "0s",   dur: "2.2s" },
                  { x: 30, w: 32, c: "#34d399", d: "0.25s", dur: "2.5s" },
                  { x: 30, w: 25, c: "#fbbf24", d: "0.5s",  dur: "2.1s" },
                  { x: 36, w: 55, c: "#7460f7", d: "0.75s", dur: "2.8s" },
                  { x: 24, w: 20, c: "#34d399", d: "1s",    dur: "2.3s" },
                ].map((l, i) => (
                  <rect key={i} x={l.x} y={34 + i * 13} width={l.w} height="3" rx="1.5" fill={l.c} fillOpacity="0.75">
                    <animate attributeName="width" values={`${l.w * 0.1};${l.w};${l.w * 0.1}`} dur={l.dur} begin={l.d} repeatCount="indefinite"/>
                  </rect>
                ))}
                <rect x="24" y="101" width="2" height="10" rx="1" fill="white">
                  <animate attributeName="fillOpacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
                </rect>
                <text x="10" y="158" fontSize="7.5" fill="white" fillOpacity="0.35" fontFamily="monospace" fontWeight="700" letterSpacing="2">03. DEVELOPMENT</text>
              </g>

              {/* CARD 04 — GO-LIVE */}
              <g transform="translate(685, 48)">
                <rect width="175" height="165" rx="14" stroke="#34d399" strokeOpacity="0.22" strokeWidth="1.5" fill="white" fillOpacity="0.04"/>
                <circle cx="87" cy="62" r="32" fill="#34d399" fillOpacity="0.08" stroke="#34d399" strokeWidth="1.5">
                  <animate attributeName="r" values="32;37;32" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="strokeOpacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <path d="M72 62 L82 72 L104 50" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="22" cy="112" r="4" fill="#34d399">
                  <animate attributeName="fillOpacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite"/>
                </circle>
                <rect x="34" y="110" width="115" height="3" rx="1.5" fill="white" fillOpacity="0.12"/>
                <rect x="34" y="118" width="88" height="3" rx="1.5" fill="white" fillOpacity="0.07"/>
                <rect x="22" y="130" width="131" height="22" rx="7" fill="#34d399" fillOpacity="0.15" stroke="#34d399" strokeOpacity="0.35" strokeWidth="1"/>
                <text x="10" y="158" fontSize="7.5" fill="#34d399" fillOpacity="0.55" fontFamily="monospace" fontWeight="700" letterSpacing="2">04. GO-LIVE</text>
              </g>

              {/* Ambient background dots */}
              <circle cx="123" cy="230" r="3" fill="white" fillOpacity="0.06">
                <animate attributeName="fillOpacity" values="0.03;0.12;0.03" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="545" cy="20" r="2.5" fill="#7460f7" fillOpacity="0.15">
                <animate attributeName="fillOpacity" values="0.08;0.35;0.08" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="760" cy="235" r="3.5" fill="#34d399" fillOpacity="0.12">
                <animate attributeName="fillOpacity" values="0.05;0.22;0.05" dur="3.5s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={0.1 * idx}>
              <div className="bg-white rounded-[32px] overflow-hidden text-[var(--ink)] hover:-translate-y-2 transition-all duration-500 cursor-pointer group shadow-xl hover:shadow-2xl border border-white/10 flex flex-col h-full">
                <div className="aspect-[4/3] bg-[var(--surface-alt)] relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                </div>
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-xs font-bold text-[var(--accent)] mb-2 uppercase tracking-wider">{project.client}</div>
                    <h3 className="text-2xl font-bold mb-3 leading-tight text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
