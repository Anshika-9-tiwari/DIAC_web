"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";

export default function Certification() {
  return (
    <section className="py-15 bg-gradient-to-r from-white via-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[25px] md:text-4xl font-bold mb-3 tracking-wide ">
            Certification <span className="text-[#801717]">&</span> Recognition
          </h2>
          <p className="text-gray-700 md:text-[18px]">
            Our certifications are recognized by industry leaders
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
            <h3 className="text-3xl font-semibold mb-4 text-[#801717]">
              Industry Recognized Certification
            </h3>

            <p className="text-gray-600 text-[18px] mb-4">
              At DIAC, we provide industry-recognized certifications that
              validate your skills in Industrial Automation, PLC, SCADA, and Robotics.
            </p>

            <p className="text-gray-600 text-[18px] mb-6">
              Our certification ensures that you are job-ready and capable of
              working in real industrial environments with confidence.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2 text-[16px]"> 
                <span> {/* ICON */}
                  <CircleCheckBig
                    size={20}
                    className="text-[#801717]"
                  />
                </span> 
                    Recognized by top industries
                </li>
              <li className="flex items-start gap-2 text-[16px]">
                 <span> {/* ICON */}
                    <CircleCheckBig
                      size={20}
                      className="text-[#801717]"
                    />
                  </span> 
                     Adds value to your resume
                </li>
              <li className="flex items-start gap-2 text-[16px]"> 
                <span> {/* ICON */}
                    <CircleCheckBig
                      size={20}
                      className="text-[#801717]"
                    />
                </span> 
                     Practical skill validation
              </li>
              <li className="flex items-start gap-2 text-[16px]">
                 <span> {/* ICON */}
                    <CircleCheckBig
                      size={20}
                      className="text-[#801717]"
                    />
                  </span> 
                     Better placement opportunities
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}