"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-r from-gray-50 via-[#faf3f3] to-[#f9eeee] text-black shadow-md  border border-gray-300  rounded-md ">

      {/* HERO TOP */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-40">
        <p className="text-sm font-medium tracking-widest text-red-900 mb-3">
          GET IN TOUCH
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Start Your Automation Journey.
        </h1>

        <p className="max-w-xl text-lg text-shadow-red-400">
          Whether you are a student, fresher, or working professional, our experts are here to guide you toward industry-ready skills and career growth.
        </p>
      </div>

    </section>
  );
}