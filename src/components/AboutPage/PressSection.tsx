'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '../animations/motionVariants'


interface PressSectionProps {
  logos: string[]
  quote: string
  source: string
}

export default function PressSection({ logos, quote, source }: PressSectionProps) {
  return (
    <section className="py-10 bg-light text-gray-900 px-4">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-3xl font-bold text-center mb-6"
      >
        As Featured In
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8 mb-5">
        {logos.map((logo, idx) => (
          <motion.img
            key={idx}
            src={logo}
            alt="Press Logo"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="h-12 grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
      <motion.blockquote
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-3xl mx-auto text-center italic text-xl border-l-4 border-accent pl-4"
      >
        “{quote}”
        <footer className="mt-4 text-accent font-semibold">— {source}</footer>
      </motion.blockquote>
    </section>
  )
}
