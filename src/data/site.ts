// Single source of truth untuk data situs — ATURAN AGENTS.md:
// tidak boleh ada nomor WA/email/nama domain ter-hardcode di komponen.
// TODO(user): isi username Instagram saat akun dibuat.

export const site = {
  name: "Pixcode Studio",
  legalName: "Pixcode Studio",
  tagline: "Website untuk UMKM — jelas cakupannya, jelas harganya, jelas prosesnya.",
  description:
    "Jasa pembuatan website & aplikasi untuk UMKM — berbasis di Bandung, melayani seluruh Indonesia. Harga jelas dari awal, batas revisi tertulis, proses DP 50% → demo → live. Mulai Rp 400.000.",
  url: "https://pixcode.my.id", // Domain final — aktifkan custom domain di Cloudflare.
  email: "pixcodestd@gmail.com",
  whatsapp: "6281513135408",
  city: "Bandung",
  region: "Jawa Barat",
  country: "Indonesia",
  // Area layanan: seluruh Indonesia (keputusan 2026-09-23). Basis tim tetap Bandung.
  // Pola hibrida (riset §6): sinyal lokal lewat kota-kota besar + catch-all "seluruh kota
  // lainnya" — jangan sebut semua kota (keyword stuffing, sinyal spam).
  serviceArea: "seluruh Indonesia",
  // Kota besar untuk JSON-LD areaServed & FAQ (di luar site.city yang selalu ikut).
  // Jabodetabek lengkap + kota besar pulau — populasi top-10 & satu megaregion ekonomi.
  majorCities: ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi", "Surabaya", "Medan", "Semarang"],
  // Jam respons — satu sumber untuk Footer dan halaman Kontak.
  hours: "Senin–Sabtu, 09.00–17.00 WIB",
  instagram: null as string | null, // TODO(user): isi cth. "pixcode.studio" saat akun jadi.
  // Cloudflare Web Analytics beacon token — ambil dari:
  // Dashboard → Analytics & Logs → Web Analytics → Manage site → copy token di snippet.
  // Token ini memang publik (ikut ke HTML klien by design) — aman di-commit.
  // Token terikat hostname: token staging workers.dev TIDAK menerima data dari pixcode.my.id.
  // TODO(user): setelah pixcode.my.id aktif, ganti dengan token dari site domain final.
  analyticsToken: "85298d673d3949158890c452810361a7" as string | null,
  foundedYear: 2026,
} as const;

export const fullUrl = (path = "/") => new URL(path, site.url).toString();

/** Nomor WA untuk tampilan manusia, mis. "+62 815-1313-5408" — diturunkan dari site.whatsapp. */
export const waDisplay = `+${site.whatsapp.slice(0, 2)} ${site.whatsapp.slice(2).replace(/(\d{3})(\d{4})(\d+)/, "$1-$2-$3")}`;

/** Template pesan WhatsApp per konteks — lead masuk langsung terkualifikasi. */
export function waLink(
  context:
    | { type: "general" }
    | { type: "package"; packageName: string }
    | { type: "project"; projectTitle: string },
): string {
  const base = `https://wa.me/${site.whatsapp}`;
  let text: string;
  switch (context.type) {
    case "package":
      text = `Halo Pixcode Studio! Saya tertarik dengan ${context.packageName}. Jenis usaha saya: ___, kebutuhan: ___, domisili: ___. Boleh tanya-tanya dulu?`;
      break;
    case "project":
      text = `Halo Pixcode Studio! Saya lihat proyek "${context.projectTitle}" di portfolio kalian. Saya mau bikin yang serupa untuk usaha saya. Boleh diskusi?`;
      break;
    default:
      text = "Halo Pixcode Studio! Saya mau konsultasi bikin website untuk usaha saya. Jenis usaha: ___, kebutuhan: ___.";
  }
  return `${base}?text=${encodeURIComponent(text)}`;
}
