// components/ProductSpotlight/SpotlightHero.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '../Button'


interface SpotlightHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
    backgroundImageAlt: string;
  primaryCTA: React.ComponentProps<typeof Button>;
  secondaryCTA?: React.ComponentProps<typeof Button>;
}

export default function SpotlightHero({
  title,
  subtitle,
  backgroundImage,backgroundImageAlt,
  primaryCTA,
  secondaryCTA,
}: SpotlightHeroProps) {
  return (
    <section className="relative h-[80vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          className="object-cover object-center brightness-75"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-2xl"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button {...primaryCTA} />
          {secondaryCTA && <Button {...secondaryCTA} />}
        </motion.div>
      </div>
    </section>
  )
}
