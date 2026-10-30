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
    slug: "sistem-ekspedisi-otomatis-hemat-biaya",
    title: "Sering Telat Update Resi? Ini Cara Sistem Ekspedisi Menghemat Ratusan Juta Rupiah",
    description: "Operasional logistik yang lambat sering kali karena sistem manual. Ketahui bagaimana otomasi manajemen armada & tracking resi menyelamatkan bisnis ekspedisi Anda.",
    publishedAt: "2026-10-06",
    updatedAt: "2026-10-06",
    author: "Ruvia Studios",
    category: "Otomatisasi Bisnis",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
<p>Dalam industri logistik dan ekspedisi, satu hari keterlambatan <em>update</em> status paket bisa berujung pada hilangnya kepercayaan ratusan pelanggan. Masalahnya, ketika skala pengiriman makin besar, sistem pencatatan manual via Excel atau WhatsApp sudah pasti akan "jebol".</p>
<p>Inilah mengapa beralih ke <strong>Sistem Manajemen Ekspedisi Otomatis</strong> bukan lagi sekadar pilihan, melainkan keharusan untuk bertahan.</p>

<h2>1. Tracking Resi Real-Time (Tanpa Perlu Ditanya)</h2>
<p><em>"Min, paket saya sampai mana?"</em> adalah pertanyaan yang paling membuang waktu CS. Dengan <em>tracking portal</em>, pelanggan cukup memasukkan nomor resi, dan sistem akan menarik data lokasi armada (GPS) atau status pergudangan secara otomatis. Waktu CS Anda akhirnya bisa dialokasikan untuk menyelesaikan komplain serius, bukan sekadar cek status.</p>

<h2>2. Perhitungan Tarif Bebas Error</h2>
<p>Menghitung volume kargo, berat aktual, asuransi, dan rute secara manual rentan menimbulkan <em>human-error</em> (kebocoran dana). Sistem yang terintegrasi memungkinkan Anda memiliki <strong>Kalkulator Ongkir Dinamis</strong> yang menghitung biaya dalam satuan milidetik begitu data di-input.</p>

<h2>3. Surat Jalan & Manifest Digital</h2>
<p>Lupakan kertas <em>manifest</em> yang sering hilang di jalan. Dengan sistem terpusat, kurir atau supir cukup memindai <em>barcode</em> melalui HP mereka, dan otomatis <em>database</em> di pusat akan ter-update. Ini mencegah terjadinya barang hilang (susut) tanpa jejak.</p>

