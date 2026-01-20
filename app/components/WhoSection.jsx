"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { projects } from "../data";

export default function WhoSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section ref={container} className="relative bg-[#0A0A0A]">
      <div className="pt-24 text-center">
        <h2 className="text-4xl md:text-[42px] font-semibold text-white mb-10">
          Siapa yang Cocok Pakai Kolkit?
        </h2>
      </div>

      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}

const Card = ({
  i,
  title,
  description,
  link,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.8, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: ["#2B2B2B"],
          scale,
          top: `calc(-1vh + ${i * 20}px)`,
        }}
        className="flex flex-col relative h-[500px] w-[90%] md:w-[1000px] rounded-3xl p-10 transform-origin-top overflow-hidden shadow-lg"
      >
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[50%] flex flex-col justify-center">
            <h2 className=" text-2xl md:text-3xl font-semibold text-white mb-6">
              {title}
            </h2>
            <p className="text-base md:text-lg text-medium mb-4 text-[#A1A1A1] leading-tight">
              {description}
            </p>
            <span className="flex items-center gap-2 text-sm underline">
              <a href={link} target="_blank" rel="noopener noreferrer">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-full md:w-[50%] h-[300px] md:h-full rounded-2xl overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                src="/assets/image.png"
                alt={title}
                width={420}
                height={280}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
