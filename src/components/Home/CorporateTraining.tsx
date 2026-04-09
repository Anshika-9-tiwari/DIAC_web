"use client";

import Image from "next/image";
import Link from "next/link";

const companies = [
  "/image.png",
  "/image_1.png",
  "/image_2.png",
  "/image_3.png",
  "/image_4.png",
  "/image_5.png",
  "/image_6.png",
  "/image_7.png",
];

const points = [
  "Customized industrial training programs",
  "Hands-on experience with live projects",
  "Training for working professionals",
  "Advanced PLC, SCADA & Robotics modules",
  "Industry expert trainers",
];

export default function CorporateTraining() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Corporate Training & Industry Partners
          </h2>
          <p className="text-gray-600">
            We provide professional training to leading industries
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT → Text Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#801717]">
              Industry-Focused Corporate Training
            </h3>

            <p className="text-gray-600 mb-6">
              DIAC offers specialized corporate training programs designed to
              enhance the technical skills of professionals in industrial automation.
            </p>

            <ul className="space-y-3">
              {points.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#801717] font-bold">✔</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Optional CTA */}
            <Link href="/contact">
              <button className="mt-6 bg-[#801717] text-white px-6 py-2 rounded-md hover:bg-red-800 transition">
                Request A Free Demo
              </button>
            </Link>
          </div>

          {/* RIGHT → Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {companies.map((logo, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt="company logo"
                  width={100}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}