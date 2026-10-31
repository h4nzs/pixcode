# Website Brief — Pixcode Studio

> Dokumen acuan proyek. Semua keputusan yang sudah disepakati tercatat di sini.
> Status: **Aktif — situs Astro 7 + Tailwind v4 sudah live di `https://pixcode.my.id`; dokumen ini disinkronkan dengan kodebase per 2026-10-31.**

---

## 1. Ringkasan Proyek

| Item | Keterangan |
|---|---|
| Nama bisnis | Pixcode Studio |
| Bidang | Jasa pembuatan website & aplikasi untuk UMKM |
| Tim | Dehans (delivery teknis) & Destra (client relations, marketing) |
| Jenis situs | Company profile + portfolio (multi-halaman, statis) |
| Target hosting | Cloudflare **Workers (Static Assets)** — direkomendasikan Cloudflare untuk proyek baru 2026 (sebelumnya direncanakan Pages) |
| Stack | **Astro 7** + Tailwind CSS v4 (v4.3.x) |
| Bahasa konten | Indonesia |
| Arahan desain | Light clean — putih bersih, ramah, mudah dibaca; aksen **teal** |
| Identitas visual | Mark A **Staircase Four** + lockup **pixcode STUDIO**; panduan di `docs/BRAND-GUIDE.md` (PDF: `docs/BRAND-GUIDE.pdf`) |
| Penampilan harga | "Mulai dari Rp…" — detail final lewat WhatsApp |

**Tujuan situs (urutan prioritas):**
1. Membangun kredibilitas — calon klien menilai kemampuan Pixcode dari web Pixcode sendiri.
2. Konversi ke WhatsApp — CTA utama di seluruh halaman (sesuai SOP: lead masuk via WA/IG).
3. Edukasi — paket & proses kerja dijelaskan transparan (pembeda utama vs freelancer abu-abu).

**Target audiens:** pemilik UMKM (warung/toko, klinik, jasa, F&B, sekolah, dsb.) yang sebagian besar browsing dari HP → **mobile-first**, bahasa sederhana, hindari jargon teknis.

---

## 2. Konsep & Positioning

**Tagline final (terkunci):** "Website untuk UMKM — jelas cakupannya, jelas harganya, jelas prosesnya."

**Pembeda yang di-highlight di web:**
- ✅ Fitur "termasuk / tidak termasuk" ditulis eksplisit per paket (anti scope creep, dari dokumen SOP)
- ✅ Batas revisi jelas di awal (1x–2x, tergantung paket)
- ✅ Proses terstruktur: DP 50% → demo staging → pelunasan → handover
- ✅ Maintenance opsional, bukan terpaksa

**Motif visual brand:** mark **A "Staircase Four"** — empat blok piksel (tiga anak tangga + satu jangkar gelap) pada grid 32 × 32. Piksel = modul, kode = struktur; bukan kurung `</>`, tanpa gradient. Lockup final: **`pixcode STUDIO`** (header memakai compact `pixcode`). Aturan lengkap ada di `docs/BRAND-GUIDE.md`.

---

## 3. Sitemap & Struktur Halaman

```
/                    Home (landing utama)
/layanan             Detail 5 paket + batas revisi + FAQ harga
/portfolio           Grid semua proyek
/portfolio/[slug]    Detail per proyek (studi kasus)
/tentang             Cerita studio + tim
/kontak              CTA WhatsApp, email, jam respons
/kebijakan-privasi   Kebijakan privasi
/syarat-ketentuan    Syarat & ketentuan
/template            Galeri 3 contoh template Paket UMKM (diindeks, masuk sitemap)
/template/[slug]     Contoh template: kedai-kopi, bengkel, toko-tanaman (noindex, tidak masuk sitemap)
/wa/[slug]           Pengalih klik WhatsApp (noindex, tidak masuk sitemap)
404                  Halaman tidak ditemukan
```

Halaman `/faq` terpisah tidak dibuat — FAQ digabung ke Home dan Layanan.

