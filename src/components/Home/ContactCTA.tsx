"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-12 bg-[#801717] text-white" >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">
            Have Questions? We’re Here to Help
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-200 mt-3">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" />
              <span>+91 99534 89987</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              <span>training@diac.co.in</span>
            </div>
          </div>
        </motion.div>

        {/* Right Button */}
        
        <Link
          href="/contact"
          className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}