"use client";

import { ArrowRight } from "lucide-react";

export default function PlacementHero() {
  return (
    <section className="py-22 bg-gradient-to-r from-black via-[#0b0b0b] to-[#1a0a0a] text-white text-center">
      <div className="max-w-5xl mx-auto px-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#801717]/20 font-serif border border-[#801717]/40 text-[#ff4d4d] px-4 py-2 rounded-full text-sm mb-6">
          🎯 100% Placement Assistance with Career Support
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 ">
          Our <span className="text-[#801717]">Placement</span> Record
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
          Every student who completes their program at DIAC gets industry-ready.
          We focus on real skills, real projects, and real career outcomes.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12 border-t border-gray-800 pt-10">

          <div>
            <h3 className="text-4xl font-bold text-[#801717] font-serif">10,000+</h3>
            <p className="text-gray-400 text-sm mt-1">Students Trained</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white font-serif">100%</h3>
            <p className="text-gray-400 text-sm mt-1">Placement Assistance</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#801717 font-serif]">4.8★</h3>
            <p className="text-gray-400 text-sm mt-1">Google Rating</p>
          </div>

        </div>

        {/* CTA */}
        <a
          href="/courses"
          className="inline-flex items-center gap-2 bg-[#801717] hover:bg-red-800 px-8 py-4 rounded-xl font-semibold text-white shadow-[0_0_20px_rgba(128,23,23,0.6)] transition"
        >
          Get Job-Ready Training
          <ArrowRight size={18} />
        </a>

      </div>

    </section>
  );
}