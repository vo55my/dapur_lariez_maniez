import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const heroImages = [
  {
    src: "/Hero-1.png",
    alt: "Snack Box",
  },
  {
    src: "/Hero-2.png",
    alt: "Nasi Kuning",
  },
  {
    src: "/Hero-3.png",
    alt: "Kue Basah",
  },
  {
    src: "/Hero-4.png",
    alt: "Catering Service",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen sm:min-h-[calc(100vh-5.625rem)] overflow-hidden sm:pt-[50px]"
    >
      <div className="absolute inset-0">
        <div className="grid h-full gap-2 p-2 opacity-30 grid-cols-2 md:grid-cols-4">
          {heroImages.map((image) => (
            <div
              key={image.alt}
              className="relative h-full w-full overflow-hidden rounded-xl"
            >
              <Image
                fill
                src={image.src}
                alt={image.alt}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral via-white/70 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] items-center justify-start px-5 md:px-16">
        <div
          className="mx-auto max-w-xl sm:mx-0 sm:text-left"
          data-aos="fade-up"
        >
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-4xl font-secondary font-bold leading-tight text-[#9e3d00]">
            Catering Snack & Hidangan Rumahan untuk Acara Formal dan Non Formal
          </h1>
          <p
            className="mb-10 text-base sm:text-lg leading-relaxed text-[#4f463f]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Menyediakan nasi kuning, aneka kue basah, kue kering, dan snack box
            berkualitas dengan cita rasa rumahan yang lezat.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
            <Link
              href="#order"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#9e3d00] px-6 py-3 text-base text-white transition hover:scale-[0.98] sm:w-auto sm:px-8 sm:py-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaWhatsapp className="h-5 w-5" />
              Pesan via WhatsApp
            </Link>
            <Link
              href="#menu"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#74554b] px-6 py-3 text-base text-[#74554b] transition hover:bg-[#74554b]/10 sm:w-auto sm:px-8 sm:py-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Lihat Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
