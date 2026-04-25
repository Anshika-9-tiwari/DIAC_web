"use client";

export default function PlacementRecord() {
  return (
    <section className="py-20 bg-base-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Label */}
        <p className="text-xs tracking-widest text-[#801717] mb-2 uppercase">
          Career Outcomes
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Placement Record
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mb-10 max-w-2xl text-sm">
          Our students are placed with India’s leading MNCs across manufacturing,
          energy, automotive, and process industries.
        </p>

        {/* Stats Box */}
        <div className="grid md:grid-cols-3 border border-gray-300 shadow-md text-center mb-10">

          <div className="p-6 border-r border-gray-300">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#801717]">
              10,000+
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              STUDENTS TRAINED & PLACED
            </p>
          </div>

          <div className="p-6 border-r border-gray-300">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#801717]">
              ₹36 LPA
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              HIGHEST PACKAGE
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#801717]">
              ₹6.9 LPA
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              AVERAGE PACKAGE
            </p>
          </div>

        </div>

        {/* Company Chips */}
        <div className="flex flex-wrap gap-3 mb-4">
          {[
            "Siemens",
            "ABB",
            "Schneider Electric",
            "Rockwell Automation",
            "Honeywell",
            "Bosch",
            "TATA Motors",
            "L&T",
            "Maruti Suzuki",
            "Infosys BPO",
            "Emerson",
            "Yokogawa",
          ].map((company, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-gray-300 text-xs text-gray-700 bg-white shadow-md"
            >
              {company}
            </span>
          ))}
        </div>

        {/* More Partners */}
        <span className="inline-block px-3 py-1 border border-gray-300 text-xs text-gray-700 bg-white shadow-md">
          & 4,000+ More Partners
        </span>

      </div>
    </section>
  );
}