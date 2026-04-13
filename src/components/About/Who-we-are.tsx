"use client";

import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="relative w-full h-[300px] md:h-[400px] bg-[#0b2a44]">
            <Image
              src="/training-bnner.jpg"
              alt="DIAC"
              fill
              className="object-cover opacity-80"
            />

            {/* Corner Border Effect */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-gray-300"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-gray-300"></div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Small Title */}
          <p className="text-xs tracking-widest text-[#801717] mb-2 uppercase">
            Our Story
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Who We Are
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            DYNAMIC INSTITUTE OF AUTOMATION & CONTROLS (DIAC), popularly known
            as "DIAC", was incorporated in December 2008 with a core objective
            to impart training in cutting-edge Industrial Automation Technologies
            to fresh engineers, bridging the ever-growing demand-supply gap for
            skilled automation engineers.
          </p>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            With over 15 years of standing in the industry, DIAC has trained and
            placed 10,000+ students across leading MNCs in the field of Industrial
            Automation. Our alumni work with India’s and the world’s most respected
            manufacturing and automation companies.
          </p>

          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            We also offer customised training programmes designed for working
            professionals seeking to expand their domain knowledge and keep pace
            with rapid advancements in the manufacturing and robotics sectors.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              "PLC Training",
              "SCADA & HMI",
              "Robotics",
              "DCS Training",
              "Drives & Motors",
              "Process Instrumentation",
              "Panel Designing & AutoCAD",
              "Corporate Training",
            ].map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-gray-300 text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

