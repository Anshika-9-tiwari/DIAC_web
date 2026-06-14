import CorporateTestimonials from "@/components/corporate_training/CorporateTestimonials";
import CourseAudienceSection from "@/components/Courses/coursesSubpages/CourseAudienceSection";
import CourseOverviewSection from "@/components/Courses/coursesSubpages/CourseOverviewSection";
import CoursesCertification from "@/components/Courses/coursesSubpages/CoursesCertification";
import CoursesFAQSection from "@/components/Courses/coursesSubpages/coursesFAQ";
import CoursesPlacementSection from "@/components/Courses/coursesSubpages/CoursesPlacementSection";
import CourseSubpageHero from "@/components/Courses/coursesSubpages/CourseSubpageHero";
import CurriculumSection from "@/components/Courses/coursesSubpages/CurriculumSection";
import CoursesIndustryDemand from "@/components/Courses/coursesSubpages/CoursesIndustryDemand";
import CoursesProjectSection from "@/components/Courses/coursesSubpages/CoursesProjectSection"



export default function IndustrialAutomation() {
  return (
    <main>
       <CourseSubpageHero/>
       <CourseOverviewSection/>
       <CurriculumSection/>
       <CoursesProjectSection/>
       <CoursesCertification/>
       <CoursesPlacementSection/>
       <CoursesIndustryDemand/>
       <CourseAudienceSection/>
       <CorporateTestimonials/>
       <CoursesFAQSection/>
    </main>
  );
}