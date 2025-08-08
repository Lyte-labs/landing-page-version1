import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Sharp and snappy spring config
const defaultSpring = {
  damping: 18,
  stiffness: 1400,
  mass: 1,
};

/**
 * ScrollTiltWrapper
 * A reusable wrapper that tilts its children based on scroll position.
 * @param {React.ReactNode} children - Elements to animate.
 * @param {number} rotateAmplitude - Maximum degrees to tilt at start.
 * @param {object} springConfig - Framer spring config (damping, stiffness, mass).
 * @param {Array<string>} offset - Viewport scroll offsets ["start end", "end start"].
 */
export function ScrollTiltWrapper({
  children,
  rotateAmplitude = 16,
  springConfig = defaultSpring,
  offset = ["start 0.8", "end 0.2"],
}) {
  const ref = useRef(null);
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
  imageSrc = "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
  altText = "Tilted card image",
  captionText = "",
  width = "300px",
  height = "300px",
}) {
  return (
    <figure className="w-full h-full flex items-center justify-center">
      <ScrollTiltWrapper>
        <img
          src={imageSrc}
          alt={altText}
          className="object-cover rounded-[15px] will-change-transform"
          style={{ width, height }}
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
