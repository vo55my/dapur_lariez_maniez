import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../../lib/site";

export default function FloatingCTA() {
  return (
    <aside className="fixed bottom-4 right-4 z-[100] md:bottom-6 md:right-6" aria-label="Tombol menghubungi via WhatsApp" data-aos="fade-left" data-aos-delay="200">
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-container px-space-lg py-3 text-button text-arang shadow-float transition-colors duration-150 hover:bg-kunyit-pekat"
      >
        <FaWhatsapp size={22} aria-hidden="true" className="shrink-0" />
        <span>Pesan via WhatsApp</span>
      </Link>
    </aside>
  );
}
