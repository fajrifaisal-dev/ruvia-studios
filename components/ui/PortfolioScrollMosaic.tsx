"use client";

/* ═══════════════════════════════════════════════
   8 niche cards — 4 per column
   Shapes: "portrait" (9:16), "square" (1:1), "landscape" (4:3)
   ═══════════════════════════════════════════════ */

type Shape = "portrait" | "square" | "landscape";

interface NicheCard {
  id: string;
  shape: Shape;
  category: string;        // small label
  title: string;           // main heading
  tagline: string;
  tags: string[];
  grad: string;            // tailwind gradient
  accent: string;          // hex color
  badge: string;           // badge classes
  tagStyle: string;        // tag chip classes
  frameType: "browser" | "mobile";
}

const CARDS: NicheCard[] = [
  /* ── Column A ── */
  {
    id: "klinik-umkm",
    shape: "portrait",
    category: "Klinik & UMKM",
    title: "Website Klinik & Usaha Lokal",
    tagline: "Website profesional untuk klinik, toko, salon, dan UMKM agar lebih mudah ditemukan pelanggan.",
    tags: ["Landing Page", "Google Maps", "WhatsApp CTA"],
    grad: "from-emerald-950 via-green-950/70",
    accent: "#10b981",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    tagStyle: "bg-emerald-500/10 text-emerald-300/80",
    frameType: "mobile",
  },
  {
    id: "erp",
    shape: "landscape",
    category: "Enterprise System",
    title: "Custom ERP & Supply Chain",
    tagline: "Sistem manajemen inventaris, procurement, dan laporan keuangan terpadu untuk perusahaan.",
    tags: ["Inventory Control", "Role Management", "Financial Reports"],
    grad: "from-blue-950 via-indigo-950/70",
    accent: "#3b82f6",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/25",
    tagStyle: "bg-blue-500/10 text-blue-300/80",
    frameType: "browser",
  },
  {
    id: "company-profile",
    shape: "square",
    category: "Corporate Website",
    title: "Executive Company Profile",
    tagline: "Company profile premium dengan animasi mikro dan formulir lead generation instan.",
    tags: ["Brand Identity", "Interactive UI", "Lead Generation"],
    grad: "from-violet-950 via-purple-950/70",
    accent: "#8b5cf6",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    tagStyle: "bg-violet-500/10 text-violet-300/80",
    frameType: "browser",
  },
  {
    id: "hello-friday",
    shape: "portrait",
    category: "Beauty & Wellness",
    title: "Hello Friday Studio",
    tagline: "Platform reservasi digital premium slow-living untuk studio kecantikan multi-cabang.",
    tags: ["Instant Booking", "Multi-Branch", "Dark Mode UI"],
    grad: "from-rose-950 via-pink-950/70",
    accent: "#f43f5e",
    badge: "bg-rose-500/15 text-rose-300 border-rose-500/25",
    tagStyle: "bg-rose-500/10 text-rose-300/80",
    frameType: "mobile",
  },

  /* ── Column B ── */
  {
    id: "crm",
    shape: "square",
    category: "SaaS & CRM",
    title: "Smart CRM & Client Portal",
    tagline: "Platform CRM terpusat untuk pipeline penjualan, manajemen tiket, dan analitik pelanggan.",
    tags: ["Sales Pipeline", "Customer Insights", "Dark Mode SaaS"],
    grad: "from-cyan-950 via-sky-950/70",
    accent: "#06b6d4",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
    tagStyle: "bg-cyan-500/10 text-cyan-300/80",
    frameType: "browser",
  },
  {
    id: "logistics",
    shape: "landscape",
    category: "Logistics & Fleet",
    title: "Logistics & Freight Tracking",
    tagline: "Portal pelacakan armada real-time dan kalkulator tarif kargo otomatis untuk ekspedisi.",
    tags: ["Real-time Tracking", "Rate Calculator", "Fleet Management"],
    grad: "from-teal-950 via-emerald-950/70",
    accent: "#14b8a6",
    badge: "bg-teal-500/15 text-teal-300 border-teal-500/25",
    tagStyle: "bg-teal-500/10 text-teal-300/80",
    frameType: "browser",
  },
  {
    id: "kazi",
    shape: "portrait",
    category: "Nail Art · 15+ Outlet",
    title: "Kazi Nail Beauty Bar",
    tagline: "Website jaringan nail art dengan outlet locator, price list dinamis, dan WhatsApp router.",
    tags: ["Outlet Finder", "Dynamic Price List", "Playful UI"],
    grad: "from-amber-950 via-orange-950/70",
    accent: "#f59e0b",
    badge: "bg-amber-500/15 text-amber-300 border-amber-500/25",
    tagStyle: "bg-amber-500/10 text-amber-300/80",
    frameType: "mobile",
  },
  {
    id: "fnb-startup",
    shape: "square",
    category: "F&B & Startup",
    title: "Website F&B & Startup",
    tagline: "Landing page high-converting untuk restoran, kafe, dan startup dengan integrasi pemesanan.",
    tags: ["Menu Digital", "Online Order", "SEO Local"],
    grad: "from-orange-950 via-red-950/70",
    accent: "#f97316",
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/25",
    tagStyle: "bg-orange-500/10 text-orange-300/80",
    frameType: "browser",
  },
];

