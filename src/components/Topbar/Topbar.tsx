"use client";

import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#a11c1c] shadow-md backdrop-blur-md text-white text-md border-b-2 border-b-black">
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-2 flex flex-col md:flex-row items-center justify-between">

        {/* Left Side - Contact */}
        <div className="flex items-center gap-10 md:gap-8 transition-all duration-300">

          <a
            href="tel:+919953489987"
            className="flex items-center gap-2 transition "
          >
            <FaWhatsapp size={18} /> / <Phone size={18} />
            +91 99534 89987
          </a>

          <a
            href="mailto:training@diac.co.in"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <Mail size={18} />
            training@diac.co.in
          </a>

          <p>100% Placement Assistance</p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="hidden md:flex items-center gap-8 transition-all duration-300 animate-pulse">
          <a
            href="https://wa.me/919953489987"
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            <FaInstagram size={20} />
          </a>

          <a 
            href="https://www.linkedin.com" 
            target="blank"
            className="hover:text-yellow-300 transition">
            <FaLinkedin size={20}/>
          </a>

        </div>
      </div>
    </div>
  );
}