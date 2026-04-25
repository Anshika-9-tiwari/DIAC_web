"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[650px] lg:min-h-[550px]">

      {/* Background Image */}
      <Image
        src="/training-bnner.jpg"
        alt="DIAC Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-16 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 w-full items-center">

          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-serif leading-tight ">
              Become Certified in{" "}
              <span className="text-red-900">
                Industrial Automation
              </span>
            </h1>

            <p className="mb-10 text-base md:text-lg text-gray-50">
              Join the best Industrial Automation and Robotics training institute
              in Delhi with 100% placement assistance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="bg-red-900 text-white px-6 py-3 text-center rounded-tr-xl rounded-bl-xl font-semibold hover:bg-red-800 transition uppercase border"
              >
                View Courses
              </Link>

              <Link
                href="/contact"
                className="border border-white px-6 py-3 text-center rounded-tr-xl rounded-bl-xl font-semibold hover:bg-white hover:text-black transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md lg:ml-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Enquiry Now
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#801717]"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#801717]"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#801717]"
              />

              <select
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#801717] bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Course
                </option>

                <option>PLC Programming & Commissioning</option>
                <option>SCADA & HMI Training</option>
                <option>Drives & Motors Training</option>
                <option>Industrial Robotics Training</option>
                <option>Process Instrumentation</option>
                <option>Panel Designing & AutoCAD</option>
                <option>DCS Training</option>
                <option>PLC Networking</option>
                <option>Servo Motors Training</option>

              </select>

              <button className="w-full bg-[#801717] text-white py-2 rounded font-semibold">
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}