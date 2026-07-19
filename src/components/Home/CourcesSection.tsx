"use client";

import { Download, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BrochurePopup from "@/components/common/BrochurePopup";
import { useState } from "react";
import { courses } from "@/data/HomeCoursesData";

const categories = [
  "Top Courses",
  "Full Industrial Automation",
  "Panel Design",
  "Industrial IoT",
  "Electrical Design",
  "SCADA & HMI",
  "PLC Vendor Training",
  "VFD Drive Training",
  "Servo & Drive Systems",
  "Job-Oriented Training",
  "Customized Industrial Training",
];

export default function CoursesSection() {


  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Top Courses");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBrochure, setSelectedBrochure] = useState("");

  const visibleCourses = showAll
    ? courses
    : courses.slice(0, 3);


  return (
    <section className="py-18 bg-white  text-gray-900">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="mb-12 text-center">

          <h2 className="text-[34px] md:text-[45px] font-bold leading-snug mb-10">
            DAIC Course & Training Programs
          </h2>

          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(item)}
                className={`badge badge-lg py-5 px-5 font-medium cursor-pointer transition-all duration-300
                ${
                  selectedCategory === item
                    ? "bg-[#801717] text-white border-[#801717]"
                    : "border border-[#801717] bg-white text-gray-700 hover:bg-red-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

        </div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {visibleCourses.map((course, index) => (

            <div
              key={index}
              className={`card bg-base-50 shadow-lg border transition-all duration-300 rounded-xl
                ${
                  selectedCategory !== "Top Courses" &&
                  selectedCategory === course.category
                    ? "border-[#801717] shadow-2xl scale-[1.05]"
                    : "border-gray-200"
                }`}>

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

                <div className="badge badge-outline border-red-900 text-red-800">
                  Duration: {course.duration}
                </div>

                <div className="card-actions mt-5 grid  grid-col-1 md:grid-cols-2 gap-5">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline bg-red-900 w-full text-white text-lg py-5"
                  >
                    View Details
                  </a>
                  <button
                    onClick={() => {
                      setSelectedBrochure(course.title);
                      setShowPopup(true);
                    }}
                    className="btn btn-outline border-[#801717] text-[#801717] hover:bg-[#801717] hover:text-white text-lg py-5 w-full"
                  >
                    <Download size={18} />
                    Brochure
                  </button>

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

      <BrochurePopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        brochureLink="/brochure/industrial-automation.pdf"
        courseName={selectedBrochure}
      />
      
    </section>
  );
}