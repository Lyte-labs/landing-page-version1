// 'use client'
// import { motion } from 'framer-motion'

// export default function ShopHeader() {
//   return (
//     <section className="bg-black text-white text-center py-16 px-4">
//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//       //  transition={{ duration: 0.2 }}
//         className="text-5xl font-bold mb-4"
//       >
//         Shop
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//       //  transition={{ duration: 0.1 }}
//         className="text-lg max-w-2xl mx-auto"
//       >
//         Select LytePack, the EVU E-Bike, or our best-value bundle.
//       </motion.p>
//     </section>
//   )
// }

'use client'

export default function ShopHeader() {
  return (
    <section className="relative bg-black text-white text-center py-16 px-4 overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        <h1 className="text-5xl font-extrabold mb-2 opacity-0 animate-fadeDown">
          Shop
        </h1>
        {/* accent underline */}
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4 animate-fadeIn" />
        <p className="text-lg opacity-0 animate-fadeUp animation-delay-200">
          Select LytePack, the EVU E-Bike, or our best-value bundle.
        </p>
      </div>
    </section>
  )
}
