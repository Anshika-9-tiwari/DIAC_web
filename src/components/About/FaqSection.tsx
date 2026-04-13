"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What courses does DIAC offer?",
    a: "We offer PLC, SCADA, Robotics, DCS, Industrial Automation, and more specialized training programs.",
  },
  {
    q: "Where is DIAC located?",
    a: "We are located in Sector 2, Noida, Delhi/NCR.",
  },
  {
    q: "Does DIAC offer placement assistance?",
    a: "Yes, we provide 100% placement assistance with 4000+ hiring partners.",
  },
  {
    q: "Who should join DIAC’s courses?",
    a: "Engineering students, diploma holders, and working professionals looking to upskill in automation.",
  },
  {
    q: "Does DIAC offer corporate training programmes?",
    a: "Yes, we provide customized corporate training for industries and working professionals.",
  },
  {
    q: "How do I book a free demo class?",
    a: "You can book a demo through our contact page or by calling our support team.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f5f1ec]">
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