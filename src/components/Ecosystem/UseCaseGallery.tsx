'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function UseCaseGallery() {
  const cases = [
    { img: '/workstation.jpg', caption: 'Off-grid weekend' },
    { img: '/Firefly_EVU_Bike_battery.jpg', caption: 'Daily Lagos commute' },
    { img: '/Lifestyle Image.jpg', caption: 'Home office backup' },
    { img: '/home_with_lytepack.avif', caption: 'Urban adventure' },
  ]
  return (
    <section className="bg-white text-gray-900 py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">How People Use It</h2>
      <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {cases.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative h-64 overflow-hidden rounded-lg shadow hover:scale-105 transition"
          >
            <Image src={item.img} alt={item.caption} fill className="object-cover" />
            <div className="absolute bottom-0 w-full bg-black/60 text-white text-center p-2">{item.caption}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
