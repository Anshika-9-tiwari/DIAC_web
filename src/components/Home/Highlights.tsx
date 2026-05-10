import { Briefcase, GraduationCap, Users, Award } from "lucide-react";
import { FaUserCheck } from "react-icons/fa6";

const highlights = [
  {
    icon: FaUserCheck ,
    title: "Best Manpower ",
    subtitle: 'Services'
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    subtitle: '100% '
  },
  {
    icon: GraduationCap,
    title: "Trained Students",
    subtitle: '2Lakh+ '
  },
  {
    icon: Users,
    title: "Expert Trainers",
    subtitle: '2Lakh+ '
  },
  {
    icon: Award,
    title: "Success Ratio",
    subtitle: '99%'
  },
];

export default function Highlights() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-8xl mx-auto px-10 ">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 text-center py-2 rounded-lg border border-gray-100 shadow-md">

          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center p-6 md:p-2 m-3  ${
                    index !== highlights.length - 1 ? "md:border-r-2 md:border-gray-200" : ""
                    }`}
              >
                <Icon
                  size={45}
                  className="mx-auto mb-3 text-[#801717]"
                />
                <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                <p className="p-2">{item.subtitle}</p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}