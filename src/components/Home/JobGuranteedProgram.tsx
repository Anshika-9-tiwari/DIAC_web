"use client";

import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Full Industrial Automation",
    image: "/courses/1.jpg",
    link: "/courses/industrial-automation",
  },

  {
    title: "Electrical Design Training",
    image: "/courses/2.jpg",
    link: "/courses/electrical-design-training",
  },
];

export default function JobGuaranteePrograms() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        {/* HEADING */}
        <div className="text-center mb-14">

          <p className="text-[#801717] font-semibold uppercase tracking-widest mb-3">
            Job Guaranteed Programs
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry-Focused Career Programs
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Master practical industrial skills with hands-on training,
            real-world projects, and placement support.
          </p>

        </div>

        {/* PROGRAM CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {programs.map((program, index) => (

            <Link
              key={index}
              href={program.link}
              className="group block overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-300"
            >

              <div className="relative h-[260px] md:h-[300px]">

                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}