### 3.1 Home — urutan section
1. **Hero** — headline value prop + subteks + 2 CTA (WhatsApp / Lihat Paket) + visual mockup browser HP. Badge kecil: "Balas cepat via WhatsApp". **Plus bukti cepat di atas fold** (riset §3): 3 thumbnail portfolio atau 1 kalimat bukti — kredibilitas harus terlihat sebelum scroll.
2. **Ticker layanan** — strip dekoratif berisi jenis pekerjaan (website profil, katalog, booking, POS, maintenance).
3. **Untuk siapa** — strip kategori UMKM yang dilayani (toko, klinik, jasa, F&B, …).
4. **Paket ringkas** — 5 kartu paket (UMKM, Hemat, Hemat Plus, Standar/Dynamic, Desktop POS) dengan harga "mulai dari" + **Paket UMKM (Rp 400.000) di-highlight** sebagai kartu unggulan + CTA per kartu.
   - **Gaya highlight (terkunci)**: badge **"Paling Laris"** warna teal di kartu UMKM + border lebih tebal + posisi paling depan di antara kartu paket.
5. **Portfolio highlight** — 3 proyek unggulan (proyek aktif diprioritaskan) + link "lihat semua".
6. **Cara kerja** — versi klien dari SOP (4 langkah: Konsultasi & pilih paket → DP 50% → Demo staging & revisi → Approve, live & support). Tambahkan catatan kecil tentang batas revisi.
7. **FAQ** — 7 pertanyaan umum (biaya, luar Bandung, pembayaran, durasi, revisi, domain/hosting, maintenance).
8. **CTA akhir** — ajakan konsultasi gratis via WA.
9. **Footer** — navigasi, WA, email, jam respons, tautan legal, copyright.

Poin "kenapa Pixcode" tidak menjadi section terpisah di Home; nilai kerja ditampilkan di halaman Tentang.

### 3.2 Halaman Layanan
- Answer block + kartu detail per paket (**5 paket, UMKM paling menonjol**): harga, daftar **termasuk**, daftar **tidak termasuk**, batas revisi, lama pengerjaan.
- **Trust line tepat di bawah grid harga** (riset §7): "DP 50%, lunas setelah kamu approve demo" — pengurangan risiko di titik keputusan.
- Catatan di bawah trust line: lama pengerjaan dihitung sejak materi (foto, teks) lengkap; biaya domain terpisah dan dicantumkan di proposal.
- **Mini-FAQ harga** dengan H2 berbentuk pertanyaan + jawaban 2–3 kalimat (GEO answer blocks, riset §6): 8 pertanyaan — arti harga "mulai dari", total lebih tinggi, beda UMKM vs Hemat, kapan naik paket, revisi lewat batas, domain/hosting, maintenance, add-on.
- **Section add-on terpisah** "Apa saja add-on dan berapa harganya?" dari `src/data/addons.ts` (16 item) + ketentuan semua paket (perubahan di luar lingkup, kredit naik paket, garansi bug 14 hari, biaya tahun berikutnya). Daftar "tidak termasuk" tetap ada di tiap kartu.
- Di bawah catatan harga ada tautan ke galeri `/template/` (contoh tampilan Paket UMKM).

### 3.3 Halaman Portfolio
- Grid kartu: thumbnail, label proyek (klien **dianonimkan**, cth. "Toko F&B — Bandung"), kategori, tag paket, status live.
- Filter CSS-only saat ini: **Semua / Website / Web App**. Kategori `pos` didukung skema, tetapi belum ada proyek POS.
- **Halaman detail per proyek**: breadcrumb → Tantangan → Sebelum & Sesudah → **Manfaat bagi pemilik usaha** → Fitur utama → Teknologi & tools → link live/repo. `gallery` opsional dan section-nya hanya muncul jika diisi; screenshot before/after visual belum diisi (masih narasi teks).
- Kategori portfolio final: `website | web-app | pos` — proyek internal/repo GitHub tampil dengan label **"Riset & Pengembangan"** (keputusan user).

### 3.4 Halaman Tentang
- Cerita singkat studio (kenapa fokus UMKM).
- Tim: Dehans & Destra — nama, peran, foto asli (crop square, WebP via Astro `<Image>`) dari `src/assets/team/`.
- Nilai kerja (transparan, tepat waktu, komunikatif).

### 3.5 Halaman Kontak
- Tombol WA besar melalui halaman terukur `/wa/umum/` → `wa.me` dengan teks template otomatis.
- Email, jam respons dari `site.hours` (**Senin–Sabtu, 09.00–17.00 WIB**), kota basis. Instagram belum aktif (`site.instagram` masih `null`).
- Tanpa form backend dulu — jika nanti perlu form, jalur upgrade-nya adapter `@astrojs/cloudflare` (Workers) atau Worker terpisah sebagai API.

