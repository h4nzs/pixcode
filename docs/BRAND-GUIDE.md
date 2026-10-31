# Brand Guide — Pixcode Studio

**Versi:** 1.0 (final) · **Tanggal:** 31 Oktober 2026 · **Ruang lingkup:** digital saja (web, sosial, dokumen digital).

Sumber kebenaran teknis:

- `src/data/brand.ts` — path wordmark, geometri mark, metrik lockup.
- `src/styles/global.css` — token warna dan tipografi situs.
- `public/brand/` — file logo siap pakai.
- `public/favicon.svg`, `public/apple-touch-icon.png`, `public/og-image.png`.
- `docs/brand/og-source.svg` — sumber gambar Open Graph.
- `docs/BRAND-GUIDE.pdf` — versi visual guide ini.

---

## 1. Inti brand

**Nama:** Pixcode Studio
**Kategori:** studio pembuatan website dan aplikasi untuk UMKM.
**Basis:** Bandung, melayani seluruh Indonesia.
**Positioning:** website yang cakupannya jelas, harganya jelas, dan prosesnya jelas.

**Karakter:**

- **Berani** — tipografi tebal, warna tegas, tidak bertele-tele.
- **Minimal** — sedikit elemen, banyak ruang kosong, tanpa hiasan berlebih.
- **Ramah** — bahasa manusia, tidak menggurui, tidak memakai jargon teknis tanpa penjelasan.

**Tagline utama:** `Website jelas. Harga jelas. Proses jelas.`
**Tagline situs:** `Website untuk UMKM — jelas cakupannya, jelas harganya, jelas prosesnya.`

**Ide dasar mark:** piksel adalah modul; kode adalah struktur. Mark digambarkan sebagai tangga empat blok yang naik, bukan kurung `</>` karena kurung sudah menjadi klise identitas developer.

---

## 2. Logo

### 2.1 Mark — Staircase Four

Mark adalah empat blok pada kanvas 32 × 32:

| Blok | Posisi (x, y) | Ukuran | Sudut | Warna | Peran |
|---|---:|---:|---:|---|---|
| 1 | 20, 2 | 10 × 10 | 1.2 | Teal 500 | Langkah teratas |
| 2 | 10, 10 | 8 × 8 | 1.0 | Teal 500 | Langkah tengah |
| 3 | 2, 18 | 6 × 6 | 0.8 | Teal 500 | Langkah terkecil |
| 4 | 20, 18 | 10 × 10 | 1.2 | Teal 700 | Jangkar / penyeimbang |

Tiga blok mengecil ke kiri bawah membentuk gerak naik; blok keempat yang lebih gelap mengunci komposisi di kanan bawah. Mark harus selalu memakai geometri ini — jangan mengubah ukuran, urutan, atau jarak blok.

**Grid:** kanvas 32 unit; jarak antar blok 2 unit; margin aman 2 unit. Sudut membulat 0.8–1.2 unit agar terasa ramah, bukan kotak kaku.

### 2.2 Lockup

| Varian | Isi | Pemakaian |
|---|---|---|
| Horizontal lengkap | Mark + `pixcode` + `STUDIO` | Footer, OG image, dokumen, presentasi |
| Horizontal compact | Mark + `pixcode` | Header situs, navigasi, tempat sempit |
| Stacked | Mark di atas, `pixcode` + `STUDIO` di bawah | Format persegi, sampul, sosial |
| Mark only | Empat blok | Favicon, app icon, avatar, watermark |
| Wordmark | `pixcode` saja | Saat mark sudah ada di dekatnya |

Wordmark adalah **Plus Jakarta Sans ExtraBold** yang sudah dikonversi menjadi path, dengan tracking -20/1000 dan huruf `i` tanpa titik yang diganti kotak teal. `STUDIO` memakai **Plus Jakarta Sans Bold** dengan tracking 100/1000. Jangan mengetik ulang logo memakai font biasa.

### 2.3 Ruang aman dan ukuran minimum

**Ruang aman:** minimal **8 unit** (25% tinggi mark) di setiap sisi lockup. Tidak boleh ada teks, garis, atau tepi gambar yang masuk ke area ini.

**Ukuran minimum digital:**

| Varian | Minimum |
|---|---:|
| Horizontal lengkap | 160 px lebar |
| Horizontal compact | 120 px lebar |
| Stacked | 96 px lebar |
| Mark only | 20 px |
| Favicon | 16 px (mark disederhanakan) |

