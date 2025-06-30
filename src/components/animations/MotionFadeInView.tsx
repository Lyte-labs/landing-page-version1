// components/animations/MotionFadeInView.tsx
'use client'
import { ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface Props extends MotionProps {
  children: ReactNode
}

export default function MotionFadeInView({
  children,
  ...motionProps
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
