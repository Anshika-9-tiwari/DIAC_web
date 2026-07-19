"use client";

import { CircleCheckBig } from "lucide-react";

interface Props {
  data: {
    badge: string;
    title: string;
    description: string;
    audience: string[];
  };
}

export default function CourseAudienceSection({data,}: Props) {
  return (
    <section 
      id="industry-demand" 
      className="py-18 bg-gradient-to-b from-white to-[#fffdfd]">

      <div className="max-w-7xl mx-auto px-8">

        <div className="bg-white rounded-[32px] border border-red-100 shadow-[0_18px_60px_rgba(0,0,0,0.08)] p-6 md:p-12 lg:p-14">

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="badge badge-outline badge-error px-5 py-4">
              {data.badge}
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-[33px] md:text-[45px] font-bold text-gray-900 text-center leading-tight mb-8">
            {data.title}
          </h2>

          {/* Description */}
          <p className="text-[16px] md:text-lg leading-9 text-gray-600 text-center max-w-5xl mx-auto mb-12">
            {data.description}
          </p>

          {/* Audience Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {data.audience.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-red-100 bg-white hover:border-[#801717]/30 hover:shadow-lg transition-all duration-300"
              >
                <CircleCheckBig
                  size={22}
                  className="text-[#801717] mt-1 shrink-0"
                />

                <p className="text-[17px] text-gray-700 leading-7 font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}