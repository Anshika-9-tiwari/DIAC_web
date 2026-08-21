"use client";

import {
  CircleCheckBig,
} from "lucide-react";

const benefits = [
  "Tailored curriculum based on your industry & team needs",
  "Flexible batch timings and duration",
  "Hands-on, project-based learning approach",
  "Certified & experienced industry trainers",
  "On-site or institute-based training options",
  "Post-training assessment & certification",
];


export default function CustomizedTrainingWhy() {
  return (
    <section className="py-16 md:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">

          <p className="text-[#801717] uppercase tracking-[3px] font-semibold text-sm mb-4">
            Why Choose DIAC
          </p>

          <h2 className="text-3xl md:text-[45px] font-bold text-gray-900 mb-5">
            Why Choose Our Customized Training?
          </h2>

          <p className="text-base md:text-lg text-gray-600 leading-8">
            Our customized industrial training programs are designed around
            your organization&apos;s technical requirements, workforce skill gaps,
            and long-term business objectives.
          </p>

        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 md:p-6 bg-white border border-slate-300 rounded-2xl hover:border-red-200 hover:shadow-lg transition-all duration-300"
            >

              <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center shrink-0">
                <CircleCheckBig
                  size={20}
                  className="text-[#f7f7f7]"
                />
              </div>

              <p className="text-gray-700 text-[16px] md:text-lg leading-7 font-medium">
                {item}
              </p>

            </div>
          ))}

        </div>

        {/* Highlights
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="text-center bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-7 hover:bg-white hover:shadow-lg transition-all duration-300"
              >

                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon
                    size={25}
                    className="text-[#801717]"
                  />
                </div>

                <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-gray-500">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div> */}

      </div>

    </section>
  );
}