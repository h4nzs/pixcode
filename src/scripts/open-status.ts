// Status "Buka sekarang / Tutup" untuk halaman contoh template (/template/*).
//
// Kenapa JS: situs ini statis, jadi jam saat ini tidak diketahui saat build. Jam buka yang
// salah lebih merugikan usaha daripada skrip ±1 KB ini. Tanpa JS, teks bawaan di HTML
// ("Jam buka ada di bawah") tetap benar dan daftar jam buka tetap terbaca.
//
// Pemakaian di markup:
//   <div data-hours='[["08:00","22:00"],null,...]'>   ← indeks 0 = Minggu … 6 = Sabtu
//     <span data-open-label>Jam buka ada di bawah</span>
//     <li data-day="1">…</li>                         ← baris hari ini diberi aria-current="date"
//   </div>
// Atribut data-state="open|closed" dipasang di elemen data-hours agar CSS bisa mewarnai.

type Rentang = [string, string] | null;

const ZONA = "Asia/Jakarta";
const HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const SINGKAT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const menit = (t: string) => {
  const [j, m] = t.split(":").map(Number);
  return j * 60 + m;
};
const jam = (t: string) => t.replace(":", ".");

function sekarangWib() {
  const bagian = new Intl.DateTimeFormat("en-US", {
    timeZone: ZONA,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const ambil = (tipe: string) => bagian.find((b) => b.type === tipe)?.value ?? "0";
  return {
    hari: SINGKAT.indexOf(ambil("weekday")),
    menit: Number(ambil("hour")) * 60 + Number(ambil("minute")),
  };
}

function tentukanStatus(jadwal: Rentang[], hari: number, sekarang: number) {
  const hariIni = jadwal[hari];
  if (hariIni && sekarang >= menit(hariIni[0]) && sekarang < menit(hariIni[1])) {
    return { buka: true, teks: `Buka sekarang, tutup jam ${jam(hariIni[1])}` };
  }
  if (hariIni && sekarang < menit(hariIni[0])) {
    return { buka: false, teks: `Tutup. Buka hari ini jam ${jam(hariIni[0])}` };
  }
  for (let i = 1; i <= 7; i++) {
    const h = (hari + i) % 7;
    const berikut = jadwal[h];
    if (berikut) return { buka: false, teks: `Tutup. Buka lagi ${i === 1 ? "besok" : HARI[h]} jam ${jam(berikut[0])}` };
  }
  return { buka: false, teks: "Tutup" };
}

document.querySelectorAll<HTMLElement>("[data-hours]").forEach((root) => {
  let jadwal: Rentang[];
  try {
    jadwal = JSON.parse(root.dataset.hours ?? "[]");
  } catch {
    return;
  }
  if (jadwal.length !== 7) return;

  const { hari, menit: kini } = sekarangWib();
  const hasil = tentukanStatus(jadwal, hari, kini);

  root.dataset.state = hasil.buka ? "open" : "closed";
  root.querySelectorAll<HTMLElement>("[data-open-label]").forEach((el) => {
    el.textContent = hasil.teks;
  });
  root.querySelectorAll<HTMLElement>("[data-day]").forEach((baris) => {
    if (Number(baris.dataset.day) === hari) baris.setAttribute("aria-current", "date");
  });
});
