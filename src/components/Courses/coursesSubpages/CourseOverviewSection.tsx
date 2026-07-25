"use client";

import Link from "next/link";
import {
  CircleCheckBig,
  RefreshCw,
  Factory,
  Zap,
  Target,
  ClipboardList,
  CalendarDays,
  Building2,
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

export default function CourseOverviewSection({ data }: Props) {
  /* ========================= NAV LINKS ========================== */
  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Projects", href: "#projects" },
    { label: "Certification", href: "#certification" },
    { label: "Placements", href: "#placements" },
    {
      label: "Industry Demand & ", href: "#industry-demand",
    },
    { label: "Eligibility", href: "#eligbility" },
    { label: "Career", href: "#career" },
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
      <div className="sticky top-2 z-40 bg-white text-gray-900 border-b border-gray-200 shadow-sm py-1.5">
        <div className="max-w-8xl mx-auto px-8 md:px-12">
          <div className="flex items-center justify-between gap-8 overflow-x-auto whitespace-nowrap">

            {/* NAV LINKS */}
            <div className="flex items-center gap-8 lg:gap-12 min-w-max">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`py-5 text-[15px] md:text-[17px] font-medium transition border-b-2 ${
                    index === 0
                      ? "border-[#801717] text-[#801717]"
                      : "border-transparent hover:text-[#801717]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* ENROLL BUTTON */}
            <Link
              href="/contact"
              className="hidden lg:flex shrink-0 bg-[#801717] hover:bg-[#6d1313] transition text-white px-8 py-3 rounded-lg font-semibold"
            >
              Enroll Now
            </Link>

          </div>
        </div>
      </div>

      {/* =========================
          OVERVIEW
      ========================== */}
      <section
        id="overview"
        className="py-12 md:py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

          {/* ================= HEADER ================= */}
          <div className="text-center max-w-6xl mx-auto mb-12 md:mb-14">

            <div className="badge badge-outline badge-error px-5 py-4 mb-5 tracking-wider">
              {data.sectionTag}
            </div>

            <h2 className="text-[30px] md:text-[44px] font-bold text-gray-900 leading-tight mb-5">
              {data.title}
            </h2>

            <p className="text-[16px] md:text-lg leading-8 text-gray-600">
              {data.description}
            </p>

          </div>

          {/* ================= OVERVIEW CARDS ================= */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">

            {data.cards.map((card, index) => {
              const Icon =
                iconMap[
                  card.icon as keyof typeof iconMap
                ];

              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-7 hover:border-red-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* ICON */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon
                      className={card.iconColor}
                      size={25}
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 leading-7 text-[15px] md:text-base">
                    {card.description}
                  </p>

                </div>
              );
            })}

          </div>

          {/* =====================================================
              INDUSTRIES / FEATURES
          ====================================================== */}
          <div
            id="industry-hiring"
            className="border-t border-gray-200 pt-12"
          >

            <div className="bg-[#f8f8f8] border border-gray-200 rounded-3xl overflow-hidden">

              <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                {/* ================= LEFT ================= */}
                <div className="relative bg-[#801717] text-white p-7 md:p-10 lg:p-12 overflow-hidden">

                  {/* Background Decoration */}
                  <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full border-[30px] border-white/5" />

                  <div className="absolute -bottom-24 -left-16 w-60 h-60 rounded-full border-[40px] border-white/5" />

                  <div className="relative z-10">

                    {/* ICON */}
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-7">
                      <Building2
                        size={27}
                        className="text-white"
                      />
                    </div>

                    {/* LABEL */}
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-white/70 mb-4">
                      Career Opportunities
                    </p>

                    {/* TITLE */}
                    <h2 className="text-[28px] md:text-[35px] font-semibold leading-tight mb-5">
                      {data.industriesTitle}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-white/75 text-[15px] md:text-base leading-7 max-w-md">
                      Build practical skills relevant to
                      modern industries and explore career
                      opportunities across multiple
                      industrial sectors.
                    </p>

                    {/* SMALL STAT */}
                    {/* <div className="mt-8 pt-7 border-t border-white/15">

                      <p className="text-3xl font-bold">
                        {data.industries.length}+
                      </p>

                      <p className="text-sm text-white/70 mt-1">
                        Industry sectors covered
                      </p>

                    </div> */}

                  </div>
                </div>

                {/* ================= RIGHT INDUSTRIES ================= */}
                <div className="bg-white p-5 md:p-8 lg:p-10">

                  <div className="grid sm:grid-cols-2 gap-3">

                    {data.industries.map(
                      (item, index) => (

                        <div
                          key={index}
                          className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:border-red-100 hover:bg-[#801717]/[0.025] hover:shadow-sm transition-all duration-300"
                        >

                          {/* CHECK ICON */}
                          <div className="w-9 h-9 rounded-xl bg-[#801717]/5 flex items-center justify-center shrink-0 group-hover:bg-[#801717] transition-colors duration-300">

                            <CircleCheckBig
                              size={18}
                              className="text-[#801717] group-hover:text-white transition-colors duration-300"
                            />

                          </div>

                          {/* TEXT */}
                          <div className="flex-1">

                            <span className="block text-[10px] font-semibold tracking-wider text-gray-400 uppercase mb-0.5">
                              Industry{" "}
                              {String(
                                index + 1
                              ).padStart(2, "0")}
                            </span>

                            <h3 className="text-[15px] md:text-base font-semibold text-gray-800 leading-6">
                              {item}
                            </h3>

                          </div>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}