---

## 4. Data Paket (sumber: dokumen SOP v2)

> Diperbarui 2026-10-31: **harga dan fitur final dari playbook paket/add-on**. Semua harga, fitur, dan durasi disimpan di `src/data/packages.ts`; 16 add-on di `src/data/addons.ts`; ketentuan layanan di `src/pages/syarat-ketentuan.astro`. Angka di bawah yang berlaku.

| Paket | Harga | Termasuk | Tidak termasuk | Revisi maks | Lama pengerjaan |
|---|---|---|---|---|---|
| **UMKM** ⭐ *(highlight)* | **Rp 400.000** (flat) | 1 halaman dari 3 template siap pakai (Kedai Kopi, Bengkel, Toko Tanaman); isi, logo, foto (8), jam buka, lokasi, 1 warna aksen; tombol WA & peta; SEO dasar; hosting Cloudflare alamat bawaan | Tampilan disesuaikan (paket Hemat), domain sendiri, halaman tambahan | 1x (teks & foto) | 3–7 hari kerja |
| **Hemat** | Mulai dari Rp 650.000 | 1 halaman disesuaikan (2 warna, huruf pilihan, sampai 6 section), foto 12, tombol WA & peta, SEO dasar, hosting Cloudflare | Desain dari nol, domain sendiri, halaman tambahan | 1x | 3–7 hari kerja |
| **Hemat Plus** | Mulai dari Rp 1.000.000 | 2–3 halaman disesuaikan, pemasangan domain sendiri + SSL (domain dibeli terpisah), SEO tiap halaman, hosting Cloudflare | Login & database, desain dari nol, halaman ke-4 dan seterusnya | 2x | 1–2 minggu |
| **Standar / Dynamic** | Mulai dari Rp 3.000.000 + server | Sampai 3 halaman publik + panel admin login (1 peran), kelola 3 jenis data, 1 modul laporan, pemasangan server/domain/SSL/backup, pelatihan 1 jam | Biaya server & domain (dibayar ke penyedia, perkiraan Rp 0,7–1,3 juta/tahun), modul tambahan, multi-cabang | 2x, revisi besar dihitung ulang | 2–4 minggu |
| **Desktop POS** | Mulai dari Rp 6.000.000 | Kasir + stok dasar 1 toko/1 komputer, struk thermal (1 model printer), laporan harian, instalasi/backup/panduan | Hardware, sinkronisasi multi-perangkat, integrasi toko online | 2x | 3–6 minggu |

> **Paket UMKM** adalah paket baru (tidak ada di SOP v2) dan menjadi **paket unggulan yang di-highlight** di halaman Home & Layanan. Gaya highlight: badge "Paling Laris" (teal) + border tebal + posisi paling depan. Detail fitur, revisi, dan durasi final per 2026-10-31; 3 contoh tampilannya ada di `/template/`.

Aturan yang diwarisi dari SOP (tetap berlaku di web): biaya revisi di luar batas dicantumkan di proposal, bukan dikejutkan belakangan. Di web cukup tampilkan "revisi maks" + "detail lengkap dijelaskan saat konsultasi". Lama pengerjaan dihitung sejak materi (foto, teks) lengkap; biaya domain/server di luar harga paket; permintaan di luar lingkup jadi add-on yang disepakati tertulis sebelum dikerjakan.

---

## 5. Desain (Light Clean)

| Elemen | Keputusan |
|---|---|
| Background | Putih / off-white (`#FAFAFA`–`#FFFFFF`), section selang-seling dengan `slate-50` |
| Teks | `slate-900` untuk heading, `slate-600` untuk body |
| Warna aksen/primary | **Teal/hijau** (final) — dipakai di CTA, link, badge |
| Motif | Grid piksel kecil sebagai dekor (hero, section divider), sudut kotak tidak terlalu bulat |
| Font | **Plus Jakarta Sans** (body & heading, identitas Indonesia) via **Astro Fonts API** (Fontsource) — 1 keluarga font saja agar ringan |
| Ikon | Lucide (stroke, konsisten, ringan) |
| Komponen UI | Kartu dengan border tipis + shadow halus; tombol primary solid **teal** (`brand-600`/`brand-700`); tombol WA hijau `#25D366` dengan teks `slate-900` agar kontras |
| Motion | CSS-first + satu IntersectionObserver untuk reveal/stagger, View Transitions (`ClientRouter`), border animasi & pulse via CSS. Tanpa Framer Motion/library berat; semua animasi dimatikan pada `prefers-reduced-motion` |
| Responsive | Mobile-first; nav jadi drawer di HP |

