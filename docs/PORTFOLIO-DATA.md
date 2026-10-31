# Data Portfolio — Pixcode Studio

> Sumber data untuk content collection `src/content/projects/` (1 entri = 1 file `.md` saat build).
> Thumbnail: **asli terpasang** — 5 screenshot PNG + 2 cover SVG. Galeri/screenshot mobile & before-after visual masih menyusul.
> Testimonial: **belum ada** — field testimonial dikosongkan untuk semua entri.
> Data live site & repo diriset otomatis dari internet (teks situs + GitHub API/README) pada 2026-09-22.
> Total: **7 proyek** — 4 website klien + 3 proyek teknis/mandiri.

---

## Catatan anonimisasi

Keputusan user: **klien dianonimkan** di halaman web. Maka:

- PT ONO VODA PRO → ditampilkan sebagai **"Perusahaan event & lifestyle, Indonesia"**
- Identitas mahasiswa → **"Proyek mandiri"**

**Domain Profesional Indonesia (terkunci):** yang benar `profesional-indonesia.com` (dengan strip) — domain tanpa strip tidak resolve dan tidak dipakai.

Ahli Panggilan & Vodatrip ditemukan menyebut "PT. ONO VODA PRO" di footer/izin mereka sendiri (publik), jadi hubungannya memang sudah terbuka — tapi konsisten dengan keputusan anonimisasi, nama PT tetap tidak dipakai sebagai label klien di web Pixcode.

---

## A. Website Live (klien: grup perusahaan yang sama — dianonimkan)

### 1. Profesional Indonesia
| Field | Nilai |
|---|---|
| `slug` | `profesional-indonesia` |
| `title` | Profesional Indonesia |
| `client` (anonim) | Perusahaan event & lifestyle, Indonesia |
| `category` | `website` |
| `package` | `hemat-plus` |
| `year` | 2024 (estimasi; aktivitas dokumentasi terdeteksi sejak Nov 2024) |
| `liveUrl` | `https://profesional-indonesia.com` ✅ |
| `featured` | ya |
| Deskripsi | Landing page untuk jasa dokumentasi profesional: pilot drone, fotografer & videografer event, hingga live streaming multicam. Menampilkan portofolio karya dan jalur kontak WhatsApp langsung untuk booking. |
| Fitur utama | Galeri/ showcase karya dokumentasi; CTA WhatsApp untuk booking; SEO lokal jasa event |
| Sumber riset | Hasil pencarian web (profil jasa, WA 0857-7100-2233, aktivitas sosmed 2024–2026). Situs gagal diakses otomatis (DNS/timeout) — deskripsi perlu diverifikasi saat konten final. |

### 2. Ahli Panggilan
| Field | Nilai |
|---|---|
| `slug` | `ahli-panggilan` |
| `title` | Ahli Panggilan |
| `client` (anonim) | Perusahaan event & lifestyle, Indonesia |
| `category` | `website` |
| `package` | `standar` (paling kompleks: ada database & transaksi data) |
| `year` | 2026 (footer © 2026) |
| `liveUrl` | `https://ahlipanggilan.id` |
| `liveStatus` | `temporarily-offline` — **sejak 2026-09-24 sengaja dinonaktifkan klien** (HTTP 523; sebelumnya juga 523 saat riset 2026-09-22). Proyek tetap dipamerkan, UI menampilkan info "nonaktif sementara". |
| `featured` | ya |
| Deskripsi | Platform layanan teknisi on-demand (AC, plumbing, listrik, cleaning, CCTV) yang menghubungkan pelanggan dengan teknisi terverifikasi di Jabodetabek & Bandung. Dilengkapi form booking online, katalog layanan, halaman pendaftaran mitra teknisi, FAQ, dan halaman legal (S&K, privasi). |
| Fitur utama | Form booking layanan; katalog layanan per kategori; pendaftaran mitra/teknisi; halaman legal & FAQ |
| Sumber riset | Teks halaman situs via hasil pencarian (home, layanan, booking, partner, FAQ, tentang-kami) |

### 3. Vodatrip (Voda Tour & Event)
| Field | Nilai |
|---|---|
| `slug` | `vodatrip` |
| `title` | Voda Tour & Event |
| `client` (anonim) | Perusahaan event & lifestyle, Indonesia |
| `category` | `website` |
| `package` | `standar` (katalog dinamis + harga per paket) |
| `year` | 2025 (estimasi) |
| `liveUrl` | `https://vodatrip.id` ✅ terverifikasi live |
| `featured` | ya |
| Deskripsi | Website tour & event organizer: katalog paket wisata, gathering perusahaan, dan outbound dengan harga dinamis ("Mulai dari Rp…"), plus statistik kepercayaan (200+ paket, 500+ event, 1000+ pelanggan) dan CTA konsultasi. |
| Fitur utama | Katalog paket dengan harga dinamis; filter/pencarian paket; section kepercayaan (statistik); CTA konsultasi custom paket |
| Sumber riset | Teks lengkap homepage (terbaca penuh saat riset) |

### 3b. Voda Level Up (baru, 2026-09-24)
| Field | Nilai |
|---|---|
| `slug` | `voda-levelup` |
| `title` | Voda Level Up |
| `client` (anonim) | Perusahaan event & lifestyle, Indonesia |
| `category` | `website` |
| `package` | `standar` (multihalaman, konten sensitif, video) |
| `year` | 2026 (footer © 2026) |
| `liveUrl` | `https://vodalevelup.id` ✅ terverifikasi live (HTTP 200) |
| `featured` | ya |
| Deskripsi | Situs firma asesmen independen & due diligence organisasi (unit dari PT Ono Voda Pro): 4 pilar layanan, metodologi kerahasiaan, protokol kepatuhan UU PDP, film profil perusahaan, jalur konsultasi rahasia via WhatsApp. |
| Fitur utama | 4 pilar layanan; metodologi 3 langkah; protokol kerahasiaan (UU PDP); film/video profil perusahaan; halaman layanan per pilar; halaman Perspektif |
| Stack | TypeScript, Astro, Tailwind CSS (fingerprint `data-astro` ×214 di HTML — terkonfirmasi) |
| Sumber riset | Full text homepage via read_url + hasil pencarian (5 halaman layanan/perspektif terindeks), 2026-09-24 |

