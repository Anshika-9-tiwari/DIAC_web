"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleCheckBig } from 'lucide-react';

const companies = [
  "/image.png",
  "/image_1.png",
  "/image_2.png",
  "/image_3.png",
  "/image_4.png",
  "/image_5.png",
  "/image_6.png",
  "/image_7.png",
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
    <section className="py-18 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-9 ">

        {/* Heading */}
        <div className="text-center mb-18">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 playfair">
            Corporate Training <span className="text-[#801717]">&</span> Industry Partners
          </h2>
          <p className="text-gray-600 text-[20px] py-2 ">
            We provide professional training to leading industries
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-15 items-start">

          {/* LEFT → Text Content */}
          <div>
            <h3 className="text-2xl md:text-4xl font-semibold mb-5 text-[#801717] ">
              Industry-Focused Corporate Training
            </h3>

            <p className="text-gray-700 text-[19px] mb-6">
              DIAC offers specialized corporate training programs designed to
              enhance the technical skills of professionals in industrial automation.
            </p>

            <ul className="space-y-3">
              {points.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* ICON */}
                    <CircleCheckBig
                      size={20}
                      className="text-[#801717]"
                    />
                  <span className="text-gray-600 text-[16px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Optional CTA */}
            <Link href="/contact">
              <button className="mt-8 bg-[#801717] text-white px-6 py-3 uppercase rounded-md hover:bg-red-800 transition">
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