import Image from "next/image";
import { images, isRemote } from "../../lib/images";

// Urutan harus sama dengan images.gallery di lib/images.js
const GALLERY_ITEMS = [
  {
    caption: "Nasi Kuning Tumpeng",
    alt: "Tumpeng nasi kuning lengkap dengan lauk tempe orek, perkedel, dan sambal goreng kentang",
  },
  {
    caption: "Nasi Kuning Box",
    alt: "Nasi kuning dalam kotak lengkap dengan lauk tempe orek, perkedel, dan sambal goreng kentang",
  },
  {
    caption: "Aneka Kue Basah",
    alt: "Lemper abon, pastel ayam, dan bolu marmer tertata rapi di atas piring saji",
  },
  {
    caption: "Aneka Gorengan",
    alt: "Tempe, tahu, dan bakwan goreng keemasan disajikan di atas piring saji",
  },
  {
    caption: "Snack Box",
    alt: "Snack box berisi aneka kue basah dan gorengan yang sudah dikemas rapi",
  },
  {
    caption: "Persiapan Makanan",
    alt: "Pesanan nasi kuning dan snack box sedang disiapkan di dapur",
  },
  {
    caption: "Proses Pengemasan",
    alt: "Pesanan nasi kuning dan snack box sedang dikemas",
  },
  {
    caption: "Pengiriman Pesanan",
    alt: "Pesanan nasi kuning dan snack box sedang diantar ke lokasi acara",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="w-full bg-surface py-space-xl">
      <div className="mx-auto w-full max-w-[1120px] px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Judul section */}
        <div className="mb-space-lg flex flex-row gap-space-md" data-aos="fade-up">
          <div>
            <span className="inline-block rounded border border-arang/20 bg-secondary-container px-3 py-1 text-label uppercase tracking-wider text-daun-pekat">
              Dokumentasi
            </span>
            <h2 className="mt-2 text-balance text-display-l-mobile text-arang md:text-display-l">
              Hasil dapur kami
            </h2>
            <p className="mt-2 text-body text-abu-daun">
              Semua hidangan didokumentasikan langsung saat persiapan pengiriman
              ke berbagai acara di Purwakarta.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-space-md md:grid-cols-4" data-aos="zoom-in" data-aos-delay="100">
          {GALLERY_ITEMS.map((item, index) => (
            <li
              key={item.caption}
              className="group relative aspect-square overflow-hidden rounded-[12px] border-2 border-arang bg-surface-container"
            >
              <Image
                src={images.gallery[index]}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                unoptimized={isRemote(images.gallery[index])}
                className="object-cover motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:scale-105"
              />
              <span className="absolute inset-x-2 bottom-2 rounded bg-surface-container-lowest/90 px-2 py-1 text-center text-label text-arang">
                {item.caption}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
