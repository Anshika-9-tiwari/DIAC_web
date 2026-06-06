"use client";

import { ArrowRight } from "lucide-react";

export default function PlacementHero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: "url('/courses/corporatebg.png')",
          }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 py-18 md:py-20">
        <div className="max-w-6xl mx-auto px-8 text-center text-white">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#801717]/30 backdrop-blur-sm border border-red-500/40 text-red-100 px-5 py-2 rounded-full text-sm mb-10">
            🎯 100% Placement Assistance with Career Support
          </div>

          {/* Heading */}
          <h1 className="text-[32px] md:text-6xl font-bold leading-tight tracking-wide mb-6">
            Launch Your Career With  DIAC 
            <span className="block text-gray-200 mt-2">
             Placement Program
            </span>
          </h1>

          {/* Description */}
          <p className="text-md md:text-lg text-gray-200 max-w-3xl mx-auto mb-12 leading-8">
            Get trained on real industrial automation technologies,
            work on practical projects, and gain the skills required
            by top manufacturing and automation companies across India.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-4xl font-bold text-gray-100">
                5L+
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Students Trained
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-4xl font-bold text-gray-100">
                100%
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Placement Assistance
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-4xl font-bold text-gray-100">
                500+
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Hiring Partners
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-4xl font-bold text-gray-100">
                4.8★
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Google Rating
              </p>
            </div>

          </div>

          {/* CTA */}
          <a
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#801717] hover:bg-red-800 px-8 py-4 rounded-xl font-semibold text-white transition duration-300 shadow-xl"
          >
            Get Job-Ready Training
            <ArrowRight size={20} />
          </a>

        </div>
      </div>

    </section>
  );
}