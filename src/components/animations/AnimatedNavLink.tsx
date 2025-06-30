// components/animations/AnimatedNavLink.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  href: string
  label: string
  className?: string
  onClick?: () => void
}

export default function AnimatedNavLink({
  href,
  label,
  className = '',
  onClick,
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.10 }}
      whileTap={{ scale: 1.00 }}
       transition={{ type: 'spring', stiffness: 300 }}
      className={className}
    >
      <Link
        href={href}
        onClick={onClick}
        className="block transition-colors duration-300"
      >
        {label}
      </Link>
    </motion.div>
  )
}
