"use client";

import Slider from "react-slick";
import Image from "next/image";

const companies = [
  '/image.png',
  '/image_1.png',
  '/image_2.png',
  '/image_3.png',
  '/image_4.png',
  '/image_5.png',
  '/image_6.png',
  '/image_7.png',
  '/image_8.png',
  '/image_9.png',
  '/image_10.png',
  '/image_11.png',
  '/image_12.png',
  '/image_13.png',
  '/image_14.png',
  '/image_15.png',
];

export default function Companies() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Our Clients
        </h2>
        <div className="w-13 h-1 bg-red-800 mx-auto  mb-14 rounded"></div>

        <Slider {...settings}>
          {companies.map((logo, index) => (
            <div key={index} className="px-4">
              <Image
                src={logo}
                alt="company"
                width={120}
                height={60}
                className="mx-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}