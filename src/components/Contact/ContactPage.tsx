"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-r from-black via-[#030810] to-gray-950 py-12  ">

      {/* HERO TOP */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-40 text-white">
        <p className="text-sm font-medium tracking-widest text-red-700 mb-3">
          GET IN TOUCH
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Start a Conversation.
        </h1>

        <p className="text-gray-300 max-w-xl text-lg">
          Whether you are a student looking for guidance, or a company
          seeking talent, our team is ready to help you navigate the future.
        </p>
      </div>

    </section>
  );
}