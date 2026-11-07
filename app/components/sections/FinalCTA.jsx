import {
  MdPinDrop,
  MdRoomService,
  MdSchedule,
  MdVerified,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../../lib/site";

const ASSURANCES = [
  { icon: MdVerified, label: "Resep Higienis" },
  { icon: MdSchedule, label: "Tepat Waktu" },
  { icon: MdPinDrop, label: "Purwakarta" },
];

export default function FinalCTA() {
  return (
    <section
      id="kontak"
      className="w-full border-t-2 border-arang bg-primary-container py-space-xl text-arang"
    >
      <div className="mx-auto w-full max-w-[1120px] px-margin md:px-margin-tablet lg:px-margin-desktop" data-aos="fade-up">
        <div className="flex flex-col items-center justify-between gap-space-xl rounded-[24px] border-2 border-arang bg-surface-container-lowest p-space-lg shadow-brut-md sm:p-space-xl md:flex-row md:p-space-3xl md:shadow-brut-lg">
          <div className="max-w-xl space-y-space-md">
            <div className="inline-flex items-center gap-2 rounded border border-arang/20 bg-secondary-container px-3 py-1 text-label text-daun-pekat">
              <MdRoomService
                size={18}
                aria-hidden="true"
                className="shrink-0"
              />
              <span>Konsultasi Gratis Tanpa Minimum Repot</span>
            </div>

            <h2 className="text-balance text-display-xl-mobile text-arang md:text-display-xl">
              Acara Anda butuh konsumsi?
            </h2>

            <p className="text-body-l text-on-surface-variant">
              Kirim tanggal, jumlah, dan budget. Pesan paling cepat H-7, paling
              lambat H-4. Melayani Purwakarta dan sekitarnya.
            </p>

            <ul className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs pt-2 text-small font-semibold text-daun-pekat">
              {ASSURANCES.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-1">
                    <Icon size={18} aria-hidden="true" className="shrink-0" />
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex w-full shrink-0 flex-col items-center md:w-auto md:items-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-arang bg-daun-pekat px-8 py-4 text-button text-on-primary shadow-brut-sm transition-colors duration-150 hover:bg-secondary active:translate-y-0.5 active:shadow-brut-xs sm:w-auto"
            >
              <FaWhatsapp size={24} aria-hidden="true" className="shrink-0" />
              <span>Pesan via WhatsApp</span>
            </a>
            <p className="mt-2 text-center text-label text-abu-daun md:text-right">
              Balasan cepat setiap hari (07.00 - 21.00 WIB)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
