"use client";

const courses = [
  {
    tag: "CORE",
    title: "PLC Programming & Commissioning",
    desc: "Master Programmable Logic Controllers from ladder logic basics to advanced structured programming and commissioning on live panels.",
    points: [
      "Siemens S7-300/400/1200/1500 & Allen Bradley",
      "Ladder diagram, FBD, STL programming",
      "I/O configuration & field device wiring",
      "Fault diagnosis & troubleshooting",
    ],
    duration: "3-5 Days",
    mode: "On-site / Noida Lab",
  },
  {
    tag: "VISUALISATION",
    title: "SCADA & HMI Training",
    desc: "Build and operate real-time monitoring and control systems using industry-standard SCADA platforms and HMI panels.",
    points: [
      "WinCC, iFIX, Ignition SCADA platforms",
      "HMI screen design & tag configuration",
      "Alarm management & trending",
      "OPC/Modbus communication protocols",
    ],
    duration: "3-4 Days",
    mode: "Hybrid",
  },
  {
    tag: "MOTION",
    title: "Drives & Motors Training",
    desc: "Understand, configure, and maintain AC/DC variable frequency drives and motor control systems.",
    points: [
      "VFD selection & parameter setting",
      "Drive commissioning (Siemens/ABB)",
      "Motor control circuits",
      "Energy efficiency diagnostics",
    ],
    duration: "2-3 Days",
    mode: "On-site / Lab",
  },
  {
    tag: "ROBOTICS",
    title: "Industrial Robotics Training",
    desc: "Learn robot programming, simulation, and automation integration in manufacturing.",
    points: [
      "Robot programming basics",
      "Pick & place automation",
      "Industrial robot safety",
      "Real-time simulation",
    ],
    duration: "4-5 Days",
    mode: "On-site",
  },
  {
    tag: "INSTRUMENTATION",
    title: "Process Instrumentation",
    desc: "Understand sensors, transmitters, and industrial measurement systems.",
    points: [
      "Pressure, flow, level sensors",
      "Calibration techniques",
      "Field instrumentation wiring",
      "Industrial standards",
    ],
    duration: "2-3 Days",
    mode: "Hybrid",
  },
  {
    tag: "DESIGN",
    title: "Panel Designing & AutoCAD",
    desc: "Design industrial panels using AutoCAD and electrical standards.",
    points: [
      "Panel layout design",
      "AutoCAD electrical",
      "Wiring standards",
      "Industrial documentation",
    ],
    duration: "3 Days",
    mode: "Lab",
  },
  {
    tag: "ADVANCED",
    title: "DCS Training",
    desc: "Learn Distributed Control Systems used in process industries.",
    points: [
      "DCS architecture",
      "Control loops",
      "System configuration",
      "Real-time monitoring",
    ],
    duration: "3-4 Days",
    mode: "On-site",
  },
  {
    tag: "NETWORKING",
    title: "PLC Networking",
    desc: "Understand industrial communication protocols and networking.",
    points: [
      "Profibus, Profinet",
      "Ethernet/IP",
      "Modbus TCP/IP",
      "Network troubleshooting",
    ],
    duration: "2-3 Days",
    mode: "Hybrid",
  },
  {
    tag: "SERVO",
    title: "Servo Motors Training",
    desc: "Learn servo systems used in precision automation.",
    points: [
      "Servo drives setup",
      "Motion control basics",
      "Positioning systems",
      "Industrial applications",
    ],
    duration: "2-3 Days",
    mode: "Lab",
  },
];

export default function CorporateCourses() {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a] mb-3">
            Corporate Training Solutions (What We Offer)
          </h2>
          <p className="text-gray-500 text-sm">
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

                {/* Tag */}
                <span className="text-[10px] px-3 py-1 bg-white/20 rounded-full">
                  {course.tag}
                </span>

                {/* Title */}
                <h3 className="mt-3 font-semibold text-lg leading-snug">
                  {course.title}
                </h3>
              </div>

              {/* BODY */}
              <div className="p-5 text-sm text-gray-600">

                {/* Description */}
                <p className="mb-4">
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
              <div className="border-t p-4 flex justify-between text-sm text-gray-500">
                <span>Duration: {course.duration}</span>
                <span className="text-[#801717] font-medium">
                  {course.mode}
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}