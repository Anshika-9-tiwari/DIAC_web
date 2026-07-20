"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  CircleCheckBig,
  Download,
  ArrowRight,
} from "lucide-react";

import BrochurePopup from "@/components/common/BrochurePopup";

const highlights = [
  "Industry-Oriented Practical Training",
  "Hands-On Learning with Live Industrial Projects",
  "Training on PLC, SCADA, HMI, VFD & Automation Systems",
  "Dedicated Placement & Career Assistance",
];

export default function CoursesHero() {
  const [showBrochurePopup, setShowBrochurePopup] =
    useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fffafa] to-[#f8eeee]">

        {/* Background */}
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-[#801717]/5 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#801717]/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-20 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left content  */}
            <div>

              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#801717] text-white text-xs md:text-sm font-medium tracking-wide mb-6">
                Industry-Focused Training Programs
              </div>

              {/* Heading */}
              <h1 className="text-[38px] md:text-5xl lg:text-[55px] font-bold text-gray-900 leading-[1.15] mb-6">
                Build Industry-Ready Skills with

                <span className="block text-[#801717] mt-2">
                  Professional Automation Training
                </span>
              </h1>

              {/* Description */}
              <p className="text-[16px] md:text-lg text-gray-600 leading-8 max-w-2xl mb-8">
                Explore DIAC&apos;s job-oriented industrial training programs
                designed for students, fresh graduates, engineers, and working
                professionals. Gain practical experience with real industrial
                hardware, modern automation technologies, and live projects.
              </p>

              {/* Highlights points*/}
              <div className="space-y-4 mb-10">

                {highlights.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >

                    {/* Check Icon */}
                    <div className="w-7 h-7 rounded-lg bg-[#801717] flex items-center justify-center shrink-0 mt-0.5">
                      <CircleCheckBig
                        size={17}
                        className="text-white"
                      />
                    </div>
                    <p className="text-[16px] md:text-[17px] font-medium text-gray-700 leading-7">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

                {/* Explore Courses */}
                <Link
                  href="#courses"
                  className="inline-flex items-center justify-center gap-2 bg-[#801717] hover:bg-[#681212] text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-red-900/10"
                >
                  Explore Courses

                  <ArrowRight size={19} />
                </Link>

                {/* Download Brochure */}
                <button
                  type="button"
                  onClick={() =>
                    setShowBrochurePopup(true)
                  }
                  className="inline-flex items-center justify-center gap-2 bg-white border border-[#801717] text-[#801717] hover:bg-[#801717] hover:text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
                >
                  <Download size={19} />
                   Download Brochure
                </button>
              </div>
            </div>
            
            {/* Right img */}

            <div className="relative lg:pl-6">

              {/* Main Image Card */}
              <div className="relative">

                {/* Decorative Background */}
                <div className="absolute -inset-3 md:-inset-5 bg-gradient-to-br from-[#801717]/10 to-transparent rounded-[35px]" />

                <div className="relative bg-white p-3 md:p-4 rounded-[28px] shadow-2xl border border-gray-100">

                  <div className="relative w-full aspect-[4/3] rounded-[22px] overflow-hidden">
                    <Image
                      src="/courses/corporatebg.png"
                      alt="DIAC Industrial Automation Training"
                      fill
                      priority
                      className="object-cover"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  </div>
                </div>

                {/* Floating Experience Card */}
                <div className="absolute -bottom-6 left-3 md:-left-6 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#801717] text-white flex items-center justify-center font-bold text-lg">
                      15+
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-[17px]">
                        Years of Experience
                      </p>
                      <p className="text-sm text-gray-500">
                        Industrial Training Excellence
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Placement Card */}
                <div className="hidden sm:block absolute top-8 -right-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4">

                  <p className="text-2xl font-bold text-[#801717]">
                    100+
                  </p>

                  <p className="text-sm font-medium text-gray-600">
                    Hiring Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download syllabus */}
      <BrochurePopup
        isOpen={showBrochurePopup}
        onClose={() =>
          setShowBrochurePopup(false)
        }
        brochureLink="/brochures/industrial-automation.pdf"
        courseName="All Courses"
      />
    </>
  );
}