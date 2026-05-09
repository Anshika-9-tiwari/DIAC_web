"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Calendar,
  CheckCircle2,
} from "lucide-react";

import {
  FaGoogle,
} from "react-icons/fa";


export default function CourseSubpageHero() {
  return (
    <section className="relative overflow-hidden bg-[#eef3fb] py-16 lg:py-20">

      {/* BACKGROUND SHAPES */}
<<<<<<< HEAD
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#d6e3f7] rotate-43 translate-x-55 -translate-y-16"></div>
=======
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e7edf7] rotate-45 translate-x-48 -translate-y-16"></div>
>>>>>>> 876578f365226e3727cb3c1b37a2fa376013ff2b

      <div className="absolute bottom-0 right-10 w-[300px] h-[290px] bg-[#e7edf7] rotate-45 translate-y-35"></div>

      {/* CONTAINER */}
      <div className="relative max-w-8xl mx-auto px-8 md:px-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-start">

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div>

          {/* TITLE */}
          <div className="flex items-center gap-4 mb-8">

            <div className="w-13 h-13 rounded-full bg-white shadow-md flex items-center justify-center">
              <Image
                src="/courses/Automation.png"
                alt="Automation"
                width={35}
                height={35}
              />
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-[#111827] leading-tight">
              Industrial Automation Course
            </h1>

          </div>

          {/* DESCRIPTION */}
          <p className="text-[18px] leading-[40px] text-[#1f2937] max-w-4xl mb-12">
            Unlock your potential with our industry-leading Industrial
            Automation Course. We transform ambitious learners into
            job-ready automation engineers with hands-on PLC, SCADA,
            HMI, DCS, and Robotics training along with dedicated
            placement support.
          </p>

          {/* RATINGS */}
          <div className="flex flex-wrap items-center gap-8 mb-15">

            {/* STARS */}
            <div className="flex items-center gap-3">

              <div className="flex text-[#f54d0b] gap-1">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>

              <span className="text-xl font-medium">
                4.8
              </span>

              <span className="text-gray-600 text-xl">
                (6354 Reviews)
              </span>

            </div>

            {/* GOOGLE */}
            <div className="flex items-center gap-3">
              <FaGoogle className="text-[#4285F4] text-3xl" />
              <span className="text-xl font-medium">4.8</span>
            </div>

            {/* JUSTDIAL */}
            <div className="flex items-center gap-3">
              <h5 className="font-bold text-2xl text-blue-500">J <span className="text-2xl text-orange-500">D</span></h5>
              <span className="text-xl font-medium">4.7</span>
            </div>

            {/* CUSTOM ICON */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <span className="text-xl font-medium">5.0</span>
            </div>

            {/* CUSTOM ICON */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-red-500"></div>
              <span className="text-xl font-medium">5.0</span>
            </div>

          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 mb-15">

            {/* ITEM */}
            <div className="flex items-start gap-4">

              <CheckCircle2
                className="text-[#801717] mt-1"
                size={22}
              />

              <div>
                <h3 className="font-semibold text-[18px] mb-3">
                  Job Guarantee Program
                </h3>

                <p className="text-[16px] text-[#374151] leading-6">
                  100% Support Until You’re Hired
                </p>
              </div>

            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">

              <CheckCircle2
                className="text-[#801717] mt-1"
                size={22}
              />

              <div>
                <h3 className="font-semibold text-[18px] mb-3">
                  Course Duration
                </h3>

                <p className="text-[16px] text-[#374151] leading-6">
                  6 Months + Life Time Access
                </p>
              </div>

            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">

              <CheckCircle2
                className="text-[#801717] mt-1"
                size={22}
              />

              <div>
                <h3 className="font-semibold text-[18px] mb-3">
                  Expert Mentorship
                </h3>

                <p className="text-[16px] text-[#374151] leading-6">
                  Learn from Industry Experts
                </p>
              </div>

            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4">

              <CheckCircle2
                className="text-[#801717] mt-1"
                size={22}
              />

              <div>
                <h3 className="font-semibold text-[18px] mb-3">
                  Flexible Learning
                </h3>

                <p className="text-[16px] text-[#374151] leading-6">
                  Available in Classroom/Online formats
                </p>
              </div>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">

            {/* BUTTON */}
            <Link
              href="/downloads/industrial-automation-syllabus.pdf"
              className="bg-[#801717] hover:bg-[#801717d9] transition text-white px-6 py-4 rounded-lg font-semibold text-xl"
            >
              Download Syllabus
            </Link>

            {/* BUTTON */}
            <Link
              href="/placement"
              className="border-1 border-[#801717] text-[#0b1f3a] hover:bg-[#801717] hover:text-white transition px-6 py-4 rounded-lg font-semibold text-xl"
            >
              Placement Report
            </Link>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="border-1  border-[#801717] text-[#0b1f3a] hover:bg-[#801717] hover:text-white transition px-6 py-4 rounded-lg font-semibold text-xl"
            >
              Book Free Demo 
            </Link>

          </div>

        </div>

        {/* =========================
            RIGHT CONTENT
        ========================== */}
        <div className="flex flex-col items-center">

          {/* VIDEO */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">

            <Image
              src="/courses/plc-img.jpg"
              alt="Video"
              width={700}
              height={450}
              className="w-full object-cover"
            />

            {/* PLAY BUTTON */}
            <button className="absolute inset-0 flex items-center justify-center">

              <div className="w-24 h-24 rounded-full bg-white/95 flex items-center justify-center shadow-xl">

                <div className="ml-1 w-0 h-0 border-l-[24px] border-l-[#3b6fc4] border-y-[16px] border-y-transparent"></div>

              </div>

            </button>

          </div>

          {/* NEXT BATCH */}
          <div className="mt-10 bg-[#801717] text-white px-10 py-4 flex items-center gap-4 relative border border-[#f6ddb4] rounded-bl-2xl rounded-tr-2xl shadow-md">

            {/* LEFT RIBBON */}
            {/* <div className="absolute left-[-24px] top-0 border-y-[28px] border-r-[24px] border-y-transparent border-r-[#f6ddb4]"></div> */}

            <span className="text-[20px] font-medium">
              Next Batch:
            </span>

            <Calendar size={22} />

            <span className="text-[20px]">
              16 May, 2026
            </span>

          </div>

          {/* NASSCOM */}
          <div className="mt-12 bg-white border border-[#d6dce8] rounded-2xl px-6 py-4 shadow-sm">

            <h3 className="text-[#9b1c31] font-semibold text-[27px] leading-10">
              Accredited by NASSCOM,
            </h3>

            <p className="text-[18px] font-semibold">
              approved by the Government of India
            </p>

          </div>

          {/* MSME */}
          <div className="mt-8 bg-white border border-[#d6dce8] rounded-2xl p-5 shadow-sm">

            <Image
              src="/diacred.png"
              alt="MSME"
              width={180}
              height={180}
            />

          </div>

        </div>

      </div>
    </section>
  );
}