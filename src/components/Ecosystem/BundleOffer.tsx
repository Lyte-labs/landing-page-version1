'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../Button'

export default function BundleOffer() {
  return (
    <section className="bg-accent text-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-64 w-full mx-auto"
        >
          <Image src="/LytePack_Bike.jpg" alt="LytePack + EVU Bundle" fill className="object-cover rounded-lg" />
        </motion.div>
        <h2 className="text-4xl font-bold">LytePack + EVU Bundle</h2>
        <p className="text-lg">₦620 000 (₦630 000 value—save ₦10 000)</p>
        <Button href="/shop/bundle">Add Bundle to Cart</Button>
      </div>
    </section>
  )
}
