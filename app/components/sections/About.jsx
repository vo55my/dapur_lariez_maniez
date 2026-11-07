import Image from "next/image";
import { MdCleanHands, MdOutlineAccessTime } from "react-icons/md";
import { images, isRemote } from "../../lib/images";

const HIGHLIGHTS = [
  {
    icon: MdCleanHands,
    title: "Higienis & Terjaga",
    text: "Pengemasan kotak tertutup rapat dengan alas bersih.",
  },
  {
    icon: MdOutlineAccessTime,
    title: "Tepat Waktu Antar",
    text: "Pesanan siap diantar sebelum acara Anda dimulai.",
  },
];

export default function About() {
  return (
    <section
      id="tentang"
      className="w-full border-t-2 border-arang/10 bg-surface-container-lowest py-space-xl"
    >
      <div className="mx-auto w-full max-w-[1120px] px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12 lg:gap-space-2xl">
          {/* Foto dapur */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="relative overflow-hidden rounded-[16px] border-2 border-arang bg-surface shadow-brut-sm">
              <div className="relative h-[320px] w-full sm:h-[380px]">
                <Image
                  src={images.about.dapur}
                  alt="Proses menyiapkan snack box di dapur rumahan yang bersih"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  unoptimized={isRemote(images.about.dapur)}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Narasi */}
          <div className="flex flex-col items-start gap-space-md lg:col-span-7" data-aos="fade-left">
            <span className="inline-block rounded border border-arang/20 bg-secondary-container px-3 py-1 text-label uppercase tracking-wider text-daun-pekat">
              Tentang Kami
            </span>
            <h2 className="text-balance text-display-l-mobile text-arang md:text-display-l">
              Dapur rumahan untuk acara Anda
            </h2>
            <p className="text-body-l text-on-surface-variant">
              Dapur Lariez Maniez menyiapkan nasi kuning, kue basah, dan snack
              box untuk acara keluarga, kantor, rapat, seminar, ulang tahun, dan
              syukuran.
            </p>
            <p className="text-body text-abu-daun">
              Berawal dari resep rumahan yang kaya bumbu aromatik, kami memahami
              bahwa setiap penyelenggara acara menginginkan makanan yang tidak
              hanya sedap, namun juga rapi dalam penyajian dan pas dengan
              alokasi anggaran yang dimiliki.
            </p>

            <div className="grid w-full grid-cols-1 gap-space-md pt-space-sm sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-arang/15 bg-surface-container-low p-space-md"
                  >
                    <Icon
                      size={24}
                      aria-hidden="true"
                      className="mb-1 text-daun-pekat"
                    />
                    <h3 className="text-headline-sm text-arang">
                      {item.title}
                    </h3>
                    <p className="text-small text-abu-daun">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
