import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod"; // Zod 4 — ATURAN AGENTS.md: import dari astro/zod.

// Catatan Astro 7: helper image() sudah dihapus dari content config.
// Gambar dirujuk sebagai nama file (string) lalu diresolve ke ImageMetadata
// lewat src/utils/projectImage.ts (import.meta.glob) untuk astro:assets.

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    /** Label klien anonim (cth. "Perusahaan event & lifestyle, Indonesia") — ATURAN anonimisasi. */
    client: z.string(),
    category: z.enum(["website", "web-app", "pos"]),
    package: z.enum(["hemat", "hemat-plus", "standar", "pos"]).nullable(),
    /** Label khusus proyek internal; null untuk proyek klien. */
    internalLabel: z.string().nullable(),
    year: z.number().int().min(2020).max(2100),
    /** Nama file gambar di src/assets/projects/ — diresolve lewat utils/projectImage.ts. */
    thumbnail: z.string(),
    gallery: z.array(z.string()).default([]),
    liveUrl: z.url().nullable(),
    /** Status situs live: "temporarily-offline" = dinonaktifkan sementara (UI menampilkan info). */
    liveStatus: z.enum(["active", "temporarily-offline"]).default("active"),
    repoUrl: z.url().nullable(),
    description: z.string(),
    /** Manfaat bagi pemilik usaha — wajib per riset §3 (bukan cuma teknologi). */
    benefit: z.string(),
    /** Studi kasus: masalah bisnis di balik proyek. Nullable — tanpa field ini halaman tetap valid. */
    challenge: z.string().nullable().default(null),
    /** Before→after berbasis teks (riset T2). Null = section tidak dirender. */
    before: z.string().nullable().default(null),
    after: z.string().nullable().default(null),
    /** Bahasa/tools/framework — sinyal kredibilitas teknis + kutipan AI engine (GEO). */
    stack: z.array(z.string()).default([]),
    features: z.array(z.string()).default([]),
    testimonial: z
      .object({ text: z.string(), author: z.string() })
      .nullable()
      .default(null),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
