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

        <div className="grid  items-start">

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

        </div>

      </div>

    </section>
  );
}