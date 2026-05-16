"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Clock3,
  MonitorPlay,
  Hammer,
} from "lucide-react";

const curriculumData = [
  {
    title: "PLC Programming & Automation",
    description:
      "Learn industrial PLC programming, ladder logic, automation systems, troubleshooting and real-time project implementation used in industries.",

    modules: "13 Modules",

    topics: [
      "Introduction to PLC",
      "PLC Hardware Architecture",
      "Timers & Counters",
      "Ladder Logic Programming",
      "PLC Communication",
    ],
  },

  {
    title: "SCADA & HMI Training",
    description:
      "Master SCADA systems, HMI designing, industrial monitoring systems and real-world automation interfaces.",

    modules: "10 Modules",

    topics: [
      "SCADA Fundamentals",
      "HMI Design",
      "Alarm Management",
      "Data Logging",
      "Industrial Visualization",
    ],
  },
];

export default function CurriculumSection() {

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="curriculum"
      className="py-20 bg-white"
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-15">

        {/* HEADING */}
        <div className="mb-14">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industrial Automation Course Curriculum
          </h2>

          <p className="text-lg text-gray-600 leading-8 max-w-5xl">
            Our industry-focused curriculum is designed to provide
            practical training in PLC, SCADA, HMI, DCS, Robotics,
            Drives and Industrial Automation technologies.
          </p>

        </div>
        <div className="grid lg:grid-cols-[1.6fr_0.6fr] gap-10 items-start">

          {/* LEFT SECTION */}
          <div className="space-y-8">

            {curriculumData.map((item, index) => {

              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-[#f8fbfe] border border-[#dbe4f0] rounded-sm overflow-hidden"
                >

                  {/* TOP CONTENT */}
                  <div className="p-10">

                    <h2 className="text-3xl font-semibold mb-8">
                      {item.title}
                    </h2>

                    <p className="text-[20px] leading-[2.3rem] text-[#333] max-w-5xl mb-8">
                      {item.description}
                      {/* <span className="text-[#4676c8] cursor-pointer ml-2">
                        Read more ↓
                      </span> */}
                    </p>

                    <div className="inline-flex bg-white rounded-full px-7 py-3 text-xl font-medium">
                      {item.modules}
                    </div>

                  </div>

                  {/* COURSE CONTENT HEADER */}
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="w-full border-t border-[#dbe4f0] px-10 py-8 flex items-center justify-between bg-[#f5f8fc]"
                  >

                    <h3 className="text-[18px] md:text-[25px] font-semibold">
                      Course Content
                    </h3>

                    {isOpen ? (
                      <ChevronUp size={34} />
                    ) : (
                      <ChevronDown size={34} />
                    )}

                  </button>

                  {/* CONTENT */}
                  {isOpen && (
                    <div className="px-10 pb-10 bg-white">

                      {/* TOP ROW */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 py-10 border-b border-[#e4eaf3]">

                        <h3 className="text-xl md:text-2xl font-semibold">
                          Industrial Automation Course
                        </h3>

                        <button className="bg-[#801717] hover:bg-[#6c1414] text-white text-xl font-semibold px-6 py-4 rounded-lg transition">
                          Download Brochure
                        </button>

                      </div>

                      {/* MODULE */}
                      <div className="pt-10">

                        <div className="flex items-start justify-between gap-5">

                          {/* LEFT */}
                          <div className="flex gap-6">

                            {/* LINE */}
                            <div className="flex flex-col items-center">

                              <div className="w-4 h-4 rounded-full bg-[#934343]"></div>

                              <div className="w-[2px] h-full bg-[#dbe4f0] mt-2"></div>

                            </div>

                            {/* CONTENT */}
                            <div>

                              <h4 className="text-xl md:text-2xl font-semibold mb-8">
                                Introduction
                              </h4>

                              <ul className="space-y-4">

                                {item.topics.map((topic, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-3 text-[20px] text-[#555]"
                                  >

                                    <span className="w-3 h-3 bg-gray-300 rounded-full"></span>

                                    {topic}

                                  </li>
                                ))}

                              </ul>

                            </div>

                          </div>

                          {/* RIGHT */}
                          <div className="flex items-center gap-5">

                            <div className="bg-[#f2f5fa] rounded-full px-8 py-3 text-xl">
                              5 Topics
                            </div>

                            <ChevronUp
                              size={34}
                              className="text-[#4676c8]"
                            />

                          </div>

                        </div>

                      </div>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="sticky top-28">

            <div className="bg-white rounded-2xl shadow-sm border border-[#e7edf5] p-8">

              {/* CARD 1 */}
              <div className="bg-white border border-[#edf1f7] rounded-xl p-8 flex items-center gap-6 mb-6 shadow-sm">

                <Clock3
                  size={65}
                  strokeWidth={1.5}
                  className="text-[#801717]"
                />

                <div>
                  <h3 className="text-5xl font-bold text-[#801717]">
                    420<span className="text-[#f6a623]">+</span>
                  </h3>

                  <p className="text-2xl text-[#333] mt-2">
                    Hours of content
                  </p>
                </div>

              </div>

              {/* CARD 2 */}
              <div className="bg-white border border-[#edf1f7] rounded-xl p-8 flex items-center gap-6 mb-6 shadow-sm">

                <MonitorPlay
                  size={65}
                  strokeWidth={1.5}
                  className="text-[#801717]"
                />

                <div>
                  <h3 className="text-5xl font-bold text-[#801717]">
                    105<span className="text-[#f6a623]">+</span>
                  </h3>

                  <p className="text-2xl text-[#333] mt-2">
                    Live sessions
                  </p>
                </div>

              </div>

              {/* CARD 3 */}
              <div className="bg-white border border-[#edf1f7] rounded-xl p-8 flex items-center gap-6 mb-8 shadow-sm">

                <Hammer
                  size={65}
                  strokeWidth={1.5}
                  className="text-[#801717]"
                />

                <div>
                  <h3 className="text-5xl font-bold text-[#801717]">
                    9<span className="text-[#f6a623]">+</span>
                  </h3>

                  <p className="text-2xl text-[#333] mt-2">
                    Tools and software
                  </p>
                </div>

              </div>

              {/* BUTTON */}
              <button className="w-full bg-[#801717] hover:bg-[#6a1212] text-white text-2xl font-semibold py-6 rounded-xl transition">
                Download Brochure
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}