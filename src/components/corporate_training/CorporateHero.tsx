"use client";

import Link from "next/link";

export default function CorporateHero() {
  return (
    <section className="relative overflow-hidden text-white bg-gradient-to-br from-[#801717] via-[#801717] to-[#801717]">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Red Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#801717]/25 rounded-full blur-[150px]"></div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[120px]"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">

        {/* Tag */}
        <span className="inline-block text-xs px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full mb-6 tracking-wider uppercase">
          Corporate Training Division
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6">
          Corporate Training &
          <br />
          <span className="text-[#d67c7c]">
            Industrial Training Solutions
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 max-w-4xl mb-10 text-lg leading-8">
          At DIAC, we provide comprehensive Corporate Training and
          Industrial Corporate Training solutions designed to help
          organizations enhance employee performance, increase
          productivity, reduce operational downtime, and build a
          future-ready workforce. Our programs are tailored for
          manufacturing industries, automation companies, engineering
          firms, production facilities, power plants, pharmaceutical
          companies, and various industrial sectors.
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
            className="border border-white/20 bg-white/5 backdrop-blur-sm px-7 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Explore Programmes
          </Link>

        </div>

      </div>

      {/* Bottom Stats Strip */}
      <div className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-md py-7">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">

          {[
            { value: "12K+", label: "Professionals Trained" },
            { value: "200+", label: "Corporate Clients" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Expert Trainers" },
            { value: "15+", label: "Years of Excellence" },
          ].map((item, i) => (
            <div key={i}>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {item.value}
              </h3>

              <p className="text-xs text-gray-300 mt-2">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}