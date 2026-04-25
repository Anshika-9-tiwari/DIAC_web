"use client";

const steps = [
  {
    title: "Needs Assessment",
    desc: "We audit your team’s current skills, your equipment, and your production challenges.",
  },
  {
    title: "Custom Curriculum",
    desc: "Training content is mapped to your exact machinery, brands and operating environment.",
  },
  {
    title: "Expert Delivery",
    desc: "Seasoned automation professionals run intensive, hands-on sessions at your site or lab.",
  },
  {
    title: "Skill Assessment",
    desc: "Practical tests and knowledge checks confirm competency before certification is issued.",
  },
  {
    title: "ROI Report",
    desc: "A detailed impact report with pre/post benchmarks is shared with your management team.",
  },
];

export default function CorporateProcess() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Label */}
        <p className="text-xs font-medium tracking-widest text-[#801717] uppercase mb-3 ">
          Our Approach
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How Your Corporate Training is Delivered
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-sm">
          A structured five-step process ensures every programme is aligned to your
          plant’s specific needs and produces real skill uplift.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* Number Circle */}
              <div className="w-10 h-10 bg-[#801717] rounded-full flex items-center justify-center font-semibold mb-4">
                {i + 1}
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}