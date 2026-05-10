"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 via-[#faf3f3] to-[#f9eeee] text-black overflow-hidden">

      {/* Background Grid Effect */}
      {/* <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

      {/* Right Glow Effect */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#801717]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">

        {/* Top Small Text */}
        <p className="text-xs tracking-widest text-gray-500 mb-4">
          ABOUT DIAC – EST. DECEMBER 2008
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-[55px] font-bold leading-tight font-serif mb-8 tracking-wide ">
          Dynamic Institute <br />
          of <br />
          <span className="text-[#801717]">
            Automation & Controls
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 max-w-xl mb-10 text-[16px] md:text-[18px] ">
          India’s leading Industrial Automation training institute, bridging the gap
          between engineering graduates and the rapidly growing demand for
          skilled automation engineers — through hands-on, industry-aligned training.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href="/courses"
            className="bg-[#801717] px-6 py-3 text-sm font-semibold text-white rounded-sm"
          >
            EXPLORE COURSES
          </Link>

          <Link
            href="/contact"
            className="border border-gray-500 px-6 py-3 rounded-sm text-sm font-semibold hover:bg-white hover:text-black transition"
          >
            BOOK FREE DEMO
          </Link>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 text-xs mb-12">
          {[
            "PLC • SCADA • HMI",
            "Robotics Training",
            "Noida, Delhi/NCR",
            "10,000+ Trained",
            "4,000+ Hiring Partners",
          ].map((item, i) => (
            <span
              key={i}
              className="border border-gray-400 px-3 py-2 shadow-sm text-gray-500"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-400">

          {[
            { value: "10,000+", label: "TRAINED & PLACED" },
            { value: "4,000+", label: "HIRING PARTNERS" },
            { value: "₹36 LPA", label: "HIGHEST CTC OFFERED" },
            { value: "₹6.9 LPA", label: "AVERAGE CTC" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 text-center border-r border-gray-700 last:border-r-0"
            >
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#801717] playfair">
                {item.value}
              </h3>
              <p className="text-xs text-gray-500 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}