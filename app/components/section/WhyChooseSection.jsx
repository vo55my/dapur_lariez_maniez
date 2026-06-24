import {
  LuUtensils,
  LuArchive,
  LuPartyPopper,
  LuHandHeart,
} from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";

const reasons = [
  { icon: LuUtensils, label: "Rasa Rumahan" },
  { icon: FaRegClock, label: "Dibuat Fresh" },
  { icon: LuArchive, label: "Kemasan Rapi" },
  { icon: TbPigMoney, label: "Harga Terjangkau" },
  { icon: LuPartyPopper, label: "Cocok Berbagai Acara" },
  { icon: LuHandHeart, label: "Pelayanan Ramah" },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#efeeeb] py-18">
      <div className="mx-auto max-w-[1200px] px-5 md:px-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {reasons.map((reason, idx) => (
            <div
              key={reason.label}
              className="flex flex-col items-center gap-4 rounded-[2rem] p-4 text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <reason.icon className="h-8 w-8 text-[#9e3d00]" />
              </div>
              <p className="text-base text-[#4f463f]">{reason.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
