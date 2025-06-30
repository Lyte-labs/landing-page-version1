'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt?: string
  overlayText?: string
}

interface LifestyleGalleryProps {
  title?: string
  images: GalleryImage[]
}

export default function LifestyleGallery({ title, images }: LifestyleGalleryProps) {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            {title}
          </motion.h2>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src={img.src}
                alt={img.alt || ''}
                width={600}
                height={400}
                className="object-cover w-full h-64 md:h-80 lg:h-96 transition-transform duration-500 group-hover:scale-105"
              />

              {img.overlayText && (
                <div
                  className={`
                    absolute inset-0 bg-black/50 flex items-center justify-center
                    opacity-100 md:opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  `}
                >
                  <p className="text-lg font-semibold px-4 text-center">
                    {img.overlayText}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
