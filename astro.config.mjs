// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

/** Varian font lokal: src/assets/fonts/<dir>/<file>-latin-<bobot>-<gaya>.woff2 */
const localVariant = (dir, file, weight, style = "normal") => ({
  weight,
  style,
  src: [`./src/assets/fonts/${dir}/${file}-latin-${weight}-${style}.woff2`],
});

// https://astro.build/config
export default defineConfig({
  // TODO(user): domain final — ganti 1 nilai ini saat pixcode.my.id aktif atau diganti domain lain.
  site: "https://pixcode.my.id",
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        // /wa/* = halaman pengalih WhatsApp (bukan konten).
        if (path.startsWith("/wa/")) return false;
        // Halaman demo template berisi usaha fiktif (noindex) — hanya galeri /template/ yang diindeks.
        if (path.startsWith("/template/") && path !== "/template/") return false;
        return true;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Plus Jakarta Sans",
      cssVariable: "--font-jakarta",
      provider: fontProviders.fontsource(),
      // Italic tidak dipakai — bawaan Astro memuat normal + italic (5 bobot jadi 10 file font),
      // jadi dibatasi ke normal saja. Subset latin saja agar ringan.
      styles: ["normal"],
      subsets: ["latin"],
      weights: [400, 500, 600, 700, 800],
    },
    // ---- Font khusus halaman contoh template (/template/*) ----
    // Dari @fontsource (lisensi OFL-1.1), disimpan lokal di src/assets/fonts agar build tidak
    // bergantung jaringan. Hanya dimuat di halaman template yang memakainya.
    {
      name: "Bricolage Grotesque",
      cssVariable: "--font-bricolage",
      provider: fontProviders.local(),
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
      options: { variants: [400, 700, 800].map((w) => localVariant("bricolage", "bricolage-grotesque", w)) },
    },
    {
      name: "Courier Prime",
      cssVariable: "--font-courier-prime",
      provider: fontProviders.local(),
      fallbacks: ["Courier New", "monospace"],
      options: { variants: [400, 700].map((w) => localVariant("courier-prime", "courier-prime", w)) },
    },
    {
      name: "Big Shoulders Display",
      cssVariable: "--font-big-shoulders",
      provider: fontProviders.local(),
      fallbacks: ["Impact", "Arial Narrow", "sans-serif"],
      options: { variants: [800, 900].map((w) => localVariant("big-shoulders", "big-shoulders-display", w)) },
    },
    {
      name: "IBM Plex Sans",
      cssVariable: "--font-plex-sans",
      provider: fontProviders.local(),
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
      options: { variants: [400, 600].map((w) => localVariant("plex-sans", "ibm-plex-sans", w)) },
    },
    {
      name: "Newsreader",
      cssVariable: "--font-newsreader",
      provider: fontProviders.local(),
      fallbacks: ["Georgia", "serif"],
      options: {
        variants: [
          localVariant("newsreader", "newsreader", 500),
          localVariant("newsreader", "newsreader", 400, "italic"),
          localVariant("newsreader", "newsreader", 500, "italic"),
        ],
      },
    },
    {
      name: "Onest",
      cssVariable: "--font-onest",
      provider: fontProviders.local(),
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
      options: { variants: [400, 600].map((w) => localVariant("onest", "onest", w)) },
    },
  ],
});
