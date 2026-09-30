import { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Insight",
  description: "Artikel, insight, dan pemikiran seputar pengembangan produk digital.",
};

export default function InsightPage() {
  const articles = [
    {
      title: "Apakah Single Page Application (SPA) Masih Layak untuk Frontend Modern?",
      date: "20 Sep 2026",
    },
    {
      title: "Menghitung ROI dari Investasi Custom Business System",
      date: "14 Sep 2026",
    },
    {
      title: "Kerentanan Keamanan pada Komponen Frontend dan Cara Mencegahnya",
      date: "7 Sep 2026",
    },
    {
      title: "Mengapa Bisnis Lokal Membutuhkan Landing Page yang Terstruktur",
      date: "31 Agu 2026",
    },
  ];

  return (
    <div className="bg-[var(--ink)] min-h-screen text-white pt-24 pb-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <h1 className="text-[clamp(2.5rem,4vw+1rem,3.5rem)] font-bold tracking-tight mb-16">
            Insight & Artikel
          </h1>
        </Reveal>

        <div className="flex flex-col">
          {articles.map((article, idx) => (
            <Reveal key={idx} delay={0.1 * idx}>
              <a 
                href="#" 
                className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-t border-white/10 hover:bg-white/[0.02] transition-colors -mx-5 px-5 sm:-mx-8 sm:px-8"
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0 max-w-2xl group-hover:text-[var(--accent-soft)] transition-colors leading-tight">
                  {article.title}
                </h2>
                <div className="text-white/40 text-sm font-medium whitespace-nowrap">
                  {article.date}
                </div>
              </a>
            </Reveal>
          ))}
          <div className="border-t border-white/10"></div>
        </div>
      </div>
    </div>
  );
}
