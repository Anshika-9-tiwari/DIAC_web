"use client";

import {
  BookOpenCheck,
  Cpu,
  GraduationCap,
  Route,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: BookOpenCheck,
    title: "Advance Automation Lab",
    desc: "Learn with modern PLC, SCADA, HMI, VFD, and industrial robotics systems.",
  },
  {
    icon: Cpu,
    title: "Industry-Focused Training",
    desc: "Training modules designed according to real-world industry needs.",
  },
  {
    icon: GraduationCap,
    title: "Placement Assistance",
    desc: "Resume building, interview prep, and job placement support for all students.",
  },
];

export default function WhatMakeDiacDiff() {
  return (
    <section className="py-20 bg-[#fbfcff] text-gray-700">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Heading */}
        <h2 className="text-[32px] md:text-[44px] font-bold text-gray-800 mb-6 ">
           What Makes DIAC Different?
        </h2>

        <p className="max-w-6xl max-auto text-gray-600 text-lg mb-15 px-2">
           We Focus on practical implementation , industrial standards and career growth rather than just training delivery.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="flex flex-col gap-6 bg-white border border-gray-200 border-l-5 border-l-red-800 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-l-red-700 transition duration-300"
              >

                {/* Icon */}
                <div className="w-14 h-14 shrink-0 rounded-xl bg-red-900 flex items-center justify-center">
                  <Icon
                    size={28}
                    className="text-[#f7f7f7]"
                  />
                </div>

                {/* Content */}
                <div>

                  <h3 className="text-[20px] font-semibold text-[#0b1f3a] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7 text-[16px]">
                    {item.desc}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}