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
import JobGuaranteePrograms from "@/components/Home/JobGuranteedProgram";
import WhatMakeDiacDiff from "@/components/Home/WhatMakeDiacDiff";
import PlacementTrust from "@/components/Placement/PlacementTrust";
import AboutCTA from "@/components/About/ContactSection";
import AboutTestimonials from "@/components/About/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <PlacementTrust />
      <Highlights />
      <Companies/>
      <JobGuaranteePrograms/>
      <CoursesSection/>
      <State/>
      <CorporateTraining/>
      <WhyChooseUs/>
      <Testimonials/>
      <WhatMakeDiacDiff/>
      <Masterclass/>
      <Certification/>
      <AboutTestimonials/>
      <AboutCTA/>
    </main>
  );
}