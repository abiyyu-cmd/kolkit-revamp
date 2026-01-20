"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useState, useRef, useEffect } from "react";
import { FiPlus, FiX } from "react-icons/fi";

export default function Faq() {
  const [open, setOpen] = useState({});

  const toggle = (id) => {
    setOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData = {
    left: [
      {
        id: "faq-1",
        question: "Apa itu KOLKIT ?",
        answer:
          "KOLKIT adalah platform otomatisasi outreach yang membantu brand dan seller menemukan, menghubungi, dan bekerja sama dengan kreator TikTok Shop, Shopee affiliator, semua dalam satu tempat.",
      },
      {
        id: "faq-2",
        question: "Bagaimana cara kerja KOLKIT?",
        answer:
          "KOLKIT menyediakan database terkurasi, fitur personalisasi, dan pengiriman pesan otomatis untuk mempermudah outreach. Kamu bisa menemukan partner potensial dan mengirim penawaran personal ke TikTok Shop dan Shopee.",
      },
      {
        id: "faq-3",
        question: "Bisakah pesan outreach-nya dipersonalisasi?",
        answer:
          "Bisa banget, KOLKIT menyediakan fitur personalisasi agar pesanmu lebih relevan, menarik, dan tidak terkesan generik atau spam.",
      },
    ],
    right: [
      {
        id: "faq-4",
        question: "Siapa yang cocok pakai KOLKIT?",
        answer:
          "KOLKIT dirancang untuk brand, agency, dan seller yang ingin mengembangkan program affiliate atau jaringan reseller dengan cepat dan efektif.",
      },
      {
        id: "faq-5",
        question: "Apakah KOLKIT aman digunakan?",
        answer:
          "KOLKIT mendukung outreach yang etis dan berbasis izin. Pastikan selalu mengikuti kebijakan TikTok, Shopee, dan WhatsApp agar tetap aman.",
      },
      {
        id: "faq-6",
        question: "Sistem Minimum Untuk Menjalankan KOLKIT?",
        answer:
          "KOLKIT bisa dijalankan di hampir semua perangkat modern dengan koneksi internet stabil. Tidak butuh spesifikasi tinggi.",
      },
    ],
  };

  const FaqItem = ({ id, question, answer }) => {
    const [height, setHeight] = useState("0px");
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const handleToggle = () => {
      setIsOpen(!isOpen);
      const content = contentRef.current;
      if (content) {
        setHeight(!isOpen ? `${content.scrollHeight}px` : "0px");
      }
    };

    useEffect(() => {
      const content = contentRef.current;
      if (isOpen && content) {
        setHeight(`${content.scrollHeight}px`);
      }
    }, [isOpen]);

    return (
      <div className="w-full rounded-lg bg-[#262626] hover:bg-[#2f2f2f] transition-colors duration-300 cursor-pointer">
        <div
          className="flex items-center justify-between p-6"
          onClick={handleToggle}
        >
          <h2 className="text-white font-semibold text-[18px] md:text-xl lg:text-[24px] leading-tight whitespace-nowrap">
            {question}
          </h2>
          <div className="text-white text-2xl transition-transform duration-300">
            {isOpen ? <FiX /> : <FiPlus />}
          </div>
        </div>

        {/* animasi smooth pakai inline style */}
        <div
          ref={contentRef}
          style={{
            maxHeight: height,
            overflow: "hidden",
            opacity: isOpen ? 1 : 0,
            transition:
              "max-height 0.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.4s ease",
          }}
          className="px-5"
        >
          <p className="text-[#A1A1A1] text-[18px] md:text-2xl  leading-relaxed pb-4">
            {answer}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="pt-16 pb-24 bg-linear-to-b from-[#0b0b0b] via-[#111111] to-[#02042c] text-white">
      <div className="flex flex-col justify-center items-center px-6 md:px-20 lg:px-32">
        <h2 className="lg:text-[42px] md:text-[36px] text-[32px] text-center font-semibold mb-5">
          Frequently Asked Question
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 pt-8 px-6 md:px-20 lg:px-32">
        {/* Kolom kiri */}
        <div className="w-full lg:w-1/2 space-y-6">
          {faqData.left.map((f) => (
            <FaqItem key={f.id} {...f} />
          ))}
        </div>

        {/* Kolom kanan */}
        <div className="w-full lg:w-1/2 space-y-6">
          {faqData.right.map((f) => (
            <FaqItem key={f.id} {...f} />
          ))}
        </div>
      </div>

      {/* CTA bawah */}
      <div className="flex flex-col justify-center items-center mt-28 px-4 text-center">
        <h3 className="text-[26px] md:text-[36px] font-semibold mb-3">
          Level Up Your Affiliate Strategy Today!
        </h3>
        <p className="text-[#A1A1A1] mb-10 text-[28px]">
          Unlock massive growth with TikTok, Shopee, and WhatsApp outreach
          automation.
        </p>

        <HoverBorderGradient className="text-[18px] font-semibold bg-[#2B2B2B] px-12 py-3 rounded-full cursor-pointer">
          Miliki Sekarang
        </HoverBorderGradient>
      </div>
    </section>
  );
}
