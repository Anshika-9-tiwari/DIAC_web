// app/corporate-training/page.tsx

import AboutCTA from "@/components/About/ContactSection";
import FAQSection from "@/components/About/FaqSection";
import CorporateBenefits from "@/components/corporate_training/CorporateBenefits";
import CorporateContact from "@/components/corporate_training/CorporateContact";
import CorporateCourses from "@/components/corporate_training/CorporateCourses";
import CorporateHero from "@/components/corporate_training/CorporateHero";
import CorporateIntro from "@/components/corporate_training/CorporateIntro";
import CorporateProcess from "@/components/corporate_training/CorporateProcess";
import CorporateTManufacturing from "@/components/corporate_training/CorporateTManufacturing";
import WhatMakeDiacDiff from "@/components/corporate_training/WhatMakeDiacDiff";
import WhyChooseDIAC from "@/components/corporate_training/WhyChooseDiac";
import Testimonials from "@/components/Home/Testimonials";
import PlacementTrust from "@/components/Placement/PlacementTrust";

export default function CorporatePage() {
  return (
    <main>
      <CorporateHero />
      <PlacementTrust />
      <CorporateIntro />
      <CorporateBenefits/>
      <CorporateCourses />
      <WhyChooseDIAC />
      <CorporateTManufacturing/>
      <CorporateProcess />
      <WhatMakeDiacDiff/>
      <Testimonials/>
      <AboutCTA/>
    </main>
  );
}