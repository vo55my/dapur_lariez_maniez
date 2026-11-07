import { MdStar } from "react-icons/md";

const REVIEWS = [
  {
    quote:
      "Pesanan snack box untuk 120 peserta seminar tiba 45 menit sebelum acara mulai. Kue susnya masih renyah dan isian pastelnya padat. Panitia sangat terbantu dengan penyesuaian budget dinas kami.",
    name: "Ibu Ratna Dewi",
    context: "Acara Kantor BKPSDM Purwakarta",
  },
  {
    quote:
      "Nasi kuning tumpeng mini buat syukuran akikah anak rasanya pas banget, santannya gurih nggak bikin enek. Tamu-tamu keluarga pada tanya pesan di mana. Dapur Lariez Maniez rekomended pisan.",
    name: "Bapak Hendra Gunawan",
    context: "Syukuran Keluarga di Munjuljaya",
  },
  {
    quote:
      "Alhamdulillah bisa request isi 2 kue tradisional + 1 bolu dengan budget arisan yang mepet. Kemasannya bersih dan rapi, lempernya pulen wangi daun pisang asli. Langganan tetap kami sekarang.",
    name: "Teh Nani Suryani",
    context: "Arisan Warga Ciseureuh Purwakarta",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="w-full border-t-2 border-arang/10 bg-pandan-muda py-space-xl"
    >
      <div className="mx-auto w-full max-w-[1120px] px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="mx-auto mb-space-lg max-w-xl text-center" data-aos="fade-up">
          <span className="inline-block rounded border border-arang/20 bg-surface-container-lowest px-3 py-1 text-label uppercase tracking-wider text-daun-pekat">
            Ulasan Nyata
          </span>
          <h2 className="mt-2 text-balance text-display-l-mobile text-arang md:text-display-l">
            Kata pelanggan
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-space-lg lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <li key={review.name} className="flex" data-aos="fade-up" data-aos-delay="100">
              <figure className="flex w-full flex-col justify-between rounded-2xl border-2 border-arang bg-kertas-terang p-space-lg shadow-brut-sm">
                <div className="space-y-space-md">
                  <div
                    role="img"
                    aria-label="Penilaian 5 dari 5 bintang"
                    className="flex items-center gap-1 text-kunyit-pekat"
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <MdStar key={i} size={18} aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-body italic text-arang">
                    “{review.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-space-md border-t border-arang/15 pt-space-md">
                  <p className="text-body-bold text-arang">{review.name}</p>
                  <p className="text-label font-semibold text-daun-pekat">
                    {review.context}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
