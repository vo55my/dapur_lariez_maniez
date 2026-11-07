// Daftar gambar yang dipakai di halaman.
export const images = {
  logo: {
    logo: "/Logo.webp",
  },
  hero: {
    nasiKuning: "/Nasi Kuning Box.webp",
    kueBasah: "/Kue Basah.webp",
    anekaGorengan: "/Aneka Gorengan.webp",
  },
  about: {
    dapur:
      "/Dapur.webp",
  },
  menu: {
    nasiKuning: "/Nasi Kuning Box.webp",
    kueBasah: "/Kue Basah.webp",
    anekaGorengan: "/Aneka Gorengan.webp",
    snackBox: "/Snack Box.webp",
  },
  // Urutan sama dengan daftar caption di components/sections/Gallery.jsx
  gallery: [
    "/Nasi Tumpeng.webp",
    "/Nasi Kuning Box.webp",
    "/Kue Basah.webp",
    "/Aneka Gorengan.webp",
    "/Snack Box.webp",
    "/Persiapan Makanan.webp",
    "/Persiapan Pengemasan.webp",
    "/Persiapan Diantar.webp",
  ],
};

// URL eksternal (placeholder) dimuat tanpa optimasi next/image; path lokal (/images/...) dioptimasi otomatis.
export const isRemote = (src) => src.startsWith("http");
