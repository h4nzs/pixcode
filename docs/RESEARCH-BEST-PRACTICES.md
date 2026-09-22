# Riset & Best Practices — Website Company Profile + Portfolio

> Hasil riset internet (September 2026): apa yang HARUS ada, yang TIDAK perlu, dan best practice semua aspek website company profile + portfolio jasa — didokumentasikan **terapan langsung ke Pixcode Studio**, bukan teori umum.
> Sumber utama: panduan evaluasi agency dari sisi pembeli (Utsubo, Feb 2026), checklist GEO 2026 (seotuners), pricing page best practices (HubSpot & semacamnya), kerangka customer journey (Salesforce/Qualtrics), trust signals (best version media, trajectorywebdesign).
> Aturan AGENTS.md tetap berlaku: tidak ada data yang dikarang; semua yang "Pixcode belum punya" ditandai ⬜ sebagai pekerjaan konten, bukan diisi placeholder palsu.

---

## 1. Ringkasan Temuan Paling Penting (TL;DR)

1. **Pembeli jasa menilai vendor lewat web vendor itu sendiri.** Panduan "cara memilih web agency" 2026 menyebut red flags yang dipakai calon klien: template seragam/cookie-cutter, tidak ada contoh mobile, tidak ada studi kasus dengan hasil, semua proyek terlihat sama, tidak ada penjelasan proses. **Website Pixcode harus membuktikan bahwa Pixcode tidak punya red flags itu.**
2. **Kegagalan proyek jasa web lebih sering karena komunikasi & scope, bukan desain** (35–66% proyek web gagal sebagian/total; penyebab utamanya scope creep, komunikasi buruk, ekspektasi tidak cocok). Pixcode sudah punya senjata anti-hal ini di SOP v2 (fitur termasuk/tidak termasuk, batas revisi, DP 50%) → **harus dipamerkan eksplisit di web** sebagai pembeda, bukan disimpan di internal doc.
3. **Customer journey jasa = funnel 5 tahap** (T0 Tidak Tahu → T1 Tahu & Mencari → T2 Membandingkan → T3 Percaya & Hubungi → T4 Membeli). Setiap tahap butuh konten berbeda, dan setiap halaman wajib punya **satu tindakan utama** yang jelas.
4. **Pricing transparan menaikkan kualitas lead**, bukan menurunkannya: menampilkan harga menyaring lead yang tidak cocok budget dan mempercepat keputusan. Best practice pricing page: pilihan sedikit, bahasa sederhana, highlight 1 paket unggulan, trust signal dekat tombol beli, tanpa friksi.
5. **GEO/AIO 2026 praktisnya sederhana**: jawaban langsung 2–3 kalimat (40–60 kata) di atas tiap section, FAQ schema, nama entitas konsisten di semua tempat (site, GBP, sosmed, GitHub), klaim disertai angka/tanggal, konten harga diperbarui berkala + `dateModified`.
6. **Yang TIDAK perlu** untuk studio seukuran Pixcode: blog dulu, testimonial palsu, badge/penghargaan karangan, form backend, live chat, animasi berat, halaman "klien kami" dengan logo besar, bahasa hype.

---

## 2. Customer Journey Pixcode (dari tidak tahu → membeli)

> Konteks Pixcode: tim 2 orang, lead masuk via **WA/IG** (SOP tahap 1), closing oleh Destra. Maka aksi akhir web = **chat WhatsApp (warm)**, dan web harus menyiapkan lead supaya saat chat terjadi kualifikasi cepat (paket cocok + budget + ekspektasi).

### Tahap 0 — Tidak Tahu (Unaware)
**Situasi:** pemilik UMKM belum sadar butuh website, atau baru sekadar tahu "punya IG saja tidak cukup".

