"use client";

import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-white text-center px-5">
      <div className="max-w-3xl border border-gray-300 py-5 rounded-2xl shadow-xl hover:shadow-2xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Have Questions? Get in Touch With Us
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mb-6">
          Contact our experts to get the right guidance for your career in industrial automation.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6 text-gray-700">
          
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-[#801717]" />
            <span>+91 99534 89987</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={18} className="text-[#801717]" />
            <span>training@diac.co.in</span>
          </div>

        </div>

        {/* Button */}
        <Link
          href="/contact"
          className="inline-block bg-[#801717] text-white px-8 py-3 rounded font-semibold hover:bg-red-800 transition"
        >
          CONTACT US
        </Link>

      </div>
    </section>
  );
}