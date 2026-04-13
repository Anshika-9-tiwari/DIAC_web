"use client";

export default function Testimonials() {
  const data = [
    {
      name: "Amit Kumar",
      role: "PLC Training Graduate · Placed at Siemens",
      text: "DIAC transformed my career. The hands-on PLC and SCADA training was unlike anything in my college curriculum. Within 2 months of completing the course, I was placed at a leading automation firm in Pune.",
      initials: "AK",
    },
    {
      name: "Priya Sharma",
      role: "Robotics Training · Now at ABB Robotics",
      text: "The Robotics Training at DIAC gave me practical exposure that I couldn’t find anywhere else in Delhi/NCR. The faculty’s industry experience is exceptional — they teach real-world scenarios, not just textbook theory.",
      initials: "PS",
    },
    {
      name: "Rajesh Verma",
      role: "DCS Corporate Training · Senior Engineer, ONGC",
      text: "As a working professional, DIAC’s corporate training programme helped me upskill in DCS without disrupting my job. The flexible schedule and expert instructors made all the difference.",
      initials: "RV",
    },
  ];

  return (
    <section className="bg-[#071c2f] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Label */}
        <p className="text-xs tracking-widest text-gray-200 mb-2 uppercase">
          Student Voices
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Students Say
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {data.map((item, i) => (
            <div
              key={i}
              className="border border-gray-700 bg-gray-50 p-6 flex flex-col justify-between hover:shadow-2xl rounded-2xl"
            >
              {/* Stars */}
              <div className="text-[#801717] mb-3">
                ★★★★★
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                “{item.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-auto ">
                <div className="bg-[#801717] text-white w-8 h-8 flex items-center justify-center text-xs font-bold">
                  {item.initials}
                </div>

                <div>
                  <p className="text-sm text-gray-700 font-semibold">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}