"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {  Users,  TrendingUp, UserPen, FlaskConical, } from "lucide-react";

// Counter Hook
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
}

export default function Stats() {
  const trainers = useCounter(500);
  const partners = useCounter(100);
  const experience = useCounter(15);
  const projects = useCounter(300);
  const labs = useCounter(10);

  const stats = [
    {
      icon: UserPen,
      value: `${trainers}+`,
      label: "Corporate Trainings",
    },
    {
      icon: Users,
      value: `${partners}+`,
      label: " Hiring Partners",
    },
    {
      icon: FlaskConical,
      value: `${experience}+`,
      label: "Years Experience",
    },
    {
      icon: TrendingUp,
      value: `${projects}+`,
      label: "Live Industrial Projects",
    },
    {
      icon: TrendingUp,
      value: `${labs}+`,
      label: "Hands-on Practical Labs",
    },
  ];

  return (
    <section className="py-14 text-white bg-gray-50 bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#a11c1c] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 ">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center  mb-15"
        >
          <h2 className="text-[21px] md:text-[30px] font-bold playfair mb-3">
            Build Your Career in Industrial Automation
          </h2>
          <p className="text-[18px]">Join thousands of students building successful careers through practical industrial training.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5  gap-8 text-center">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center ${
                    index !== stats.length - 1 ? "md:border-r-2" : ""
                    }`}
                >
                <Icon size={40} className="mb-3" />

                <h3 className="text-2xl md:text-3xl font-bold font-serif playfair mb-2">
                  {item.value}
                </h3>

                <p className="text-sm md:text-base text-gray-200">
                  {item.label}
                </p>
              </motion.div>
            );
          })}

        </div>
        {/* Download Brochure Button
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-14"
            >
            <a
                href="/brochure.pdf"
                download
                className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-red-900 hover:text-white hover:border-2 hover:border-white shadow-lg transition duration-300 "
            >
                Download Brochure
            </a>
        </motion.div> */}
      </div>
    </section>
  );
}