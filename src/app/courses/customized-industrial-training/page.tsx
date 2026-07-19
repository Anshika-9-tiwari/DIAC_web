import CustomizedTrainingForm from "@/components/Courses/customizedtraining/CustomizedTrainingForm";
import CustomizedTrainingHero from "@/components/Courses/customizedtraining/CustomizedTrainingHero";
import CustomizedTrainingWhy from "@/components/Courses/customizedtraining/CustomizedTrainingWhy";


export default function CustomizedIndustrialTrainingPage() {
  return (
    <main>
      <CustomizedTrainingHero />

      <CustomizedTrainingWhy />

      <CustomizedTrainingForm />
    </main>
  );
}