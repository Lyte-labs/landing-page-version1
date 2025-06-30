'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

interface Testimonial {
  quote: string
  author: string
  avatar?: string
}

interface TestimonialsSliderProps {
  title?: string
  testimonials: Testimonial[]
  bgClass?: string
}

export default function TestimonialsSlider({
  title,
  testimonials,
  bgClass = 'bg-black',
}: TestimonialsSliderProps) {
  return (
    <section id="testimonials" className={`${bgClass} py-10 text-white`}>
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-yellow-200">
            {title}
          </h2>
        )}

        <Swiper
          slidesPerView={1.2}
          spaceBetween={16}
          grabCursor
          loop
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.2 },
          }}
          modules={[Autoplay]}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className="
                  flex flex-col justify-between h-full
                  rounded-xl p-6 md:p-8
                  bg-white/10 backdrop-blur-md border border-white/20
                  shadow-lg hover:shadow-yellow-500/30 transition
                  min-h-[12rem]
                "
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400 mr-4">
                    {t.avatar && (
                      <Image
                        src={t.avatar.startsWith('/') ? t.avatar : `/${t.avatar}`}
                        alt={t.author}
                        fill
                        className="object-cover"
                        sizes="64px"
                        priority
                      />
                    )}
                  </div>
                  <footer className="text-lg font-semibold text-yellow-300">
                    {t.author}
                  </footer>
                </div>
                <p className="text-base md:text-lg italic leading-relaxed text-gray-100 flex-1">
                  “{t.quote}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
