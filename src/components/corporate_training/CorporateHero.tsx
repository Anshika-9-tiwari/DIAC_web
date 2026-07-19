"use client";

import Link from "next/link";

export default function CorporateHero() {
  return (
    <section className="py-12 md:py-14 relative bg-gradient-to-br from-white via-[#fcf7f7] to-[#f5f5f5] text-gray-900 overflow-hidden">

      {/* Red Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#801717]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/5 rounded-full blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-14 relative z-10">

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 xl:gap-12 items-stretch">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            {/* Tag */}
            <span className="inline-block text-xs px-4 py-1 bg-[#801717] text-white rounded-full font-medium mb-5">
              Corporate Training Division
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.08] mb-8">
              Corporate Training &
              <br />
              <span className="text-[#801717]">
                Industrial Training Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 mb-10 text-lg leading-8">
              At DIAC, we provide comprehensive Corporate Training and Industrial Corporate Training solutions designed to help organizations enhance employee performance, increase productivity, reduce operational downtime, and build a future-ready workforce. Our programs are tailored for manufacturing industries, automation companies, engineering firms, production facilities, power plants, pharmaceutical companies, and various industrial sectors.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="bg-[#801717] hover:bg-red-900 text-white px-7 py-4 font-semibold rounded-xl shadow-lg transition"
              >
                Request a Training Proposal
              </Link>

              <Link
                href="/courses"
                className="border border-black/30 bg-white px-7 py-4 rounded-xl font-semibold hover:bg-gray-50 transition"
              >
                Explore Programmes
              </Link>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center">
            <div className="bg-white/90 backdrop-blur-xl border border-red-100 shadow-2xl rounded-3xl p-10">

              <h3 className="text-2xl font-semibold text-gray-800 mb-10 text-center">
                Why Companies Choose DIAC
              </h3>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-5 mb-8">

                {[
                  { value: "12K+", label: "Professionals Trained" },
                  { value: "200+", label: "Corporate Clients" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "15+", label: "Years Experience" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-white to-red-50 border border-red-100 rounded-2xl p-5 text-center"
                  >
                    <h3 className="text-3xl font-bold text-[#801717]">
                      {item.value}
                    </h3>

                    <p className="text-sm text-slate-600 mt-3 leading-5">
                      {item.label}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}