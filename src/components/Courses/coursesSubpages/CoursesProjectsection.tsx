"use client";

import { Circle } from "lucide-react";
import Link from "next/link";

const skills = [
  "PLC Programming & Troubleshooting",
  "SCADA System Development",
  "HMI Designing",
  "Industrial Automation Projects",
  "Servo Motors & Drives",
  "Electrical Panel Designing",
  "Industrial Networking",
  "Process Instrumentation",
];

export default function CoursesProjectSection() {
  return (
    <section id="projects" className=" py-24 bg-[#fbfcff]">

      <div className="max-w-[1700px] mx-auto px-8 lg:px-12">

        {/* HEADING */}
        <div className="text-center mb-20">

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-gray-800">
            Industrial Automation Skills you can add in your CV
          </h2>

        </div>

        {/* SKILLS GRID */}
        <div className="flex flex-wrap justify-center gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-full shadow-md px-10 py-6 flex items-center gap-5 min-w-[320px] hover:shadow-lg transition"
            >

              {/* ICON */}
              <Circle
                size={26}
                strokeWidth={1.8}
                className="text-[#801717]"
              />

              {/* TEXT */}
              <h3 className="text-[22px] font-medium text-[#222]">
                {skill}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}