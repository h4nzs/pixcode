// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // TODO(user): domain final — ganti 1 nilai ini saat pixcode.my.id aktif atau diganti domain lain.
  site: "https://pixcode.my.id",
  // Halaman pengalih WhatsApp (/wa/*) bukan konten — keluarkan dari sitemap.
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith("/wa/") })],
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
  ],
});
