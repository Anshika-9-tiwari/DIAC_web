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
import ContactCTA from "@/components/Home/ContactCTA";
import Trusted from "@/components/trustedClient/Trusted";

export default function Home() {
  return (
    <main>
      <Trusted />
      <Hero />
      <Highlights />
      <Companies/>
      <CoursesSection/>
      <State/>
      <CorporateTraining/>
      <WhyChooseUs/>
      <Testimonials/>
      <Masterclass/>
      <Certification/>
      <ContactCTA/>
    </main>
  );
}