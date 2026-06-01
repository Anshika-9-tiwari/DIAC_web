"use client";

import {
  Layers,
  Monitor,
  Users,
  Activity,
  FileText,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Increased Productivity",
    desc: "Skilled employees perform tasks more efficiently, resulting in improved operational performance and higher productivity levels.",
  },
  {
    icon: Monitor,
    title: "Reduced Downtime",
    desc: "Properly trained teams can quickly identify and resolve technical issues, minimizing costly production interruptions.",
  },
  {
    icon: Users,
    title: "Improved Equipment Utilization",
    desc: "Employees gain a deeper understanding of industrial equipment, enabling organizations to maximize asset performance.",
  },
  {
    icon: Activity,
    title: "Better Safety Standards",
    desc: "Training promotes safe operating procedures and compliance with industry regulations, reducing workplace incidents.",
  },
  {
    icon: Clock,
    title: "Faster Technology Adoption",
    desc: "Organizations implementing new technologies can accelerate adoption through structured training programs.",
  },
  {
    icon: FileText,
    title: "Enhanced Employee Confidence",
    desc: "Employees who possess advanced technical skills demonstrate greater confidence when handling complex systems and challenges.",
  },
];

export default function WhyChooseDIAC() {
  return (
    <section className="py-20 bg-[#fcf8f8]">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        {/* Label */}
        <p className="text-xs tracking-widest text-[#801717] uppercase mb-3">
          benefits of DIAC
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#0b1f3a] mb-5">
           Benefits of Industrial Corporate Training
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mb-15">
          Since 2008, DIAC has closed the skills gap between industry demand and
          engineering talent across India's manufacturing sector.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 ">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-300"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 bg-[#801717] rounded-lg flex items-center justify-center mb-5">
                  <Icon size={22} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-3 text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
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