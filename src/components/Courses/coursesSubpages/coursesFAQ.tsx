"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";


interface Props {
  data: {
    sectionTag: string;
    title: string;

    faqs: {
      q: string;
      a: string;
    }[];
  };
}

export default function CoursesFAQSection({ data,}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Label */}
        <p className="text-sm tracking-widest text-[#801717] mb-6 uppercase">
          {data.sectionTag}
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-[40px] font-bold mb-14 text-gray-900">
          {data.title}
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {data.faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-[18px] text-gray-700"
              >
                {item.q}
                {openIndex === index ? (
                  <Minus size={16} className="text-[#801717]" />
                ) : (
                  <Plus size={16} className="text-[#801717]" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-4 pb-4 text-[16px] text-gray-600">
                  {item.a}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}