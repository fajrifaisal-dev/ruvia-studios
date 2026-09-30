# Ruvia Studios — Website Spec (Next.js)

Catatan proyek untuk dikerjakan di Antigravity IDE. Struktur terinspirasi dari oketa.id (homepage + halaman layanan SEO), tetapi **copy, brand, dan desain harus orisinal milik Ruvia**. Jangan menyalin teks atau testimoni dari situs lain.

---

## 0. Prompt awal untuk agent (copy-paste)

> Bangun website company/service untuk **Ruvia Studios**, sebuah digital studio yang menjual jasa pembuatan website, business system custom, dan API integration. Gunakan **Next.js (App Router) + TypeScript + Tailwind CSS**. Ikuti dokumen spec ini secara berurutan per fase. Semua copy ada di bagian 5, data kontak & lokasi di bagian 11, standar kualitas profesional di bagian 12. Jangan ubah copy kecuali diminta. Prioritaskan: kecepatan (Lighthouse ≥ 95), mobile-first, SEO teknis yang rapi, dan CTA yang jelas. Kerjakan Fase 1 dulu, jalankan `npm run build` dan `npm run lint` sampai bersih sebelum lanjut ke fase berikutnya.

---

## 1. Ringkasan

| Item | Isi |
|---|---|
| Nama | Ruvia Studios |
| Tagline | Digital solutions for growing businesses. |
| Tujuan situs | Menarik calon klien UMKM/bisnis kecil-menengah, lalu mengarahkan mereka ke WhatsApp / form kontak |
| Bahasa awal | English (copy sudah tersedia). Siapkan struktur agar mudah ditambah versi Indonesia (`/id`) nanti |
| CTA utama | "Start a Project" → WhatsApp (dengan pesan pre-filled) |
| Referensi struktur | Hero → layanan → proses → harga → alasan memilih → CTA → footer |

**Data yang sudah pasti** (simpan di `lib/site.ts`, detail di bagian 11):
- `WHATSAPP_NUMBER` = `6289639873022` (tampil sebagai +62 896-3987-3022)
- Lokasi: Pontianak (Jl. Merdeka Barat No. 45, Gg. Parkit, Pontianak Kota) dan Surabaya (Jalan Medokan Semampir Indah No. 45, Surabaya)

**Masih perlu diisi sebelum launch** (`.env.local` / `lib/site.ts`):
- `SITE_URL` (domain final)
- `CONTACT_EMAIL` (disarankan email di domain sendiri, mis. `hello@domainmu`)
- Link sosial media (Instagram, LinkedIn, dll.)
- Google Analytics / Search Console ID

---

## 2. Tech stack

- **Next.js** (versi stabil terbaru), App Router, TypeScript strict
- **Tailwind CSS** + design tokens lewat CSS variables
- `next/font` (maksimal 2 font family), `next/image` untuk semua gambar
- Metadata API bawaan Next.js (bukan library SEO tambahan)
- Konten insight (opsional, fase 3): MDX atau file Markdown di `content/`
- Form kontak (opsional): Route Handler + validasi `zod`; kirim ke email (Resend) atau simpan sementara
- Deploy: Vercel (atau VPS + Docker jika lebih suka), domain custom + HTTPS
- Tanpa dependency berat. Hindari library animasi besar; cukup CSS transition / `framer-motion` seperlunya

---

## 3. Struktur folder yang disarankan

```
app/
  layout.tsx
  page.tsx                      # Homepage
  contact/page.tsx
  portfolio/page.tsx            # Fase 3
  insight/page.tsx              # Fase 3
  insight/[slug]/page.tsx       # Fase 3
  service/[slug]/page.tsx       # Fase 2: landing page SEO per layanan/kota
  terms/page.tsx
  privacy/page.tsx
  sitemap.ts
  robots.ts
  not-found.tsx
components/
  layout/ (Header, Footer, MobileNav)
  sections/ (Hero, WhatWeBuild, Approach, Pricing, WhyRuvia, CtaBanner)
  ui/ (Button, Card, Container, SectionHeading)
lib/
  site.ts                       # nama, tagline, kontak, sosial, nav
  whatsapp.ts                   # helper buat link wa.me + pesan
  seo.ts                        # helper metadata + JSON-LD
content/
  services.ts                   # data layanan (dipakai homepage & /service/[slug])
public/
  og.png (1200x630), favicon, logo.svg
```

---

## 4. Sitemap halaman

