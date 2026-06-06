"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    name: "Top Courses",
    link: "/courses",
  },

  {
    name: "Full Industrial Automation",
    link: "/courses/industrial-automation",
  },

  {
    name: "Job-Oriented Training",
    link: "/courses/plc-training",
  },

  {
    name: "Servo & Drive Systems",
    link: "/courses/scada-and-hmi",
  },

  {
    name: " Electrical Design",
    link: "/courses/drives-and-motors",
  },

  {
    name: "PLC Vendor Training",
    link: "/courses/summer-winter-training",
  },

  {
    name: "SCADA & HMI",
    link: "/courses/panel-designing-and-autocad",
  },

  {
    name: "VFD Drive Training",
    link: "/courses/scada-and-hmi",
  },
  {
    name: "Industrial IoT",
    link: "/courses/industrial-iot",
  },
  {
    name: "Panel Design",
    link: "/courses/panel-designing-and-autocad",
  },
  {
    name: "Customized Industrial Training",
    link: "/courses/customized-industrial-training",
  }
];

const courses = [
  {
    title: "Full Industrial Automation Training",
    image: "/home_courses/full_industrial_automation.png",
    duration: "3 Months",
    students: "220,000+ Students",
    desc: "Hands-on training with PLC, SCADA, HMI & Industrial Projects",
    link: "/courses/industrial-automation",
  },

  {
    title: "PLC Vendor Training",
    image: "/home_courses/plc_vender_training.png",
    duration: "1 Months",
    students: "40,000+ Students",
    desc: "Learn PLC programming with real-time industrial applications",
    link: "/courses/plc-training",
  },

  {
    title: "SCADA & HMI Training",
    image: "/home_courses/scada_hmi.png",
    duration: "1 Months",
    students: "18,000+ Students",
    desc: "Master SCADA systems and HMI design with live projects",
    link: "/courses/scada-and-hmi",
  },

  {
    title: "Servo & Drive Systems",
    image: "/home_courses/scada_hmi.png",
    duration: "1 Months",
    students: "15,000+ Students",
    desc: "Learn industrial drives, motors and automation systems",
    link: "/courses/drives-and-motors",
  },
  {
    title: "Job-Oriented Training",
    image: "/home_courses/job-oriented_training.png",
    duration: "3 Months",
    students: "150,000+ Students",
    desc: "Career-focused training with practical projects, interview preparation, and placement assistance for freshers.",
    link: "/courses/industrial-automation",
  },

  {
    title: "Electrical Design",
    image: "/home_courses/electrical_design.png",
    duration: "1 Months",
    students: "12,000+ Students",
    desc: "Learn electrical drafting, schematic design, panel layouts, and industry-standard design practices.",
    link: "/courses/plc-training",
  },

  {
    title: "VFD Drive Training",
    image: "/home_courses/vfd_drive.png",
    duration: "1 Months",
    students: "18,000+ Students",
    desc: "Understand variable frequency drives, motor control systems, commissioning, and troubleshooting techniques.",
    link: "/courses/scada-and-hmi",
  },

  {
    title: "Panel Design",
    image: "/home_courses/panel_design.png",
    duration: "1 Months",
    students: "5,000+ Students",
    desc: "Master electrical panel design, component selection, wiring standards, and documentation practices.",
    link: "/courses/drives-and-motors",
  },

  {
    title: "Customized Industrial Training",
    image: "/home_courses/customise_industrial.png",
    duration: "1 Months",
    students: "11,000+ Students",
    desc: "Tailored training programs designed to meet specific industrial requirements and workforce needs.",
    link: "/courses/scada-and-hmi",
  },

  {
    title: "Industrial IoT",
    image: "/home_courses/industrial_iot.png",
    duration: "1 Months",
    students: "8,000+ Students",
    desc: "Explore Industry 4.0 technologies, smart manufacturing, sensors, cloud connectivity, and data analytics.",
    link: "/courses/drives-and-motors",
  },
];

export default function CoursesSection() {

   const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <section className="py-12 bg-white  text-gray-800">

      <div className="max-w-7xl mx-auto px-8">

        {/* HEADING */}
        <div className="mb-12 text-center">

          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-10">
            DAIC Course & Training Programs
          </h2>

          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap justify-center gap-5">

            {categories.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`badge badge-lg py-4 px-5 font-medium transition-all duration-300

                ${
                  index === 0
                    ? "badge-error text-white"
                    : "badge-outline badge-accent text-gray-700 hover:border-[#801717] hover:text-[#801717] hover:bg-red-50"
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>

        </div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {visibleCourses.map((course, index) => (

            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-2xl border border-base-200 transition-all duration-300 rounded-xl"
            >

              {/* IMAGE */}
              <figure className="relative h-56">

                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />

              </figure>

              {/* CONTENT */}
              <div className="card-body">

                <h3 className="card-title text-[22px] min-h-[70px]">
                  {course.title}
                </h3>

                <p className="text-[16px] text-gray-600">
                  {course.desc}
                </p>

                <div className="flex items-center gap-4 text-sm mt-2 mb-3">

                  <span className="text-yellow-400 text-[18px]">
                    ★★★★★
                  </span>

                  <span className="text-gray-500">
                    {course.students}
                  </span>

                </div>

                <div className="badge badge-outline badge-error">
                  Duration: {course.duration}
                </div>

                <div className="card-actions mt-5 grid  grid-col-1 md:grid-cols-2 gap-3">

                  <Link
                    href={course.link}
                    className="btn btn-outline bg-red-900 w-full text-white text-lg py-5 "
                  >
                    View Details
                  </Link>
                  <Link
                    href="/brochures/industrial-automation.pdf"
                    target="_blank"
                    className="btn btn-outline border-[#801717] text-[#801717] hover:bg-[#801717] hover:text-white text-lg py-5 w-full"
                  >
                    Download Brochure
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* SHOW ALL BUTTON */}
        {courses.length > 3 && (

          <div className="text-center mt-15">

            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline px-8 py-6 text-xl border-[#801717] text-red-900 hover:bg-[#801717] hover:text-white transition-all duration-300"
            >
              {showAll
                ? "Show Less"
                : `View More Courses`}
            </button>

          </div>

        )}

      </div>

    </section>
  );
}