"use client";

const courses = [
  {
    title: "PLC Programming Training",
    desc: "Programmable Logic Controllers (PLC) form the foundation of modern industrial automation systems. Our PLC Corporate Training programs help employees develop expertise in:",
    points: [
      "PLC architecture",
      "PLC programming",
      "Ladder logic development",
      "Process automation",
      "Industrial control systems",
      "Troubleshooting techniques",
      "System maintenance",
      "Industrial networking"
    ],
  },
  {
    title: "SCADA Training",
    desc: "SCADA systems enable organizations to monitor and control industrial processes efficiently. Our SCADA Corporate Training covers:",
    points: [
      "SCADA architecture",
      "Real-time monitoring",
      "Data acquisition systems",
      "Alarm management",
      "Process visualization",
      "Industrial communication protocols",
      "Report generation",
      "Remote monitoring systems",
    ],
  },
  {
    title: "HMI Training",
    desc: "Human Machine Interface (HMI) systems improve operational visibility and productivity. Training includes:",
    points: [
      "HMI design principles",
      "Screen development",
      "Industrial visualization",
      "Process control interfaces",
      "Alarm systems",
      "Data management",
    ],
  },
  {
    title: "Industrial Robotics Training",
    desc: "Automation and robotics are transforming manufacturing operations globally. Our Industrial Robotics Training helps participants understand:",
    points: [
      "Robotics fundamentals",
      "Robot programming",
      "Motion control",
      "Automated manufacturing",
      "Robotic integration",
      "Industrial applications",
      "Maintenance and troubleshooting",
    ],
  },
  {
    title: "VFD and Servo Drive Training",
    desc: "Employees learn:",
    points: [
      "Motor control principles",
      "Variable Frequency Drive programming",
      "Servo motor applications",
      "Industrial motion control",
      "Energy optimization",
      "Maintenance procedures",
    ],
  },
  {
    title: "Panel Design Training",
    desc: "Our panel design programs focus on:",
    points: [
      "Electrical panel design",
      "Control panel development",
      "Wiring standards",
      "Electrical safety",
      "Documentation practices",
      "Industrial implementation",
    ],
  },
  {
    title: "Industry 4.0 Training",
    desc: "Organizations preparing for digital transformation can benefit from training in:",
    points: [
      "Smart manufacturing",
      "Industrial IoT",
      "Data-driven operations",
      "Digital factories",
      "Predictive maintenance",
      "Industrial connectivity",
      "Automation integration",
    ],
  },
];

export default function CorporateCourses() {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-18">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b1f3a] mb-3">
            Corporate Training Programs Offered by DIAC
          </h2>
          <p className="text-gray-600 text-[18px] max-w-2xl mx-auto">
            Discover courses across different domains
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
              <div className="p-8 text-md text-gray-600">

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

              {/* FOOTER */}
              {/* <div className="border-t p-4 flex justify-between text-sm text-gray-500">
                <span>Duration: {course.duration}</span>
                <span className="text-[#801717] font-medium">
                  {course.mode}
                </span>
              </div> */}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}