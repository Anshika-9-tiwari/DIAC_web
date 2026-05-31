"use client";

import { Target, Crosshair, Gem } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="bg-gradient-to-br from-white to-[#fcf7f7]  text-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Label */}
        <p className="text-sm tracking-widest text-[#801717] mb-5 uppercase">
          Our Foundation
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-15 tracking-wide ">
          Vision, Mission & Values
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Vision */}
          <div className=" px-6 border-l-5 border-red-700 rounded-2xl">
            <Target className="text-[#801717] mb-4" size={28} />

            <h3 className="text-xl font-semibold mb-3">
              Our Vision
            </h3>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              To be India’s most trusted and outcome-driven Industrial Automation
              training institute — equipping every engineer with the skills,
              confidence, and industry readiness to excel in the Fourth Industrial Revolution.
            </p>
          </div>

          {/* Mission */}
          <div className="pl-6 border-l-5  border-red-700 rounded-2xl">
            <Crosshair className="text-[#801717] mb-4" size={28} />

            <h3 className="text-xl font-semibold mb-3">
              Our Mission
            </h3>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              To bridge the demand-supply gap for Industrial Automation engineers
              by delivering pragmatic, hands-on training programmes in partnership
              with industry, enabling fresh graduates and working professionals
              to stay ahead of technological change.
            </p>
          </div>

          {/* Values */}
          <div className="pl-6 border-l-5  border-red-700 rounded-2xl ">
            <Gem className="text-[#801717] mb-4" size={28} />

            <h3 className="text-xl font-semibold mb-3">
              Our Values
            </h3>

            <p className="text-gray-600 text-[16px] mb-4">
              Everything we do is guided by a commitment to excellence in education
              and real industry impact.
            </p>

            {/* Values List */}
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <p>• Practical Excellence</p>
              <p>• Industry Relevance</p>
              <p>• Student Success</p>
              <p>• Continuous Learning</p>
              <p>• Expert Mentorship</p>
              <p>• Placement Commitment</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}