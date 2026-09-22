#!/usr/bin/env node
// Submit URL sitemap ke IndexNow (Bing/Yandex/Naver dsb.).
// Pakai: npm run indexnow -- https://pixcode.my.id   (jalankan SETELAH domain final aktif)
// Key file (public/<key>.txt) ikut ter-deploy sehingga verifikasi otomatis lolos.
import { readFile, readdir } from "node:fs/promises";

const base = (process.argv[2] ?? process.env.SITE_URL ?? "").replace(/\/$/, "");
if (!base) {
  console.error("Pemakaian: npm run indexnow -- https://domain-kamu");
  process.exit(1);
}
const files = await readdir("public");
const keyFile = files.find((f) => f.endsWith(".txt") && /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("Key file IndexNow tidak ditemukan di public/ (32 karakter hex .txt)");
  process.exit(1);
}
const key = keyFile.replace(".txt", "");
const sm = await readFile("dist/sitemap-0.xml", "utf8");
const urls = [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]).filter((u) => u.startsWith(base));
if (urls.length === 0) {
  console.error(`Tidak ada URL ${base} di sitemap — domain belum final?`);
  process.exit(1);
}
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(base).host, key, keyLocation: `${base}/${keyFile}`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} ${res.ok ? "OK" : "GAGAL"} — ${urls.length} URL, key=${key}`);
process.exit(res.ok ? 0 : 1);
