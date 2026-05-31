"use client";

import {
  Layers,
  Monitor,
  Users,
  Activity,
  FileText,
  Clock,
} from "lucide-react";

const features = [
  {
    title: "Industry-Relevant Curriculum",
    desc: "Every training program is aligned with current industrial requirements and emerging technologies.",
  },
  {
    title: "Real Equipment Exposure",
    desc: "Participants gain hands-on experience using industrial automation equipment and systems.",
  },
  {
    title: "Expert Mentors",
    desc: "Training is delivered by experienced professionals with extensive industry backgrounds.",
  },
  {
    title: "Customized Learning Paths",
    desc: "Programs are designed specifically around your workforce development objectives.",
  },
  {
    title: "Measurable Outcomes",
    desc: "Our focus is not simply training delivery but measurable business impact.",
  },
];

export default function WhatMakeDiacDiff() {
  return (
    <section className="py-20 bg-[#fbfcff]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-22">

          <h2 className="text-3xl md:text-5xl font-bold text-[#0b1f3a] mb-6 leading-relaxed">
            Partner with DIAC for Workforce 
            <span className="block text-[#801717]">
              Transformation
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-4">
           The success of any organization depends on the skills, knowledge, and capabilities of its workforce. As industries continue to adopt advanced automation technologies and digital transformation strategies, employee development becomes a critical factor in achieving sustainable growth.
          </p>
          <p className="text-gray-600 text-lg leading-8 mb-4">
           DIAC's Corporate Training and Industrial Corporate Training programs help organizations build highly skilled teams capable of driving innovation, improving productivity, and supporting long-term business success.
          </p>
          <p className="text-gray-600 text-lg leading-8 mb-4">
           Whether you are looking to upskill engineers, train maintenance teams, enhance automation capabilities, or prepare your workforce for Industry 4.0, DIAC provides customized solutions that deliver measurable results.
          </p>
           <p className="text-red-900 text-lg leading-8">
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

            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-300"
              >

                {/* Title */}
                <h3 className="font-semibold text-lg mb-3 text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}