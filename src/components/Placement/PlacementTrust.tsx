"use client";

import { ArrowRight } from "lucide-react";

export default function PlacementTrust() {
  return (
    <section className="bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#a11c1c] text-white font-bold  py-8 text-sm md:text-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-center">

          <span className="flex items-center gap-2">
            🛡️100% Job Guarantee or 200% Money-Back Refund
          </span>

          <span className="hidden md:block text-white/40">|</span>

          <span className="flex items-center gap-2">
            👨‍🎓 10,000+ Students Trained
          </span>

          <span className="hidden md:block text-white/40">|</span>

          <span className="flex items-center gap-2">
            📈 100% Placement Track Record
          </span>

        </div>

    </section>
  );
}