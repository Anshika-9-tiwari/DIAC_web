"use client";

import Slider from "react-slick";

const items = [
  "🛡️ Career-Focused Training Programs",
  "👨‍🎓 Placement Guidance by Experts",
  "📈 Skill-Based Learning Approach",
  "🏭 Industry Collaboration for Hiring",
  "🚀 Learn • Train • Get Placed",
  "💼 Job-Oriented Automation Courses",
  "🎯 Practical Hands-On Training",
];

export default function PlacementTrust() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
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
    <section className="bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#891414] py-5 overflow-hidden">
      <div className="max-w-8xl mx-auto">

        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index}>
              <div className="text-white font-medium text-center text-sm md:text-[18px] px-4 whitespace-nowrap">
                {item}
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
}