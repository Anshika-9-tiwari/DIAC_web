"use client";

import {
  CheckCircle2,
  Award,
  Users,
  FlaskConical,
} from "lucide-react";

interface Props {
  items: string[];
}

export default function SummerWinterHighlights({ items }: Props) {
  return (
    <section className="py-18 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-20 items-start">

          {/* LEFT */}
          <div className="lg:sticky lg:top-28">

            <p className="text-sm uppercase tracking-[4px] text-[#801717] font-semibold mb-4">
              Why This Program
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Program Highlights
            </h2>

            <p className="text-gray-600 leading-7">
              Everything students need to gain practical automation
              experience and strengthen their academic and career profile.
            </p>

          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-5">

            {items.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#fafafa] border border-gray-200 hover:border-[#801717]/30 hover:shadow-md transition"
              >

                <div className="w-10 h-10 rounded-xl bg-[#801717] text-white flex items-center justify-center shrink-0">

                  {index === 5 ? (
                    <Award size={20} />
                  ) : index === 7 ? (
                    <Users size={20} />
                  ) : index === 0 ? (
                    <FlaskConical size={20} />
                  ) : (
                    <CheckCircle2 size={20} />
                  )}

                </div>

                <p className="font-medium text-gray-800 leading-6">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}