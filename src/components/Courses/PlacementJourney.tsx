"use client";

import Link from "next/link";
import {
  BookOpen,
  UserCheck,
  Factory,
  MessagesSquare,
  FileUser,
  Users,
  BriefcaseBusiness,
  Trophy,
  Download,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    title: "Choose the Right Course",
    desc: "Our expert counsellors help you select the right industrial automation training program based on your career goals.",
    icon: BookOpen,
  },
  {
    title: "Learn from Industry Trainers",
    desc: "Get trained by experienced industry professionals with practical knowledge of real industrial automation systems.",
    icon: UserCheck,
  },
  {
    title: "Work on Industrial Projects",
    desc: "Build practical skills through hands-on training, live industrial projects, and real-world automation applications.",
    icon: Factory,
  },
  {
    title: "Career-Oriented Sessions",
    desc: "Attend career-focused sessions covering interview trends, communication skills, technical preparation, and HR questions.",
    icon: MessagesSquare,
  },
  {
    title: "Resume & Profile Building",
    desc: "Get professional guidance to create an industry-ready resume and optimize your job profiles to attract recruiters.",
    icon: FileUser,
  },
  {
    title: "Mock Interviews",
    desc: "Practice technical and HR interviews with experts to improve your preparation, communication, and confidence.",
    icon: Users,
  },
  {
    title: "Interview Opportunities",
    desc: "Get access to relevant interview opportunities through our industry network and hiring partners.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Start Your Professional Career",
    desc: "Turn your practical skills and interview preparation into career opportunities in industrial automation and engineering.",
    icon: Trophy,
  },
];

export default function PlacementJourney() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-white to-[#fcf5f5]">
      {/* Bg */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#801717]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#801717]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">

          <div className="relative h-full">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center px-4 py-2 bg-[#801717] text-white text-xs font-medium tracking-widest uppercase rounded-full mb-6">
                Your Career Journey
              </span>
              <h2 className="text-[34px] md:text-[45px] font-bold text-gray-900 leading-tight mb-6">
                From Training to
                <span className="block text-[#801717]">
                  Career Opportunities
                </span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-8 mb-8 max-w-xl">
                Our placement journey is designed to support you at every stage —
                from choosing the right course and developing practical skills to
                interview preparation and exploring career opportunities.
              </p>

              <div className="space-y-4 mb-9">
                {[
                  "Industry-Oriented Practical Training",
                  "Resume & Interview Preparation",
                  "Dedicated Placement Assistance",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#801717] shrink-0"
                    />
                    <span className="text-gray-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/placement-report.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#801717] text-white px-7 py-4 rounded-xl font-semibold hover:bg-[#6b1313] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download size={19} />
                Download Placement Report
              </Link>

            </div>

          </div>

          {/* right content */}
          <div className="relative">

            <div className="absolute left-[23px] md:left-[27px] top-7 bottom-7 w-[2px] bg-gradient-to-b from-[#801717] via-[#801717]/80 to-[#801717]/10" />

            <div className="space-y-6 md:space-y-7">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative flex items-start gap-4 md:gap-6 group"
                  >

                    {/* Timeline Icon */}
                    <div className="relative z-10 shrink-0">

                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#801717] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">

                        <Icon size={22} />

                      </div>

                      {/* Step Number */}
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-[#801717] rounded-full flex items-center justify-center text-[11px] font-bold text-[#801717] shadow-sm">
                        {index + 1}
                      </span>

                    </div>

                    <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm group-hover:border-[#801717]/30 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">

                      <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-2">
                        {step.title}
                      </h3>

                      <p className="text-sm md:text-[15px] text-gray-600 leading-7">
                        {step.desc}
                      </p>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}