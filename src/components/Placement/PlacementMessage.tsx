"use client";

export default function PlacementMessage() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-[#ffff] text-black ">
      <div className="max-w-7xl mx-auto px-8 md:px-12">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#801717] border border-black text-[#ffff] px-4 py-2 rounded-full text-sm mb-6">
          🎯 Career-Focused Training
        </div>

        <div className="grid lg:grid-cols-1 gap-10  mb-12 md:mb-14">

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl leading-relaxed font-bold mb-6">
              Placement Assistance at DIAC - Build  Your Career in
              <span className="block text-[#801717]">
                 Industrial Automation
              </span>
            </h2>

            <p className="text-gray-700 text-lg leading-8 mb-6">
             At DIAC, we believe training is complete only when students are prepared for real industry opportunities. Our dedicated placement assistance program is designed to help students start successful careers in Industrial Automation, PLC SCADA, HMI, VFD, Robotics, Electrical Design, and related industrial technologies.
            </p>

            <p className="text-gray-700 text-lg leading-8">
              With the rapid growth of Industry 4.0, smart manufacturing, and factory automation, industries across India are actively hiring skilled automation professionals. DIAC bridges the gap between technical education and industrial requirements through practical training, live projects, interview preparation, and placement support.
            </p>
          </div>
        </div>

        {/* second part */}

        <div>
          <h2 className="text-3xl md:text-5xl leading-relaxed tracking-normal font-bold mb-6">
            Why Industrial Automation is a {" "}
            <span className=" text-[#801717]">
              Fast-Growing Career
            </span>
          </h2>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            The Industrial Automation sector is expanding rapidly due to increasing demand for smart factories, robotics, AI-enabled production systems, and automated manufacturing processes.
          </p>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            India’s industrial automation market is projected to grow significantly over the coming years, driven by automotive, electronics, pharmaceutical, food processing, and manufacturing industries. Reports show strong market growth with increasing adoption of PLC, SCADA, robotics, and IoT technologies across industries.
          </p>
          <p className="text-gray-800 text-lg leading-8">
            According to recent industry reports:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          {[
            "India’s Industrial Automation market is expected to grow at a strong CAGR over the next decade.",
            "Smart manufacturing and digital transformation are becoming essential for modern industries.",
            "Skilled automation engineers are in high demand across manufacturing plants and industrial sectors.",
            "Companies are increasingly investing in automation technologies to improve efficiency and productivity.",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md border border-red-50"
            >
              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-full bg-[#801717] text-white flex items-center justify-center shrink-0">
                  ✓
                </div>

                <p className="text-gray-800 leading-7">
                  {item}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}