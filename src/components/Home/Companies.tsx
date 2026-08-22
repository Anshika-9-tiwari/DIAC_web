"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const companies = [
  {
    name: "37",
    logo: "/clients/37.png",
  },
  {
    name: "Active Systems",
    logo: "/clients/Active Systems.png",
  },
  {
    name: "Adani Energy Solution Ltd",
    logo: "/clients/Adani Energy Solution Ltd.png",
  },
  {
    name: "Addverb Technology",
    logo: "/clients/Addverb Technology.png",
  },
  {
    name: "Amazon India",
    logo: "/clients/Amazon India.png",
  },
  {
    name: "Anon Automation",
    logo: "/clients/Anon Automation.png",
  },
  {
    name: "Anzo Controls",
    logo: "/clients/Anzo Controls.png",
  },
  {
    name: "Brandco",
    logo: "/clients/Brandco.png",
  },
  {
    name: "Caterpillar Electric",
    logo: "/clients/Caterpillar Electric.png",
  },
  {
    name: "Cotmac",
    logo: "/clients/Cotmac.png",
  },
  {
    name: "Dynamic Engineers",
    logo: "/clients/Dynamic Engineers.png",
  },
  {
    name: "Engima Controls & Solutions",
    logo: "/clients/Engima Controls & Solutions.png",
  },
  {
    name: "Genesis Solutions",
    logo: "/clients/Genesis soultions.png",
  },
  {
    name: "Graziano Trasmissioni India Pvt Ltd",
    logo: "/clients/GRAZIANO Trasmissioni INDIA Pvt Ltd.png",
  },
];

export default function Companies() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:0,
    cssEase: "linear",
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          speed: 4000,
        },
      },
    ],
  };

  return (
    <section className="py-8 md:py-12 bg-white text-gray-800 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* HEADER */}
        <div className="text-center mb-7 md:mb-9">

          <span className="inline-block text-xs md:text-sm font-semibold tracking-[3px] uppercase text-[#801717] mb-2">
            Our Clients
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Trusted by Leading Companies
          </h2>

          <p className="text-sm md:text-base text-gray-500 mt-2">
            Our industry partnerships reflect the trust businesses place in DIAC.
          </p>

        </div>

        {/* LOGO SLIDER */}
        <div className="rounded-2xl  py-4 md:py-6">

          <Slider {...settings}>

            {companies.map((company, index) => (

              <div key={`${company.name}-${index}`} className="px-2 md:px-3">

                {/* FIXED SIZE LOGO CARD */}
                <div
                  className=" h-[60px]  md:h-[90px] bg-white rounded-xl border  border-gray-100 shadow-sm flex items-center justify-center px-4 md:px-6 transition-all duration-300 hover:shadow-md hover:border-red-100"
                >

                  <div className="relative w-full h-[55px] md:h-[70px]">

                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      sizes="(max-width: 480px) 45vw, (max-width: 768px) 30vw, 16vw"
                      className="object-contain"
                    />

                  </div>

                </div>

              </div>

            ))}

          </Slider>

        </div>

      </div>

    </section>
  );
}