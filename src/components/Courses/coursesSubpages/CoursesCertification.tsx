"use client";

import Image from "next/image";
import Link from "next/link";

export default function CoursesCertification() {
  return (
    <section
      id="certification"
      className="py-20 bg-[#f8fbff]"
    >
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-6 md:px-12 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="w-full">

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-[#111827] mb-10">
              Industrial Automation Certification Course
            </h2>

            <p className="text-[18px] md:text-[20px] leading-[2rem] md:leading-[2.3rem] text-[#2f2f2f] mb-6">
              Having a good certification is your passport to the high-end job
              market. The Industrial Automation Certification Course is the
              prestigious certification that you will have and which will act
              as irrefutable evidence of your mastery.
            </p>

            <p className="text-[18px] md:text-[20px] leading-[2rem] md:leading-[2.3rem] text-[#2f2f2f] mb-10">
              You may boost this accomplishment on your LinkedIn profile,
              Resume, Portfolio, and Social Media to authenticate your
              industrial automation expertise and career growth.
            </p>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="inline-block bg-[#801717] hover:bg-[#6c1414] text-white text-[18px] md:text-[20px] font-semibold px-10 py-4 rounded-lg transition"
            >
              Enquire Now
            </Link>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end w-full">

            <div className="relative w-full h-[350px] md:h-[500px] lg:h-[620px] ">

              <Image
                src="/courses/certificate.jpg"
                alt="Industrial Automation Certificate"
                fill
                className="object-contain"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}