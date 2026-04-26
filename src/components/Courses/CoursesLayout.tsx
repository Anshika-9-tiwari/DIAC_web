"use client";

import { useState } from "react";
import Link from "next/link";
import { courses } from "@/data/coursesData";
import { Star, Calendar, Clock, X } from "lucide-react";

export default function CoursesLayout() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* MOBILE BUTTON */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setOpen(true)}
            className="w-full border border-[#801717] text-[#801717] py-3 rounded-lg font-semibold hover:bg-[#801717] hover:text-white transition"
          >
            Browse All Courses
          </button>
        </div>

        {/* DRAWER OVERLAY */}
        {open && (
          <div className="fixed inset-0 z-50 flex">

            {/* BACKDROP */}
            <div
              className="bg-black/40 w-full"
              onClick={() => setOpen(false)}
            />

            {/* DRAWER */}
            <div className="w-[280px] bg-white h-full p-5 shadow-xl overflow-y-auto">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">All Courses</h3>
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              {/* LIST */}
              <div className="space-y-2">
                {courses.map((course, i) => (
                  <Link
                    key={i}
                    href={`/courses/${course.slug}`}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm hover:bg-gray-100"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-15">

          {/* SIDEBAR (DESKTOP ONLY) */}
          <div className="hidden lg:block bg-[#e9edf5] rounded-xl p-4 h-fit sticky top-24">

            <div className="px-4 py-3 bg-[#d6deea] rounded-lg text-lg font-semibold">
              All Courses
            </div>

            {courses.map((course, i) => (
              <Link
                key={i}
                href={`/courses/${course.slug}`}
                className="block px-4 py-3 rounded-lg text-sm hover:bg-[#dde4ef]"
              >
                {course.name}
              </Link>
            ))}

          </div>

          {/* COURSES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border-t-2 border-red-800"
              >

                {/* HEADER */}
                <div className="bg-[#dfe6f1] p-5 font-semibold text-gray-800">
                  {course.name}
                </div>

                {/* CONTENT */}
                <div className="p-5 text-sm text-gray-600 space-y-3">

                  <div className="flex items-center gap-2">
                    <Star className="text-red-800" size={16} />
                    {course.reviews} reviews
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    Next Batch – 2 May, 2026
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {course.duration} • Online / Offline
                  </div>

                </div>

                {/* BUTTON */}
                <div className="p-5">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="block text-center border border-[#801717] text-[#801717] py-2 rounded-lg hover:bg-[#801717] hover:text-white transition"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}