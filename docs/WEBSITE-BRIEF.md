# Website Brief — Pixcode Studio

> Dokumen acuan sebelum development. Semua keputusan yang sudah disepakati tercatat di sini.
> Status: **Draft untuk review — belum ada kode yang ditulis.**

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

**Motif visual brand:** "pix" (piksel/square kecil) + "code" — dipakai sebagai elemen dekoratif (grid piksel, sudut square, aksen kotak kecil) agar brand terasa teknis tapi tetap bersih.

---

## 3. Sitemap & Struktur Halaman

```
/                    Home (landing utama)
/layanan             Detail 4 paket + add-on + FAQ harga
/portfolio           Grid semua proyek
/portfolio/[slug]    Detail per proyek (studi kasus singkat)
/tentang             Cerita studio + tim
/kontak              CTA WhatsApp, IG, info kontak
/faq                 (opsional, bisa digabung ke Home & Layanan)
```

### 3.1 Home — urutan section
1. **Hero** — headline value prop + subteks + 2 CTA (WhatsApp / Lihat Paket) + visual mockup browser HP. Badge kecil: "Balas cepat via WhatsApp". **Plus bukti cepat di atas fold** (riset §3): 3 thumbnail portfolio atau 1 kalimat bukti — kredibilitas harus terlihat sebelum scroll.
2. **Untuk siapa** — strip kategori UMKM yang dilayani (toko, klinik, jasa, F&B, …).
3. **Paket ringkas** — 5 kartu paket (Hemat, Hemat Plus, Standar/Dynamic, Desktop POS) dengan rentang harga + **Paket UMKM (Rp 400.000) di-highlight** sebagai kartu unggulan + CTA per kartu.
   - **Gaya highlight (terkunci)**: badge **"Paling Laris"** warna teal di kartu UMKM + border lebih tebal + posisi paling depan di antara kartu paket.
4. **Portfolio highlight** — 3–4 proyek terbaru + link "lihat semua".
5. **Cara kerja** — versi klien dari SOP (4 langkah: Konsultasi → Penawaran & DP → Pengerjaan & Demo → Live + Support). Tambahkan catatan kecil tentang batas revisi.
6. **Kenapa Pixcode** — 4 poin pembeda (transparansi, batas revisi, proses rapi, support).
7. **FAQ singkat** — 5–6 pertanyaan umum (berapa lama?, sudah termasuk domain?, cara bayar?, bisa revisi?).
8. **CTA akhir** — ajakan konsultasi gratis via WA.
9. **Footer** — navigasi, IG, WA, copyright.

### 3.2 Halaman Layanan
- Tabel/kartu detail per paket (**5 paket, UMKM paling menonjol**): harga, daftar **termasuk**, daftar **tidak termasuk (add-on)**, batas revisi, estimasi pengerjaan.
- **Trust line tepat di bawah grid harga** (riset §7): "DP 50%, lunas setelah kamu approve demo" — pengurangan risiko di titik keputusan.
- **Mini-FAQ harga** dengan H2 berbentuk pertanyaan + jawaban 2–3 kalimat (GEO answer blocks, riset §6): kenapa ada rentang harga, apa yang bikin harga naik, biaya revisi lewat batas.
- Section add-on berbayar (halaman tambahan, custom domain, fitur dinamis, dll).
- Catatan alur pembayaran (DP 50% / pelunasan 50% setelah approve staging).

### 3.3 Halaman Portfolio
- Grid kartu: thumbnail, label proyek (klien **dianonimkan**, cth. "Toko F&B — Bandung"), kategori, tag paket.
- Filter sederhana per kategori (website / web-app / POS).
- **Halaman detail per proyek**: ringkasan masalah → solusi → fitur utama → **manfaat bagi pemilik usaha** (bukan cuma teknologi) → screenshot **desktop + mobile** dalam mockup frame → link live (jika ada) → testimonial klien (jika ada).
- Kategori portfolio final: `website | web-app | pos` — proyek internal/repo GitHub tampil dengan label **"Riset & Pengembangan"** (keputusan user).

### 3.4 Halaman Tentang
- Cerita singkat studio (kenapa fokus UMKM).
- Tim: Dehans & Destra — nama, peran, foto/avatar.
- Nilai kerja (transparan, tepat waktu, komunikatif).

### 3.5 Halaman Kontak
- Tombol WA besar (deep link `wa.me` dengan teks template otomatis).
- Instagram, email (opsional), jam operasional, kota basis.
- Tanpa form backend dulu — jika nanti perlu form, jalur upgrade-nya adapter `@astrojs/cloudflare` (Workers) atau Worker terpisah sebagai API.

