"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

export default function SummerWinterCTA() {
  return (
    <section className="py-14 md:py-16 bg-gradient-to-r from-[#701313] via-[#801717] to-[#a11c1c]">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center mb-6">

          <CalendarDays size={28} />

        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Make Your Semester Break Count
        </h2>

        <p className="text-white/80 text-lg max-w-2xl mx-auto leading-8 mb-8">
          Gain practical industrial automation skills, work on projects,
          receive expert guidance, and earn an industry-recognized
          certificate with DIAC.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#801717] px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Enquire for Training

            <ArrowRight size={18} />

          </Link>

          <Link
            href="/courses"
            className="inline-flex items-center justify-center border border-white/60 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white hover:text-[#801717] transition"
          >
            Explore Courses
          </Link>

        </div>

      </div>

    </section>
  );
}