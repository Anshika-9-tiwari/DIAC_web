import CorporateTestimonials from "@/components/corporate_training/CorporateTestimonials";
import CourseAudienceSection from "@/components/Courses/coursesSubpages/CourseAudienceSection";
import CourseOverviewSection from "@/components/Courses/coursesSubpages/CourseOverviewSection";
import CoursesCertification from "@/components/Courses/coursesSubpages/CoursesCertification";
import CoursesFAQSection from "@/components/Courses/coursesSubpages/coursesFAQ";
import CourseSubpageHero from "@/components/Courses/coursesSubpages/CourseSubpageHero";
import CurriculumSection from "@/components/Courses/coursesSubpages/CurriculumSection";
import CoursesIndustryDemand from "@/components/Courses/coursesSubpages/CoursesIndustryDemand";
import CoursesProjectSection from "@/components/Courses/coursesSubpages/CoursesProjectsection";
import { industrialAutomationCourse } from "@/data/courses/panel-design";
import PlacementSupportSection from "@/components/Courses/coursesSubpages/CoursesPlacementSection";
import CourseCareerOutcomes from "@/components/Courses/coursesSubpages/CourseCareerOutcomes";



export default function PanelDesignPage() {
  return (
    <main>

        <CourseSubpageHero
          data={industrialAutomationCourse.hero}
        />

        <CourseOverviewSection
          data={industrialAutomationCourse.overview}
        />
        
        <CurriculumSection
          data={{
            ...industrialAutomationCourse.curriculum,
            modules: industrialAutomationCourse.curriculum.module,
          }}
        />

        <CoursesProjectSection
          data={industrialAutomationCourse.projects}
        />

        <CoursesCertification
          data={industrialAutomationCourse.certification}
        />
        
       <PlacementSupportSection
          data={industrialAutomationCourse.placement}
        />

       <CourseCareerOutcomes data={industrialAutomationCourse.career} />

       <CoursesIndustryDemand
         data={industrialAutomationCourse.industryDemand}
       />

       <CourseAudienceSection
         data={industrialAutomationCourse.audience}
       />

       <CorporateTestimonials/>

       <CoursesFAQSection
         data={industrialAutomationCourse.faq}
       />
    </main>
  );
}