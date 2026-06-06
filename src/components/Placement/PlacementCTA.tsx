"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PlacementCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#5a0f0f] text-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Start Your Career with DIAC 
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 mb-4 text-lg ">
         Industrial Automation is one of the most promising career fields in modern engineering. With industries rapidly adopting automation technologies, skilled professionals are required across India and globally.
        </p>
        <p className="text-gray-200 mb-12 text-lg">
          Join DIAC today and take the first step toward a successful future in Industrial Automation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-8">

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="bg-gray-50 text-[#801717] px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-transparent hover:text-black hover:border hover:border-white transition"
          >
            Enrol Now
            <ArrowRight size={18} />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/courses"
            className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#801717] transition"
          >
            Explore Courses
          </Link>

        </div>

      </div>
    </section>
  );
}