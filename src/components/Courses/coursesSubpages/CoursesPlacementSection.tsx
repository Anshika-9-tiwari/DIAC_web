"use client";

const placementSupport = [
  {
    icon: "📄",
    title: "Resume Building",
    desc: "Professional resume preparation based on industry standards and automation job requirements.",
  },
  {
    icon: "🎯",
    title: "Interview Preparation",
    desc: "Mock interviews, technical discussions, aptitude guidance, and HR interview sessions.",
  },
  {
    icon: "📝",
    title: "Technical Mock Interviews",
    desc: "Practice real PLC, SCADA, HMI, Electrical and Automation interview questions.",
  },
  {
    icon: "🤝",
    title: "Job Referrals",
    desc: "Direct referrals through industry partners, automation companies, and manufacturing organizations.",
  },
  {
    icon: "📢",
    title: "Placement Assistance",
    desc: "Career guidance, company shortlisting, interview scheduling, and placement support.",
  },
  {
    icon: "🎯",
    title: "Career Counselling",
    desc: "One-on-one sessions to help you choose the right specialisation, target the right companies, and map a long-term career path.",
  },
];

export default function PlacementSupportSection() {
  return (
    <section 
     id="placements"
     className="py-18 bg-[#f8fbff]">

      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-[#801717] uppercase tracking-[4px] font-semibold text-sm mb-4">
            Placement Support
          </p>

          <h2 className="text-[33px] md:text-5xl font-bold text-gray-800 mb-6">
            We Do not Just Train You —{""}
            <span>
              We Help You Get Hired
            </span>
          </h2>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-9">
            End-to-end career support including resume building,
            technical interview preparation, job referrals,
            and dedicated placement assistance.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {placementSupport.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon */}
              <div className="text-4xl mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[24px] font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-8 text-lg">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}