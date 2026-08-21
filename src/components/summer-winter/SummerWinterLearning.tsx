
import {
  Cpu,
  Monitor,
  Radio,
  Network,
  Factory,
  FlaskConical,
  Settings,
  GraduationCap,
} from "lucide-react";

const icons = [
  Cpu,
  Monitor,
  Radio,
  Network,
  Factory,
  FlaskConical,
  Settings,
  GraduationCap,
];

interface Props {
  items: string[];
}

export default function SummerWinterLearning({ items }: Props) {
  return (
    <section className="py-14 md:py-18 bg-[#f8f9fc]">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-[#801717] text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-md">
            Training Curriculum
          </div>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900">
            What You&apos;ll Learn
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {items.map((item, index) => {

            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-12 h-12 rounded-2xl bg-[#801717] text-white flex items-center justify-center mb-5 group-hover:scale-105 transition">

                  <Icon size={23} />

                </div>

                <h3 className="font-semibold text-gray-900 leading-6">
                  {item}
                </h3>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}