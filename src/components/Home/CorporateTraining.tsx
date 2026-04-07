"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const companies = [
//   "/siemens.png",
//   "/abb.png",
//   "/schneider.png",
//   "/mitsubishi.png",
//   "/delta.png",
//   "/omron.png",
//   "/honeywell.png",
//   "/bosch.png",
  "/image.png",
  "/image_1.png",
  "/image_2.png",
  "/image_3.png",
  "/image_4.png",
  "/image_5.png",
  "/image_6.png",
  "/image_7.png",
];

export default function CorporateTraining() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">
            Corporate Training & Industry Partners
          </h2>
          <p className="text-gray-600">
            We have trained professionals for top industrial companies
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">

          {companies.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-center"
            >
              <Image
                src={logo}
                alt="company logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}