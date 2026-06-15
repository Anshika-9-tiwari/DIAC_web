"use client";

import Image from "next/image";
import Link from "next/link";
import {  CircleCheckBig } from "lucide-react";

const certificationPoints = [
  {
    title: "Hands-on Practical Training",
    desc: "Gain real-world experience through live projects and industrial automation applications.",
  },
  {
    title: "Industry-Recognized Certification",
    desc: "Validate your skills in PLC, SCADA, HMI, VFD, and Industrial Networking.",
  },
  {
    title: "Career Advancement Opportunities",
    desc: "Enhance employability and prepare for roles in manufacturing, process, and automation industries.",
  },
  {
    title: "Industry-Oriented Training",
    desc: "Our training programs are designed to replicate real industrial environments and workflows. Participants learn the technologies, tools, standards, and troubleshooting techniques commonly used in modern industries.",
  },
];

export default function CoursesCertification() {
  return (
    <section
      id="certification"
      className="py-18 bg-[#fbfcff]"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-10">

        {/* TOP HEADING */}
        <div className="text-center mb-18">

          <p className="text-[#801717] uppercase tracking-[4px] font-semibold text-sm mb-4">
            Certification
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0b1f3a] mb-6">
            Credentials That Open Doors
          </h2>

          <p className="max-w-3xl mx-auto text-[16px] md:text-xl text-gray-700 leading-8">
            Earn an industry-recognised certificate that validates your skills
            and demonstrates practical expertise in industrial automation
            technologies.
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-18 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            {certificationPoints.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >

                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <CircleCheckBig
                      size={24}
                      className="text-red-800"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3 className="text-xl md:text-[22px] font-semibold text-gray-800 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-8">
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
                src="/courses/certificate_1.jpg"
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