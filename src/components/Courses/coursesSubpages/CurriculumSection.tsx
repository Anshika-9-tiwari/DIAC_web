"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  User,
} from "lucide-react";

interface Props {
  data: {
    sectionTag: string;
    title: string;
    description: string;

    modules: {
      id: number;
      title: string;
      description: string;
      level: string;
      tag: string;
      topics: string[];
      skills: string[];
    }[];
  };
}

const initialFormData = {
  firstname: "",
  email: "",
  phone: "",
};

export default function CurriculumSection({ data }: Props) {
  const [activeModule, setActiveModule] = useState(0);

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const current = data.modules[activeModule];

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
          firstname: formData.firstname,
          lastname: "",
          email: formData.email,
          phone: formData.phone,

          // Using course page title
          course: data.title,

          message: `Curriculum enquiry for ${data.title}`,

          enquiryType: "GENERAL",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(
          "Thank you! Our counsellor will contact you shortly."
        );

        setFormData(initialFormData);

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
        "Curriculum enquiry error:",
        error
      );

      setError(
        "Unable to submit enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="curriculum"
      className="py-14 md:py-16 bg-[#f8f9fc]"
    >
      <div className="max-w-[1500px] mx-auto px-5 md:px-8 lg:px-10">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 md:mb-12">

          <div className="badge badge-outline badge-error px-5 py-4 mb-6 tracking-wider">
            {data.sectionTag}
          </div>

          <h2 className="text-[30px] md:text-[42px] font-semibold text-gray-900 mb-4">
            {data.title}
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-7">
            {data.description}
          </p>

        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-[270px_minmax(0,1fr)_330px] xl:grid-cols-[280px_minmax(0,1fr)_340px] gap-6 items-start">

          {/* ============= LEFT MODULE ================== */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100">

              <p className="text-xs uppercase tracking-[2px] text-[#801717] font-semibold mb-1">
                Course Modules
              </p>

              <p className="text-sm text-gray-500">
                Select a module to explore
              </p>

            </div>

            {/* Modules */}
            <div className="max-h-[500px] overflow-y-auto">

              {data.modules.map((module, index) => {

                const isActive =
                  activeModule === index;

                return (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() =>
                      setActiveModule(index)
                    }
                    className={`relative w-full px-5 py-4 text-left border-b border-gray-100 last:border-b-0 transition-all duration-300
                      ${
                        isActive
                          ? "bg-[#801717]/5"
                          : "hover:bg-gray-50"
                      }
                    `}
                  >

                    {/* Active Border */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#801717]" />
                    )}

                    <div className="flex items-center gap-3">

                      {/* Number */}
                      <div
                        className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center text-[15px] font-bold transition
                          ${
                            isActive
                              ? "bg-[#801717] text-white"
                              : "bg-gray-100 text-gray-600"
                          }
                        `}
                      >
                        {String(module.id).padStart(
                          2,
                          "0"
                        )}
                      </div>

                      {/* Title */}
                      <span
                        className={`text-[15px] leading-5 ${
                          isActive
                            ? "font-semibold text-[#801717]"
                            : "font-medium text-gray-700"
                        }`}
                      >
                        {module.title}
                      </span>

                    </div>

                  </button>
                );
              })}

            </div>

          </div>

          {/* ================= CENTER CURRICULUM ================ */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

            {/* Module Header */}
            <div className="p-5 md:p-7 border-b border-gray-100">

              <div className="flex items-center gap-4">

                {/* Module Number */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#801717] text-white flex items-center justify-center text-lg md:text-xl font-bold shrink-0 shadow-sm">
                  {String(current.id).padStart(
                    2,
                    "0"
                  )}
                </div>

                <div className="min-w-0">

                  <h3 className="text-xl md:text-[28px] font-semibold text-gray-900 leading-tight ">
                    {current.title}
                  </h3>

                  {/* <div className="flex flex-wrap gap-2 ">

                    <span className="text-[11px] px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#801717] font-medium">
                      {current.level}
                    </span>
                    
                    <span className="text-[11px] px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
                      {current.tag}
                    </span>
                  </div> */}

                </div>

              </div>

              <p className="text-sm md:text-base text-gray-600 leading-7 mt-5">
                {current.description}
              </p>

            </div>

            {/* ================= TOPICS ================= */}
            <div className="p-5 md:p-7 border-b border-gray-100">

              <div className="flex items-center justify-between mb-5">

                <h4 className="text-sm font-semibold uppercase tracking-[2px] text-gray-700">
                  Topics Covered
                </h4>

                <span className="text-xs text-gray-400">
                  {current.topics.length} Topics
                </span>

              </div>

              <div className="grid sm:grid-cols-2 gap-x-7 gap-y-3">

                {current.topics.map(
                  (topic, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle2
                        size={17}
                        className="text-[#801717] mt-[3px] shrink-0"
                      />

                      <span className="text-sm md:text-[15px] leading-6 text-gray-700">
                        {topic}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* ================= SKILLS ================= */}
            {/* <div className="p-5 md:p-7">

              <h4 className="text-sm font-semibold uppercase tracking-[2px] text-gray-700 mb-4">
                Skills Acquired
              </h4>

              <div className="flex flex-wrap gap-2">

                {current.skills.map(
                  (skill, index) => (

                    <span
                      key={index}
                      className="px-3 py-2 rounded-lg border border-red-100 bg-red-50/60 text-[#801717] text-xs md:text-sm font-medium"
                    >
                      {skill}
                    </span>

                  )
                )}

              </div>

            </div> */}

          </div>

          {/* ======== RIGHT STICKY FORM ============== */}
          <div className="lg:sticky lg:top-28">

            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">

              {/* Brand Strip */}
              <div className="h-1.5 bg-[#801717] " />
              <div className="p-6">
                {/* Form Heading */}
                <div className="mb-6">

                  {/* <span className="inline-block text-[11px] uppercase tracking-[2px] font-semibold text-[#801717] mb-2">
                    Need Guidance?
                  </span> */}

                  <h3 className="text-[23px] font-bold text-gray-900 leading-tight mb-2">
                    Book Free Demo Session
                  </h3>

                  {/* <p className="text-sm text-gray-500 leading-6">
                    Get complete details about curriculum,
                    fees, batches and placement support.
                  </p> */}

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* NAME */}
                  <div>

                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Full Name
                    </label>

                    <div className="relative">

                      <User
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        name="firstname"
                        value={
                          formData.firstname
                        }
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-300 bg-white text-gray-800 text-sm outline-none focus:border-[#801717] focus:ring-2 focus:ring-[#801717]/10 transition"
                      />

                    </div>

                  </div>

                  {/* EMAIL */}
                  <div>

                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Email Address
                    </label>

                    <div className="relative">

                      <Mail
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-300 bg-white text-gray-800 text-sm outline-none focus:border-[#801717] focus:ring-2 focus:ring-[#801717]/10 transition"
                      />

                    </div>

                  </div>

                  {/* PHONE */}
                  <div>

                    <label className="block text-xs font-medium text-gray-600 mb-2">
                      Phone Number
                    </label>

                    <div className="relative">

                      <Phone
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter phone number"
                        className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-300 bg-white text-gray-800 text-sm outline-none focus:border-[#801717] focus:ring-2 focus:ring-[#801717]/10 transition"
                      />

                    </div>

                  </div>

                  {/* SUCCESS */}
                  {success && (
                    <div className="text-sm bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3">
                      {success}
                    </div>
                  )}

                  {/* ERROR */}
                  {error && (
                    <div className="text-sm bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3">
                      {error}
                    </div>
                  )}

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full h-12 bg-[#801717] hover:bg-[#681212] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60"
                  >
                    {loading
                      ? "Submitting..."
                      : "Get Course Details"}

                    {!loading && (
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    )}

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