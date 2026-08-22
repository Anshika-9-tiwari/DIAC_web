"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      Autoplay({
        delay: 1800,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section className="py-8 md:py-12 bg-white text-gray-800 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* HEADER */}
        <div className="text-center mb-8 md:mb-12">

          <span className="inline-block text-xs md:text-sm font-semibold tracking-[3px] uppercase text-[#801717] mb-2">
            Our Clients
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Trusted by Leading Companies
          </h2>

          <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
            Our industry partnerships reflect the trust businesses place in DIAC.
          </p>

        </div>

        {/* SLIDER */}
        <div ref={emblaRef} className="overflow-hidden">

          <div className="flex">

            {companies.map((company, index) => (

              <div key={`${company.name}-${index}`} className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_16.666%] px-2 md:px-3">

                <div className="h-[65px] sm:h-[70px] md:h-[80px] lg:h-[85px] bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center px-3 sm:px-4 md:px-5 transition-all duration-300 hover:shadow-md hover:border-red-100">

                  <div className="relative w-full h-[42px] sm:h-[48px] md:h-[58px] lg:h-[65px]">

                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                      className="object-contain"
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