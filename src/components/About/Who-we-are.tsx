"use client";

import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20">
     <div className="text-center mb-18 px-5">
       {/* Small Title */}
        <span className="inline-block text-xs px-4 py-1 bg-[#801717] text-[#f7f7f7] rounded-full font-medium mb-5 tracking-widest">
          Our Story
        </span>

        {/* Main Heading */}
        <h1 className="text-[35px] md:text-[45px] font-bold mb-6 text-gray-900">
          Who We Are
        </h1>
        <p className="text-gray-700 mb-4 text-[18px] leading-relaxed">
          Empowering the next generation of automation engineers with advanced industrial skills and practical knowledge.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="relative w-full h-[300px] md:h-[400px] bg-[#0b2a44] rounded-4xl ">
            <Image
              src="/courses/diacaboutpic.png"
              alt="DIAC"
              fill
              className="object-cover opacity-80 rounded-4xl"
            />

            {/* Corner Border Effect */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-gray-500"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-gray-500"></div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Main Heading */}
          <h2 className="text-[30px] md:text-[36px] font-semibold mb-5  text-gray-900 leading-snug">
             Transforming Technical Education Into Real Industry Experience
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 mb-4 text-[16px] leading-relaxed text">
           <span className="text-[#801717]">DYNAMIC INSTITUTE OF AUTOMATION & CONTROLS (DIAC)</span>, Popularly known as “DIAC” was incorporated in December’ 2008 with a basic objective to impart training of Cutting-edge Industrial Automation Technologies to fresh engineers for bridging the demand-supply gap of ever growing demand of Industrial Automation Engineers and to enhance domain knowledge of working professionals with the advancement in this domain.
          </p>

          <p className="text-gray-600 mb-4 text-[16px] leading-snug">
           Since its inception, with 14 years of standing, we have trained and placed 8000+ students in the automation industry. Our passed-out students are working with leading MNCs in the field of Industrial Automation.
          </p>
          {/* Tags
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              "PLC Training",
              "SCADA & HMI",
              "Robotics",
              "DCS Training",
              "Drives & Motors",
              "Process Instrumentation",
              "Panel Designing & AutoCAD",
              "Corporate Training",
            ].map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 border border-gray-300 text-red-900"
              >
                {item}
              </span>
            ))}
          </div> */}

        </div>

      </div>
    </section>
  );
}

