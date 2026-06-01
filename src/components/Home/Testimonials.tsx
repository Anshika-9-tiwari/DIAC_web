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
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,

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
    <section className="py-16 bg-[#f5f5f5] overflow-hidden text-gray-700">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-12">

          <p className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
            Real Experiences, Real Achievements
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-5xl mx-auto">
            Join the millions of students who have achieved
            <span className="block text-red-900">
              Remarkable Success
            </span>
          </h2>

        </div>

        {/* TESTIMONIAL SLIDER */}
        <Slider {...settings}>

          {testimonials.map((item, index) => (

            <div key={index} className="px-3">

              <div className="bg-white rounded-md overflow-hidden shadow-sm">

                {/* YOUTUBE VIDEO */}
                <div className="relative h-[420px]">

                  <iframe
                    src={item.video}
                    title="Student Testimonial"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                </div>

              </div>

            </div>
          ))}

        </Slider>

      </div>

    </section>
  );
}