| Elemen | Terapan di Pixcode |
|---|---|
| Konten masuk dari AI/search | Halaman & FAQ menjawab pertanyaan nyata: "berapa biaya buat website untuk usaha kecil?", "apakah UMKM wajib punya website?", "bedanya website dan Instagram untuk jualan" → ditulis sebagai jawaban langsung 2–3 kalimat (GEO) |
| Halaman target | Home (section "untuk siapa" memanggil kategori UMKM spesifik), Layanan, FAQ |
| Aksi | Tidak ada CTA agresif — cukup edukasi + satu tombol "konsultasi gratis" di akhir |

### Tahap 1 — Tahu & Mulai Mencari (Awareness)
**Situasi:** sudah sadar butuh website; mencari "jasa pembuatan website bandung / untuk UMKM".

| Elemen | Terapan di Pixcode |
|---|---|
| Sinyal lokal | Nama kota (Bandung) + area layanan (Garut, Jakarta, Tasikmalaya) konsisten di title, konten, JSON-LD `areaServed` |
| Bukti nyata | Portfolio 3 website live (link bisa diklik & dites) + 3 proyek teknis berlabel "Riset & Pengembangan" |
| Aksi | Scroll → paket ringkas dengan harga "mulai dari" |

### Tahap 2 — Membandingkan (Consideration)
**Situasi:** membandingkan 2–3 opsi: freelancer murah, jasa marketplace, agency. Pertanyaan mereka: "ini orangnya bisa dipercaya? kena tipu nggak? nanti diurus siapa?"

| Elemen | Terapan di Pixcode |
|---|---|
| **Halaman yang paling menentukan: Layanan/Paket.** | Tabel termasuk/tidak termasuk + batas revisi + alur bayar DP 50% → ini jawaban langsung atas ketakutan #1 calon klien jasa digital (scope membengkak, uang hangus) |
| Bukti karya dalam konteks | Halaman detail portfolio per proyek: masalah → solusi → fitur → link live. Format studi kasus pendek lebih meyakinkan daripada screenshot saja (red flag "no metrics or case studies" dihindari) |
| Wajah manusia | Halaman Tentang: 2 orang nyata, nama, peran, foto/avatar. Studio kecil yang jujur "kami hanya dua orang, kalian komunikasi langsung dengan pembuatnya" = keunggulan, bukan kelemahan |
| Aksi | Perbandingan paket → CTA per paket ("Tanya paket ini via WA") dengan template pesan yang menyebut nama paket |

### Tahap 3 — Percaya & Bertanya (Trust → Warm Action 🔥)
**Situasi:** sudah tertarik; tinggal memastikan "aman nggak gih". Inilah momen **warm action: menghubungi**.

| Elemen | Terapan di Pixcode |
|---|---|
| Mengurangi risiko terasa | Proses 4 langkah yang eksplisit (konsultasi → penawaran & DP → pengerjaan & demo staging → live + support); FAQ menjawab: cara bayar, berapa lama, kalau tidak cocok, siapa pegang domain |
| CTA tidak menakutkan | Copy CTA = komitmen kecil: "Tanya-tanya dulu, gratis" bukan "Pesan sekarang". Template pesan WA otomatis mengurangi jeda ragu ("mau nulis apa ya?") |
| Respons cepat | Badge "balas cepat via WhatsApp" hanya boleh dipakai kalau benar; jam respons bisa ditulis di Kontak |
| Aksi | **WhatsApp deep link dengan template pesan** (satu-satunya CTA utama di seluruh web) |

### Tahap 4 — Membeli (Hot Action) — di luar web
**Situasi:** deal di WA: kualifikasi → proposal → DP → pengerjaan → staging → pelunasan → handover (SOP tahap 2–8).
**Tugas web di tahap ini:** mempersiapkan kualifikasi cepat — template pesan WA per paket meminta konteks awal (jenis usaha, kebutuhan, kota), dan halaman paket sudah menyamakan ekspektasi (revisi maks, add-on). **Hasil: lead yang chat = lead yang lebih siap deal** (warmer), sesuai tujuan closing Destra.

