"use client";

import {
  Droplets,
  Package,
  MoveHorizontal,
  Settings,
  TrafficCone,
  BarChart3,
  Factory,
  Cog,
} from "lucide-react";

interface Props {
  data: {
    sectionTag: string;
    title: string;
    description: string;

    projects: {
      icon: string;
      title: string;
      desc: string;
      tech: string;
    }[];
  };
}

const iconMap = {
  Droplets,
  Package,
  MoveHorizontal,
  Settings,
  TrafficCone,
  BarChart3,
  Factory,
  Cog,
};

export default function CoursesProjectSection({ data,}: Props) {
  return (
    <section 
      id="projects"
      className="py-18 bg-white text-gray-800">

      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-18">

          <p className="text-[#801717] uppercase tracking-[4px] font-semibold text-sm mb-5">
            {data.sectionTag}
          </p>

          <h2 className="text-[35px] md:text-[45px] font-semibold text-gray-800 mb-6">
            {data.title}
          </h2>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-9">
            {data.description}
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {data.projects.map((project, index) => {

            const Icon = iconMap[project.icon as keyof typeof iconMap];

            return (
              <div
                key={index}
                className="card bg-white border border-gray-300 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl"
              >
                <div className="card-body">

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-red-900 flex items-center justify-center mb-5 shadow">
                    <Icon
                      size={28}
                      className="text-[#ffff]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] font-medium text-gray-700 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-8 mb-5">
                    {project.desc}
                  </p>

                  {/* Tech Badge */}
                  <div>
                    <span className="badge badge-lg bg-red-900 text-[#f7f7f7] border-0 px-4 py-5 font-semibold shadow">
                      {project.tech}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}