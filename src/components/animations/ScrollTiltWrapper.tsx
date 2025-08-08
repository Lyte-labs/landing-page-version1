import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

// Sharp and snappy spring config
const defaultSpring = {
  damping: 18,
  stiffness: 1400,
  mass: 1,
};

// Define proper TypeScript interfaces
interface ScrollTiltWrapperProps {
  children: React.ReactNode;
  rotateAmplitude?: number;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
  };
  offset?: ["start start" | "start center" | "start end", "end start" | "end center" | "end end"];
}

interface TiltedCardExampleProps {
  imageSrc?: string;
  altText?: string;
  captionText?: string;
  width?: number;
  height?: number;
}

/**
 * ScrollTiltWrapper
 * A reusable wrapper that tilts its children based on scroll position.
 * @param {React.ReactNode} children - Elements to animate.
 * @param {number} rotateAmplitude - Maximum degrees to tilt at start.
 * @param {object} springConfig - Framer spring config (damping, stiffness, mass).
 * @param {Array} offset - Viewport scroll offsets.
 */
export function ScrollTiltWrapper({
  children,
  rotateAmplitude = 16,
  springConfig = defaultSpring,
  offset = ["start center", "end center"],
}: ScrollTiltWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });

  // Trigger tilt around 20% to 80% of scroll visibility range
  const rawRotateX = useTransform(scrollYProgress, [0.2, 0.8], [rotateAmplitude, 0]);
  const rawRotateY = useTransform(scrollYProgress, [0.2, 0.8], [-rotateAmplitude, 0]);

  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);

  return (
    <motion.div
      ref={ref}
      className="relative [transform-style:preserve-3d]"
      style={{ rotateX, rotateY }}
    >
      {children}
    </motion.div>
  );
}

// Example: Wrapping an image card
export default function TiltedCardExample({
  imageSrc = "",
  altText = "Tilted card image",
  captionText = "",
  width = 300,
  height = 300,
}: TiltedCardExampleProps) {
  return (
    <figure className="w-full h-full flex items-center justify-center">
      <ScrollTiltWrapper>
        <Image
          src={imageSrc}
          alt={altText}
          width={width}
          height={height}
          className="object-cover rounded-[15px] will-change-transform"
          priority={false}
        />
      </ScrollTiltWrapper>
      {captionText && (
        <figcaption className="mt-2 text-sm text-gray-600">
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}