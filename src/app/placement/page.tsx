import PlacementCTA from "@/components/Placement/PlacementCTA";
import PlacementHero from "@/components/Placement/PlacementHero";
import PlacementMessage from "@/components/Placement/PlacementMessage";
import PlacementTrust from "@/components/Placement/PlacementTrust";
import TrainedEngineers from "@/components/Placement/TrainedEngineers";


export default function PlacementPage() {
  return (
    <main>
      
      <PlacementHero />
      <PlacementTrust />
      <TrainedEngineers/>
      <PlacementMessage/>
      <PlacementCTA/>
    </main>
  );
}