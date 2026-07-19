"use client";

const steps = [
  {
    title: "Training Need Analysis",
    desc: "Understanding business objectives, workforce challenges, and training requirements.",
  },
  {
    title: "Skill Gap Assessment",
    desc: "Identifying existing competencies and required technical skills.",
  },
  {
    title: "Customized Curriculum Design",
    desc: "Creating a tailored learning roadmap aligned with organizational goals.",
  },
  {
    title: "Training Delivery",
    desc: "Interactive sessions, practical workshops, demonstrations, and case studies.",
  },
  {
    title: "Evaluation & Assessment",
    desc: "Measuring learning outcomes through assignments and practical assessments.",
  },
  {
    title: "Continuous Improvement",
    desc: "Recommendations for long-term workforce development and upskilling.",
  },
];

export default function CorporateProcess() {
  return (
    <section className="py-18 bg-gradient-to-b from-white to-[#fcf7f7]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-16">

          <span className="inline-block text-xs px-4 py-1 bg-[#801717] text-[#f7f7f7] rounded-full font-medium mb-5">Our Approach</span>

          <h2 className="text-[32px] md:text-[45px] font-bold text-gray-900 mb-5">
            Our Corporate Training Process
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A structured process designed to align training with business goals,
            workforce requirements, and measurable outcomes.
          </p>

        </div>

        {/* Steps */}
        <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6">
          <ul className="steps steps-horizontal w-[1400px]">
            {steps.map((step, index) => (
              <li
                key={index}
                className="step snap-center step-natural"
              >
                <div className="w-[230px] mt-6 text-center">
                  <span className="text-lg font-semibold text-red-900 block mb-2">
                    {step.title}
                  </span>

                  <p className="text-sm text-gray-600 leading-6">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}