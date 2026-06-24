"use client";

import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  brochureLink: string;
  courseName?: string;
}

export default function BrochurePopup({
  isOpen,
  onClose,
  brochureLink,
}: Props) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    window.open(brochureLink, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl">

        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <X size={22} />
        </button>

        <h3 className="text-2xl font-bold text-center mb-2">
          Download Brochure
        </h3>

        <p className="text-gray-500 text-center mb-6">
          Fill details to download brochure
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            required
            placeholder="Full Name"
            className="input input-bordered w-full border-gray-300 bg-white"
          />

          <input
            type="email"
            required
            placeholder="Email"
            className="input input-bordered w-full border-gray-300 bg-white"
          />

          <input
            type="tel"
            required
            placeholder="Phone Number"
            className="input input-bordered w-full border-gray-300 bg-white"
          />

          <button className="btn bg-[#801717] text-white w-full border-none">
            Download Now
          </button>

        </form>
      </div>
    </div>
  );
}