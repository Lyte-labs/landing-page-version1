'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Block {
  icon: ReactNode
  title: string
  text: string
}

interface MissionVisionProps {
  mission: Block
  vision: Block
}

export default function MissionVision({ mission, vision }: MissionVisionProps) {
  return (
    <section className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {[mission, vision].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="space-y-6 p-6 bg-white/10 border border-white/20 rounded-lg"
          >
            <div className="text-accent text-3xl">{item.icon}</div>
            <h3 className="text-2xl font-bold border-b-2 border-accent inline-block pb-2">{item.title}</h3>
            <p className="text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
