// components/animations/SwiperTestimonials.tsx
'use client'
import dynamic from 'next/dynamic'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Swiper = dynamic(
  () => import('swiper/react').then(mod => mod.Swiper),
  { ssr: false }
)
const SwiperSlide = dynamic(
  () => import('swiper/react').then(mod => mod.SwiperSlide),
  { ssr: false }
)
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

interface Props {
  testimonials: { quote: string; author: string }[]
}

export default function SwiperTestimonials({ testimonials }: Props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <blockquote className="p-6 bg-gray-50 rounded-lg">
            <p className="italic">“{t.quote}”</p>
            <footer className="text-right mt-4">— {t.author}</footer>
          </blockquote>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
