"use client";

import {
  CheckCircle2,
  Award,
  Cpu,
  BriefcaseBusiness,
} from "lucide-react";

interface Props {
  data: {
    title: string;
    description: string;
    paragraph: string;
    points: string[];
  };
}

export default function SummerWinterWhyDIAC({ data }: Props) {
  return (
    <section className="py-18 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">

          {/* LEFT */}
          <div className="lg:sticky lg:top-28">

            <p className="text-sm uppercase tracking-[4px] text-[#801717] font-semibold mb-4">
              Why DIAC
            </p>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              {data.title}
            </h2>

            <p className="text-gray-600 text-lg leading-8">
              {data.description}
            </p>
            <p className="text-gray-600 text-lg leading-8">
              {data.paragraph}
            </p>

          </div>

          {/* RIGHT */}
          <div>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">

              {[
                {
                  icon: Cpu,
                  title: "Practical Learning",
                },
                {
                  icon: BriefcaseBusiness,
                  title: "Industry Exposure",
                },
                {
                  icon: Award,
                  title: "Certification",
                },
                {
                  icon: CheckCircle2,
                  title: "Project Guidance",
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-[#f8f9fc] border border-gray-200"
                  >

                    <div className="w-11 h-11 rounded-xl bg-[#801717] text-white flex items-center justify-center mb-4">

                      <Icon size={21} />

                    </div>

                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>

                  </div>
                );
              })}

            </div>

            <div className="space-y-4">

              {data.points.map((point, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={21}
                    className="text-[#801717] mt-1 shrink-0"
                  />

                  <p className="text-gray-700 text-base md:text-lg">
                    {point}
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