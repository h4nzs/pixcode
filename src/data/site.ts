// Single source of truth untuk data situs — ATURAN AGENTS.md:
// tidak boleh ada nomor WA/email/nama domain ter-hardcode di komponen.
// TODO(user): isi username Instagram saat akun dibuat.

export const site = {
  name: "Pixcode Studio",
  legalName: "Pixcode Studio",
  tagline: "Website untuk UMKM — jelas cakupannya, jelas harganya, jelas prosesnya.",
  description:
    "Jasa pembuatan website & aplikasi untuk UMKM di Bandung. Harga jelas dari awal, batas revisi tertulis, proses DP 50% → demo → live. Mulai Rp 400.000.",
  url: "https://pixcode.my.id", // TODO(user): domain final — ganti saat domain aktif/diubah.
  email: "pixcodestd@gmail.com",
  whatsapp: "6281513135408",
  city: "Bandung",
  region: "Jawa Barat",
  country: "Indonesia",
  areasServed: ["Bandung", "Garut", "Jakarta", "Tasikmalaya"],
  instagram: null as string | null, // TODO(user): isi cth. "pixcode.studio" saat akun jadi.
  // Cloudflare Web Analytics beacon token — ambil dari:
  // Dashboard → Analytics & Logs → Web Analytics → Manage site → copy token di snippet.
  // Token ini memang publik (ikut ke HTML klien by design) — aman di-commit.
  analyticsToken: "85298d673d3949158890c452810361a7" as string | null,
  foundedYear: 2026,
} as const;

export const fullUrl = (path = "/") => new URL(path, site.url).toString();

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
