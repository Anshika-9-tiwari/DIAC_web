"use client";

import Slider from "react-slick";
import {
  GraduationCap,
  BriefcaseBusiness,
  UserRound,
  Factory,
  MonitorSmartphone,
  LaptopMinimalCheck,
} from "lucide-react";

const services = [
  {
    title: "CAMPUS\nTRAINING",
    icon: GraduationCap,
  },

  {
    title: "CORPORATE\nTRAINING",
    icon: BriefcaseBusiness,
  },

  {
    title: "FRESHER\nTRAINING",
    icon: UserRound,
  },

  {
    title: "INDUSTRIAL\nTRAINING",
    icon: Factory,
  },

  {
    title: "IT\nDEVELOPMENT",
    icon: MonitorSmartphone,
  },

  {
    title: "ONLINE\nTRAINING",
    icon: LaptopMinimalCheck,
  },

  {
    title: "CAMPUS\nTRAINING",
    icon: GraduationCap,
  },
];

export default function OurServices() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,

    responsive: [
      {
        breakpoint: 1200,
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
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-14 bg-[#f8f8f8] overflow-hidden text-gray-700">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="mb-10">

          <h2 className="text-[38px] font-bold uppercase text-[#1e1e1e]">
            OUR <span className="text-[#801717]">SERVICES</span>
          </h2>

          <div className="w-15 h-[2px] bg-[#444] mt-5"></div>

        </div>

        {/* SLIDER */}
        <Slider {...settings}>

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div key={index}>

                <div className="group relative text-center py-6 cursor-pointer">

                  {/* ICON */}
                  <div className="flex justify-center mb-5">

                    <Icon
                      size={58}
                      strokeWidth={1.8}
                      className="text-red-900"
                    />

                  </div>

                  {/* TITLE */}
                  <h3 className="text-[18px] font-semibold uppercase leading-[1.5] text-[#333 whitespace-pre-line hover:text-red-900">

                    {service.title}

                  </h3>

                  {/* BORDER */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d9d9d9]">

                    {/* HOVER ACTIVE BORDER */}
                    <div className="h-full w-0 bg-[#801717] transition-all duration-300 group-hover:w-full"></div>

                  </div>

                  {/* TRIANGLE */}
                  <div className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#0d5bd7]"></div>

                </div>

              </div>
            );
          })}

        </Slider>

      </div>

    </section>
  );
}