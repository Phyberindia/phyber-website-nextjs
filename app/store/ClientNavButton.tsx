"use client";

import { ArrowRight } from "lucide-react";

export default function ClientNavButton() {
  return (
    <button
      onClick={() => (window.location.href = "https://app.phyber.care")}
      className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl flex items-center"
    >
      Shop Now <ArrowRight className="ml-2" />
    </button>
  );
}
