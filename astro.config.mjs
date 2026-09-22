// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // TODO(user): domain final — ganti 1 nilai ini saat pixcode.my.id aktif atau diganti domain lain.
  site: "https://pixcode.my.id",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Plus Jakarta Sans",
      cssVariable: "--font-jakarta",
      provider: fontProviders.fontsource(),
      // Variabel font + italic tidak dipakai — subset latin saja agar ringan.
      subsets: ["latin"],
      weights: [400, 500, 600, 700, 800],
    },
  ],
});
