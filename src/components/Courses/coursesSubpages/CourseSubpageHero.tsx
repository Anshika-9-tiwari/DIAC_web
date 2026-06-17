"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CircleCheckBig,
  Download,
  PlayCircle,
} from "lucide-react";

interface CourseHeroData {
  badge: string;
  title: string;
  icon: string;

  paragraph1: string;
  paragraph2: string;

  videoUrl: string;

  syllabusPdf: string;
}

interface Props {
  data: CourseHeroData;
}

export default function CourseSubpageHero({ data,}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fcf7f7] to-[#faf7f7] py-14 lg:py-18">

      <div className="relative max-w-8xl mx-auto px-8 md:px-12">

        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-16 items-start">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-[#801717] text-sm font-medium mb-8">
              <PlayCircle size={16} />
              {data.badge}
            </div>

            <div className="flex items-center gap-4 mb-8">

              <div className="w-15 h-15 rounded-4xl bg-white shadow-lg flex items-center justify-center border border-red-100">
                <Image
                  src={data.icon}
                  alt={data.title}
                  width={38}
                  height={38}
                />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
                {data.title}
              </h1>

            </div>

            <div className="flex items-start gap-3 md:gap-4 px-1 md:px-6 py-4 mb-2">

              <CircleCheckBig
                size={24}
                className="text-[#801717] mt-1 shrink-0"
              />

              <p className="text-[18px] leading-8 text-gray-700">
                {data.paragraph1}
              </p>

            </div>

            <div className="flex items-start gap-3 md:gap-4 px-1 md:px-6 py-2 mb-10">

              <CircleCheckBig
                size={24}
                className="text-[#801717] mt-1 shrink-0"
              />

              <p className="text-[18px] leading-8 text-gray-700">
                {data.paragraph2}
              </p>

            </div>

            <div className="flex flex-wrap gap-5 px-6">

              <Link
                href={data.syllabusPdf}
                className="inline-flex items-center gap-2 bg-[#801717] hover:bg-red-800 text-white px-4 md:px-7 py-3 md:py-4 rounded-xl font-semibold transition"
              >
                <Download size={18} />
                Download Syllabus
              </Link>

              <Link
                href="/placement"
                className="border border-[#801717] text-[#801717] hover:bg-[#801717] hover:text-white px-6 md:px-7 py-3 md:py-4 rounded-xl font-semibold transition"
              >
                Placement Report
              </Link>

              <Link
                href="/contact"
                className="border border-[#801717] text-[#801717] hover:bg-[#801717] hover:text-white px-6 md:px-7 py-3 md:py-4 rounded-xl font-semibold transition"
              >
                Book Free Demo
              </Link>

            </div>

          </div>

          {/* RIGHT VIDEO */}
          <div className="lg:sticky lg:top-28">

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">

              <div className="relative aspect-video">

                <iframe
                  className="w-full h-full"
                  src={data.videoUrl}
                  title={data.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}