"use client";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaInstagram,  FaYoutube } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export function ContactForm() {
  return (
    <section className="relative z-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* OVERLAP CARD */}
        <div className="mt-10 lg:-mt-28 bg-white rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="bg-[#f5f5f5] p-6 sm:p-8 md:p-10">

            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#0b1f3a]">
              Contact Information
            </h2>

            {/* EMAIL */}
            <div className="flex items-start gap-4 mb-8">

              <div className="bg-white p-3 rounded-full shadow shrink-0">
                <Mail className="text-[#801717]" size={20} />
              </div>

              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-1">
                  GENERAL ENQUIRIES
                </p>

                <p className="font-semibold text-sm sm:text-base break-all">
                  training@diac.co.in
                </p>
              </div>

            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4 mb-8">

              <div className="bg-white p-3 rounded-full shadow shrink-0">
                <Phone className="text-[#801717]" size={20} />
              </div>

              <div>
                <p className="text-sm tracking-widest text-gray-500 mb-1">
                  CALL US
                </p>

                <p className="font-semibold text-sm ">
                  Service & Training: +91 99534 89987
                </p>
                <p className="font-semibold text-sm ">
                  Training: +91 99534 89997
                </p>
                <p className="font-semibold text-sm ">
                  Corporate Training: +91 97112 87737
                </p>
              </div>

            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-4 mb-10 md:mb-25 ">

              <div className="bg-white p-3 rounded-full shadow shrink-0">
                <MapPin className="text-[#801717]" size={20} />
              </div>

              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-1">
                  LOCATION
                </p>

                <p className="font-semibold text-sm  leading-relaxed">
                  C-65, 2nd Floor, Metro Station, near Sector-15
                </p>
              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div>

              <p className="text-sm font-semibold mb-4 text-[#111827]">
                Follow Us
              </p>

              <div className="flex items-center gap-4 flex-wrap">

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#801717] hover:text-white transition"
                >
                  <FaFacebook size={18} />
                </a>

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

                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#801717] hover:text-white transition"
                >
                  <FaYoutube size={18} />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-6 sm:p-8 md:p-10">

            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#0b1f3a]">
              Send us a Message
            </h2>

            <form className="space-y-5">

              {/* NAME */}
              <div className="grid sm:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="First Name"
                  className="border px-4 py-3 rounded-lg focus:outline-none focus:border-[#801717]"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border px-4 py-3 rounded-lg focus:outline-none focus:border-[#801717]"
                />

              </div>

              {/* EMAIL + PHONE */}
              <div className="grid sm:grid-cols-2 gap-4">

                <input
                  type="email"
                  placeholder="Email"
                  className="border px-4 py-3 rounded-lg focus:outline-none focus:border-[#801717]"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="border px-4 py-3 rounded-lg focus:outline-none focus:border-[#801717]"
                />

              </div>

              {/* COURSE */}
              <select
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:border-[#801717] bg-white"
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

              {/* MESSAGE */}
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:border-[#801717]"
              ></textarea>

              {/* BUTTON */}
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