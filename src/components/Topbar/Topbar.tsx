"use client";

import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Topbar() {

  const year = new Date().getFullYear();

  return (
    <div className="bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#a11c1c] text-white border-b border-white/10">

  <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-12 flex items-center justify-between">

    {/* Left */}
    <div className="flex items-center gap-4 md:gap-8 text-sm">

      <span className="hidden lg:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-medium">
        🔥 Admissions Open {year}-{String(year + 1).slice(-2)}
      </span>

      <a
        href="tel:+919953489987"
        className="flex items-center gap-2 hover:text-red-200 transition"
      >
        <Phone size={15} />
        <span>+91 99534 89987</span>
      </a>

      <span className="hidden md:block text-white/40">|</span>

      <a
        href="mailto:training@diac.co.in"
        className="hidden md:flex items-center gap-2 hover:text-red-200 transition"
      >
        <Mail size={15} />
        <span>training@diac.co.in</span>
      </a>

    </div>

    {/* Center */}
    <div className="hidden lg:flex items-center">
      <span className="text-sm font-medium tracking-wide">
        🎯 100% Placement Assistance & Career Support
      </span>
    </div>

    {/* Right */}
    <div className="flex items-center gap-3">

      <a
        href="https://wa.me/919953489987"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#801717] transition"
      >
        <FaWhatsapp size={15} />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#801717] transition"
      >
        <FaInstagram size={15} />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#801717] transition"
      >
        <FaLinkedin size={15} />
      </a>

    </div>

  </div>

</div>
  );
}

//className="object-cover group-hover:scale-110 transition duration-300"  transition duration-300