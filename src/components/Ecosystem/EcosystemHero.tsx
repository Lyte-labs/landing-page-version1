'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../Button'

export default function EcosystemHero() {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      <Image
        src="/ecosystem-hero.jpg"
        alt="LytePack and EVU E-Bike"
        fill
        className="object-cover object-center brightness-[0.6]"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          One Battery. Two Worlds. Infinite Freedom.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-2xl"
        >
          Meet the LytePack + EVU Ecosystem—the only power solution you need for home and commute.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/shop/lytepack">Shop LytePack</Button>
          <Button variant="outline" href="/shop/evu">Shop EVU E-Bike</Button>
          <Button variant="primary" href="/shop/bundle">Bundle & Save ₦20,000</Button>
        </motion.div>
      </div>
    </section>
  )
}
