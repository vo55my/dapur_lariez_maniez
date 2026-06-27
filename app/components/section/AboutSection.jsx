import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { HiBadgeCheck } from "react-icons/hi";
import { MdEditNote } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";

export default function AboutSection() {
  const features = [
    {
      icon: <GoHomeFill className="h-6 w-6" />,
      title: "Homemade",
      description: "Resep keluarga terpercaya",
    },
    {
      icon: <HiBadgeCheck className="h-6 w-6" />,
      title: "Fresh Setiap Hari",
      description: "Dibuat hanya saat dipesan",
    },
    {
      icon: <MdEditNote className="h-6 w-6" />,
      title: "Custom Pesanan",
      description: "Sesuaikan dengan budget",
    },
    {
      icon: <FaMoneyBills className="h-6 w-6" />,
      title: "Harga Terjangkau",
      description: "Kualitas premium, harga UMKM",
    },
  ];

  return (
    <section id="tentang" className="bg-[#f4f3f1] py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-16 px-5 md:flex-col md:items-center md:px-16 lg:flex-row lg:items-start text-left">
        <div className="relative w-full lg:w-1/2" data-aos="fade-right">
          <div className="relative aspect-[4/4] overflow-hidden rounded-2xl shadow-xl">
            <Image
              fill
              src="/About.png"
              alt="Dapur Lariez Maniez Story"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
          <div
            className="absolute -bottom-4 -right-4 hidden md:block bg-white/75 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-xs"
            data-aos="fade-up"
          >
            <p className="mb-1 text-2xl font-secondary font-bold text-[#9e3d00]">
              Authentic
            </p>
            <p className="text-sm text-[#4f463f]">Warmth in every bite</p>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          data-aos="fade-left"
        >
          <h2 className="mb-6 text-3xl font-secondary font-bold text-[#9e3d00]">
            Tentang Dapur Lariez Maniez
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#4f463f]">
            Dapur Lariez Maniez merupakan UMKM yang bergerak di bidang catering
            snack dan hidangan untuk berbagai acara formal maupun non formal.
            Kami menyediakan berbagai pilihan menu dengan bahan berkualitas dan
            rasa yang terjaga untuk memenuhi kebutuhan acara keluarga, kantor,
            rapat, seminar, ulang tahun, hingga syukuran.
          </p>
          <div className="grid gap-6 grid-cols-2">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 text-[#9e3d00]"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {feature.icon}
                <div>
                  <h4 className="text-base text-[#9e3d00]">{feature.title}</h4>
                  <p className="text-sm text-[#4f463f]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
