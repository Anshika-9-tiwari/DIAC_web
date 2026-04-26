"use client";

import Image from "next/image";

export default function CoursesHero() {
  return (
    <section className="bg-[#eef2f7] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            All Courses–DIAC
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Dive into the world of data science with our user-friendly courses.
            Uncover valuable insights through expert guidance, specialized modules,
            and an accessible learning experience designed to empower you in the
            dynamic field of data science.
          </p>

          <button className="bg-[#801717] hover:bg-red-800 text-white px-7 py-3 rounded-lg text-lg font-medium shadow-md transition">
            Browse Courses
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end ">
          <Image
            src="/hero-banner.jpg" 
            alt="Courses Illustration"
            width={520}
            height={380}
            className="object-contain rounded-lg overflow-hidden shadow-lg"
            priority
          />
        </div>

      </div>
    </section>
  );
}