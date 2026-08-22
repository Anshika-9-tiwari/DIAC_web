"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    video: "https://www.youtube.com/embed/lowsZ4Ywcdc",
  },
  {
    video: "https://www.youtube.com/embed/2mek60hc-gI",
  },
  {
    video: "https://www.youtube.com/embed/C6v2KMhImEI",
  },
  {
    video: "https://www.youtube.com/embed/zTmfSWF9csQ",
  },
  {
    video: "https://www.youtube.com/embed/47Gyfzy5UTM",
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section className="py-12 md:py-18 bg-[#f5f5f5] text-gray-900 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-10 md:mb-12">

          <p className="text-base md:text-xl font-medium text-gray-800 mb-3">
            Real Experiences, Real Achievements
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-snug max-w-5xl mx-auto">
            Join the millions of students who have achieved

            <span className="block text-red-900 mt-1">
              Remarkable Success
            </span>
          </h2>

        </div>

        {/* SLIDER */}
        <div
          ref={emblaRef}
          className="overflow-hidden"
        >

          <div className="flex">

            {testimonials.map((item, index) => (

              <div
                key={index}
                className="
                  flex-[0_0_100%]
                  sm:flex-[0_0_50%]
                  lg:flex-[0_0_25%]
                  px-2
                "
              >

                <div className="bg-white rounded-xl overflow-hidden shadow-sm">

                  <div className="relative aspect-[9/16] w-full">

                    <iframe
                      src={item.video}
                      title={`Student Testimonial ${index + 1}`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}