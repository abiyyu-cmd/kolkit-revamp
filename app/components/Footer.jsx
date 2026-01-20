"use client";

import {
  BiLogoInstagram,
  BiLogoTelegram,
  BiLogoFacebook,
  BiLogoTiktok,
  BiLogoLinkedin,
  BiMap,
  BiLogoWhatsapp,
  BiLogoYoutube,
  BiEnvelope,
} from "react-icons/bi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="space-y-4 pl-10">
          <div className="relative inline-block">
            <Image
              src="/assets/kolkit-logo.png"
              alt="Kolkit"
              width={130}
              height={80}
            />
            <span className="absolute -bottom-1 right-0 text-white text-[10px]">
              by Komplace{" "}
            </span>
          </div>

          <div className="pt-10 space-y-6 text-[16px] text-medium text-[#A1A1A1]">
            <div className="flex items-start gap-4">
              <BiMap className="text-white w-7 h-7 mt-0.5" />
              <p className="text-[16px] text-medium text-[#A1A1A1]">
                Head Office Komerce
                <br />
                Purbalingga, Jawa Tengah
              </p>
            </div>

            <div className="flex items-center gap-3">
              <BiLogoWhatsapp className="text-white w-7 h-7 mt-0.5" />
              <p className="text-[16px] text-medium text-[#A1A1A1]">
                +62 812 2915 4432
              </p>
            </div>

            <div className="flex items-center gap-3">
              <BiEnvelope className="text-white w-7 h-7 mt-0.5" />
              <p className="text-[16px] text-medium text-[#A1A1A1]">
                admin@komplace.id
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="pl-10">
          <h3 className="text-[22px] font-medium mb-4">Layanan</h3>
          <ul className="space-y-2 text-[16px] text-medium text-[#FAFAFA]">
            <li>KompLace</li>
            <li>Kontin</li>
            <li>Komship</li>
            <li>Kompack</li>
            <li>Komclass</li>
            <li>Komcards</li>
            <li>Komform</li>
            <li>Komchat</li>
            <li>Komads</li>
            <li>Kombrands</li>
            <li>RajaOngkir</li>
            <li>Pendamping UMKM</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-[22px] font-medium mb-4">
            Cari tau berita terbaru
          </h3>
          <div className="flex gap-3 mb-6">
            <BiLogoInstagram className="w-8 h-8 text-white bg-[#383D38] rounded-full p-1" />
            <BiLogoTelegram className="w-8 h-8 text-white bg-[#383D38] rounded-full p-1" />
            <BiLogoFacebook className="w-8 h-8 text-white bg-[#383D38] rounded-full p-1" />
            <BiLogoTiktok className="w-8 h-8 text-white bg-[#383D38] rounded-full p-1" />
            <BiLogoYoutube className="w-8 h-8 text-white bg-[#383D38] rounded-full p-1" />
            <BiLogoLinkedin className="w-8 h-8 text-white bg-[#383D38] rounded-full p-1" />
          </div>

          <div className="flex flex-col md:flex-row gap-2 text-[16px] text-medium text-[#A1A1A1]">
            <a href="#" className="hover:text-white underline">
              Terms of Use Komplace
            </a>
            <a href="#" className="hover:text-white underline md:ml-4">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-end px-8 text-[16px] text-medium text-[#FFFFFF] mt-10 border-t border-[#1a1a1a] pt-6">
        Copyright © 2025 Komerce. All Rights Reserved
      </div>
    </footer>
  );
}
