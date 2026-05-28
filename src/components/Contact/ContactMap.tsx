"use client";

import { MapPin, Phone, Mail, Building } from "lucide-react";

export default function ContactMapSection() {
  return (
    <section  className="py-20 bg-[#fbfcff] text-gray-800 shadow-lg  border border-white/10">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT - MAP */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Noida+Sector+2&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
          ></iframe>
        </div>

        {/* RIGHT - INFO */}
        <div>

          {/* Top Text */}
          <h2 className="text-3xl font-bold mb-6 leading-10 tracking-wide">
            Industrial Automation Training for Real-World Careers
          </h2>

          <p className="text-gray-600 mb-8">
            We provide hands-on training in PLC, SCADA, HMI, Robotics, and Industrial Automation technologies to help students and professionals build industry-ready skills and successful careers.
          </p>

          {/* Card */}
          <div className="bg-white/25 rounded-2xl p-6 border border-red-100 shadow-lg">

            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Building className="text-[#801717]" />
              DIAC Institute Training Center
            </h3>

            {/* Address */}
            <div className="flex gap-3 mb-5">
              <MapPin className="text-[#801717]" />
              <p className="text-gray-600 text-md">
                C-65, 2nd Floor, Metro Station, near Sector-15, C Block, Sector 2, Noida, Uttar Pradesh 201301, India
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-3 mb-5">
              <Phone className="text-[#801717]" />
              <p className="text-gray-600 text-md">
                Training: +91 99534 89987
              </p>
            </div>

            {/* Email */}
            <div className="flex gap-3">
              <Mail className="text-[#801717]" />
              <p className="text-gray-600 text-md">
                 training@diac.co.in
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}