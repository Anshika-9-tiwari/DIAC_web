import AboutHero from "@/components/About/AboutHero";
import ContactSection from "@/components/About/ContactSection";
import FAQSection from "@/components/About/FaqSection";
import PlacementRecord from "@/components/About/PlacementRecord";
import Testimonials from "@/components/About/Testimonials";
import TopCourses from "@/components/About/TopCourses";
import TrainingMethodology from "@/components/About/TrainingMethodology";
import VisionMission from "@/components/About/VisionMission";
import WhoWeAre from "@/components/About/Who-we-are";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre/>
      <TrainingMethodology/>
      <TopCourses/>
      <VisionMission/>
      <PlacementRecord/>
      <Testimonials/>
      <ContactSection/>
      <FAQSection/>
    </main>
  );
}