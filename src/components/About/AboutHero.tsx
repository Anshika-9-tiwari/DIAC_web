"use client";

import Link from "next/link";

export default function AboutHero() {
  const stats = [
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "8000+",
      label: "Students Trained",
    },
    {
      value: "100%",
      label: "Practical Training",
    },
    {
      value: "500+",
      label: "Placement Partners",
    },
  ];

  return (
    <section className="py-12 md:py-14 bg-gradient-to-br from-white via-[#fcf7f7] to-[#f5f5f5] text-gray-700 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#801717]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-red-50 rounded-full blur-3xl"></div>

      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-14 relative z-10">

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 xl:gap-12 items-stretch">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">

            <span className="inline-flex w-fit px-4 py-1 rounded-full bg-red-900 border border-red-100 text-[#f7f7f7] text-xs font-medium mb-6">
              ABOUT DIAC
            </span>

            <h1 className="text-4xl md:text-[45px] xl:text-6xl font-bold leading-[1.05] text-[#141517] mb-8">
              Building Future
              <br />
              <span className="text-[#801717]">
                Automation Engineers
              </span>
            </h1>

            <p className="text-[#801717] font-semibold tracking-wide uppercase text-sm mb-6">
              Industrial Automation Excellence
            </p>

            <p className="text-gray-600 text-lg xl:text-xl leading-8 max-w-2xl mb-10">
              DIAC is one of India's leading Industrial Automation Training
              Institutes focused on practical learning, real industrial
              exposure, and career-driven technical education. We help
              students and working professionals master PLC, SCADA, HMI,
              VFD, Robotics, Panel Designing, and Industry 4.0 technologies.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/courses"
                className="bg-[#801717] hover:bg-red-900 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition"
              >
                Explore Courses
              </Link>

              <Link
                href="/contact"
                className="border border-gray-300 bg-white px-8 py-4 rounded-xl font-semibold hover:shadow-md transition"
              >
                Book Free Demo
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-[30px] p-6 md:p-12 border border-red-100 shadow-xl text-center">

            <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1c1f] mb-6 leading-tight">
              Why Students Choose DIAC?
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-10">
              Our mission is to bridge the gap between industrial
              requirements and technical education through hands-on
              practical training, real-world industrial exposure, and
              career-focused learning.
            </p>

            <div className="grid grid-cols-2 gap-5">

              {stats.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-white to-red-50 rounded-xl p-6 md:p-8 border border-red-100 shadow-sm hover:shadow-lg transition"
                >

                  <h3 className="text-3xl md:text-5xl text-center font-semibold text-[#801717] mb-3">
                    {item.value}
                  </h3>

                  <p className="text-gray-600 text-center text-sm md:text-base font-medium">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}