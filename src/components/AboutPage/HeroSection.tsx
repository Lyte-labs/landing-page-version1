'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../Button'

interface HeroSectionProps {
  title: string
  subtitle: string
  cta: { label: string; href: string; variant?: 'primary' | 'secondary' | 'outline' }
  backgroundImage: string
  backgroundImageAlt: string
}

export default function HeroSection({
  title,
  subtitle,
  cta,
  backgroundImage,
  backgroundImageAlt,
}: HeroSectionProps) {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <Image
        src={backgroundImage}
        alt={backgroundImageAlt}
        fill
        className="object-cover object-center brightness-[0.6]"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-lg md:text-xl mb-8 max-w-2xl"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button href={cta.href}  variant="gradient" size='lg' className="px-8 py-3 text-black">
            {cta.label}
          </Button>
          
        </motion.div>
      </div>
    </section>
  )
};
