"use client";

import { Star, Calendar, CheckCircle } from "lucide-react";

export default function CourseSubpageHero() {
  return (
    <section className="bg-[#f4f7fb] py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">

        {/* 🔹 LEFT CONTENT */}
        <div>

          {/* TITLE */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#801717]/10 rounded-full flex items-center justify-center">
              ⚙️
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0b1f3a]">
              Industrial Automation Course
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-12 max-w-2xl">
            Build your career in Industrial Automation by mastering PLC, SCADA,
            HMI, Robotics & real-world industrial projects with strong placement support.
          </p>

          {/* RATINGS */}
          <div className="flex flex-wrap items-center gap-10 mb-12 text-sm">

            <div className="flex items-center gap-1 text-red-800">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <span className="text-gray-700 ml-2">
                4.8 (8600+ Reviews)
              </span>
            </div>

            <span className="text-gray-600">Google 4.8</span>
            <span className="text-gray-600">Justdial 4.7</span>
            <span className="text-gray-600">Trustpilot 5.0</span>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 gap-8 mb-14 text-md">

            <div className="flex gap-4">
              <CheckCircle className="text-[#801717] mt-1" size={18} />
              <div>
                <p className="font-medium">Job Guarantee Program</p>
                <p className="text-gray-600 text-xs">
                  100% Support Until You're Hired
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-[#801717] mt-1" size={18} />
              <div>
                <p className="font-medium">Course Duration</p>
                <p className="text-gray-600 text-xs">
                  6 Months + Lifetime Access
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-[#801717] mt-1" size={18} />
              <div>
                <p className="font-medium">Expert Mentorship</p>
                <p className="text-gray-600 text-xs">
                  Learn from Industry Experts
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="text-[#801717] mt-1" size={18} />
              <div>
                <p className="font-medium">Flexible Learning</p>
                <p className="text-gray-600 text-xs">
                  Classroom / Online Modes
                </p>
              </div>
            </div>

          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-6">
            <button className="bg-[#801717] text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800 transition">
              Download Syllabus
            </button>

            <button className="border border-[#801717] text-[#801717] px-6 py-3 rounded-lg hover:bg-[#801717] hover:text-white transition">
              Placement Report
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Book Free Demo
            </button>
          </div>

        </div>

        {/* 🔹 RIGHT SIDE */}
        <div className="space-y-6 justify-items-center items-center">

          {/* VIDEO */}
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src="/training-bnner.jpg"
              alt="Course Video"
              className="w-full h-[220px] object-cover"
            />

            {/* PLAY BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 p-4 rounded-full shadow">
                ▶
              </div>
            </div>
          </div>

          {/* NEXT BATCH */}
          <div className="flex items-center gap-3 bg-[#f1e8e0] text-[#0b1f3a] px-5 py-3 rounded-lg w-fit">
            <Calendar size={16} />
            <span className="text-sm font-medium">
              Next Batch: 2 May, 2026
            </span>
          </div>

          {/* CERTIFICATION BOX */}
          <div className=" w-fit bg-white border rounded-xl p-4 shadow-sm">
            <p className="text-[#801717] font-semibold text-sm">
              Accredited by NASSCOM
            </p>
            <p className="text-gray-600 text-xs">
              Approved by Government of India
            </p>
          </div>

          {/* MSME LOGO */}
          <div className="bg-white rounded-xl p-4 shadow-sm w-fit">
            <img
              src="/diacred.png"
              alt="MSME"
              className="h-12 object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}