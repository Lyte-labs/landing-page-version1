interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

interface CustomerStoriesProps {
  testimonials: Testimonial[];
}

export default function CustomerStories({
  testimonials,
}: CustomerStoriesProps) {
  return (
    <section className="bg-transparent py-8 sm:py-12 lg:py-16 text-white">
      <div className="max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="sm:hidden pr-4">
          <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            <i>Customer Stories</i>
          </h2>
        </div>
        <div className="hidden sm:block">
          <h1 className="font-bold mb-8 sm:mb-12 lg:mb-16 text-left italic">
            <i>Customer Stories</i>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mx-auto max-w-7xl w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-transparent border border-white rounded-lg p-4 sm:p-6 flex flex-col w-full justify-between min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]"
            >
              <p className="text-gray-200 leading-relaxed mb-4 sm:mb-6 flex-1 text-sm sm:text-base">
                {testimonial.quote}
              </p>
              <i className="mt-auto">
                <p className="text-white font-medium text-sm sm:text-base">
                  {testimonial.author}
                  {testimonial.title}
                </p>
              </i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
