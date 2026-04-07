"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Have Questions? Talk to Our Experts
          </h2>

          <p className="text-gray-600 mb-6">
            Get guidance from our experts and choose the right course for your career.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-yellow-400" />
              <span>+91 99534 89987</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-yellow-400" />
              <span>training@diac.co.in</span>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-6 text-black"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">
            Request a Callback
          </h3>

          <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full border p-2 rounded"
              />

              <select className="w-full border p-2 rounded">
                <option>Select Course</option>
                <option>Industrial Training</option>
                <option>PLC Training</option>
                <option>SCADA Training</option>
              </select>

              <button className="w-full bg-[#801717] text-white py-2 rounded font-semibold">
                Submit
              </button>
            </form>
        </motion.div>

      </div>
    </section>
  );
}