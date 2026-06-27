import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    quote:
      "Snack-nya enak banget dan pengirimannya selalu tepat waktu. Cocok banget buat acara keluarga besar kami.",
    name: "Ibu Amalia",
    role: "Acara Arisan",
    initials: "IA",
  },
  {
    quote:
      "Cocok untuk acara kantor, porsinya pas dan kemasannya rapi. Rekan-rekan kerja semua suka dengan rasanya.",
    name: "Bapak Putu",
    role: "Event Manager Kantor",
    initials: "BP",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="bg-[#f4f3f1] py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-16">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-secondary font-bold text-[#9e3d00]">
            Apa Kata Pelanggan Kami
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item, idx) => (
            <article
              key={item.name}
              className="rounded-[2rem] bg-neutral p-8 shadow-sm border border-[#e0c0b2]/30"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <div className="mb-4 flex gap-1 text-[#9e3d00]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className="h-6 w-6" />
                ))}
              </div>
              <p className="mb-6 text-xl italic text-[#4f463f]">
                &quot;{item.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fedba3] font-bold text-[#7a4a20]">
                  {item.initials}
                </div>
                <div>
                  <p className="text-base text-[#9e3d00]">{item.name}</p>
                  <p className="text-xs text-[#4f463f]">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
