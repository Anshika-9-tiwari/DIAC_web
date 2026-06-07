"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {

   const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
  
    const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  
    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (
      e: React.FormEvent<HTMLFormElement>
    ) => {
      e.preventDefault();
  
      setLoading(true);
      setError("");
      setSuccess("");
  
      try {
        const response = await fetch("/api/ContactApi", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (data.success) {
          setSuccess("Enquiry submitted successfully!");
  
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            course: "",
            message: "",
          });
          setTimeout(() => {
          setSuccess("");
        }, 3000);
        } else {
          setError("Something went wrong.");
        }
      } catch (err) {
        setError("Failed to submit enquiry.");
      } finally {
        setLoading(false);
      }
    };
  
    
  return (
    <section className="relative w-full min-h-[650px] lg:min-h-[550px]">

      {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vdo/homebgvdo.mp4" type="video/mp4" />
        </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/30"></div>

      {/* Content */}
      <div className="relative max-w-[1550px] mx-auto px-8  md:px-12  py-14 lg:py-16 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12  w-full items-center">

          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-[1.08] text-gray-900 mb-8">
              Become Certified in
              <span className="block text-[#801717]">
                Industrial Automation
              </span>
            </h1>

            <p className="mb-12 text-base md:text-lg text-gray-50">
              Join the best Industrial Automation and Robotics training institute
              in Delhi with 100% placement assistance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/courses"
                className="bg-red-900 text-white px-8 py-4 text-center rounded-tr-xl rounded-bl-xl font-semibold hover:bg-red-800 transition uppercase border"
              >
                View Courses
              </Link>

              <Link
                href="/brochures/industrial-automation.pdf"
                target="_blank"
                className="border border-white px-8 py-4 text-center rounded-tr-xl rounded-bl-xl font-semibold hover:bg-white hover:text-black transition"
              >
                Download Brochure
              </Link>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="w-full max-w-md lg:ml-auto">

            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden">

              {/* Top Strip */}
              <div className="bg-[#801717] text-white text-center py-4">

                <h2 className="text-2xl font-bold mt-1">
                  Enquiry Now
                </h2>
              </div>

              <div className="p-6">

                <p className="text-center text-sm text-gray-600 mb-6">
                  Get course details, fee structure and placement assistance information.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="input input-bordered w-full rounded-xl"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="input input-bordered w-full rounded-xl"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="input input-bordered w-full rounded-xl"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Send Your Message"
                    className="textarea textarea-bordered w-full rounded-xl min-h-[90px]"
                  />

                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="select select-bordered w-full rounded-xl"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Course
                    </option>

                    <option>PLC Programming & Commissioning</option>
                    <option>SCADA & HMI Training</option>
                    <option>Drives & Motors Training</option>
                    <option>Industrial Robotics Training</option>
                    <option>Process Instrumentation</option>
                    <option>Panel Designing & AutoCAD</option>
                    <option>DCS Training</option>
                    <option>PLC Networking</option>
                    <option>Servo Motors Training</option>
                    <option>Industry 4.0 & IIoT Training</option>
                    <option>Customized Corporate Training</option>
                    <option>Other Enquiry</option>
                  </select>

                  {success && (
                    <div className="alert alert-success shadow-lg">
                      <span>{success}</span>
                    </div>
                  )}

                  {error && (
                    <div className="alert alert-error">
                      <span>{error}</span>
                    </div>
                  )}

                  {/* submit button */}

                  <button className="btn bg-[#801717] hover:bg-red-900 border-none w-full text-white text-lg rounded-xl h-12 transition disabled:opacity-70">
                     
                    {loading ? "Submitting..." : "Get Free Consultation"}
                    
                  </button>

                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}