"use client";

import { useState } from "react";

interface DemoRequestModalProps {
  open: boolean;
  onClose: () => void;
  context: "corporate" | "campus"; // decides label
}

export default function DemoRequestModal({
  open,
  onClose,
  context,
}: DemoRequestModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    org: "",
    comments: "",
  });

  const orgLabel =
    context === "corporate"
      ? "Company Name"
      : "Institute Name";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Replace with API call (e.g., POST to backend, EmailJS, Airtable, etc.)
    console.log("Form submitted:", form);

    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* Glass Morphism Container */}
      <div className="relative w-full max-w-lg rounded-3xl p-8 shadow-xl border border-white/20 bg-white/10 backdrop-blur-xl">
        <button
          className="absolute top-4 right-5 text-white/80 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-white mb-6">
          Request a Demo
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Official Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none"
          />

          <input
            type="text"
            name="org"
            placeholder={orgLabel}
            value={form.org}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none"
          />

          <textarea
            name="comments"
            placeholder="Your Comments"
            rows={4}
            value={form.comments}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/20 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-white/30 border border-white/20 py-3 text-white font-semibold hover:bg-white/40 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
