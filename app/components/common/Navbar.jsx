"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { href: "#hero", label: "Beranda" },
    { href: "#tentang", label: "Tentang Kami" },
    { href: "#menu", label: "Menu" },
    { href: "#galeri", label: "Galeri" },
    { href: "#kontak", label: "Kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/60 backdrop-blur-xl shadow-none"
          : "bg-neutral/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between px-5 md:px-16 transition-all duration-300 ${
          isScrolled ? "h-[90px]" : "h-20"
        }`}
      >
        <Link
          href="#hero"
          className="font-secondary text-3xl font-bold text-[#9e3d00] flex items-center gap-3"
        >
          <Image src="/Logo.png" alt="Logo" width={70} height={70} />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base lg:text-lg text-[#58423d] transition hover:text-[#9e3d00] hover:underline underline-offset-6 hover:font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="#order"
          className="rounded-full bg-[#9e3d00] px-6 py-2.5 text-base text-white transition hover:scale-[0.98]"
        >
          Order Now
        </Link>
      </div>
    </nav>
  );
}
