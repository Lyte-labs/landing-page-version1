'use client'
import { useState, KeyboardEvent } from 'react'
import { LazyMotion, domAnimation, motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, CircleQuestionMark } from 'lucide-react'


interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  heading: string
  items: FAQItem[]
}

const faqData: FAQSection[] = [
  {
    heading: "General Questions",
    items: [
      {
        question: "What is the power capacity of the solar generator?",
        answer: "The solar generator provides 500 watts of continuous power, ideal for small appliances, tools, and electronic devices."
      },
      {
        question: "What is the battery capacity of the solar generator?",
        answer: "It comes with a 420Wh lithium-ion battery for reliable, long-lasting energy storage."
      },
      {
        question: "What devices can the solar generator power?",
        answer: "Phones, laptops, lights, mini-fridges, fans, and other low-to-medium wattage devices. Great for camping or backup power."
      },
      {
        question: "Can it power high-wattage appliances like microwaves?",
        answer: "No, it's designed for devices up to 500 watts. Higher-wattage appliances are not compatible."
      }
    ]
  },
  {
    heading: "Charging and Operation",
    items: [
      {
        question: "How can I charge the solar generator?",
        answer: "Via solar panels (recommended 320W) or a wall outlet with the included AC adapter."
      },
      {
        question: "How long does it take to fully charge?",
        answer: "Solar: 6–8 hours under optimal sunlight. Wall outlet: about 2 hours."
      },
      {
        question: "Can I use it while charging?",
        answer: "Yes, it supports pass-through charging, though charging time may be slightly extended."
      }
    ]
  },
  {
    heading: "Solar Panels and Accessories",
    items: [
      {
        question: "Are solar panels included?",
        answer: "No, but you can use compatible 100W+ panels sold separately."
      },
      {
        question: "What type of solar panels can I use?",
        answer: "Compatible with 12–24V panels using MC4 or 8mm DC connectors."
      },
      {
        question: "Does it come with accessories?",
        answer: "Yes! Includes AC adapter and user manual."
      }
    ]
  }
]


// const listVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// }

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 }
// }

// export default function FAQAccordion() {
//   const [openIndex, setOpenIndex] = useState<string | null>(null)
//   const [allOpen, setAllOpen] = useState(false)

//   const toggle = (id: string) => {
//     setOpenIndex(openIndex === id ? null : id)
//     setAllOpen(false)
//   }

//   const handleKey = (e: KeyboardEvent, id: string) => {
//     if (e.key === 'Enter' || e.key === ' ') {
//       e.preventDefault()
//       toggle(id)
//     }
//   }

//   return (
//     <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-16 px-4 md:px-8">
//       <div className="max-w-5xl mx-auto space-y-8">

//         {/* FAQ Sections */}
//         <motion.div
//           variants={listVariants}
//           initial="hidden"
//           animate="visible"
//           className="space-y-12"
//         >
//           {faqData.map((section, sectionIdx) => (
//             <div key={sectionIdx} className="space-y-4">
//               <h3 className="text-2xl font-bold text-primary border-l-4 border-accent pl-4">
//                 {section.heading}
//               </h3>
              
//               <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm divide-y divide-gray-200">
//                 {section.items.map((item, idx) => {
//                   const itemId = `${sectionIdx}-${idx}`
//                   const isOpen = allOpen || openIndex === itemId

//                   return (
//                     <motion.div
//                       key={itemId}
//                       variants={itemVariants}
//                       className="bg-white"
//                     >
//                       {/* Button */}
//                     <button
//                         type="button"
//                         aria-expanded={isOpen}
//                         aria-controls={`faq-panel-${itemId}`}
//                         onClick={() => toggle(itemId)}
//                         onKeyDown={e => handleKey(e as any, itemId)}
//                         className="flex items-center justify-between w-full px-6 py-5 text-lg font-medium text-gray-800 transition-colors duration-300 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer bg-transparent"
//                         id={`faq-button-${itemId}`}
//                     >
//                         <span className="flex items-center gap-2">
//                             <span className="text-accent animate-pulse">❓</span>
//                             {item.question}
//                         </span>
//                         {isOpen ? (
//                             <ChevronUp className="text-accent" />
//                         ) : (
//                             <ChevronDown className="text-accent" />
//                         )}
//                     </button>

//                       {/* Answer Panel */}
//                       <AnimatePresence initial={false}>
//                         {isOpen && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: 'auto', opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.4 }}
//                             className="bg-gradient-to-b from-white to-gray-50 px-6 pb-5 text-gray-700"
//                           >
//                             <p className="leading-relaxed">{item.answer}</p>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </motion.div>
//                   )
//                 })}
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }


interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  heading: string
  items: FAQItem[]
}

const panelVariants = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: 'auto', opacity: 1 }
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggle = (id: string) => setOpenIndex(openIndex === id ? null : id)

  const handleKey = (e: KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle(id)
    }
  }

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {faqData.map((section, si) => (
            <div key={si} className="space-y-4">
              <h3 className="text-2xl font-bold text-primary border-l-4 border-accent pl-4">
                {section.heading}
              </h3>
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm divide-y divide-gray-200">
                {section.items.map((item, idx) => {
                  const id = `${si}-${idx}`
                  const isOpen = openIndex === id
                  return (
                    <div key={id} className="bg-white">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`panel-${id}`}
                        id={`button-${id}`}
                        onClick={() => toggle(id)}
                        onKeyDown={e => handleKey(e, id)}
                        className="flex items-center justify-between w-full px-6 py-5 text-lg font-medium text-gray-800 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                            <span>
                                <CircleQuestionMark size={20} />
                            </span>
                            <span>
                                  {item.question}
                            </span>                        
                        </div>
                        {isOpen ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-accent" />}
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            id={`panel-${id}`}
                            role="region"
                            aria-labelledby={`button-${id}`}
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={panelVariants}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className="bg-gray-100 p-5 text-gray-700 justify-center"
                          >
                            <p className="leading-relaxed">{item.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </LazyMotion>
  )
}
