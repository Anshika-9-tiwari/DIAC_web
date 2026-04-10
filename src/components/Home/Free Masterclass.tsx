"use client";

import Link from "next/link";
import Image from "next/image";

export default function Masterclass() {
  return (
    <section className="py-14 bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#a11c1c] text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-stretch">

        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Join Our Free Masterclass
          </h2>

          <p className="mb-6 text-gray-200">
            Kickstart your career in Industrial Automation with our expert-led
            FREE masterclass. Learn PLC, SCADA, and Robotics basics with live demos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition text-center"
            >
              Book Free Demo
            </Link>

            <Link
              href="/courses"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition text-center"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Right Image (Full Height) */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-full">
          <Image
            src="/training-bnner.jpg"
            alt="Free Masterclass"
            fill
            className="object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}