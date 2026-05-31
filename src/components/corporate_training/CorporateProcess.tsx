"use client";

const steps = [
  {
    title: " Training Need Analysis",
    desc: "We begin by understanding your organization's objectives, workforce challenges, and skill development requirements.",
  },
  {
    title: " Skill Gap Assessment",
    desc: "Our experts identify existing skill gaps and determine the competencies required for improved performance.",
  },
  {
    title: "Customized Curriculum Design",
    desc: "Based on assessment results, we create a tailored training roadmap aligned with your business goals.",
  },
  {
    title: " Training Delivery",
    desc: "Training is delivered through interactive sessions, practical demonstrations, workshops, and real-world case studies.",
  },
  {
    title: " Evaluation and Assessment",
    desc: "Participant performance is assessed through practical exercises, assignments, and evaluations.",
  },
  {
    title: "Continuous Improvement",
    desc: "Organizations receive recommendations for ongoing employee development and workforce enhancement.",
  },
];

export default function CorporateProcess() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-[#fcf7f7]  text-black">
      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* Label */}
        <p className="text-xs font-medium tracking-widest text-[#801717] uppercase mb-5">
          Our Approach
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Our Corporate Training Process
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-[16px]">
          A structured five-step process ensures every programme is aligned to your
          plant’s specific needs and produces real skill uplift.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4 ">

          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-6 border border-red-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-8">
                <div className="w-12 h-12 rounded-full bg-[#801717] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {i + 1}
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-[#0b1f3a] mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-7 text-[15px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}