// Data 3 contoh template Paket UMKM — sumber untuk galeri /template/, bar demo, dan pelacakan WA.
// ATURAN: semua usaha di bawah FIKTIF (nama, alamat, harga). Jangan dipakai sebagai klaim nyata.

/** Jam buka per hari, indeks 0 = Minggu … 6 = Sabtu. null = tutup. Format "HH:MM", zona WIB. */
export type Hours = Array<[string, string] | null>;

export interface DemoTemplate {
  slug: string;
  /** Nama jenis template (yang dijual), mis. "Kedai Kopi". */
  name: string;
  /** Nama usaha fiktif di halaman demo. */
  business: string;
  /** Usaha yang cocok memakai template ini. */
  suitableFor: string;
  /** Satu kalimat: apa yang membuat template ini beda. */
  idea: string;
  /** Hal konkret yang didapat pemilik usaha. */
  highlights: string[];
  /** Warna bilah browser mobile (meta theme-color). */
  themeColor: string;
  /** Nama file thumbnail di src/assets/templates/ (hasil screenshot halaman demo). */
  image: string;
  hours: Hours;
}

const everyday = (open: string, close: string): Hours => Array.from({ length: 7 }, () => [open, close] as [string, string]);

export const templates: DemoTemplate[] = [
  {
    slug: "kedai-kopi",
    name: "Kedai Kopi",
    business: "Kopi Teras",
    suitableFor: "Kedai kopi, warung makan, kafe kecil, katering rumahan",
    idea: "Menu tampil sebagai nota yang tercetak baris demi baris. Pengunjung langsung membaca harga, bukan membaca brosur.",
    highlights: [
      "Menu dan harga rata kanan seperti nota warung",
      "Status buka atau tutup otomatis sesuai jam WIB",
      "Tombol pesan lewat WhatsApp",
    ],
    themeColor: "#1f3fb8",
    image: "kedai-kopi.png",
    // Tutup hari Senin (contoh).
    hours: [["08:00", "22:00"], null, ["08:00", "22:00"], ["08:00", "22:00"], ["08:00", "22:00"], ["08:00", "23:00"], ["08:00", "23:00"]],
  },
  {
    slug: "bengkel",
    name: "Bengkel & Jasa Servis",
    business: "Bengkel Km 0",
    suitableFor: "Bengkel motor atau mobil, tambal ban, cuci kendaraan, jasa servis elektronik",
    idea: "Pelanggan memilih servis, total estimasi terhitung, lalu rinciannya masuk ke pesan WhatsApp. Antrean jadi lebih tertata.",
    highlights: [
      "Daftar servis dengan estimasi waktu dan harga mulai dari",
      "Pilih servis, total terhitung, kirim rinciannya ke WhatsApp",
      "Jam buka dengan status langsung",
    ],
    themeColor: "#f4c20d",
    image: "bengkel.png",
    // Tutup hari Minggu (contoh).
    hours: [null, ["08:00", "17:00"], ["08:00", "17:00"], ["08:00", "17:00"], ["08:00", "17:00"], ["08:00", "17:00"], ["08:00", "15:00"]],
  },
  {
    slug: "toko-tanaman",
    name: "Toko Tanaman & Katalog",
    business: "Pucuk",
    suitableFor: "Toko tanaman, florist, toko kerajinan, thrift, toko online kecil dengan katalog",
    idea: "Katalog difilter lewat cahaya, dan tiap barang punya tombol tanya yang sudah berisi namanya. Tanpa keranjang belanja yang rumit.",
    highlights: [
      "Filter katalog tanpa JavaScript",
      "Tombol tanya WhatsApp per barang, nama barang sudah terisi",
      "Penanda stok tersedia atau habis",
    ],
    themeColor: "#fbfcfa",
    image: "toko-tanaman.png",
    hours: everyday("07:00", "17:00"),
  },
];

export const getTemplate = (slug: string) => {
  const t = templates.find((x) => x.slug === slug);
  if (!t) throw new Error(`Template tidak ditemukan: ${slug}`);
  return t;
};

/** Nilai atribut data-hours untuk skrip status buka (src/scripts/open-status.ts). */
export const hoursAttr = (hours: Hours) => JSON.stringify(hours);

const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"] as const;
export { dayNames };

/** "08.00–22.00" (format Indonesia: titik, bukan titik dua). */
export const formatRange = (r: [string, string] | null) =>
  r ? `${r[0].replace(":", ".")}–${r[1].replace(":", ".")}` : "Tutup";

/** Urutan hari tampil Senin–Minggu, dengan indeks asli (0 = Minggu) untuk data-day. */
export const weekRows = (hours: Hours) =>
  [1, 2, 3, 4, 5, 6, 0].map((i) => ({ index: i, name: dayNames[i], range: formatRange(hours[i]) }));
