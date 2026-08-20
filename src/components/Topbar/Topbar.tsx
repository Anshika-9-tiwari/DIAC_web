"use client";

import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Topbar() {

  return (
    <div className="bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#a11c1c] text-white border-b border-white/10">

  <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-12 flex items-center justify-between">

    {/* Left */}
    <div className="flex items-center gap-4 md:gap-6 text-sm">

      <a
        href="tel:+919953489987"
        className="flex items-center gap-2 hover:text-red-200 transition"
      >
        Support & Training :
        <Phone size={15} />
        <span> +91 99534 89987</span>
      </a>

      <span className="hidden md:block text-white/40">|</span>

      <a
        href="tel:+919953489987"
        className="hidden lg:flex items-center gap-2 hover:text-red-200 transition"
      >
        HR:
        <Phone size={15} />
        <span> +91 97112 87737</span> 
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

    {/* Right */}
    <div className="flex items-center gap-3">

      <div className="hidden lg:flex items-center mr-3">
        <span className="text-sm font-medium tracking-wide">
          🎯 100% Placement Assistance
        </span>
      </div>

      <a
        href="https://wa.me/919953489987"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex w-8 h-8 rounded-full bg-white/10 items-center justify-center hover:bg-white hover:text-[#801717] transition"
      >
        <FaWhatsapp size={15} />
      </a>

      <a
        href="https://www.instagram.com/diactraining/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex  w-8 h-8 rounded-full bg-white/10  items-center justify-center hover:bg-white hover:text-[#801717] transition"
      >
        <FaInstagram size={15} />
      </a>

      <a
        href="https://www.linkedin.com/school/diactraining/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex w-8 h-8 rounded-full bg-white/10  items-center justify-center hover:bg-white hover:text-[#801717] transition"
      >
        <FaLinkedin size={15} />
      </a>
      
      <a
        href="https://www.facebook.com/DIACTRAINING"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex w-8 h-8 rounded-full bg-white/10 items-center justify-center hover:bg-white hover:text-[#801717] transition"
      >
        <FaFacebook size={15} />
      </a>

    </div>

  </div>

</div>
  );
}