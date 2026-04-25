"use client";

export default function PlacementMessage() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#0f0f0f] text-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#801717]/20 border border-[#801717]/40 text-[#ff4d4d] px-4 py-2 rounded-full text-sm mb-6">
          🎯 Career-Focused Training
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          Every Student Here Moves{" "}
          <span className="text-[#801717]">Closer to Industry</span>
        </h2>

        {/* Paragraph 1 */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          Every student trained at DIAC is prepared for real-world industrial roles.
          We focus on practical skills, hands-on experience, and industry alignment
          — so you don’t just learn, you become job-ready.
        </p>

        {/* Paragraph 2 */}
        <p className="text-gray-400 leading-relaxed">
          We don’t just teach PLC & SCADA — we guide you towards real career
          opportunities with structured placement support and industry exposure.
        </p>

      </div>
    </section>
  );
}