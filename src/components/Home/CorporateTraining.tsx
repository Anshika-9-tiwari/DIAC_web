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
  "Customized Corporate Training Programs",
  "Hands-on Training with Live Projects",
  "PLC, SCADA & HMI Training",
  "Training for Working Professionals",
  "Industry expert trainers",
];

export default function CorporateTraining() {
  return (
    <section className="py-18 bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-10  ">

        {/* Heading */}
        <div className="text-center mb-18">
          <h2 className="text-3xl md:text-[40px] font-semibold mb-2 playfair">
            Corporate Training <span className="text-[#801717]">&</span> Industry Partners
          </h2>
          <p className="text-gray-600 text-[19px] py-2 ">
            We provide professional training to leading industries
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-15 items-start">

          {/* LEFT → Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-5 text-[#801717] ">
              Corporate Industrial Training Programs
            </h3>

            <p className="text-gray-700 text-[18px] mb-6">
              DIAC provides customized industrial automation training programs designed for companies, working professionals, and technical teams.
            </p>

            <ul className="space-y-3">
              {points.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* ICON */}
                    <CircleCheckBig
                      size={18}
                      className="text-[#801717]"
                    />
                  <span className="text-gray-600 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Optional CTA */}
            <Link href="/contact">
              <button className="mt-8 bg-[#801717] text-white px-6 py-3 uppercase rounded-md hover:bg-red-800 transition">
                Talk to Our Experts 
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