### Style token (Tailwind v4 `@theme` di `global.css`)
```css
@import "tailwindcss";

@theme {
  --font-sans: var(--font-jakarta), ui-sans-serif, system-ui, sans-serif;
  --color-brand-50:  #f0fdfa;
  --color-brand-100: #ccfbf1;
  --color-brand-200: #99f6e4;
  --color-brand-300: #5eead4;
  --color-brand-400: #2dd4bf;
  --color-brand-500: #14b8a6;
  --color-brand-600: #0f766e;  /* 600+ digelapkan agar lolos WCAG AA */
  --color-brand-700: #115e59;
  --color-brand-800: #134e4a;
  --color-brand-900: #042f2e;
  --color-brand-950: #021716;
  --color-wa: #25d366;
  --color-wa-dark: #1da851;
}
```
*(Tanpa `tailwind.config.js` — konfigurasi lewat CSS, sesuai Tailwind v4. Skala 600–950 digelapkan pada audit Lighthouse 2026-10-27 agar teks putih di atas teal lolos kontras.)*

---

## 6. Arsitektur Teknis

### 6.1 Struktur proyek Astro
```
pixcode-studio/
├── astro.config.mjs          # site URL, integrasi sitemap, @tailwindcss/vite
├── wrangler.jsonc            # deploy Workers: { assets: { directory: "./dist" } } — tanpa adapter
├── package.json
├── docs/
│   ├── BRAND-GUIDE.md        # aturan identitas visual (sumber teks)
│   ├── BRAND-GUIDE.pdf       # versi visual 8 halaman
│   └── brand/                # moodboard.html + og-source.svg
├── public/
│   ├── apple-touch-icon.png
│   ├── brand/                # 15 SVG logo (horizontal/compact/stacked/mark/wordmark × 3 varian) + PNG
│   ├── favicon.svg
│   ├── og-image.png          # gambar share WhatsApp/sosmed
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── projects/         # thumbnail portfolio (5 PNG + 2 SVG)
│   │   ├── team/             # foto tim (dehan.jpg, destra.jpg)
│   │   ├── templates/        # thumbnail 3 contoh template (PNG)
│   │   └── fonts/            # font lokal khusus halaman template (OFL)
│   ├── components/           # Header, Footer, PackageCard, ProjectCard, WaButton,
│   │                         # CtaBanner, FaqItem, SectionHeading, AnalyticsBeacon, dst.
│   ├── content/
│   │   └── projects/         # 1 file .md per proyek (content collections)
│   ├── data/
│   │   ├── site.ts           # WA, email, IG, jam, url, token analytics — SINGLE SOURCE
│   │   ├── brand.ts          # path wordmark, geometri mark, metrik lockup
│   │   ├── packages.ts       # data 5 paket (dipakai Home & Layanan)
│   │   ├── addons.ts         # 16 add-on + harga (dipakai Layanan)
│   │   └── templates.ts      # data 3 contoh template Paket UMKM
│   ├── layouts/
│   │   ├── BaseLayout.astro  # <head> SEO, Header, Footer, beacon analytics
│   │   └── TemplateLayout.astro # bar demo + kerangka halaman contoh template
│   ├── pages/
│   │   ├── index.astro
│   │   ├── layanan.astro
│   │   ├── portfolio/index.astro
│   │   ├── portfolio/[slug].astro
│   │   ├── tentang.astro
│   │   ├── kontak.astro
│   │   ├── kebijakan-privasi.astro
│   │   ├── syarat-ketentuan.astro
│   │   ├── template/index.astro
│   │   ├── template/kedai-kopi.astro
│   │   ├── template/bengkel.astro
│   │   ├── template/toko-tanaman.astro
│   │   ├── wa/[slug].astro   # pengalih klik WA (noindex)
│   │   └── 404.astro
│   ├── scripts/open-status.ts # status buka/tutup WIB di halaman template
│   ├── utils/
│   │   ├── projectImage.ts   # resolve nama file → ImageMetadata (astro:assets)
│   │   └── templateImage.ts  # resolve thumbnail template
│   └── styles/global.css     # Tailwind v4 + @theme tokens
```

