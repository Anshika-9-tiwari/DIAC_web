"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Corporate Training?",
    a: "Corporate Training refers to structured learning programs designed to improve employee knowledge, skills, and workplace performance.",
  },
  {
    q: "What is Industrial Corporate Training?",
    a: "Industrial Corporate Training focuses specifically on technical and industrial skills required in manufacturing, automation, engineering, and production environments.",
  },
  {
    q: "Can DIAC provide training at our facility?",
    a: "Yes. We offer on-site corporate training programs across India based on organizational requirements.",
  },
  {
    q: "Do you offer customized training solutions?",
    a: "Absolutely. Every program can be tailored according to employee skill levels, technologies used, and business objectives.",
  },
  {
    q: "What industries benefit from corporate training?",
    a: "Manufacturing, automotive, pharmaceutical, power, food processing, oil and gas, engineering, and automation industries can significantly benefit from workforce development programs.",
  },
  {
    q: "Do participants receive certification?",
    a: "Yes. Participants receive training completion certificates after successfully completing the program.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-base-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Label */}
        <p className="text-xs tracking-widest text-[#801717] mb-2 uppercase">
          Common Questions
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left text-sm font-medium text-gray-800"
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
                <div className="px-4 pb-4 text-sm text-gray-600">
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