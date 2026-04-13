"use client";

import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-10">

      {/* Trusted Companies */}
      <div className="max-w-7xl mx-auto px-6 mb-12  border-b border-gray-400 py-6">
        <p className="text-xs text-center tracking-widest text-gray-500 mb-4 uppercase">
          Trusted by Leading Companies & Recruiters Across India
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Siemens",
            "ABB India",
            "Schneider Electric",
            "Rockwell Automation",
            "L&T Engineering",
            "TATA Group",
            "Emerson Process",
            "Yokogawa India",
          ].map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-gray-300 shadow-md  text-xs bg-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Get in Touch with DIAC
          </h2>

          <p className="text-gray-600 mb-8 text-sm">
            Whether you're a prospective student, corporate client, or industry
            partner — we're here to help you find the right programme.
          </p>

          {/* Contact List */}
          <div className="space-y-5 text-sm">

            <div className="flex gap-3 border-b pb-3">
              <MapPin className="text-[#801717]" size={18} />
              <p className="text-gray-700">
                C-65, Second Floor, Sector 2, Noida – 201301, INDIA
              </p>
            </div>

            <div className="flex gap-3 border-b pb-3">
              <Phone className="text-[#801717]" size={18} />
              <div className="text-gray-700">
                <p>+91 99534 89987 (Support & Training)</p>
                <p>+91 98187 80412</p>
                <p>+91 97112 87737 (HR)</p>
              </div>
            </div>

            <div className="flex gap-3 border-b pb-3">
              <Mail className="text-[#801717]" size={18} />
              <p className="text-gray-700">training@diac.co.in</p>
            </div>

            <div className="flex gap-3">
              <Globe className="text-[#801717]" size={18} />
              <p className="text-gray-700">www.diac.co.in</p>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white  p-6 border rounded border-gray-300">

          <form className="space-y-4">

            {/* Name + Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your full name"
                className="p-3 border border-gray-300 text-sm w-full"
              />
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="p-3 border border-gray-300 text-sm w-full"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="your@email.com"
              className="p-3 border border-gray-300 text-sm w-full"
            />

            {/* Course */}
            <select className="p-3 border border-gray-300 text-sm w-full">
              <option>Select a course</option>
              <option>PLC Training</option>
              <option>SCADA Training</option>
              <option>Robotics</option>
            </select>

            {/* Message */}
            <textarea
              rows={4}
              placeholder="Tell us how we can help..."
              className="p-3 border border-gray-300 text-sm w-full"
            ></textarea>

            {/* Button */}
            <button className="w-full bg-[#801717] text-white py-3 text-sm font-semibold hover:bg-red-800 transition">
              SUBMIT ENQUIRY
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}