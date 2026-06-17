"use client";

import { Briefcase, Wrench, CircleCheckBig } from "lucide-react";

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

export default function CoursesIndustryDemand({data,}: Props) {
  return (
    <section
      id="industry-demand"
      className="py-18 bg-[#fbfcff]"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-18">

          <div className="badge badge-outline badge-error px-5 py-4 mb-6">
            {data.badge}
          </div>

          <h2 className="text-[34px] md:text-[45px] font-bold text-[#0b1f3a] mb-8">
            {data.title}
          </h2>

          <p className="text-[17px] md:text-[19px] leading-9 text-gray-700 max-w-6xl mx-auto">
            {data.description}
          </p>

        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Industry Demand */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

            <div className="bg-gradient-to-r from-[#801717] to-[#a11c1c] px-8 py-6 text-white flex items-center gap-4">

              <Briefcase size={28} />

              <h3 className="text-xl md:text-2xl font-semibold">
                {data.industryTitle}
              </h3>

            </div>

            <div className="p-8">

              <div className="grid sm:grid-cols-1 gap-6">

                {data.jobRoles.map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-base-50 shadow hover:shadow-md border border-red-100"
                  >

                    <CircleCheckBig
                      size={20}
                      className="text-[#801717]"
                    />

                    <span className="font-medium text-gray-800 text-lg">
                      {role}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Tools & Software */}
          <div className="bg-white rounded-3xl border border-red-200 shadow-sm overflow-hidden ">

            <div className=" px-8 py-6 border-b border-b-red-200 text-gray-800 flex items-center shadow-sm gap-4 rounded">

              <Wrench size={28} />

              <h3 className="text-xl md:text-2xl font-semibold">
                {data.toolsTitle}
              </h3>

            </div>

            <div className="p-8">

              <div className="space-y-6">

                {data.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-base-50 border-0 shadow hover:shadow-md "
                  >

                    <CircleCheckBig
                      size={20}
                      className="text-red-900"
                    />

                    <span className="font-medium text-gray-800 text-lg">
                      {tool}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}