> **Metrik per tahap** (lihat bagian 9): T0/T1 = impresi & kunjungan dari search/AI; T2 = view halaman layanan & portfolio detail; T3/T4 = **klik WA (event utama)**; kualitas = fraksi chat yang tahu paket yang dituju.

---

## 3. Apa yang HARUS Ada (Must-Have) — per halaman

> **Legenda checklist:** `[x]` = sudah tercakup keputusan terkunci di brief (tinggal dibangun saat scaffold) · `[ ]` = butuh keputusan/konten tambahan sebelum atau saat build · `⬜` = pekerjaan konten eksternal yang menyusul (bukan penghalang build).

### Home
- [x] Hero: satu kalimat value + subteks konkret + 2 CTA (WA utama, lihat paket) — headline harus "tell your story in seconds".
- [ ] **Bukti cepat di atas fold**: 3 thumbnail portfolio ATAU satu kalimat bukti ("website yang kami buat sedang dipakai oleh …") — supaya kredibilitas terlihat sebelum scroll. ⬜ pilih 1 bentuk
- [x] Section "untuk siapa": kategori UMKM spesifik (toko, klinik, jasa, F&B, sekolah) — audiens harus mengenali dirinya.
- [x] Paket ringkas dengan harga + kartu UMKM di-highlight (badge "Paling Laris", paling depan).
- [x] Cara kerja 4 langkah (versi klien dari SOP) — process transparency = trust signal kunci untuk jasa.
- [x] FAQ singkat 5–6 item (dengan FAQPage schema).
- [x] CTA akhir + footer lengkap (WA, email, kota, IG saat sudah ada).

### Layanan / Paket
- [x] 5 paket: harga final, termasuk, tidak termasuk, revisi maks, estimasi pengerjaan.
- [x] **Paket UMKM ditonjolkan** (badge "Paling Laris" + border tebal + posisi pertama) — pricing page best practice: highlight 1 paket unggulan untuk mengurangi kebingungan.
- [ ] **Trust signal dekat area harga/CTA**: 1 baris, contoh: "DP 50%, sisanya setelah kamu approve demo" — menempatkan pengurangan risiko tepat di titik keputusan.
- [ ] Section add-on berbayar + catatan biaya revisi lewat batas **dicantumkan transparan** (ini juga mengikuti kewajiban SOP 3.1: rate diumumkan di awal, bukan saat kejadian).
- [ ] Mini-FAQ khusus harga (kenapa ada rentang? apa yang bikin harga naik?) — jawaban 2–3 kalimat siap-kutip (GEO).

### Portfolio (grid + detail)
- [x] Grid: thumbnail, label anonim, kategori, tag paket, filter kategori.
- [x] Detail per proyek: masalah → solusi → fitur → galeri → link live (jika ada).
- [ ] **Setiap detail wajib menjawab "apa manfaatnya bagi pemilik usaha"** — bukan cuma teknologi. Contoh: "form booking online → pelanggan bisa pesan di luar jam operasional". ⬜ tulis narasi ini saat konten final
- [ ] Mobile proof: tampilkan screenshot versi mobile di halaman detail (calon klien jasa menilai dari tampilan HP; "no mobile examples" adalah red flag).
- [x] Proyek internal berlabel "Riset & Pengembangan" → sinyal kedalaman teknis tanpa mengklaim sebagai klien.

### Tentang
- [ ] Cerita "kenapa kami fokus UMKM" (2–3 paragraf, jujur: studio kecil, dua orang, akses langsung ke pembuat).
- [ ] Tim: Dehans & Destra + peran (delivery / client relations) — foto/avatar; kalau belum ada foto, inisial pada avatar kotak (motif pix) jangan foto stok.
- [ ] Nilai kerja 3 poin (transparan, batas revisi jelas, tepat waktu) — harus kalimat yang bisa dibuktikan lewat halaman lain, bukan jargon.

