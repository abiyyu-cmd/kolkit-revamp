import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pb-10 bg-[#0A0A0A] text-white overflow-hidden">
      {/* Text Content */}
      <div className="z-10 pt-32 px-14">
        <h1 className="text-[30px] lg:text-[52px] font-semibold mb-2 leading-tight text-[#FAFAFA]">
          ALL-IN-ONE KOL EXECUTION PLATFORM
        </h1>
        <p className="text-lg md:text-[28px] text-[#A1A1A1]">
          TikTok Shop • Shopee Seller • WhatsApp Blast – In One Dashboard
        </p>
      </div>

      {/* Background Image (now positioned below text) */}
      <div className="relative z-0 mt-0 flex justify-center">
        <div className="w-[95%] max-w-7xl opacity-90">
          <Image
            src="/assets/hero-bg.png"
            alt="Kolkit Dashboard"
            width={2000}
            height={1000}
            className="w-full object-cover rounded-xl"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl text-[#FAFAFA] font-semibold">
          Temukan, Reach out, dan Kelola Ribuan Influencer dalam Sekali Klik.
        </h2>
        <div className="mt-6 px-2 lg:px-0 text-[22px] font-medium text-[#A1A1A1] leading-tight">
          <p className="max-w-3xl mx-auto">
            Cari influencer terbaik untuk brandmu udah ga perlu ribet lagi.
          </p>
          <p className="max-w-5xl mx-auto pb-12">
            KOLKIT hadir sebagai solusi buat brand dan seller yang ingin
            bergerak cepat, rapi, dan terukur.
          </p>
        </div>
        <HoverBorderGradient className="px-12 py-3 text-[18px] rounded-full text-white bg-[#2B2B2B] cursor-pointer">
          Miliki Sekarang
        </HoverBorderGradient>
      </div>

      {/* Gradient Overlay (optional) */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" /> */}
    </section>
  );
}
