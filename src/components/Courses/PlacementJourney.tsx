"use client";

export default function PlacementJourney() {
  const steps = [
    {
      title: "Course Program",
      desc: "Our expert counsellors will assist you in finding the right course for you.",
    },
    {
      title: "Industry Trainers",
      desc: "All of our instructors are employed professionals with extensive years of experience.",
    },
    {
      title: "Industry Project Preparation",
      desc: "Our courses are designed to prepare you with real-world industry projects.",
    },
    {
      title: "Career Oriented Sessions",
      desc: "Personalized career focused sessions to guide on interview trends, soft skills and HR questions.",
    },
    {
      title: "Resume & Profile Building",
      desc: "Get help in creating resume & Naukri profile and grab attention of HR’s.",
    },
    {
      title: "Mock Interviews",
      desc: "Mock interviews with industry experts to prepare you for real interviews and boost your confidence.",
    },
    {
      title: "Interview Opportunities",
      desc: "Get access to interview opportunities with our hiring partners and kick-start your career.",
    },
    {
      title: "Congratulations for your Placement!!",
      desc: "We have placed more than 20k students in top MNC firms. Welcome to the DIAC family!",
    },
  ];

  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* 🔹 LEFT CONTENT */}
        <div className="max-w-lg  p-5 text-center rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-6 text-[#0b1f3a]">
            Placement Journey
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
            Join our Job-Oriented Courses designed by Industry Experts that helps you kick-start your career in IT.
          </p>

          <button className="bg-[#801717] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">
            Download Placement Report
          </button>
        </div>

        {/* 🔹 RIGHT TIMELINE */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-300"></div>

          <div className="space-y-10">

            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 relative">

                {/* NUMBER CIRCLE */}
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-[#801717] text-[#801717] font-semibold shadow">
                  {index + 1}
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="font-semibold text-lg text-[#0b1f3a] mb-1">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 max-w-md">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}