### 6.2 Skema data portfolio (content collection)
```ts
// src/content.config.ts
title: string
client: string          // label anonim, cth. "Toko F&B — Bandung" (keputusan: klien tidak ditampilkan apa adanya)
category: "website" | "web-app" | "pos"   // "web-app" ditambahkan untuk proyek internal
package: "hemat" | "hemat-plus" | "standar" | "pos" | null
internalLabel: string | null  // "Riset & Pengembangan" untuk proyek internal
year: number
thumbnail: string             // nama file di src/assets/projects/
gallery: string[]             // default []; nama file di src/assets/projects/
liveUrl: string | null        // link website live klien
liveStatus: "active" | "temporarily-offline"  // default "active"
repoUrl: string | null        // link GitHub (untuk proyek internal/riset)
description: string           // 2–3 kalimat ringkasan
benefit: string               // manfaat bagi pemilik usaha (wajib)
challenge: string | null      // masalah bisnis
before: string | null         // narasi sebelum (teks)
after: string | null          // narasi sesudah (teks)
stack: string[]               // default []
features: string[]            // default []
testimonial: { text: string; author: string } | null
featured: boolean             // tampil di Home highlight
```

`thumbnail` dan `gallery` disimpan sebagai **nama file**, lalu diresolve ke `ImageMetadata` oleh `src/utils/projectImage.ts` (`import.meta.glob`) — Astro 7 menghapus helper `image()` dari content config.

### 6.3 Keputusan teknis
- **Full static, tanpa adapter Cloudflare** — cukup `astro build` → folder `dist`.
- **Deploy via Cloudflare Workers Static Assets**: repo cukup berisi `wrangler.jsonc` minimal (`assets.directory: "./dist"`). Git connect (Workers Builds) memberi auto-deploy per push + preview URL per PR — perilaku yang sama seperti Pages dulu.
- **Astro 7**: Rust compiler default (build lebih cepat), wajib Node ≥ 22.12 lokal & CI; font via Astro Fonts API (Fontsource), Zod 4 untuk skema content collection.
- Harga & kontak diatur di `src/data/` agar ganti angka/nomor cukup 1 tempat.
- Optimasi gambar pakai `astro:assets` (WebP otomatis, lazy-load).
- Form kontak **tidak dulu** — CTA ke halaman terukur `/wa/<konteks>/`, lalu redirect ke `wa.me/<nomor>?text=…` (template pesan otomatis).
- Analytics: Cloudflare Web Analytics via `src/components/AnalyticsBeacon.astro`, dipakai di `BaseLayout` dan halaman `/wa`.
- **Template Paket UMKM** (`/template/*`, keputusan 2026-10-28): 3 contoh halaman milik Pixcode — Kedai Kopi "Kopi Teras" (menu bergaya nota yang tercetak), Bengkel "Bengkel Km 0" (pilih servis, total estimasi, kirim rincian ke WhatsApp), Toko Tanaman "Pucuk" (katalog difilter cahaya, tombol tanya per barang). Aturan:
  - Semua usaha, alamat, harga, dan stok di contoh **fiktif** dan dilabeli di bar demo, di footer tiap contoh, dan di teks galeri. Tidak ada testimoni atau angka klien palsu.
  - Tiap contoh punya `noindex` dan tidak masuk sitemap (hanya galeri `/template/` yang diindeks). Filter ada di `astro.config.mjs`.
  - Data di `src/data/templates.ts`; kerangka bar demo di `src/layouts/TemplateLayout.astro`; tiap contoh bergaya sendiri (CSS ter-scope di file halamannya), bukan memakai tema situs utama.
  - Tombol WhatsApp di contoh mengarah ke Pixcode lewat `/wa/template-<slug>/` (terhitung di Web Analytics); estimator Bengkel memakai `/wa/template-bengkel-form/`. Pesan dinamis (pilihan servis, nama tanaman) dibawa lewat `?text=` dan dibaca halaman `/wa` sebelum redirect, jadi tidak ada lagi tautan `wa.me` langsung dari halaman contoh.
  - JS hanya dua tempat, keduanya beralasan: `src/scripts/open-status.ts` (±1 KB, status buka/tutup menurut jam WIB, tanpa JS teks bawaan tetap benar) dan estimator di `bengkel.astro`. Filter toko tanaman murni CSS (`:has`).
  - Huruf per contoh (OFL, file lokal di `src/assets/fonts/`): Bricolage Grotesque + Courier Prime, Big Shoulders Display + IBM Plex Sans, Newsreader + Onest. Hanya diunduh browser di halaman yang memakainya.
  - Animasi semua di bawah guard `prefers-reduced-motion`; kondisi akhir tetap ditampilkan.
  - Thumbnail galeri = screenshot halaman demo di `src/assets/templates/` (buat ulang kalau tampilan demo berubah).