---

## B. Proyek Teknis / Source Code (tanpa live site)

### 4. Nyx Chat
| Field | Nilai |
|---|---|
| `slug` | `nyx-chat` |
| `title` | Nyx Chat |
| `client` (anonim) | Proyek mandiri |
| `category` | `web-app` |
| `package` | — (bukan paket klien; label "Riset & Pengembangan") |
| `year` | 2025 (repo dibuat Agustus 2025, aktif sampai Sep 2026) |
| `liveUrl` | — (keputusan: hanya link GitHub yang ditampilkan) |
| `repoUrl` | `https://github.com/h4nzs/nyx-chat` |
| `featured` | ya (nilai jual teknis tertinggi) |
| Deskripsi | Aplikasi web chatting zero-knowledge dengan enkripsi end-to-end post-quantum: tanpa PII (tidak ada data pribadi), arsitektur anonim, dibangun di atas Signal Protocol (SPQR) dan WebAssembly. Progressive Web App (PWA). |
| Fitur/teknologi | TypeScript, React, WebRTC, Prisma, WebAssembly, Signal Protocol, kriptografi post-quantum, AGPL-3.0 |
| Sumber riset | GitHub API (description + topics) |

### 5. mirAI (full-stack)
| Field | Nilai |
|---|---|
| `slug` | `mirai-fullstack` |
| `title` | mirAI — Full-Stack TypeScript |
| `client` (anonim) | Proyek mandiri |
| `category` | `web-app` |
| `package` | — |
| `year` | 2025 (repo Nov 2025) |
| `repoUrl` | `https://github.com/h4nzs/mirAI` |
| `featured` | tidak |
| Deskripsi | Aplikasi full-stack monorepo TypeScript (frontend + backend + shared packages) — varian pertama dari proyek rekomendasi film berbasis AI, sebelum di-porting ke Django. |
| Catatan | Repo tanpa README/description; struktur backend/ frontend/ packages/ terbaca dari isi repo. Deskripsi perlu konfirmasi user. |
| Sumber riset | GitHub API + struktur direktori repo |

### 6. mirAI-django
| Field | Nilai |
|---|---|
| `slug` | `mirai-django` |
| `title` | mirAI-django |
| `client` (anonim) | Proyek mandiri |
| `category` | `web-app` |
| `package` | — |
| `year` | 2025–2026 (repo Nov 2025, update terakhir Apr 2026) |
| `repoUrl` | `https://github.com/h4nzs/mirai-django` |
| `featured` | tidak |
| Deskripsi | Web app rekomendasi film berbasis AI (proyek tugas kuliah): chatbot percakapan dengan Google Gemini + integrasi TMDB, dashboard pengguna (favorit & watchlist), UI modern dengan Tailwind CSS + daisyUI. |
| Fitur/teknologi | Django 5, PostgreSQL, Google Generative AI (Gemini), TMDB API, Tailwind CSS v4, daisyUI |
| Sumber riset | README repo (terbaca lengkap) |

---

## C. Keputusan terkunci (disetujui user, 2026-09-22)

1. **Kategori tambahan `web-app`** ✅ — kategori final: `website | web-app | pos`.
2. **Label proyek internal** ✅ — repo GitHub ditampilkan dengan label **"Riset & Pengembangan"** di kartu portfolio.
3. **Domain Profesional Indonesia** ✅ — `profesional-indonesia.com` (dengan strip).
4. **Link Nyx Chat** ✅ — hanya GitHub; demo `nyx-app.my.id` tidak ditampilkan.

---

## D. Struktur studi kasus (aktif 2026-09-23 — usulan teman user, disetujui)

Halaman detail kini berstruktur studi kasus: Tantangan → Sebelum & Sesudah → Manfaat → Fitur → Teknologi & tools. Field baru di skema (`content.config.ts`): `challenge`, `before`, `after`, `stack` — semuanya nullable, section hanya muncul saat diisi.

**Status draft (wajib review user):**
- `challenge` / `before` / `after` untuk 4 website klien = **DRAFT** — diturunkan dari fitur yang benar-benar ada, bukan wawancara klien. Koreksi langsung di file `.md` (hapus komentar `# DRAFT` setelah OK).
- `stack` terverifikasi dari user (2026-09-23): Profesional Indonesia = WordPress/PHP + custom functions + plugin; Ahli Panggilan = TS/Astro/Tailwind + custom CMS esensial; Vodatrip = TS/Astro + Directus. Voda Level Up = TypeScript/Astro/Tailwind (terkonfirmasi fingerprint HTML). Proyek internal = dari riset GitHub.
- Screenshot before/after **visual** (desktop + mobile) tetap menyusul — slot gallery tersedia; format teks sudah aktif sekarang.

### Halaman detail per proyek (konten yang masih perlu diisi user, boleh menyusul):
- Thumbnail asli ✅ terpasang untuk semua 7 proyek (5 screenshot PNG + 2 cover SVG mirai). Galeri/screenshot mobile (trust signal tambahan) masih kosong — field `gallery` tersedia bila mau ditambahkan.
- Testimonial klien bila nanti ada (field sudah tersedia)
