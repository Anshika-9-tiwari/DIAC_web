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
    desc: "Hands-on experience with real industrial equipment Hands-on experience with real industrial equipment",
  },
  {
    icon: Cpu,
    title: "Live Projects",
    desc: "Work on real-time automation projects. Hands-on experience with real industrial equipment",
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    desc: "100% placement assistance for students. Hands-on experience with real industrial equipment",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    desc: "Learn from experienced industry professionals. Hands-on experience with real industrial equipment",
  },
  {
    icon: Award,
    title: "Certification",
    desc: "Industry-recognized certification provided . Hands-on experience with real industrial equipment",
  },
  {
    icon: ShieldCheck,
    title: "Industry Exposure",
    desc: "Real industrial visits and exposure. Hands-on experience with real industrial equipment",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            DIAC Advantage
          </h2>
          <p className="text-gray-600">
            Why students choose us for industrial automation training
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ">

          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-6 text-center shadow-md hover:shadow-lg rounded-2xl flex flex-col items-center justify-center"
              >
                {/* Icon */}
                <Icon className="text-[#801717] mb-3" size={28} />

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