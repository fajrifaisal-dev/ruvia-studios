import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getInsightBySlug, getAllInsights } from "@/lib/insight-data";
import { Reveal } from "@/components/ui/Reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllInsights();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  
  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  const pageUrl = `${site.url}/insight/${slug}`;

  return {
    title: `${article.title} | Ruvia Studios Insight`,
    description: article.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: article.title,
      description: article.description,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const pageUrl = `${site.url}/insight/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: site.url },
          { "@type": "ListItem", position: 2, name: "Insight", item: `${site.url}/insight` },
          { "@type": "ListItem", position: 3, name: article.title, item: pageUrl },
        ],
      },
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        image: `${site.url}${article.image}`,
        author: {
          "@type": "Organization",
          name: article.author,
          url: site.url,
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          logo: {
            "@type": "ImageObject",
            url: `${site.url}/brand/ruvia-icon.svg`,
          },
        },
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
      },
    ],
  };

  // Format tanggal ke bahasa Indonesia
  const dateObj = new Date(article.publishedAt);
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateObj);

  return (
    <main className="bg-[var(--bg)] min-h-screen pt-28 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-3xl px-5 sm:px-8 pt-4 pb-8 text-xs text-[var(--ink-muted)]"
      >
        <ol className="flex items-center flex-wrap gap-1.5">
          <li>
            <Link href="/" className="hover:text-[var(--accent)] transition-colors">
              Beranda
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/insight" className="hover:text-[var(--accent)] transition-colors">
              Insight
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-semibold text-[var(--ink)] truncate max-w-[200px] sm:max-w-xs">
            {article.title}
          </li>
        </ol>
      </nav>

      <article className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <header className="mb-10 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--line)] text-xs font-semibold text-[var(--ink)] mb-6">
              {article.category}
            </div>
            <h1 className="text-[clamp(1.8rem,3vw+1rem,3rem)] font-extrabold leading-tight text-[var(--ink)] mb-6">
              {article.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-[var(--ink-muted)]">
              <span>Oleh <span className="font-semibold text-[var(--ink)]">{article.author}</span></span>
              <span>•</span>
              <time dateTime={article.publishedAt}>{formattedDate}</time>
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl overflow-hidden border border-[var(--line)] shadow-lg mb-12 aspect-[21/9] relative">
            <Image 
              src={article.image} 
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div 
            className="
              article-content max-w-none text-base leading-relaxed text-[var(--ink-muted)]
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-[var(--ink)] [&>h2]:tracking-tight
              [&>p]:mb-6
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul]:space-y-2
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol]:space-y-2
              [&_strong]:text-[var(--ink)]
              [&_a]:text-[var(--accent)] [&_a]:font-medium hover:[&_a]:underline
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </Reveal>
      </article>
      
      {/* CTA Bottom */}
      <section className="mx-auto max-w-3xl px-5 sm:px-8 mt-20 pt-10 border-t border-[var(--line)]">
        <div className="bg-[var(--surface-alt)] p-8 sm:p-10 rounded-3xl border border-[var(--line)] text-center">
          <h3 className="text-2xl font-bold mb-3">Butuh Bantuan Mewujudkan Website Bisnis Anda?</h3>
          <p className="text-[var(--ink-muted)] mb-8">
            Diskusikan kebutuhan teknis Anda langsung dengan Software Engineer kami. Gratis tanpa komitmen.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center h-14 px-8 text-base bg-[var(--accent-strong)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-xl shadow-lg transition-colors">
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </main>
  );
}
