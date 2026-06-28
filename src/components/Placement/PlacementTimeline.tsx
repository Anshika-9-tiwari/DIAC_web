"use client"

import Image from "next/image";

const timelineData = [
  {
    title: "Placement Support at DIAC",
    icon: "/placement_icons/hiring.svg",
    side: "start",
    points: [
      "Resume Building Assistance",
      "Professional Resume Preparation",
      "Interview Preparation",
      "Mock Interviews",
      "HR Interview Sessions",
      "Industrial Project Exposure",
    ],
  },
  {
    title: "Technical Skill Development",
    icon: "/placement_icons/technical-support.svg",
    side: "end",
    points: [
      "PLC Programming",
      "SCADA Systems",
      "HMI Development",
      "VFD Drives",
      "Electrical Panel Design",
      "Industrial Networking",
      "Robotics & Automation",
      "Sensors & Instrumentation",
    ],
  },
  {
    title: "Job Opportunities in Multiple Industries",
    icon: "/placement_icons/job-search.svg",
    side: "start",
    points: [
      "Manufacturing Industries",
      "Automobile Sector",
      "FMCG Plants",
      "Pharmaceutical Industries",
      "Power Plants",
      "Oil & Gas Industries",
      "Packaging Industries",
      "Automation Solution Providers",
    ],
  },
  {
    title: "Job Roles After Training",
    icon: "/placement_icons/job-offer.svg",
    side: "end",
    points: [
      "PLC Programmer",
      "SCADA Engineer",
      "Automation Engineer",
      "Electrical Design Engineer",
      "Maintenance Engineer",
      "Control Panel Engineer",
      "Robotics Technician",
      "Service Engineer",
      "Production Automation Engineer",
      "Industrial Electrician",
    ],
  },
];


export default function PlacementTimeline() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block text-xs px-4 py-1 bg-[#801717] text-[#f7f7f7] rounded-full font-medium mb-6 tracking-wider">
            Placement Journey
          </span>

          <h2 className="text-3xl md:text-[45px] font-bold text-gray-900 mb-4">
            Career Support & Placement Assistance
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600">
            From technical skill development to interview preparation,
            DIAC supports students at every stage of their career journey.
          </p>

        </div>

        {/* Timeline */}
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

          {timelineData.map((item, index) => {

            const Icon = item.icon;

            return (
              <li key={index}>

                {index !== 0 && (
                  <hr className="bg-[#801717]" />
                )}

               <div className="timeline-middle">
                  <div className="w-16 h-16 rounded-full bg-white shadow-md border border-red-100 flex items-center justify-center p-3">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={34}
                      height={34}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`${
                    item.side === "start"
                      ? "timeline-start md:text-end"
                      : "timeline-end"
                  } mb-10`}
                >
                  <div className="card bg-base-50 text-gray-800 shadow-md border border-gray-200 hover:shadow-xl transition">

                    <div className="card-body">

                      <h3 className="card-title text-[#801717] text-xl mb-2">
                        {item.title}
                      </h3>

                      <ul className="space-y-3 text-[16px]">

                        {item.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex gap-3"
                          >
                            <span className="text-[#801717] font-bold">
                              ✓
                            </span>

                            <span>
                              {point}
                            </span>
                          </li>
                        ))}

                      </ul>

                    </div>

                  </div>
                </div>

                {index !== timelineData.length - 1 && (
                  <hr className="bg-[#801717]" />
                )}

              </li>
            );
          })}

        </ul>

      </div>

    </section>
  );
}