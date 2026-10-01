import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getAllProjects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Menjelajahi implementasi nyata dari desain dan rekayasa perangkat lunak untuk klien Ruvia Studios.",
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 pt-32 pb-32 selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Hero Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Portofolio
            </h1>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Studi kasus dan implementasi nyata rekayasa perangkat lunak untuk menyelesaikan tantangan bisnis klien kami di Indonesia.
            </p>
          </div>
        </Reveal>

        {/* Process Timeline */}
        <Reveal delay={0.2}>
          <div className="mb-24 relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[11px] left-0 w-full h-[1px] bg-slate-800"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {/* Step 1 */}
              <div className="relative group">
                <div className="hidden md:block absolute -top-[4px] left-0 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)] transition-all duration-300 group-hover:scale-150"></div>
                <div className="text-indigo-400 font-mono text-xs font-bold tracking-widest mb-3 md:mt-8">01.</div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-white transition-colors">Research</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Analisis mendalam terhadap kebutuhan bisnis, target audiens, kompetisi, dan peluang strategis klien.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="hidden md:block absolute -top-[4px] left-0 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(129,140,248,0.8)]"></div>
                <div className="text-slate-500 font-mono text-xs font-bold tracking-widest mb-3 md:mt-8 group-hover:text-indigo-400 transition-colors">02.</div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-white transition-colors">System Design</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Pembuatan arsitektur sistem, wireframe, dan desain UI/UX interaktif yang berorientasi pada konversi.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="hidden md:block absolute -top-[4px] left-0 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(129,140,248,0.8)]"></div>
                <div className="text-slate-500 font-mono text-xs font-bold tracking-widest mb-3 md:mt-8 group-hover:text-indigo-400 transition-colors">03.</div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-white transition-colors">Development</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Proses rekayasa kode dengan standar kualitas tinggi, fleksibilitas, dan tingkat keamanan yang optimal.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative group">
                <div className="hidden md:block absolute -top-[4px] left-0 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(129,140,248,0.8)]"></div>
                <div className="text-slate-500 font-mono text-xs font-bold tracking-widest mb-3 md:mt-8 group-hover:text-indigo-400 transition-colors">04.</div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-white transition-colors">Go-Live</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Peluncuran sistem, optimasi performa infrastruktur, dan dukungan teknis berkelanjutan pasca-rilis.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={0.1 * idx} className="h-full">
              <Link href={`/portfolio/${project.slug}`} className="block h-full group">
                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-500 flex flex-col h-full">
                  
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden bg-slate-950 border-b border-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-semibold mt-3 text-slate-100 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-3 leading-relaxed line-clamp-3">
                        {project.tagline || project.challenges?.overview}
                      </p>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-800/50">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="border border-slate-700 text-slate-300 rounded-full px-3 py-1 text-xs whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
