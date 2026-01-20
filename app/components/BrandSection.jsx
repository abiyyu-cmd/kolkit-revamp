"use client";
import LogoLoop from "/components/LogoLoop";

export default function BrandSection() {
  const brandLogos = [
    { src: "/assets/brand1.png", alt: "Brand 1" },
    { src: "/assets/brand2.png", alt: "Brand 2" },
    { src: "/assets/brand3.png", alt: "Brand 3" },
    { src: "/assets/brand4.png", alt: "Brand 4" },
    { src: "/assets/brand5.png", alt: "Brand 5" },
    { src: "/assets/brand6.png", alt: "Brand 6" },
    { src: "/assets/brand7.png", alt: "Brand 7" },
    { src: "/assets/brand8.png", alt: "Brand 8" },
    { src: "/assets/brand9.png", alt: "Brand 9" },
    { src: "/assets/brand10.png", alt: "Brand 10" },
    { src: "/assets/brand11.png", alt: "Brand 11" },
    { src: "/assets/brand12.png", alt: "Brand 12" },
    { src: "/assets/brand13.png", alt: "Brand 13" },
    { src: "/assets/brand14.png", alt: "Brand 14" },
  ];

  const firstRow = brandLogos.slice(0, 7);
  const secondRow = brandLogos.slice(7, 14);

  return (
    <section className="py-16 bg-[#0A0A0A] text-white text-center">
      <h2 className="text-4xl lg:text-[42px] font-semibold mb-10">
        Dipercayai oleh brand ternama
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <LogoLoop
          logos={firstRow}
          speed={120}
          direction="left"
          logoHeight={100}
          gap={10}
          pauseOnHover={false}
          fadeOut={true}
          fadeOutColor="#000000"
          scaleOnHover={true}
          ariaLabel="Brand partners row 1"
        />

        <LogoLoop
          logos={secondRow}
          speed={120}
          direction="left"
          logoHeight={100}
          gap={10}
          pauseOnHover={false}
          fadeOut={true}
          fadeOutColor="#000000"
          scaleOnHover={true}
          ariaLabel="Brand partners row 2"
        />
      </div>
    </section>
  );
}
