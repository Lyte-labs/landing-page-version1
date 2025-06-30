// components/ProductStepCard.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface ProductStepCardProps {
  icon: React.ReactNode
  image: string
  title: string
  description: string
}

export default function ProductStepCard({
  icon,
  image,
  title,
  description,
}: ProductStepCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-4 p-4 rounded-lg bg-white/10 backdrop-blur-lg shadow-md border border-white/20 hover:shadow-lg transition"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="text-accent">{icon}</div>
      <div className="relative w-full h-56 sm:h-64 md:h-72 rounded overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}
