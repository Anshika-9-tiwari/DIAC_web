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
    desc: "Learn directly from certified trainers and industry experts with years of practical experience in automation, electrical systems, panel designing, and industrial projects.",
  },
  {
    icon: Briefcase,
    title: "Strong Placement Support",
    desc: "With dedicated placement assistance and connections with leading companies across India, DIAC helps students prepare for interviews, technical assessments, and career opportunities in the automation sector.",
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

        {/* Top Label */}
        <span className="inline-block text-xs px-4 py-1 bg-[#801717] text-[#f7f7f7] rounded-full font-medium mb-5 tracking-widest">
          Our Approach
        </span>

        {/* Heading */}
        <h2 className="text-[35px] md:text-[42px] font-semibold mb-6 text-gray-900">
          DIAC <span className="text-[#801717]">Advantage</span>
        </h2>

        <p className="text-gray-700 mb-15 max-w-5xl text-[16px] leading-7">
          At DIAC, we believe technical education should go beyond theory. Our
          training methodology is designed to prepare students for real
          industrial environments through practical learning, advanced lab
          exposure, and mentorship from experienced automation professionals.
          Every program is structured to help students gain confidence,
          technical expertise, and placement-ready skills for today&apos;s
          competitive industry.
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
                <div className="w-14 h-14 mb-5 rounded-2xl bg-[#801717] flex items-center justify-center shadow-md">
                  <Icon
                    size={26}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>

                <h3 className="font-semibold text-lg mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
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