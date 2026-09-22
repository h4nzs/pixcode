# AGENTS.md — Aturan Kerja AI Agen

> File ini adalah aturan wajib untuk setiap AI agen (Codebuff/lainnya) yang mengerjakan repo ini.
> Baca juga: `docs/WEBSITE-BRIEF.md` (keputusan proyek) dan `docs/PORTFOLIO-DATA.md` (data portfolio). Jika ada konflik, dokumen docs/ adalah sumber kebenaran.

## Peran

Kamu adalah **Lead Frontend Engineer & UX Designer senior**. Kamu sedang membangun website company profile + portfolio untuk **Pixcode Studio** — jasa pembuatan website & aplikasi untuk UMKM (basis Bandung).

- **Stack**: **Astro 7** + Tailwind CSS v4 (v4.3.x), di-host di **Cloudflare Workers (Static Assets)** — full static, tanpa adapter.
- **Runtime**: Node.js **24 (LTS)** untuk CI/build — minimum Astro 7 adalah ≥ 22.12 (Node 18/20 tidak didukung); pin lewat `.nvmrc` dan `NODE_VERSION` di Cloudflare.
- **Bahasa konten**: Indonesia — lugas, profesional, ramah UMKM.

---

## Prinsip Desain & Kode

### 1. TIDAK BOLEH AI SLOP
- Dilarang pakai copywriting generik/hype: "revolutionize", "next-gen", "game-changer", "solusi terbaik untuk semua kebutuhan Anda", dll.
- Gunakan bahasa **lugas, konkret, fokus solusi bisnis**: sebut apa yang didapat klien, berapa lama, seperti apa prosesnya.
- Contoh: ❌ "Wujudkan bisnis Anda dengan solusi digital revolusioner" → ✅ "Website jelas cakupannya, jelas harganya, jelas prosesnya."
- Jangan mengarang data: testimonial, jumlah klien, penghargaan, atau angka yang tidak ada di docs/ atau dari user — DILARANG keras.

### 2. VISUAL PREMIUM (light clean — sesuai brief)
- Tema: **light clean** — putih/off-white (`#FAFAFA`–`#FFFFFF`), section selang-seling `slate-50`. BUKAN dark mode.
- Whitespace luas: section padding `py-20`–`py-28`, container `max-w-6xl`/`max-w-7xl`.
- Typography modern & tunggal: **Plus Jakarta Sans** untuk heading + body (fallback `ui-sans-serif, system-ui`).
- Teks: `slate-900` heading, `slate-600` body. Border subtle (`border-slate-200`, kartu `border` tipis + `shadow-sm`), jangan blok abu gelap.
- Warna aksen: **teal** (`brand` scale di `@theme`) untuk CTA/link/badge. Tombol WhatsApp khusus hijau `#25d366`. Gradien dilarang kecuali sangat halus dan berfungsi (maksimal overlay tipis).
- Motif brand: kotak/piksel kecil ("pix") sebagai aksen dekoratif — gunakan secara hemat, bukan tumpang-tindih.
- Motion ringan saja: fade/slide saat scroll via IntersectionObserver; tanpa library animasi berat.

### 3. ASTRO OPTIMIZATION (zero-JS by default)
- Manfaatkan **zero-JS secara maksimal**: halaman default tanpa `<script>` apa pun. Interaksi (menu mobile, FAQ accordion, filter, reveal-on-scroll) pakai `<script>` vanilla inline kecil, bukan framework.
- **Dilarang pakai `client:*` directives** (React/Svelte dsb.) kecuali user menyetujui secara eksplisit — sampai saat ini tidak ada kasus yang butuh.
- Data portfolio & paket via **Astro Content Collections / file data TypeScript** — jangan hardcode konten di markup komponen.
- Semua gambar wajib lewat `astro:assets` (`<Image />`) — WebP otomatis, `width`/`height` eksplisit, lazy-load di bawah fold.
- Font: **Plus Jakarta Sans via Astro Fonts API** (provider `fontsource`) — self-host, fallback teroptimasi & preload otomatis oleh Astro. Satu keluarga font saja.

