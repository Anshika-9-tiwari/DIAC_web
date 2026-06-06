import AutomationCareerSection from "@/components/Placement/AutomationCareerSection";
import PlacementCTA from "@/components/Placement/PlacementCTA";
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
      <PlacementCTA/>
    </main>
  );
}