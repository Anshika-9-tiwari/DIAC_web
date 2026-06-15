"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CircleCheckBig,
  Download,
  PlayCircle,
} from "lucide-react";

export default function CourseSubpageHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-red-50 py-14 lg:py-18">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#801717]/2 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#801717]/3 rounded-full blur-3xl" />

      <div className="relative max-w-8xl mx-auto px-8 md:px-12">

        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-[#801717] text-sm font-medium mb-8">
              <PlayCircle size={16} />
              Job-Oriented Industrial Training Program
            </div>

            {/* Title */}
            <div className="flex items-center gap-4 mb-8">

              <div className="w-15 h-15 rounded-4xl bg-white shadow-lg flex items-center justify-center border border-red-100">
                <Image
                  src="/courses/automation.png"
                  alt="Automation"
                  width={38}
                  height={38}
                />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
                Industrial Automation Training
              </h1>

            </div>

            {/* Tick Paragraph 1 */}
            <div className="flex items-start gap-3 md:gap-4  rounded-2xl px-1 md:px-6 py-4  mb-2">

              <CircleCheckBig
                size={24}
                className="text-[#801717] mt-1 shrink-0"
              />

              <p className="text-[18px] leading-8 text-gray-700">
                Industrial Automation Training Program at DIAC is designed to equip students, working professionals, and corporate teams with the practical skills required in today's automated industries. This comprehensive program covers Relay Logic Control (RLC), PLC Programming, HMI, SCADA, Industrial Networking, VFD & Motion Control, Process Instrumentation, Panel Designing, and Siemens TIA Portal.
              </p>

            </div>

            {/* Tick Paragraph 2 */}
            <div className="flex items-start gap-3 md:gap-4 rounded-2xl px-1 md:px-6 py-2 mb-10">

             <CircleCheckBig
                size={24}
                className="text-[#801717] mt-1 shrink-0"
              />

              <p className="text-[18px] leading-8 text-gray-700">
                Through a combination of classroom learning, hands-on laboratory sessions, and real-world industrial projects, participants gain the knowledge and confidence to work on modern automation systems used across manufacturing, process, power, automotive, pharmaceutical, and infrastructure industries.
              </p>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 px-6">

              <Link
                href="/downloads/industrial-automation-syllabus.pdf"
                className="inline-flex items-center gap-2 bg-[#801717] hover:bg-red-800 text-white px-4 md:px-7 py-3 md:py-4 rounded-xl font-semibold transition"
              >
                <Download size={18} />
                Download Syllabus
              </Link>

              <Link
                href="/placement"
                className="border border-[#801717] text-[#801717] hover:bg-[#801717] hover:text-white px-6 md:px-7 py-3 md:py-4 rounded-xl font-semibold transition"
              >
                Placement Report
              </Link>

              <Link
                href="/contact"
                className="border border-[#801717] text-[#801717] hover:bg-[#801717] hover:text-white px-6 md:px-7 py-3 md:py-4 rounded-xl font-semibold transition"
              >
                Book Free Demo
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE VIDEO */}
          <div className="lg:sticky lg:top-28">

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">

              <div className="relative aspect-video">

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/R4eJncL7bP8"
                  title="Industrial Automation Training"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}