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

export default function Home() {
  return (
    <main>
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