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
    variant: "bg-[#c64f00] text-white shadow-lg",
    items: ["Risol Bihun", "Bolu Lapis Premium", "Air Mineral 330ml"],
    buttonText: "Pilih Paket B",
    buttonClass: "bg-white text-[#9e3d00] hover:shadow-lg",
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
    <section className="bg-neutral py-24">
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
            const subtitleClass = pkg.variant.includes("text-white")
              ? "text-white/80"
              : "text-[#4f463f]";
            const itemTextClass = pkg.variant.includes("text-white")
              ? "text-white"
              : "text-[#4f463f]";
            const iconClass = pkg.variant.includes("text-white")
              ? "text-white"
              : "text-[#9e3d00]";

            return (
              <div
                key={pkg.title}
                className={`flex h-full flex-col rounded-[2rem] p-8 transition-shadow hover:shadow-lg ${pkg.variant}`}
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
                        <LuCircleAlert className={`h-6 w-6 ${iconClass}`} />
                      ) : (
                        <LuCircleCheck className={`h-6 w-6 ${iconClass}`} />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full rounded-full py-3 text-sm font-semibold transition ${pkg.buttonClass}`}
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
