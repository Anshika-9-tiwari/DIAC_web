"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Masterclass() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#a11c1c] text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Join Our Free Masterclass
          </h2>

          <p className="mb-6 text-gray-200">
            Kickstart your career in Industrial Automation with our expert-led
            FREE masterclass. Learn PLC, SCADA, and Robotics basics with live demos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition text-center"
            >
              Book Free Demo
            </Link>

            <Link
              href="/courses"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition text-center"
            >
              Explore Courses
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/training-bnner.jpg"
            alt="Free Masterclass"
            width={400}
            height={400}
            className="object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}