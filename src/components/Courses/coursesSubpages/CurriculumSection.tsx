"use client";

import { useState } from "react";
import { modules } from "@/data/FullCoursesCurriculum";

export default function CurriculumSection() {
  const [activeModule, setActiveModule] = useState(0);

  const current = modules[activeModule];

  return (
    <section 
      id="curriculum"
      className="py-20 md:py-22 bg-[#f8f9fc]">

      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-sm font-semibold tracking-[4px] text-[#801717] uppercase mb-4">
            Full Curriculum
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Experience a Comprehensive 9-Module Program
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-9">
            From relay fundamentals to TIA Portal — each module is structured
            for maximum hands-on practice aligned with industry workflows.
          </p>

        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-10">

          {/* Sidebar */}
          <div className="bg-white rounded-3xl border border-red-200 overflow-hidden h-fit">

            {modules.map((module, index) => (

              <button
                key={module.id}
                onClick={() => setActiveModule(index)}
                className={`w-full px-8 py-7 text-left border-b border-gray-100 transition-all duration-300

                ${
                  activeModule === index
                    ? "bg-gradient-to-r from-white to-red-50 border-l-[5px] border-l-[#801717]"
                    : "hover:bg-gray-50"
                }`}
              >

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-4">

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold

                      ${
                        activeModule === index
                          ? "bg-[#801717] text-white"
                          : "bg-red-100 text-gray-700"
                      }`}
                    >
                      {module.id}
                    </div>

                    <span className="text-xl font-medium text-[#0b1f3a]">
                      {module.title}
                    </span>

                  </div>

                  <span className="text-gray-400 text-xl">›</span>

                </div>

              </button>

            ))}

          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl border border-gray-300 p-8 md:p-12">

            <div className="flex flex-col md:flex-row gap-6 mb-10">

              <div className="w-18 h-18 rounded-2xl bg-[#801717] text-white flex items-center justify-center text-3xl font-bold shrink-0">
                {String(current.id).padStart(2, "0")}
              </div>

              <div>

                <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                  {current.title}
                </h3>

                <p className="text-lg text-gray-600 leading-8 mb-5">
                  {current.description}
                </p>

                <div className="flex flex-wrap gap-4">

                  <span className="badge badge-outline badge-error p-4">
                    {current.level}
                  </span>

                  <span className="badge badge-outline badge-warning p-4">
                    {current.tag}
                  </span>

                </div>

              </div>

            </div>

            {/* Topics */}
            <div className="border-y border-gray-200 py-10">

              <div className="grid md:grid-cols-2 gap-x-20 gap-y-5">

                {current.topics.map((topic, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >

                    <span className="text-[#801717] mt-1">
                      ▸
                    </span>

                    <span className="text-lg text-gray-700">
                      {topic}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Skills */}
            <div className="pt-10">

              <h4 className="uppercase tracking-[3px] text-gray-600 text-sm font-semibold mb-5">
                Skills Acquired
              </h4>

              <div className="flex flex-wrap gap-3">

                {current.skills.map((skill, index) => (

                  <span
                    key={index}
                    className="badge badge-outline badge-error p-3"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}