import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const heroImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuZPI_pdo1Y_Ip3sd6DggNKnhrQKNC5RbPW5h9HN7TS5ygzE4rEuEIhT-DSYcBbDYuaODzTENRQCQ3PNwHW6IlK2uOYH7vyYXh0OSYK1Y49LXJp6T3rI0oGoiBHz1gJjt-jhGbtVunXrB0v_QdJs9nrRiROugZCpjlXjERtceCF6M-0Txkbf57d4iRe3QG74LWQOSExo65YVNCLGbf8H-Z1VooP-OkGID9J1DgFB1evG-oWST5OsQx4qG-oUYtP2DTYSDc0H5HASOi",
    alt: "Snack Box",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7eL8AlYSnEcmmYrfsWc6iynNW4vO8tl_0AMY_-qXq9y2UZpNgsElPY1nHW58kbJ4MSmOL3KMzdFXhWQHpzb3g1uhfRMBM9ep7jtbBVoA5c-LTZDndbt_JglnUq70vkonCzpf5vN9rkkZmU_rPjmXxNFzsat7YLAiY0R0Q-QYErYna5aCz6RG9dr5fCu16YvTu3tYVE7qMitUgyyJndfggG4OenL0hwXhC63VfYToMKUaPKL_QakNpQenDjmY6NRtDDdwd6o2X_h6e",
    alt: "Nasi Kuning",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLiuJlRylXXjZup2_mUT3B-I4w_cu-ACdYbi56aWeoJgZ2CaJiOJGYML7KLVcDVH7Wz35s3s12of2W66y1IoV7IYeAhy072DXGBX_EoUdTuqCycdIBtygLURG5iSWPyuXz8nc39_ADWW13zEUqYng-iWRQYRz7XLhzP9JXUUODbz4q5IApQIHB40bIq0KN8YPXSnEZ2q_mKECR3uFqiucluZ0Sujf6iGwTHf1E88ZmVPA6ny8YWCa5mCpjyA4cAaRtXIf02H5aHYM9",
    alt: "Kue Basah",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZFtqbPFZTSz4_WcjJ9j7DlUJpM2RHKD4buReNP2LN7F-ibgMM8KSf65RuEXh6H2jBYFuhr59iCg8swKJgCfpZsa-cSEPpcIDY8AI_ehVMeLLF5J8D33ZUkpJhkQANjNSqV0MLILZGfLoZU_f4wW-kPO13g2JfPojH8xM3gz2-ZsMuvmuQzsK2-3XY-6uWRalVbW-IdVJz67Nf6KWgk5d378ZlMC7QbM08ISvnP6GkIwDK7R9pm611BiEspLFXn3rebMQPvJN2HtpQ",
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
