"use client";

import { useState } from "react";

interface Props {
  data: {
    sectionTag: string;
    title: string;
    description: string;

    modules: {
      id: number;
      title: string;
      description: string;
      level: string;
      tag: string;
      topics: string[];
      skills: string[];
    }[];
  };
}

export default function CurriculumSection({ data }: Props) {

  const [activeModule, setActiveModule] = useState(0);
  console.log(data);
  const current = data.modules[activeModule];

  return (
    <section 
      id="curriculum"
      className="py-18 md:py-20 bg-[#f8f9fc]">

      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-sm font-semibold tracking-[4px] text-[#801717] uppercase mb-6">
             {data.sectionTag}
          </p>

          <h2 className="text-[35px] md:text-[46px] font-semibold text-gray-800 mb-6">
            {data.title}
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-9">
            {data.description}
          </p>

        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-10">

          {/* Sidebar */}
          <div className="bg-white rounded-3xl border border-red-200 overflow-hidden h-fit">

            {data.modules.map((module, index) => (

              <button
                key={module.id}
                onClick={() => setActiveModule(index)}
                className={`w-full px-8 py-8 text-left border-b border-gray-100 transition-all duration-300

                ${
                  activeModule === index
                    ? "bg-gradient-to-r from-white to-red-50 border-l-[5px] border-l-[#801717] rounded-t-3xl "
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

                    <span className="text-lg font-medium text-gray-700">
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

              <div className="w-15 h-14 rounded-2xl bg-[#801717] text-white flex items-center justify-center text-2xl font-bold shrink-0">
                {String(current.id).padStart(2, "0")}
              </div>

              <div>

                <h3 className="text-3xl md:text-[36px] font-semibold text-gray-800 mb-6">
                  {current.title}
                </h3>

                <p className="text-lg text-gray-600 leading-8 mb-6">
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

                    <span className="text-[#801717] mt-0 text-[20px]">
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

              <h4 className="uppercase tracking-[2px] text-gray-600 text-sm font-semibold mb-6">
                Skills Acquired
              </h4>

              <div className="flex flex-wrap gap-4">

                {current.skills.map((skill, index) => (

                  <span
                    key={index}
                    className="badge badge-outline badge-error p-4 tracking-wide"
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