"use client";

import Slider from "react-slick";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Best institute for industrial automation. Trainers are very supportive and placement assistance is great.",
  },
  {
    name: "Ankit Verma",
    review:
      "Learned PLC and SCADA with real projects. Highly recommended for beginners and professionals.",
  },
  {
    name: "Priya Singh",
    review:
      "Amazing experience! Practical training and excellent faculty.",
  },
  {
    name: "Aman Gupta",
    review:
      "Got placed after completing course. DIAC really helped me build my career.",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

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
            What Our Students Say
          </h2>
          <p className="text-gray-600">
            Real reviews from our successful students
          </p>
        </motion.div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition h-full"
              >
                {/* Stars */}
                <div className="flex mb-3 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 text-sm mb-4">
                  "{item.review}"
                </p>

                {/* Name */}
                <h4 className="font-semibold text-[#801717]">
                  {item.name}
                </h4>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}