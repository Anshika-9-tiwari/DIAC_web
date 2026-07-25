"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

export default function Certification() {
  return (
    <section className="py-18 bg-gradient-to-r from-white via-gray-100 to-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:text-center mb-16"
        >
          <h2 className="text-[33px] md:text-[44px] font-bold mb-3 tracking-wide">
            Certification <span className="text-[#801717]">&</span> Recognition
          </h2>

          <p className="text-gray-800 md:text-[18px]">
            Industry-Recognized Certifications for Career Growth
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/courses/diac_certification.jpg"
              alt="DIAC Industry Recognized Certification"
              width={520}
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
            <h2 className="text-[31px] font-semibold mb-4 text-[#801717]">
              Industry Recognized Certification
            </h2>

            <p className="text-gray-600 text-[16px] mb-4 leading-relaxed">
              At DIAC, we provide professional certification programs designed
              to validate your practical skills in PLC, SCADA, HMI, VFD,
              Industrial Automation, and Robotics. Our industry-oriented
              training ensures students gain real-world technical expertise
              required in modern industrial environments.
            </p>

            <p className="text-gray-600 text-[16px] mb-7 leading-relaxed">
              The certification helps students strengthen their professional
              profile, improve job opportunities, and build confidence for
              working in automation industries and multinational companies.
            </p>

            {/* Certification Benefits */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-700">

              <li className="flex items-start gap-3 text-[15px]">
                <CircleCheckBig size={19} className="text-[#801717] mt-0.5 shrink-0" />
                <span>Industry-recognized certification</span>
              </li>

              <li className="flex items-start gap-3 text-[15px]">
                <CircleCheckBig size={19} className="text-[#801717] mt-0.5 shrink-0" />
                <span>Practical skill-based training validation</span>
              </li>

              <li className="flex items-start gap-3 text-[15px]">
                <CircleCheckBig size={19} className="text-[#801717] mt-0.5 shrink-0" />
                <span>Enhances resume & career opportunities</span>
              </li>

              <li className="flex items-start gap-3 text-[15px]">
                <CircleCheckBig size={19} className="text-[#801717] mt-0.5 shrink-0" />
                <span>Supports real industrial job readiness</span>
              </li>

            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}