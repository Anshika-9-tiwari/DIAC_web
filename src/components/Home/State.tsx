"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Briefcase, Users, Award, TrendingUp } from "lucide-react";

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
  const placement = useCounter(100);
  const students = useCounter(10000);
  const experience = useCounter(15);
  const salary = useCounter(6);

  const stats = [
    {
      icon: Briefcase,
      value: `${placement}%`,
      label: "Placement Assistance",
    },
    {
      icon: Users,
      value: `${students}+`,
      label: "Students Trained",
    },
    {
      icon: Award,
      value: `${experience}+`,
      label: "Years Experience",
    },
    {
      icon: TrendingUp,
      value: `₹${salary} LPA`,
      label: "Avg Salary",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#5a0f0f] via-[#801717] to-[#a11c1c]  text-white">
      <div className="max-w-7xl mx-auto px-6 ">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-15"
        >
          <h2 className="text-3xl font-bold">
            Our Achievements
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4  gap-8 text-center">

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
                <Icon size={40} className="mb-3 text-yellow-400" />

                <h3 className="text-2xl md:text-3xl font-bold">
                  {item.value}
                </h3>

                <p className="text-sm md:text-base text-gray-200">
                  {item.label}
                </p>
              </motion.div>
            );
          })}

        </div>
        {/* Download Brochure Button */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
            >
            <a
                href="/brochure.pdf"
                download
                className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 shadow-lg  hover:border-r-4 hover:border-t-4 hover:border-r-white hover:border-t-white"
            >
                Download Brochure
            </a>
        </motion.div>
      </div>
    </section>
  );
}