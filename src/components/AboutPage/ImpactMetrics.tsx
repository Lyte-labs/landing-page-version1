'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { fadeUp } from '../animations/motionVariants'

interface Metric {
  icon: ReactNode
  value: string
  label: string
}

interface ImpactMetricsProps {
  title?: string
  metrics: Metric[]
}

export default function ImpactMetrics({ title, metrics }: ImpactMetricsProps) {
  return (
    <section className="py-10 bg-black text-white px-4">
      {title && (
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl font-bold text-center mb-12 text-accent"
        >
          {title}
        </motion.h2>
      )}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center text-center bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-accent/10 transition"
          >
            <div className="text-accent text-5xl mb-4">{m.icon}</div>
            <h3 className="text-3xl font-bold text-accent">{m.value}</h3>
            <p className="text-gray-300 mt-2">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
