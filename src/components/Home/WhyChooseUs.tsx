"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Users,
  Award,
  Cpu,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Practical Training",
    desc: "Hands-on training with real industrial equipment",
  },
  {
    icon: Cpu,
    title: "Live Projects",
    desc: "Work on real-time industrial automation projects",
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    desc: "100% placement assistance with top companies",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    desc: "Learn from industry professionals with years of experience",
  },
  {
    icon: Award,
    title: "Certification",
    desc: "Get recognized certification after course completion",
  },
  {
    icon: ShieldCheck,
    title: "Industry Exposure",
    desc: "Industrial visits and real-world exposure",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/training-bnner.jpg"
            alt="Why Choose DIAC"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Content */}
        <div>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-3">
              Why Choose DIAC?
            </h2>
            <p className="text-gray-600">
              We provide industry-oriented training with real-world experience
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3 items-start"
                >
                  <Icon className="text-[#801717] mt-1" size={24} />

                  <div>
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}