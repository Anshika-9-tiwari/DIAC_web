"use client";

import {
  Mail,
  Phone,
  MapPin,
  Building,
} from "lucide-react";


export function ContactMapSection() {
  return (
    <section className="bg-[#fbfcff] pt-16 md:pt-28 pb-16 md:pb-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* MAP */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">

          <iframe
            src="https://www.google.com/maps?q=Noida+Sector+2&output=embed"
            className="w-full h-[280px] sm:h-[350px] md:h-[420px]"
            loading="lazy"
          ></iframe>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-2xl  md:text-3xl font-bold mb-6 leading-tight tracking-wide text-[#111827]">
            Industrial Automation Training for Real-World Careers
          </h2>

          <p className="text-gray-600 mb-8 text-[15px] sm:text-base leading-relaxed">
            We provide hands-on training in PLC, SCADA, HMI, Robotics,
            and Industrial Automation technologies to help students
            and professionals build industry-ready skills and successful careers.
          </p>

          {/* CARD */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-red-100 shadow-lg">

            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-[#111827]">

              <Building className="text-[#801717]" />

              DIAC Institute Training Center

            </h3>

            {/* ADDRESS */}
            <div className="flex items-start gap-4 mb-6">

              <MapPin
                className="text-[#801717] shrink-0 mt-1"
                size={20}
              />

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                C-65, 2nd Floor, Metro Station, near Sector-15,
                C Block, Sector 2, Noida,
                Uttar Pradesh 201301, India
              </p>

            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4 mb-6">

              <Phone
                className="text-[#801717] shrink-0 mt-1"
                size={20}
              />

              <p className="text-gray-600 text-sm sm:text-base">
                Training: +91 99534 89987
              </p>

            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">

              <Mail
                className="text-[#801717] shrink-0 mt-1"
                size={20}
              />

              <p className="text-gray-600 text-sm sm:text-base break-all">
                training@diac.co.in
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}