Di bawah ukuran minimum, gunakan mark only. Jangan mengecilkan lockup lengkap sampai `STUDIO` tidak terbaca.

### 2.4 Varian warna

| Varian | Latar | Warna |
|---|---|---|
| Full color | Putih / off-white / mint muda | Teal 500 + Teal 700 + Ink + Slate 600 |
| Inverted | Teal 700, Ink, atau foto gelap | Teal 300 + putih + Slate 300 |
| Mono | Satu warna, stempel, dokumen hitam-putih | 100% hitam; untuk versi putih di latar gelap gunakan inverted |

Jangan memakai full color di latar gelap: blok jangkar Teal 700 akan tenggelam. Gunakan varian inverted.

**Jangan:**

- memutar, meregangkan, atau memiringkan logo;
- menambah gradient, shadow, stroke, atau efek 3D;
- mengubah warna di luar palet;
- menata ulang blok mark;
- memakai kurung `</>` atau ikon terminal sebagai pengganti mark;
- menaruh logo di atas foto ramai tanpa bidang kontras;
- mengetik ulang wordmark dengan font lain.

### 2.5 File logo

| File | Format | Catatan |
|---|---|---|
| `public/brand/pixcode-logo-horizontal.svg` | SVG | Lockup lengkap, latar terang |
| `public/brand/pixcode-logo-horizontal-inverted.svg` | SVG | Lockup lengkap, latar gelap |
| `public/brand/pixcode-logo-horizontal-mono.svg` | SVG | Satu warna hitam |
| `public/brand/pixcode-logo-compact.svg` (+ inverted, mono) | SVG | Lockup compact, header |
| `public/brand/pixcode-logo-stacked.svg` (+ inverted, mono) | SVG | Format persegi |
| `public/brand/pixcode-mark.svg` (+ inverted, mono) | SVG | Mark only |
| `public/brand/pixcode-wordmark.svg` (+ inverted, mono) | SVG | Wordmark saja |
| `public/brand/pixcode-logo-horizontal.png` | PNG 600 × 102 | Cadangan raster / JSON-LD |
| `public/favicon.svg` | SVG 32 × 32 | Mark di atas Teal 700, sudut 7 |
| `public/apple-touch-icon.png` | PNG 180 × 180 | Tanpa sudut membulat (OS yang membulatkan) |
| `public/og-image.png` | PNG 1200 × 630 | Gambar share WhatsApp/sosial |

PDF di `docs/BRAND-GUIDE.pdf` dihasilkan dari `docs/brand/brand-guide.html`:

```bash
google-chrome-stable --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=docs/BRAND-GUIDE.pdf \
  --virtual-time-budget=10000 \
  file://$PWD/docs/brand/brand-guide.html
```

---

## 3. Warna

### 3.1 Palet inti

| Nama | HEX | RGB | CMYK (aproksimasi) | Pantone (aproksimasi) | Peran |
|---|---|---|---|---|---|
| Teal 700 | `#0F766E` | 15, 118, 110 | 87, 0, 7, 54 | 329 C | Aksen utama teks, tombol, mark jangkar |
| Teal 500 | `#14B8A6` | 20, 184, 166 | 89, 0, 10, 28 | 326 C | Blok mark, garis, aksen grafis |
| Mint 100 | `#CCFBF1` | 204, 251, 241 | 20, 2, 5, 0 | 317 C | Latar lembut, badge, highlight |
| Ink | `#0F172A` | 15, 23, 42 | 64, 45, 0, 84 | Black 6 C | Judul, wordmark |
| Slate 600 | `#475569` | 71, 85, 105 | 32, 19, 0, 59 | 431 C | Body text, `STUDIO` |
| Paper | `#FFFFFF` | 255, 255, 255 | 0, 0, 0, 0 | — | Latar utama |
| Off-white | `#FAFAFA` | 250, 250, 250 | 0, 0, 0, 2 | — | Latar section |
| WhatsApp | `#25D366` | 37, 211, 102 | 83, 0, 52, 17 | 354 C | **Hanya** tombol WhatsApp |

CMYK/Pantone adalah aproksimasi untuk kebutuhan digital. Karena brand ini digital-only, warna akhir selalu mengacu ke HEX. Jika suatu saat perlu cetak, lakukan proofing fisik.

### 3.2 Aturan pakai

