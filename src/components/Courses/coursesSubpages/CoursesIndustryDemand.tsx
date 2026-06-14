"use client";

import { Briefcase, Wrench, CheckCircle2, CircleCheckBig } from "lucide-react";

const jobRoles = [
  "Automation Engineer",
  "Instrumentation Engineer",
  "Maintenance Engineer",
  "Commissioning Engineer",
  "PLC Programmer",
  "Service Engineer",
  "Project Engineer",
  "SCADA Engineer",
  "HMI Developer",
  "Control Panel Designer",
];

const tools = [
  "Siemens TIA Portal",
  "S7-1200 / S7-1500 PLC",
  "WinCC HMI",
  "WinCC SCADA",
  "Factory I/O",
  "SINAMICS VFD",
  "Industrial Networking",
];

export default function CoursesIndustryDemand() {
  return (
    <section
      id="industry-demand"
      className="py-20 bg-[#fbfcff]"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-16">

          <div className="badge badge-outline badge-error px-5 py-4 mb-6">
            Career Opportunities
          </div>

          <h2 className="text-[33px] md:text-5xl font-bold text-[#0b1f3a] mb-8">
            Industry Demand & Tools Covered
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-600 max-w-6xl mx-auto">
            Industrial Automation is one of the fastest-growing sectors worldwide.
            Industries are rapidly adopting smart manufacturing, Industry 4.0,
            process automation, and digital transformation technologies, creating
            strong demand for skilled automation professionals.
          </p>

        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Industry Demand */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

            <div className="bg-gradient-to-r from-[#801717] to-[#a11c1c] px-8 py-6 text-white flex items-center gap-4">

              <Briefcase size={28} />

              <h3 className="text-xl md:text-2xl font-bold">
                Industry Demand
              </h3>

            </div>

            <div className="p-8">

              <div className="grid sm:grid-cols-1 gap-4">

                {jobRoles.map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-100"
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
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

            <div className="bg-gradient-to-r from-white to-red-50 px-8 py-6 border-b border-b-red-100 text-gray-800 flex items-center shadow-md gap-4">

              <Wrench size={28} />

              <h3 className="text-xl md:text-2xl font-bold">
                Tools & Software Covered
              </h3>

            </div>

            <div className="p-8">

              <div className="space-y-4">

                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 border-0 "
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