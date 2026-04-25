// app/corporate-training/page.tsx

import CorporateContact from "@/components/corporate_training/CorporateContact";
import CorporateCourses from "@/components/corporate_training/CorporateCourses";
import CorporateHero from "@/components/corporate_training/CorporateHero";
import CorporateIntro from "@/components/corporate_training/CorporateIntro";
import CorporateProcess from "@/components/corporate_training/CorporateProcess";
import CorporateTestimonials from "@/components/corporate_training/CorporateTestimonials";
import WhyChooseDIAC from "@/components/corporate_training/WhyChooseDiac";

export default function CorporatePage() {
  return (
    <main>
      <CorporateHero />
      <CorporateIntro />
      <CorporateCourses />
      <WhyChooseDIAC />
      <CorporateProcess />
      <CorporateTestimonials />
      <CorporateContact />
    </main>
  );
}