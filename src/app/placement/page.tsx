import AboutCTA from "@/components/About/ContactSection";
import AboutTestimonials from "@/components/About/Testimonials";
import Testimonials from "@/components/Home/Testimonials";
import AutomationCareerSection from "@/components/Placement/AutomationCareerSection";
import PlacementHero from "@/components/Placement/PlacementHero";
import PlacementMessage from "@/components/Placement/PlacementMessage";
import PlacementTimeline from "@/components/Placement/PlacementTimeline";
import PlacementTrust from "@/components/Placement/PlacementTrust";


export default function PlacementPage() {
  return (
    <main>
      
      <PlacementHero />
      <PlacementTrust />
      <PlacementMessage/>
      <PlacementTimeline/>
      <AutomationCareerSection/>
      {/* <PlacementCTA/> */}
     
      <Testimonials/>
      <AboutTestimonials/>
      <AboutCTA/>
    </main>
  );
}