"use client";

import Link from "next/link";

export default function CorporateHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#801717] to-[#a11c1c] text-white overflow-hidden">

      {/* Background Circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* Tag */}
        <span className="inline-block text-xs px-4 py-1 border border-white/30 rounded-full mb-6">
          CORPORATE TRAINING DIVISION
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-6">
          Empower Your Workforce.
          <br />
          <span className="text-white/70">
            Accelerate Your Growth.
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/80 max-w-2xl mb-8 text-sm md:text-base">
          DIAC delivers customised, industry-aligned corporate training programmes
          that transform professionals into high-performance leaders — built for
          India’s evolving business landscape.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 font-semibold text-sm rounded"
          >
            Request a Training Proposal
          </Link>

          <Link
            href="/courses"
            className="border border-white/40 px-6 py-3 text-sm font-semibold rounded hover:bg-white hover:text-black transition"
          >
            Explore Programmes
          </Link>
        </div>

      </div>

      {/* Bottom Stats Strip */}
      <div className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">

          {[
            { value: "12K+", label: "Professionals Trained" },
            { value: "200+", label: "Corporate Clients" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Expert Trainers" },
            { value: "15+", label: "Years of Excellence" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-lg md:text-2xl font-bold font-serif text-white">
                {item.value}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}