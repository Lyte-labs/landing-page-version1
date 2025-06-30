'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Zap, Layers, Bike, Settings } from 'lucide-react'

export default function LytePackFeaturesSection() {
  return (
    <section id="feature" className="bg-black text-white pb-10 px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
            LytePack Features & Benefits
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Engineered for power, reliability, and total freedom.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            {
              title: 'Fast Charging',
              description: 'Recharge in under 3 hours from solar or wall.',
              image: '/LytePack_plug_Clean.avif',
              icon: <Zap size={32} />,
            },
            {
              title: 'Massive Capacity',
              description: '1000Wh output for lights, fan, TV, laptops.',
              image: '/home_with_lytepack.avif',
              icon: <Layers size={32} />,
            },
            {
              title: 'EVU E-Bike Integration',
              description: 'Detachable design powers your EVU electric bike.',
              image: '/Battery Integration.jpg',
              icon: <Bike size={32} />,
            },
            {
              title: 'Smart Power Management',
              description: 'LED status, battery protection, USB ports.',
              image: '/workstation.jpg',
              icon: <Settings size={32} />,
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-xl p-6 border border-gray-700 hover:border-amber-400 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full md:w-1/2 h-64 rounded-lg overflow-hidden">
               <Image
  src={feature.image}
  alt={feature.title}
  fill
  sizes="(min-width: 768px) 50vw, 100vw"
  className="object-cover"
/>

              </div>
              <div className="md:w-1/2 space-y-3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start text-amber-400">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
