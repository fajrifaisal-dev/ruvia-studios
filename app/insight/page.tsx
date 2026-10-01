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
    <main className="bg-white min-h-screen pt-32 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        
        {/* Editorial Header */}
        <Reveal>
          <header className="mb-20 md:mb-28 border-b border-gray-200 pb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              Insight &amp; Panduan.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
              Pemikiran, studi kasus, dan panduan teknis seputar rekayasa perangkat lunak dan strategi digital dari tim *engineer* kami.
            </p>
          </header>
        </Reveal>

        {/* Minimalist Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {articles.map((article, idx) => {
            const dateObj = new Date(article.publishedAt);
            const formattedDate = new Intl.DateTimeFormat("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(dateObj);

            // Make the first article span full width if desired, but a 2-col grid is very clean.
            return (
              <Reveal key={article.slug} delay={0.1 * idx}>
                <Link href={`/insight/${article.slug}`} className="group block">
                  <article className="flex flex-col h-full">
                    
                    {/* Image Container (No rounded borders or shadows for a raw, editorial feel) */}
                    <div className="aspect-[4/3] w-full relative overflow-hidden bg-gray-100 mb-6">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 mb-4 uppercase tracking-widest">
                      <span className="text-indigo-600">{article.category}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <time>{formattedDate}</time>
                    </div>
                    
                    {/* Title - Using h3 to avoid global h2 sizing conflicts */}
                    <h3 className="!text-2xl md:!text-3xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-indigo-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                    
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
