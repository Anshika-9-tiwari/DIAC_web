"use client";

import {
  Wrench,
  Laptop,
  Sparkles,
  Users,
  Briefcase,
  BookOpen,
} from "lucide-react";

const items = [
  {
    icon: Wrench,
    title: "Practical Application Focus",
    desc: "Students gain thorough understanding of real-world applications through a combination of interactive academic sessions, hands-on practice experience, and exposure to live industrial projects.",
  },
  {
    icon: Laptop,
    title: "Interactive Learning Environment",
    desc: "Our modern labs are equipped with cutting-edge industrial technologies and tools. We emphasise practical training to ensure every student is well-prepared for real challenges.",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    desc: "Our curriculum is constantly updated to include the most recent developments in Industrial Automation, Robotics, and advanced control systems.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    desc: "Our faculty consists of subject matter experts and seasoned business leaders who mentor students through extensive training sessions.",
  },
  {
    icon: Briefcase,
    title: "Industry-Linked Placements",
    desc: "With 4,000+ hiring partners across India and beyond, our placement team ensures students get the best opportunities.",
  },
  {
    icon: BookOpen,
    title: "Job-Oriented Curriculum",
    desc: "Every course is designed with the employer's perspective in mind — covering both foundational and advanced technologies.",
  },
];

export default function TrainingMethodology() {
  return (
    <section className="py-20 bg-gray-50 shadow-lg"> 
      <div className="max-w-7xl mx-auto px-6">
                                    {/* bg-[#f5f1ec] */}
        {/* Top Label */}
        <p className="text-xs tracking-widest text-[#801717] mb-2 uppercase">
          Our Approach -
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Training Methodology is Our Key Differentiator
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mb-12 max-w-2xl text-sm">
          Our programmes are built on a foundation of superior learning combined
          with pragmatism — designed by subject matter experts and seasoned industry leaders.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 border border-gray-200">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-6 border-b border-r border-gray-200"
              >
                {/* Icon */}
                <div className="mb-3">
                  <Icon size={22} className="text-[#801717]" />
                </div>

                {/* Title */}
                <h3 className="font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>

                {/* Desc */}
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

