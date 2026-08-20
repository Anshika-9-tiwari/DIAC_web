"use client";

import Image from "next/image";
import { clients } from "@/data/clientsData";

export default function ClientLogos() {
  return (
    <section className="py-18 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-14">

          <p className="text-[#801717] text-sm font-semibold uppercase tracking-[4px] mb-4">
            Our Clients
          </p>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-5">
            Companies That Trust DIAC
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-7">
            We are proud to work with organizations across automation,
            manufacturing, engineering, technology, energy, and other
            industrial sectors.
          </p>

        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">

          {clients.map((client, index) => (

            <div
              key={index}
              className="group relative h-[150px] md:h-[175px] bg-white border border-gray-200 rounded-2xl flex items-center justify-center p-6 shadow-sm hover:shadow-xl hover:border-[#801717]/30 hover:-translate-y-1 transition-all duration-300"
            >

              {/* Subtle hover background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#801717]/0 to-[#801717]/5 opacity-0 group-hover:opacity-100 transition duration-300" />

              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={180}
                height={90}
                className="relative z-10 max-h-[80px] w-auto max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}