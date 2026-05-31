"use client";

import { ArrowRight } from "lucide-react";

export default function PlacementTrust() {
  return (
    <section className="bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#a11c1c] text-white font-semibold  py-8 text-sm md:text-[16px]">
        <div className="max-w-8xl mx-auto px-6 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-center">

          <span className="flex items-center gap-2">
            🛡️ Career-Focused Training Programs
          </span>

          <span className="hidden md:block text-white/40">|</span>

          <span className="flex items-center gap-2">
            👨‍🎓 Placement Guidance by Experts
          </span>

          <span className="hidden md:block text-white/40">|</span>

          <span className="flex items-center gap-2">
            📈  Skill-Based Learning Approach
          </span>

          <span className="flex items-center gap-2">
            🛡️ Industry Collaboration for Hiring
          </span>

          <span className="hidden md:block text-white/40">|</span>

          <span className="flex items-center gap-2">
            👨‍🎓 Learn • Train • Get Placed
          </span>

        </div>

    </section>
  );
}