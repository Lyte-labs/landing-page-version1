'use client'

import { motion } from 'framer-motion'

interface ColumnSpec {
  feature: string
  home: string
  bike: string
  charging: string
}

interface ComparisonTableProps {
  title?: string
  specs: ColumnSpec[]
}

export default function ComparisonTable({ title, specs }: ComparisonTableProps) {
  return (
    <section className="py-10 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-7 text-center"
          >
            {title}
          </motion.h2>
        )}

        <div className="overflow-x-auto rounded-lg shadow-sm">
          <motion.table
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-w-full text-left"
          >
            <thead>
              <tr className="bg-neutral-100">
                <th className="py-5 px-4 text-base font-semibold text-neutral-700">Feature</th>
                <th className="py-5 px-4 text-base font-semibold text-neutral-700">Home Power</th>
                <th className="py-5 px-4 text-base font-semibold text-neutral-700">EVU E-Bike</th>
                <th className="py-5 px-4 text-base font-semibold text-neutral-700">Charging</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-t border-neutral-200 hover:bg-neutral-50 transition"
                >
                  <td className="py-5 px-4 text-sm font-medium">{item.feature}</td>
                  <td className="py-5 px-4 text-sm text-neutral-800">{item.home}</td>
                  <td className="py-5 px-4 text-sm text-neutral-800">{item.bike}</td>
                  <td className="py-5 px-4 text-sm text-neutral-800">{item.charging}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  )
}
