"use client";

export default function CorporateContact() {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a] mb-3">
            Contact Us
          </h2>
          <p className="text-gray-500 text-sm">
            Let’s discuss your corporate training requirements
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch ">

          {/* FORM */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">
                Request Training Proposal
              </h3>
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#801717]"
              />

              <input
                type="email"
                placeholder="E-Mail"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#801717]"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#801717]"
              />

              <select
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#801717] bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Course
                </option>

                <option>PLC Programming & Commissioning</option>
                <option>SCADA & HMI Training</option>
                <option>Drives & Motors Training</option>
                <option>Industrial Robotics Training</option>
                <option>Process Instrumentation</option>
                <option>Panel Designing & AutoCAD</option>
                <option>DCS Training</option>
                <option>PLC Networking</option>
                <option>Servo Motors Training</option>

              </select>

              <button
                type="submit"
                className="bg-[#801717] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-red-800 transition"
              >
                Send Enquiry
              </button>

            </form>
          </div>

          {/* MAP */}
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">

            <iframe
              src="https://www.google.com/maps?q=Noida+Sector+2&output=embed"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}