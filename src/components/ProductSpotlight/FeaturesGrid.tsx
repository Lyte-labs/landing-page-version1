'use client'

import { motion } from 'framer-motion'

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
interface FeaturesGridProps {
  title?: string;
  features: Feature[];
}

export default function FeaturesGrid({ title, features }: FeaturesGridProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white px-4" id="features" >
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="text-accent">{f.icon}</div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-300">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
