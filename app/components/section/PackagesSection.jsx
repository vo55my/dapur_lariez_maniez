import { LuCircleCheck, LuCircleAlert } from "react-icons/lu";

const packages = [
  {
    title: "Paket A",
    subtitle: "Favorit Rapat",
    variant: "border border-[#e0c0b2] bg-white text-[#9e3d00]",
    items: ["Risoles Mayo", "Dadar Gulung", "Air Mineral 330ml"],
    buttonText: "Pilih Paket A",
    buttonClass:
      "border-2 border-[#9e3d00] text-[#9e3d00] hover:bg-[#9e3d00] hover:text-white",
  },
  {
    title: "Paket B",
    subtitle: "Pilihan Spesial",
    variant: "border border-[#e0c0b2] bg-white text-[#9e3d00]",
    items: ["Risol Bihun", "Bolu Lapis Premium", "Air Mineral 330ml"],
    buttonText: "Pilih Paket B",
    buttonClass:
      "border-2 border-[#9e3d00] text-[#9e3d00] hover:bg-[#9e3d00] hover:text-white",
  },
  {
    title: "Paket Custom",
    subtitle: "Sesuai Kebutuhan",
    variant: "border border-[#e0c0b2] bg-white text-[#9e3d00]",
    items: [
      "Pilih snack sesukamu",
      "Sesuaikan dengan budget",
      "Porsi fleksibel",
    ],
    buttonText: "Konsultasikan",
    buttonClass:
      "border-2 border-[#9e3d00] text-[#9e3d00] hover:bg-[#9e3d00] hover:text-white",
  },
];

export default function PackagesSection() {
  return (
    <section id="paket" className="bg-neutral py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-16">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-3xl font-secondary font-bold text-[#9e3d00]">
            Pilihan Paket Hemat
          </h2>
          <p className="text-lg text-[#4f463f]">
            Solusi praktis untuk kebutuhan acara Anda
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, idx) => {
            const subtitleClass = "text-[#4f463f] group-hover:text-white/80";
            const itemTextClass = "text-[#4f463f] group-hover:text-white";
            const iconClass = "text-[#9e3d00] group-hover:text-white";

            return (
              <div
                key={pkg.title}
                className={`group flex h-full flex-col rounded-[2rem] border border-[#e0c0b2] bg-white p-8 text-[#9e3d00] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c64f00] hover:text-white hover:shadow-lg ${pkg.variant}`}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
              >
                <h3 className="mb-2 text-3xl font-secondary font-bold">
                  {pkg.title}
                </h3>
                <p
                  className={`mb-6 uppercase font-medium text-xs tracking-wide ${subtitleClass}`}
                >
                  {pkg.subtitle}
                </p>
                <ul className={`mb-8 flex-grow space-y-4 ${itemTextClass}`}>
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      {pkg.title === "Paket Custom" ? (
                        <LuCircleAlert
                          className={`min-h-6 min-w-6 ${iconClass}`}
                        />
                      ) : (
                        <LuCircleCheck
                          className={`min-h-6 min-w-6 ${iconClass}`}
                        />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full rounded-full py-3 text-sm font-semibold transition ${pkg.buttonClass} group-hover:border-white group-hover:bg-white group-hover:text-[#9e3d00]`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
