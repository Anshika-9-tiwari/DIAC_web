"use client";

import {
  BriefcaseBusiness,
  CircleCheckBig,
  TrendingUp,
} from "lucide-react";

interface CareerData {
  sectionTag: string;
  title: string;
  description: string;
  opportunitiesTitle?: string;
  opportunities: string[];
}

interface Props {
  data: CareerData;
}

export default function CourseCareerOutcomes({ data }: Props) {
  return (
    <section
      id="career"
      className="py-14 md:py-18 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#801717] text-[#f7f7f7] text-xs font-semibold uppercase tracking-[2px] mb-5">
              <TrendingUp size={15} />
              {data.sectionTag}
            </div>

            {/* TITLE */}
            <h2 className="text-[32px] md:text-[42px] font-bold text-gray-900 leading-tight mb-5">
              {data.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[16px] md:text-lg text-gray-600 leading-8 max-w-xl">
              {data.description}
            </p>

            {/* SMALL HIGHLIGHT */}
            {/* <div className="mt-8 flex items-start gap-4 border-l-4 border-[#801717] bg-[#801717]/5 rounded-r-xl p-5">

              <div className="w-10 h-10 rounded-xl bg-[#801717] text-white flex items-center justify-center shrink-0">
                <BriefcaseBusiness size={20} />
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Industry-Focused Career Path
                </p>

                <p className="text-sm text-gray-600 leading-6">
                  Build practical skills for career opportunities
                  across automation and industrial sectors.
                </p>
              </div>

            </div> */}

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="bg-[#fdfdfd] border border-gray-200 rounded-3xl p-5 md:p-8 lg:p-10">

            {/* HEADER */}
            <div className="flex items-center gap-4 mb-7">

              <div className="w-12 h-12 rounded-2xl bg-[#801717] flex items-center justify-center text-white shrink-0">
                <BriefcaseBusiness size={23} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[2px] text-[#801717] font-semibold mb-1">
                  Job Roles
                </p>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {data.opportunitiesTitle ||
                    "Career Opportunities"}
                </h3>
              </div>

            </div>

            {/* CAREER GRID */}
            <div className="grid sm:grid-cols-2 gap-3">

              {data.opportunities.map((item, index) => (

                <div
                  key={index}
                  className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-4 hover:border-[#801717]/30 hover:shadow-md transition-all duration-300"
                >

                  {/* CHECK */}
                  <div className="w-8 h-8 rounded-lg bg-[#f7ebeb] flex items-center justify-center shrink-0 group-hover:bg-[#801717] transition-colors duration-300">

                    <CircleCheckBig
                      size={17}
                      className="text-[#801717] group-hover:text-white transition-colors duration-300"
                    />

                  </div>

                  {/* ROLE */}
                  <p className="text-[14px] md:text-[15px] font-medium text-gray-800 leading-5">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}