<hr />
<p>Skalabilitas bisnis logistik sangat bergantung pada seberapa kuat tulang punggung IT-nya. Ingin memodernisasi operasional logistik Anda? <a href="/contact">Mari jadwalkan diskusi sistem bersama Ruvia Studios.</a></p>
    `,
  },
  {
    slug: "solusi-booking-salon-kecantikan",
    title: "Capek Atur Jadwal Manual? Ini Alasan Salon Anda Kehilangan Pelanggan Saat Weekend",
    description: "Antrian berantakan, pelanggan marah karena double-booking, admin sibuk balas WA. Ini saatnya salon kecantikan Anda beralih ke sistem reservasi otomatis.",
    publishedAt: "2026-10-05",
    updatedAt: "2026-10-05",
    author: "Ruvia Studios",
    category: "Solusi Industri",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
<p>Weekend adalah "masa panen" bagi bisnis klinik kecantikan, <em>nail art</em>, maupun salon. Sayangnya, banyak pemilik bisnis justru stres saat weekend tiba karena <strong>sistem penjadwalan yang berantakan</strong>.</p>
<p>Pernahkah admin Anda tidak sengaja mengiyakan 2 pelanggan di jam yang sama (<em>double booking</em>)? Atau pelanggan yang sudah <em>booking</em> ternyata tidak datang (<em>no-show</em>)? Inilah bahayanya mengandalkan chat manual.</p>

<h2>1. Sistem Booking 24 Jam (Self-Service)</h2>
<p>Dengan sistem reservasi berbasis website, pelanggan Anda bisa langsung memilih slot waktu kosong secara mandiri, meskipun saat itu jam 1 pagi. Sistem akan otomatis memblokir jam tersebut agar pelanggan lain tidak bisa memilihnya lagi. Tanpa campur tangan admin!</p>

<h2>2. Sistem Deposit untuk Mengurangi "No-Show"</h2>
<p>Banyak pelanggan nakal yang mem-<em>booking</em> tempat lalu tidak datang. Sistem website modern memungkinkan Anda menerapkan <strong>aturan deposit/DP (Down Payment)</strong> terintegrasi dengan Payment Gateway (seperti QRIS). Jika tidak bayar DP dalam 1 jam, reservasi otomatis batal.</p>

<h2>3. Pengingat Jadwal (Automated Reminder)</h2>
<p>Alih-alih menyuruh admin mem-*follow-up* jadwal besok, sistem akan mengirimkan notifikasi otomatis via WhatsApp atau Email kepada pelanggan (misal: H-1 sebelum jadwal <em>treatment</em>).</p>

<hr />
<p>Kenyamanan pelanggan berawal dari kemudahan mereka membuat janji. Jangan biarkan salon Anda kalah saing karena operasional yang usang. <a href="/contact">Ruvia Studios siap merancang sistem booking elegan untuk bisnis Anda!</a></p>
    `,
  },
  {
    slug: "efisiensi-website-vs-chat",
    title: "Admin Anda Kewalahan Balas Chat WhatsApp? Ini Cara Website Menghemat Ratusan Jam Kerja",
    description: "Sering merasa waktu habis cuma buat balas chat 'Kak, harganya berapa?' atau 'Lokasi di mana?'. Bayangkan kalau semua info itu sudah ada di website. Customer tinggal baca, admin tinggal proses order.",
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    author: "Ruvia Studios",
    category: "Otomatisasi Bisnis",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
<p>Sering merasa waktu admin Anda habis hanya untuk membalas chat <em>"Kak, harganya berapa?"</em> atau <em>"Lokasi tokonya di mana?"</em> 🤯</p>
<p>Sebagai pemilik bisnis, Anda tahu persis bahwa menjawab pertanyaan yang sama berulang-ulang sangat menguras energi, tidak efisien, dan bisa membuat calon pelanggan kabur jika admin membalas terlalu lama.</p>
<p>Di sinilah peran <strong>Website</strong> masuk untuk mentransformasi cara bisnis Anda beroperasi.</p>

<h2>1. Website Bekerja 24/7 Tanpa UMR</h2>
<p>Admin manusia punya jam kerja, butuh istirahat, dan bisa kelelahan. Sementara website Anda beroperasi 24 jam sehari, 7 hari seminggu. Ketika pelanggan Anda tiba-tiba teringat produk Anda di jam 2 pagi, mereka bisa langsung masuk ke website, melihat katalog, dan membaca informasi lengkap tanpa harus menunggu balasan chat besok paginya.</p>

<h2>2. FAQ dan Pricelist yang Selalu Ter-update</h2>
<p>Berapa ratus kali admin Anda harus mengirim ulang gambar daftar harga (pricelist) di WhatsApp? Dengan website, Anda hanya perlu mengarahkan pelanggan ke satu link. Semua informasi harga, garansi, syarat dan ketentuan, hingga pertanyaan umum (FAQ) sudah tertulis rapi. <em>Customer</em> tinggal baca, dan admin Anda tinggal memproses orderan yang sudah <em>deal</em>.</p>

<h2>3. Kredibilitas Bisnis Langsung Meroket</h2>
<p>Bisnis yang hanya menggunakan WhatsApp sering kali dianggap sebagai bisnis skala kecil atau rumahan. Ketika Anda memberikan link <code>www.perusahaananda.com</code>, calon pelanggan—terutama klien B2B—akan langsung menaruh <em>trust</em> (kepercayaan) yang jauh lebih tinggi. Mereka tahu Anda serius dalam berbisnis.</p>

<h2>4. Menyaring "Tanya-Tanya Doang" vs Pembeli Serius</h2>
<p>Ini adalah rahasia terbesar mengapa bisnis modern wajib punya website. Website berfungsi sebagai filter otomatis. Orang yang hanya ingin "tanya-tanya doang" akan membaca informasi di website lalu pergi. Sedangkan mereka yang akhirnya menghubungi WhatsApp admin adalah <strong>pembeli yang sudah teredukasi (warm leads)</strong> dan siap melakukan transaksi.</p>

<hr />

<p><strong>Bayangkan kalau semua informasi dasar sudah ada di website. Lebih efisien, kan?</strong></p>
<p>Jangan biarkan waktu berharga tim Anda habis untuk rutinitas yang bisa diotomatisasi. Di <strong>Ruvia Studios</strong>, kami membantu mewujudkan website profesional yang bekerja 24/7 sebagai garda depan bisnis Anda.</p>
<p><a href="/contact">Konsultasikan kebutuhan website Anda secara gratis sekarang!</a></p>
    `,
  },
  {
    slug: "biaya-pembuatan-website-surabaya",
    title: "Biaya Pembuatan Website di Surabaya (2026): Jangan Sampai Tertipu Harga Murah",
    description:
      "Panduan lengkap dan jujur mengenai komponen biaya pembuatan website di Surabaya untuk perusahaan dan UMKM agar investasi digital Anda tidak boncos.",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    author: "Ruvia Studios",
    category: "Panduan Bisnis",
    image: "/asset-porto/corporate_showcase.png",
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
