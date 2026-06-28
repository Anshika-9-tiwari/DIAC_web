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
    <section className="py-18 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-8 md:px-12  ">

        {/* Heading */}
        <div className="md:text-center mb-10 md:mb-20">
          <h2 className="text-3xl md:text-[44px] font-semibold mb-2 playfair">
            Corporate Training <span className="text-[#801717]">&</span> Industry Partners
          </h2>
          <p className="text-gray-600 text-[19px] py-2 ">
            We provide professional training to leading industries
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-15 items-start">

          {/* LEFT Content */}
          <div>
            <h3 className="text-2xl md:text-[32px] font-semibold mb-5 text-[#801717] ">
              Corporate Industrial Training Programs
            </h3>

            <p className="text-gray-700 text-[18px] mb-6">
              DIAC provides customized industrial automation training programs designed for companies, working professionals, and technical teams.
            </p>

            <ul className="space-y-4">
              {points.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* ICON */}
                    <CircleCheckBig
                      size={18}
                      className="text-[#801717]"
                    />
                  <span className="text-slate-600 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Optional CTA */}
            <div className="flex gap-3">
              <Link href="/contact">
              <button className="mt-8 bg-[#801717] text-white px-4 py-3 text-sm md:text-[16px] uppercase rounded-md hover:bg-red-800 transition tracking-wide">
                Talk to Our Experts 
              </button>
              </Link>
              <Link href="/corporate_training">
                <button className="mt-8 bg-[#801717] text-white px-4 py-3 text-sm md:text-[16px] uppercase rounded-md hover:bg-red-800 transition tracking-wide">
                   View more 
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT → Logos and state Grid */}
          <div>
            {/* Stats Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { value: "500+", label: "Corporate Trainings" },
                { value: "100+", label: "Industry Partners" },
                { value: "15+", label: "Years Experience" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#801717] to-[#a11c1c] text-white rounded-xl px-4 py-4 shadow-md text-center"
                >
                  <h3 className="text-2xl font-semibold">
                    {item.value}
                  </h3>

                  <p className="text-sm text-white/90 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Logos Grid */}
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
      </div>
    </section>
  );
}