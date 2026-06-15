"use client";

import {
  Droplets,
  Package,
  MoveHorizontal,
  Settings,
  TrafficCone,
  BarChart3,
  Factory,
  Cog,
} from "lucide-react";


const projects = [
  {
    icon: Droplets,
    title: "Water Treatment Plant",
    desc: "Pumping, filtration, dosing, and level control sequences with full SCADA monitoring and alarm management.",
    tech: "PLC • SCADA • HMI",
  },
  {
    icon: Package,
    title: "Bottle Filling Plant",
    desc: "Conveyor-driven filling with reject logic, batch counters, and recipe-based HMI control.",
    tech: "PLC • HMI • SENSORS",
  },
  {
    icon: MoveHorizontal,
    title: "Conveyor Automation",
    desc: "Multi-zone conveyor with product sorting, interlocking, and VFD speed control.",
    tech: "PLC • VFD • NETWORKING",
  },
  {
    icon: Settings,
    title: "Packaging Machine",
    desc: "Servo-driven packaging with product detection, batch counting, and full alarm handling.",
    tech: "PLC • SERVO • HMI",
  },
  {
    icon: TrafficCone,
    title: "Traffic Light Control",
    desc: "PLC-based adaptive traffic management with HMI override and fault diagnostics.",
    tech: "PLC • HMI",
  },
  {
    icon: BarChart3,
    title: "Tank Level Monitoring",
    desc: "PID-controlled level system with continuous trending, alarm logging, and data export.",
    tech: "PLC • SCADA • PID",
  },
  {
    icon: Factory,
    title: "Smart Factory App",
    desc: "OEE monitoring and production data acquisition with SCADA dashboard on TIA Portal.",
    tech: "TIA PORTAL • SCADA",
  },
  {
    icon: Cog,
    title: "Process Automation",
    desc: "Chemical process simulation with closed-loop PID control, interlocks, and safety systems.",
    tech: "PLC • INSTRUMENTATION",
  },
];

export default function CoursesProjectSection() {
  return (
    <section 
      id="projects"
      className="py-18 bg-white text-gray-800">

      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-18">

          <p className="text-[#801717] uppercase tracking-[4px] font-semibold text-sm mb-4">
            Industrial Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0b1f3a] mb-6">
            Real Systems You will Build
          </h2>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-9">
            Every student implements complete automation projects — from wiring and programming to live commissioning — just like in real industry.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="card bg-white border border-gray-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl"
              >
                <div className="card-body">

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
                    <Icon
                      size={28}
                      className="text-[#801717]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-8 mb-5">
                    {project.desc}
                  </p>

                  {/* Tech Badge */}
                  <div>
                    <span className="badge badge-lg bg-red-50 text-[#801717] border-0 px-4 py-4 font-semibold">
                      {project.tech}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}