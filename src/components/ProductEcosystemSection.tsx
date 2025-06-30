// components/ProductEcosystemSection.tsx
'use client'

import { motion } from 'framer-motion'
// import { BatteryCharging, Home, Bike } from 'lucide-react'
// import ProductStepCard from './ProductStepCard'
import Button from './Button'


export default function ProductEcosystemSection() {
  return (
   <section className="relative py-20 bg-black text-white" id="ecosystem">
  <div className="max-w-6xl mx-auto px-4">
    <motion.div
      className="text-center mb-12 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        One Battery. Endless Possibilities.
      </h2>
      <p className="text-lg md:text-xl text-gray-300">
        See how real people use LytePack to power their lives.
      </p>
    </motion.div>

    <div className="grid gap-12 md:grid-cols-3">
      {[
        {
          name: "Chinedu, Shop Owner",
          image: "/market_woman.jpeg",
          story: "Uses LytePack to keep lights on and sell during blackouts."
        },
        {
          name: "Mary, Rider",
          image: "/Dispatch Rider.jpg",
          story: "Charges once, delivers all day with zero fuel costs."
        },
        {
          name: "Kunle, Student",
          image: "/workstation.jpg",
          story: "Studies and charges devices even during outages."
        }
      ].map((user, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          className="bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <img src={user.image} alt={user.name} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{user.name}</h3>
            <p className="text-gray-300">{user.story}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Button
        href="/shop"
        variant="primary"
        className="px-8 py-3 text-lg"
      >
        Shop the Ecosystem
      </Button>
    </motion.div>
  </div>
</section>

  )
}
