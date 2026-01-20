"use client";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  const features = [
    {
      title: "Akses Fitur Komplace Platinum",
      desc: "Kelola Banyak Marketplace dalam 1 Tempat",
      link: "#",
    },
    {
      title: "Kelola hingga 2500 creator",
      desc: "Kamu bisa menyimpan, menghapus, dan mengganti kreator sesuai kebutuhan hingga 2500.",
    },
    {
      title: "Akses fitur Shopee",
      desc: "Cari dan jangkau creator aktif di Shopee",
    },
    {
      title: "Akses fitur TikTok",
      desc: "Temukan creator berdasarkan data publik TikTok",
    },
    {
      title: "Akses fitur Creator Analytic",
      desc: "Lihat profil dan statistik kreator",
    },
    {
      title: "Akses fitur WhatsApp",
      desc: "Kirim pesan ke banyak creator via WhatsApp",
    },
    {
      title: "Akses Group Informasi",
      desc: "Dapatkan update & info seputar KOLKIT",
    },
    {
      title: "Support via Member Area",
      desc: "Bantuan via memberarea dan dokumentasi lengkap",
    },
  ];

  return (
    <section className="py-16 bg-[#0A0A0A] text-white text-center">
      <div className="px-6">
        {/* Header */}
        <div className="flex flex-col items-center">
          <h2 className="text-[42px] font-semibold mb-4">
            Dapatkan KOLKIT Sekarang
          </h2>
          <p className="text-[22px] text-medium text-[#A1A1A1] mx-6 leading-tight">
            pilih durasi yang paling cocok
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-row gap-6">
            <button className="px-8 py-2 text-[12px] border border-[#A1A1A1] rounded-[6px] text-white hover:bg-white hover:text-black transition">
              Bulanan
            </button>
            <button className="px-8 py-2 text-[12px] border border-[#A1A1A1] rounded-[6px] text-white hover:bg-white hover:text-black transition">
              6 Bulan
            </button>
            <button className="px-8 py-2 text-[12px] border border-[#A1A1A1] rounded-[6px] text-white hover:bg-white hover:text-black transition">
              Tahunan
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-20 flex flex-col md:flex-row justify-center items-stretch gap-8">
          {/* Left card */}
          <div className="bg-[#1a1a1a] px-6 py-12 rounded-2xl flex flex-col md:w-[567px] shadow-lg border border-[#2b2b2b] text-left">
            <div>
              <h3 className="text-[32px] font-semibold mb-2">Enterprise</h3>
              <p className="text-[#A1A1A1] text-[18px] font-normal mb-4">
                Semua fitur premium tanpa batas inti
              </p>
              <p className="text-lg font-semibold text-[#A1A1A1] mb-8">
                <span className="text-[42px] font-semibold text-white">
                  Rp 299.000
                </span>{" "}
                / bulan
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <button className="border border-[#A1A1A1] text-[12px] py-4 rounded-md font-medium text-white hover:bg-white hover:text-black transition">
                Beli Sekarang
              </button>
              <button className="border border-[#A1A1A1] text-[12px] py-4 rounded-md font-medium text-white hover:bg-white hover:text-black transition">
                Pelajari selengkapnya
              </button>
            </div>
          </div>

          {/* Right card (auto-generate dari array) */}
          <div className="bg-[#1a1a1a] p-7 rounded-2xl flex flex-col justify-start md:w-[567px] text-left shadow-lg border border-[#2b2b2b]">
            <ul className="space-y-4">
              {features.map((item, i) => (
                <li key={i}>
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-white mt-1 w-5 h-5 shrink-0" />
                    <div>
                      <span className="font-semibold text-lg block">
                        {item.title}
                      </span>
                      <p className="text-[#A1A1A1] text-sm">{item.desc}</p>
                      {item.link && (
                        <a
                          href={item.link}
                          className="text-[#6155F5] text-[16px] underline hover:text-white"
                        >
                          Pelajari sekarang
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