/* ── Browser Frame Chrome ── */
function BrowserChrome({ card }: { card: NicheCard }) {
  return (
    <div className="bg-white/[0.04] border-b border-white/8 px-3 py-2 flex items-center gap-2 shrink-0">
      <div className="flex gap-1 shrink-0">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
      </div>
      <div className="flex-1 h-4 bg-white/5 rounded-full flex items-center px-2 gap-1.5 min-w-0">
        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: card.accent, opacity: 0.7 }} />
        <span className="text-[8px] text-white/20 font-mono truncate">{card.id}.ruviastudios.site</span>
      </div>
    </div>
  );
}

/* ── Mobile/Phone Frame Chrome ── */
function MobileChrome() {
  return (
    <div className="bg-white/[0.03] border-b border-white/8 flex flex-col items-center pt-2 pb-1.5 px-3 shrink-0">
      <div className="w-10 h-1 rounded-full bg-white/15 mb-2" />
      <div className="w-full flex items-center justify-between">
        <span className="text-[7px] text-white/20 font-mono">9:41</span>
        <div className="flex gap-0.5 items-center">
          <div className="w-2.5 h-1.5 bg-white/15 rounded-sm" />
          <div className="w-1 h-1.5 bg-white/10 rounded-sm" />
        </div>
      </div>
    </div>
  );
}

/* ── Mock UI Skeleton (inside device) ── */
function MockScreen({ card, shape }: { card: NicheCard; shape: Shape }) {
  return (
    <div className="flex-1 p-3 space-y-2 overflow-hidden">
      {/* Top bar simulation */}
      <div className="flex gap-1.5">
        <div className="h-5 rounded-md flex-1" style={{ background: `${card.accent}15`, borderColor: `${card.accent}20`, borderWidth: 1 }} />
        {shape !== "portrait" && <div className="h-5 w-12 rounded-md bg-white/5" />}
      </div>
      {/* Content grid */}
      {shape === "portrait" ? (
        <div className="space-y-1.5">
          <div className="h-16 rounded-xl" style={{ background: `${card.accent}12`, borderColor: `${card.accent}20`, borderWidth: 1 }} />
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-10 rounded-lg bg-white/5" />
            <div className="h-10 rounded-lg bg-white/5" />
          </div>
          <div className="h-1.5 rounded-full bg-white/8 w-3/4" />
          <div className="h-1.5 rounded-full bg-white/5 w-1/2" />
        </div>
      ) : (
        <div className="space-y-1.5">
          <div className="grid grid-cols-3 gap-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 rounded-lg bg-white/5" />
            ))}
          </div>
          <div className="h-1 rounded-full bg-white/8 w-full" />
          <div className="h-1 rounded-full bg-white/5 w-4/5" />
        </div>
      )}
    </div>
  );
}

/* ── Single Card ── */
function NicheCardUI({ card }: { card: NicheCard }) {
  /* Explicit height floors — not aspect-ratio (which depends on column width) */
  const heightClass =
    card.shape === "portrait"  ? "min-h-[320px]"
    : card.shape === "square"  ? "min-h-[240px]"
    : "min-h-[200px]";  // landscape

  return (
    <div
      className={`
        w-full ${heightClass} rounded-2xl overflow-hidden flex flex-col
        border border-white/8
        bg-gradient-to-b ${card.grad} to-[#060810]
      `}
    >
      {/* Device chrome */}
      {card.frameType === "mobile"
        ? <MobileChrome />
        : <BrowserChrome card={card} />
      }

      {/* Mock screen content */}
      <MockScreen card={card} shape={card.shape} />

      {/* Info footer */}
      <div className="px-3 pb-3 pt-1.5 border-t border-white/8 shrink-0">
        <span
          className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded-full border mb-1.5 uppercase tracking-wide ${card.badge}`}
        >
          {card.category}
        </span>
        <p className="text-[11px] font-bold text-white leading-tight mb-0.5">{card.title}</p>
        <p className="text-[9px] text-white/35 leading-snug line-clamp-2 mb-1.5">{card.tagline}</p>
        <div className="flex flex-wrap gap-1">
          {card.tags.slice(0, 2).map((t) => (
            <span key={t} className={`text-[8px] px-1.5 py-0.5 rounded-full border border-white/5 font-semibold ${card.tagStyle}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════ */
export function PortfolioScrollMosaic() {
  const colA = CARDS.slice(0, 4);
  const colB = CARDS.slice(4, 8);

  /* Duplicate each column for seamless infinite loop */
  const loopA = [...colA, ...colA];
  const loopB = [...colB, ...colB];

  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .mosaic-up   { animation: scrollUp   28s linear infinite; }
        .mosaic-down { animation: scrollDown 34s linear infinite; }
      `}</style>

      {/* Outer container — fills parent column height */}
      <div
        className="relative flex gap-4 w-full overflow-hidden"
        style={{
          height: "580px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        {/* Column A — scrolls UP */}
        <div className="flex-1 flex flex-col gap-4 mosaic-up will-change-transform">
          {loopA.map((c, i) => (
            <NicheCardUI key={`a-${c.id}-${i}`} card={c} />
          ))}
        </div>

        {/* Column B — scrolls DOWN */}
        <div className="flex-1 flex flex-col gap-4 mosaic-down will-change-transform">
          {loopB.map((c, i) => (
            <NicheCardUI key={`b-${c.id}-${i}`} card={c} />
          ))}
        </div>
      </div>
    </>
  );
}
