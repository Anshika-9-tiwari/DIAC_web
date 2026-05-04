import CourseOverviewSection from "@/components/Courses/coursesSubpages/CourseOverviewSection";
import CoursesPlacementSection from "@/components/Courses/coursesSubpages/CoursesPlacementSection";
import CourseSubpageHero from "@/components/Courses/coursesSubpages/CourseSubpageHero";



export default function CorporatePage() {
  return (
    <main>
       <CourseSubpageHero/>
       <CourseOverviewSection/>
       <CoursesPlacementSection/>
    </main>
  );
}