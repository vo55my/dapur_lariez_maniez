import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingCTA() {
  return (
    <Link
      href="#order"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg transition hover:scale-110 hover:shadow-xl"
      title="Chat dengan kami di WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8 text-white" />
    </Link>
  );
}
