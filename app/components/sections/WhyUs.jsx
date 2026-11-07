import { MdAccountBalanceWallet, MdEco, MdSavings } from "react-icons/md";

const REASONS = [
  {
    icon: MdAccountBalanceWallet,
    title: "Isi sesuai budget",
    text: "Menu dan jumlah disusun mengikuti budget Anda. Anda yang menentukan anggaran per boks, kami yang racik variasinya.",
  },
  {
    icon: MdSavings,
    title: "Harga terjangkau",
    text: "Snack box umumnya mulai Rp10.000–15.000 (bisa disesuaikan). Tetap higienis, lezat, dan tampak rapi saat disuguhkan.",
  },
  {
    icon: MdEco,
    title: "Dibuat saat dipesan",
    text: "Tidak ada stok lama; selalu segar. Kue dimasak subuh dan nasi diaron hangat sebelum dimasukkan ke dalam kotak kemasan.",
  },
];

// Kolom pertama tanpa padding kiri, kolom terakhir tanpa padding kanan (md ke atas)
function columnPadding(index, total) {
  if (index === 0) return "md:pl-0 md:pr-space-lg";
  if (index === total - 1) return "md:pl-space-lg md:pr-0";
  return "md:px-space-lg";
}

export default function WhyUs() {
  return (
    <section className="on-dark w-full border-y-2 border-arang bg-daun-pekat py-space-xl text-on-secondary">
      <div className="mx-auto w-full max-w-[1120px] px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto mb-space-2xl max-w-xl text-center" data-aos="fade-up">
          <span className="inline-block text-label uppercase tracking-wider text-primary-fixed">
            Komitmen Pelayanan
          </span>
          <h2 className="mt-2 text-balance text-display-l-mobile text-on-secondary md:text-display-l">
            Mengapa Memilih Kami?
          </h2>
        </div>

        <ul className="grid grid-cols-1 divide-y divide-border-inverted md:grid-cols-3 md:divide-x md:divide-y-0" data-aos="fade-up" data-aos-delay="100">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <li
                key={reason.title}
                className={`flex flex-col items-start gap-space-sm py-space-lg md:py-0 ${columnPadding(
                  index,
                  REASONS.length,
                )}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-inverted bg-secondary/50 text-primary-fixed">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="text-headline-sm text-on-secondary">
                  {reason.title}
                </h3>
                <p className="text-body text-surface-variant">{reason.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
