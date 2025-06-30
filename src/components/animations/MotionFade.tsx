// components/animations/MotionFade.tsx
'use client'
import { ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'

interface FadeProps extends MotionProps {
  children: ReactNode
}

export default function MotionFade({
  children,
  ...motionProps
}: FadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
