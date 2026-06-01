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
    title: "Hands-On Practical Training",
    desc: "Students work on real industrial automation systems, live projects, PLC panels, SCADA software, VFDs, sensors, and industrial networking tools to gain practical experience that matches industry requirements.",
  },
  {
    icon: Laptop,
    title: "Advanced Automation Labs",
    desc: "Our modern training labs are equipped with the latest technologies used in Industrial Automation, Robotics, PLC, SCADA, HMI, Electrical Designing, and Control Systems for an immersive learning experience.",
  },
  {
    icon: Sparkles,
    title: "Updated Industry Curriculum",
    desc: "DIAC continuously upgrades its course modules according to current industrial trends, smart manufacturing technologies, and automation standards to keep students future-ready.",
  },
  {
    icon: Users,
    title: "Experienced Industry Trainers",
    desc: "Learn directly from certified trainers and industry experts with years of practical experience in automation, electrical systems, panel designing, and industrial projects.With dedicated placement assistance and connections with leading companies across India, DIAC helps students prepare for interviews, technical assessments, and career opportunities in the automation sector.",
  },
  {
    icon: Briefcase,
    title: "Strong Placement Support",
    desc: "With dedicated placement assistance and connections with leading companies across India, DIAC helps students prepare for interviews, technical assessments, and career opportunities in the automation sector. ",
  },
  {
    icon: BookOpen,
    title: "Job-Oriented Skill Development",
    desc: "Every training program is focused on building practical skills demanded by employers — including troubleshooting, programming, industrial communication, panel wiring, and real-time machine automation.",
  },
];

export default function TrainingMethodology() {
  return (
    <section className="py-20 bg-gray-50 shadow-lg"> 
      <div className="max-w-7xl mx-auto px-6">
                                    {/* bg-[#f5f1ec] */}
        {/* Top Label */}
        <p className="text-xs tracking-widest text-[#801717] mb-5 uppercase">
          Our Approach -
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-gray-800">
          Industry-Focused Training That Builds Real Careers
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mb-15 max-w-5xl text-[16px]">
          At DIAC, we believe technical education should go beyond theory. Our training methodology is designed to prepare students for real industrial environments through practical learning, advanced lab exposure, and mentorship from experienced automation professionals. Every program is structured to help students gain confidence, technical expertise, and placement-ready skills for today’s competitive industry.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 shadow-md gap-4">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-6 border-b border-r border-gray-300 shadow-sm"
              >
                {/* Icon */}
                <div className="mb-3">
                  <Icon size={25} className="text-[#801717]" />
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

