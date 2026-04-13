"use client";

import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#a11c1c] shadow-md backdrop-blur-md text-white border-b border-black">
      
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-2 flex flex-col md:flex-row items-center justify-between gap-2">

        {/* Left Side */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8 text-sm md:text-base">

          {/* Phone */}
          <a
            href="tel:+919953489987"
            className="flex items-center gap-2 transition"
          >
            <FaWhatsapp size={16} />/
            <Phone size={16} />
            <span className="hidden sm:inline">+91 99534 89987</span>
          </a>

          {/* Email */}
          <a
            href="mailto:training@diac.co.in"
            className="flex items-center gap-2 transition"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">training@diac.co.in</span>
          </a>

          {/* Placement (Hidden on Mobile) */}
          <p className="md:block font-sm">
            100% Placement Assistance
          </p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="hidden md:flex items-center gap-6 animate-pulse">
          <a
            href="https://wa.me/919953489987"
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            <FaWhatsapp size={18} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

      </div>
    </div>
  );
}

//className="object-cover group-hover:scale-110 transition duration-300"  transition duration-300