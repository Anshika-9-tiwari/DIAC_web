"use client";

interface Props {
  data: {
    badge: string;
    title: string;
    description: string;
    cards: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };
}

export default function PlacementSupportSection({data,}: Props) {
  return (
    <section 
     id="placements"
     className="py-18 bg-gradient-to-b from-white via-[#fcf7f7] to-[#faf5f5]">

      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-[#801717] uppercase tracking-[4px] font-semibold text-sm mb-4">
            {data.badge}
          </p>

          <h2 className="text-[34px] md:text-[45px] font-semibold text-gray-800 mb-6">
            {data.title}
          </h2>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-9">
            {data.description}
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.cards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-6  text-center shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon */}
              <div className="text-4xl mb-7">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[24px] font-medium text-gray-800 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-8 text-lg">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}