"use client";

import {
  Phone,
  MessageCircle,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSupport() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-r from-[#a11c1c] to-[#801717] overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">

          {/* left content */}
          <div className="text-center lg:text-left">

            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">

              <Headphones
                size={16}
                className="text-white"
              />

              <span className="text-xs md:text-sm tracking-widest uppercase text-white/90 font-medium">
                Learner Support
              </span>

            </div>

            <h2 className="text-3xl md:text-[45px] font-bold text-white leading-tight mb-5">
              Need Help? We&apos;re Here
              <span className="block">
                to Support You.
              </span>
            </h2>

            <p className="text-white/75 text-base md:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">
              Have questions about our courses, admissions, training programs,
              or placement assistance? Connect with the DIAC support team and
              get the guidance you need.
            </p>

          </div>

          {/* right content */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 md:p-7 shadow-2xl">

            <p className="text-white/70 text-sm mb-5 text-center lg:text-left">
              Choose how you would like to connect with us
            </p>

            <div className="space-y-4">

              {/* Call */}
              <a
                href="tel:+919953489987"
                className="group flex items-center justify-between gap-4 bg-white text-gray-900 p-4 md:p-5 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#801717] text-white flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>

                  <div className="text-left">
                    <span className="block text-xs text-gray-500 mb-1">
                      Call Learner Support
                    </span>
                    <span className="font-semibold text-base md:text-lg">
                      +91 99534 89987
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-gray-400 group-hover:text-[#801717] group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919953489987"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border border-white/30 bg-white/10 text-white p-4 md:p-5 rounded-2xl hover:bg-white hover:text-gray-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/15 group-hover:bg-[#801717] text-white flex items-center justify-center shrink-0 transition">
                    <MessageCircle size={21} />
                  </div>

                  <div className="text-left">
                    <span className="block text-xs text-white/60 group-hover:text-gray-500 mb-1 transition">
                      Chat With Us on WhatsApp
                    </span>
                    <span className="font-semibold text-base md:text-lg">
                      +91 99534 89987
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-white/60 group-hover:text-[#801717] group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}