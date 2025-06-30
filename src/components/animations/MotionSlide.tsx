// components/animations/MotionSlide.tsx
'use client'
import { ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface SlideProps extends MotionProps {
  children: ReactNode
  direction?: 'left' | 'right'
}

export default function MotionSlide({
  children,
  direction = 'left',
  ...motionProps
}: SlideProps) {
  const xFrom = direction === 'left' ? -100 : 100
  return (
    <motion.div
      initial={{ opacity: 0, x: xFrom }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
