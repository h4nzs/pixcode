# Sales playbook — paket, add-on, dan aturan kasus perbatasan

Ringkasan operasional yang aman untuk repo publik. Harga dan add-on yang tampil di situs
bersumber dari `src/data/packages.ts` dan `src/data/addons.ts`; dokumen ini hanya menjelaskan aturannya.
Keputusan harga final per 2026-10-31 dan bisa ditinjau ulang setelah 3–5 proyek nyata (catat jam kerja sebenarnya).

## Harga paket

| Paket | Harga | Catatan |
|---|---|---|
| UMKM | Rp 400.000 (flat) | Template siap pakai, hosting Cloudflare, alamat bawaan |
| Hemat | mulai Rp 650.000 | 1 halaman, tampilan disesuaikan |
| Hemat Plus | mulai Rp 1.000.000 | 2–3 halaman, domain sendiri + SSL |
| Standar / Dynamic | mulai Rp 3.000.000 + server | Login, data tersimpan, panel admin |
| Desktop POS | mulai Rp 6.000.000 | Kasir + stok dasar, 1 toko, 1 komputer |

## Aturan memilih paket

- Pilih paket terendah yang memenuhi kebutuhan inti.
- Login, data tersimpan, atau pembayaran di web = Standar, bukan add-on.
- Jika paket + add-on mencapai harga paket di atasnya, tawarkan paket di atasnya.
- Naik paket: biaya yang sudah dibayar dikurangkan penuh bila sebelum demo pertama, 50% bila setelah demo.
- UMKM yang minta desain custom → Hemat (atau add-on "Desain dari nol" di Hemat/Hemat Plus).
- Hemat Plus yang minta fitur server → Standar.

## Hosting

- UMKM dan Hemat/Hemat Plus: Cloudflare (static assets). Jangan pakai GitHub Pages karena melarang penggunaan komersial.
- Standar: VPS dibayar langsung oleh klien atas namanya, tanpa markup. Opsi termurah yang dipakai: NevaCloud Nevalite NVMe
  (1 GB sekitar Rp 42 ribu/bulan). Konfirmasi dulu ke penyedia: PPN, harga setelah promo, backup, lokasi data center.
  Backup mingguan dijalankan sendiri; snapshot/RAID penyedia bukan pengganti backup.
- Domain: kisaran Rp 140–280 ribu per tahun, didaftarkan atas nama klien.

## Alur dari kontak sampai closing

1. Kontak masuk (WhatsApp/situs/rekomendasi) atau penawaran awal.
2. Tanya kebutuhan: jenis usaha, tujuan, jumlah halaman, butuh login/data/pembayaran atau tidak.
3. Rekomendasikan satu paket + add-on yang perlu; jelaskan yang tidak termasuk.
4. Kirim proposal tertulis: lingkup, harga, add-on, jadwal, biaya server/domain bila ada.
5. Negosiasi dengan mengubah lingkup, bukan menurunkan harga tanpa dasar.
6. DP 50%, pengerjaan, demo di domain staging, pelunasan 50% setelah demo disetujui.
7. Live, garansi bug 14 hari, perubahan kecil dihitung per permintaan.
8. Proyek dijeda bila klien tidak menanggapi 14 hari.

## Perubahan di luar lingkup

Tulis sebagai permintaan perubahan dengan harga dan tambahan waktu; kerjakan setelah klien setuju tertulis.
Revisi melebihi batas dikenakan biaya per revisi sesuai paket (lihat halaman Layanan).
