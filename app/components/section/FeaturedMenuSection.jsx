import Image from "next/image";

export default function FeaturedMenuSection() {
  return (
    <section id="menu" className="bg-[#faf9f6] py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-16">
        <div className="mb-10 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-3xl font-secondary font-bold text-[#9e3d00]">
            Menu Unggulan Kami
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#9e3d00]" />
        </div>
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8 relative overflow-hidden rounded-[2rem] bg-[#fedba3] h-[400px]" data-aos="zoom-in">
            <Image
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYmAG0WOr2gQpmmg9AItgD__JStBwKlW4LT8ge_rxdZAPNNcSwPWUqMiuNptNfE1Aq3TLDLCvLZjwF5qVkXX9lLWkH437phmQ5_YxiV9MjsiCB-NTLNQ6DVw3K6oX5w9HxgAWeLgJUMFNSHkqT77wwIh5e8J97C7W4JI0yX2IBgMb7d0bNpKW1A95vpTm0KnTcHFKJr6BdQ-GcawBLqce_oh2qdTT2uhCCNp_lQ3Tqrt-CUkvLm_UqebA8Lv6HF0vEgLXtALdAPFu2"
              alt="Nasi Kuning Tumpeng"
              className="object-cover transition duration-500 hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex flex-col justify-end">
              <span className="mb-4 inline-flex w-max rounded-full bg-[#9e3d00] px-3 py-1 text-sm font-semibold text-white">
                Best Seller
              </span>
              <h3 className="mb-2 text-3xl font-secondary font-bold text-white">
                Nasi Kuning Tumpeng
              </h3>
              <p className="max-w-md text-base text-white/80">
                Sajian istimewa untuk syukuran dan perayaan dengan lauk pauk
                lengkap dan rasa otentik.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 relative overflow-hidden rounded-[2rem] bg-[#efeeeb] h-[400px]" data-aos="zoom-in" data-aos-delay="100">
            <Image
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv11dKjGh563YlBhZTtADTUWRFIsmBfpWYby3nQyc0VMni7rKjwDa8fg9zu-IMPvq106HgH1ETCjstT4x95BxCK142tlMp6gnzXzSRRIR3_8w2yobkdgYafmpe-ZfiMxfZyIZLlJuJV3nwu_KuyRUuJcnQfFj85751-p0Ew3Y5uhUvDsLTJuNcK5TSLeChnLHMkvVtOvCwr-zbyEmlVPIgeOl2oO-mLsc2B251QtlCna1gVc4V5fT5jAwUxYEn59SOsNQ1-mPMOkLK"
              alt="Snack Basah"
              className="object-cover transition duration-500 hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex flex-col justify-end">
              <h3 className="mb-2 text-3xl font-secondary font-bold text-white">
                Snack Basah
              </h3>
              <p className="text-base text-white/80">
                Risoles Mayo, Sosis Solo, Dadar Gulung, dan Pastel.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 overflow-hidden rounded-[2rem] bg-[#efeeeb] aspect-square relative group" data-aos="zoom-in" data-aos-delay="200">
            <Image
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGNOnksddvCXv9EJklrPBveGruvdZcYTutNshYZ8Su1C52ql_bPEjnLDeJdHjfl306fdpqa1Wn6P2RmsqwlAVvXv1FlXTK-n5CVoJ5CI38tUxeFaI4iwHULhz380Iqh8RMDgD-QqJlmsni-oeFhOEd1PdMMZELFr2Np9EUdBKKSFceerttQ3t7YFPxlqNx72S-9roN_yzgfOupIO5oJooGpyEiKfFKN-r6iqBbXY8DJoXg8_AYyK_6VQhFt75agxEbQTzrEXpXu8-y"
              alt="Nasi Kuning Box"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-center text-3xl font-secondary font-bold text-white">
                Nasi Kuning Box
              </h3>
            </div>
          </div>
          <div className="md:col-span-4 overflow-hidden rounded-[2rem] bg-[#efeeeb] aspect-square relative group" data-aos="zoom-in" data-aos-delay="300">
            <Image
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl7iU05O0LewZPiSNIcSBTJva4eVC7H79kv2vUSBz3E83CuBr0Kn1265Z0l8Qct7-aPdBRel6GMnvuMiPA6P1Cpl8Lgv_M4NJBsfi8vCJ7Ae1vmS_i7CSHLTsbOFO2m1OdyH_avqXzr_s7ZGdK4fZYk8uVv6NLOERd1n9hVlR-KeE_RA-RJ5SsE4J1NCmwBX63FMQq_6ZyGQhITZ4MnjBpc8g7wuCDYDcGRquMh__o-wMDuDTMwSEB4Lva89bSp4ChPIXV5gz1fS0d"
              alt="Gorengan"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-center text-3xl font-secondary font-bold text-white">
                Aneka Gorengan
              </h3>
            </div>
          </div>
          <div className="md:col-span-4 overflow-hidden rounded-[2rem] bg-[#efeeeb] aspect-square relative group" data-aos="zoom-in" data-aos-delay="400">
            <Image
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_2J_JNK6gytKhmdILnyIt-hJVuae4fjOuLDk_K2-7nW7i6hYSYeZ266TYfmCrgnP41aHMyXLHTMw1_Z6_EtBK80nXosENj4iCcDKfnVCbYUOTftclU7PF_6qVsgS9VE7mZN8QaRSoT2veaJJu4SX1jfbSSZB5koVv70YfTji7k7Qu_iVfD4YOKwT5-e_vsiIiEdliwzSe161NpHUShAhrTyarf_fDZMEvV2fayFzqsT5qMKSZx_OvB-rFCU9fflaw3iXx97ifejnE"
              alt="Roti & Kue"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <h3 className="text-center text-3xl font-secondary font-bold text-white">
                Roti & Kue
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