| Route | Fase | Catatan |
|---|---|---|
| `/` | 1 | Homepage lengkap |
| `/contact` | 1 | Info kontak + tombol WhatsApp (+ form opsional) |
| `/terms`, `/privacy` | 1 | Halaman legal sederhana |
| `/service/[slug]` | 2 | Landing page SEO per layanan (mis. website-development, business-systems, api-integrations) |
| `/portfolio` | 3 | Tampilkan proyek nyata saja. Sembunyikan halaman jika belum ada |
| `/insight` | 3 | Blog untuk SEO |

---

## 5. Copy homepage (final, gunakan apa adanya)

### Hero
- **H1:** Ruvia Studios
- **Subheading:** Digital solutions for growing businesses.
- **Body:** We build professional websites and practical digital systems that help businesses grow, connect with customers, and operate better.
- **CTA primer:** Start a Project (WhatsApp)
- **CTA sekunder:** See What We Build (scroll ke section berikutnya)

### What We Build (3 kartu)
1. **Websites** — Professional websites designed to establish your business online and turn visitors into customers.
2. **Business Systems** — Custom web applications built around the way your business actually works.
3. **API & Integrations** — Connect your applications, services, payments, and data through reliable integrations.

### Our Approach
**Understand. Plan. Build. Launch.**
We start by understanding your business, define the right solution, build it with a clear scope, and help you launch it properly.
(Tampilkan sebagai 4 langkah bernomor 01–04 dengan judul Understand / Plan / Build / Launch. Deskripsi tiap langkah singkat, 1 kalimat, tulis turunannya dari paragraf di atas.)

### Pricing (2 kartu)
**Website Starter** — *Starting from Rp1.000.000*
A practical starting point for businesses that need a professional online presence.
Includes:
- Responsive design
- Business information
- WhatsApp integration
- Basic SEO
- Performance optimization
- Deployment

**Custom Solutions** — *Custom quote*
Need something beyond a company profile?
We can build custom websites, dashboards, CRM, booking systems, business applications, ERP modules, and API integrations based on your requirements.

### Why Ruvia? (4 poin)
- **Clear scope.** Know what you're getting before development starts.
- **Practical solutions.** We focus on solving real business problems, not adding unnecessary complexity.
- **Built to grow.** Start small and expand your digital system as your business grows.
- **Reliable handover.** Your website and system should remain understandable and manageable after launch.

### CTA Banner
**Have a project in mind?**
Tell us what you're building. We'll help you figure out the right digital solution.
Button: **Start a Project**

### Footer
Logo + tagline, link nav (Home, Contact, Terms, Privacy), sosial media, email, WhatsApp (+62 896-3987-3022), teks "Based in Pontianak & Surabaya, Indonesia", © {tahun} Ruvia Studios.

---

## 6. Styling & design system

**Karakter:** bersih, tenang, profesional, "practical". Banyak whitespace, kontras tegas, satu warna aksen. Hindari gradient ramai, glassmorphism berlebihan, dan animasi berat.

### 6.1 Palet warna (Tailwind v4, taruh di `app/globals.css`)

```css
@import "tailwindcss";

/* Warna diambil langsung dari logo Ruvia: navy #0e1427 dan violet #7460f7 */
:root {
  --bg: #f5f8fd;            /* off-white kebiruan (sama dengan latar logo) */
  --surface: #ffffff;       /* kartu */
  --surface-alt: #edf1f9;   /* section selang-seling */
  --ink: #0e1427;           /* navy logo: teks utama & section gelap */
  --ink-muted: #5a6275;     /* teks sekunder (kontras 5.7:1 di atas --bg) */
  --line: #dfe4ee;          /* border */
  --accent: #7460f7;        /* violet logo: elemen grafis, ikon, garis, highlight */
  --accent-strong: #5f4ae6; /* violet lebih tua: tombol & teks/link (kontras 5.8:1 dgn putih) */
  --accent-hover: #5238d4;
  --accent-soft: #eeebff;   /* bg badge / highlight */
  --success: #16a34a;
}

@theme inline {
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-surface-alt: var(--surface-alt);
  --color-ink: var(--ink);
  --color-ink-muted: var(--ink-muted);
  --color-line: var(--line);
  --color-accent: var(--accent);
  --color-accent-strong: var(--accent-strong);
  --color-accent-hover: var(--accent-hover);
  --color-accent-soft: var(--accent-soft);
  --font-heading: var(--font-jakarta);
  --font-sans: var(--font-inter);
  --radius-card: 16px;
  --radius-control: 12px;
}
```