---

## 4. Data Paket (sumber: dokumen SOP v2)

> Diperbarui 2026-09-22: **harga final dari user** (bukan placeholder lagi — kecuali estimasi pengerjaan). Catatan: harga Standar/Dynamic di SOP v2 (Rp3,5jt–8jt) sudah usang; angka di bawah yang berlaku. Semua harga nanti disimpan di `src/data/packages.ts` (satu file, semua halaman ikut berubah).

| Paket | Harga | Termasuk | Tidak termasuk (add-on berbayar) | Revisi maks |
|---|---|---|---|---|
| **UMKM** ⭐ *(highlight)* | **Rp 400.000** | ❓ menunggu detail dari user | ❓ | ❓ |
| **Hemat** | Rp 500.000 – 800.000 | 1 halaman, tombol WA/Maps, SEO dasar | Halaman tambahan, custom domain | 1x |
| **Hemat Plus** | Rp 650.000 – 1.500.000 | 2–3 halaman, custom domain, SSL | Fitur dinamis, form dengan database | 2x |
| **Standar / Dynamic** | Rp 1.000.000 – 3.000.000 | Login admin, CRUD data, 1 modul laporan | Modul tambahan (integrasi pembayaran, multi-cabang), role user > 1 tingkat | 2x, revisi besar dihitung ulang |
| **Desktop POS** | Rp 2.500.000 – 8.000.000 | Kasir + stok dasar, cetak struk thermal, laporan harian | Sinkronisasi multi-device, integrasi e-commerce online | 2x |

> **Paket UMKM** adalah paket baru (tidak ada di SOP v2) dan menjadi **paket unggulan yang di-highlight** di halaman Home & Layanan. Gaya highlight: badge "Paling Laris" (teal) + border tebal + posisi paling depan. Detail fitur/revisi menyusul dari user.

