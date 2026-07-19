"use client";

import { useState } from "react";
import { CircleCheckBig, Send } from "lucide-react";

const initialFormData = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  industry: "",
  trainingRequirement: "",
  participants: "",
  trainingMode: "",
  message: "",
};

export default function CustomizedTrainingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // HAndle Submit
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
          // Identify enquiry type
          enquiryType: "CUSTOMIZED_TRAINING",

          // Common enquiry fields
          firstname: formData.fullName,
          lastname: "",
          email: formData.email,
          phone: formData.phone,
          course: "Customized Industrial Training",
          message: formData.message,

          // Customized training fields
          organization: formData.organization,
          industry: formData.industry,
          trainingRequirement: formData.trainingRequirement,
          participants: formData.participants,
          trainingMode: formData.trainingMode,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(
          "Your training request has been submitted successfully!"
        );

        setFormData(initialFormData);

        setTimeout(() => {
          setSuccess("");
        }, 5000);

        return;
      }

      const firstError =
        data.errors &&
        Object.values(data.errors)
          .flat()
          .find(
            (value) =>
              typeof value === "string"
          );

      setError(
        typeof firstError === "string"
          ? firstError
          : data.message ||
              "Something went wrong. Please check your details."
      );

    } catch (err) {
      console.error(
        "Customized training form submission error:",
        err
      );

      setError(
        "Failed to submit your training request. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-gray-300 bg-white text-gray-800 px-4 py-3 rounded-xl outline-none focus:border-[#801717] transition";

  return (
    <section
      id="training-request"
      className="py-16 md:py-24 bg-gradient-to-br from-white to-red-50/95 text-gray-800"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">

          {/* Left content */}

          <div className="lg:sticky lg:top-28">

            <p className="text-sm text-[#801717] font-semibold uppercase tracking-[3px] mb-5">
              Get Started
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Request a Customized Training Program
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-8 mb-8">
              Let us design a training program that fits your organization's
              goals — get in touch with our team to discuss your requirements.
            </p>
            <div className="space-y-4">

              {[
                "Customized curriculum planning",
                "Training for individuals and corporate teams",
                "Online, offline and on-site options",
                "Practical industrial training",
                "Assessment and certification",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CircleCheckBig
                    size={20}
                    className="text-[#801717] shrink-0"
                  />
                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
           
           {/* Form Content */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6 md:p-10">
            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-5"
            >
              {/* FULL NAME */}

              <div>
                <label className="block text-md font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              {/* ORGANIZATION */}
              <div>

                <label className="block text-md font-medium mb-2">
                  Company / Institution / Individual
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization name"
                  className={inputClass}
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="block text-md font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email address"
                  className={inputClass}
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-md font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter phone number"
                  className={inputClass}
                />
              </div>

              {/* INDUSTRY */}
              <div>
                <label className="block text-md font-medium mb-2">
                  Industry / Domain
                </label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="e.g. Manufacturing, Automotive"
                  className={inputClass}
                />
              </div>

              {/* PARTICIPANTS */}
              <div>
                <label className="block text-md font-medium mb-2">
                  Number of Participants
                </label>
                <input
                  type="number"
                  min="1"
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  placeholder="Number of participants"
                  className={inputClass}
                />
              </div>

              {/* TRAINING REQUIREMENT */}
              <div className="md:col-span-2">

                <label className="block text-md font-medium mb-2">
                  Training Requirement
                </label>
                <input
                  type="text"
                  name="trainingRequirement"
                  value={formData.trainingRequirement}
                  onChange={handleChange}
                  placeholder="e.g. PLC, SCADA, Industrial IoT, Electrical Design"
                  className={inputClass}
                />
              </div>

              {/* TRAINING MODE */}
              <div className="md:col-span-2">
                <label className="block text-md font-medium mb-2">
                  Preferred Training Mode
                </label>
                <select
                  name="trainingMode"
                  value={formData.trainingMode}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">
                    Select preferred training mode
                  </option>
                  <option value="ONLINE">
                    Online
                  </option>
                  <option value="OFFLINE">
                    Offline
                  </option>
                  <option value="On_SITE">
                    On-site
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="md:col-span-2">
                <label className="block text-md font-medium mb-2">
                  Message / Additional Requirements *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your training requirements..."
                  className={`${inputClass} min-h-[130px]`}
                />
              </div>

              {/* SUCCESS MESSAGE */}
              {success && (
                <div className="md:col-span-2 alert alert-success">
                  <span>
                    {success}
                  </span>
                </div>
              )}

              {error && (
                <div className="md:col-span-2 alert alert-error">
                  <span>
                    {error}
                  </span>
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-[#801717] hover:bg-[#681212] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  <Send size={18} />

                  {loading
                    ? "Submitting..."
                    : "Request Customized Training"}

                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}