### Kontak
- [x] WA deep link + template pesan; email; kota; jam operasional.
- [ ] IG menyusul (link ditambahkan ketika akun dibuat).
- [ ] Tanpa form backend (keputusan terkunci) — tetap valid; best practice mengatakan kurangi friksi, dan WA adalah kanal dengan friksi terendah di Indonesia.

### Global (semua halaman)
- [ ] Header: nav 4–5 item + tombol WA selalu terlihat (di mobile: sticky bottom bar WA juga boleh dipertimbangkan — umum & efektif untuk pasar Indonesia; keputusan saat build).
- [ ] Footer: nav, kontak, kota, copyright + halaman legal ringan (opsional: kebijakan privasi sederhana).
- [ ] 404 khusus yang mengarahkan balik ke paket/WA.

---

## 4. Apa yang TIDAK Perlu / Anti-Pattern (hindari)

### Konten yang tidak perlu (dan kenapa)
1. **Blog di v1** — butuh komitmen konten berkelanjutan; blog mati (postingan terakhir basi) justru jadi sinyal negatif. Jalur lebih murah dengan efek sama: FAQ lengkap + halaman paket yang menjawab pertanyaan nyata. Blog bisa menyusul kalau sudah konsisten jalan.
2. **Halaman "klien kami" dengan dinding logo** — Pixcode baru punya 3 website klien dari satu grup yang dianonimkan; dinding logo kecil justru memperlihatkan skala. Lebih jujur & kuat: studi kasus mendalam per proyek.
3. **Testimonial/penghargaan yang belum ada** — DILARANG (aturan AGENTS.md). Testimonial palsu mudah terlihat dan merusak segala hal lain yang jujur dari web ini. Slot tetap disiapkan di skema (field `testimonial`) untuk diisi saat benar-benar ada.
4. **Live chat / chatbot widget** — redundan dengan WA (kanal utama) dan menambah JS pihak ketiga (melawan prinsip zero-JS & performa).
5. **Form kontak backend** — friksi lebih tinggi daripada WA di pasar lokal; disepakati skip (keputusan terkunci).
6. **Slider/ carousel di hero** — kecenderungan lama yang sudah lama dianggap anti-pattern (pengunjung jarang lihat slide ke-2; memindahkan CTA dari pandangan).
7. **Animasi berat / parallax / library animasi** — melawan target Lighthouse 90+ dan audiens mobile dengan jaringan variatif.
8. **Bahasa hype ("solusi digital terbaik", "tingkatkan penjualan 10x")** — aturan anti AI-slop; spesifik & terukur selalu menang.
9. **Terminologi teknis berlebihan di halaman utama** (SSG, edge, CDN…) — audiens UMKM; istilah teknis boleh muncul di halaman detail proyek "Riset & Pengembangan" yang targetnya justru menunjukkan kedalaman.
10. **Dark mode** — sudah diputuskan light clean; konsistensi > selera.

### Red flags dari sisi pembeli (harus dibuktikan tidak ada)
| Red flag calon klien (dari panduan evaluasi agency 2026) | Cara web Pixcode membuktikan sebaliknya |
|---|---|
| Template seragam / semua proyek mirip | Detail proyek menonjolkan perbedaan per kebutuhan (booking platform vs katalog vs landing) |
| Tidak ada contoh mobile | Screenshot mobile di setiap detail proyek ⬜ |
| Tidak ada studi kasus/metrics | Struktur masalah → solusi → hasil; angka faktual (mis. jumlah paket, lama pengerjaan) hanya jika ada ⬜ |
| Tidak jelas proses kerja | Section cara kerja + DP/staging/pelunasan eksplisit |
| Tidak jelas pemilik & support | Halaman Tentang dengan 2 nama & peran; FAQ "siapa yang saya hubungi setelah live?" |
| Harga misterius | Rentang harga final terpampang |

---

