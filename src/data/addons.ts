// Daftar add-on dan harganya — sumber tunggal untuk halaman Layanan (dan proposal).
// Harga final per 2026-10-31. Jangan menulis harga add-on langsung di komponen.

export interface Addon {
  name: string;
  price: string;
  /** Paket yang bisa memakainya. */
  appliesTo: string;
  note?: string;
}

export const addons: Addon[] = [
  { name: "Pasang domain sendiri + SSL", price: "Rp 150.000", appliesTo: "UMKM, Hemat", note: "Sudah termasuk di Hemat Plus ke atas. Domain dibeli terpisah (kisaran Rp 140–280 ribu per tahun)." },
  { name: "Belikan domain atas namamu", price: "Rp 50.000 + harga domain", appliesTo: "Semua paket", note: "Domain tercatat atas namamu, bukan atas nama Pixcode." },
  { name: "Email di domain sendiri (diteruskan ke Gmail)", price: "Rp 100.000", appliesTo: "Paket dengan domain sendiri", note: "Kotak surat sungguhan (Google Workspace dan sejenisnya) dibayar ke penyedia." },
  { name: "Pindah ke hosting milikmu sendiri", price: "Rp 250.000", appliesTo: "UMKM, Hemat, Hemat Plus", note: "File diserahkan, dipasang di hostingmu, lalu diuji." },
  { name: "Halaman tambahan", price: "Rp 150.000 per halaman", appliesTo: "UMKM, Hemat, Hemat Plus", note: "Sampai 6 section; teks dan foto dari kamu." },
  { name: "Desain dari nol", price: "Rp 500.000", appliesTo: "Hemat, Hemat Plus", note: "Tampilan dirancang baru, bukan dari kerangka Pixcode." },
  { name: "Bantu menulis teks", price: "Rp 100.000 per halaman", appliesTo: "Semua paket web", note: "Berdasarkan wawancara singkat lewat WhatsApp." },
  { name: "Formulir kontak ke email atau WhatsApp", price: "Rp 150.000", appliesTo: "Hemat Plus", note: "Tanpa database. Kalau perlu menyimpan data, itu paket Standar." },
  { name: "Katalog produk statis", price: "Rp 250.000", appliesTo: "Hemat Plus", note: "Sampai 30 produk dengan tombol tanya per produk. Tanpa keranjang dan pembayaran." },
  { name: "Galeri foto", price: "Rp 100.000", appliesTo: "Semua paket web", note: "Sampai 30 foto." },
  { name: "Google Business Profile dan Search Console", price: "Rp 150.000", appliesTo: "Semua paket web", note: "Pengaturan dan optimasi; verifikasi tetap lewat pemilik usaha." },
  { name: "Pengerjaan prioritas", price: "+30% dari total", appliesTo: "Semua paket", note: "Selesai maksimal 3 hari kerja setelah materi lengkap." },
  { name: "Revisi tambahan", price: "Rp 100.000–500.000 per revisi", appliesTo: "Semua paket", note: "UMKM dan Hemat Rp 100.000; Hemat Plus Rp 150.000; Standar dan POS Rp 300.000–500.000." },
  { name: "Perubahan kecil setelah website live", price: "Rp 50.000 per permintaan", appliesTo: "Semua paket web", note: "Maksimal 30 menit: ganti teks, foto, harga, atau jam buka. Paket 5 permintaan Rp 200.000, berlaku 6 bulan." },
  { name: "Modul tambahan", price: "Dikutip per modul", appliesTo: "Standar", note: "Peran user lain, laporan tambahan, notifikasi WhatsApp, pembayaran online. Harga disepakati sebelum dikerjakan." },
  { name: "Rawat server", price: "Rp 500.000 per tahun", appliesTo: "Standar", note: "Pemantauan, backup mingguan, pembaruan keamanan, respons 1 hari kerja. Dibayar di muka." },
];
