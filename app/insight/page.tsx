import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getAllInsights } from "@/lib/insight-data";
import { Reveal } from "@/components/ui/Reveal";

const PAGE_URL = `${site.url}/insight`;

export const metadata: Metadata = {
  title: "Insight & Panduan Digital Bisnis | Ruvia Studios",
  description:
    "Kumpulan artikel, studi kasus, dan panduan teknis seputar pembuatan website, software ERP, dan strategi digital marketing dari engineer Ruvia Studios.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Insight & Panduan Digital Bisnis | Ruvia Studios",
    description:
      "Kumpulan artikel, studi kasus, dan panduan teknis seputar pembuatan website, software ERP, dan strategi digital marketing dari engineer Ruvia Studios.",
    url: PAGE_URL,
  },
};

export default function InsightIndexPage() {
  const articles = getAllInsights();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Insight",
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-[var(--bg)] min-h-screen pt-28 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <header className="mb-16 text-center">
            <h1 className="text-[clamp(2.5rem,4vw+1rem,4rem)] font-extrabold leading-tight text-[var(--ink)] mb-4 tracking-tight">
              Kumpulan <span className="text-[var(--accent)]">Insight</span>
            </h1>
            <p className="text-lg text-[var(--ink-muted)] max-w-2xl mx-auto">
              Panduan jujur dan studi kasus teknis seputar digitalisasi bisnis, pembuatan website, dan pengembangan *software* dari meja *engineer* kami.
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => {
            const dateObj = new Date(article.publishedAt);
            const formattedDate = new Intl.DateTimeFormat("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(dateObj);

            return (
              <Reveal key={article.slug} delay={0.1 * idx}>
                <Link href={`/insight/${article.slug}`} className="group block h-full">
                  <article className="bg-[var(--surface)] border border-[var(--line)] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[var(--accent)] h-full flex flex-col">
                    <div className="aspect-[16/9] w-full overflow-hidden bg-[var(--surface-alt)] relative border-b border-[var(--line)]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-[var(--surface)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[var(--ink)]">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <time className="text-xs text-[var(--ink-muted)] mb-3 block font-semibold">
                        {formattedDate}
                      </time>
                      <h2 className="text-xl font-bold text-[var(--ink)] mb-3 leading-snug group-hover:text-[var(--accent)] transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-sm text-[var(--ink-muted)] leading-relaxed line-clamp-3 mb-6 flex-grow">
                        {article.description}
                      </p>
                      <div className="text-[var(--accent)] text-sm font-semibold mt-auto inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Baca Selengkapnya <span>&rarr;</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}
