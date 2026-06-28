//career opportunity, indutry oriented, training, who can apply
"use client";

import {
  TrendingUp,
  Factory,
  Cpu,
  CheckCircle2,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const features = [
  "100% Practical Training",
  "Real-Time Industrial Applications",
  "Experienced Industry Trainers",
  "Live Automation Projects",
  "Modern Lab Infrastructure",
  "Industry-Relevant Curriculum",
];

const candidates = [
  "Electrical Engineering Students",
  "Diploma Holders",
  "ITI Students",
  "ECE Students",
  "Mechanical Engineers",
  "Working Professionals",
  "Freshers Seeking Industrial Jobs",
];

export default function AutomationCareerSection() {
  return (
    <section className="py-20 bg-[#fbfcff] text-gray-800">

      <div className="max-w-7xl mx-auto px-8 md:px-10">

        {/* Demand Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          <div>

            <span className="inline-block text-xs px-4 py-1 bg-[#801717] text-[#f7f7f7] rounded-full font-medium mb-5">
              Career Opportunities
            </span>


            <h2 className="text-3xl md:text-[43px] font-bold text-gray-800 mb-6">
              Growing Demand for Skilled
              <span className="block text-[#801717]">
                Automation Engineers
              </span>
            </h2>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              Modern industries are moving toward digital production systems and intelligent manufacturing environments. Recent reports indicate that Indian manufacturers are rapidly adopting digital transformation and automation technologies to improve operational performance and competitiveness.
            </p>

            <p className="text-gray-600 text-lg leading-8">
              This transformation has created a strong demand for skilled engineers who understand industrial automation systems, troubleshooting, and smart control technologies.
            </p>

          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-[#801717] to-[#a11c1c] text-white rounded-3xl p-10 text-center flex flex-col justify-center items-center">

            <TrendingUp size={60} className="mb-6" />

            <h3 className="text-3xl font-bold mb-5">
              Automation Industry Growth
            </h3>

            <p className="leading-8 text-white/95">
              DIAC helps students gain the technical skills, practical knowledge, and industry confidence needed to build successful careers in automation and control engineering.
            </p>

          </div>

        </div>

        {/* Features */}
        <div className="mb-24">

          <h2 className="text-3xl md:text-[45px] font-bold text-center text-gray-800 mb-14">
            Our Industry-Oriented {" "}
            <span className=" text-[#801717]">
              Training Approach
            </span>
          </h2>

          <p className="leading-8 gray-600 text-lg text-center  max-w-5xl mx-auto mb-12">
            At DIAC, students receive practical exposure using real industrial equipment and software platforms. We prepare students not only for certifications but also for real industrial working environments.
            Our training methodology focuses on:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-6"
              >
                <CheckCircle2
                  size={24}
                  className="text-[#801717]"
                />

                <span className="font-medium text-gray-700">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* Who Can Apply */}
        <div className="text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-15">
            Who Can Apply?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">

            {candidates.map((item, index) => (
              <div  
                key={index}
                className="badge badge-lg badge-outline text-[#801717] border-red-900 py-6 px-6"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}