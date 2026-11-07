import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL, SITE_NAME } from "../../lib/site";
import { images, isRemote } from "../../lib/images";

const FOOTER_LINKS = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Menu & Paket", href: "#menu" },
  { label: "Cara Pemesanan", href: "#paket" },
  { label: "Dokumentasi Acara", href: "#galeri" },
  { label: "Ulasan Pelanggan", href: "#testimoni" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="on-dark w-full bg-daun-pekat py-space-xl text-on-secondary">
      <div className="mx-auto w-full max-w-[1120px] px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 gap-space-xl border-b border-border-inverted pb-space-lg md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-space-sm">
            <Image
              src={images.logo.logo}
              alt="Logo"
              width={70}
              height={70}
              className="rounded-full bg-surface-container-lowest"
            />
            <p className="max-w-sm text-body text-surface-variant">
              Catering snack box higienis dan nasi kuning khas Purwakarta dengan
              citarasa autentik resep keluarga.
            </p>
          </div>

          {/* Navigasi */}
          <nav aria-label="Navigasi footer">
            <p className="mb-space-md text-headline-sm text-on-secondary">
              Navigasi Cepat
            </p>
            <ul className="space-y-space-xs text-small text-surface-variant">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-primary-fixed"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak */}
          <div>
            <p className="mb-space-md text-headline-sm text-on-secondary">
              Kontak &amp; Pemesanan
            </p>
            <p className="mb-space-md text-body text-surface-variant">
              Siap melayani pesanan rapat kantor, syukuran keluarga, arisan, dan
              pengajian.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body-bold text-primary-fixed transition-colors hover:text-primary-fixed-dim"
            >
              <FaWhatsapp size={20} aria-hidden="true" className="shrink-0" />
              Hubungi WhatsApp Resmi
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-space-sm pt-space-lg text-center text-small text-surface-variant sm:flex-row sm:text-left">
          <p>© {currentYear} {SITE_NAME}.</p>
        </div>
      </div>
    </footer>
  );
}
