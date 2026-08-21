"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  CalendarDays,
  CircleCheckBig,
  Download,
} from "lucide-react";

import BrochurePopup from "@/components/common/BrochurePopup";

interface Props {
  data: {
    badge: string;
    title: string;
    duration: string;
    description: string;
    points: string[];
    image: string;
  };
}

export default function SummerWinterHero({ data }: Props) {
  const [showBrochurePopup, setShowBrochurePopup] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fcf7f7] to-[#f7eeee]">

        {/* Decorative Glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#801717]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">

            {/* LEFT */}
            <div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#801717] text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">

                <CalendarDays size={17} />

                {data.badge}

              </div>

              {/* Duration */}
              <p className="text-[#801717] font-semibold text-md mb-3">
                {data.duration}
              </p>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.08] mb-7">

                Summer/Winter{" "}

                <span className="text-[#801717]">
                  Training Program
                </span>

              </h1>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg leading-8 max-w-2xl mb-7">
                {data.description}
              </p>

              {/* Points */}
              <div className="space-y-2 mb-9">

                {data.points.map((point, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >

                    <CircleCheckBig
                      size={21}
                      className="text-[#801717] mt-1 shrink-0"
                    />

                    <span className="text-gray-700 text-base md:text-lg">
                      {point}
                    </span>

                  </div>

                ))}

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">

                {/* ENQUIRE */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#801717] hover:bg-[#681313] text-white px-7 py-4 rounded-xl font-semibold transition shadow-lg"
                >
                  Enquire Now
                </Link>

                {/* DOWNLOAD BROCHURE */}
                <button
                  type="button"
                  onClick={() => setShowBrochurePopup(true)}
                  className="inline-flex items-center gap-2 border border-[#801717] text-[#801717] hover:bg-[#801717] hover:text-white px-7 py-4 rounded-xl font-semibold transition"
                >
                  <Download size={18} />
                  Download Brochure
                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div className="relative h-[300px] md:h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white">

                <Image
                  src={data.image}
                  alt="Summer Winter Industrial Training"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-3 md:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gray-100">

                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Training Duration
                </p>

                <p className="text-lg font-semibold text-[#801717]">
                  4 / 6 Weeks
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BROCHURE POPUP */}
      <BrochurePopup
        isOpen={showBrochurePopup}
        onClose={() => setShowBrochurePopup(false)}
        brochureLink="\brochure\diac-brochure.pdf"
        courseName="Summer/Winter Training Program"
      />
    </>
  );
}