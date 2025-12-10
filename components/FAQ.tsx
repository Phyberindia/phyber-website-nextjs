"use client";

import { useState } from "react";

export default function FAQSection({
  title = "FAQs",
  description = "",
  items = [],
}: {
  title?: string;
  description?: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 text-center">
        {title}
      </h2>

      {description && (
        <p className="text-slate-500 text-center max-w-2xl mx-auto mb-10">
          {description}
        </p>
      )}

      <div className="space-y-4 max-w-3xl mx-auto">
        {items.map((item, idx) => (
          <FAQItem key={idx} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <span className="text-base font-semibold text-slate-900">{q}</span>
        <span
          className={`ml-4 text-slate-400 text-xl transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </div>

      <div
        className={`text-slate-600 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[300px] mt-3" : "max-h-0"
        }`}
      >
        <p className="leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
