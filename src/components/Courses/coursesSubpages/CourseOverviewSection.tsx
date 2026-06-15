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


export default function CourseOverviewSection() {

  /* ========================= NAV LINKS ========================== */
  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Projects", href: "#projects" },
    { label: "Certification", href: "#certification" },
    { label: "Placements", href: "#placements" },
    { label: "Industry Demand & Eligibility", href: "#industry-demand" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQs", href: "#faqs" },
  ];

  const overviewCards = [
    {
      icon: RefreshCw,
      title: "Learn Until You're Placed",
      description:
        "Continuous support until you land your target automation role — repeat sessions, mock interviews, and referrals included.",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Factory,
      title: "10+ Real Industrial Projects",
      description:
        "Build water treatment plants, conveyor systems, bottle filling lines, and packaging machines from scratch.",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Zap,
      title: "Real Hardware Practice",
      description:
        "Hands-on with Siemens S7-1200/S7-1500, TIA Portal, SINAMICS VFDs, live panels, and industrial networking equipment.",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Target,
      title: "Personalised Mentorship",
      description:
        "1:1 guidance from trainers with real industrial backgrounds in manufacturing, power, pharma, and process industries.",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: ClipboardList,
      title: "Interview Preparation",
      description:
        "Technical mock interviews, resume building, and unlimited practice sessions until you clear your target company's hiring process.",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: CalendarDays,
      title: "Flexible Batch Schedules",
      description:
        "Weekday, weekend, and evening batches available — so your upskilling doesn't interrupt your current commitments.",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
  ];

  /* ========================= HIGHLIGHTS ========================== */
  const highlights = [
    "Manufacturing",
    "Automotive",
    "Oil & Gas",
    "Pharmaceuticals",
    "Food & Beverage",
    "Power Plants",
    "Infrastructure",
    "Water Treatment Plants",
    "Chemical Industries",
    "Smart Manufacturing Facilities",
  
  ];  

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

            <p className="uppercase tracking-[4px] text-[#801717] font-semibold text-sm mb-4">
              Why Choose DIAC
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Job-Oriented Industrial Automation Training
            </h2>

            <p className="max-w-6xl  text-lg md:text-xl leading-9 text-gray-600">
              DIAC is committed to delivering industry-relevant training that bridges the gap between academic knowledge and practical industrial requirements. With 17+ Years of Industrial Automation Training Experience, our training methodology focuses on real hardware exposure, project-based learning, and expert mentorship to ensure students become job-ready professionals.
            </p>

          </div>

          {/* OVERVIEW CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">

            {overviewCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${card.iconBg} flex items-center justify-center text-3xl mb-6`}
                >
                  <card.icon className={card.iconColor} size={28} />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-8 text-lg">
                  {card.description}
                </p>
              </div>
            ))}

          </div>

          {/* =========================
              FEATURES SECTION
          ========================== */}
          <div id="industry-hiring">

            {/* HEADING */}
            <div className="max-w-7xl mb-16 mt-8  border-t border-gray-200 pt-8 ">

              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                Industries Hiring Automation Professionals
              </h2>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 ">

              {highlights.map((item, index) => (
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