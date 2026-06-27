import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#efeeeb] py-8 sm:py-12">
      <div className="mx-auto grid max-w-[1200px] px-5 grid-cols-1 md:grid-cols-2 md:px-16 pb-4 gap-8 md:gap-12">
        <div className="max-w-full md:max-w-sm">
          <Link
            className="mb-4 block text-2xl sm:text-3xl font-secondary font-bold text-[#9e3d00]"
            href="#hero"
          >
            <Image src="/Logo.png" alt="Logo" width={60} height={60} />
          </Link>
          <p className="mb-4 text-sm sm:text-base leading-relaxed text-[#4f463f]">
            Penyedia catering snack box dan nasi kuning terpercaya di
            Purwakarta. Menghadirkan kehangatan cita rasa rumahan untuk setiap
            momen spesial Anda.
          </p>
          <div className="flex gap-4">
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f3f1] text-[#9e3d00] transition hover:bg-[#9e3d00] hover:text-white"
              href="#"
            >
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f3f1] text-[#9e3d00] transition hover:bg-[#9e3d00] hover:text-white"
              href="#"
            >
              <FaTiktok className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          <div>
            <h4 className="mb-4 text-sm sm:text-base text-[#9e3d00]">
              Informasi
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-[#4f463f]">
              <li>
                <Link className="transition hover:text-[#9e3d00]" href="#menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-[#9e3d00]" href="#paket">
                  Paket Catering
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-[#9e3d00]"
                  href="#testimoni"
                >
                  Testimoni
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm sm:text-base text-[#9e3d00]">Kontak</h4>
            <ul className="space-y-3 text-sm sm:text-base text-[#4f463f]">
              <li className="flex items-start gap-3">
                <FiPhone
                  size={20}
                  className="text-[#4f463f] flex-shrink-0 mt-0.5"
                />
                <span className="text-sm sm:text-base text-[#4f463f]">
                  +62 812-3456-7890
                </span>
              </li>
              <li className="flex items-start gap-3">
                <IoLocationOutline
                  size={20}
                  className="text-[#4f463f] flex-shrink-0 mt-0.5"
                />
                <span className="text-sm sm:text-base text-[#4f463f]">
                  Perum Bukit Panorama Indah Blok D2 No. 23, Purwakarta
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaRegClock
                  size={20}
                  className="text-[#4f463f] flex-shrink-0 mt-0.5"
                />
                <span className="text-sm sm:text-base text-[#4f463f]">
                  Setiap Hari: 08:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e0c0b2]/30 pt-6 text-center text-xs sm:text-sm text-[#4f463f]">
        © {new Date().getFullYear()} Dapur Lariez Maniez. Authentic Warmth in
        Every Bite.
      </div>
    </footer>
  );
}
