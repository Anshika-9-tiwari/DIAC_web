"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function ContactSupport() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#801717] via-[#a11c1c] to-[#801717] text-center">

      <div className="max-w-4xl mx-auto px-6">

        {/* TOP LABEL */}
        <p className="text-sm tracking-widest text-gray-300 mb-4">
          FOR QUERIES, FEEDBACK OR ASSISTANCE
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-10">
          Contact DIAC Learner Support
        </h2>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">

          {/* CALL BUTTON */}
          <a
            href="tel:+9199534 89987"
            className="flex items-center justify-center gap-3 border border-gray-300 text-gray-300 px-8 py-4 rounded-lg font-medium hover:shadow-xl transition"
          >
            <Phone size={20} />
            +91 99534 89987
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/9199534 89987"
            target="_blank"
            className="flex items-center justify-center gap-3 border border-gray-300 text-gray-300 px-8 py-4 rounded-lg font-medium hover:shadow-xl transition"
          >
            <MessageCircle size={20} className="text-gray-300" />
           +91 99534 89987
          </a>

        </div>

      </div>
    </section>
  );
}