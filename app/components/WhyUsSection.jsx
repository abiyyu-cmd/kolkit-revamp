"use client";
import React from "react";
import Image from "next/image";

export default function WhyKolkitSection() {
  const topFeatures = [
    {
      title: "Dashboard Terintegrasi",
      desc: `Satu tempat untuk semua kebutuhan outreach dan analitik KOL.
Mulai dari mencari ribuan KOL yang relevan, mengirim pesan massal via WhatsApp, menjangkau platform seperti Shopee & TikTok, hingga menganalisis performa tiap campaign semuanya bisa kamu lakukan dari satu dashboard tanpa perlu pindah-pindah tools. Dengan tampilan yang intuitif dan alur kerja yang efisien, kamu bisa menghemat waktu, meningkatkan akurasi, dan fokus ke strategi, bukan teknis.`,
      image: "/assets/kolkit.png",
    },
    {
      title: "KOL Finder & Filter",
      desc: `Temukan KOL yang tepat dalam hitungan detik. Cari influencer berdasarkan berbagai parameter penting seperti jumlah follower, estimasi GMV (Gross Merchandise Value), niche/kategori konten, dan platform mulai dari TikTok Shop, Shopee Affiliate, hingga creator khusus di bidang tertentu. Fitur ini dirancang agar kamu bisa menyaring ribuan profil secara cepat dan tepat sasaran.  `,
      image: "/assets/cari-kol.png",
    },
  ];

  const bottomFeatures = [
    {
      title: "Kolaborasi Tertarget",
      desc: `Bangun kerja sama dengan KOL yang bener-bener relevan buat produkmu. Dengan fitur Kolaborasi Tertarget, kamu bisa langsung connect ke influencer yang punya audiens sesuai niche, minat, dan kategori produk. Gak ada lagi outreach ke KOL random yang ujung-ujungnya buang waktu dan biaya. Semua kolaborasi jadi lebih efektif, tepat sasaran, dan berpotensi tinggi ngasih hasil nyata.  `,
      image: "/assets/kolkit4.png",
    },
    {
      title: "Auto Outreach",
      desc: `Jangkau ribuan KOL hanya dalam sekali klik.Gunakan fitur DM atau WhatsApp blast yang sudah dibekali smart templating dan teknologi simulasi percakapan manusia. Hasilnya? Pesanmu tetap terasa personal, tidak terdeteksi sebagai spam, dan peluang dibaca jadi jauh lebih tinggi. Cocok untuk campaign besar yang butuh kecepatan dan kehangatan dalam komunikasi.`,
      image: "/assets/automasi.png",
    },
    {
      title: "Performance Analytics",
      desc: `Dengan fitur ini, kamu bisa melihat data historis dari setiap creator berapa besar GMV yang pernah mereka hasilkan, seberapa tinggi engagement rate mereka, dan performa konten sebelumnya. Fungsinya? Supaya kamu bisa memilih KOL berdasarkan data, bukan feeling. Semua itu bisa kamu telusuri langsung dari dashboard. Jadi, kamu gak cuma asal pilih creator yang viral tapi benar-benar yang terbukti perform, relevan, dan cocok buat tujuan brand kamu.`,
      image: "/assets/performa.png",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] text-white pt-26">
      <div className=" mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-12 px-9">
          {/* Kiri */}
          <div className="md:w-1/2">
            <h2 className="text-[40px] lg:text-[52px] font-semibold leading-tight">
              Kenapa KOLKIT?
            </h2>
            <p className="text-[#A1A1A1] text-[22px] mt-3">
              Influencer marketing seharusnya gak bikin burnout.
            </p>

            <svg
              className="absolute hidden md:block top-[1400px] left-80"
              width="350"
              height="120"
              viewBox="0 0 350 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Garis lengkung */}
              <path
                d="M0 60 C120 100, 240 20, 350 60"
                stroke="#A1A1A1"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
              />
              {/* Kepala panah */}
              <path
                d="M350 60 L340 55 M350 60 L340 65"
                stroke="#A1A1A1"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Kanan */}
          <div className="md:w-1/2 lg:pl-6">
            <p className="text-[#A1A1A1] text-[22px] leading-tight">
              Saat semuanya dikejar cepat, lo gak bisa lagi ngurusin outreach,
              tracking, dan follow-up satu-satu. KOLKIT bantu lo dari riset KOL,
              eksekusi pesan, hingga pantau performa semua di satu tempat.
            </p>
            <p className="text-[#A1A1A1] text-[22px] leading-tight mt-4">
              Tanpa drama. Tanpa nyasar. Tanpa spam. KOLKIT menyatukan semua
              kebutuhan kamu dalam satu dashboard powerful!
            </p>
          </div>
        </div>

        {/* Top Row (2 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {topFeatures.map((item, index) => (
            <div
              key={index}
              className="border border-[#2B2B2B] px-8 bg-[#0A0A0A] hover:bg-[#151515] transition"
            >
              <div className="pt-10">
                <h3 className="text-[28px] font-semibold mb-2">{item.title}</h3>
                <p className="text-[#A1A1A1] font-medium text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Image */}
              {item.image && (
                <div className="w-full h-auto rounded-lg overflow-hidden mt-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={450}
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Row (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {bottomFeatures.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border border-[#2B2B2B] px-6 pt-14 pb-0 bg-[#0A0A0A] hover:bg-[#151515] transition"
            >
              <h3 className="text-[28px] font-semibold mb-2">{item.title}</h3>
              <p className="text-[#A1A1A1] font-medium text-[12px]">
                {item.desc}
              </p>

              {/* Image */}
              {item.image && (
                <div className="w-full h-auto rounded-lg overflow-hidden mt-8">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={450}
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
