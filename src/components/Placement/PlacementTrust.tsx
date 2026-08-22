"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <section className="bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#891414] py-5 overflow-hidden">
      
      <div
        ref={emblaRef}
        className="overflow-hidden w-full"
      >

        <div className="flex">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex-[0_0_auto] px-6 sm:px-8 md:px-10 lg:px-12"
              >

                <div className="flex items-center justify-center gap-3 text-white font-medium text-sm md:text-base lg:text-lg whitespace-nowrap">

                  <Icon
                    size={20}
                    className="shrink-0"
                  />

                  <span>
                    {item.text}
                  </span>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}