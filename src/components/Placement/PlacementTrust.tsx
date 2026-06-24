"use client";

import Slider from "react-slick";
import {
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  Building2,
  Rocket,
  Briefcase,
  Target,
  Users,
  Factory,
  Award,
} from "lucide-react";

const items = [
  { text: "Career-Focused Training Programs", icon: ShieldCheck },
  { text: "Placement Guidance by Experts", icon: GraduationCap },
  { text: "Skill-Based Learning Approach", icon: TrendingUp },
  { text: "Industry Collaboration for Hiring", icon: Building2 },
  { text: "Learn • Train • Get Placed", icon: Rocket },
  { text: "Job-Oriented Automation Courses", icon: Briefcase },
  { text: "Hands-On Practical Projects", icon: Target },
  { text: "Corporate Training Solutions", icon: Users },
  { text: "Industrial Training Programs", icon: Factory },
  { text: "Industry-Recognized Certifications", icon: Award },
  { text: "Internship & Placement Assistance", icon: GraduationCap },
];

export default function PlacementTrust() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#891414] py-5 overflow-hidden">
      <div className="max-w-8xl mx-auto">

        <Slider {...settings}>
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index}>
                <div className="flex items-center justify-center gap-3 text-white font-medium text-sm md:text-[18px] px-6 whitespace-nowrap">
                  <Icon size={20} className="shrink-0" />
                  <span>{item.text}</span>
                </div>
              </div>
            );
          })}
        </Slider>

      </div>
    </section>
  );
}