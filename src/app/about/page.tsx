import AboutHero from "@/components/About/AboutHero";
import AboutCTA from "@/components/About/ContactSection";
import PlacementRecord from "@/components/About/PlacementRecord";
import Testimonials from "@/components/About/Testimonials";
import TrainingMethodology from "@/components/About/TrainingMethodology";
import VisionMission from "@/components/About/VisionMission";
import WhoWeAre from "@/components/About/Who-we-are";
import CoursesSection from "@/components/Home/CourcesSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre/>
      <TrainingMethodology/>
      <CoursesSection/>
      <VisionMission/>
      <PlacementRecord/>
      <Testimonials/>
      <AboutCTA/>
    </main>
  );
}