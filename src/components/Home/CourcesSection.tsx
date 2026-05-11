"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Top Courses",
    link: "/courses",
  },

  {
    name: "Industrial Automation Training",
    link: "/courses/industrial-automation",
  },

  {
    name: "PLC Training",
    link: "/courses/plc-training",
  },

  {
    name: "HMI Training",
    link: "/courses/scada-and-hmi",
  },

  {
    name: "Drives & Motors",
    link: "/courses/drives-and-motors",
  },

  {
    name: "Summer/Winter Trainings",
    link: "/courses/summer-winter-training",
  },

  {
    name: "Panel Designing & AutoCAD",
    link: "/courses/panel-designing-and-autocad",
  },

  {
    name: "SCADA Training",
    link: "/courses/scada-and-hmi",
  },
];

const courses = [
  {
    title: "Industrial Automation Training",
    image: "/training-bnner.jpg",
    duration: "6 Months",
    students: "50k Students",
    desc: "Hands-on training with PLC, SCADA, HMI & Industrial Projects",
    link: "/courses/industrial-automation",
  },

  {
    title: "PLC Programming Training",
    image: "/training-bnner.jpg",
    duration: "3 Months",
    students: "20k Students",
    desc: "Learn PLC programming with real-time industrial applications",
    link: "/courses/plc-training",
  },

  {
    title: "SCADA & HMI Training",
    image: "/training-bnner.jpg",
    duration: "4 Months",
    students: "14k Students",
    desc: "Master SCADA systems and HMI design with live projects",
    link: "/courses/scada-and-hmi",
  },

  {
    title: "Drives & Motors Training",
    image: "/training-bnner.jpg",
    duration: "6 Months",
    students: "60k Students",
    desc: "Learn industrial drives, motors and automation systems",
    link: "/courses/drives-and-motors",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-12 bg-white mb-5">

      <div className="max-w-7xl mx-auto px-8">

        {/* HEADING */}
        <div className="mb-12 text-center">

          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8">
            DAIC Course & Training Programs
          </h2>

          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3">

            {categories.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`px-3 md:px-5 py-[6px] rounded-xl border border-gray-500 text-sm md:text-[14px] font-semibold transition
                  
                  ${
                    index === 0
                      ? "bg-[#8b0000] text-white border-[#8b0000]"
                      : "bg-white border-black hover:bg-[#8b0000] hover:text-white hover:border-[#8b0000]"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}

          </div>

        </div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] rounded-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
            >

              {/* IMAGE */}
              <div className="relative h-50">

                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="text-xl font-semibold mb-3 leading-snug min-h-[60px]">
                  {course.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {course.desc}
                </p>

                {/* RATING */}
                <div className="text-red-900 text-sm mb-2">
                  ★★★★★
                  <span className="text-gray-600 ml-2 text-xs">
                    {course.students}
                  </span>
                </div>

                {/* DURATION */}
                <p className="text-[#801717] font-semibold text-sm mb-5">
                  Duration: {course.duration}
                </p>

                {/* BUTTON */}
                <Link
                  href={course.link}
                  className="block text-center bg-[#8b0000] text-white py-3 rounded-md font-medium hover:bg-red-900 transition"
                >
                  View Details
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}