Aturan pakai:
- `--accent` (#7460f7) persis warna logo. Pakai untuk elemen grafis (ikon, garis, dekorasi, angka besar), **bukan** sebagai latar tombol dengan teks putih atau teks kecil, karena kontrasnya 4.4:1 (di bawah AA 4.5:1)
- `--accent-strong` (#5f4ae6) untuk latar tombol primer, link, dan teks aksen
- Section gelap (hero alternatif, CTA banner, footer) memakai `--ink` sebagai background dengan teks putih dan logo versi terang, seperti panel gelap pada logo
- Aksen tetap hemat: CTA, link penting, angka langkah, badge "Popular"

### 6.2 Tipografi

- Heading: **Plus Jakarta Sans** (600/700). Body: **Inter** (400/500). Load lewat `next/font/google`, `display: "swap"`, subset `latin`.
- Skala fluid:
  - H1: `clamp(2.5rem, 5vw + 1rem, 4.5rem)`, leading 1.05, tracking `-0.03em`
  - H2: `clamp(1.75rem, 2.5vw + 1rem, 2.75rem)`, leading 1.15
  - H3: 1.25rem, semibold
  - Body: 1rem–1.125rem, leading 1.65; teks paragraf maksimal `max-w-2xl`
- Label kecil/eyebrow: 0.8125rem, uppercase, tracking `0.08em`, warna `ink-muted` atau `accent`

### 6.3 Layout & spacing

- Container: `max-w-6xl mx-auto px-5 sm:px-8`
- Jarak antar section: `py-20 md:py-28`. Selang-seling background `bg` dan `surface-alt` agar section mudah dibedakan
- Grid: kartu layanan 1 kolom (mobile) → 3 kolom (`md`); pricing 1 → 2 kolom; Why Ruvia 1 → 2 → 4
- Header: sticky, tinggi 64px, `bg/80` + `backdrop-blur`, border bawah tipis muncul saat scroll

### 6.4 Komponen

| Komponen | Spesifikasi |
|---|---|
| Button primer | `h-11 px-5 rounded-[--radius-control]`, bg `accent-strong`, teks putih, hover `accent-hover`, focus ring 2px `accent` offset 2px |
| Button sekunder | Border `line`, bg transparan, hover bg `surface-alt` |
| Card | bg `surface`, border `line`, `rounded-[--radius-card]`, padding `p-6 md:p-8`, shadow sangat halus (`0 1px 2px rgb(0 0 0 / .04)`); hover naik 2px dan border sedikit lebih gelap |
| Badge | `accent-soft` + teks `accent`, pill, teks 12–13px |
| Nomor langkah (01–04) | Font heading, ukuran besar, warna `accent` dengan opacity 0.9 |
| Pricing "featured" | Border `accent` 1.5px + badge; kartu lain border biasa |
| Ikon | `lucide-react`, stroke 1.75, ukuran 20–24px, dalam kotak 44px `accent-soft` rounded-xl |
| FAQ/accordion | Elemen `<details>` native supaya ringan dan aksesibel |

### 6.5 Hero

- Bersih di atas `bg`, dengan satu elemen dekoratif: grid tipis (SVG pattern, opacity 0.5) atau radial blur `accent-soft` di belakang mockup
- Kanan/bawah teks: mockup UI abstrak (window frame + baris "dashboard", "landing page", "API") dibuat dari SVG/HTML+Tailwind, bukan gambar raster
- Dua tombol: primer "Start a Project", sekunder "See What We Build"
- Mobile: teks di atas, mockup di bawah, tombol full-width

### 6.6 Motion

- Hanya CSS: fade-up 12px + opacity, durasi 400–500ms, dipicu `IntersectionObserver` (komponen kecil `Reveal`)
- Hover/transition 150–200ms
- Wajib menghormati `prefers-reduced-motion: reduce` (matikan semua animasi)
- Tanpa parallax, tanpa library animasi berat

### 6.7 Responsif & aksesibilitas

- Desain mobile-first; uji di 360, 768, 1024, 1440px
- Tap target minimal 44px; tombol WhatsApp floating di mobile berukuran 52px, posisi kanan bawah, tidak menutupi CTA/konten (beri `pb` ekstra di footer)
- Focus ring selalu terlihat, kontras AA, semantic HTML, `alt` pada gambar bermakna
- Dark mode: tidak di fase 1. Token sudah berbasis CSS variables jadi mudah ditambah nanti lewat `@media (prefers-color-scheme: dark)`

### 6.8 Logo & aset brand (sudah tersedia)

Logo final dari founder: simbol "R" modular (navy) dengan satu kotak violet di pojok kanan atas, wordmark "ruvia" huruf kecil bulat, dan "STUDIOS" ber-letterspacing lebar. Sudah di-vektorkan ke folder `logo/`:

| File | Pemakaian |
|---|---|
| `ruvia-logo.svg` | Lockup penuh, untuk latar terang (Header, halaman legal, invoice, proposal) |
| `ruvia-logo-light.svg` | Lockup penuh, teks putih, untuk latar navy (footer/section gelap) |
| `ruvia-mark.svg` / `ruvia-mark-light.svg` | Simbol saja (nav mobile, loader, watermark) |
| `ruvia-icon.svg`, `icon-512.png`, `apple-touch-icon.png`, `favicon-32.png` | Favicon & ikon aplikasi/avatar |

Penempatan di Next.js: salin ke `public/brand/`, pasang favicon lewat `app/icon.svg` dan `app/apple-icon.png`, render logo dengan `next/image` (atau inline SVG agar bisa di-tema). Header: lockup tinggi 32px (mobile) / 36–40px (desktop). Beri clear space minimal sebesar tinggi kotak violet di sekeliling logo, jangan diregangkan, diputar, atau diberi efek.

OG image (1200×630): buat lewat `app/opengraph-image.tsx` (`next/og`): background `--bg`, lockup logo, tagline "Digital solutions for growing businesses." di bawahnya, tata letak rata-tengah vertikal.

Catatan tagline: gambar logo memakai teks "Innovation Tech" di bawah nama pada versi gelap. Untuk website tetap gunakan tagline resmi di bagian 5, "Digital solutions for growing businesses."

---

## 7. SEO teknis (wajib)

- `generateMetadata` per halaman: title, description, canonical, Open Graph, Twitter card
- `app/sitemap.ts` dan `app/robots.ts` dinamis
- JSON-LD: `Organization` + `WebSite` di layout; `Service` di halaman `/service/[slug]`; `FAQPage` jika ada FAQ; `BreadcrumbList` di halaman turunan
- Satu `<h1>` per halaman, heading berurutan
- Gambar OG 1200×630
- Performa: font `display: swap`, gambar dioptimasi, minim JS client (server components sebagai default, `"use client"` hanya jika perlu)
- Siapkan Google Search Console + Analytics (ID dari env)
- Halaman `/service/[slug]` (fase 2): satu halaman = satu topik yang benar-benar berbeda, berisi konten unik. **Hindari membuat puluhan halaman kota dengan teks template yang sama**, karena berisiko dianggap thin/duplicate content oleh Google

---

## 8. Rencana kerja per fase

### Fase 1 — Fondasi + homepage
- [ ] Init project Next.js + TypeScript + Tailwind, setup ESLint/Prettier
- [ ] `lib/site.ts`, design tokens, font, layout global (Header, Footer)
- [ ] Bangun semua section homepage sesuai bagian 5
- [ ] Helper `whatsapp.ts` (pesan pre-filled: "Hi Ruvia Studios, I'd like to discuss a project.")
- [ ] Halaman `/contact`, `/terms`, `/privacy`, `not-found`
- [ ] Metadata, `sitemap.ts`, `robots.ts`, JSON-LD dasar, OG image
- **Selesai jika:** `npm run build` & `lint` bersih, Lighthouse mobile ≥ 95 (Performance, SEO, Accessibility, Best Practices), tampil rapi di 360px–1440px

### Fase 2 — Halaman layanan
- [ ] `content/services.ts` sebagai sumber data
- [ ] Template `/service/[slug]` dengan: intro, masalah yang dipecahkan, deliverable, proses, FAQ, CTA
- [ ] Tulis konten unik untuk 3 layanan utama
- [ ] `FAQPage` + `Service` schema
- [ ] Link internal dari homepage ke tiap halaman layanan

### Fase 3 — Kredibilitas & konten
- [ ] `/portfolio` (hanya proyek nyata; boleh 1–2 studi kasus dulu, termasuk proyek sendiri)
- [ ] `/insight` berbasis MDX + 3–5 artikel awal
- [ ] Form kontak dengan validasi + anti-spam (honeypot / Turnstile)
- [ ] Versi bahasa Indonesia (`/id`) bila target pasar lokal

### Fase 4 — Launch
- [ ] Deploy, domain, HTTPS, redirect www → non-www
- [ ] Verifikasi Search Console, submit sitemap
- [ ] Tes di perangkat asli (Android + iOS), tes link WhatsApp
- [ ] Cek ulang semua placeholder sudah terisi

---

## 9. Hal yang sengaja **tidak** dibawa dari referensi

- Testimoni: jangan buat testimoni fiktif. Kosongkan dulu sampai ada klien nyata, atau tampilkan studi kasus sebagai gantinya
- Klaim yang belum bisa dibuktikan (garansi, jumlah klien, "terbukti optimal")
- Copy panjang berbau template per wilayah
- Daftar logo teknologi sebagai "bukti kepercayaan", cukup tampilkan bila memang relevan dan jujur

---

## 10. Aturan kerja untuk agent

1. Kerjakan per fase, commit kecil dan jelas setelah tiap tugas
2. Jangan menambah dependency tanpa alasan; sebutkan alasannya bila menambah
3. Server component sebagai default; client component hanya untuk interaksi
4. Semua teks, kontak, dan link dipusatkan di `lib/site.ts` / `content/`, bukan di-hardcode di komponen
5. Setelah tiap fase: jalankan build + lint, lalu ringkas apa yang berubah dan apa yang belum selesai

---

## 11. Data kontak, lokasi, dan schema

### 11.1 `lib/site.ts`

```ts
export const site = {
  name: "Ruvia Studios",
  tagline: "Digital solutions for growing businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com", // ganti domain final
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
  whatsapp: {
    number: "6289639873022",          // format internasional tanpa "+"
    display: "+62 896-3987-3022",
    defaultMessage:
      "Hi Ruvia Studios, I'd like to discuss a project. Here is a short brief:",
  },
  showStreetAddress: true, // set false untuk menyembunyikan alamat jalan di situs & schema
  locations: [
    {
      city: "Pontianak",
      region: "West Kalimantan",
      country: "ID",
      street: "Jl. Merdeka Barat No. 45, Gg. Parkit, Pontianak Kota",
    },
    {
      city: "Surabaya",
      region: "East Java",
      country: "ID",
      street: "Jalan Medokan Semampir Indah No. 45",
    },
  ],
  serviceArea: "Indonesia",
} as const;
```

`lib/whatsapp.ts` membuat link: `https://wa.me/${number}?text=${encodeURIComponent(message)}`. Semua tombol "Start a Project" memakai helper ini. Link telepon di halaman contact: `tel:+6289639873022`.

### 11.2 Cara menampilkan lokasi

- Footer: "Pontianak & Surabaya, Indonesia" (hanya kota) + link ke `/contact`
- `/contact`: dua kartu lokasi (Pontianak dan Surabaya). Tiap kartu menampilkan nama kota dan alamat jalan dari `site.locations[].street`, hanya bila `site.showStreetAddress === true`. Bila `false`, tampilkan kota saja
- Tambahkan tombol "Open in Google Maps" per kartu: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(street + ", " + city)}`. Jangan embed iframe peta di fase 1 supaya halaman tetap ringan
- Label kartu: "Pontianak" dan "Surabaya". Pakai kata "Location" atau "Base", **bukan "Head Office/Branch"**, kecuali memang kantor resmi dengan jam kunjungan
- Tambahkan catatan kecil di `/contact`: "Meetings by appointment. Please contact us on WhatsApp first." (kunjungan tanpa janji tidak dilayani)
- Alamat yang sama dipakai konsisten di Footer legal, Terms/Privacy (identitas penyedia layanan), JSON-LD, dan profil Google Business/LinkedIn

### 11.3 JSON-LD (di layout global)

Gunakan `Organization`. Field `streetAddress` hanya dirender bila `site.showStreetAddress` bernilai `true`; jika `false`, hapus `streetAddress` dan sisakan kota/provinsi. Tambahkan `postalCode` bila kode pos sudah dipastikan (jangan ditebak):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ruvia Studios",
  "url": "<SITE_URL>",
  "description": "Digital solutions for growing businesses.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+6289639873022",
    "contactType": "sales",
    "availableLanguage": ["en", "id"]
  },
  "areaServed": "ID",
  "location": [
    { "@type": "Place", "address": { "@type": "PostalAddress", "streetAddress": "Jl. Merdeka Barat No. 45, Gg. Parkit, Pontianak Kota", "addressLocality": "Pontianak", "addressRegion": "West Kalimantan", "addressCountry": "ID" } },
    { "@type": "Place", "address": { "@type": "PostalAddress", "streetAddress": "Jalan Medokan Semampir Indah No. 45", "addressLocality": "Surabaya", "addressRegion": "East Java", "addressCountry": "ID" } }
  ]
}
```

### 11.4 Catatan nomor & alamat

Alamat jalan dan nomor telepon akan tampil publik dan bisa di-scrape. Jika salah satu alamat adalah rumah tinggal, pertimbangkan `showStreetAddress: false` dan tampilkan alamat lengkap hanya di kontrak/invoice. Kalau nanti membuat Google Business Profile, pilih opsi menyembunyikan alamat (service-area business) bila tidak menerima tamu.

Nomor WhatsApp juga akan tampil publik dan mudah terkena spam/scraping. Disarankan memakai **WhatsApp Business** di nomor tersebut (atau nomor khusus bisnis) supaya bisa pakai pesan sambutan, pesan di luar jam kerja, label prospek, dan katalog layanan.

---

## 12. Standar kualitas profesional

### 12.1 Suara & copy
- Nada: jelas, tenang, percaya diri, tanpa hiperbola. Tidak ada kata seperti "terbaik", "nomor 1", atau "terbukti" tanpa bukti
- Kalimat pendek, kata kerja aktif, satu ide per paragraf. Konsisten memakai istilah yang sama (mis. selalu "Start a Project", bukan campur "Contact Us")
- Setiap section punya satu tujuan dan satu CTA
- Tidak ada teks "lorem ipsum", placeholder, atau TODO yang tampil di produksi

### 12.2 Sinyal kepercayaan (tanpa klaim palsu)
- Identitas jelas: nama studio, lokasi, WhatsApp, email domain sendiri, jam respons yang realistis (mis. "We reply within 1 business day", isi sesuai kenyataan)
- Proses dan cakupan kerja transparan (sudah ada di section Approach dan Pricing)
- Halaman Terms & Privacy yang lengkap dan bisa dibaca: lingkup proyek, revisi, pembayaran/termin, kepemilikan kode & aset setelah lunas, hosting/domain, dukungan pasca-launch. Minta review orang yang paham hukum sebelum dipakai mengikat klien
- Studi kasus nyata (termasuk proyek sendiri) menggantikan testimoni sampai ada klien yang bersedia dikutip
- Handover: sebutkan apa yang klien terima (source code/akses, dokumentasi singkat, panduan penggunaan)

### 12.3 Alur kontak yang mulus
- Tombol WhatsApp membawa pesan template yang mengundang brief singkat (jenis bisnis, kebutuhan, target waktu, kisaran budget)
- `/contact` juga menyediakan email dan (fase 3) form brief dengan validasi + anti-spam
- Halaman terima kasih/konfirmasi setelah form terkirim, plus event tracking untuk klik WhatsApp

### 12.4 Kualitas teknis
- Lighthouse mobile ≥ 95 di keempat kategori; CLS < 0.1, LCP < 2.5s
- Tidak ada error/warning di console; tidak ada layout shift dari font/gambar
- Security headers via `next.config` (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`/CSP dasar), HTTPS penuh
- 404 dan error page yang dirancang, bukan bawaan default
- Semua link internal/eksternal dites; link eksternal `rel="noopener noreferrer"`
- Favicon, OG image, manifest lengkap; preview link WhatsApp/LinkedIn diuji

### 12.5 Konsistensi visual
- Semua warna, radius, spacing, dan ukuran font berasal dari token di bagian 6, tidak ada nilai acak di komponen
- Satu gaya ikon, satu gaya kartu, satu gaya tombol di seluruh situs
- Cek visual di 360, 768, 1024, 1440px sebelum tiap fase dianggap selesai

### 12.6 Kesiapan bisnis (di luar kode)
- Template penawaran (proposal) dan kontrak kerja singkat selaras dengan halaman Terms
- Checklist onboarding klien: brief, akses domain/hosting, materi brand, jadwal
- Email bisnis dengan domain sendiri dan tanda tangan email seragam
- Profil LinkedIn/Instagram/Google Business Profile memakai nama, logo, dan deskripsi yang sama
