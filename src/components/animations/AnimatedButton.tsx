// components/animations/AnimatedButton.tsx
'use client'
// import { ReactNode, ButtonHTMLAttributes } from 'react'
import { motion, MotionProps } from 'framer-motion'

// interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement>, MotionProps {
//   children: ReactNode
// }
type BtnProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart"> & MotionProps;

export default function AnimatedButton({
  children,
  ...props
}: BtnProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(255,255,150,0.8)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
      {...props}
      className={`px-4 py-2 rounded bg-primary text-white ${props.className || ''}`}
    >
      {children}
    </motion.button>
  )
}
