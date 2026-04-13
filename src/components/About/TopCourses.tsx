"use client";

import {
  Cpu,
  Settings,
  Bot,
  Wrench,
  Ruler,
  Activity,
  Clock,
  Network,
  Zap,
  Factory,
  Sun,
} from "lucide-react";

const courses = [
  { icon: Cpu, title: "Industrial Automation Training", tag: "FLAGSHIP" },
  { icon: Settings, title: "PLC Training", tag: "CORE" },
  { icon: Activity, title: "SCADA & HMI Training", tag: "CORE" },
  { icon: Bot, title: "Robotics Training", tag: "ADVANCED" },

  { icon: Wrench, title: "Drives & Motors Training", tag: "SPECIALIST" },
  { icon: Ruler, title: "Panel Designing & AutoCAD", tag: "DESIGN" },
  { icon: Activity, title: "Process Instrumentation", tag: "SPECIALIST" },
  { icon: Clock, title: "6 Months Industrial Training", tag: "B.TECH / DIPLOMA" },

  { icon: Network, title: "PLC Networking", tag: "ADVANCED" },
  { icon: Zap, title: "Servo Motors Training", tag: "SPECIALIST" },
  { icon: Factory, title: "DCS Training", tag: "ADVANCED" },
  { icon: Sun, title: "Summer / Winter Training", tag: "SHORT-TERM" },
];

export default function TopCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Small Label */}
        <p className="text-xs tracking-widest text-[#801717] mb-2 uppercase">
          What We Teach
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Our Top-Demand Courses
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mb-12 max-w-2xl text-sm">
          From foundational PLC programming to advanced Robotics, our courses
          cover the full spectrum of modern Industrial Automation.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                key={index}
                className="p-4 border border-gray-200 bg-white shadow-md hover:shadow-lg transition duration-300"
              >
                {/* Icon */}
                <Icon size={20} className="text-[#801717] mb-2" />

                {/* Title */}
                <h3 className="text-sm font-semibold mb-2">
                  {course.title}
                </h3>

                {/* Tag */}
                <span className="text-[10px] px-2 py-1 border border-gray-300 text-gray-600">
                  {course.tag}
                </span>
              </div>
            );
          })}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <a href="/courses">
            <button className="bg-[#801717] text-white px-6 py-3 text-sm font-semibold hover:bg-red-800   transition">
                VIEW ALL COURSES
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}