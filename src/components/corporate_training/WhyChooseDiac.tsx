"use client";

import {
  Layers,
  Monitor,
  Users,
  Activity,
  FileText,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Industry-Relevant Curriculum",
    desc: "Courses co-developed with automation engineers and constantly updated with the latest PLC, SCADA, and robotics technologies.",
  },
  {
    icon: Monitor,
    title: "Modern Labs & Live Equipment",
    desc: "Hands-on training on real PLCs, HMIs, servo drives, and industrial robots — not simulations alone.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    desc: "Subject matter experts and seasoned industry leaders with real-world automation project experience mentor every batch.",
  },
  {
    icon: Activity,
    title: "Measurable ROI",
    desc: "Pre & post assessments, skill certifications, and performance benchmarks so you can track every rupee of training spend.",
  },
  {
    icon: FileText,
    title: "DIAC-Certified Credentials",
    desc: "Recognised certificates awarded on completion — valued by 4000+ hiring partners across India's manufacturing industry.",
  },
  {
    icon: Clock,
    title: "Flexible Delivery",
    desc: "On-site at your plant, at our Noida facility, or hybrid — scheduled to minimise disruption to your production shifts.",
  },
];

export default function WhyChooseDIAC() {
  return (
    <section className="py-20 bg-[#fcf8f8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Label */}
        <p className="text-xs tracking-widest text-[#801717] uppercase mb-3">
          Why Choose DIAC
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a] mb-4">
          Built for the Industrial Automation Engineer
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mb-12">
          Since 2008, DIAC has closed the skills gap between industry demand and
          engineering talent across India's manufacturing sector.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 ">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-300"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 bg-[#801717] rounded-lg flex items-center justify-center mb-5">
                  <Icon size={22} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-3 text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}