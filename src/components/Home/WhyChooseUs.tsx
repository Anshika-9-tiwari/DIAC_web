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
    title: "IMMERSIVE CLASSROOM EXPERIENCE",
    desc: "Gain practical industrial automation skills through interactive classroom sessions, live demonstrations, and hands-on practice on PLC, SCADA, HMI, VFD, and control systems. Our industry-focused training environment helps students build confidence with real-time applications.",
  },
  {
    icon: Cpu,
    title: "GLOBALLY RECOGNIZED CERTIFICATION",
    desc: "Earn industry-recognized certification after successful completion of training programs designed according to current industrial standards. Enhance your professional profile and improve career opportunities in the automation industry",
  },
  {
    icon: Briefcase,
    title: "HANDS-ON TRAINING BY INDUSTRY EXPERTS",
    desc: "Learn directly from experienced automation professionals with practical exposure to industrial projects, machine automation, process control, and advanced PLC programming techniques used in modern industries.",
  },
  {
    icon: Users,
    title: "REAL WORLD PROJECTS & CASE STUDIES",
    desc: "Work on live industrial projects, automation panels, troubleshooting exercises, and case studies that provide practical exposure to real manufacturing and process automation challenges.",
  },
  {
    icon: Award,
    title: "360° DEGREE CAREER SUPPORT",
    desc: "Receive complete career assistance including resume building, interview preparation, placement support, career guidance, and continuous technical mentorship to help you succeed in the automation industry. ",
  },
  {
    icon: ShieldCheck,
    title: "DIAC ALUMNI NETWORK",
    desc: "Become part of the DIAC professional alumni network and connect with automation engineers, industry experts, recruiters, and successful professionals working in leading multinational companies worldwide",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-18 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-10">

        {/* Heading */}
        <div className="text-center mb-15">
          <h2 className="text-3xl md:text-[40px] font-semibold mb-4">
            DIAC <span className="text-[#801717]">Advantage</span>
          </h2>
          <p className="text-gray-600 text-[18px]">
            Why students choose us for industrial automation training
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">

          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-5  shadow-md hover:shadow-lg rounded-2xl flex flex-col items-center justify-center border-t-4 border-red-900"
              >
                {/* Icon */}
                <Icon className="text-[#801717] mb-4" size={35} />

                {/* Title */}
                <h3 className="text-xl font-semibold leading-8 mb-4 playfair">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[14px] ">
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