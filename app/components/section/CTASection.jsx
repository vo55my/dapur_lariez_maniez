import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section id="kontak" className="py-24 px-5 md:px-16">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[3rem] bg-[#9e3d00] p-12 md:p-20 text-center text-white relative">
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#c64f00]/20" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#c64f00]/20" />
        <div className="relative z-10" data-aos="fade-up">
          <h2 className="mb-6 text-4xl font-secondary font-bold leading-tight">
            Siap Menyediakan Snack untuk Acara Anda?
          </h2>
          <p
            className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/80"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Klik tombol di bawah ini untuk konsultasi menu dan pemesanan cepat
            via WhatsApp.
          </p>
          <Link
            href="#order"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-xl text-[#9e3d00] transition hover:scale-[0.98]"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaWhatsapp className="h-6 w-6" />
            Pesan via WhatsApp Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
