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
      className="py-18 bg-[#fbfcff]"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-10">

        {/* TOP HEADING */}
        <div className="text-center mb-18">

          <p className="text-[#801717] uppercase tracking-[4px] font-semibold text-sm mb-5">
            {data.sectionTag}
          </p>

          <h2 className="text-[35px] md:text-[45px] font-semibold text-gray-700 mb-6">
            {data.title}
          </h2>

          <p className="max-w-4xl mx-auto text-[16px] md:text-xl text-gray-700 leading-8">
            {data.description}
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-18 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {data.points.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >

                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <CircleCheckBig
                      size={22}
                      className="text-red-800"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3 className="text-lg md:text-[22px] font-medium text-gray-800 mb-3">
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
                className="inline-flex items-center bg-[#801717] hover:bg-[#6c1414] text-white font-semibold px-10 py-4 rounded-xl uppercase transition"
              >
                Enquire Now
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">

            <div className="relative w-full max-w-[500px] h-[550px]">

              <Image
                src={data.image}
                alt="Industrial Automation Certificate"
                fill
                className="object-contain"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}