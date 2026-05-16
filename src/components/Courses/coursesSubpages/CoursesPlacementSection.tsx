"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";

import {
  TrendingUp,
  ChartNoAxesCombined,
  ArrowRight,
} from "lucide-react";

const companyLogos = [
  "/image_1.png",
  "/image_2.png",
  "/image_3.png",
  "/image_4.png",
  "/image_5.png",
  "/image_6.png",
  "/image_7.png",
  "/image_8.png",
  "/image_9.png",
  "/image_10.png",
  "/image_11.png",
  "/image_12.png",
];

const placementHighlights = [
  {
    name: "Rahul Sharma",
    image: "/Placedstudent/raymond.jpg",
    hike: "120%",
    previousCompany: "Diploma Engineer",
    previousRole: "Trainee",
    newCompanyLogo: "/image_2.png",
    newRole: "PLC Engineer",
    newCompany: "Siemens",
  },

  {
    name: "Aman Verma",
    image: "/Placedstudent/raymond.jpg",
    hike: "95%",
    previousCompany: "ITI Electrician",
    previousRole: "Technician",
    newCompanyLogo: "/image_1.png",
    newRole: "Automation Engineer",
    newCompany: "ABB",
  },
];

const batchData = [
  {
    label: "Course Duration",
    weekday: "7 Months",
    weekend: "9 Months",
    fasttrack: "60 Days",
  },
  {
    label: "Hours Per Day",
    weekday: "2–3 Hours",
    weekend: "3–4 Hours",
    fasttrack: "6 Hours",
  },
  {
    label: "Training Mode",
    weekday: "Classroom/Online",
    weekend: "Classroom/Online",
    fasttrack: "Classroom/Online",
  },
];

export default function PlacementSection() {
  return (
    <section id="placement" className="bg-gradient-to-b from-[#eef3fb] to-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TOP SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-15 items-start mb-25">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0b1f3a] mb-10 px-3">
              Placement Stats in Industrial Automation
            </h2>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 h-[300px]  flex items-center justify-center">

              <div className="flex items-center gap-15">

                {/* ICON */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center">
                  <ChartNoAxesCombined
                    size={55}
                    className="text-[#801717]"
                  />
                </div>

                {/* STATS */}
                <div className="space-y-10">

                  <div>
                    <p className="text-lg text-gray-700 mb-2">
                      Maximum salary hike
                    </p>

                    <h3 className="text-4xl font-bold text-[#801717]">
                      135<span className="text-gray-600">%</span>
                    </h3>
                  </div>

                  <div>
                    <p className="text-lg text-gray-700 mb-2">
                      Average salary hike
                    </p>

                    <h3 className="text-4xl font-bold text-gray-700">
                      75<span className="text-red-900">%</span>
                    </h3>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#0b1f3a] mb-10">
              Our Industrial Automation Alumni in Top Companies
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              {companyLogos.map((logo, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 h-21 px-2 flex items-center justify-center hover:shadow-xl transition"
                >
                  <Image
                    src={logo}
                    alt="company"
                    width={120}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* ================= SECOND SECTION ================= */}
        <div className="mb-25">

          <h2 className="text-2xl md:text-4xl font-bold text-[#172c47] mb-12">
            Industrial Automation Placement Highlights
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">

            {placementHighlights.map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-[#d2e5ff] bg-white shadow-md hover:shadow-xl transition"
              >

                {/* TOP */}
                <div className="bg-[#eef3fb] px-4 md:px-8 py-4 flex items-center justify-between">

                  <div className="flex items-center gap-5">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />

                    <h3 className="text-md md:text-xl font-semibold text-[#0b1f3a]">
                      {item.name}
                    </h3>

                  </div>

                  <div className="flex items-center gap-2 text-lg md:text-2xl font-bold">

                    <span className="text-red-900">
                      {item.hike}
                    </span>

                    <span className="text-[#0b1f3a]">
                      Hike
                    </span>

                    <TrendingUp
                      className="text-[#0b1f3a]"
                      size={28}
                    />

                  </div>

                </div>

                {/* BOTTOM */}
                <div className="grid grid-cols-3 items-center px-8 py-6">

                  {/* OLD */}
                  <div className="text-center">

                    <h4 className="text-xl font-bold text-gray-700 mb-4">
                      {item.previousCompany}
                    </h4>

                    <p className="text-lg font-medium text-[#0b1f3a]">
                      {item.previousRole}
                    </p>

                  </div>

                  {/* ARROW */}
                  <div className="flex justify-center">
                    <ArrowRight
                      size={35}
                      className="text-red-900"
                    />
                  </div>

                  {/* NEW */}
                  <div className="text-center flex flex-col items-center">

                    <Image
                      src={item.newCompanyLogo}
                      alt={item.newCompany}
                      width={120}
                      height={60}
                      className="object-contain mb-5"
                    />

                    <p className="text-xl font-medium text-[#0b1f3a]">
                      {item.newRole}
                    </p>

                    <p className="text-gray-600 mt-1">
                      {item.newCompany}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

     {/* ================= SECOND SECTION ================= */}

      <div>

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#0b1f3a] mb-14">
          Batches Timing for Industrial Automation Course
        </h2>

        {/* TABLE BOX */}
        <div className="bg-[#f7f7f7] rounded-[30px] p-8 md:p-14 border border-gray-100">

          <div className="overflow-x-auto">

            <table className="w-full border-collapse text-center min-w-[850px]">

              {/* HEADER */}
              <thead>

                <tr>

                  <th className="border border-gray-300 px-6 py-5 text-lg font-semibold">
                    Track
                  </th>

                  <th className="border border-gray-300 px-6 py-5 text-lg font-semibold">
                    Weekdays (Tue–Fri)
                  </th>

                  <th className="border border-gray-300 px-6 py-5 text-lg font-semibold">
                    Weekends (Sat–Sun)
                  </th>

                  <th className="border border-gray-300 px-6 py-5 text-lg font-semibold">
                    Fast Track
                  </th>

                </tr>

              </thead>

              {/* BODY */}
              <tbody>

                {batchData.map((item, index) => (
                  <tr key={index}>

                    <td className="border border-gray-300 px-6 py-5 font-semibold text-lg">
                      {item.label}
                    </td>

                    <td className="border border-gray-300 px-6 py-5 text-lg text-gray-700">
                      {item.weekday}
                    </td>

                    <td className="border border-gray-300 px-6 py-5 text-lg text-gray-700">
                      {item.weekend}
                    </td>

                    <td className="border border-gray-300 px-6 py-5 text-lg text-gray-700">
                      {item.fasttrack}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-12">

            <Link
              href="/industrial-automation-syllabus.pdf"
              target="_blank"
              className="bg-[#801717] hover:bg-[#6d0e0e] transition text-white px-10 py-4  rounded-lg  md:text-xl font-semibold flex items-center gap-3"
            >
              <Download size={22} />
              Download Syllabus
            </Link>

          </div>

        </div>

      </div>
    </div>

    </section>
  );
}