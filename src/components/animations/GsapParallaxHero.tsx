// components/animations/GsapParallaxHero.tsx
'use client'
import { ReactNode, useRef, useEffect } from 'react'
import gsap from 'gsap'

interface Props {
  children: ReactNode
}

export default function GsapParallaxHero({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.timeline()
        .from(ref.current, {
          opacity: 0,
          scale: 0.9,
          duration: 1.5,
          ease: 'power2.out',
        })
    }, ref)
    return () => ctx.revert()
  }, [])

  return <div ref={ref}>{children}</div>
}
