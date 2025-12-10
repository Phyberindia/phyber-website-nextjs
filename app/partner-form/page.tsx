"use client";

import { useState } from "react";
import Image from "next/image";

export default function PartnerFormPage() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }, 900);
  };

  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10 opacity-25">
        {/* PATH: /public/images/partner-form/partner-bg.jpg */}
        <Image
          src="/images/partner-form/partner-bg.jpg"
          alt="Partner Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT HERO */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-snug">
            Become a Partner  
            <span className="block text-[#4B61FF]">Power Better Digital Care</span>
          </h1>

          <p className="text-base text-slate-700">
            Collaborate with Phyber to deliver smarter digital care across institutions, employees, and consumers.
          </p>

          <p className="text-sm text-slate-600">
            Fill the quick form and our Partnerships Team will contact you.
          </p>
        </div>

        {/* RIGHT FORM — Compact Glass Morphism */}
        <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
            Partner Request Form
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* TWO-COLUMN ROW: Name + Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 rounded-xl bg-white/60 border border-slate-300 focus:border-[#4B61FF] outline-none"
                  placeholder="Your Name"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-1">
                  Mobile*
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-3 py-2 rounded-xl bg-white/60 border border-slate-300 focus:border-[#4B61FF] outline-none"
                  placeholder="10-digit"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">Official Email*</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 rounded-xl bg-white/60 border border-slate-300 focus:border-[#4B61FF] outline-none"
                placeholder="name@company.com"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">Company (Optional)</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-xl bg-white/60 border border-slate-300 focus:border-[#4B61FF] outline-none"
                placeholder="Company / Institute"
              />
            </div>

            {/* Partnership Type */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">Partnership Type*</label>
              <select
                required
                className="w-full px-3 py-2 rounded-xl bg-white/60 border border-slate-300 focus:border-[#4B61FF] outline-none"
              >
                <option value="">Select</option>
                <option>Practitioner</option>
                <option>Facility</option>
                <option>Insurer</option>
                <option>Marketplace</option>
                <option>Other</option>
              </select>
            </div>

            {/* Details */}
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-1">
                Additional Details
              </label>
              <textarea
                rows={2}
                className="w-full px-3 py-2 rounded-xl bg-white/60 border border-slate-300 focus:border-[#4B61FF] outline-none resize-none"
                placeholder="Your message"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-xl bg-[#4B61FF] text-white font-semibold shadow-md hover:bg-[#3e52d6] transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center">
            <h3 className="text-xl font-semibold text-[#4B61FF] mb-2">Thank you!</h3>
            <p className="text-slate-700 text-sm mb-4">
              Your partnership request has been received. We will contact you shortly.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-5 py-2 bg-[#4B61FF] text-white rounded-xl hover:bg-[#3e52d6]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
