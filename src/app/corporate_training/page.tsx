// app/corporate-training/page.tsx

import FAQSection from "@/components/About/FaqSection";
import CorporateBenefits from "@/components/corporate_training/CorporateBenefits";
import CorporateContact from "@/components/corporate_training/CorporateContact";
import CorporateCourses from "@/components/corporate_training/CorporateCourses";
import CorporateHero from "@/components/corporate_training/CorporateHero";
import CorporateIntro from "@/components/corporate_training/CorporateIntro";
import CorporateProcess from "@/components/corporate_training/CorporateProcess";
import CorporateTestimonials from "@/components/corporate_training/CorporateTestimonials";
import CorporateTManufacturing from "@/components/corporate_training/CorporateTManufacturing";
import WhatMakeDiacDiff from "@/components/corporate_training/WhatMakeDiacDiff";

import WhyChooseDIAC from "@/components/corporate_training/WhyChooseDiac";

export default function CorporatePage() {
  return (
    <main>
      <CorporateHero />
      <CorporateIntro />
      <CorporateBenefits/>
      <CorporateCourses />
      <WhyChooseDIAC />
      <CorporateTManufacturing/>
      <CorporateProcess />
      <WhatMakeDiacDiff/>
      {/* <CorporateTestimonials /> */}
      {/* <CorporateContact /> */}
      <FAQSection/>
    </main>
  );
}