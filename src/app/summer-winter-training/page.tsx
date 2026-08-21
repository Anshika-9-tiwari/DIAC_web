import SummerWinterHero from "@/components/summer-winter/SummerWinterHero";
import SummerWinterOverview from "@/components/summer-winter/SummerWinterOverview";
import SummerWinterLearning from "@/components/summer-winter/SummerWinterLearning";
import SummerWinterHighlights from "@/components/summer-winter/SummerWinterHighlights";
import SummerWinterEligibility from "@/components/summer-winter/SummerWinterEligibility";
import SummerWinterWhyDIAC from "@/components/summer-winter/SummerWinterWhyDIAC";
import SummerWinterCTA from "@/components/summer-winter/SummerWinterCTA";

import { summerWinterTrainingData } from "@/data/summerWinterTrainingData";

export default function SummerWinterTrainingPage() {
  return (
    <main>

      <SummerWinterHero
        data={summerWinterTrainingData.hero}
      />

      <SummerWinterOverview
        data={summerWinterTrainingData.overview}
      />

      <SummerWinterLearning
        items={summerWinterTrainingData.whatYouLearn}
      />

      <SummerWinterHighlights
        items={summerWinterTrainingData.highlights}
      />

      <SummerWinterEligibility
        items={summerWinterTrainingData.eligibility}
      />

      <SummerWinterWhyDIAC
        data={summerWinterTrainingData.whyChoose}
      />

      <SummerWinterCTA />

    </main>
  );
}