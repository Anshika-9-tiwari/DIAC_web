"use client";

export default function CorporateIntro() {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="max-w-xl">

          {/* Badge */}
          <span className="inline-block text-xs px-4 py-1 bg-[#801717] text-[#f7f7f7] rounded-full font-medium">
            For Organizations & Teams
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-bold mt-5 mb-4 text-[#0b1f3a] leading-tight">
            Corporate Training Solutions
          </h2>

          {/* Paragraph 1 */}
          <p className="text-gray-600 mb-4 text-[15px] leading-relaxed">
            Organisations across the world are transforming their workforce
            to drive innovation, productivity, and growth. Upskilling and
            reskilling are key to achieving this transformation.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-500 text-sm leading-relaxed">
            DIAC delivers corporate training solutions through a structured,
            assessment-led model. Our approach ensures that every engagement is
            aligned with role requirements, competency standards, and measurable
            business outcomes.
          </p>

        </div>

        {/* RIGHT - VIDEO */}
        <div className="w-full">

          <div className="relative w-full h-[280px] md:h-[320px] rounded-lg overflow-hidden shadow-lg">

            {/* YouTube Embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Corporate Training Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}