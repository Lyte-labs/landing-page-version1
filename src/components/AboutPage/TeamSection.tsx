'use client'

import { domAnimation, LazyMotion, motion } from 'framer-motion'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  
  ctaHref?: string
}

interface TeamSectionProps {
  members: TeamMember[]
  hiringCTA?: { text: string; href: string }
  title?: string
}

export default function TeamSection({ members, title }: TeamSectionProps) {
  return (
      <LazyMotion features={domAnimation}>
    <section className="bg-white py-8 px-4 text-gray-900">
      <h2 className="font-bold text-center mb-5">{title}</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {members.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="rounded-lg shadow-lg overflow-hidden bg-gray-50 hover:shadow-xl transition"
          >
            <Image src={m.image} alt={m.name} width={200} height={200} className="object-cover w-full h-56" />
            <div className="p-4 space-y-2 bg-gray-200 w-full h-full">
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="text-accent font-medium">{m.role}</p>
              <i className="text-gray-700">{m.bio}</i>
            </div>
          </motion.div>
        ))}
        {/* {hiringCTA && (
        <motion.a
          href={hiringCTA.href}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: members.length * 0.2 }}
          className="flex flex-col items-center justify-center border-2 border-dashed border-accent rounded-lg p-8 text-center text-accent hover:bg-accent/10 transition"
        >
          <h3 className="text-xl font-bold mb-2">{hiringCTA.text}</h3>
          <p>Be part of the revolution →</p>
        </motion.a>
        )} */}
      </div>
    </section>
    </LazyMotion>
  )
}
