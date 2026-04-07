"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Industrial Automation Training",
    image: "/hero-banner.jpg",
    duration: "6 Months",
    desc: "Hands-on training with PLC, SCADA, HMI & Industrial Projects",
    link: "/courses/industrial-training",
  },
  {
    title: "PLC Programming",
    image: "/training-bnner.jpg",
    duration: "3 Months",
    desc: "Learn PLC programming with real-time industrial applications",
    link: "/courses/plc-training",
  },
  {
    title: "SCADA & HMI",
    image: "/hero-banner.jpg",
    duration: "2 Months",
    desc: "Master SCADA systems and HMI design with live projects",
    link: "/courses/scada",
  },
  {
    title: "Robotics Training",
    image: "/training-bnner.jpg",
    duration: "4 Months",
    desc: "Learn industrial robotics and automation systems",
    link: "/courses/robotics",
  },
];

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CoursesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-red-800">DIAC</span> Courses
          </h2>
          <p className="text-gray-600">
            Explore industry-oriented courses designed for real-world skills
          </p>
        </motion.div>

        {/* Grid Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {course.desc}
                </p>

                <p className="text-sm font-medium text-[#801717] mb-4">
                  Duration: {course.duration}
                </p>

                <Link
                  href={course.link}
                  className="block text-center bg-[#801717] text-white py-2 rounded-lg hover:bg-red-800 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}