"use client";

import { Building2, CheckCircle2, Handshake } from "lucide-react";

export default function ClientHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#fcf7f7] to-[#f5eeee]">

      {/* Decorative Elements */}
      <div className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-[#801717]/5 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#801717]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#801717] text-white text-sm font-semibold tracking-wide mb-7 shadow-md">

              <Handshake size={17} />

              Our Clientele

            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.08] mb-7">

              Trusted by{" "}

              <span className="text-[#801717]">
                Industry Leaders
              </span>

            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg md:text-xl leading-8 max-w-4xl">

              Our greatest achievement is the trust our clients place in us.
              At DIAC, we&apos;re proud to partner with businesses across a wide
              range of industries, delivering innovative technology solutions
              that drive growth, efficiency, and digital transformation.

              Every collaboration reflects our commitment to quality,
              reliability, and long-term success, making our clients an
              integral part of our journey.

            </p>

          </div>

          {/* RIGHT FEATURE CARD */}
          <div className="relative">

            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-7 md:p-9">

              <div className="w-14 h-14 rounded-2xl bg-[#801717] text-white flex items-center justify-center mb-6">

                <Building2 size={28} />

              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Building Long-Term Partnerships
              </h2>

              <p className="text-gray-600 leading-7 mb-6">
                Our industry relationships reflect the quality,
                practical relevance, and trust built through our
                training and technology-focused programs.
              </p>

              <div className="space-y-3">

                {[
                  "Industry-focused learning",
                  "Practical technical expertise",
                  "Strong professional relationships",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-[#801717] shrink-0"
                    />

                    <span className="text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}