"use client";

import Image from "next/image";

const students = [
  {
    name: "Jayalakshmi",
    year: "Placed - 2026",
    img: "/PlacedStudent/1.avif",
  },
  {
    name: "Harshith Gowda",
    year: "Placed - 2026",
    img: "/PlacedStudent/2.avif",
  },
  {
    name: "Balaji",
    year: "Placed - 2026",
    img: "/PlacedStudent/3.avif",
  },
  {
    name: "Mohammed Aeytesham",
    year: "Placed - 2026",
    img: "/PlacedStudent/4.avif",
  },
  {
    name: "Shaik Abdul Khader",
    year: "Placed - 2026",
    img: "/PlacedStudent/5.avif",
  },
  {
    name: "Jayalakshmi",
    year: "Placed - 2026",
    img: "/PlacedStudent/1.avif",
  },
  {
    name: "Harshith Gowda",
    year: "Placed - 2026",
    img: "/PlacedStudent/2.avif",
  },
  {
    name: "Balaji",
    year: "Placed - 2026",
    img: "/PlacedStudent/3.avif",
  },
  {
    name: "Mohammed Aeytesham",
    year: "Placed - 2026",
    img: "/PlacedStudent/4.avif",
  },
  {
    name: "Shaik Abdul Khader",
    year: "Placed - 2026",
    img: "/PlacedStudent/5.avif",
  },
];

export default function TrainedEngineers() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trained <span className="text-[#801717]">Engineers</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm">
          Real students trained at DIAC. Each one represents a successful
          step into the industrial automation industry.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {students.map((student, i) => (
            <div key={i} className="group">

              {/* Card */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 flex items-center justify-center h-48 border border-gray-800 group-hover:border-[#801717] transition">

                <Image
                  src={student.img}
                  alt={student.name}
                  width={120}
                  height={120}
                  className="object-contain group-hover:scale-105 transition"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 font-semibold text-sm">
                {student.name}
              </h3>

              {/* Status */}
              <p className="text-[#801717] text-xs">
                {student.year}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}