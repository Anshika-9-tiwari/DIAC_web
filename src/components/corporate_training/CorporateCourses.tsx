"use client";

import { useState } from "react";
import Image from "next/image";

const courses = [
  {
    title: "PLC Programming Training",
    image: "/home_courses/plc_vender_training.png",
    desc: "Programmable Logic Controllers (PLC) form the foundation of modern industrial automation systems. Our PLC Corporate Training programs help employees develop expertise in:",
    points: [
      "PLC architecture",
      "PLC programming",
      "Ladder logic development",
      "Process automation",
      "Industrial control systems",
      "Troubleshooting techniques",
      "System maintenance",
      "Industrial networking",
    ],
  },

  {
    title: "SCADA Training",
    image: "/home_courses/scada_hmi.png",
    desc: "SCADA systems enable organizations to monitor and control industrial processes efficiently.  Our SCADA Corporate Training covers:",
    points: [
      "SCADA architecture",
      "Real-time monitoring",
      "Data acquisition systems",
      "Alarm management",
      "Process visualization",
      "Industrial communication protocols",
      "Report generation",
      "Remote monitoring systems",
    ],
  },

  {
    title: "Industrial Robotics Training",
    image: "/home_courses/industrial_iot.png",
    desc: "Automation and robotics are transforming manufacturing operations globally. Our Industrial Robotics Training helps participants understand:",
    points: [
      "Robotics fundamentals",
      "Robot programming",
      "Motion control",
      "Automated manufacturing",
      "Robotic integration",
      "Industrial applications",
      "Maintenance and troubleshooting",
    ],
  },

  {
    title: "HMI Training",
    image: "/home_courses/electrical_design.png",
    desc: "Human Machine Interface (HMI) systems improve operational visibility and productivity. Training includes:",
    points: [
      "HMI design principles",
      "Screen development",
      "Industrial visualization",
      "Process control interfaces",
      "Alarm systems",
      "Data management",
    ],
  },

  {
    title: "VFD & Servo Drive Training",
    image: "/home_courses/vfd_drive.png",
    desc: "Employees gain practical knowledge of modern motion control systems used across industrial environments:",
    points: [
      "Motor control principles",
      "Variable Frequency Drive programming",
      "Servo motor applications",
      "Industrial motion control",
      "Energy optimization",
      "Maintenance procedures",
    ],
  },

  {
    title: "Panel Design Training",
    image: "/home_courses/panel_design.png",
    desc: "Our panel design programs focus on practical implementation and industry-standard practices:",
    points: [
      "Electrical panel design",
      "Control panel development",
      "Wiring standards",
      "Electrical safety",
      "Documentation practices",
      "Industrial implementation",
    ],
  },

  {
    title: "Industry 4.0 Training",
    image: "/home_courses/full_industrial_automation.png",
    desc: "Organizations preparing for digital transformation can benefit from training in:",
    points: [
      "Smart manufacturing",
      "Industrial IoT",
      "Data-driven operations",
      "Digital factories",
      "Predictive maintenance",
      "Industrial connectivity",
      "Automation integration",
    ],
  },
];

export default function CorporateCourses() {

  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll
   ? courses
   : courses.slice(0, 3);


  return (
    <section className="py-20 bg-[#f8f9fb]">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block text-xs px-4 py-1 bg-[#801717] text-[#f7f7f7] rounded-full font-medium mb-5">
            Corporate Training Program
          </span>  

          <h2 className="text-[32px] md:text-[45px] font-bold text-gray-900 mb-4">
            Corporate Training Programs Offered by DIAC
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Specialized industrial training programs designed to improve
            workforce productivity, automation expertise, and operational
            excellence.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {visibleCourses.map((course, i) => (
            <div
              key={i}
              className="card h-full bg-white shadow-md border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >

              {/* Image */}
              <figure className="relative h-56 overflow-hidden">

                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />

              </figure>

              {/* Content */}
              <div className="card-body flex flex-col">

                {/* Title */}
                <h2 className="card-title text-black text-xl leading-snug">
                  {course.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-7">
                  {course.desc}
                </p>

                {/* Points */}
                <ul className="mt-4 space-y-2">

                  {course.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >

                      <span className="text-[#801717] font-bold mt-[2px]">
                        ✓
                      </span>

                      <span>{point}</span>

                    </li>
                  ))}

                </ul>

              </div>

            </div>
          ))}

        </div>

        {/* View More Button */}
        {courses.length > 3 && (
          <div className="text-center mt-12">

            <button
              onClick={() => setShowAll(!showAll)}
              className="btn bg-[#801717] hover:bg-red-900 text-white text-lg border-none px-8 py-6"
            >
              {showAll ? "Show Less" : "View More Courses"}
            </button>

          </div>
        )}

      </div>

    </section>
  );
}