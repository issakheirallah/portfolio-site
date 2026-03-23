"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/profile/issa-hero.png",
  "/images/profile/issa-hero-2.png",
  "/images/profile/issa-hero-3.png",
] as const;

export function HeroBackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={heroImages[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentIndex]}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover object-right opacity-100"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/50 to-stone-950/15" />
    </div>
  );
}
