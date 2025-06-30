'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface DetailedFeatureSection {
  image: string;
  title: string;
  description: string;
}

interface DetailedFeaturesProps {
  sections: DetailedFeatureSection[];
}

export default function DetailedFeatures({ sections }: DetailedFeaturesProps) {
  return (
    <section className="bg-black text-white py-16 px-4 space-y-16">
      {sections.map((s, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${idx % 2 ? 'md:flex-row-reverse' : ''} items-center gap-8 max-w-6xl mx-auto`}
        >
          <motion.div
            className="relative w-full md:w-1/2 h-64 md:h-96 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: idx % 2 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image src={s.image} alt={s.title} fill className="object-cover" />
          </motion.div>
          <motion.div
            className="md:w-1/2 space-y-4 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">{s.title}</h3>
            <p className="text-gray-300">{s.description}</p>
          </motion.div>
        </div>
      ))}
    </section>
  )
}
