"use client";

import {
  BriefcaseBusiness,
  CircleCheckBig,
  Wrench,
  ArrowUpRight,
  Settings,
} from "lucide-react";

interface Props {
  data: {
    badge: string;
    title: string;
    description: string;

    industryTitle: string;
    toolsTitle: string;

    jobRoles: string[];
    tools: string[];
  };
}

export default function CoursesIndustryDemand({ data }: Props) {
  return (
    <section
      id="industry-demand"
      className="py-14 md:py-18 bg-[#f8f9fc]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-5xl mx-auto mb-10 md:mb-14">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#801717]/20 bg-white text-[#801717] px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wider mb-5">
            <BriefcaseBusiness size={15} />
            {data.badge}
          </div>

          {/* Title */}
          <h2 className="text-[30px] md:text-[44px] font-bold text-gray-900 leading-tight mb-5">
            {data.title}
          </h2>

          {/* Description */}
          <p className="text-[16px] md:text-lg leading-8 text-gray-600">
            {data.description}
          </p>

        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 items-stretch">

          {/* ==================================================
              INDUSTRY / JOB ROLES
          ================================================== */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">

            {/* Panel Header */}
            <div className="p-6 md:p-8 border-b border-gray-100">

              <div className="flex items-start sm:items-center gap-4">

                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#801717] flex items-center justify-center shrink-0">
                  <BriefcaseBusiness
                    size={25}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[2px] font-semibold text-[#801717] mb-1">
                    Career Demand
                  </p>

                  <h3 className="text-xl md:text-[26px] font-semibold text-gray-900">
                    {data.industryTitle}
                  </h3>
                </div>

              </div>

            </div>

            {/* Job Roles */}
            <div className="p-5 md:p-7">

              <div className="grid sm:grid-cols-2 gap-3">

                {data.jobRoles.map((role, index) => (

                  <div
                    key={index}
                    className="group relative flex items-center gap-4 px-4 py-4 rounded-xl border border-gray-100 bg-[#fafafa] hover:bg-white hover:border-[#801717]/20 hover:shadow-md transition-all duration-300"
                  >

                    {/* Number */}
                    <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#801717] group-hover:border-[#801717] transition-all duration-300">

                      <span className="text-xs font-bold text-gray-500 group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    {/* Role */}
                    <p className="flex-1 text-[14px] md:text-[15px] font-semibold text-gray-800 leading-5">
                      {role}
                    </p>

                    <ArrowUpRight
                      size={16}
                      className="text-gray-300 group-hover:text-[#801717] shrink-0 transition"
                    />

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* ==================================================
              TOOLS & SOFTWARE
          ================================================== */}
          <div className="relative bg-[#801717] rounded-3xl overflow-hidden text-white">

            <div className="relative z-10 p-6 md:p-8">

              {/* Tools Header */}
              <div className="flex items-center gap-4 mb-7">

                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">

                  <Wrench
                    size={25}
                    className="text-white"
                  />

                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[2px] font-semibold text-white/60 mb-1">
                    Practical Exposure
                  </p>

                  <h3 className="text-xl md:text-[26px] font-semibold text-white">
                    {data.toolsTitle}
                  </h3>

                </div>

              </div>

              {/* Small Description */}
              <p className="text-sm md:text-[15px] text-white/70 leading-6 mb-7">
                Gain hands-on experience with industry-relevant
                software, platforms and technologies used by
                automation professionals.
              </p>

              {/* Tools */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">

                {data.tools.map((tool, index) => (

                  <div
                    key={index}
                    className="group flex items-center gap-3 px-4 py-3.5 rounded-xl  border border-white/10 bg-white text-gray-900 transition-all duration-300"
                  >

                    {/* Icon */}
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0 group-hover:bg-[#801717]/10">

                      <Settings
                        size={16}
                        className="text-red-700 group-hover:text-[#801717]"
                      />

                    </div>

                    {/* Tool */}
                    <span className="text-[14px] font-medium leading-5">
                      {tool}
                    </span>

                  </div>

                ))}

              </div>

              {/* Bottom Information */}
              <div className="mt-7 pt-6 border-t border-white/15 flex items-center gap-3">

                <CircleCheckBig
                  size={18}
                  className="text-white shrink-0"
                />

                <p className="text-xs md:text-sm text-white/70">
                  Practical training with real industrial
                  tools and applications.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}