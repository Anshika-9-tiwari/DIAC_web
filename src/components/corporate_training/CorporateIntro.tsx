"use client";

export default function CorporateIntro() {
  return (
    <section className="py-20 bg-base-50">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT */}
        <div className="max-w-xl">

          {/* Badge */}
          <span className="inline-block text-xs px-4 py-1 bg-[#801717] text-[#f7f7f7] rounded-full font-medium">
            For Organizations & Teams
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mt-5 mb-4 text-[#0b1f3a] leading-tight md:leading-15">
            Empower Your Workforce with Industry-Focused Corporate Training Programs
          </h2>

          {/* Paragraph 1 */}
          <p className="text-gray-600 text-[18px] leading-relaxed mb-4">
            In today's rapidly evolving industrial landscape, organizations must continuously upgrade the skills of their workforce to remain competitive. New technologies, automation systems, digital transformation initiatives, and Industry 4.0 advancements have significantly changed the way industries operate. As a result, companies require highly skilled professionals who can efficiently manage modern industrial systems, automation processes, and emerging technologies.
          </p>
        </div>

        {/* RIGHT - VIDEO */}
        <div className="w-full">

          <div className="relative w-full h-[280px] md:h-[320px] rounded-lg overflow-hidden shadow-lg">

            {/* YouTube Embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/I-nmYGmcY9I"
              title="Corporate Training Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className=" border-t border-gray-200 pt-5 max-w-7xl mx-auto px-8">

        <p className="max-w-6xl max-auto text-red-900 text-[18px] leading-relaxed mb-4">
          With years of expertise in Industrial Automation, PLC Programming, SCADA Systems, HMI Development, Industrial Robotics, Electrical Systems, and Industry 4.0 technologies, DIAC delivers practical, hands-on training programs that bridge the gap between theoretical knowledge and real-world industrial applications.
        </p>

        <p className="max-w-6xl max-auto text-gray-600 text-[18px] leading-relaxed ">
          Whether your organization requires customized employee upskilling programs, automation training workshops, technical competency development, or industrial workforce transformation initiatives, DIAC provides flexible training solutions that align with your business goals and operational objectives.
        </p>

      </div>
    </section>
  );
}