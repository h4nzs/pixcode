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

### 3. ASTRO OPTIMIZATION (zero-JS by default — tapi utamakan yang paling optimal)
- **Default tetap zero-JS**: halaman dimulai tanpa `<script>`; kebutuhan interaksi sederhana (menu mobile, FAQ accordion, filter, reveal-on-scroll) diupayakan lewat HTML/CSS murni (`<details>`, checkbox/`:checked`, dsb.) atau `<script>` vanilla inline yang kecil.
- **JS tidak dilarang — yang dilarang adalah JS yang sia-sia.** Jika sudah mentok dengan HTML/CSS murni, atau ada pendekatan ber-JS yang terbukti lebih baik/optimal (UX, aksesibilitas, performa, keterpeliharaan), gunakan pendekatan terbaik itu: `<script>` vanilla, atau islands `client:*` (React/Svelte/dsb.) kalau memang paling optimal. Satu-satunya syarat: **tulis alasannya** (di komentar kode/PR) mengapa opsi itu paling optimal.
- **Kerangka keputusan** (urut): (1) bisa tanpa JS dan hasilnya tetap baik → tanpa JS; (2) butuh JS → vanilla inline dulu; (3) vanilla mulai berantakan/berat → baru pertimbangkan library/islands. Pilih yang paling optimal, bukan yang paling "murni" — dan sebaliknya, jangan paksakan JS kalau CSS cukup.
- **Batas tetap**: total JS dijaga sekecil mungkin; target Lighthouse mobile 90+ dan mobile-first tidak boleh dikorbankan. Setiap penambahan JS harus bisa dipertanggungjawabkan manfaatnya.
- Data portfolio & paket via **Astro Content Collections / file data TypeScript** — jangan hardcode konten di markup komponen. Status situs live klien via field `liveStatus` (default `"active"`; `"temporarily-offline"` = klien mematikan server sementara — proyek tetap dipamerkan dengan info status, jangan hapus proyeknya).
- Semua gambar wajib lewat `astro:assets` (`<Image />`) — WebP otomatis, `width`/`height` eksplisit, lazy-load di bawah fold.
- Font: **Plus Jakarta Sans via Astro Fonts API** (provider `fontsource`) — self-host, fallback teroptimasi & preload otomatis oleh Astro. Satu keluarga font saja.

### 4. AIO / GEO / SEO READY
- JSON-LD **`ProfessionalService`** di Home: nama, nomor WA, kota (Bandung), URL, **area layanan hibrida: `City` (Bandung + kota besar) + `Country: Indonesia`** — sinyal lokal & nasional sekaligus, tanpa mendaftar semua kota (keyword stuffing). Plus `sameAs` (IG/GitHub saat ada). **`FAQPage`** untuk FAQ (termasuk FAQ "melayani di luar Bandung?" — jawaban siap-kutip AI engine), **`BreadcrumbList`** di detail portfolio.
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
- **`src/content/projects/`** — 1 file `.md` per proyek, skema sesuai `src/content.config.ts` (lihat `docs/PORTFOLIO-DATA.md`). Halaman detail berformat **studi kasus**: `challenge` (masalah bisnis), `before`/`after` (perubahan nyata bagi pemilik usaha), `stack` (teknologi, chip — GEO/kredibilitas). Semua nullable — section hanya muncul saat field diisi; draft konten klien wajib direview user sebelum dianggap fakta.
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
- Jangan tambah dependency baru tanpa alasan kuat yang disebutkan. Interaksi mulai dari vanilla JS; library/framework hanya jika jelas lebih optimal dan alasannya ditulis (lihat §3).

## Batas Perilaku

- Jangan mengubah keputusan yang sudah terkunci di `docs/` (tema light, teal, tagline, anonimisasi, harga placeholder, dsb.) tanpa konfirmasi user — ajukan sebagai pertanyaan dulu.
- Jangan `git commit`/`push` kecuali diminta.
- Jika info yang dibutuhkan tidak ada di docs/ dan tidak bisa diinfer, **tanya user** — jangan mengarang.
- Setelah menambah/mengubah fitur: jalankan `npm run build` untuk verifikasi sebelum melapor selesai.
