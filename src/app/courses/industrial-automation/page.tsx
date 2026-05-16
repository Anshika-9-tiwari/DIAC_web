import CourseOverviewSection from "@/components/Courses/coursesSubpages/CourseOverviewSection";
import CoursesCertification from "@/components/Courses/coursesSubpages/CoursesCertification";
import CoursesPlacementSection from "@/components/Courses/coursesSubpages/CoursesPlacementSection";
import CourseSubpageHero from "@/components/Courses/coursesSubpages/CourseSubpageHero";
import CurriculumSection from "@/components/Courses/coursesSubpages/CurriculumSection";



export default function CorporatePage() {
  return (
    <main>
       <CourseSubpageHero/>
       <CourseOverviewSection/>
       <CoursesPlacementSection/>
       <CoursesCertification/>
       <CurriculumSection/>
    </main>
  );
}