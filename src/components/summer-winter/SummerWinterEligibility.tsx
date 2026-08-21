"use client";

import {
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

interface Props {
  items: string[];
}

export default function SummerWinterEligibility({ items }: Props) {
  return (
    <section className="py-18 md:py-24 bg-[#f8f9fc]">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <div className="w-14 h-14 rounded-2xl bg-[#801717] text-white flex items-center justify-center mb-6">

              <GraduationCap size={28} />

            </div>

            <p className="text-sm uppercase tracking-[4px] text-[#801717] font-semibold mb-4">
              Eligibility
            </p>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-5">
              Who Can Join?
            </h2>

            <p className="text-gray-600 text-lg leading-8 max-w-xl">
              This program is exclusively designed for currently pursuing
              students who want practical industrial exposure during their
              semester break.
            </p>

          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-7 md:p-9">

            <div className="grid sm:grid-cols-2 gap-4">

              {items.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50"
                >

                  <CheckCircle2
                    size={20}
                    className="text-[#801717] mt-0.5 shrink-0"
                  />

                  <span className="text-gray-700 font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}