"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { courses } from "@/data/coursesData";
import {
  Star,
  Calendar,
  Clock,
  X,
} from "lucide-react";

export default function CoursesLayout() {
  const [open, setOpen] = useState(false);

  // Active course
  const [selectedCourse, setSelectedCourse] =
    useState<string | null>(null);

  // card references
  const courseRefs = useRef<
    Record<string, HTMLDivElement | null>
  >({});

  const handleCourseClick = (slug: string) => {
    setSelectedCourse(slug);

    // Close mobile drawer
    setOpen(false);

    setTimeout(() => {
      courseRefs.current[slug]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  return (
    <section
      id="courses"
      className="py-16 md:py-20 bg-white text-gray-900 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* mobile button*/}
        <div className="lg:hidden mb-8">

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full border border-[#801717] text-[#801717] py-3 rounded-lg font-semibold hover:bg-[#801717] hover:text-white transition"
          >
            Browse All Courses
          </button>

        </div>

        {/* mobile sidbar */}
        {open && (

          <div className="fixed inset-0 z-50">

            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <div className="absolute left-0 top-0 w-[290px] max-w-[85%] bg-white h-full p-5 shadow-2xl overflow-y-auto">

              {/* Header */}
              <div className="flex justify-between items-center mb-5 pb-4 border-b border-gray-200">

                <h3 className="font-semibold text-lg text-gray-900">
                  All Courses
                </h3>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
                >
                  <X size={21} />
                </button>

              </div>

              {/* Course List */}
              <div className="space-y-2">

                {courses.map((course) => (

                  <button
                    type="button"
                    key={course.slug}
                    onClick={() =>
                      handleCourseClick(course.slug)
                    }
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 cursor-pointer
                      ${
                        selectedCourse === course.slug
                          ? "bg-[#801717] text-white font-semibold shadow-md"
                          : "text-gray-700 hover:bg-gray-100"
                      }
                    `}
                  >
                    {course.name}
                  </button>

                ))}

              </div>

            </div>

          </div>

        )}
        
        {/* main layouts */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">

          {/* Desktop */}
          <div className="hidden lg:block bg-white rounded-xl border border-gray-200 shadow-lg p-4 h-fit sticky top-28">

            {/* Sidebar */}
            <div className="px-4 py-3 mb-3 bg-gray-50 border border-gray-200 rounded-lg text-lg font-semibold text-gray-900">
              All Courses
            </div>

            {/* Course List */}
            <div className="space-y-1">

              {courses.map((course) => (

                <button
                  type="button"
                  key={course.slug}
                  onClick={() =>
                    handleCourseClick(course.slug)
                  }
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 cursor-pointer
                    ${
                      selectedCourse === course.slug
                        ? "bg-[#801717] text-white font-semibold shadow-md"
                        : "text-gray-700 hover:bg-[#f5eeee] hover:text-[#801717]"
                    }
                  `}
                >
                  {course.name}
                </button>

              ))}

            </div>

          </div>

          {/* courses card */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {courses.map((course) => {

              const isActive =
                selectedCourse === course.slug;

              return (

                <div
                  key={course.slug}
                  ref={(element) => {
                    courseRefs.current[course.slug] =
                      element;
                  }}
                  className={`
                    relative bg-white rounded-xl overflow-hidden
                    border-2 transition-all duration-500
                    ${
                      isActive
                        ? "border-[#801717] shadow-2xl scale-[1.02]"
                        : "border-gray-100 shadow-md hover:shadow-xl"
                    }
                  `}
                >

                  {/* Active card */}
                  {isActive && (

                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#801717]" />

                  )}

                  <div
                    className={`
                      p-5 font-semibold text-[17px]
                      transition-colors duration-300
                      ${
                        isActive
                          ? "bg-[#801717] text-white"
                          : "bg-white text-gray-800 border-b border-gray-100"
                      }
                    `}
                  >
                    {course.name}
                  </div>

                  <div className="p-5 text-sm text-gray-600 space-y-4">

                    <div className="flex items-center gap-2">

                      <Star
                        className="text-[#801717]"
                        size={17}
                      />

                      <span>
                        {course.reviews} reviews
                      </span>

                    </div>
                    <div className="flex items-center gap-2">

                      <Calendar
                        className="text-[#801717]"
                        size={17}
                      />

                      <span>
                        Next Batch – 2 Aug, 2026
                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      <Clock
                        className="text-[#801717]"
                        size={17}
                      />

                      <span>
                        {course.duration} • Online / Offline
                      </span>

                    </div>

                  </div>

                  <div className="p-5 pt-2">

                    <Link
                      href={`/courses/${course.slug}`}
                      className="block text-center border border-[#801717] text-[#801717] font-medium shadow-sm py-3 rounded-lg hover:bg-[#801717] hover:text-white transition-all duration-300"
                    >
                      View Details
                    </Link>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}