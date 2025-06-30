'use client'

import { LazyMotion, domAnimation, motion } from 'framer-motion'
import { useMemo } from 'react'

interface Milestone {
  year: string
  title: string
  description: string
  icon: React.ReactNode | string
}

interface OriginTimelineProps {
  id?: string
  milestones: Milestone[]
}

export default function OriginTimeline({ id, milestones }: OriginTimelineProps) {
  // Fade‐up variant used for each card
  const fadeUp = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }), [])

  return (
    <LazyMotion features={domAnimation}>
      <section id={id} className="py-10 bg-gradient-to-b from-white via-gray-50 to-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-accent mb-6">
          Our Origin
        </h2>

        {/* Connector line */}
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-accent/30 origin-top animate-scaleY" />

          <div className="flex flex-col md:flex-row md:flex-wrap">
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className={`
                    w-full md:w-1/2 px-4 mb-8
                    ${isEven ? 'md:pl-0 md:pr-8 text-left md:text-right' 
                             : 'md:pr-0 md:pl-8 text-left'}
                  `}
                >
                  {/* Icon bubble */}
                  <div className={`
                    w-12 h-12 rounded-full bg-accent text-white
                    flex items-center justify-center shadow-lg ring-4 ring-white
                    mb-4 ${isEven ? 'md:ml-auto' : 'md:mr-auto'}
                  `}>
                    <span className="text-xl">{m.icon}</span>
                  </div>

                  {/* Card */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-accent mb-2">
                      {m.year} – {m.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{m.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}
