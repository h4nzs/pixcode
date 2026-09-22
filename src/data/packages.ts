// Data 5 paket — sumber: docs/WEBSITE-BRIEF.md §4 (harga final dari user, 2026-09-22).
// ATURAN AGENTS.md: semua tampilan paket wajib mengambil dari file ini.

export interface Package {
  id: "umkm" | "hemat" | "hemat-plus" | "standar" | "pos";
  name: string;
  /** Rentang harga untuk tampilan; string bebas karena format Indonesia. */
  price: string;
  /** Baris penjelas rentang harga (pricing psychology — riset §7). */
  priceNote?: string;
  /** Kelompok visual: dasar vs lanjutan (riset §7 "limit pilihan"). */
  tier: "dasar" | "lanjutan";
  featured?: boolean; // Paket UMKM — badge "Paling Laris", posisi pertama, border tebal.
  includes: string[];
  excludes: string[]; // add-on berbayar
  maxRevisions: string;
  /** TODO(user): estimasi pengerjaan per paket — masih placeholder. */
  duration: string;
}

export const packages: Package[] = [
  {
    id: "umkm",
    name: "UMKM",
    price: "Rp 400.000",
    priceNote: "Harga flat, paling terjangkau untuk mulai hadir di Google.",
    tier: "dasar",
    featured: true,
    // TODO(user): detail fitur/add-on/revisi Paket UMKM belum ditetapkan — isi sebelum launch.
    includes: [
      "1 halaman profil usaha",
      "Tombol WhatsApp & lokasi Maps",
      "SEO dasar agar ditemukan di Google",
    ],
    excludes: ["Custom domain", "Halaman tambahan"],
    maxRevisions: "1x revisi",
    duration: "3–7 hari kerja (placeholder)",
  },
  {
    id: "hemat",
    name: "Hemat",
    price: "Rp 500.000 – 800.000",
    priceNote: "Tergantung jumlah konten & kebutuhan desain.",
    tier: "dasar",
    includes: [
      "1 halaman",
      "Tombol WhatsApp & Maps",
      "SEO dasar",
    ],
    excludes: ["Halaman tambahan", "Custom domain"],
    maxRevisions: "1x revisi",
    duration: "3–7 hari kerja (placeholder)",
  },
  {
    id: "hemat-plus",
    name: "Hemat Plus",
    price: "Rp 650.000 – 1.500.000",
    priceNote: "Tergantung jumlah konten & kebutuhan desain.",
    tier: "dasar",
    includes: ["2–3 halaman", "Custom domain + SSL", "SEO dasar"],
    excludes: ["Fitur dinamis", "Form dengan database"],
    maxRevisions: "2x revisi",
    duration: "1–2 minggu (placeholder)",
  },
  {
    id: "standar",
    name: "Standar / Dynamic",
    price: "Rp 1.000.000 – 3.000.000",
    priceNote: "Tergantung jumlah modul & kompleksitas data.",
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
    duration: "2–4 minggu (placeholder)",
  },
  {
    id: "pos",
    name: "Desktop POS",
    price: "Rp 2.500.000 – 8.000.000",
    priceNote: "Tergantung kebutuhan hardware & laporan.",
    tier: "lanjutan",
    includes: [
      "Kasir + stok dasar",
      "Cetak struk thermal",
      "Laporan harian",
    ],
    excludes: ["Sinkronisasi multi-device", "Integrasi e-commerce online"],
    maxRevisions: "2x revisi",
    duration: "3–6 minggu (placeholder)",
  },
];

export const featuredPackage = packages.find((p) => p.featured)!;
