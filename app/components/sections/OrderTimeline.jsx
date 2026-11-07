// sm ke atas: garis horizontal. Mobile: daftar vertikal agar teks tidak sempit.

import { MdInfo } from "react-icons/md";

const POINTS = [
  {
    label: "H-7",
    title: "Paling Cepat",
    titleClass: "text-daun-pekat",
    text: "Bagus untuk porsi besar & custom kotak khusus",
    align: "text-left",
  },
  {
    label: "H-4",
    title: "Paling Lambat",
    titleClass: "text-error",
    text: "Batas konfirmasi menu & belanja bahan dapur",
    align: "text-center",
  },
  {
    label: "Hari H",
    title: "Hari Acara",
    titleClass: "text-daun-pekat",
    text: "Pengiriman pagi / sesuai jadwal acara Anda",
    align: "text-right",
  },
];

export default function OrderTimeline() {
  return (
    <div className="rounded-2xl border-2 border-arang bg-surface-container p-space-lg" data-aos="fade-up" data-aos-delay="200">
      <div className="mb-space-md flex flex-col justify-between gap-space-sm sm:flex-row sm:items-center">
        <div>
          <h3 className="text-headline-sm text-arang">
            Jendela Waktu Pemesanan Ideal
          </h3>
          <p className="text-small text-abu-daun">
            Mohon perhatikan jeda waktu agar pesanan dapat disiapkan secara
            optimal.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-arang bg-primary-container px-3 py-1 text-label text-arang">
          <MdInfo size={16} aria-hidden="true" className="shrink-0" />
          Jadwal Ketat Dapur
        </span>
      </div>

      {/* Versi horizontal */}
      <div className="hidden pt-6 pb-2 sm:block">
        <div className="relative flex h-8 w-full items-center">
          <div className="relative flex h-[6px] w-1/2 items-center bg-primary-container">
            <div className="absolute left-0 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary-container bg-arang" />
            <div className="absolute right-0 z-10 h-4 w-4 translate-x-1/2 rounded-full border-2 border-primary-container bg-arang" />
          </div>
          <div className="relative flex h-[2px] w-1/2 items-center border-b-2 border-dashed border-arang/40">
            <div className="absolute right-0 h-3.5 w-3.5 translate-x-1/2 rounded-full border-2 border-arang bg-surface" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 pt-2">
          {POINTS.map((point) => (
            <div key={point.label} className={point.align}>
              <span className="text-display-m tabular-nums text-arang">
                {point.label}
              </span>
              <p className={`text-small font-bold ${point.titleClass}`}>
                {point.title}
              </p>
              <p className="text-label font-medium text-abu-daun">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Versi vertikal (mobile) */}
      <ol className="sm:hidden">
        {POINTS.map((point, index) => {
          const isLast = index === POINTS.length - 1;
          const isFirst = index === 0;
          return (
            <li
              key={point.label}
              className={`relative pl-10 ${isLast ? "" : "pb-space-lg"}`}
            >
              <span
                className={`absolute left-0 top-1.5 z-10 h-4 w-4 rounded-full border-2 ${
                  isLast
                    ? "border-arang bg-surface"
                    : "border-primary-container bg-arang"
                }`}
              />
              {!isLast && (
                <span
                  className={`absolute -bottom-1.5 top-[22px] ${
                    isFirst
                      ? "left-[5px] w-[6px] bg-primary-container"
                      : "left-[7px] border-l-2 border-dashed border-arang/40"
                  }`}
                />
              )}
              <span className="text-display-m tabular-nums text-arang">
                {point.label}
              </span>
              <p className={`text-small font-bold ${point.titleClass}`}>
                {point.title}
              </p>
              <p className="text-label font-medium text-abu-daun">
                {point.text}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
