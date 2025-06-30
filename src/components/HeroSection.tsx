"use client";
import { motion } from "framer-motion";
import GsapParallaxSliderSection from "./animations/GsapParallaxSliderSection";
import Button from "./Button";

export default function HeroSection() {
  return (
    <GsapParallaxSliderSection
      images={[
        { src: "/home_with_lytepack.avif", alt: "LytePack Bike" },
        { src: "/LytePack_Bike.jpg", alt: "LytePack Bike" },
        { src: "/FtZI4qS6EHgNVG9QTzg5R6NCbo4.webp", alt: "Battery" },
        { src: "/electric_bike.jpg", alt: "Electric Bike" },
        { src: "/riders.jpg", alt: "Riders" },
      ]}
      overlayColor="rgba(0,0,0,0.5)"
      yPercent={-20}
      interval={3000}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white"
      >
        One Battery. Power Your Life & Your Ride.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
         className="mb-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-md md:max-w-2xl mx-auto"
  >
        LytePack powers your home’s essentials and your daily commute with our
        EVU e-bike.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-6"
      >
        <Button
          variant="outline"
          href="/shop"
          className="
      inline-flex justify-center items-center px-4 py-2 sm:px-6 sm:py-3
 rounded-lg border border-gray-300
      bg-white text-gray-900 font-semibold shadow-sm
      hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-accent/30
      transition-colors duration-300
    "
        >
          Explore LytePack
        </Button>

        <Button
          href="/shop"
          className="
      inline-flex justify-center items-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-white
      text-white font-semibold
      focus:outline-none focus:ring-4 focus:ring-white/50
      transition-colors duration-300
    "
        >
          Explore EVU E-Bike
        </Button>
      </motion.div>
    </GsapParallaxSliderSection>
  );
}
