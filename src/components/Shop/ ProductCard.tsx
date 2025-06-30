// components/Shop/ProductCard.tsx
'use client'

import { m, easeOut } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// A single, very simple fadeUp variant
const fadeUp = {
  hidden: { opacity: 0, y: 0 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.1, ease: easeOut } 
  }
}

interface ProductCardProps {
  image: string
  name: string
  price: string
  specs: string[]
  link: string
  bundle?: boolean
}

export default function ProductCard({
  image, name, price, specs, link, bundle
}: ProductCardProps) {
  return (
    // Use Tailwind’s built‐in “appear” animation instead of whileInView
    <m.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className={`
        group relative border rounded-lg
        ${bundle ? 'border-yellow-500' : 'border-gray-200'}
        bg-white overflow-hidden flex flex-col
        shadow-md hover:shadow-lg transition hover:scale-[1.02]
        will-change-transform
      `}
    >
      <div className="relative w-full h-56">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-accent font-semibold mb-2">{price}</p>
        <ul className="text-gray-700 text-sm mb-4 space-y-1">
          {specs.map((s, i) => <li key={i}>• {s}</li>)}
        </ul>
        <Link
          href={link}
          className="mt-auto inline-block text-center 
                     bg-[#F5B301] hover:bg-yellow-600 
                     text-black font-semibold py-2 rounded"
        >
          Add to Cart
        </Link>
      </div>
    </m.div>
  )
}
