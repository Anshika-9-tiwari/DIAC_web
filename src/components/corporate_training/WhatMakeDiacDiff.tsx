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
    title: "Industry-Relevant Curriculum",
    desc: "Every training program is aligned with current industrial requirements and emerging technologies.",
  },
  {
    icon: Cpu,
    title: "Real Equipment Exposure",
    desc: "Participants gain hands-on experience using industrial automation equipment and systems.",
  },
  {
    icon: GraduationCap,
    title: "Expert Mentors",
    desc: "Training is delivered by experienced professionals with extensive industry backgrounds.",
  },
  {
    icon: Route,
    title: "Customized Learning Paths",
    desc: "Programs are designed specifically around your workforce development objectives.",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    desc: "Our focus is not simply training delivery but measurable business impact.",
  },
];

export default function WhatMakeDiacDiff() {
  return (
    <section className="py-18 bg-[#fbfcff] text-gray-700">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-22">

          <h2 className="text-3xl md:text-5xl font-bold text-[#0b1f3a] mb-6 leading-snug">
            Partner with DIAC for Workforce 
            <span className="block text-[#801717]">
              Transformation
            </span>
          </h2>

          <p className="max-w-6xl max-auto text-gray-600 text-lg leading-8 mb-4">
           The success of any organization depends on the skills, knowledge, and capabilities of its workforce. As industries continue to adopt advanced automation technologies and digital transformation strategies, employee development becomes a critical factor in achieving sustainable growth.
          </p>
          <p className="max-w-6xl max-auto text-gray-600 text-lg leading-8 mb-4">
           DIAC's Corporate Training and Industrial Corporate Training programs help organizations build highly skilled teams capable of driving innovation, improving productivity, and supporting long-term business success.
          </p>
          <p className="max-w-6xl max-autotext-gray-600 text-lg leading-8 mb-4">
           Whether you are looking to upskill engineers, train maintenance teams, enhance automation capabilities, or prepare your workforce for Industry 4.0, DIAC provides customized solutions that deliver measurable results.
          </p>
           <p className="max-w-6xl max-auto text-red-900 text-lg leading-8">
           Contact DIAC today to discuss your corporate training requirements and create a workforce development strategy tailored to your organization's future goals.
          </p>

        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#0b1f3a] mb-20">
           What Makes DIAC Different?
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-red-100 transition duration-300"
              >

                {/* Icon */}
                <div className="w-14 h-14 shrink-0 rounded-xl bg-red-50 flex items-center justify-center">
                  <Icon
                    size={28}
                    className="text-[#801717]"
                  />
                </div>

                {/* Content */}
                <div>

                  <h3 className="text-xl font-semibold text-[#0b1f3a] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
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