"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#801717] via-[#801717] to-[#801717] px-8 md:px-16 py-16 md:py-20 text-center">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#801717]/25 rounded-full blur-[150px]"></div>

          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[120px]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10">

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Start Your Automation Career With DIAC
            </h2>

            <p className="max-w-4xl mx-auto text-white/90 text-lg leading-8 mb-10">
              Join thousands of successful students who upgraded their
              technical skills and built rewarding careers in Industrial
              Automation, PLC, SCADA, HMI, Robotics, and Industry 4.0
              technologies.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link
                href="/contact"
                className="bg-white text-[#0b1f3a] px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Apply Now
              </Link>

              <Link
                href="/courses"
                className="border border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0b1f3a] transition"
              >
                Explore Courses
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}