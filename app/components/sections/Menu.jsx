import Image from "next/image";
import { images, isRemote } from "../../lib/images";
import { WHATSAPP_URL } from "../../lib/site";
import { MdArrowForward } from "react-icons/md";

// Tiga sekat kecil di sisi kanan "kotak bersekat"
const SIDE_ITEMS = [
  {
    title: "Kue Basah",
    headline: "Aneka kue basah untuk suguhan.",
    description:
      "Lemper ayam ketan legit, pastel renyah isi wortel, telur, dan bihun, risoles mayo gurih, dan bolu kukus lembut.",
    image: images.menu.kueBasah,
    alt: "Aneka kue basah seperti lemper ayam, kue lemper pandan, dan risoles mayo",
    badge: {
      label: "Segar Hari Ini",
      className: "bg-secondary-container text-daun-pekat",
    },
  },
  {
    title: "Gorengan",
    headline: "Aneka gorengan lezat untuk camilan.",
    description:
      "Tempe, Tahu, bakwan, dan aneka gorengan renyah yang disajikan dengan sambal kacang.",
    image: images.menu.anekaGorengan,
    alt: "Aneka gorengan seperti tempe, tahu, dan bakwan",
    badge: {
      label: "Tahan Renyah",
      className: "bg-surface-container-high text-arang",
    },
  },
  {
    title: "Snack Box",
    tag: "Fleksibel",
    headline: "Isi disesuaikan budget, cocok untuk rapat dan seminar.",
    description:
      "Paket 2 kue + air mineral, atau 3 kue manis-asin lengkap dengan kemasan kotak karton kokoh.",
    image: images.menu.snackBox,
    alt: "Snack box terbuka berisi air mineral, kue pandan, dan pastel",
    price: "Mulai Rp10.000",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="w-full bg-pandan-muda py-space-xl">
      <div className="mx-auto w-full max-w-[1120px] px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Judul section */}
        <div className="mb-space-md" data-aos="fade-up">
          <span className="inline-block rounded border border-arang/20 bg-surface-container-lowest px-3 py-1 text-label uppercase tracking-wider text-daun-pekat">
            Katalog Pilihan
          </span>
          <h2 className="my-2 text-balance text-display-l-mobile text-arang md:text-display-l">
            Menu: Isi Kotak Dapur Kami
          </h2>
          <p className="max-w-full text-body text-abu-daun">
            Pilih salah satu hidangan utama atau kombinasikan menjadi paket
            bento &amp; snack box sesuai selera Anda.
          </p>
        </div>

        {/* Kotak bersekat: 1 sekat besar + 3 sekat kecil. Di bawah lg semuanya bertumpuk satu kolom agar teks tetap lega. */}
        <div
          className="w-full overflow-hidden rounded-[24px] border-2 border-arang bg-kertas-terang shadow-brut-md"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid grid-cols-1 divide-y-2 divide-arang lg:grid-cols-12 lg:divide-x-2 lg:divide-y-0">
            {/* Sekat utama: Nasi Kuning */}
            <article className="flex flex-col bg-surface-container-lowest lg:col-span-6">
              <div className="relative h-64 overflow-hidden border-b-2 border-arang bg-surface-container sm:h-72">
                <Image
                  src={images.menu.nasiKuning}
                  alt="Nasi kuning tumpeng mini dengan telur dadar suwir, tempe orek, dan ayam goreng di atas daun pisang"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  unoptimized={isRemote(images.menu.nasiKuning)}
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded border border-arang bg-primary-container px-3 py-1 text-label uppercase text-arang">
                  Paling Digemari
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-space-lg">
                <div className="space-y-space-xs">
                  <h3 className="text-display-m text-arang">Nasi Kuning</h3>
                  <p className="text-body-bold text-daun-pekat">
                    Untuk syukuran dan acara keluarga.
                  </p>
                  <p className="text-body text-on-surface-variant">
                    Kuning wangi alami dari kunyit parut asli dan santan kelapa
                    gurih. Disajikan bersama telur dadar suwir tipis, tempe orek
                    manis, kacang balado, dan sambal.
                  </p>
                </div>
                <div className="mt-space-lg flex flex-wrap items-center justify-between gap-space-sm border-t border-arang/15 pt-space-md">
                  <span className="text-label uppercase text-abu-daun">
                    Porsi Box / Tumpeng Mini
                  </span>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-button text-daun-pekat hover:underline"
                  >
                    <span>Tanya Isi</span>
                    <MdArrowForward
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </article>

            {/* Tiga sekat kecil */}
            <div className="grid grid-cols-1 divide-y-2 divide-arang lg:col-span-6">
              {SIDE_ITEMS.map((item) => (
                <article
                  key={item.title}
                  className="grid grid-cols-1 bg-surface sm:grid-cols-12"
                >
                  <div className="relative h-48 overflow-hidden border-b-2 border-arang bg-surface-container sm:col-span-5 sm:h-auto sm:min-h-[176px] sm:border-b-0 sm:border-r-2">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
                      unoptimized={isRemote(item.image)}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between bg-surface-container-lowest p-space-md sm:col-span-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-headline-sm text-arang">
                          {item.title}
                        </h3>
                        {item.tag && (
                          <span className="rounded border border-arang bg-primary-container px-2 py-0.5 text-label text-arang">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-body-bold text-daun-pekat">
                        {item.headline}
                      </p>
                      <p className="mt-1 text-small text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>

                    {item.price ? (
                      <div className="flex items-center justify-between gap-space-sm pt-2">
                        <span className="text-body-bold text-arang">
                          {item.price}
                        </span>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 text-small font-bold text-daun-pekat hover:underline"
                        >
                          <span>Konsultasi</span>
                          <MdArrowForward
                            size={18}
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </a>
                      </div>
                    ) : (
                      <div className="flex justify-end pt-2">
                        <span
                          className={`rounded px-2.5 py-1 text-label ${item.badge.className}`}
                        >
                          {item.badge.label}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
