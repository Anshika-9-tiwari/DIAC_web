"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Who can enroll in the Industrial Automation Training Program?",
    a: "This course is suitable for B.Tech, B.E., Diploma, ITI students, fresh graduates, maintenance engineers, electrical engineers, instrumentation engineers, and working professionals who want to build or advance their careers in industrial automation.",
  },

  {
    q: "What technologies are covered in this course?",
    a: "The program covers Relay Logic Control (RLC), PLC Programming, HMI, SCADA, Industrial Networking, VFD & Motion Control, Process Instrumentation, Panel Designing, AutoCAD, and Siemens TIA Portal with hands-on practical training.",
  },

  {
    q: "Is the training practical or theory-based?",
    a: "DIAC focuses heavily on practical learning. Students work on real PLCs, HMIs, SCADA systems, industrial panels, sensors, VFDs, communication networks, and live industrial projects to gain real-world experience.",
  },

  {
    q: "Will I receive a certificate after completing the course?",
    a: "Yes. Upon successful completion of the training program, students receive an Industry-Oriented Training Certificate from DIAC along with project-based practical exposure that strengthens their professional profile.",
  },

  {
    q: "Does DIAC provide placement assistance?",
    a: "Yes. DIAC provides placement assistance through resume building, interview preparation, technical mock interviews, career counseling, job referrals, and industry connections to help students secure opportunities in industrial automation.",
  },

  {
    q: "What job opportunities are available after completing the course?",
    a: "Students can pursue careers as PLC Programmers, SCADA Engineers, Automation Engineers, Maintenance Engineers, Electrical Design Engineers, Control Panel Engineers, Service Engineers, and Industrial Automation Specialists across multiple industries.",
  },
];

export default function CoursesFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Label */}
        <p className="text-sm tracking-widest text-[#801717] mb-6 uppercase">
          Common Questions
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-[40px] font-bold mb-14 text-gray-900">
          Frequently Asked Questions
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {faqs.map((item, index) => (
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