// Data 5 paket — sumber: docs/WEBSITE-BRIEF.md §4 (harga final dari user, 2026-09-22).
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

export const packages: Package[] = [
  {
    id: "umkm",
    name: "UMKM",
    price: "Rp 400.000",
    priceFrom: false,
    priceNote: "Harga flat, paling terjangkau untuk mulai hadir di Google.",
    tier: "dasar",
    featured: true,
    // Keputusan 2026-10-27: Paket UMKM = template siap pakai (pembeda dari Hemat yang desainnya disesuaikan).
    includes: [
      "1 halaman profil usaha dari template siap pakai",
      "Subdomain bawaan",
      "Tombol WhatsApp & lokasi Maps",
      "SEO dasar agar ditemukan di Google",
    ],
    excludes: ["Desain custom", "Custom domain", "Halaman tambahan"],
    maxRevisions: "1x revisi",
    duration: "3–7 hari kerja",
  },
  {
    id: "hemat",
    name: "Hemat",
    price: "Rp 500.000",
    priceFrom: true,
    priceNote: "Sudah termasuk daftar di bawah. Kebutuhan di luar daftar dihitung terpisah, disepakati sebelum DP.",
    tier: "dasar",
    includes: [
      "1 halaman",
      "Desain disesuaikan dengan identitas usaha (logo, warna)",
      "Tombol WhatsApp & Maps",
      "SEO dasar",
    ],
    excludes: ["Halaman tambahan", "Custom domain"],
    maxRevisions: "1x revisi",
    duration: "3–7 hari kerja",
  },
  {
    id: "hemat-plus",
    name: "Hemat Plus",
    price: "Rp 900.000",
    priceFrom: true,
    priceNote: "Sudah termasuk daftar di bawah. Kebutuhan di luar daftar dihitung terpisah, disepakati sebelum DP.",
    tier: "dasar",
    includes: [
      "2–3 halaman",
      "Pemasangan custom domain + SSL (biaya domain dibayar terpisah)",
      "SEO dasar",
    ],
    excludes: ["Fitur dinamis", "Form dengan database"],
    maxRevisions: "2x revisi",
    duration: "1–2 minggu",
  },
  {
    id: "standar",
    name: "Standar / Dynamic",
    price: "Rp 1.600.000",
    priceFrom: true,
    priceNote: "Sudah termasuk daftar di bawah. Kebutuhan di luar daftar dihitung terpisah, disepakati sebelum DP.",
    tier: "lanjutan",
    includes: [
      "Login admin",
      "CRUD data (kelola konten sendiri)",
      "1 modul laporan",
    ],
    excludes: [
      "Modul tambahan (integrasi pembayaran, multi-cabang)",
      "Role user lebih dari 1 tingkat",
    ],
    maxRevisions: "2x revisi, revisi besar dihitung ulang",
    duration: "2–4 minggu",
  },
  {
    id: "pos",
    name: "Desktop POS",
    price: "Rp 3.100.000",
    priceFrom: true,
    priceNote: "Sudah termasuk daftar di bawah. Kebutuhan di luar daftar dihitung terpisah, disepakati sebelum DP.",
    tier: "lanjutan",
    includes: [
      "Kasir + stok dasar",
      "Cetak struk thermal",
      "Laporan harian",
    ],
    excludes: ["Sinkronisasi multi-device", "Integrasi e-commerce online"],
    maxRevisions: "2x revisi",
    duration: "3–6 minggu",
  },
];

export const featuredPackage = packages.find((p) => p.featured)!;
