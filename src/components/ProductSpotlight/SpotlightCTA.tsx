'use client'

import { motion } from 'framer-motion'
import Button from '../Button'
import type { Variant } from '../Button'

interface SpotlightCTAProps {
  headline: string
  subhead?: string
  buttons: { label: string; href: string; variant?: Variant }[]
}

export default function SpotlightCTA({ headline, subhead, buttons }: SpotlightCTAProps) {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white text-center"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-300">
            {headline}
          </span>
        </motion.h2>

        {subhead && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto"
          >
            {subhead}
          </motion.p>
        )}

        {/* Accent Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
          style={{ transformOrigin: 'left' }}
          className="mx-auto mb-10 h-1 w-24 origin-left bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          {buttons.map((btn, idx) => (
            <Button
              key={idx}
              href={btn.href}
              variant={btn.variant || 'primary'}
              className="font-semibold px-6 py-3 rounded-lg transition"
            >
              {btn.label}
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
