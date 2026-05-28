"use client";

import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-base-100 py-40 relative">

      {/* TOP SPACING / HERO GAP */}
      <div className="h-45"></div>

      {/* OVERLAP CARD */}
      <div className="max-w-7xl mx-auto px-6 absolute top-40  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="p-10 bg-[#f5f5f5] flex flex-col justify-between">

            <div>
              <h2 className="text-2xl font-semibold tracking-wide mb-10 text-gray-800">
                Contact Information
              </h2>

              {/* Email */}
              <div className="flex gap-4 mb-10">
                <div className="bg-white p-3 rounded-full shadow">
                  <Mail className="text-[#801717]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GENERAL ENQUIRIES</p>
                  <p className="font-semibold">training@diac.co.in</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4  items-center">
                <div className="bg-white p-3 rounded-full shadow ">
                  <Phone className="text-[#801717]" />
                </div>
                <div>
                  <p className="text-md text-gray-600">CALL US</p>
                  <p className="font-semibold">Service & Training: +91 99534 89987</p>
                  <p className="font-semibold">Training: +91 99534 89997</p>
                  <p className="font-semibold">Corporate Training: +91 97112 87737</p>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div>
              <p className="text-sm text-gray-600 mb-3">FOLLOW US</p>

              <div className="flex gap-5">

                <a
                  href="https://wa.me/919953489987"
                  target="_blank"
                  className="bg-white p-3 rounded-full shadow hover:bg-[#801717] hover:text-white transition"
                >
                  <FaWhatsapp size={20} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="bg-white p-3 rounded-full shadow hover:bg-[#801717] hover:text-white transition"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="bg-white p-3 rounded-full shadow hover:bg-[#801717] hover:text-white transition"
                >
                  <FaLinkedin size={20} />
                </a>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-10">

            <h2 className="text-2xl font-semibold mb-8 text-[#0b1f3a]">
              Send us a Message
            </h2>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#801717]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#801717]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#801717]"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#801717]"
                />
              </div>

              <select
                className="w-full border border-gray-300 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#801717] bg-white"
                defaultValue=""
              >
                <option value="" disabled>Select Course</option>
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

              <textarea
                rows={4}
                placeholder="Message"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-[#801717]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#801717] text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition"
              >
                Submit Enquiry
              </button>

            </form>
          </div>

        </div>
      </div>

    </section>
  );
}