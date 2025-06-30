'use client'

import { motion } from 'framer-motion'
// import Button from '../Button'
import { fadeUp } from '../animations/motionVariants'

// interface CTAButton {
//   label: string
//   href: string
//   variant?: 'primary' | 'secondary' | 'outline' | 'dark'
// }

interface FinalCTAProps {
  headline: string
  subhead?: string
  //buttons: CTAButton[]
}

export default function FinalCTA({ headline, subhead }: FinalCTAProps) {
  return (
    <section className="py-20 bg-accen text-whit text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/30 via-accent to-accent" />
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {headline}
        </motion.h2>
        {subhead && (
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-lg md:text-xl mb-8 text-white/90"
          >
            {subhead}
          </motion.p>
        )}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          {buttons.map((btn, idx) => (
            <Button
              key={idx}
              href={btn.href}
              variant={btn.variant || 'primary'}
            >
              {btn.label}
            </Button>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}
