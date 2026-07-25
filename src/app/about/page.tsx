import AboutHero from "@/components/About/AboutHero";
import AboutCTA from "@/components/About/ContactSection";
import AboutTestimonials from "@/components/About/Testimonials";
import TrainingMethodology from "@/components/About/TrainingMethodology";
import VisionMission from "@/components/About/VisionMission";
import WhoWeAre from "@/components/About/Who-we-are";
import CoursesSection from "@/components/Home/CourcesSection";
import PlacementTrust from "@/components/Placement/PlacementTrust";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <PlacementTrust />
      <WhoWeAre/>
      <TrainingMethodology/>
      <CoursesSection/>
      <VisionMission/>
      <AboutTestimonials/>
      <AboutCTA/>
    </main>
  );
}