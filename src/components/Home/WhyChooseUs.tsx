"use client";

import {
  GraduationCap,
  Cpu,
  Briefcase,
  Users,
  Award,
  ShieldCheck,
} from "lucide-react";

const advantages = [
  {
    icon: GraduationCap,
    title: "Practical Training",
    desc: "Hands-on experience with real industrial equipment",
  },
  {
    icon: Cpu,
    title: "Live Projects",
    desc: "Work on real-time automation projects",
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    desc: "100% placement assistance for students",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    desc: "Learn from experienced industry professionals",
  },
  {
    icon: Award,
    title: "Certification",
    desc: "Industry-recognized certification provided",
  },
  {
    icon: ShieldCheck,
    title: "Industry Exposure",
    desc: "Real industrial visits and exposure",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            DIAC ``Advantage
          </h2>
          <p className="text-gray-600">
            Why students choose us for industrial automation training
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-6 border-l-4 border-[#801717] rounded-lg bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full mb-3">
                  <Icon className="text-[#801717]" size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">
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