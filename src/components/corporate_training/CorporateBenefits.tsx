"use client";

import {
  BriefcaseBusiness,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Users,
  GraduationCap,
} from "lucide-react";

const benefits = [
  "Improve Workforce Productivity",
  "Enhance Technical Competencies",
  "Reduce Operational Errors",
  "Increase Equipment Reliability",
  "Improve Workplace Safety",
  "Accelerate Digital Transformation",
  "Support Technology Adoption",
  "Strengthen Employee Engagement",
  "Reduce Employee Turnover",
  "Improve Business Performance",
];

const features = [
  {
    icon: Cpu,
    title: "Industry-Focused Learning",
    desc: "Unlike generic training providers, DIAC specializes in industrial and technical training programs designed specifically for manufacturing plants, automation companies, production facilities, and engineering organizations.",
  },

  {
    icon: GraduationCap,
    title: "Practical Hands-On Learning",
    desc: "Employees learn through live demonstrations, industrial case studies, practical exercises, project-based learning, simulations, equipment handling sessions, and troubleshooting workshops.",
  },

  {
    icon: BriefcaseBusiness,
    title: "Customized Training Solutions",
    desc: "Every organization has unique requirements. Our training programs are customized based on employee skill levels, business objectives, technologies, operational challenges, and desired outcomes.",
  },

  {
    icon: Users,
    title: "Experienced Industry Trainers",
    desc: "Our trainers bring years of real industrial experience, helping participants understand practical applications, industry best practices, and modern automation technologies.",
  },

  {
    icon: TrendingUp,
    title: "Flexible Training Models",
    desc: "Choose from on-site corporate training, classroom programs, online instructor-led sessions, hybrid learning, weekend batches, and fast-track workshops.",
  },

  {
    icon: ShieldCheck,
    title: "Measurable Business Impact",
    desc: "Our programs focus on improving productivity, reducing downtime, increasing equipment reliability, and helping organizations achieve long-term operational excellence.",
  },
];

export default function CorporateBenefits() {
  return (
    <section className="py-18 bg-gradient-to-b from-[#f7f7f7] to-[#faf7f7]">

      <div className="max-w-7xl mx-auto px-8">

        {/* SECTION 1 */}
        <div className=" mb-16">

          <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-[#801717] text-sm font-medium mb-5">
            Why Corporate Training Matters
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-relaxed">
            Why Corporate Training is Essential for
            <span className="block text-[#801717]">
              Modern Organizations
            </span>
          </h2>

          <p className="max-w-6xl max-auto text-gray-600 text-lg leading-8 mb-2">
           The modern workplace is evolving faster than ever before. Organizations that invest in employee learning and development consistently outperform competitors in productivity, innovation, and operational efficiency.
          </p>
          <p className="max-w-6xl max-auto text-gray-600 text-lg leading-8 mb-4">
            As industrial automation and smart manufacturing continue to reshape industries, organizations need employees who can effectively operate, troubleshoot, maintain, and optimize advanced systems.
          </p>
          <p className="text-red-900 font-medium text-lg leading-8 mb-4">
            Corporate training is no longer an option—it is a strategic business investment.
          </p>
          <p className="text-gray-800 text-lg leading-8">
            Corporate training plays a critical role in helping businesses:
          </p>

        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-24">

          {benefits.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-red-100 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold text-gray-600 text-md">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* SECTION 2 */}
        <div className="mb-16">

          <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-[#801717] text-sm font-medium mb-5">
            Why Choose DIAC
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0b1f3a] mb-6 leading-tight">
           Why Choose DIAC for 
            <span className="block text-[#801717]">
              Corporate Training?
            </span>
          </h2>

          <p className="max-w-6xl max-auto text-gray-600 text-lg leading-8">
            With expertise in Industrial Automation, PLC, SCADA, HMI,
            Robotics, Electrical Systems, Industry 4.0, and Smart Manufacturing,
            DIAC delivers practical corporate training programmes that create
            measurable workplace impact.
          </p>

        </div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >

                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                  <Icon className="text-[#801717]" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-[#0b1f3a] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
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