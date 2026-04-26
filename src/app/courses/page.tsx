import CoursesHero from "@/components/Courses/CoursesHero";
import CoursesLayout from "@/components/Courses/CoursesLayout";
import CoursesSupport from "@/components/Courses/CoursesSupport";
import PlacementJourney from "@/components/Courses/PlacementJourney";
import WhyChooseUs from "@/components/Home/WhyChooseUs";


export default function CorporatePage() {
  return (
    <main>
       <CoursesHero/>
       <CoursesLayout/>
       <PlacementJourney/>
       <CoursesSupport/>
       <WhyChooseUs/>
    </main>
  );
}