Aturan yang diwarisi dari SOP (tetap berlaku di web): biaya revisi di luar batas dicantumkan di proposal, bukan dikejutkan belakangan. Di web cukup tampilkan "revisi maks" + "detail lengkap dijelaskan saat konsultasi".

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
| Komponen UI | Kartu dengan border tipis + shadow halus; tombol primary solid indigo; tombol WA hijau (#25D366) agar dikenali |
| Motion | Ringan saja: fade/slide saat scroll (IntersectionObserver), tanpa library berat |
| Responsive | Mobile-first; nav jadi drawer di HP |

### Style token (Tailwind v4 `@theme` di `global.css`)
```css
@import "tailwindcss";

@theme {
  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --color-brand-50:  #f0fdfa;  /* teal scale */
  --color-brand-500: #14b8a6;
  --color-brand-600: #0d9488;
  --color-brand-700: #0f766e;
  --color-wa: #25d366;
}
```
*(Tanpa `tailwind.config.js` — konfigurasi lewat CSS, sesuai Tailwind v4.)*

---

## 6. Arsitektur Teknis

### 6.1 Struktur proyek Astro
```
pixcode-studio/
├── astro.config.mjs          # site URL, integrasi sitemap, @tailwindcss/vite
├── wrangler.jsonc            # deploy Workers: { assets: { directory: "./dist" } } — tanpa adapter
├── package.json
├── public/
│   ├── favicon.svg
│   ├── og-image.png          # gambar share WhatsApp/sosmed
│   └── robots.txt
├── src/
│   ├── assets/               # foto portfolio & tim (dioptimalkan Astro <Image>)
│   ├── components/           # Header, Footer, Hero, PackageCard, ProjectCard,
│   │                         # CtaBanner, FaqItem, SectionHeading, dst.
│   ├── content/
│   │   └── projects/         # 1 file .md per proyek (content collections)
│   ├── data/
│   │   ├── site.ts           # WA number, IG, email, kota, url — SINGLE SOURCE
│   │   └── packages.ts       # data 4 paket (dipakai Home & Layanan)
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head> SEO, Header, Footer
│   ├── pages/
│   │   ├── index.astro
│   │   ├── layanan.astro
│   │   ├── portfolio/index.astro
│   │   ├── portfolio/[slug].astro
│   │   ├── tentang.astro
│   │   └── kontak.astro
│   └── styles/global.css     # Tailwind v4 + @theme tokens
```

### 6.2 Skema data portfolio (content collection)
```ts
// src/content.config.ts
title: string
client: string          // label anonim, cth. "Toko F&B — Bandung" (keputusan: klien tidak ditampilkan apa adanya)
category: "website" | "web-app" | "pos"   // "web-app" ditambahkan untuk proyek internal
package: "hemat" | "hemat-plus" | "standar" | "pos"
year: number
thumbnail: ImageMetadata      // wajib
gallery?: ImageMetadata[]     // 2–6 screenshot
liveUrl?: string              // link website live klien
repoUrl?: string              // link GitHub (untuk proyek internal/riset)
description: string           // 2–3 kalimat ringkasan
features?: string[]           // fitur utama
testimonial?: { text: string; author: string }
featured?: boolean            // tampil di Home highlight
```

### 6.3 Keputusan teknis
- **Full static, tanpa adapter Cloudflare** — cukup `astro build` → folder `dist`.
- **Deploy via Cloudflare Workers Static Assets**: repo cukup berisi `wrangler.jsonc` minimal (`assets.directory: "./dist"`). Git connect (Workers Builds) memberi auto-deploy per push + preview URL per PR — perilaku yang sama seperti Pages dulu.
- **Astro 7**: Rust compiler default (build lebih cepat), wajib Node ≥ 22.12 lokal & CI; font via Astro Fonts API (Fontsource), Zod 4 untuk skema content collection.
- Harga & kontak diatur di `src/data/` agar ganti angka/nomor cukup 1 tempat.
- Optimasi gambar pakai `astro:assets` (WebP otomatis, lazy-load).
- Form kontak **tidak dulu** — CTA ke `wa.me/<nomor>?text=…` (template pesan otomatis).

---

## 7. SEO & Performa

- Meta title/description per halaman + canonical.
- Open Graph + Twitter card (og-image di `public/`), penting karena link sering dibagikan via WhatsApp.
- Sitemap (`@astrojs/sitemap`) + `robots.txt`.
- JSON-LD `ProfessionalService` (nama, WA, kota, layanan) di Home, termasuk **area layanan: Bandung, Garut, Jakarta, Tasikmalaya**; `FAQPage` untuk FAQ; `BreadcrumbList` di detail portfolio; `sameAs` untuk entitas.
- **GEO answer blocks** (riset §6): jawaban langsung 2–3 kalimat (40–60 kata) di atas section penting; H2/H3 berbentuk pertanyaan di Layanan & FAQ; klaim selalu disertai angka + tanggal.
- Heading semantik (satu H1 per halaman), alt text semua gambar.
- Target: skor Lighthouse mobile 90+ (statis + font via Astro Fonts API + gambar WebP = realistis).
- Analytics opsional: Cloudflare Web Analytics (gratis, tanpa cookie).

---

## 8. Deploy ke Cloudflare Workers (Static Assets)

> Diperbarui 2026-09-22: Cloudflare kini merekomendasikan **Workers** untuk proyek baru; Pages masih berfungsi tapi bukan lagi fokus pengembangan. Penggunaannya tetap sederhana — untuk situs full static bahkan lebih sederhana dari Pages.

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
| 5 | Harga paket | ✅ Final per 2026-09-22: UMKM Rp 400rb (highlight), Hemat 500–800rb, Hemat Plus 650rb–1,5jt, Standar 1–3jt, POS 2,5–8jt. Detail fitur Paket UMKM ⬜ |
| 6 | Estimasi lama pengerjaan per paket | ⬜ placeholder dulu (keputusan user) |
| 7 | Domain final | ✅ `pixcode.my.id` (sementara — tinggal ganti 1 nilai di `site.ts` nanti) |
| 8 | Logo (file SVG/PNG) | ⬜ pakai logo sendiri, file menunggu dikirim |
| 9 | Aset portfolio | ✅ 6 proyek terkumpul → detail di `docs/PORTFOLIO-DATA.md` (foto placeholder, klien dianonimkan) |
| 10 | Foto tim | ⬜ placeholder dulu |
| 11 | Warna aksen final | ✅ **Teal/hijau** |
| 12 | Tagline final | ✅ Terkunci (bagian 2) |

---

## 10. Urutan Pengerjaan (setelah brief disetujui)

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

*Terakhir diperbarui: 2026-09-22 — revisi teknologi: Astro 7, Tailwind v4.3.x, Node ≥ 22.12, hosting pindah ke Cloudflare Workers Static Assets (hasil audit kedaluwarsa docs).*
