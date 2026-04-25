"use client";

import { MapPin, Phone, Mail, Building } from "lucide-react";

export default function ContactMapSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-black to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

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
          <h2 className="text-2xl font-bold mb-4">
            Dynamic Institute of Automation & Controls
          </h2>

          <p className="text-gray-300 mb-8">
            We are focused on delivering industry-oriented training in
            Industrial Automation, helping students and professionals
            build real-world skills.
          </p>

          {/* Card */}
          <div className="bg-[#080b13] rounded-2xl p-6 border border-white/10 shadow-lg">

            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Building className="text-[#801717]" />
              Head Office
            </h3>

            {/* Address */}
            <div className="flex gap-3 mb-5">
              <MapPin className="text-[#801717]" />
              <p className="text-gray-300 text-sm">
                C-65, Sector 2, Noida, Uttar Pradesh – 201301
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-3 mb-5">
              <Phone className="text-[#801717]" />
              <p className="text-gray-300 text-sm">
                +91 99534 89987
              </p>
            </div>

            {/* Email */}
            <div className="flex gap-3">
              <Mail className="text-[#801717]" />
              <p className="text-gray-300 text-sm">
                training@diac.co.in
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}