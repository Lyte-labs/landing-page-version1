"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  images: {
    src: string;
    alt?: string;
    focalPoint?: string;
  }[];
  overlayColor?: string;
  children: React.ReactNode;
  yPercent?: number;
  interval?: number;
}

export default function GsapParallaxSliderSection({
  images,
  overlayColor = "rgba(15,23,42,0.5)",
  children,
  yPercent = -20,
  interval = 5000,
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // GSAP Parallax
  useEffect(() => {
    if (!sectionRef.current) return;
    const layer =
      sectionRef.current.querySelector<HTMLDivElement>(".slider-layer");

    const ctx = gsap.context(() => {
      gsap.to(layer, {
        yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [yPercent]);

  // Auto Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidde h-full w-full bg-black"
    >
      {/* Slider Background */}
      <div className="absolute inset-0 slider-layer">
        {images.map((img, index) => (
          <AnimatePresence key={index}>
            {index === currentIndex && (
              <motion.div
                key={img.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                {/* Optional blurred backdrop */}
                {/* <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover blur-lg opacity-30"
                  aria-hidden
                /> */}

                {/* Main focal image */}
                <Image
                  src={img.src}
                  alt={img.alt || ""}
                  fill
                  className="object-contai object-cover object-center w-full h-full"
                  priority
                />

                {/* Color Overlay */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: overlayColor }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 mx-auto max-w-screen- py-12 sm:py-20 md:py-32 lg:py-48">
          {children}
        </div>
      </div>
    </section>
  );
}
