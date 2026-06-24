"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Full Industrial Automation",
    image: "/courses/job1.svg",
    link: "/courses/industrial-automation",
  },
  {
    title: "Electrical Design Training",
    image: "/courses/job2.svg",
    link: "/courses/electrical-design-training",
  },
  {
    title: "Women's Industrial Automation",
    image: "/courses/job3.svg",
    link: "/courses/electrical-design-training",
  },
];

export default function JobGuaranteePrograms() {
  return (
    <section className="py-18 bg-gradient-to-b from-white to-[#fafafa]">

      <div className="max-w-7xl mx-auto px-8">

        {/* HEADING */}
        <div className="text-center mb-16 text-gray-800">

          <p className="text-[#801717] font-semibold uppercase tracking-[4px] mb-4">
            Job Guaranteed Programs
          </p>

          <h2 className="text-[34px] md:text-[45px] font-bold mb-6 text-gray-800">
            Industry-Focused Career Programs
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-8">
            Master practical industrial skills with hands-on training,
            real-world projects, and placement support.
          </p>

        </div>

        {/* PROGRAM CARDS */}
        <div className="grid md:grid-cols-2 gap-8 ">

          {programs.map((program, index) => (
            <Link
              key={index}
              href={program.link}
              className="group block"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                {/* IMAGE */}
                <div className="relative h-[170px] md:h-[330px] bg-gray-100">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* OVERLAY CONTENT */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-6">

                  <div className="flex items-end justify-end">

                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white transition">
                      <ArrowRight className="text-white group-hover:text-black" size={18} />
                    </div>

                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}