---

## 7. SEO & Performa

- Meta title/description per halaman + canonical.
- Open Graph + Twitter card (og-image di `public/`), penting karena link sering dibagikan via WhatsApp.
- Sitemap (`@astrojs/sitemap`) + `robots.txt`.
- JSON-LD `ProfessionalService` (nama, WA, kota, layanan) di Home, termasuk **area layanan hibrida: `City` (Bandung + Jabodetabek: Jakarta, Bogor, Depok, Tangerang, Bekasi + Surabaya, Medan, Semarang) + `Country: Indonesia`** — sinyal lokal & nasional sekaligus (revisi 2026-09-23: dari daftar 4 kota → Country → hibrida); plus FAQ "melayani di luar Bandung?" dengan pola "Jabodetabek + kota besar + seluruh kota lainnya di Indonesia". `FAQPage` untuk FAQ; `BreadcrumbList` di detail portfolio; `sameAs` untuk entitas.
- **GEO answer blocks** (riset §6): jawaban langsung 2–3 kalimat (40–60 kata) di atas section penting; H2/H3 berbentuk pertanyaan di Layanan & FAQ; klaim selalu disertai angka + tanggal.
- Heading semantik (satu H1 per halaman), alt text semua gambar.
- Target: skor Lighthouse mobile 90+ (statis + font via Astro Fonts API + gambar WebP = realistis).
- **Analytics:** Cloudflare Web Analytics aktif (cookieless, manual JS snippet via `src/components/AnalyticsBeacon.astro`; token `pixcode.my.id` di `site.analyticsToken`, aktif sejak 2026-10-31). Token **terikat hostname** — jika domain berubah, ganti token. Jangan mengaktifkan injeksi otomatis CWA bersamaan dengan snippet manual (pageview bisa dobel).
- **Tracking CTA WhatsApp:** semua CTA mengarah ke halaman `/wa/<konteks>/` (`umum`, `portfolio`, `paket-*`, `template-*`, `template-bengkel-form`) yang mengirim pageview ke CWA, lalu redirect ke `wa.me` setelah event `load` + ~400 ms. `/wa` `noindex` dan tidak masuk sitemap. Pesan dinamis dari halaman demo dibawa lewat `?text=` (CWA tidak mencatat query string, jadi angkanya agregat per template). Angka yang terbaca = **percobaan klik**, bukan pesan WhatsApp terkirim; pengguna dengan adblock/tanpa JS tidak terhitung. Tracking portfolio saat ini agregat di `/wa/portfolio/`.

---

## 8. Deploy ke Cloudflare Workers (Static Assets)

> Diperbarui 2026-09-22: Cloudflare kini merekomendasikan **Workers** untuk proyek baru; Pages masih berfungsi tapi bukan lagi fokus pengembangan. Penggunaannya tetap sederhana — untuk situs full static bahkan lebih sederhana dari Pages.
>
> **Status 2026-10-31:** situs sudah live di `https://pixcode.my.id`, custom domain aktif, dan deploy produksi berjalan lewat Workers Builds.

1. Repo di-push ke GitHub.
2. Cloudflare Dashboard → **Workers & Pages → Create → Import a repository** (Workers Builds) — atau deploy manual via `npx wrangler deploy`.
3. Konfigurasi `wrangler.jsonc` di repo:
   ```jsonc
   {
     "name": "pixcode-studio",
     // Set this to today's date
     "compatibility_date": "2026-09-22",
     "assets": { "directory": "./dist" }
   }
   ```
   (Tanpa `main`, tanpa adapter, tanpa `compatibility_flags` — murni static assets.)
