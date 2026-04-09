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
    <section className="py-18 bg-white">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center shadow-lg ">

          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center p-6 m-2  ${
                    index !== highlights.length - 1 ? "md:border-r-1" : ""
                    }`}
              >
                <Icon
                  size={40}
                  className="mx-auto mb-3 text-[#801717]"
                />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="p-2">{item.subtitle}</p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}