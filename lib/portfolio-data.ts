export interface PortfolioProject {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tagline: string;
  image: string;
  tags: string[];
  projectStatus: "Proyek Klien (Real Case)" | "Prototipe Internal" | "Demo Konsep";
  sidebar: {
    clientDetail: string;
    location: string;
    categoryDetail: string;
    positioning: string;
    techStack: string[];
    tone: string;
  };
  challenges: {
    overview: string;
    points: string[];
  };
  solutions: {
    overview: string;
    points: string[];
  };
  showcase: {
    caption: string;
    image: string;
  };
  demoUrl?: string;
  scopeDemo: {
    overview: string;
    points: string[];
    outOfScope: string[];
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "hello-friday",
    title: "Hello Friday",
    client: "Hello Friday Studio",
    category: "Beauty & Wellness Digital Platform",
    year: "2026",
    tagline: "Platform digital premium untuk beauty & wellness berkonsep slow living dengan alur reservasi instan dan pencarian multi-cabang.",
    image: "/asset-porto/hello-friday-booking-surabaya.jpg",
    tags: ["Dark Mode UI", "Multi-Branch Search", "Instant Booking", "Slow Living Concept"],
    projectStatus: "Proyek Klien (Real Case)",
    demoUrl: "https://whimsical-stardust-cde28a.netlify.app/",
    sidebar: {
      clientDetail: "Hello Friday Studio (Est. 2018)",
      location: "Surabaya (Dharmawangsa) & Malang",
      categoryDetail: "Salon Kecantikan & Dental Studio Terintegrasi",
      positioning: "Karena cantik natural itu beda, slow living life",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WhatsApp API"],
      tone: "Eksklusif, Menenangkan, Premium Dark Mode, Frictionless",
    },
    challenges: {
      overview: "Hello Friday memiliki traksi organik yang sangat kuat di Instagram (~15K Followers, 1.3K+ Posts), namun alur reservasi operasional mereka 100% masih bergantung pada proses chat manual yang tidak efisien:",
      points: [
        "Link di bio mengarah ke Linktree berisi 3 nomor admin WA terpisah (Admin Malang, Admin Surabaya & Dental, Admin Surabaya 2), memicu kebingungan calon pelanggan.",
        "Tidak ada validasi ketersediaan slot otomatis sehingga rawan terjadi bentrok jadwal (double-booking) dan membutuhkan waktu konfirmasi lama.",
        "Pelanggan tidak memiliki akses self-service untuk sekadar melihat ketersediaan jam kosong tanpa harus melakukan chat admin terlebih dahulu.",
        "Belum terindeks secara optimal di Google Search, hanya bergantung penuh pada jangkuan organik Instagram dan Google My Business.",
      ],
    },
    solutions: {
      overview: "Ruvia Studios merancang ulang ekosistem digital Hello Friday dengan portal terpusat berkonsep slow living yang elegan dan tanpa hambatan (frictionless):",
      points: [
        "Sistem Booking Self-Service Interaktif: Pelanggan memilih cabang (Surabaya/Malang) -> jenis layanan -> tanggal -> slot jam yang tersedia secara langsung.",
        "Menggantikan Linktree dan 3 nomor admin terpisah menjadi 1 tautan profesional terpusat berdomain resmi.",
        "Arsitektur Web SEO-Optimized untuk menangkap pencarian organik kata kunci seperti 'Eyelash Surabaya' atau 'Lashlift Malang' di Google.",
        "Antarmuka eksklusif tema Dark Mode yang menonjolkan suasana ambience studio yang menenangkan.",
      ],
    },
    showcase: {
      caption: "Tampilan visual antarmuka Hello Friday dengan katalog layanan terintegrasi dan pemilih slot reservasi real-time.",
      image: "/asset-porto/hello-friday-booking-surabaya.jpg",
    },
    scopeDemo: {
      overview: "Scope pekerjaan prototipe & demo fungsional yang dikembangkan pada fase ini mencakup:",
      points: [
        "Landing page 1 halaman dengan alur navigasi lengkap (Hero, Katalog Layanan, Galeri Ambience Studio, Lokasi & Jam Operasional, Booking Section).",
        "Booking Form Interaktif (Mockup UI): Slot jam berubah otomatis sesuai cabang yang dipilih (Surabaya/Malang) dan indikator slot penuh ditampilkan disabled.",
        "Integrasi visual representatif berkonsep slow living dengan copy deskriptif tanpa mengklaim aset proprietary klien.",
        "Tombol aksi langsung terhubung ke saluran WhatsApp konfirmasi instan.",
      ],
      outOfScope: [
        "Backend database reservasi real-time & sinkronisasi kalender dokter/beautician.",
        "Integrasi payment gateway untuk DP otomatis via QRIS (direncanakan pada Fase 2).",
        "CMS/Admin Panel untuk pengelolaan inventaris & penjadwalan mandiri.",
      ],
    },
  },
  {
    slug: "kazi-nail-beauty-bar",
    title: "Kazi - Nail Beauty Bar",
    client: "Kazi Beauty Network",
    category: "Outlet Locator & Dynamic Price List",
    year: "2026",
    tagline: "Website interaktif untuk jaringan spesialis Nail Art terjangkau di 15+ lokasi coffee shop & co-working space se-Jawa.",
    image: "/asset-porto/kazi-nail-outlet-locator.jpg",
    tags: ["Playful UI", "Outlet Finder", "Dynamic Price List", "Coffee Shop Integration"],
    projectStatus: "Proyek Klien (Real Case)",
    demoUrl: "https://kazi.ruviastudios.site/",
    sidebar: {
      clientDetail: "Kazi Nail Beauty Bar (4.4K+ IG Followers)",
      location: "15+ Outlet (Malang, Surabaya, Sidoarjo, Madura, Mojokerto, Jember, Banyuwangi, Jogja)",
      categoryDetail: "Kecantikan & Nail Art Spesialis (Model Titip Tempat)",
      positioning: "Spesialis Nail Art Murah, Playful & Energik di Coffee Shop",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "WhatsApp Router"],
      tone: "Affordable, Playful, Bright & Energik, Fast-Paced",
    },
    challenges: {
      overview: "Kazi memiliki model bisnis unik yaitu menempatkan booth di dalam coffee shop/co-working space terkemuka. Namun penyampaian informasi lokasi dan harga memiliki kendala operasional:",
      points: [
        "Informasi lokasi 15+ outlet dan status buka/tutup hanya di-update melalui Instagram Story manual yang hilang dalam 24 jam.",
        "Pelanggan baru mengalami ketidakpastian dalam menemukan lokasi outlet terdekat dari kotanya karena informasi alamat tersebar acak.",
        "Price list dan penawaran promo berkala (diskon 25%, extension promo) tersebar di postingan feed lama sehingga sulit dipantau.",
        "Tidak ada satu portal resmi rujukan yang menampilkan alamat detail coffee shop mitra tempat Kazi beroperasi.",
      ],
    },
    solutions: {
      overview: "Kami menghadirkan web portal interaktif bergaya cerah dan energik yang berfokus pada kemudahan pencarian lokasi dan kejelasan tarif:",
      points: [
        "Instant Outlet Locator: Pelanggan dapat menyaring berdasarkan kota (Surabaya, Malang, Jogja, dll) untuk menemukan nama coffee shop & peta lokasi instan.",
        "Katalog Harga & Highlight Promo Terpusat: Menyajikan price list lengkap up-to-date (Extension Cat Eye Rp85k, Extension Polos Rp75k, dll).",
        "Indikator Status Outlet Real-Time: Label status jelas untuk outlet (Buka, Open Soon, atau Close Temporary) guna mencegah salah kunjungan.",
        "Preservasi Pembagian Kontak WA Terstruktur: Mempertahankan 4 kanal WA khusus (Reservasi, Kritik/Saran, Event, & Kolaborasi).",
      ],
    },
    showcase: {
      caption: "Showcase antarmuka Kazi dengan fitur pencari outlet coffee shop mitra dan price list transparan.",
      image: "/asset-porto/kazi-nail-outlet-locator.jpg",
    },
    scopeDemo: {
      overview: "Scope implementasi untuk demo interaktif Kazi Nail Beauty Bar:",
      points: [
        "Landing page 1 halaman responsif: Hero visual energik, Filter Kota Outlet, Katalog Price List & Promo, dan CTA Reservasi WA.",
        "Outlet Locator Interaktif berbasis data statis 15+ cabang mitra (Koat Kopi, Tomoro, Komu Space, Lussid Coffee, dll).",
        "Penyusunan alur kontak terpisah sesuai fungsi operasional bisnis Kazi.",
      ],
      outOfScope: [
        "Sinkronisasi database outlet real-time berbasis lokasi GPS pengguna.",
        "Sistem booking slot jam (konsep Kazi berfokus pada walk-in & reservasi lokasi terdekat).",
        "Sistem voucher & kalkulator diskon otomatis.",
      ],
    },
  },
  {
    slug: "custom-erp-supply-chain",
    title: "Custom ERP & Supply Chain",
    client: "PT Lintas Samudera Jaya Express (LSJ)",
    category: "Enterprise System & Operations",
    year: "2026",
    tagline: "Sistem manajemen sumber daya perusahaan terpadu untuk efisiensi inventaris, alur kerja operasional, dan otomatisasi laporan keuangan.",
    image: "/asset-porto/Gemini_Generated_Image_onf9fuonf9fuonf9.jpg",
    tags: ["Enterprise ERP", "Inventory Control", "Financial Reports", "Role Management"],
    projectStatus: "Proyek Klien (Real Case)",
    sidebar: {
      clientDetail: "PT Lintas Samudera Jaya Express (LSJ)",
      location: "Surabaya & Jakarta",
      categoryDetail: "Sistem Informasi Manajemen Operasional & Logistik Ekspedisi",
      positioning: "Efisiensi Operasional Terpusat & Real-time Analytics",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Recharts"],
      tone: "Profesional, High-Security, Data-Dense, Analytical",
    },
    challenges: {
      overview: "Klien menghadapi fragmentasi data antar gudang dan cabang yang menyebabkan keterlambatan pencatatan keuangan dan selisih stok:",
      points: [
        "Rekapitulasi stok barang antar gudang masih dilakukan via spreadsheet terpisah.",
        "Proses persetujuan pembelian (procurement) memakan waktu lama karena kurangnya transparansi alur kerja.",
        "Laporan laba rugi bulanan membutuhkan waktu rekap hingga 2 minggu.",
      ],
    },
    solutions: {
      overview: "Mengembangkan platform ERP kustom yang disesuaikan secara presisi dengan alur bisnis unik klien:",
      points: [
        "Dashboard pemantauan stok multi-gudang secara real-time dengan notifikasi batas minimum inventaris.",
        "Modul persetujuan (approval flow) berjenjang berbasis peran akun (Role-Based Access Control).",
        "Generator laporan keuangan otomatis yang terintegrasi dengan catatan transaksi harian.",
      ],
    },
    showcase: {
      caption: "Tampilan dashboard analitik utama ERP dengan grafik arus kas dan pelacakan persediaan barang.",
      image: "/asset-porto/erp_showcase.png",
    },
    scopeDemo: {
      overview: "Fitur utama yang diimplementasikan pada studi kasus ini:",
      points: [
        "Dashboard overview keuangan dan statistik penjualan harian.",
        "Modul tabel manajemen inventaris dengan penyaringan data cepat.",
        "Pratinjau struktur alur persetujuan transaksi.",
      ],
      outOfScope: [
        "Integrasi hardware barcode scanner fisik.",
        "Modul perpajakan lokal otomatis (e-Faktur API).",
      ],
    },
  },
  {
    slug: "logistics-freight-tracking",
    title: "Logistics & Freight Tracking",
    client: "Ruvia Concept Lab",
    category: "Logistics & Fleet Management",
    year: "2026",
    tagline: "Landing page interaktif & portal pelacakan armada pengiriman barang real-time dengan kalkulator tarif otomatis.",
    image: "/asset-porto/Gemini_Generated_Image_onf9fuonf9fuonf9.jpg",
    tags: ["Real-time Tracking", "Rate Calculator", "Fleet Management", "Interactive Map"],
    projectStatus: "Demo Konsep",
    demoUrl: "https://delicate-panda-55fe47.netlify.app/",
    sidebar: {
      clientDetail: "Ruvia Concept Lab (Demo Showcase)",
      location: "Indonesia",
      categoryDetail: "Transportasi & Ekspedisi Kargo (Demo Konsep)",
      positioning: "Kecepatan, Transparansi Tarif, & Pelacakan Presisi",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Mapbox API", "WebSocket"],
      tone: "Moderen, High-Tech, Trusted, Dynamic",
    },
    challenges: {
      overview: "Pelanggan kargo sering kesulitan melacak posisi resi pengiriman dan menghitung estimasi biaya pengiriman secara mandiri:",
      points: [
        "Layanan customer service kewalahan melayani pertanyaan status pengiriman barang.",
        "Kalkulasi biaya pengiriman kargo berat membutuhkan konfirmasi manual via telepon.",
      ],
    },
    solutions: {
      overview: "Ruvia Studios membangun portal logistik berkecepatan tinggi dengan fitur mandiri bagi pengguna:",
      points: [
        "Fitur Cek Resi Instan dengan estimasi waktu tiba (ETA) dan status perjalanan armada.",
        "Kalkulator Tarif Otomatis berbasis volume (CBM) dan berat kargo.",
        "Design sistem yang responsif dan siap diakses dari perangkat mobile petugas di lapangan.",
      ],
    },
    showcase: {
      caption: "Showcase antarmuka pelacakan kargo udara & laut beserta fitur kalkulator estimasi biaya.",
      image: "/asset-porto/Gemini_Generated_Image_onf9fuonf9fuonf9.jpg",
    },
    scopeDemo: {
      overview: "Fitur yang dihadirkan dalam demo ini:",
      points: [
        "Formulir input resi interaktif dengan dummy status timeline pengiriman.",
        "Kalkulator hitung cepat estimasi ongkir berdasarkan berat dan asal-tujuan.",
        "Visualisasi landing page korporat ekspedisi.",
      ],
      outOfScope: [
        "Integrasi sensor GPS kendaraan aktual.",
        "Sistem cetak resi thermal otomatis.",
      ],
    },
  },
  {
    slug: "executive-company-profile",
    title: "Executive Company Profile",
    client: "Ruvia Design Showcase",
    category: "Corporate & Investment Portal",
    year: "2026",
    tagline: "Company profile premium dengan animasi mikro modern, integrasi katalog produk, dan formulir konsultasi instan.",
    image: "/asset-porto/corporate_showcase.png",
    tags: ["Interactive UI", "Brand Identity", "Lead Generation", "Executive Design"],
    projectStatus: "Demo Konsep",
    sidebar: {
      clientDetail: "Ruvia Corporate Showcase",
      location: "Jakarta & Surabaya",
      categoryDetail: "Investasi & Konsultan Bisnis Korporat",
      positioning: "Kepercayaan Eksklusif & Portofolio Investasi Berkelas",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      tone: "Mewah, Minimalis, Prestisius, High-Convert",
    },
    challenges: {
      overview: "Perusahaan memerlukan pembaruan identitas digital untuk meningkatkan kredibilitas di hadapan investor institusional:",
      points: [
        "Website lama terasa kaku, lambat diakses, dan tidak mencerminkan skala bisnis perusahaan.",
        "Tidak ada alur konversi leads yang jelas untuk calon mitra investasi.",
      ],
    },
    solutions: {
      overview: "Menghadirkan profil perusahaan tingkat eksekutif dengan estetika visual kelas atas:",
      points: [
        "Tipografi modern dan tata letak dinamis yang memberikan kesan kokoh dan tepercaya.",
        "Animasi mikro halus saat scroll yang mempertahankan engagement pengunjung.",
        "Formulir reservasi diskusi privat yang langsung terhubung ke email tim eksekutif.",
      ],
    },
    showcase: {
      caption: "Desain berkelas landing page executive company profile dengan fokus pada trust building.",
      image: "/asset-porto/corporate_showcase.png",
    },
    scopeDemo: {
      overview: "Cakupan prototipe company profile:",
      points: [
        "Halaman beranda eksekutif dengan section milestone perusahaan.",
        "Katalog layanan investasi interaktif.",
        "Formulir konsultasi lead generation.",
      ],
      outOfScope: [
        "Portal investor privat (investor portal login).",
      ],
    },
  },
  {
    slug: "smart-crm-client-portal",
    title: "Smart CRM & Client Portal",
    client: "Ruvia Internal Lab",
    category: "SaaS & Client Management",
    year: "2026",
    tagline: "Platform CRM terpusat untuk memantau siklus pelanggan, pipeline penjualan, dan manajemen tiket dukungan layanan.",
    image: "/asset-porto/crm_showcase.png",
    tags: ["Sales Pipeline", "Customer Insights", "Ticket Management", "Dark Mode SaaS"],
    projectStatus: "Prototipe Internal",
    sidebar: {
      clientDetail: "Ruvia Internal Lab (Demo Project)",
      location: "Surabaya & Remote",
      categoryDetail: "Software SaaS Manajemen Pelanggan (Internal Prototype)",
      positioning: "Visibilitas Deal Penjualan & Retensi Pelanggan Maksimal",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      tone: "Futuristik, Produktif, Intuitif, Modern UI",
    },
    challenges: {
      overview: "Tim sales dan dukungan pelanggan kesulitan melacak status deal karena riwayat percakapan yang tersebar di berbagai platform:",
      points: [
        "Proses tindak lanjut (follow-up) prospek sering terlewat.",
        "Sulit melihat statistik tingkat konversi dari setiap tahap funnel penjualan.",
      ],
    },
    solutions: {
      overview: "Membangun platform Smart CRM terpadu dengan tampilan papan Kanban pipeline interaktif:",
      points: [
        "Visualisasi Kanban Pipeline untuk menyeret (drag-and-drop) status kelanjutan deal.",
        "Pencatatan otomatis histori komunikasi dan catatan aktivitas pelanggan.",
        "Dashboard analitik performa individu anggota tim sales.",
      ],
    },
    showcase: {
      caption: "Tampilan interface papan pipeline penjualan dan grafik retensi pelanggan CRM.",
      image: "/asset-porto/crm_showcase.png",
    },
    scopeDemo: {
      overview: "Fitur demo yang dikembangkan:",
      points: [
        "Papan Kanban status prospek interaktif.",
        "Statistik rangkuman pendapatan dan tiket dukungan aktif.",
      ],
      outOfScope: [
        "Integrasi telepon VoIP otomatis.",
        "Otomatisasi blast email marketing.",
      ],
    },
  },
];

export function getAllProjects(): PortfolioProject[] {
  return portfolioProjects;
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}
