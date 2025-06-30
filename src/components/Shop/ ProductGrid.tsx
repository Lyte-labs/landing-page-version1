// components/Shop/ProductGrid.tsx
'use client'

import { LazyMotion, domAnimation } from 'framer-motion'
import ProductCard from './ ProductCard'


const products = [
  {
    image: '/battery.png',
    name: 'LytePack',
    price: '₦350 000',
    specs: ['1000 Wh', '5 kg', 'Fast-Charge'],
    link: ''
  },
  {
    image: '/electric_bike.jpg',
    name: 'EVU E-Bike',
    price: '₦300 000',
    specs: ['50–70 km range', '250 W motor', '18 kg'],
    link: ''
  },
  {
    image: '/Ecosystem Image.jpg',
    name: 'Bundle: Battery + Bike',
    price: '₦620 000 (–₦10 000)',
    specs: ['LytePack + EVU', 'Best Value', 'Save ₦10 000'],
    link: '',
    bundle: true
  }
]


export default function ProductGrid() {
  return (
    <section className="py-20 px-4 bg-white">
      <LazyMotion features={domAnimation}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => <ProductCard key={i} {...p} />)}
        </div>
      </LazyMotion>
    </section>
  )
}

