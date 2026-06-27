import Image from "next/image";

const galleryImages = [
  {
    alt: "Gallery 1",
    src: "/Gallery-1.png",
  },
  {
    alt: "Gallery 2",
    src: "/Gallery-2.png",
  },
  {
    alt: "Gallery 3",
    src: "/Gallery-3.png",
  },
  {
    alt: "Gallery 4",
    src: "/Gallery-4.png",
  },
  {
    alt: "Gallery 5",
    src: "/Gallery-5.png",
  },
  {
    alt: "Gallery 6",
    src: "/Gallery-6.png",
  },
  {
    alt: "Gallery 7",
    src: "/Gallery-7.png",
  },
  {
    alt: "Gallery 8",
    src: "/Gallery-8.png",
  },
];

export default function GallerySection() {
  return (
    <section id="galeri" className="py-24 bg-neutral">
      <div className="mx-auto max-w-[1200px] px-5 md:px-16">
        <h2
          className="mb-12 text-3xl font-secondary font-bold text-[#9e3d00] text-center"
          data-aos="fade-up"
        >
          Galeri Kelezatan Kami
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={image.alt}
              className="aspect-square rounded-2xl overflow-hidden shadow-sm transition-shadow hover:shadow-md"
              data-aos="zoom-in"
              data-aos-delay={idx * 80}
            >
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
