import { MdLocalShipping, MdOutlineChat, MdTune } from "react-icons/md";
import OrderTimeline from "./OrderTimeline";

const STEPS = [
  {
    number: 1,
    title: "Kontak & Detail Acara",
    text: "Kirim tanggal acara, jumlah porsi, dan budget lewat WhatsApp.",
    icon: MdOutlineChat,
    note: "Respon Cepat CS",
    circle: "bg-primary-container text-arang",
  },
  {
    number: 2,
    title: "Penyusunan Menu",
    text: "Kami usulkan isi kotak yang pas dengan budget.",
    icon: MdTune,
    note: "Kombinasi Fleksibel",
    circle: "bg-secondary-container text-daun-pekat",
  },
  {
    number: 3,
    title: "Masak & Pengiriman",
    text: "Setelah sepakat, pesanan dibuat dan disiapkan untuk acara Anda.",
    icon: MdLocalShipping,
    note: "Antar ke Lokasi",
    circle: "bg-tertiary-fixed text-arang",
  },
];

export default function HowToOrder() {
  return (
    <section
      id="paket"
      className="w-full border-t-2 border-arang/10 bg-surface py-space-xl"
    >
      <div className="mx-auto w-full max-w-[1120px] px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Judul section */}
        <div className="mb-space-xl max-w-2xl" data-aos="fade-up">
          <span className="inline-block rounded border border-arang/20 bg-secondary-container px-3 py-1 text-label uppercase tracking-wider text-daun-pekat">
            Alur Sederhana
          </span>
          <h2 className="mt-2 text-balance text-display-l-mobile text-arang md:text-display-l">
            Pesanan sesuai budget Anda
          </h2>
          <p className="mt-2 text-body-l text-on-surface-variant">
            Tidak ada paket kaku. Sampaikan kebutuhan Anda lewat WhatsApp dan
            kami racik menu terbaik yang ramah di kantong.
          </p>
        </div>

        {/* Tiga langkah: satu kolom di bawah lg, tiga kolom di lg ke atas */}
        <ol className="mb-space-xl grid grid-cols-1 gap-space-lg lg:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="flex flex-col justify-between rounded-2xl border-2 border-arang bg-surface-container-lowest p-space-lg shadow-brut-sm"
              >
                <div>
                  <div
                    className={`mb-space-md flex h-12 w-12 items-center justify-center rounded-full border-2 border-arang text-display-m ${step.circle}`}
                  >
                    {step.number}
                  </div>
                  <h3 className="mb-space-xs text-headline-sm text-arang">
                    {step.title}
                  </h3>
                  <p className="text-body text-on-surface-variant">
                    {step.text}
                  </p>
                </div>
                <div className="mt-space-md flex items-center gap-1 border-t border-arang/10 pt-space-md text-small text-daun-pekat">
                  <Icon size={18} aria-hidden="true" className="shrink-0" />
                  {step.note}
                </div>
              </li>
            );
          })}
        </ol>

        <OrderTimeline />
      </div>
    </section>
  );
}
