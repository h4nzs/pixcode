// Data 5 paket — sumber: docs/WEBSITE-BRIEF.md §4 (harga final dari user, 2026-10-31).
// ATURAN AGENTS.md: semua tampilan paket wajib mengambil dari file ini.

export interface Package {
  id: "umkm" | "hemat" | "hemat-plus" | "standar" | "pos";
  name: string;
  /** Harga untuk tampilan (angka awal), string bebas karena format Indonesia. */
  price: string;
  /** true = harga "mulai dari" (kebutuhan di luar daftar termasuk dihitung terpisah); false = harga flat. */
  priceFrom: boolean;
  /** Baris penjelas di bawah harga (batas lingkup harga). */
  priceNote?: string;
  /** Kelompok visual: dasar vs lanjutan (riset §7 "limit pilihan"). */
  tier: "dasar" | "lanjutan";
  featured?: boolean; // Paket UMKM — badge "Paling Laris", posisi pertama, border tebal.
  includes: string[];
  excludes: string[]; // add-on berbayar
  maxRevisions: string;
  /** Estimasi pengerjaan sejak materi (foto, teks) lengkap — final per 2026-10-27. */
  duration: string;
}

const catatanLingkup = "Sudah termasuk daftar di bawah. Kebutuhan di luar daftar dihitung terpisah, disepakati sebelum DP.";

// Harga final per 2026-10-31 (playbook paket/add-on). Add-on ada di src/data/addons.ts.
export const packages: Package[] = [
  {
    id: "umkm",
    name: "UMKM",
    price: "Rp 400.000",
    priceFrom: false,
    priceNote: "Harga flat, paling terjangkau untuk mulai hadir di Google.",
    tier: "dasar",
    featured: true,
    // Paket UMKM = template siap pakai (pembeda dari Hemat yang tampilannya disesuaikan).
    includes: [
      "1 halaman dari template siap pakai (Kedai Kopi, Bengkel, atau Toko Tanaman)",
      "Nama usaha, logo, teks, foto (sampai 8), jam buka, lokasi, dan 1 warna aksen diganti sesuai usahamu",
      "Tombol WhatsApp & peta lokasi",
      "SEO dasar agar ditemukan di Google",
      "Hosting Cloudflare dengan alamat bawaan, tanpa biaya hosting tahunan",
    ],
    excludes: ["Tampilan disesuaikan (paket Hemat)", "Domain sendiri", "Halaman tambahan"],
    maxRevisions: "1x revisi (teks dan foto)",
    duration: "3–7 hari kerja",
  },
  {
    id: "hemat",
    name: "Hemat",
    price: "Rp 650.000",
    priceFrom: true,
    priceNote: catatanLingkup,
    tier: "dasar",
    includes: [
      "1 halaman dengan tampilan disesuaikan identitas usaha (sampai 2 warna, huruf pilihan, sampai 6 section)",
      "Foto sampai 12",
      "Tombol WhatsApp & peta lokasi",
      "SEO dasar",
      "Hosting Cloudflare dengan alamat bawaan",
    ],
    excludes: ["Desain dari nol", "Domain sendiri", "Halaman tambahan"],
    maxRevisions: "1x revisi",
    duration: "3–7 hari kerja",
  },
  {
    id: "hemat-plus",
    name: "Hemat Plus",
    price: "Rp 1.000.000",
    priceFrom: true,
    priceNote: catatanLingkup,
    tier: "dasar",
    includes: [
      "2–3 halaman dengan tampilan disesuaikan",
      "Pemasangan domain sendiri + SSL (domain dibeli terpisah)",
      "SEO dasar di tiap halaman",
      "Hosting Cloudflare",
    ],
    excludes: ["Login & database (paket Standar)", "Desain dari nol", "Halaman ke-4 dan seterusnya"],
    maxRevisions: "2x revisi",
    duration: "1–2 minggu",
  },
  {
    id: "standar",
    name: "Standar / Dynamic",
    price: "Rp 3.000.000",
    priceFrom: true,
    priceNote:
      "Belum termasuk server dan domain (dibayar langsung ke penyedia, perkiraan Rp 0,7–1,3 juta per tahun). Kebutuhan di luar daftar dihitung terpisah, disepakati sebelum DP.",
    tier: "lanjutan",
    includes: [
      "Sampai 3 halaman publik + panel admin dengan login (1 peran: admin)",
      "Kelola data (tambah, ubah, hapus) untuk sampai 3 jenis data",
      "1 modul laporan",
      "Pemasangan server, domain, SSL, dan backup awal",
      "1 sesi pelatihan 1 jam",
    ],
    excludes: [
      "Biaya server & domain (dibayar ke penyedia atas nama kamu, tanpa markup)",
      "Modul tambahan (peran user lain, pembayaran online, notifikasi WhatsApp)",
      "Multi-cabang",
    ],
    maxRevisions: "2x revisi, revisi besar dihitung ulang",
    duration: "2–4 minggu",
  },
  {
    id: "pos",
    name: "Desktop POS",
    price: "Rp 6.000.000",
    priceFrom: true,
    priceNote: catatanLingkup,
    tier: "lanjutan",
    includes: [
      "Kasir + stok dasar untuk 1 toko di 1 komputer",
      "Cetak struk thermal (1 model printer yang disepakati)",
      "Laporan harian",
      "Instalasi, backup lokal, dan panduan singkat",
    ],
    excludes: ["Hardware (komputer, printer)", "Sinkronisasi multi-perangkat", "Integrasi toko online"],
    maxRevisions: "2x revisi",
    duration: "3–6 minggu",
  },
];

export const featuredPackage = packages.find((p) => p.featured)!;
