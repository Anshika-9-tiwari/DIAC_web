"use client";

export default function CorporateTestimonials() {
  const testimonials = [
    {
      text: "DIAC’s PLC and SCADA training transformed how our maintenance team handles downtime. Fault diagnosis time dropped by over 40% within three months of the programme.",
      name: "Rajan Verma",
      role: "Plant Head, Automotive Components Mfg.",
      initials: "RV",
    },
    {
      text: "We sent 18 engineers for Drives & Servo training at DIAC’s Noida facility. The hands-on approach on real hardware made all the difference — concepts stuck immediately.",
      name: "Anita Singh",
      role: "Training Manager, Packaging Industry",
      initials: "AS",
    },
    {
      text: "Our DCS-trained operators from DIAC’s programme now handle process upsets confidently. The curriculum was customised perfectly to our Honeywell Experion system.",
      name: "Pradeep Mehta",
      role: "Operations Director, Chemical Process Plant",
      initials: "PM",
    },
  ];

  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Label */}
        <p className="text-xs tracking-widest text-[#801717] uppercase mb-3">
          Client Voices
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a] mb-4">
          What Our Corporate Clients Say
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 max-w-2xl mb-12 text-sm">
          Trusted by manufacturing companies across India to upskill their automation engineers.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition hover:-translate-y-1 duration-300"
            >

              {/* Stars */}
              <div className="text-[#801717] mb-3 text-sm">
                ★★★★★
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                “{item.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#801717] text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {item.initials}
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
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