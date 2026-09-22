import type { ImageMetadata } from "astro";

// Pengganti helper image() (dihapus di Astro 7): map semua file di src/assets/projects/
// sekali saat build, lalu resolve per nama file dari frontmatter content collection.
const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/projects/*", {
  eager: true,
});

export function projectImage(filename: string): ImageMetadata {
  const hit = images[`/src/assets/projects/${filename}`]?.default;
  if (!hit) {
    throw new Error(`Gambar proyek tidak ditemukan di src/assets/projects/: ${filename}`);
  }
  return hit;
}
