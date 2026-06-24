import { Briefcase, GraduationCap, Users, Award } from "lucide-react";
import { FaUserCheck } from "react-icons/fa6";

const highlights = [
  {
    icon: FaUserCheck,
    title: "Skilled Manpower",
    subtitle: "Industry Experts",
  },
  {
    icon: Briefcase,
    title: "Job Assistance",
    subtitle: "100% Support",
  },
  {
    icon: GraduationCap,
    title: "Students Trained",
    subtitle: "5Lakh+",
  },
  {
    icon: Users,
    title: "Corporate Training",
    subtitle: "Industrial Programs",
  },
  {
    icon: Award,
    title: "Success Ratio",
    subtitle: "99.99%",
  },
];

export default function Highlights() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-8xl mx-auto px-4 md:px-8">

        <div className="flex flex-wrap justify-center md:grid md:grid-cols-5 gap-3 md:gap-5 text-center py-3 md:py-4 rounded-xl border border-gray-100 shadow-sm">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`w-[150px] sm:w-[170px] md:w-auto flex flex-col items-center p-3 md:p-4 ${
                  index !== highlights.length - 1
                    ? "md:border-r-2 md:border-gray-200"
                    : ""
                }`}
              >
                <Icon
                  size={36}
                  className="mx-auto mb-2 text-[#801717]"
                />

                <h2 className="font-semibold text-[15px] md:text-lg text-gray-800 leading-snug">
                  {item.title}
                </h2>

                <p className="pt-1 text-sm md:text-base text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}