
import { BookOpen, Factory, GraduationCap } from "lucide-react";

interface Props {
  data: {
    sectionTag: string;
    title: string;
    description: React.ReactNode;
    paragraphs: string[];
  };
}

export default function SummerWinterOverview({ data }: Props) {
  return (
    <section className="py-15 md:py-22 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">

          {/* LEFT */}
          <div className="lg:sticky lg:top-28 h-fit">

            <div className="inline-flex items-center gap-2 bg-[#801717] text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
              {data.sectionTag}
            </div>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              {data.title}
            </h2>

            <div className="grid grid-cols-3 gap-3 mt-8">

              <div className="p-4 bg-red-50 rounded-2xl text-center">
                <BookOpen
                  size={24}
                  className="mx-auto text-[#801717] mb-2"
                />
                <span className="text-xs font-semibold text-gray-700">
                  Practical
                </span>
              </div>

              <div className="p-4 bg-red-50 rounded-2xl text-center">
                <Factory
                  size={24}
                  className="mx-auto text-[#801717] mb-2"
                />
                <span className="text-xs font-semibold text-gray-700">
                  Industrial
                </span>
              </div>

              <div className="p-4 bg-red-50 rounded-2xl text-center">
                <GraduationCap
                  size={24}
                  className="mx-auto text-[#801717] mb-2"
                />
                <span className="text-xs font-semibold text-gray-700">
                  Certified
                </span>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <p className="text-lg md:text-xl text-gray-700 leading-8 mb-7">
              {data.description}
            </p>

            <div className="space-y-6">

              {data.paragraphs.map((paragraph, index) => (

                <p
                  key={index}
                  className="text-gray-600 text-base md:text-lg leading-8"
                >
                  {paragraph}
                </p>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}