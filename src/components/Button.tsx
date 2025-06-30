'use client'

import React from 'react'
import Link from 'next/link'
import { LazyMotion, domAnimation, m, MotionProps } from 'framer-motion'

/**
 * Simple classnames helper
 */
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export type Variant = 'primary' | 'outline' | 'gradient'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  children: React.ReactNode
  className?: string
  whileHover?: MotionProps['whileHover']
  whileTap?: MotionProps['whileTap']
}

interface LinkProps extends BaseProps {
  as?: 'link'
  href: string
  onClick?: never
  type?: never
}

interface ButtonProps extends BaseProps {
  as: 'button'
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  href?: never
}

type Props = (LinkProps | ButtonProps) & {
  variant?: Variant
  size?: Size
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent/50',
  outline:
    'border border-accent text-accent hover:bg-accent/10 focus:ring-accent/50',
  gradient:
    'relative p-0.5 overflow-hidden bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 focus:ring-red-100',
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button(props: Props) {
  const {
    as = 'link',
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    whileHover = { scale: 1.05 },
    whileTap = { scale: 0.95 },
    ...rest
  } = props

  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium rounded-lg transition focus:outline-none focus:ring-4',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  )

  return (
    <LazyMotion features={domAnimation}>
      {as === 'button' ? (
        <m.button
          {...(rest as ButtonProps)}
          whileHover={whileHover}
          whileTap={whileTap}
          className={baseClasses}
        >
          {children}
        </m.button>
      ) : (
        <m.div whileHover={whileHover} whileTap={whileTap}>
          <Link {...(rest as LinkProps)} className={baseClasses}>
            {children}
          </Link>
        </m.div>
      )}
    </LazyMotion>
  )
}
