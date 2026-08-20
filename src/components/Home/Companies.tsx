"use client";

import Slider from "react-slick";
import Image from "next/image";

const companies = [
  '/home-clients/image_1.png',
  '/home-clients/image_2.png',
  '/home-clients/image_3.png',
  '/home-clients/image_4.png',
  '/home-clients/image_5.png',
  '/home-clients/image_6.png',
  '/home-clients/image_7.png',
  '/home-clients/image_8.png',
  '/home-clients/image_9.png',
  '/home-clients/image_10.png',
  '/home-clients/image_11.png',
  '/home-clients/image_12.png',
  '/home-clients/image_13.png',
  '/home-clients/image_14.png',
  '/home-clients/image_15.png',
  '/home-clients/image_16.png',
];

export default function Companies() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
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
        settings: { slidesToShow: 3 },
      },
    ],
  };

  return (
    <section className="py-10 bg-white  text-gray-800">
      <div className="max-w-8xl border border-gray-50 py-2 mx-auto px-10 text-center ">

        <Slider {...settings}>
          {companies.map((logo, index) => (
            <div key={index} className="px-4 py-2">
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