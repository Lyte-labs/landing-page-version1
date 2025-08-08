"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);

  // Scroll for parallax (desktop only)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
    >
      {/* Mobile Layout */}
      <div className="flex flex-col items-center justify-start pt-20 pb-0 text-center text-white sm:hidden">
      
        <motion.h2
          className="text-2xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         <i>Smarter Rides, Elevated Vibes</i>
        </motion.h2>

        <motion.h3
          className="mt-2 text-sm text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
           Power Your Journey with Innovation
        </motion.h3>

        <Button
          variant="outline"
          href="#/contact-us"
          size="sm"
          className="mt-4 mb-4 inline-flex justify-center items-center rounded-lg border border-gray-300 bg-white text-gray-900 font-light shadow-sm hover:bg-transparent hover:text-white focus:outline-none focus:ring-4 focus:ring-accent/30 transition-colors duration-300 px-4 py-2 text-xs"
        >
         Explore LyteLabs Ev-Bike
        </Button>

        <div className="w-full">
          <Image
            src="/bike_hero.avif"
            alt="LyteLabs Ev-Bike Hero"
            width={1000}
            height={600}
            className="w-full h-auto object-cover block"
            priority
            style={{ display: 'block', margin: 0, padding: 0 }}
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block relative h-screen w-full">
        {/* Parallax Image */}
        <motion.div
          className="absolute inset-0 w-full h-full z-0"
          style={{ y }}
        >
          <Image
            src="/bike_hero.avif"
            alt="LyteLabs Ev-Bike Hero"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <i>Smarter Rides, Elevated Vibes</i>
          </motion.h1>

          <motion.h3
            className="mt-4 text-lg md:text-xl text-gray-200 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Power Your Journey with Innovation
          </motion.h3>

          <Button
            variant="outline"
            href="#/contact-us"
            size="md"
            className="mt-8 inline-flex justify-center items-center rounded-lg border border-gray-300 bg-white text-gray-900 font-extralight shadow-sm hover:bg-transparent hover:text-white focus:outline-none focus:ring-4 focus:ring-accent/30 transition-colors duration-300 px-6 py-3 text-base"
          >
            Explore LyteLabs Ev-Bike
          </Button>
        </div>
      </div>
    </section>
  );
}