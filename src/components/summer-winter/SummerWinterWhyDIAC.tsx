
import {
  CheckCircle2,
  Award,
  Cpu,
  BriefcaseBusiness,
} from "lucide-react";

interface Props {
  data: {
    title: string;
    description: string;
    paragraph: string;
    // points: string[];
  };
}

export default function SummerWinterWhyDIAC({ data }: Props) {
  return (
    <section className="py-14 md:py-18 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid  items-start">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-[#801717] text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-md">
              Why DIAC
            </div>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              {data.title}
            </h2>

            <p className="text-gray-600 text-lg leading-8">
              {data.description}
            </p>
            <p className="text-gray-600 text-lg leading-8">
              {data.paragraph}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}