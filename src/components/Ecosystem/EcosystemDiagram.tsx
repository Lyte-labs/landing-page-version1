'use client'
import { motion } from 'framer-motion'

export default function EcosystemDiagram() {
  const steps = [
    { icon: "🔌", title: "Charge LytePack", desc: "Solar & AC compatible." },
    { icon: "🏠", title: "Power Your Home", desc: "Lights, devices, peace of mind." },
    { icon: "🚲", title: "Power Your Ride", desc: "Pure electric urban travel." },
  ]

  return (
    <section className="bg-white text-gray-900 py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 text-center">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="p-6 rounded-lg border border-gray-200 shadow hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-700">{step.desc}</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-center text-accent font-semibold">Charge. Store. Ride.</p>
    </section>
  )
}
