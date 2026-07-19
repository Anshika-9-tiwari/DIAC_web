"use client";

import Link from "next/link";
import { Building2, Send } from "lucide-react";

export default function CustomizedTrainingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-red-50/98 py-16 md:py-24">

      {/* Background Effects */}
      {/* <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-[#801717]/5 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#801717]/5 rounded-full blur-3xl" /> */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        <div className="max-w-5xl">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#801717] text-white text-sm font-medium rounded-full mb-6">
            <Building2 size={16} />
            Customized Training Solutions
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-7">
            Customized Industrial
            <span className="block text-[#801717]">
              Training
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-700 leading-8 mb-6 max-w-4xl">
            At DIAC, we understand that every organization has unique
            skill-development needs. That's why we offer customized industrial
            training programs tailored to your team's technical requirements,
            industry domain, and skill gaps.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-8 mb-8 max-w-4xl">
            Whether you're upskilling fresh engineering graduates, training
            working professionals, or preparing your workforce for new
            technologies, our industry-aligned curriculum, hands-on labs, and
            expert trainers ensure practical, job-ready learning outcomes.
          </p>

          {/* CTA */}
          <Link
            href="#training-request"
            className="inline-flex items-center gap-2 bg-[#801717] hover:bg-[#681212] text-white px-7 py-4 rounded-xl font-semibold transition shadow-lg"
          >
            Request a Training Program
            <Send size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}