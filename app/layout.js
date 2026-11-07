import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AOSProvider from "./components/common/AOSProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const TITLE =
  "Dapur Lariez Maniez - Katering Snack Box & Nasi Kotak Purwakarta";
const DESCRIPTION =
  "Katering snack box, nasi kuning, kue basah, dan kue kering untuk acara di Purwakarta. Dibuat saat dipesan, isi disesuaikan budget. Pesan H-7 sampai H-4 sebelum acara.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Dapur Lariez Maniez",
    locale: "id_ID",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f9f9f7",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} h-full font-sans antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface text-on-surface">
        <Link
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-arang focus:px-4 focus:py-2 focus:text-on-primary"
        >
          Lewati ke konten utama
        </Link>
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
