"use client";

import Link from "next/link";
import { CircleCheckBig } from 'lucide-react';
import {
  RefreshCw,
  Factory,
  Zap,
  Target,
  ClipboardList,
  CalendarDays,
} from "lucide-react";

interface Props {
  data: {
    sectionTag: string;
    title: string;
    description: string;

    cards: {
      icon: any;
      title: string;
      description: string;
      iconBg: string;
      iconColor: string;
    }[];

    industriesTitle: string;
    industries: string[];
  };
}

export default function CourseOverviewSection({ data,}: Props) {

  /* ========================= NAV LINKS ========================== */
  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Projects", href: "#projects" },
    { label: "Certification", href: "#certification" },
    { label: "Placements", href: "#placements" },
    { label: "Industry Demand & Eligibility", href: "#industry-demand" },
    { label: "Reviews", href: "#reviews" },
  ];

  const iconMap = {
    RefreshCw,
    Factory,
    Zap,
    Target,
    ClipboardList,
    CalendarDays,
  };

  return (
    <>
      {/* =========================
         STICKY NAVBAR
      ========================== */}
      <div className="sticky top-2 z-40 bg-white text-gray-800 border-b border-gray-200 shadow-sm py-1.5">

        <div className="max-w-8xl mx-auto px-8 ">

          <div className="flex items-center justify-around overflow-x-auto whitespace-nowrap">

            {/* NAV LINKS */}
            <div className="flex items-center gap-12 min-w-max">

              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`py-6 text-[18px] font-medium transition border-b-2  ${
                    index === 0
                      ? "border-[#801717] text-[#801717] "
                      : "border-transparent hover:text-[#801717]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

            </div>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="hidden lg:flex bg-[#801717] hover:bg-[#6d1313] transition text-white px-8 py-4 rounded-md font-semibold"
            >
              Enroll Now
            </Link>

          </div>

        </div>

      </div>

      {/* =========================
          OVERVIEW SECTION
      ========================== */}
      <section
        id="overview"
        className="py-12 md:py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 ">

          {/* SECTION HEADER */}
          <div className=" text-center mb-16 mt-8  ">

            <p className="uppercase tracking-[4px] text-[#801717] font-semibold text-sm mb-5">
             {data.sectionTag}
            </p>

            <h2 className="text-[32px] md:text-[45px] font-bold text-gray-800 leading-tight mb-6">
              {data.title}
            </h2>

            <p className="max-w-6xl text-[17px] md:text-lg  leading-9 text-gray-600">
             {data.description} 
            </p>

          </div>

          {/* OVERVIEW CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">

            {data.cards.map((card, index) => {

              const Icon =
                iconMap[card.icon as keyof typeof iconMap];

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl ${card.iconBg} flex items-center justify-center text-3xl mb-6`}
                  >
                    <Icon
                      className={card.iconColor}
                      size={28}
                    />
                  </div>

                  <h3 className="text-lg md:text-2xl font-medium text-gray-800 mb-4">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 leading-8 text-lg">
                    {card.description}
                  </p>
                </div>
              );
            })}

          </div>

          {/* =========================
              FEATURES SECTION
          ========================== */}
          <div id="industry-hiring">

            {/* HEADING */}
            <div className="max-w-7xl mb-16 mt-10  border-t border-gray-200 pt-9 ">

              <h2 className="text-[32px] md:text-[45px] font-semibold text-gray-800 leading-tight mb-6">
                {data.industriesTitle}
              </h2>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 ">

              {data.industries.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md border border-red-100 px-6 py-5 flex items-center gap-5 hover:shadow-lg transition"
                >

                  {/* ICON */}
                  <CircleCheckBig
                    size={28}
                    className="text-[#801717]"
                  />

                  {/* TEXT */}
                  <h3 className="text-[19px] font-medium text-[#111827]">
                    {item}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </>
  );
}