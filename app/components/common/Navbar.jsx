"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { NAV_LINKS, WHATSAPP_URL } from "../../lib/site";

// Section yang dipantau untuk menandai menu aktif saat scroll.
// "hero" dan "kontak" ikut dipantau supaya sorotan menu hilang di luar section menu.
const TRACKED_IDS = [
  "hero",
  ...NAV_LINKS.map((link) => link.href.slice(1)),
  "kontak",
];

const LINK_BASE = "rounded-lg transition-colors";
const LINK_ACTIVE =
  "bg-secondary-container font-bold text-on-secondary-fixed-variant";
const LINK_IDLE = "text-on-surface-variant hover:text-arang";

const WA_BUTTON =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary-container px-space-lg py-3 text-button text-arang transition-colors duration-150 hover:bg-kunyit-pekat";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = TRACKED_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-hairline bg-surface-container-lowest">
      <div className="mx-auto flex h-16 w-full max-w-full items-center justify-between gap-space-md px-margin md:px-margin-tablet lg:px-margin-desktop">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-space-sm"
        >
          <Image
            src="/Logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* Menu desktop */}
        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-space-lg lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`${LINK_BASE} px-2 py-1 text-small ${
                  isActive ? LINK_ACTIVE : LINK_IDLE
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm">
          <div className="hidden sm:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={WA_BUTTON}
            >
              <FaWhatsapp size={20} aria-hidden="true" className="shrink-0" />
              <span>Pesan via WhatsApp</span>
            </a>
          </div>

          {/* Tombol menu mobile & tablet */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-arang transition-colors hover:bg-surface-container lg:hidden"
          >
            {open ? (
              <MdClose size={24} aria-hidden="true" />
            ) : (
              <MdMenu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Panel menu mobile & tablet */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-y-2 border-arang bg-surface-container-lowest lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-space-xs px-margin py-space-md md:px-margin-tablet lg:px-margin-desktop">
            <nav
              aria-label="Navigasi utama"
              className="flex flex-col gap-space-xs"
            >
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "location" : undefined}
                    className={`${LINK_BASE} px-3 py-3 text-body ${
                      isActive ? LINK_ACTIVE : LINK_IDLE
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${WA_BUTTON} mt-space-sm w-full`}
            >
              <FaWhatsapp size={20} aria-hidden="true" className="shrink-0" />
              <span>Pesan via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
