import { Briefcase, GraduationCap, Users, Award } from "lucide-react";
import { FaUserCheck } from "react-icons/fa6";

const highlights = [
  {
    icon: FaUserCheck ,
    title: "Best Manpower Services",
  },
  {
    icon: Briefcase,
    title: "100% Placement Assistance",
  },
  {
    icon: GraduationCap,
    title: "Corporate Training in Delhi/NCR",
  },
  {
    icon: Users,
    title: "Expert Trainers",
  },
  {
    icon: Award,
    title: "Certification",
  },
];

export default function Highlights() {
  return (
    <section className="py-18 bg-white">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">

          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg border hover:shadow-lg transition duration-300"
              >
                <Icon
                  size={40}
                  className="mx-auto mb-3 text-[#801717]"
                />
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}