// components/animations/MotionStagger.tsx
'use client'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface StaggerProps {
  children: ReactNode[]  // expects an array
  staggerDelay?: number
}

export default function MotionStagger({
  children,
  staggerDelay = 0.2,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children.map((child, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 15 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
