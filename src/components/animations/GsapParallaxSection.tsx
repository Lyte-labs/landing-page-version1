'use client'
import { ReactNode, useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  bgImageUrl: string
  children: ReactNode
  overlayColor?: string
  className?: string
  yPercent?: number
  zoom?: boolean
}

export default function GsapParallaxSection({
  bgImageUrl,
  children,
  overlayColor = 'rgba(0,0,0,0.3)',
  className = '',
  yPercent = -20,
  zoom = false
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const imageEl = sectionRef.current.querySelector<HTMLDivElement>('.bg-layer')

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      timeline.to(imageEl, {
        yPercent,
        ease: 'none',
      })

      if (zoom) {
        timeline.to(imageEl, {
          scale: 1.1,
          ease: 'none',
        }, 0)
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [yPercent, zoom])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden h-screen ${className}`}>
      <div
        className="bg-layer absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />
      </div>
      <div className="relative z-10 p-8 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  )
}
