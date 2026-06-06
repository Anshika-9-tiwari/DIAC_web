import Highlights from "@/components/Home/Highlights";
import Hero from "../components/Home/Hero";
import Companies from "@/components/Home/Companies";
import CoursesSection from "@/components/Home/CourcesSection";
import State from "@/components/Home/State";
import CorporateTraining from "@/components/Home/CorporateTraining";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Testimonials from "@/components/Home/Testimonials";
import Masterclass from "@/components/Home/Free Masterclass";
import Certification from "@/components/Home/Certification";
import Trusted from "@/components/trustedClient/Trusted";
import JobGuaranteePrograms from "@/components/Home/JobGuranteedProgram";
import OurServices from "@/components/Home/OurServices";
import PlacementCTA from "@/components/Placement/PlacementCTA";
import CorporateTestimonials from "@/components/corporate_training/CorporateTestimonials";
import WhatMakeDiacDiff from "@/components/Home/WhatMakeDiacDiff";

export default function Home() {
  return (
    <main>
      {/* <Trusted /> */}
      <Hero />
      <Highlights />
      <Companies/>
      <JobGuaranteePrograms/>
      <CoursesSection/>
      <State/>
      <CorporateTraining/>
      {/* <OurServices/> */}
      <WhyChooseUs/>
      <Testimonials/>
      <WhatMakeDiacDiff/>
      <Masterclass/>
      <Certification/>
      <CorporateTestimonials/>
      <PlacementCTA/>
    </main>
  );
}