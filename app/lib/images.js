// Daftar gambar yang dipakai di halaman.
export const images = {
  hero: {
    nasiKuning: "/Nasi Kuning Box.jpeg",
    kueBasah: "/Kue Basah.jpeg",
    anekaGorengan: "/Aneka Gorengan.jpeg",
  },
  about: {
    dapur:
      "/Dapur.jpeg",
  },
  menu: {
    nasiKuning: "/Nasi Kuning Box.jpeg",
    kueBasah: "/Kue Basah.jpeg",
    anekaGorengan: "/Aneka Gorengan.jpeg",
    snackBox: "/Snack Box.jpeg",
  },
  // Urutan sama dengan daftar caption di components/sections/Gallery.jsx
  gallery: [
    "/Nasi Tumpeng.jpeg",
    "/Nasi Kuning Box.jpeg",
    "/Kue Basah.jpeg",
    "/Aneka Gorengan.jpeg",
    "/Snack Box.jpeg",
    "/Persiapan Makanan.jpeg",
    "/Persiapan Pengemasan.jpeg",
    "/Persiapan Diantar.jpeg",
  ],
};

// URL eksternal (placeholder) dimuat tanpa optimasi next/image; path lokal (/images/...) dioptimasi otomatis.
export const isRemote = (src) => src.startsWith("http");
