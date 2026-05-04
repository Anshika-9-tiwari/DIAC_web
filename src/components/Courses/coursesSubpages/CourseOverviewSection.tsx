"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CourseOverviewSection() {
  return (
    <section className="bg-white py-18">
        {/* TABS */}
        <div className="flex flex-wrap gap-15 border-b border-gray-300 px-13 pb-4 mb-15 text-md font-medium">
            {[
            "Overview",
            "Features",
            "Placements",
            "Certification",
            "Curriculum",
            "Projects",
            "Reviews",
            "FAQs",
            ].map((tab, i) => (
            <button
                key={i}
                className={`pb-2 ${
                i === 0
                    ? "border-b-2 border-[#801717] text-[#801717]"
                    : "text-gray-600 hover:text-[#801717] hover:border-b-2"
                }`}
            >
                {tab}
            </button>
            ))}
        </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_350px] gap-10">

        {/* LEFT CONTENT */}
        <div>

          {/* TITLE */}
          <h2 className="text-3xl font-bold text-[#0b1f3a] mb-5">
            Industrial Automation Course Overview
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-15 max-w-2xl">
            Learn Industrial Automation with PLC, SCADA, HMI, Robotics and real
            industrial projects. This course is designed to make you job-ready
            with strong practical exposure and placement support.
          </p>

          {/*  SUCCESS STEPS (SIMPLIFIED MATCH) */}
          <h3 className="text-xl font-semibold mb-10">
            5 Stages Of Your Success
          </h3>

          <div className="flex flex-wrap gap-8 mb-22">
            {[
              "Gain Practical Skills",
              "Resume Update",
              "Prepare for Interviews",
              "Apply for Jobs",
              "Get Placement",
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#f7f7f7] px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition hover:scale-105"
              >
                <div className="w-8 h-8 bg-[#801717]/10 text-[#801717] flex items-center justify-center rounded-full font-bold">
                  {i + 1}
                </div>
                <span className="text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>

          {/*  HIGHLIGHTS */}
          <h3 className="text-2xl font-bold mb-12">
            Key Highlights of Industrial Automation Course
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "100% Placement Support",
              "Unlimited Course Repeats",
              "Mock Interviews",
              "1:1 Doubt Sessions",
              "Flexible Timing",
              "Real Industry Projects",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#f9fafc] p-4 rounded-lg shadow-sm transition hover:shadow-lg"
              >
                <CheckCircle className="text-[#801717]" size={18} />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}

          </div>

        </div>

        {/* 🔹 RIGHT SIDEBAR */}
        <div className="space-y-28">

          {/* FORM */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 mt-4 p-10 ">
            <h3 className="font-semibold mb-6 text-center text-[#0b1f3a]">
              Request more information
            </h3>

            <form className="space-y-4">

              <input
                placeholder="Your name"
                className="w-full border-b border-gray-300 py-2 focus:outline-none"
              />

              <input
                placeholder="Your email"
                className="w-full border-b border-gray-300 py-2 focus:outline-none"
              />

              <input
                placeholder="Phone"
                className="w-full border-b py-2 border-gray-300 focus:outline-none"
              />

              <textarea
                placeholder="Message"
                className="w-full border-b border-gray-300 py-2 focus:outline-none"
              />

              <button className="w-full shadow-xl border border-gray-200 hover:bg-[#801717] hover:text-white py-3 rounded-lg font-medium transition">
                Submit
              </button>

            </form>
          </div>

          {/* CORPORATE CTA */}
          <div className="bg-[#fffff] p-6 rounded-xl border border-gray-100 text-center shadow-md transition hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">
              Corporate Training
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Enterprise training for teams
            </p>

            <Link href={"/contact"}>
              <button className="bg-[#801717] text-white px-5 py-2 rounded-lg cursor-pointer">
                Get a Quote
              </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}