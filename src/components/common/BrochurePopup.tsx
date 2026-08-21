"use client";

import { useState } from "react";
import { X, Download } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  brochureLink: string;
  courseName?: string;
}

const initialFormData = {
  firstname: "",
  email: "",
  phone: "",
};

export default function BrochurePopup({
  isOpen,
  onClose,
  brochureLink,
  courseName,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] =
    useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    if (loading) return;

    setFormData(initialFormData);
    setError("");
    onClose();
  };

  const downloadBrochure = () => {
    const link = document.createElement("a");

    link.href = brochureLink;
    link.download = brochureLink.split("/").pop() || "brochure.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/ContactApi", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          enquiryType: "BROCHURE",

          firstname: formData.firstname,

          lastname: "",

          email: formData.email,

          phone: formData.phone,

          course:
            courseName ||
            "General Course Brochure",

          message: `Brochure download request for ${
            courseName || "course"
          }`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {

        // Automatically download brochure
        downloadBrochure();

        // Reset form
        setFormData(initialFormData);

        onClose();

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
        "Brochure request submission error:",
        err
      );

      setError(
        "Failed to submit your request. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
      onClick={handleClose}
    >

      <div
        className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={handleClose}
          disabled={loading}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition disabled:opacity-50"
          aria-label="Close brochure popup"
        >
          <X size={22} />
        </button>

        {/* HEADING */}
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Download Brochure
        </h3>

        {/* COURSE NAME */}
        {courseName && (
          <p className="text-[#801717] font-semibold text-center mb-2">
            {courseName}
          </p>
        )}

        <p className="text-gray-500 text-center mb-6">
          Fill in your details to download the course brochure.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* FULL NAME */}
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            placeholder="Full Name"
            disabled={loading}
            className="input input-bordered w-full border-gray-300 bg-white text-gray-800 focus:border-[#801717] disabled:bg-gray-100"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            disabled={loading}
            className="input input-bordered w-full border-gray-300 bg-white text-gray-800 focus:border-[#801717] disabled:bg-gray-100"
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            disabled={loading}
            className="input input-bordered w-full border-gray-300 bg-white text-gray-800 focus:border-[#801717] disabled:bg-gray-100"
          />

          {/* ERROR */}
          {error && (
            <div className="alert alert-error text-sm">
              <span>{error}</span>
            </div>
          )}

          {/* DOWNLOAD BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="btn bg-[#801717] hover:bg-red-900 text-white w-full border-none disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Download size={18} />

            {loading
              ? "Submitting..."
              : "Download Now"}
          </button>

        </form>

      </div>

    </div>
  );
}