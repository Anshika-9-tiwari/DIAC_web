"use client";

const courses = [
  {
    title: "Manufacturing Industry",
    desc: "Manufacturers require skilled professionals who can efficiently manage production systems, automation equipment, and industrial processes. Our programs help organizations:",
    points: [
      "Improve production efficiency",
      "Minimize downtime",
      "Enhance automation utilization",
      "Reduce maintenance costs",
      "Increase workforce competency",
    ],
  },

  {
    title: "Automotive Industry",
    desc: "Automotive manufacturers increasingly rely on advanced automation technologies. Our training programs support:",
    points: [
      "Robotics implementation",
      "Automated production systems",
      "Quality control processes",
      "Manufacturing optimization",
    ],
  },

  {
    title: "Pharmaceutical Industry",
    desc: "The pharmaceutical sector demands precision, compliance, and operational excellence. We provide training focused on:",
    points: [
      "Process automation",
      "Production monitoring",
      "Control systems",
      "Industrial compliance practices",
    ],
  },

  {
    title: "Food and Beverage Industry",
    desc: "Food processing facilities require reliable automation systems to maintain productivity and quality. Training focuses on:",
    points: [
      "Process control",
      "Equipment monitoring",
      "Production automation",
      "Maintenance optimization",
    ],
  },

  {
    title: "Power and Energy Sector",
    desc: "Power plants and energy facilities require highly skilled technical personnel. Our training supports:",
    points: [
      "Electrical systems",
      "Automation controls",
      "SCADA operations",
      "Industrial communication systems",
    ],
  },
];

export default function CorporateTManufacturing() {
  return (
    <section className="py-20 bg-[#fbfcff] text-gray-700">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-18">
          <h2 className="text-3xl md:text-[42px] font-bold text-[#0b1f3a] mb-6">
            Industrial Corporate Training for Manufacturing Industries
          </h2>
          <p className="max-w-6xl max-autotext-gray-600 text-[16px] max-w-4xl mx-auto">
           Industrial Corporate Training focuses on improving technical capabilities within industrial environments. <br /> At DIAC, we work with organizations across multiple sectors, including:
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >

              {/* RED HEADER */}
              <div className="bg-[#801717] text-white p-5">

                {/* Tag
                <span className="text-[10px] px-3 py-1 bg-white/20 rounded-full">
                  {course.tag}
                </span> */}

                {/* Title */}
                <h3 className="mt-3 font-semibold text-xl leading-snug">
                  {course.title}
                </h3>
              </div>

              {/* BODY */}
              <div className="p-5 text-md text-gray-600">

                {/* Description */}
                <p className="mb-4 ">
                  {course.desc}
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {course.points.map((point, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-[#801717]">•</span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}