4. Build command `npm run build` (output `dist`), setiap push ke branch produksi → auto-deploy; PR dapat preview URL.
5. Custom domain: tambahkan di pengaturan Workers — DNS otomatis jika domain sudah di Cloudflare.
6. Opsional: `not_found_handling: "404-page"` agar `404.html` tersaji sebagai halaman error.
7. **CI/CD final (keputusan user): kombinasi** —
   - **Workers Builds** (dashboard) = deploy otomatis: push ke `main` → deploy produksi; PR → preview URL.
   - **GitHub Actions** (`.github/workflows/ci.yml`) = QA gate tanpa deploy: `astro check` + `npm run build` di setiap push/PR.
   - **Node version**: set env var `NODE_VERSION=24` di settings build Cloudflare (Node 24 LTS — minimum Astro 7 adalah ≥ 22.12); `.nvmrc` berisi `24` juga disertakan di repo.

Catatan: situs ini full static sehingga tidak perlu adapter/Worker code. Jika nanti butuh fitur server-side (misal form dengan simpan database), jalur upgrade-nya adapter `@astrojs/cloudflare` + `main` di wrangler.jsonc — struktur sekarang tidak perlu dirombak.

---

## 9. Checklist Data yang Dibutuhkan dari User

> Sebelum build dimulai, data berikut perlu diisi. Tandai yang sudah ada.

| # | Data | Status |
|---|---|---|
| 1 | Nomor WhatsApp bisnis | ✅ `6281513135408` |
| 2 | Username Instagram | ⬜ dibuat nanti (link IG ditambahkan belakangan) |
| 3 | Email bisnis | ✅ `pixcodestd@gmail.com` |
| 4 | Kota/basis operasional | ✅ Bandung |
| 5 | Harga paket | ✅ Final 2026-10-31 (playbook): UMKM Rp 400rb flat; Hemat Rp 650rb; Hemat Plus Rp 1jt; Standar Rp 3jt + server; POS Rp 6jt. Detail fitur di `packages.ts`; 16 add-on di `addons.ts`. |
| 6 | Estimasi lama pengerjaan per paket | ✅ Final 2026-10-27: UMKM & Hemat 3–7 hari kerja, Hemat Plus 1–2 minggu, Standar 2–4 minggu, POS 3–6 minggu (sejak materi lengkap). Biaya domain/server di luar harga paket, dicantumkan terpisah di proposal. |
| 7 | Domain final | ✅ `https://pixcode.my.id` — aktif dan live per 2026-10-31 |
| 8 | Logo (file SVG/PNG) | ✅ Final 2026-10-31: mark A (Staircase Four) + lockup `pixcode STUDIO`; 15 SVG di `public/brand/`, favicon, apple touch icon, OG, dan `docs/BRAND-GUIDE.pdf` |
| 9 | Aset portfolio | ✅ 7 proyek terkumpul → detail di `docs/PORTFOLIO-DATA.md`; thumbnail asli 5 PNG + 2 SVG; klien dianonimkan |
| 10 | Foto tim | ✅ foto asli terpasang di `src/assets/team/` (dehan.jpg, destra.jpg) |
| 11 | Warna aksen final | ✅ **Teal/hijau** |
| 12 | Tagline final | ✅ Terkunci (bagian 2) |

---

## 10. Urutan Pengerjaan (setelah brief disetujui)

> Status 2026-10-31: seluruh langkah di bawah sudah selesai; sisa pekerjaan bersifat konten/QA berkala.

1. Scaffold proyek **Astro 7** + Tailwind v4 + `wrangler.jsonc` + konfigurasi deploy.
2. `site.ts` + `packages.ts` dengan data yang sudah diterima.
3. Layout dasar (Header/Footer/SEO) + global.css tokens.
4. Home lengkap (semua section).
5. Halaman Layanan → Tentang → Kontak.
6. Content collections portfolio + halaman grid & detail.
7. Isi konten asli (aset dari user) + og-image + favicon.
8. QA mobile/desktop, Lighthouse, meta SEO.
9. Push ke GitHub → connect Cloudflare Workers (Workers Builds) → verifikasi deploy.
10. Custom domain + Cloudflare Web Analytics (opsional).

---

Aturan kerja AI agen untuk repo ini ada di **`AGENTS.md`**.

---

*Terakhir diperbarui: 2026-10-31 — sinkronisasi docs dengan kodebase: domain live, harga/add-on final, 3 template Paket UMKM, tracking `/wa`, foto tim, dan identitas visual final (Brand Guide 1.0).*
