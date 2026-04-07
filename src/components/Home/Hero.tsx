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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Become Certified in{" "}
              <span className="text-yellow-500">
                Industrial Automation
              </span>
            </h1>

            <p className="mb-10 text-base md:text-lg text-gray-200">
              Join the best Industrial Automation and Robotics training institute
              in Delhi with 100% placement assistance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="bg-yellow-500 text-black px-6 py-3 text-center rounded-tr-xl rounded-bl-xl font-semibold hover:bg-yellow-300 transition"
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
                className="w-full border p-2 rounded"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full border p-2 rounded"
              />

              <select className="w-full border p-2 rounded">
                <option>Select Course</option>
                <option>Industrial Training</option>
                <option>PLC Training</option>
                <option>SCADA Training</option>
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