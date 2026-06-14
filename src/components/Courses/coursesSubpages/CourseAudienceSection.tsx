"use client";

import { CircleCheckBig } from "lucide-react";

const audience = [
  "B.Tech / B.E. Students & Graduates",
  "Diploma Engineering Students",
  "ITI Students (Electrician, Electronics, Instrumentation)",
  "Final Year Students & Freshers",
  "Electrical & Electronics Engineers",
  "Instrumentation Engineers",
  "Maintenance & Production Engineers",
  "Automation Professionals",
  "Corporate Employees Seeking Upskilling",
];

export default function CourseAudienceSection() {
  return (
    <section 
      id="industry-demand" 
      className="py-18 bg-gradient-to-b from-white to-[#fffdfd]">

      <div className="max-w-7xl mx-auto px-8">

        <div className="bg-white rounded-[32px] border border-red-100 shadow-[0_18px_60px_rgba(0,0,0,0.08)] p-6 md:p-12 lg:p-14">

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="badge badge-outline badge-error px-5 py-4">
              Eligibility Criteria
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-[33px] md:text-[45px] font-bold text-gray-800 text-center leading-tight mb-8">
            Who Can Enroll & Eligibility
          </h2>

          {/* Description */}
          <p className="text-[16px] md:text-lg leading-9 text-gray-600 text-center max-w-5xl mx-auto mb-12">
            This Industrial Automation Training Program is ideal for students, fresh graduates, working professionals, and corporate employees who  want to build expertise in PLC, SCADA, HMI, Industrial Networking, VFD, and Automation Technologies. No prior automation experience is required, making it suitable for both beginners and experienced professionals.
          </p>

          {/* Audience Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {audience.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-red-100 bg-white hover:border-[#801717]/30 hover:shadow-lg transition-all duration-300"
              >
                <CircleCheckBig
                  size={22}
                  className="text-[#801717] mt-1 shrink-0"
                />

                <p className="text-[17px] text-gray-700 leading-7 font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}