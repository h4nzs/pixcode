import type { ImageMetadata } from "astro";

// Thumbnail galeri template: screenshot halaman demo di src/assets/templates/ (dibuat ulang bila tampilan demo berubah).
const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/templates/*", { eager: true });

export function templateImage(filename: string): ImageMetadata {
  const hit = images[`/src/assets/templates/${filename}`]?.default;
  if (!hit) throw new Error(`Thumbnail template tidak ditemukan di src/assets/templates/: ${filename}`);
  return hit;
}
