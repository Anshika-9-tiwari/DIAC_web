import PlacementCTA from "@/components/Placement/PlacementCTA";
import PlacementHero from "@/components/Placement/PlacementHero";
import PlacementMessage from "@/components/Placement/PlacementMessage";
import PlacementTrust from "@/components/Placement/PlacementTrust";


export default function PlacementPage() {
  return (
    <main>
      
      <PlacementHero />
      <PlacementTrust />
      <PlacementMessage/>
      <PlacementCTA/>
    </main>
  );
}