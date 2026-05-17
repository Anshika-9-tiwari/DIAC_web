import FAQSection from "@/components/About/FaqSection";
import CorporateTestimonials from "@/components/corporate_training/CorporateTestimonials";
import CourseAudienceSection from "@/components/Courses/coursesSubpages/CourseAudienceSection";
import CourseOverviewSection from "@/components/Courses/coursesSubpages/CourseOverviewSection";
import CoursesCertification from "@/components/Courses/coursesSubpages/CoursesCertification";
import CoursesPlacementSection from "@/components/Courses/coursesSubpages/CoursesPlacementSection";
import CoursesProjectSection from "@/components/Courses/coursesSubpages/CoursesProjectsection";
import CourseSubpageHero from "@/components/Courses/coursesSubpages/CourseSubpageHero";
import CurriculumSection from "@/components/Courses/coursesSubpages/CurriculumSection";



export default function IndustrialAutomation() {
  return (
    <main>
       <CourseSubpageHero/>
       <CourseOverviewSection/>
       <CoursesPlacementSection/>
       <CoursesCertification/>
       <CurriculumSection/>
       <CoursesProjectSection/>
       <CourseAudienceSection/>
       <CorporateTestimonials/>
       <FAQSection/>
    </main>
  );
}