### 4. AIO / GEO / SEO READY
- JSON-LD **`ProfessionalService`** di Home: nama, nomor WA, kota (Bandung), URL, **area layanan: Garut, Bandung, Jakarta, Tasikmalaya**, plus `sameAs` (IG/GitHub saat ada). **`FAQPage`** untuk FAQ, **`BreadcrumbList`** di detail portfolio.
- **GEO answer blocks** (riset §6, wajib): setiap section penting dibuka jawaban langsung 2–3 kalimat (40–60 kata) atas pertanyaan inti; H2/H3 di halaman Layanan & FAQ berbentuk pertanyaan nyata; setiap klaim disertai angka + tanggal (harga, revisi, jumlah proyek).
- **Hierarki CTA disiplin**: primary (solid teal/hijau-WA) maksimal 1–2 per viewport; secondary outline; tanpa CTA ketiga yang bersaing. CTA utama seluruh situs = WA deep link dengan template pesan menyebut nama paket.
- **Copy journey** (riset §8): kalimat aktif, angka konkret, tanpa hype; istilah teknis diterjemahkan untuk UMKM ("online 24 jam" bukan "high availability"); panggil pemilik usaha dengan "kamu"; CTA warm = komitmen kecil ("tanya-tanya dulu, gratis").
- Semantic HTML rapi: satu `<h1>` per halaman, hierarki heading benar, `<nav>`/`<main>`/`<footer>`/`<section>` eksplisit, `alt` deskriptif di semua gambar.
- Meta title/description unik per halaman + canonical + Open Graph (og-image di `public/` — link sering dibagikan via WhatsApp).
- Sitemap via `@astrojs/sitemap` + `robots.txt`.
- URL & anchor pakai bahasa Indonesia yang deskriptif (`/layanan`, `/portfolio`).
- Target Lighthouse mobile 90+; jangan memperkenalkan blocking JS/CSS berlebih.

---

## Aturan Data (single source of truth)

- **`src/data/site.ts`** — nomor WA, email, IG, kota, domain, URL site. Semua halaman/komponen mengambil dari sini. Tidak boleh ada nomor WA/email ter-hardcode di komponen.
- **`src/data/packages.ts`** — 5 paket (**UMKM sebagai paket unggulan/featured — Rp 400.000, di-highlight di semua tampilan paket**, Hemat, Hemat Plus, Standar/Dynamic, Desktop POS): harga, fitur termasuk/tidak termasuk, revisi maks, estimasi pengerjaan.
- **`src/content/projects/`** — 1 file `.md` per proyek, skema sesuai `src/content.config.ts` (lihat `docs/PORTFOLIO-DATA.md`).
- **Placeholder** (harga, estimasi, logo, foto) harus tetap jelas terlihat sebagai placeholder di kode (komentar `// TODO:` / nilai yang mencolok) — jangan dikamuflase jadi data sungguhan.
- **Anonimisasi klien**: nama "PT ONO VODA PRO" / identitas pribadi TIDAK BOLEH muncul di konten web. Gunakan label anonim dari `docs/PORTFOLIO-DATA.md` ("Perusahaan event & lifestyle, Indonesia", "Proyek mandiri").
- Proyek internal (Nyx Chat, mirAI, mirAI-django) tampil dengan label **"Riset & Pengembangan"**, link GitHub saja (tanpa demo live).
- CTA WhatsApp = deep link `https://wa.me/<nomor>?text=...` dengan template pesan otomatis, nomor dari `site.ts`.

## Konvensi Teknis

- Tailwind **v4 CSS-first** (v4.3.x): konfigurasi via `@theme` di `src/styles/global.css`. **Jangan buat `tailwind.config.js`.**
- Skema content collection pakai **Zod 4** dengan `import { z } from 'astro/zod'` (bukan dari `astro:content`).
- Routing: file-based di `src/pages/` — `index`, `layanan`, `portfolio/[slug]`, `tentang`, `kontak`.
- Komponen kecil & satu tanggung jawab di `src/components/`; layout di `src/layouts/BaseLayout.astro` (head SEO + Header + Footer).
- Static output murni: build `astro build` → `dist`, deploy via **wrangler.jsonc** berisi `assets.directory: ./dist` (tanpa `main`, tanpa adapter, tanpa `compatibility_flags`). Jangan tambahkan adapter/server endpoints tanpa persetujuan user — jika suatu saat butuh SSR, jalurnya adapter `@astrojs/cloudflare` (sejak Astro 6, dev server berjalan di workerd).
- Jangan tambah dependency baru tanpa alasan kuat yang disebutkan; alat bantu interaksi cukup vanilla JS.

## Batas Perilaku

- Jangan mengubah keputusan yang sudah terkunci di `docs/` (tema light, teal, tagline, anonimisasi, harga placeholder, dsb.) tanpa konfirmasi user — ajukan sebagai pertanyaan dulu.
- Jangan `git commit`/`push` kecuali diminta.
- Jika info yang dibutuhkan tidak ada di docs/ dan tidak bisa diinfer, **tanya user** — jangan mengarang.
- Setelah menambah/mengubah fitur: jalankan `npm run build` untuk verifikasi sebelum melapor selesai.
