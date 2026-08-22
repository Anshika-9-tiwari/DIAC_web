"use client";

import Slider from "react-slick";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 md:py-18 bg-[#f5f5f5] text-gray-900 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-10 md:mb-12">

          <p className="text-base md:text-xl font-medium text-gray-800 mb-3 md:mb-4">
            Real Experiences, Real Achievements
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-snug max-w-5xl mx-auto">
            Join the millions of students who have achieved

            <span className="block text-red-900 mt-1">
              Remarkable Success
            </span>
          </h2>

        </div>

        {/* TESTIMONIAL SLIDER */}
        <Slider {...settings}>

          {testimonials.map((item, index) => (

            <div key={index} className="px-2 md:px-3">

              <div className="bg-white rounded-md overflow-hidden shadow-sm mx-auto max-w-[280px]">

                {/* VIDEO */}
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

        </Slider>

      </div>

    </section>
  );
}