- Rasio kasar: **60% Paper/Off-white, 30% Ink/Slate, 10% Teal**.
- Teal 500 untuk elemen grafis dan blok mark; **jangan** untuk teks kecil di atas putih (kontras 2.49:1).
- Teal 700 untuk teks/tautan di atas putih (5.47:1) dan tombol solid dengan teks putih (5.47:1).
- WhatsApp green hanya untuk CTA WhatsApp. Teks di atasnya memakai Ink (9.0:1), bukan putih (1.98:1).
- Gradient tidak dipakai. Shadow hanya untuk elevasi kartu yang halus.
- Jangan memakai warna di luar palet untuk logo.

---

## 4. Tipografi

**Satu keluarga:** Plus Jakarta Sans, self-host lewat Astro Fonts API (`--font-jakarta`).

| Peran | Weight | Ukuran | Catatan |
|---|---:|---:|---|
| Display / headline | 800 | 40–72 px | Tracking rapat (-0.04em sampai -0.055em) |
| Heading | 700–800 | 24–40 px | Hierarki jelas, tanpa huruf dekoratif |
| Body | 400–500 | 16–18 px | Line-height 1.6–1.75 |
| Label / kicker | 700 | 12–13 px | Uppercase, tracking 0.08–0.14em |
| Tombol | 600–700 | 14–16 px | Kalimat aktif, singkat |

Wordmark memakai ExtraBold yang sudah menjadi path. `STUDIO` memakai Bold dengan tracking lebar. Demo template Paket UMKM memakai font sendiri karena merupakan mockup usaha fiktif — bukan perluasan brand Pixcode.

---

## 5. Elemen grafis

- **Motif piksel:** satu blok atau cluster empat blok. Gunakan hemat: penanda section, bullet, sudut gambar, atau watermark.
- **Grid:** garis tipis `#E2E8F0`, hanya sebagai pemisah; jangan membuat pola grid penuh di belakang teks.
- **Ikon:** garis, stroke 1.5–2 px, ujung membulat. Ikon WhatsApp hanya di konteks WhatsApp.
- **Fotografi:** foto asli, cahaya natural, crop konsisten. Tanpa stok foto generik. Alt text deskriptif.
- **Motion:** fade/slide ringan saat scroll; hormati `prefers-reduced-motion`.
- **Dilarang:** gradient, bracket `</>`, efek neon, pola piksel bertumpuk, bayangan keras, dan ilustrasi 3D yang tidak berhubungan dengan produk.

---

## 6. Aplikasi

| Media | Aturan |
|---|---|
| Header situs | Lockup compact, tinggi 32 px |
| Footer situs | Lockup lengkap, tinggi 40 px, di atas Off-white |
| Favicon | Mark A di atas Teal 700, sudut 7 px |
| Apple touch icon | Mark penuh, latar Teal 700, tanpa sudut (OS membulatkan) |
| OG image | Lockup compact kiri atas; headline tiga baris; kartu mint dengan mark besar |
| Avatar sosial | Mark only di atas Teal 700; jangan pakai lockup lengkap |
| Dokumen/proposal | Lockup lengkap; header putih; aksen Teal 700; tipografi Plus Jakarta Sans |

---

## 7. Suara brand

**Lakukan:**

- Sebut angka dan batas: `Rp 400.000`, `3–7 hari kerja`, `revisi 2x`.
- Panggil pemilik usaha dengan `kamu`.
- Jelaskan istilah teknis: `online 24 jam`, bukan `high availability`.
- CTA hangat: `Tanya-tanya dulu, gratis`.

**Hindari:**

- `solusi digital revolusioner`, `next-gen`, `game-changer`;
- klaim tanpa bukti (`ribuan klien`, `terbaik di Indonesia`);
- kalimat pasif yang menyembunyikan siapa melakukan apa;
- jargon teknis tanpa terjemahan.

---

## 8. Tata kelola

1. Perubahan logo dimulai dari `src/data/brand.ts` dan file di `public/brand/`; jangan mengedit inline di banyak komponen.
2. Setelah mengubah aset, perbarui `pixcode-logo-horizontal.png`, `favicon.svg`, `apple-touch-icon.png`, dan `og-image.png` bila terdampak.
3. Perbarui dokumen ini dan `docs/BRAND-GUIDE.pdf`, lalu jalankan `npm run check` dan `npm run build`.
4. Jangan menambah gradient, font baru, atau warna aksen tanpa keputusan eksplisit.
5. Brand ini digital-only. Aset cetak/merch belum termasuk lingkup.

**Riwayat versi:** 1.0 — 31 Oktober 2026 — mark A (Staircase Four) dipilih; lockup `pixcode STUDIO`; palet teal; wordmark path; favicon/OG/guide final.
