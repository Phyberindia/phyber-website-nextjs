"use client";

import Image from "next/image";

interface WellnessCardProps {
  title: string;
  icon: React.ReactNode;
  image: string;
  color: "orange" | "red" | "blue" | "indigo" | "yellow" | "cyan";
  text: string;
  bullets: string[];
}

export default function WellnessCard({
  title,
  icon,
  image,
  color,
  text,
  bullets,
}: WellnessCardProps) {
  // Tailwind-safe static color mapping
  const colorStyles = {
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
    },
    red: {
      bg: "bg-red-50",
      text: "text-red-600",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
    },
    yellow: {
      bg: "bg-yellow-50",
      text: "text-yellow-600",
    },
    cyan: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
    },
  };

  const colors = colorStyles[color] ?? colorStyles.orange;

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
      
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className="rounded-2xl mb-6 object-cover w-full h-48"
      />

      {/* ICON */}
      <div
        className={`w-14 h-14 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center mb-6`}
      >
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-3xl font-black text-slate-900 mb-4">{title}</h3>

      {/* DESCRIPTION */}
      <p className="text-slate-600 leading-relaxed font-medium mb-6">
        {text}
      </p>

      {/* BULLETS */}
      <ul className="space-y-3 text-sm font-bold text-slate-700">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}
