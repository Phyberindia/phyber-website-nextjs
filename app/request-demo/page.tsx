"use client";

import { useState } from "react";
import Image from "next/image";

export default function RequestDemoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    org: "",
    comments: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Demo Request Submitted:", form);
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col md:flex-row">

      {/* LEFT HERO SECTION */}
      <div className="relative w-full md:w-1/2 h-[350px] md:h-auto flex items-center justify-center p-10">
        {/* Background Image */}
        <Image
          src="/images/request-demo/bg.png"
          alt="Future of Care"
          fill
          className="object-cover"
        />

        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

        {/* HERO TEXT */}
        <div className="relative z-10 max-w-md mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            The Future of <span className="text-blue-600">Care</span>.
          </h1>

          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            Phyber is building a new era of preventive, data-driven care for institutions, employees, and campuses.
          </p>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-lg bg-white border border-slate-200 shadow-2xl rounded-3xl p-10">

          <h2 className="text-3xl font-black mb-6 tracking-tight">
            Request a Demo
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 placeholder-slate-500 text-slate-800 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Official Email"
              required
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 placeholder-slate-500 text-slate-800 focus:outline-none"
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              required
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 placeholder-slate-500 text-slate-800 focus:outline-none"
            />

            <input
              type="text"
              name="org"
              placeholder="Company / Institute Name"
              required
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 placeholder-slate-500 text-slate-800 focus:outline-none"
            />

            <textarea
              name="comments"
              placeholder="Share any details you'd like us to know"
              rows={4}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-white border border-slate-200 placeholder-slate-500 text-slate-800 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-white text-lg shadow-lg transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999] px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md text-center border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Thank You!
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              Your request has been received. A Phyber expert will get in touch with you shortly.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