## 5. Desain & Layout (Best Practice Terapan)

### Prinsip layout untuk situs jasa + audiens UMKM mobile-first
1. **Mobile-first sungguhan**: mayoritas calon klien UMKM membuka dari HP (sering dari link IG/WA). Ukuran tap ≥ 44px, font body ≥ 16px, satu kolom dominan, CTA selalu dalam jangkauan ibu jari.
2. **Aturan 1 halaman 1 tujuan**: Home = memperkenalkan & mengarahkan; Layanan = membandingkan paket; Portfolio = membuktikan; Tentang = memanusiakan; Kontak = bertindak. Jangan campur tujuan dalam satu halaman sampai membingungkan.
3. **Hierarki visual dengan whitespace luas** (py-20–28): kartu paket & proyek dengan border tipis + shadow halus; tidak ada elemen yang berteriak bersamaan — hanya 1 elemen paling menonjol per section (kartu UMKM).
4. **CTA hierarchy yang disiplin**: primary = tombol solid teal/hijau-WA (maksimal 1–2 per viewport); secondary = ghost/outline ("lihat paket", "lihat semua"). Tidak ada CTA ketiga yang bersaing.
5. **Bacaan F-pattern/Z**: di desktop, headline kiri + visual kanan di hero; di mobile, semua stacked dengan CTA setelah 1–2 kalimat pertama.
6. **Konsistensi motif "pix"**: kotak kecil sebagai bullet, badge, avatar, divider — hemat dan sistematis, bukan tempelan.
7. **Ikon Lucide stroke konsisten** untuk kategori UMKM & langkah proses — membantu pemindaian cepat tanpa kata.
8. **Gambar**: WebP via astro:assets, width/height eksplisit (anti CLS), lazy-load di bawah fold, hero boleh preload. Screenshot portfolio tampil dalam mockup frame sederhana (browser/HP) supaya terlihat "dipakai di dunia nyata".
9. **Keterbacaan bahasa Indonesia**: kalimat pendek (maks ± 20 kata), hindari paragraf > 4 baris di mobile, bold untuk frasa kunci (harga, batas revisi) — calon klien scan, tidak membaca utuh.
10. **Aksesibilitas = juga best practice SEO/GEO**: kontras teks AA, focus state jelas, heading berjenjang, alt deskriptif.

### Anti-pattern layout yang dihindari
- Hero tanpa CTA / CTA di bawah fold pertama.
- Grid paket dengan kartu identik semua (tidak ada highlight) → kebingungan pilihan.
- Marquee logo klien, counter animasi palsu ("500+ klien senang"), progress bar animasi tak berarti.
- Navbar dengan terlalu banyak item (maks 5: Home, Layanan, Portfolio, Tentang, Kontak).
- Font < 14px, kontras abu-di-atas-putih terlalu tipis, tombol kecil rapat di mobile.

---

## 6. SEO + GEO/AIO 2026 (Terapan — bukan sekadar teori)

### Fondasi SEO (tetap wajib)
- Meta title/description unik per halaman; title pola: `<Halaman> — Pixcode Studio | Jasa Website UMKM Bandung`.
- Sitemap + robots.txt + canonical + OG/Twitter card (og-image khusus karena share via WA dominan).
- JSON-LD: `ProfessionalService` (nama, WA `contactPoint`, kota, `areaServed`: Bandung/Garut/Jakarta/Tasikmalaya, `url`, logo) di Home; `FAQPage` untuk FAQ; `BreadcrumbList` untuk portfolio detail; opsional `CreativeWork`/`WebSite` per proyek.

