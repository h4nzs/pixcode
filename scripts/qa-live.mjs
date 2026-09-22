#!/usr/bin/env node
// QA live — smoke test konten & link situs produksi (tanpa dependency, Node 22+).
// Pakai: node scripts/qa-live.mjs [baseURL]   (default: https://pixcode.h4nzs.workers.dev)

const BASE = (process.argv[2] ?? "https://pixcode.h4nzs.workers.dev").replace(/\/$/, "");
const issues = [];
const ok = (msg) => console.log(`  ✓ ${msg}`);
const fail = (msg) => {
  console.log(`  ✗ ${msg}`);
  issues.push(msg);
};

async function fetchPage(path) {
  const res = await fetch(BASE + path, { redirect: "follow" });
  return { res, text: await res.text() };
}

// ---------- 1. Sitemap ----------
const { text: sm } = await fetchPage("/sitemap-0.xml");
const urls = [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
console.log(`\n== Sitemap (${urls.length} URL) ==`);
urls.length >= 15 ? ok(`${urls.length} URL terdaftar`) : fail(`sitemap hanya ${urls.length} URL (harusnya ±19)`);

const expectPaths = ["/", "/layanan/", "/portfolio/", "/tentang/", "/kontak/", "/portfolio/vodatrip/", "/wa/paket-umkm/"];
for (const p of expectPaths) {
  urls.some((x) => new URL(x).pathname === p) ? ok(`sitemap memuat ${p}`) : fail(`sitemap TIDAK memuat ${p}`);
}

// ---------- 2. Per halaman: title, H1, alt, JSON-LD ----------
const pages = urls.filter((u) => !new URL(u).pathname.startsWith("/wa/"));
const internalRefs = new Set();
console.log(`\n== Per halaman (${pages.length} halaman konten) ==`);
for (const u of pages) {
  const path = new URL(u).pathname;
  const { res, text } = await fetchPage(path);
  if (res.status !== 200) {
    fail(`${path} → HTTP ${res.status}`);
    continue;
  }
  const h1 = (text.match(/<h1[ >]/g) ?? []).length;
  const title = text.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const imgsNoAlt = (text.match(/<img(?![^>]*\balt=)[^>]*>/g) ?? []).length;

  h1 === 1 ? ok(`${path} — H1 tunggal`) : fail(`${path} — jumlah H1 = ${h1}`);
  title ? ok(`${path} — title: "${title}"`) : fail(`${path} — tanpa <title>`);
  imgsNoAlt === 0 ? ok(`${path} — semua <img> punya alt`) : fail(`${path} — ${imgsNoAlt} <img> tanpa alt`);
  /name="viewport"/.test(text) || fail(`${path} — tanpa meta viewport`);

  for (const m of text.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
      ok(`${path} — JSON-LD valid`);
    } catch {
      fail(`${path} — JSON-LD tidak valid (parse error)`);
    }
  }
  for (const m of text.matchAll(/(?:href|src)="(\/[^"]*?)"/g)) internalRefs.add(m[1]);
}

// ---------- 3. Konten kunci (journey & harga) ----------
console.log("\n== Konten kunci ==");
const { text: home } = await fetchPage("/");
home.includes("Paling Laris") ? ok("Home — badge \"Paling Laris\" tampil") : fail("Home — badge Paling Laris hilang");
for (const harga of [
  "Rp 400.000",
  "Rp 500.000 – 800.000",
  "Rp 650.000 – 1.500.000",
  "Rp 1.000.000 – 3.000.000",
  "Rp 2.500.000 – 8.000.000",
]) {
  home.includes(harga) ? ok(`Home — harga ${harga} tampil`) : fail(`Home — harga ${harga} hilang`);
}
const waCta = (home.match(/wa\.me\/6281513135408/g) ?? []).length + (home.match(/href="\/wa\//g) ?? []).length;
waCta >= 5 ? ok(`Home — ${waCta} CTA WhatsApp`) : fail(`Home — CTA WhatsApp hanya ${waCta}`);
home.includes("DP 50%") || fail("Home — keterangan DP 50% hilang");

const { text: layanan } = await fetchPage("/layanan/");
layanan.includes("Paling Laris") ? ok("Layanan — UMKM ditonjolkan") : fail("Layanan — highlight UMKM hilang");
layanan.includes("lunasan 50% setelah kamu approve demo") || layanan.includes("approve demo")
  ? ok("Layanan — trust line alur bayar ada")
  : fail("Layanan — trust line alur bayar hilang");

const { text: pf } = await fetchPage("/portfolio/");
pf.includes("filter-semua") ? ok("Portfolio — filter kategori ada") : fail("Portfolio — filter kategori hilang");

const { text: tentang } = await fetchPage("/tentang/");
tentang.includes("Dehans") && tentang.includes("Destra") ? ok("Tentang — 2 profil tim ada") : fail("Tentang — profil tim tidak lengkap");

// ---------- 4. Semua link & asset internal → 200 ----------
console.log(`\n== Link & asset internal (${internalRefs.size} URL) ==`);
const broken = [];
await Promise.all(
  [...internalRefs].map(async (l) => {
    const r = await fetch(BASE + l, { redirect: "follow" });
    if (r.status !== 200) broken.push(`${l} → HTTP ${r.status}`);
  }),
);
broken.length === 0 ? ok("semua link & asset mengembalikan 200") : broken.forEach((b) => fail(`broken: ${b}`));

// ---------- 5. CSS token & font di produksi ----------
const cssUrl = home.match(/href="(\/_astro\/[^"]+\.css)"/)?.[1];
if (cssUrl) {
  const { text: css } = await fetchPage(cssUrl);
  css.includes("#0d9488") ? ok("CSS — token teal ter-compile") : fail("CSS — token teal tidak ditemukan");
  /font-jakarta|Plus Jakarta/.test(css) ? ok("CSS — Plus Jakarta Sans terpasang") : fail("CSS — font tidak ditemukan");
} else {
  fail("tidak menemukan file CSS di Home");
}

console.log(
  issues.length === 0
    ? `\n✅ SEMUA CEK LOLOS — ${BASE}`
    : `\n❌ ${issues.length} MASALAH ditemukan di ${BASE}`,
);
process.exit(issues.length ? 1 : 0);
