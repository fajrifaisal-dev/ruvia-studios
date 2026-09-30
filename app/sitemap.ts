import { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { getAllProjects } from '@/lib/portfolio-data';
import { getAllInsights } from '@/lib/insight-data';


// Tanggal update terakhir per halaman (diisi manual saat ada perubahan konten)
const LAST_MODIFIED = {
  home:       new Date('2026-09-30'),
  surabaya:   new Date('2026-09-30'),
  pontianak:  new Date('2026-09-30'),
  portfolio:  new Date('2026-09-30'),
  insight:    new Date('2026-09-30'),
  contact:    new Date('2026-09-30'),
  terms:      new Date('2026-06-01'),
  privacy:    new Date('2026-06-01'),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();

  const portfolioRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${site.url}/portfolio/${p.slug}`,
    lastModified: LAST_MODIFIED.portfolio,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: LAST_MODIFIED.home,
    },
    {
      url: `${site.url}/jasa-pembuatan-website-pontianak`,
      lastModified: LAST_MODIFIED.pontianak,
    },
    {
      url: `${site.url}/jasa-pembuatan-website-surabaya`,
      lastModified: LAST_MODIFIED.surabaya,
    },
    {
      url: `${site.url}/portfolio`,
      lastModified: LAST_MODIFIED.portfolio,
    },
    {
      url: `${site.url}/insight`,
      lastModified: LAST_MODIFIED.insight,
    },
    {
      url: `${site.url}/contact`,
      lastModified: LAST_MODIFIED.contact,
    },
    {
      url: `${site.url}/terms`,
      lastModified: LAST_MODIFIED.terms,
    },
    {
      url: `${site.url}/privacy`,
      lastModified: LAST_MODIFIED.privacy,
    },
    {
      url: `${site.url}/website-salon-kecantikan-surabaya`,
      lastModified: LAST_MODIFIED.surabaya,
    },
    {
      url: `${site.url}/sistem-manajemen-logistik-surabaya`,
      lastModified: LAST_MODIFIED.surabaya,
    },
  ];

  const insightRoutes: MetadataRoute.Sitemap = getAllInsights().map((i) => ({
    url: `${site.url}/insight/${i.slug}`,
    lastModified: new Date(i.updatedAt),
  }));

  return [...staticRoutes, ...portfolioRoutes, ...insightRoutes];
}