### GEO praktis (dari checklist 2026 — 5 poin yang terbukti menghasilkan sitasi AI)
1. **Answer block 40–60 kata** di atas tiap section/halaman penting: jawab pertanyaan inti langsung ("Berapa biaya buat website UMKM? Di Pixcode mulai Rp 400.000 untuk …"). Lalu detail menyusul. → ini format yang di-retrieval LLM.
2. **H2/H3 berbentuk pertanyaan** di halaman Layanan & FAQ ("Apa saja yang termasuk Paket Hemat?") — cocok dengan cara orang bertanya ke AI/search.
3. **Klaim selalu disertai angka + tanggal**: harga (Rp 400.000, diperbarui 2026-09), batas revisi (1x–2x), jumlah proyek (6) — fakta verifiable lebih sering dikutip daripada klaim kosong.
4. **Konsistensi entitas**: nama "Pixcode Studio" + nomor WA + kota identik di web, Google Business Profile ⬜ (buat saat live), IG ⬜, dan profil GitHub (bio h4nzs bisa menyebut Pixcode ⬜). `sameAs` di JSON-LD menghubungkan semuanya.
5. **Kesegaran berkala**: harga & konten direview tiap 3–6 bulan; update `dateModified` di schema saat benar-benar berubah. (Untuk situs statis: cukup re-deploy.)

### Untuk siapa semua ini bekerja
- Google/Bing tradisional → ranking lokal "jasa pembuatan website bandung".
- AI Overviews/ChatGPT/Perplexity → sitasi saat orang bertanya "berapa biaya website untuk UMKM di Bandung?" — jawaban kita sudah berbentuk blok siap-kutip.
- Ingat: zero-click AI menurunkan trafik organik → **makin penting web-nya sendiri "worth the visit"** (bukti + harga + proses di satu tempat).

---

## 7. Trust Signals & Pricing Psychology

### Trust signals yang realistis untuk studio 2 orang (urut kekuatan)
1. **Portfolio bisa diklik** (link live yang benar-benar jalan) — trust signal terkuat.
2. **Transparansi proses & pembayaran** (DP 50% → staging → pelunasan → handover) — langsung dari SOP; hampir tidak ada freelancer lokal yang menampilkannya sejelas ini.
3. **Batas revisi & ketentuan add-on terbuka** — membalik ketakutan "biaya siluman" jadi keunggulan.
4. **Wajah & nama nyata** (Tentang) — dua orang dengan peran jelas.
5. **Respons & kanal yang jelas** (WA + jam respons) — di pasar Indonesia, WA aktif = terpercaya.
6. ⬜ **Nanti, saat ada**: Google Business Profile (review), testimonal nyata, jumlah proyek bertambah.

### Pricing page psychology (diterapkan ke 5 paket)
- **Highlight satu paket** (UMKM Rp 400.000, badge "Paling Laris") → anchor & pengurangi kebingungan; pricing best practice menyebut highlighting recommended plan mengurangi confusion dan mempercepat keputusan.
- **Rentang harga + alasan**: tampil "Rp 500–800rb" dengan 1 baris "tergantung jumlah konten & kebutuhan desain" → mengurangi "kenapa beda harga?" ke area konsultasi, tanpa area abu-abu.
- **Limit pilihan**: 5 kartu masih ok karena berjenjang jelas (400rb → 8jt); kelompokkan visual: UMKM & Hemat (dasar) | Hemat Plus | Standar | POS (lanjutan) supaya tidak terasa "banyak".
- **Trust di dekat harga**: DP 50% + approve-demo dulu sebelum lunas — tulis tepat di bawah grid harga, bukan di halaman lain.
- **Tanpa friksi**: CTA per paket membuka WA dengan template pesan berisi nama paket → lead masuk sudah terkualifikasi sebagian.
- **Transparansi biaya revisi lewat batas** (rate per SOP 3.1) ditampilkan sebagai kebijakan, bukan kejutan — ini juga menaikkan kualitas lead (yang chat sudah tahu aturan main).

---

## 8. Copywriting untuk Journey (gaya & contoh pola)

