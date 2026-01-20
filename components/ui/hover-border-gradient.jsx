"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1.5,
  clockwise = true,
  radius = "rounded-full",
  hoverOnly = false, // <───────── prop baru
  ...props
}) {
  const [direction, setDirection] = useState("TOP");
  const [isHover, setIsHover] = useState(false);

  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "RIGHT", "BOTTOM", "LEFT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex + 1) % directions.length
      : (currentIndex - 1 + directions.length) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: "radial-gradient(75% 181.159% at 50% 0%, #000BE2 0%, #E7E7E7 100%)",
    RIGHT:
      "radial-gradient(75% 181.159% at 100% 50%, #000BE2 0%, #E7E7E7 100%)",
    BOTTOM:
      "radial-gradient(75% 181.159% at 50% 100%, #000BE2 0%, #E7E7E7 100%)",
    LEFT: "radial-gradient(75% 181.159% at 0% 50%, #000BE2 0%, #E7E7E7 100%)",
  };

  // hanya muter otomatis kalau bukan hoverOnly
  useEffect(() => {
    if (hoverOnly) return;

    const interval = setInterval(() => {
      setDirection((prev) => rotateDirection(prev));
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [duration, clockwise, hoverOnly]);

  // muter HANYA saat hover
  useEffect(() => {
    if (!hoverOnly || !isHover) return;

    const interval = setInterval(() => {
      setDirection((prev) => rotateDirection(prev));
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [isHover, hoverOnly, duration, clockwise]);

  return (
    <Tag
      className={cn(
        "relative flex border bg-black/20 transition duration-500 dark:bg-white/20 items-center justify-center overflow-visible p-px w-fit",
        radius,
        containerClassName
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      {/* inner content */}
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-6 py-3",
          radius,
          className
        )}
      >
        {children}
      </div>

      {/* border gradient muncul saat: 
          - button (hoverOnly false)
          - card pas dihover (hoverOnly true) 
      */}
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit]"
        style={{
          opacity: hoverOnly ? (isHover ? 1 : 0) : 1, // penting ini bro
          filter: "blur(2px)",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{ background: movingMap[direction] }}
        transition={{ ease: "linear", duration: duration }}
      />

      <div className={cn("bg-black absolute z-1 inset-0.5", radius)} />
    </Tag>
  );
}
