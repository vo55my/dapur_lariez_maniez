import Image from "next/image";

const galleryImages = [
  {
    alt: "Gallery 1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwFjqEVokHcfbmgxBbOX-bIfi2CC8t79gobEMBll-9aqHarnFRbUrQHv3SdpT3SX_sCi8VRiOvUL2EyUqeSGeVNmzOGgaDAg_hPqqxl5RsfnhDRdKjB2DTcG_Gf4XG7miyivsLp4LNIhUd9COkEm741Nbka4gM3C9G1bsuhLAp7rtw8VNtR597pKOHHfudcCxXf26z7fyTvgYQqo9q5tIG-HjLVleT1zr7YuY5P9onPjg4IP18m9dK1Z1jZvpF_m9X-SwDrrOlg3cX",
  },
  {
    alt: "Gallery 2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP9U0iRpkFzcicOI-spo55qZyRfxR6j0Xg39ESf_gOOwbWoPrvzwwVQ82dNKzoU0Qt63RbGF5zxXGWN12T1MM_7uxIKQkMmC0Dnue2RoLPZh9FGiVo9BCJMdX3rdIozE0DzOWv0kR5oUZTA1zZXWOHe_dgh-pLkk_zo9BOAVi0V_Rc1bgIQ1N7VCYcMi_G1mOVnXiiiwOKuTeNCReubjE5Bxm2kgMaIH2-4Tnvspn1s-isTgJldjp4JyzSGbhV--5FtG4V7g4QkBzB",
  },
  {
    alt: "Gallery 3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcueYbH5n1ooEa1uW_QIyLMxgHCL6r8BpfO1XaZYHATj4CuUcOI7pdrJX2tIywsbi4wyU76D65jGVQFlZ9z6HaSytHVEdvALk8n8aIw58lmtoS6OWTlLkJaprcGgORZcM5JvPHqimOkHCSZrS4InQedi9gFbRd1Si3mz8XzOo1yKSj6zUvCoJs7MP0umseJyhUXMMhhWs_c1H72gac9lJXEvMq-kqR4pEUjp6UcqomiopYPCHpLzb6mH_CQGcewJB2MVUh3Q7VXKyG",
  },
  {
    alt: "Gallery 4",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCme390DBLXCHEN90CWcHr5rUZq8bQDoh6njzDj0cSfRpJRmxMH3sLYoWEpldyRp2sWR3lV1yfcZMvQtCVe7TkUxa29NYLkgv-B-If8sDWr8TP8eeBkVI2YsYQvm2c4pdV7N-LdFiYpejUJ5uaG-Sh6anXNtACMsSuDVHT9OnlrAdu16g1RB4K-Bvc9DUDavRez1dQ9QMSLvadiqIIt-ES29xM3DtJYjILARopulYsBIgrH8ocAVhvxmsv-Iv8wqeoai34XqUuqhGTM",
  },
  {
    alt: "Gallery 5",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7fVMnoH2FozjB8VcAqA58t0ZLW8UTJYO83CF-UwXSTcoilFXDk4r0ZU-hH6u-flVzoSllx-aUsb1oj_0ULSGc9SwXeU0aSLxhiNjhim5b2SEB0eMNHQ4EO_YLNhJ0gxDEFzs4nyBEaYxZVDCh1SXcYc7QsjcfEw4SclJFlopUIGnLzS6VZA3G-KYkvjW-9kQ0dQOSDzFvgRDZCIogJwYNHDObRUfxOvCt_mFLSniNn5VkEiUO5bgxea-5RE6t9Sm-IjgNPKFJ_N4L",
  },
  {
    alt: "Gallery 6",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmmBEznYYhxQMNdT_1lQKMDT3R5YbhG8Urg8BQeFOCdX-LhJuRj979CFE7uFH6AWLhmIo1XcwaktMkiaRI2MqnZLad8CgfEfsU8ySLDBPuLip-Ff4QKKSdQWiYZHvXj1UbrRa3Fye5pPvRUL9tUqtXpAqXoebdev1k6HmiIr3f5pzgPNAWTY_ElT1rxD0CDPoIhp4sy9Fh0jE0Ht2RIikfHSOyeJ6vulHELP4nTtqwq9ugZgbpzinag-jJ7uYgCqpEvCZnCBd0Kf3S",
  },
  {
    alt: "Gallery 7",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEj_uF34gXWTMDdVveqxBeJ8ZXyLRe9azA2yUlI3daBGdof3qVNm5oCLEmhiHNaQ2MX-SIxqRyiZMMnAedb540wmvMQBp_whITDehtYCPCJLGsDsERgM865edQ5yISG5LKQY0Wi0KXaYG4OAvJwagglZCJ9FkMYdfvis5RJy73KWPea4oMECbwvMhPXdMjNfbEyGolGy97hqUaQE4uqlKCcggReAkUHJ2ka9X4FJhaIQnnkvCLpIZNgp84zGKqYp1RvHG3P2nE9eFe",
  },
  {
    alt: "Gallery 8",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnfV_EilwYTrnmudw-sirDtMI5HsGkIJGTaqI8ZJ759a3j86FBR6VlN-e_1NV2KBSY2O2iWygjeNPm1_kuUd7WcT8MvL-CISu-AyknjnEPFyekd0X8FW-SlGjtwSTkWUQf9A_RIIl96e71rurXa63CNRZwsdzwz8scrRaYok4uBz2JAhpGgwotqhUmUsUn_hw1VhP13eAk2VO14yvwhh1xmQ2zHxpqmz5PZRiQ8cmbnDhMqf8GFrRUWt1xcjc3zL_YSKjhdDg-u9wv",
  },
];

export default function GallerySection() {
  return (
    <section id="galeri" className="py-24 bg-neutral">
      <div className="mx-auto max-w-[1200px] px-5 md:px-16">
        <h2
          className="mb-12 text-3xl font-secondary font-bold text-[#9e3d00] text-center"
          data-aos="fade-up"
        >
          Galeri Kelezatan Kami
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={image.alt}
              className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              data-aos="zoom-in"
              data-aos-delay={idx * 80}
            >
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
