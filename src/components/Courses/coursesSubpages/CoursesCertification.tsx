"use client";

import Image from "next/image";
import Link from "next/link";
import {  CircleCheckBig } from "lucide-react";

interface Props {
  data: {
    sectionTag: string;
    title: string;
    description: string;
    image: string;

    points: {
      title: string;
      desc: string;
    }[];
  };
}


export default function CoursesCertification({data,}: Props) {
  return (
    <section
      id="certification"
      className="py-16 md:py-18 bg-[#fbfcff]"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-12">

        {/* TOP HEADING */}
        <div className="text-center mb-18">

          <p className="text-[#801717] uppercase tracking-[4px] font-semibold text-sm mb-5">
            {data.sectionTag}
          </p>

          <h2 className="text-[35px] md:text-[45px] font-semibold text-gray-900 mb-6">
            {data.title}
          </h2>

          <p className="max-w-4xl mx-auto text-[16px] md:text-xl text-gray-700 leading-8">
            {data.description}
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-18 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {data.points.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >

                <div className="flex items-start gap-3">

                  {/* ICON */}
                  <div className="w-8 h-8 rounded-full bg-red-900 flex items-center justify-center shrink-0">
                    <CircleCheckBig
                      size={18}
                      className="text-red-50"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3 className="text-lg md:text-[22px] font-medium text-gray-800 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-[16px] md:text-lg leading-8">
                      {item.desc}
                    </p>

                  </div>

                </div>

              </div>
            ))}

            {/* CTA */}
            <div className="pt-5 pl-4">

              <Link
                href="/contact"
                className="inline-flex items-center bg-[#801717] hover:bg-[#6c1414] text-white font-semibold px-10 py-4 tracking-wider rounded-xl uppercase transition"
              >
                Enquire Now
              </Link>

            </div>

          </div>

         {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center lg:sticky lg:top-30">

            <div className="relative w-full max-w-[500px]">

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#801717]/10 to-red-200/20 blur-xl rounded-full scale-90"></div>

              {/* Top Badge */}
              <div className="absolute -top-4 left-4 z-20 bg-white shadow-lg border border-red-100 rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-[#801717]">
                  Industry Approved
                </span>
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-4 right-4 z-20 bg-[#801717] shadow-lg rounded-full px-4 py-2">
                <span className="text-sm font-semibold text-white">
                  Certification Included
                </span>
              </div>

              {/* Certificate Card */}
              <div className="relative bg-white border border-red-100 rounded-3xl shadow-2xl p-4 md:p-6">

                <div className="relative w-full h-[280px] sm:h-[350px] md:h-[500px]">
                  <Image
                    src={data.image}
                    alt="Industrial Automation Certificate"
                    fill
                    className="object-contain rounded-2xl"
                  />
                </div>

              </div>

            </div>

          </div>  

        </div>

      </div>
    </section>
  );
}