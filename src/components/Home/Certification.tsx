"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Certification() {
  return (
    <section className="py-16 bg-gradient-to-r from-white via-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-5 ">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-3">
            Certification & Recognition
          </h2>
          <p className="text-gray-600">
            Our certifications are recognized by industry leaders
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left - Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/hero-banner.jpg"
              alt="certificate"
              width={500}
              height={300}
              className="rounded-xl shadow-lg object-contain"
            />
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#801717]">
              Industry Recognized Certification
            </h3>

            <p className="text-gray-600 mb-4">
              At DIAC, we provide industry-recognized certifications that
              validate your skills in Industrial Automation, PLC, SCADA, and Robotics.
            </p>

            <p className="text-gray-600 mb-6">
              Our certification ensures that you are job-ready and capable of
              working in real industrial environments with confidence.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Recognized by top industries</li>
              <li>✔ Adds value to your resume</li>
              <li>✔ Practical skill validation</li>
              <li>✔ Better placement opportunities</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}