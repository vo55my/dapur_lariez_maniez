import Image from "next/image";

export default function FeaturedMenuSection() {
  return (
    <section id="menu" className="bg-[#faf9f6] py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-16">
        <div className="mb-10 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-3xl font-secondary font-bold text-[#9e3d00]">
            Menu Unggulan Kami
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#9e3d00]" />
        </div>
        <div className="grid gap-6 md:grid-cols-12">
          <div
            className="md:col-span-8 relative overflow-hidden rounded-[2rem] bg-[#fedba3] h-[400px] group"
            data-aos="zoom-in"
          >
            <Image
              fill
              src="/Menu-1.png"
              alt="Nasi Kuning Tumpeng"
              className="object-cover transition duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex flex-col justify-end">
              <span className="mb-4 inline-flex w-max rounded-full bg-[#9e3d00] px-3 py-1 text-sm font-semibold text-white">
                Best Seller
              </span>
              <h3 className="mb-2 text-3xl font-secondary font-bold text-white">
                Nasi Kuning Tumpeng
              </h3>
              <p className="max-w-md text-base text-white/80">
                Sajian istimewa untuk syukuran dan perayaan dengan lauk pauk
                lengkap dan rasa otentik.
              </p>
            </div>
          </div>

          <div
            className="md:col-span-4 relative overflow-hidden rounded-[2rem] bg-[#efeeeb] h-[400px] group"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Image
              fill
              src="/Menu-2.png"
              alt="Snack Basah"
              className="object-cover transition duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex flex-col justify-end">
              <h3 className="mb-2 text-3xl font-secondary font-bold text-white">
                Snack Basah
              </h3>
              <p className="text-base text-white/80">
                Risoles Mayo, Sosis Solo, Dadar Gulung, dan Pastel.
              </p>
            </div>
          </div>

          <div
            className="md:col-span-4 overflow-hidden rounded-[2rem] bg-[#efeeeb] aspect-square relative group"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              fill
              src="/Menu-3.png"
              alt="Nasi Kuning Box"
              className="object-cover transition duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-center text-3xl font-secondary font-bold text-white">
                Nasi Kuning Box
              </h3>
            </div>
          </div>
          <div
            className="md:col-span-4 overflow-hidden rounded-[2rem] bg-[#efeeeb] aspect-square relative group"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Image
              fill
              src="/Menu-4.png"
              alt="Gorengan"
              className="object-cover transition duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-center text-3xl font-secondary font-bold text-white">
                Aneka Gorengan
              </h3>
            </div>
          </div>
          <div
            className="md:col-span-4 overflow-hidden rounded-[2rem] bg-[#efeeeb] aspect-square relative group"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Image
              fill
              src="/Menu-5.png"
              alt="Roti & Kue"
              className="object-cover transition duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-center text-3xl font-secondary font-bold text-white">
                Roti & Kue
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
