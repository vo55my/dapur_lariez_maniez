import { Plus_Jakarta_Sans, Literata } from "next/font/google";
import "./globals.css";
import AOSProvider from "./components/common/AOSProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dapur Lariez Maniez",
  description: "Catering dan snack box Dapur Lariez Maniez.",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${literata.variable} h-full antialiased`}
    >
      <head>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="min-h-full flex flex-col">
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
