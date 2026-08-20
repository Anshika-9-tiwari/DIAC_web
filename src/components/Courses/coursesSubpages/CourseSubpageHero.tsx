"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  CircleCheckBig,
  Phone,
  Mail,
  User,
} from "lucide-react";

import BrochurePopup from "@/components/common/BrochurePopup";

interface CourseHeroData {
  badge: string;
  title: string;
  icon: string;

  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;

  videoUrl: string;
  syllabusPdf: string;
}

interface Props {
  data: CourseHeroData;
}

const initialFormData = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

export default function CourseSubpageHero({ data }: Props) {
  const [showBrochurePopup, setShowBrochurePopup] =
    useState(false);

  const [formData, setFormData] = useState({
    ...initialFormData,
    course: data.title,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/ContactApi", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,
          course: data.title,
          enquiryType: "GENERAL",
          message: `Free demo enquiry for ${data.title}`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(
          "Thank you! Our team will contact you shortly."
        );

        setFormData({
          ...initialFormData,
          course: data.title,
        });

        setTimeout(() => {
          setSuccess("");
        }, 4000);

        return;
      }

      const firstError =
        result.errors &&
        Object.values(result.errors)
          .flat()
          .find(
            (value) => typeof value === "string"
          );

      setError(
        typeof firstError === "string"
          ? firstError
          : result.message ||
              "Something went wrong. Please try again."
      );
    } catch (error) {
      console.error(
        "Course demo enquiry error:",
        error
      );

      setError(
        "Unable to submit your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const heroPoints = [
    data.paragraph1,
    data.paragraph2,
    data.paragraph3,
    data.paragraph4,
  ];

  return (
    <>
      <section className="relative min-h-[720px] lg:min-h-[680px] flex items-center overflow-hidden">

        {/* =========================
            BACKGROUND IMAGE
        ========================== */}
        <Image
          src="/courses/courses_hero.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Additional Left Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />

        {/* =========================
            CONTENT
        ========================== */}
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-10 lg:px-8 py-14 md:py-16">

          <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-12 lg:gap-16 items-center">

            {/* =====================
                LEFT CONTENT
            ====================== */}
            <div className="max-w-4xl">

              {/* Logo + Recognition */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-10">

                {/* DIAC Logo */}
                <div>
                  <Image
                    src="/diacwhite.png"
                    alt="DIAC"
                    width={135}
                    height={55}
                    className="object-contain"
                  />
                </div>

                {/* Recognition Badges */}
                <div className="flex flex-wrap gap-3">

                  <span className="border border-white/20 bg-black/25 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs md:text-sm">
                    🏆 15+ Years of Excellence
                  </span>

                  <span className="border border-white/20 bg-black/25 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs md:text-sm">
                    🤝 100% Placement Assistance 
                  </span>

                </div>

              </div>

              {/* Course Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm md:text-base font-medium mb-6">
                {data.badge}
              </div>

              {/* Title */}
              <h1 className="text-[38px] md:text-5xl xl:text-[58px] font-bold text-white leading-[1.12] mb-8 max-w-4xl">
                {data.title}
              </h1>

              {/* Points */}
              <div className="space-y-2 md:space-y-3 mb-10 max-w-4xl">

                {heroPoints.map((point, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <CircleCheckBig
                      size={22}
                      strokeWidth={2}
                      className="text-white mt-1 shrink-0"
                    />

                    <p className="text-white/90 text-base md:text-lg leading-7 md:leading-8">
                      {point}
                    </p>
                  </div>

                ))}

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact/#contact-form"
                  className="inline-flex justify-center items-center  bg-[#801717] hover:bg-[#6b1313] text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                >
                 Book Free Demo
                </Link>

                <Link
                  href="tel:+919953489987"
                  className="inline-flex justify-center items-center border border-white/60 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-gray-900 px-7 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Call now
                </Link>

              </div>

            </div>

            {/* =====================
                RIGHT FORM
            ====================== */}
            <div className="w-full max-w-[440px] lg:ml-auto">

              <div className="bg-white rounded-[24px] shadow-2xl overflow-hidden">

                {/* Form Header */}
                <div className="px-6 md:px-8 pt-8 pb-5">

                  <span className="text-[#801717] text-sm font-semibold uppercase tracking-wider">
                    Start Your Journey
                  </span>

                  <h3 className="text-2xl md:text-[28px] font-semibold text-gray-900 mt-2">
                    Book Free Demo Session
                  </h3>

                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="px-6 md:px-8 pb-8 space-y-4"
                >

                  {/* Name */}
                  <div className="relative">

                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full h-14 pl-12 pr-4 border border-gray-300 rounded-xl bg-white text-gray-800 outline-none focus:border-gray-700 transition"
                    />

                  </div>

                  {/* Email */}
                  <div className="relative">

                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="w-full h-14 pl-12 pr-4 border border-gray-300 rounded-xl bg-white text-gray-800 outline-none focus:border-gray-700 transition"
                    />

                  </div>

                  {/* Phone */}
                  <div className="relative">

                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number"
                      className="w-full h-14 pl-12 pr-4 border border-gray-300 rounded-xl bg-white text-gray-800 outline-none focus:border-gray-700 transition"
                    />

                  </div>

                  {/* Success */}
                  {success && (
                    <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl">
                      {success}
                    </div>
                  )}

                  {/* Error */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 bg-[#801717] hover:bg-[#6b1313] text-white rounded-xl font-semibold text-base transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading
                      ? "Submitting..."
                      : "Book Free Demo"}
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          BROCHURE POPUP
      ========================== */}
      <BrochurePopup
        isOpen={showBrochurePopup}
        onClose={() =>
          setShowBrochurePopup(false)
        }
        brochureLink={data.syllabusPdf}
        courseName={data.title}
      />
    </>
  );
}