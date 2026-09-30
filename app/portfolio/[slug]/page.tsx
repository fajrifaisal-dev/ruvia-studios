import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/portfolio-data";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: "Portfolio Not Found",
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} - Ruvia Studios Case Study`,
      description: project.tagline,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const waMessage = encodeURIComponent(
    `Halo Ruvia Studios, saya tertarik mendiskusikan proyek serupa dengan ${project.title}. Boleh minta jadwal konsultasinya?`
  );

  return (
    <div className="bg-[var(--ink)] min-h-screen text-white pt-28 pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Top Header / Breadcrumb */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-12 text-sm text-gray-400">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-[var(--accent)] font-semibold transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> PORTOFOLIO
            </Link>
            <div className="flex items-center gap-4 uppercase tracking-widest text-xs font-medium">
              <span className="text-[var(--accent)] font-bold">{project.category}</span>
              <span className="text-white/20">•</span>
              <span>{project.year}</span>
            </div>
          </div>
        </Reveal>

        {/* Hero Title & Summary */}
        <Reveal delay={0.1}>
          <div className="mb-16">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 font-jakarta leading-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-6">
              {project.tagline}
            </p>
            {project.demoUrl && (
              <div className="pt-2">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[var(--accent)] hover:bg-[#6350e6] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-indigo-500/25 text-sm hover:scale-105"
                >
                  <span>Lihat Live Demo Website</span>
                  <span className="text-base">↗</span>
                </a>
              </div>
            )}
          </div>
        </Reveal>

        {/* Grid Layout: Sidebar Left (4 cols) & Main Content Right (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 border-t border-white/10">
          {/* Left Sidebar Metadata */}
          <div className="lg:col-span-4 space-y-10">
            <Reveal delay={0.2}>
              <div className="space-y-8 bg-white/[0.03] p-8 rounded-3xl border border-white/10">
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">KLIEN</div>
                  <div className="text-lg font-bold text-white mb-1">{project.sidebar.clientDetail}</div>
                  <div className="text-sm text-gray-400">{project.sidebar.location}</div>
                </div>

                {project.demoUrl && (
                  <div className="border-t border-white/10 pt-6">
                    <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">LIVE DEMO URL</div>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-white transition-colors underline underline-offset-4"
                    >
                      <span>Buka Live Demo di Tab Baru</span>
                      <span>↗</span>
                    </a>
                  </div>
                )}

                <div className="border-t border-white/10 pt-6">
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">KATEGORI</div>
                  <div className="text-base font-semibold text-white mb-1">{project.sidebar.categoryDetail}</div>
                  <div className="text-sm text-[var(--accent)]">{project.sidebar.positioning}</div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">TEKNOLOGI</div>
                  <div className="flex flex-wrap gap-2">
                    {project.sidebar.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1.5 bg-white/10 text-gray-200 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">TONE & POSITIONING</div>
                  <div className="text-sm text-gray-300 leading-relaxed italic">{project.sidebar.tone}</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Main Article Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section Tantangan */}
            <Reveal delay={0.3}>
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white font-jakarta flex items-center gap-3">
                  <span className="w-2 h-8 bg-[var(--accent)] rounded-full inline-block"></span>
                  Tantangan
                </h2>
                <p className="text-gray-300 leading-relaxed text-base">
                  {project.challenges.overview}
                </p>
                <ul className="space-y-4 pt-2">
                  {project.challenges.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                      <span className="text-red-400 font-bold text-lg mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            {/* Section Solusi & Pendekatan */}
            <Reveal delay={0.4}>
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white font-jakarta flex items-center gap-3">
                  <span className="w-2 h-8 bg-emerald-400 rounded-full inline-block"></span>
                  Solusi & Pendekatan
                </h2>
                <p className="text-gray-300 leading-relaxed text-base">
                  {project.solutions.overview}
                </p>
                <ul className="space-y-4 pt-2">
                  {project.solutions.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                      <span className="text-emerald-400 font-bold text-lg mt-0.5">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            {/* Section Visual Showcase */}
            <Reveal delay={0.5}>
              <section className="space-y-4">
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">PROJECT SHOWCASE</div>
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 group">
                  <img
                    src={project.showcase.image}
                    alt={project.title}
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                </div>
                <p className="text-xs text-gray-400 italic text-center pt-2">{project.showcase.caption}</p>
              </section>
            </Reveal>

            {/* Section Scope Demo */}
            <Reveal delay={0.6}>
              <section className="space-y-8 bg-white/[0.02] p-8 sm:p-10 rounded-3xl border border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white font-jakarta mb-3">Scope Demo & Fitur Fungsional</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.scopeDemo.overview}</p>
                  <ul className="space-y-3">
                    {project.scopeDemo.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-200 text-sm">
                        <span className="text-[var(--accent)] font-bold">➜</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.scopeDemo.outOfScope.length > 0 && (
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">Di Luar Scope (Fase Lanjutan)</h4>
                    <ul className="space-y-2">
                      {project.scopeDemo.outOfScope.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-400 text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            </Reveal>
          </div>
        </div>

        {/* Bottom Call to Action Section */}
        <Reveal delay={0.7}>
          <div className="mt-28 bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-purple-900/30 rounded-3xl p-10 sm:p-16 border border-white/10 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-jakarta tracking-tight">
                Kolaborasi bersama kami
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Kami merancang website dan aplikasi yang tidak hanya cantik secara visual, tetapi juga kuat secara performa dan bisnis.
              </p>
              <div className="pt-4">
                <a
                  href={`https://wa.me/${site.whatsapp.number}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-xl text-base"
                >
                  Diskusikan Kebutuhan Anda
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
