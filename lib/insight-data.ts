export interface InsightArticle {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  category: string;
  image: string;
  content: string; // Markdown or HTML string
}

export const insights: InsightArticle[] = [
  {
    slug: "biaya-pembuatan-website-surabaya",
    title: "Biaya Pembuatan Website di Surabaya (2026): Jangan Sampai Tertipu Harga Murah",
    description:
      "Panduan lengkap dan jujur mengenai komponen biaya pembuatan website di Surabaya untuk perusahaan dan UMKM agar investasi digital Anda tidak boncos.",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    author: "Ruvia Studios",
    category: "Panduan Bisnis",
    image: "/brand/ruvia-og-cover.jpg",
    content: `
<p>Banyak pelaku bisnis di Surabaya tergiur dengan iklan "Jasa Pembuatan Website Rp300.000 Terima Beres". Pertanyaannya, apakah website tersebut benar-benar bisa mendatangkan omzet, atau sekadar brosur digital yang tidak pernah dikunjungi siapa pun?</p>
<p>Dalam artikel ini, kami selaku <em>software engineer</em> yang beroperasi di Surabaya akan membongkar struktur biaya pembuatan website secara transparan, agar Anda tidak salah pilih vendor.</p>

<h2>1. Komponen Biaya Wajib (Domain &amp; Hosting)</h2>
<p>Ini adalah biaya sewa properti digital Anda. Tanpa ini, website tidak bisa hidup di internet.</p>
<ul>
  <li><strong>Nama Domain (.com atau .id)</strong>: Rp150.000 &ndash; Rp300.000 / tahun.</li>
  <li><strong>Hosting / Server</strong>: Tergantung pengunjung. Mulai dari Rp400.000 / tahun untuk website biasa, hingga jutaan rupiah untuk <em>cloud server</em> skala sistem ERP.</li>
</ul>
<p><strong>Tip:</strong> Selalu pastikan domain didaftarkan atas nama Anda (perusahaan Anda), bukan atas nama developer. Jika didaftarkan atas nama developer dan dia kabur, Anda bisa kehilangan website Anda sepenuhnya.</p>

<h2>2. Jasa Desain &amp; UI/UX</h2>
<p>Website yang terlihat usang (desain tahun 2010-an) akan menurunkan kredibilitas perusahaan Anda. Biaya jasa desain sangat bervariasi:</p>
<ul>
  <li><strong>Template Jadi / Murahan</strong>: Gratis hingga Rp500.000. (Risiko: website Anda akan terlihat persis sama dengan ribuan website kompetitor).</li>
  <li><strong>Desain Kustom &amp; Premium</strong>: Rp1.000.000 &ndash; Rp5.000.000+. Di sini desainer meriset warna brand Anda, menyesuaikan <em>micro-interaction</em>, dan memastikan navigasi nyaman di HP.</li>
</ul>

<h2>3. Fitur Spesifik (Fungsionalitas)</h2>
<p>Makin rumit fiturnya, makin mahal harganya karena membutuhkan jam kerja <em>programmer</em> yang lebih banyak.</p>
<ul>
  <li><strong>Company Profile Biasa</strong>: Tidak ada penambahan biaya besar.</li>
  <li><strong>Sistem Booking/Reservasi</strong>: Rp3.000.000 &ndash; Rp10.000.000+.</li>
  <li><strong>Sistem ERP / Logistik Custom</strong>: Mulai belasan hingga puluhan juta rupiah.</li>
</ul>

<h2>4. SEO &amp; Copywriting (Mesin Pencari)</h2>
<p>Website yang bagus percuma jika tidak ada pengunjungnya. <em>Copywriting</em> (penulisan teks jualan) dan <em>SEO (Search Engine Optimization)</em> adalah nyawa agar website Anda muncul di halaman pertama Google saat orang di Surabaya mencari produk Anda.</p>
<ul>
  <li><strong>Vendor Murah</strong>: Menyuruh Anda menulis teks sendiri. "Silakan kirimkan materi PDF-nya, nanti saya <em>copy-paste</em>".</li>
  <li><strong>Vendor Profesional</strong>: Membantu merumuskan <em>angle</em> tulisan, memasang meta deskripsi yang tepat, serta menyuntikkan <em>Structured Data</em> agar struktur SEO-nya disukai Google. Biayanya sudah <em>include</em> di harga premium mereka.</li>
</ul>

<h2>Mengapa Ruvia Studios Menetapkan Harga Mulai Rp1.000.000?</h2>
<p>Di <strong>Ruvia Studios</strong>, Paket Starter Rp1.000.000 bukan sekadar <em>install template</em>. Kami:</p>
<ol>
  <li>Menyusun struktur web yang lulus performa Core Web Vitals (Super cepat).</li>
  <li>Membantu struktur copywriting agar meyakinkan pengunjung.</li>
  <li>Menyediakan Domain &amp; Hosting yang aman selama 1 tahun penuh.</li>
  <li>Memberikan pendampingan langsung via WhatsApp tanpa perantara <em>sales</em>.</li>
</ol>
<p>Jangan mengorbankan wajah perusahaan Anda hanya demi selisih harga beberapa ratus ribu. Investasikan ke <em>software engineer</em> yang mengerti cara mendatangkan penjualan.</p>
<p>Tertarik membuat website profesional di Surabaya? <a href="/contact">Hubungi Ruvia Studios sekarang</a>.</p>
    `,
  },
];

export function getAllInsights(): InsightArticle[] {
  return insights.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((article) => article.slug === slug);
}
