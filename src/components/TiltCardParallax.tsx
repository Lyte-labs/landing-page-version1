// app/components/TiltCardParallax.tsx
"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const TiltCardParallax = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  // Scroll progress between section start and end
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background image
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const springYImage = useSpring(yImage, { stiffness: 200, damping: 40 });

  // Tilt card backward (X and Y axis for diagonal tilt)
  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-8, 0]);

  const springRotateX = useSpring(rotateX, { stiffness: 600, damping: 80 });
  const springRotateY = useSpring(rotateY, { stiffness: 600, damping: 80 });

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] sm:h-[80vh] lg:h-[100vh] w-full overflow-hidden flex items-center justify-center text-white px-4 sm:px-6 lg:px-8"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: springYImage }}
      >
        <Image
          src="/bike_tire.avif" 
          alt="Tire Background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Tilted Card */}
      <motion.div
        ref={cardRef}
        className="z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6 lg:p-8 rounded-xl text-center backdrop-blur-xl bg-white/15 shadow-lg"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >
         <div className="sm:hidden pr-4">
          <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            <i>
               Limited Time Offer 15% Off
          </i>
          </h2>
        </div>
        <div className="hidden sm:block">
         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
          <i>
               Limited Time Offer 15% Off
          </i>
       
        </h1>
        </div>
        <p className="text-sm sm:text-base md:text-base lg:text-base mb-4 sm:mb-5 leading-relaxed">
          Experience the freedom of smooth rides
          <span className=""> with Lytelabs ev-bikes at a special discounted rate.</span>
          <span className="hidden sm:inline">with Lytlabs e-bikes at a special <br /> discounted rate.</span>
        </p>
        <button className="bg-white text-neutral-500 font-medium py-2 sm:py-2 lg:py-2 px-6 sm:px-8 lg:px-10 rounded-md shadow hover:bg-neutral-100 text-sm sm:text-base transition-colors">
          Ride Now
        </button>
      </motion.div>
    </section>
  );
};

export default TiltCardParallax;