"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function CourseOverviewSection() {

  /* =========================
     🔹 NAV LINKS
  ========================== */
  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#features" },
    { label: "Placements", href: "#placements" },
    { label: "Certification", href: "#certification" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Projects", href: "#projects" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQs", href: "#faqs" },
  ];

  /* =========================
     🔹 HIGHLIGHTS
  ========================== */
  const highlights = [
    "100% Placement Support",
    "Unlimited Course Repeats",
    "Mock Interviews",
    "1:1 Doubt Sessions",
    "Flexible Timing",
    "Real Industry Projects",
  ];

  return (
    <>
      {/* =========================
         STICKY NAVBAR
      ========================== */}
      <div className="sticky top-2 z-40 bg-white border-b border-gray-200 shadow-sm">

        <div className="max-w-8xl mx-auto px-6 ">

          <div className="flex items-center justify-around overflow-x-auto whitespace-nowrap">

            {/* NAV LINKS */}
            <div className="flex items-center gap-12 min-w-max">

              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`py-6 text-[18px] font-medium transition border-b-2  ${
                    index === 0
                      ? "border-[#3b6fc4] text-[#3b6fc4] "
                      : "border-transparent hover:text-[#3b6fc4]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

            </div>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="hidden lg:flex bg-[#3b6fc4] hover:bg-[#2f5cab] transition text-white px-8 py-4 rounded-md font-semibold"
            >
              Enroll Now
            </Link>

          </div>

        </div>

      </div>

      {/* =========================
          OVERVIEW SECTION
      ========================== */}
      <section
        id="overview"
        className="py-16 bg-white"
      >
        <div className="max-w-8xl mx-auto px-6 md:px-15 grid lg:grid-cols-[1fr_420px] gap-16">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div>

            {/* TITLE */}
            <h2 className="text-5xl font-bold text-[#111827] mb-8 leading-tight">
              Industrial Automation Course Overview
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[20px] leading-[44px] text-[#1f2937] mb-12">
              Our Industrial Automation Course is carefully designed
              to bridge the gap between theoretical and practical
              industrial requirements. Learn PLC, SCADA, HMI,
              Robotics, DCS, and real-time automation systems with
              hands-on projects and complete placement support.
            </p>

            {/* SUCCESS IMAGE */}
            <div className="mb-20">

              <Image
                src="/courses/success_img.jpg"
                alt="Success Process"
                width={700}
                height={500}
                className="w-full max-w-4xl"
              />

            </div>

            {/* =========================
                FEATURES SECTION
            ========================== */}
            <div id="features">

              {/* HEADING */}
              <h2 className="text-5xl font-bold text-[#111827] mb-15 ">
                Key Highlights of Industrial Automation Course
              </h2>

              {/* GRID */}
              <div className="grid md:grid-cols-3 gap-8">

                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-4 flex items-center gap-5 hover:shadow-md transition"
                  >

                    {/* ICON */}
                    <CheckCircle2
                      size={36}
                      className="text-[#c7d6f2]"
                    />

                    {/* TEXT */}
                    <h3 className="text-[20px] font-medium text-[#111827]">
                      {item}
                    </h3>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* =========================
              RIGHT SIDEBAR
          ========================== */}
          <div className="space-y-10">

            {/* FORM */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-28">

              {/* TOP */}
              <div className="bg-[#faf3ef] py-8 px-6">

                <h3 className="text-3xl font-semibold text-center text-[#111827]">
                  Request more information
                </h3>

              </div>

              {/* FORM */}
              <div className="p-8">

                <form className="space-y-8">

                  {/* INPUT */}
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border-b border-gray-300 pb-4 text-[20px] focus:outline-none"
                  />

                  {/* INPUT */}
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full border-b border-gray-300 pb-4 text-[20px] focus:outline-none"
                  />

                  {/* INPUT */}
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full border-b border-gray-300 pb-4 text-[20px] focus:outline-none"
                  />

                  {/* TEXTAREA */}
                  <textarea
                    rows={3}
                    placeholder="Message"
                    className="w-full border-b border-gray-300 pb-4 text-[20px] resize-none focus:outline-none"
                  />

                  {/* CAPTCHA
                  <div className="border rounded-md p-5 bg-[#fafafa]">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 border-2 rounded"></div>
                      <span className="text-gray-700">
                        I'm not a robot
                      </span>
                    </div>
                  </div> */}

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-[#3b6fc4] hover:bg-[#2f5cab] transition text-white py-5 rounded-md text-2xl font-semibold"
                  >
                    Submit
                  </button>

                </form>

              </div>

            </div>

            {/* CORPORATE TRAINING */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 text-center">

              <h3 className="text-4xl font-bold mb-6">
                Corporate Training
              </h3>

              <p className="text-[22px] text-gray-600 mb-10">
                Enterprise training for teams
              </p>

              <Link
                href="/corporate-training"
                className="block bg-[#3b6fc4] hover:bg-[#2f5cab] transition text-white py-5 rounded-md text-2xl font-semibold"
              >
                Get a quote
              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}