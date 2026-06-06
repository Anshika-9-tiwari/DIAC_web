import {
  Briefcase,
  Cpu,
  Factory,
  GraduationCap,
} from "lucide-react";

const timelineData = [
  {
    title: "Placement Support at DIAC",
    icon: Briefcase,
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
    icon: Cpu,
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
    icon: Factory,
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
    icon: GraduationCap,
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
    <section className="py-18 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <div className="badge badge-error badge-outline mb-5">
            Placement Journey
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0b1f3a] mb-4">
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

                {/* Icon */}
                <div className="timeline-middle">
                  <Icon
                    size={30}
                    className="text-[#801717]"
                  />
                </div>

                {/* Card */}
                <div
                  className={`${
                    item.side === "start"
                      ? "timeline-start md:text-end"
                      : "timeline-end"
                  } mb-8`}
                >
                  <div className="card bg-base-100 shadow-md border border-gray-200 hover:shadow-xl transition">

                    <div className="card-body">

                      <h3 className="card-title text-[#801717]">
                        {item.title}
                      </h3>

                      <ul className="space-y-3 text-sm">

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