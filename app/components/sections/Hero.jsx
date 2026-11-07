import Image from "next/image";
import { MdOutlineEvent, MdVerified } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { images, isRemote } from "../../lib/images";
import { WHATSAPP_URL } from "../../lib/site";

const TRUST_STATS = [
  { value: "100%", label: "Bahan Segar Alami" },
  { value: "H-4", label: "Batas Terakhir Pesan" },
  { value: "Bebas", label: "Sesuaikan Budget" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full lg:h-screen bg-surface py-space-xl lg:py-space-3xl"
    >
      <div className="mx-auto w-full max-w-[1120px] px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12 lg:gap-space-2xl">
          {/* Kiri: teks editorial */}
          <div className="flex flex-col items-start gap-space-lg lg:col-span-7" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 rounded-md border border-arang/20 bg-secondary-container px-3.5 py-1.5">
              <MdOutlineEvent
                size={18}
                aria-hidden="true"
                className="shrink-0 text-daun-pekat"
              />
              <span className="text-label uppercase tracking-wider text-daun-pekat">
                Pesan H-7 sampai H-4 sebelum acara
              </span>
            </div>

            <h1 className="text-balance text-display-xl-mobile text-arang md:text-display-xl">
              Snack box dan nasi kuning segar untuk acara di Purwakarta
            </h1>

            <p className="max-w-xl text-body-l text-on-surface-variant">
              Dibuat saat dipesan, isinya disesuaikan dengan budget. Higienis,
              gurih berempah, dan siap diantar tepat waktu ke seluruh
              Purwakarta.
            </p>

            <div className="flex w-full flex-wrap items-center gap-space-md pt-space-xs">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-arang bg-primary-container px-space-lg py-3.5 text-button text-arang shadow-brut-btn transition-colors duration-150 hover:bg-kunyit-pekat active:translate-y-0.5 active:shadow-brut-btn-active sm:w-auto"
              >
                <FaWhatsapp size={20} aria-hidden="true" className="shrink-0" />
                <span>Pesan via WhatsApp</span>
              </a>
              <a
                href="#menu"
                className="px-2 py-3 text-button text-arang underline decoration-arang decoration-2 underline-offset-4 transition-colors hover:text-daun-pekat"
              >
                Lihat menu →
              </a>
            </div>

            <dl className="grid w-full grid-cols-3 gap-space-md border-t-2 border-arang/15 pt-space-md">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-display-m text-arang">{stat.value}</dd>
                  <p aria-hidden="true" className="text-small text-abu-daun">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          {/* Kanan: nampan bento 3 sekat */}
          <div className="w-full lg:col-span-5" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-[24px] border-2 border-arang bg-surface-container-lowest shadow-brut-md">
              <div className="grid min-h-[440px] grid-cols-12">
                {/* Sekat 1: Nasi kuning */}
                <div className="col-span-7 flex flex-col border-r-2 border-arang bg-surface">
                  <div className="relative min-h-[220px] flex-1 overflow-hidden bg-surface-container">
                    <Image
                      src={images.hero.nasiKuning}
                      alt="Nasi kuning dalam kotak lengkap dengan telur suwir, perkedel, dan sambal goreng kentang"
                      fill
                      priority
                      sizes="(min-width: 1024px) 25vw, 60vw"
                      unoptimized={isRemote(images.hero.nasiKuning)}
                      className="object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded border border-arang bg-primary-container px-2.5 py-1 text-label text-arang">
                      Pilihan Utama
                    </span>
                  </div>
                  <div className="flex flex-col justify-center bg-surface-container-lowest p-space-md">
                    <p className="text-headline-sm text-arang">
                      Nasi Kuning Box
                    </p>
                    <p className="text-small text-on-surface-variant">
                      Lengkap lauk tempe orek &amp; sambal
                    </p>
                  </div>
                </div>

                {/* Sekat 2 & 3: Kue basah dan kue kering */}
                <div className="col-span-5 flex flex-col">
                  <div className="flex flex-1 flex-col border-b-2 border-arang bg-surface">
                    <div className="relative min-h-[110px] flex-1 overflow-hidden bg-surface-container">
                      <Image
                        src={images.hero.kueBasah}
                        alt="Lemper abon dan pastel ayam di atas piring saji"
                        fill
                        sizes="(min-width: 1024px) 18vw, 40vw"
                        unoptimized={isRemote(images.hero.kueBasah)}
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-surface-container-lowest p-2.5">
                      <p className="text-[15px] font-bold leading-tight text-arang">
                        Kue Basah
                      </p>
                      <p className="text-label font-medium text-daun-pekat">
                        Lemper, pastel, bolu
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col bg-surface">
                    <div className="relative min-h-[110px] flex-1 overflow-hidden bg-surface-container">
                      <Image
                        src={images.hero.anekaGorengan}
                        alt="Kue kering gurih keemasan dan kue keju dalam kotak"
                        fill
                        sizes="(min-width: 1024px) 18vw, 40vw"
                        unoptimized={isRemote(images.hero.anekaGorengan)}
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-surface-container-lowest p-2.5">
                      <p className="text-[15px] font-bold leading-tight text-arang">
                        Aneka Gorengan
                      </p>
                      <p className="text-label font-medium text-on-surface-variant">
                        Renyah &amp; gurih
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t-2 border-arang bg-secondary-container px-4 py-2.5">
                <span className="flex items-center gap-1.5 text-small font-bold text-on-secondary-fixed-variant">
                  <MdVerified
                    size={16}
                    aria-hidden="true"
                    className="shrink-0"
                  />
                  Kotak Higienis
                </span>
                <span className="text-label uppercase text-daun-pekat">
                  Resep Dapur Rumah
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
