"use client";

import Image from "next/image";
import { CircleCheckBig } from 'lucide-react';
import { Check } from "lucide-react";

const audience = [
  "Aspiring Industrial Automation Engineers",
  "PLC / SCADA Professionals",
  "Electrical & Electronics Engineers",
  "Career Changers",
  "Instrumentation Engineers",
  "Diploma & B.Tech Students",
];

export default function CourseAudienceSection() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">

        {/* MAIN BOX */}
        <div className="bg-white rounded-[35px] border border-[#eceff5] overflow-hidden shadow-lg">

          <div className="grid lg:grid-cols-2 items-center">

            {/* LEFT IMAGE */}
            <div className="relative h-[300px] md:h-[350px] lg:h-[550px]">

              <Image
                src="/courses/student.png"
                alt="Course Student"
                fill
                className="object-contain object-bottom"
              />

            </div>

            {/* RIGHT CONTENT */}
            <div className="px-8 md:px-14 lg:px-20 py-14">

              <h2 className="text-4xl md:text-4xl font-bold text-[#111827] mb-12 leading-tight">
                Who is this course for?
              </h2>

              <div className="space-y-6">

                {audience.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6"
                  >

                    {/* ICON */}
                    <CircleCheckBig
                      size={25}
                      className="text-[#801717]"
                      strokeWidth={2}
                    />

                    {/* TEXT */}
                    <p className="text-[20px] md:text-[22px] text-[#222] leading-relaxed">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}