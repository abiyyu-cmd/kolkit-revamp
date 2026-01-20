import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { BiLogoTiktok, BiLogoWhatsapp, BiShoppingBag } from "react-icons/bi";

export default function FeaturesSection() {
  const features = [
    {
      title: "Auto Outreach ke KOL TikTok",
      description:
        "Temukan dan jangkau KOL TikTok Shop secara otomatis. Kirim pesan personal untuk bangun kerjasama affiliate lebih cepat.",
      icon: <BiLogoTiktok />,
    },
    {
      title: "Temukan Pasukan Affiliator Shopee",
      description:
        "Cari pasukan affiliator Shopee yang sesuai target. Kirim penawaran otomatis untuk memperluas jaringan promosi.",
      icon: <BiShoppingBag />,
    },
    {
      title: "Blast WA dengan Pesan Personal",
      description:
        "Kirim ribuan WhatsApp tapi tetap kerasa personal. Bangun koneksi yang genuine, bukan vibe spammer.",
      icon: <BiLogoWhatsapp />,
    },
  ];
  return (
    <div className="pt-16 lg:py-40 bg-[#0A0A0A]">
      <div className="text-center mb-6">
        <h3 className="text-[38px] md:text-[42px] lg:text-5xl font-bold text-white">
          Fitur unggulan KOLKIT
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-0 gap-8 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon }) => {
  return (
    <HoverBorderGradient
      radius="rounded-xl"
      hoverOnly={true}
      className="flex flex-col justify-center text-center bg-[#2B2B2B] p-8 h-100"
    >
      <div className="text-7xl text-white mb-8 flex justify-center">{icon}</div>
      <h4 className="text-[24px] font-semibold text-white mb-5 leading-tight">
        {title}
      </h4>
      <p className="text-[18px] text-medium text-[#A1A1A1] mx-6 leading-tight">
        {description}
      </p>
    </HoverBorderGradient>
  );
};