| Tahap | Tujuan copy | Pola kalimat |
|---|---|---|
| T0–T1 | Menyadari masalah + mengenali diri | "Masih andalkan status WhatsApp buat jualan? Website membuat usaha kamu bisa ditemukan di Google…" |
| T2 | Membantu membandingkan | "Semua paket termasuk …, tidak termasuk …, revisi maksimal …x. Tulisannya di sini, tidak ada tambahan diam-diam." |
| T3 | Menurunkan risiko | "Mulai dengan obrolan ringan. Belum ada komitmen, belum ada DP." |
| CTA warm | Komitmen kecil | "Tanya-tanya dulu via WhatsApp — gratis, dibalas [X jam] di jam kerja." |

Aturan gaya (menegaskan AGENTS.md): kalimat aktif, angka konkret, tanpa hype, istilah teknis diterjemahkan ("online 24 jam" bukan "high availability"), bahasa Indonesia yang santai-profesional (pakai "kamu" ke pemilik usaha).

---

## 9. Metrik per Tahap Journey (untuk dievaluasi setelah live)

| Tahap | Metrik | Alat |
|---|---|---|
| T0–T1 Tahu | Impresi & klik dari search; sitasi AI (cek manual berkala) | Google Search Console; prompt uji di ChatGPT/Perplexity |
| T2 Bandingkan | View /layanan, /portfolio, scroll depth, waktu di halaman detail | Cloudflare Web Analytics (RUM) + event sederhana |
| T3–T4 Warm | **Klik tombol WA per lokasi & per paket (event utama)**; chat masuk yang menyebut paket | **Halaman redirect `/wa/[paket]`** (meta-refresh, tanpa JS) → terhitung sebagai pageview di Cloudflare Web Analytics, lalu langsung ke `wa.me` — klik WA terukur per paket tanpa JS tambahan; template WA memuat nama paket |
| Kualitas lead | % chat yang tahu paket tujuan; % lanjut ke proposal/DP | Catatan manual Destra (tracker SOP) |

Target awal realistis (tanpa mengarang angka benchmark industri): **klik WA meningkat dari baseline saat launch**, dan **sebagian besar chat menyebut paket** → tanda journey bekerja.

---

## 10. Checklist Implementasi (gabungan, urutan build)

1. Struktur & SEO dasar (layout, meta, sitemap, JSON-LD ProfessionalService).
2. Home sesuai urutan section bagian 3 (hero + bukti cepat + paket highlight UMKM).
3. Layanan: grid 5 paket + trust line + FAQ harga (answer blocks).
4. Portfolio grid + 6 detail (mobile screenshot ⬜, narasi manfaat ⬜).
5. Tentang (2 profil + cerita) & Kontak (WA template per paket).
6. FAQPage schema + 404 + sticky WA bar mobile (uji bergantian per minggu — dengan/tanpa sticky bar — dibandingkan lewat data `/wa/*`, karena Web Analytics tidak mendukung A/B split otomatis).
7. Cloudflare Web Analytics + halaman redirect `/wa/[paket]` sebagai pelacak klik WA (tanpa JS).
8. QA Lighthouse mobile 90+, uji WA link di perangkat nyata, uji share ke WA (OG image).
9. Setelah live: buat Google Business Profile ⬜ (entity consistency), pasang link IG ⬜, daftar ke Search Console.
10. Review konten & harga tiap 3–6 bulan (GEO freshness).

## 11. Sinkronisasi ke Dokumen Lain
- `WEBSITE-BRIEF.md` §3.1: tambah "bukti cepat di atas fold" (pilihan bentuk ⬜).
- `WEBSITE-BRIEF.md` §3.2: trust line di dekat harga; mini-FAQ harga.
- `WEBSITE-BRIEF.md` §3.3: screenshot mobile di detail proyek.
- `AGENTS.md`: FAQPage schema + answer blocks + CTA hierarchy + aturan copy journey.
- `PORTFOLIO-DATA.md`: kolom "manfaat bagi pemilik usaha" per proyek ⬜.
