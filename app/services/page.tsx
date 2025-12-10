"use client";

import { useState } from "react";
import Image from "next/image";


export default function PartnerFormPage() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate work
    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);

      // Auto close after 3s
      setTimeout(() => setShowPopup(false), 3000);
    }, 900);
  };

  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 opacity-25">
        {/* PATH: /public/images/partner-form/partner-bg.jpg */}
        <Image
          src="/images/partner-form/partner-bg.jpg"
          alt="Partner Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
            Become a Partner  
            <span className="block text-[#4B61FF]">Power Better Digital Care</span>
          </h1>

          <p className="text-lg text-slate-700">
            Collaborate with us to deliver seamless on-demand medical and wellness care across institutions, employees, and consumers.
          </p>

          <p className="text-base text-slate-600">
            Fill in your details and our Partnerships Team will reach out.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-6 text-[#1A1A1A]">
            Partner Request Form
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium text-slate-800">Name*</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200
                focus:ring-2 focus:ring-[#4B61FF] outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block mb-1 font-medium text-slate-800">
                Company Name (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200
                focus:ring-2 focus:ring-[#4B61FF] outline-none"
                placeholder="Company / Institute"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-slate-800">Official Email*</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200
                focus:ring-2 focus:ring-[#4B61FF] outline-none"
                placeholder="name@company.com"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-1 font-medium text-slate-800">Mobile Number*</label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200
                focus:ring-2 focus:ring-[#4B61FF] outline-none"
                placeholder="10-digit mobile number"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-1 font-medium text-slate-800">Partnership Type*</label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200
                focus:ring-2 focus:ring-[#4B61FF] outline-none"
              >
                <option value="">Select Category</option>
                <option value="Practitioner">Practitioner</option>
                <option value="Facility">Facility</option>
                <option value="Insurer">Insurer</option>
                <option value="Marketplace">Marketplace</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Details */}
            <div>
              <label className="block mb-1 font-medium text-slate-800">
                Additional Details
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200
                focus:ring-2 focus:ring-[#4B61FF] outline-none"
                placeholder="Add any relevant information"
              ></textarea>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#4B61FF] text-white font-semibold 
              shadow-lg hover:bg-[#3e52d6] transition"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fadeIn">
          <div className="backdrop-blur-lg bg-white/40 border border-white/30 shadow-2xl
          rounded-3xl p-8 w-[90%] max-w-md text-center animate-zoomIn">
            <h3 className="text-2xl font-semibold text-[#4B61FF] mb-3">
              Thank you!
            </h3>
            <p className="text-slate-700 mb-6">
              Your partnership request has been received.
              Our team will contact you shortly.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 bg-[#4B61FF] text-white rounded-xl font-medium 
              hover:bg-[#3e52d6] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
