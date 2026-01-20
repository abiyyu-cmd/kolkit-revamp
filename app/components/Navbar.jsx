"use client";
import { useState } from "react";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A] backdrop-blur-md border-b border-white/10">
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col items-end">
          <Image
            src="/assets/kolkit-logo.png"
            alt="Kolkit"
            width={100}
            height={80}
            className="h-auto w-[100px]"
          />
          <p className="text-white text-[10px]">by Komplace</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white text-[16px] font-bold">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Faq</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-[16px] font-bold text-white">
            Masuk
          </button>
          <HoverBorderGradient
            radius="rounded-full"
            className="hidden md:block px-10 py-1 text-[18px] rounded-full text-white cursor-pointer"
          >
            Daftar
          </HoverBorderGradient>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-100 w-full h-screen bg-[#0A0A0A] text-white p-6 border-t border-white/10 animate-slideDown">
          <ul className="flex flex-col gap-10 text-lg">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Faq</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="flex flex-col gap-6">
            <button className="mt-10 w-60 px-8 py-3 text-[18px] border border-[#A1A1A1] rounded-full text-white hover:bg-white/10 transition">
              Daftar
            </button>
            <button className="w-60 text-[16px] text-white">Masuk</button>
          </div>
        </div>
      )}
    </nav>
  );
}
