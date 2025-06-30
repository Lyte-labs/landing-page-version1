'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function BundleSpotlight() {
  return (
    <section className="bg-yellow-50 border-t border-b border-yellow-300 py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Why Bundle?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto"
        >
          Get both LytePack and the EVU E-Bike in one discounted bundle. Save money and power your home and your ride seamlessly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-64 mx-auto"
        >
          <Image
            src="/bundle-composite.jpg"
            alt="LytePack + EVU Bundle"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
        <Link
          href="/shop/bundle"
          className="inline-block bg-[#F5B301] hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded"
        >
          Add Bundle to Cart
        </Link>
      </div>
    </section>
  )
}
