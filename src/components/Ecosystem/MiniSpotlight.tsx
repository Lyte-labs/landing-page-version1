'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../Button'

interface MiniSpotlightProps {
  image: string
  title: string
  stats: string
  blurb: string
  link: string
}

export default function MiniSpotlight({
  image, title, stats, blurb, link
}: MiniSpotlightProps) {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2 h-80"
        >
          <Image src={image} alt={title} fill className="object-cover rounded-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-4"
        >
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-accent font-semibold">{stats}</p>
          <p className="text-gray-300">{blurb}</p>
          <Button href={link}>View Details</Button>
        </motion.div>
      </div>
    </section>
  )
}
