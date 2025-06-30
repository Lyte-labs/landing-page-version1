'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ValueItem {
  icon: ReactNode
  title: string
  description: string
}

interface ValuesGridProps {
  title?: string
  values: ValueItem[]
}

export default function ValuesGrid({ title = "What Drives Us", values }: ValuesGridProps) {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-7 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-accent">
        {title}
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((v, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-accent text-white text-3xl shadow-inner">
              {v.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
            <p className="text-gray-300">{v.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
