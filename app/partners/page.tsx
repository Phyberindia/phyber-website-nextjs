"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import Image from "next/image";

import {
  Stethoscope,
  Building2,
  ShieldCheck,
  ShoppingBag,
  Cpu,
  Zap,
  HeartHandshake,
} from "lucide-react";

export default function PartnersPage() {
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);

  // Local background image
  const backgroundImage = "/images/partners/partners-bg.jpg";

  // Partner Logos (local)
  const PARTNER_LOGOS = [
    { name: "Partner 1", url: "/images/partners/logo1.png" },
    { name: "Partner 2", url: "/images/partners/logo2.png" },
    { name: "Partner 3", url: "/images/partners/logo3.png" },
    { name: "Partner 4", url: "/images/partners/logo4.png" },
    { name: "Partner 5", url: "/images/partners/logo5.png" },
    { name: "Partner 6", url: "/images/partners/logo6.png" },
    { name: "Partner 7", url: "/images/partners/logo7.jpeg" },
    { name: "Partner 8", url: "/images/partners/logo8.png" },
  ];
  const router = useRouter();

  return (
    <div className="animate-fade-in pb-20 bg-[#F8FAFC]">

      {/* HERO */}
      <div className="relative pt-32 pb-20 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Partners Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-[#F8FAFC]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-sm text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100/50">
            Ecosystem
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Partner with <span className="text-blue-600">Phyber</span>.
          </h1>

          <p className="text-xl text-slate-600 font-bold max-w-2xl mx-auto">
            Join the global alliance of healthcare providers, insurers,
            and wellness brands.
          </p>

          <button
  onClick={() => router.push("/partner-form")}
  className="mt-8 px-10 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
>
  Apply for Partnership
</button>

        </div>
      </div>

      {/* PARTNER CATEGORIES */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CategoryCard
            icon={<Stethoscope size={24} />}
            title="Practitioners"
            desc="Join our Digital Provider Network. Use our seamless Practice
            Management Platform for patient acquisition, scheduling,
            and Telehealth delivery."
            tag="Mental & Physical Specialists"
            bg="bg-blue-50"
            color="text-blue-600"
          />

          <CategoryCard
            icon={<Building2 size={24} />}
            title="Facilities"
            desc="Digitize your patient journey. Enable Hybrid Care, Remote Monitoring,
            and serve as a Digital Front Door for specialized care."
            tag="Clinics & Wellness Centers"
            bg="bg-emerald-50"
            color="text-emerald-600"
          />

          <CategoryCard
            icon={<ShieldCheck size={24} />}
            title="Insurers"
            desc="Enhance policy value with preventive wellness ecosystem,
            EAP integration, and risk reduction tools."
            tag="Insurance & FinTech"
            bg="bg-purple-50"
            color="text-purple-600"
          />

          <CategoryCard
            icon={<ShoppingBag size={24} />}
            title="Marketplace"
            desc="List on our curated Wellness Store. Reach direct health consumers
            with verified products, supplements, and wearables."
            tag="Products & Devices"
            bg="bg-orange-50"
            color="text-orange-600"
          />
        </div>
      </div>

      {/* BENEFITS */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Why Partner?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <BenefitCard
            icon={<Cpu size={28} />}
            title="API-First Architecture"
            desc="Interoperate with HIS, EMR, and insurance systems seamlessly."
            bg="bg-indigo-50"
            color="text-indigo-600"
          />

          <BenefitCard
            icon={<Zap size={28} />}
            title="Seamless Experience"
            desc="One unified Health ID ensuring consistent patient engagement."
            bg="bg-cyan-50"
            color="text-cyan-600"
          />

          <BenefitCard
            icon={<HeartHandshake size={28} />}
            title="Shared Success"
            desc="A co-growth model built on symbiotic long-term alliances."
            bg="bg-pink-50"
            color="text-pink-600"
          />
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-12 border border-slate-100 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16" />
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">
            Alliance over Vendor.
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just sign contracts; we build symbiotic ecosystems.
            Our partners are the backbone of the Phyber network.
          </p>
        </div>
      </div>

      {/* PARTNER LOGOS */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
          Current Alliance Members
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PARTNER_LOGOS.map((logo, i) => (
            <div
              key={i}
              className="relative bg-white rounded-[2px] h-32 flex items-center justify-center p-6 hover:shadow-lg transition-all"
            >
              <Image
                src={logo.url}
                alt={logo.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   COMPONENTS
--------------------------------------------------------- */

function CategoryCard({
  icon,
  title,
  desc,
  tag,
  bg,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
  bg: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl hover:-translate-y-1 transition-transform">
      <div className={`w-12 h-12 ${bg} ${color} rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>

      <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>

      <p className="text-slate-500 font-medium leading-relaxed mb-4">{desc}</p>

      <span className={`text-xs font-bold ${color} uppercase tracking-widest`}>
        {tag}
      </span>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  desc,
  bg,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bg: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
      <div className={`w-14 h-14 ${bg} ${color} rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>

      <h3 className="text-2xl font-black text-slate-900 mb-3">{title}</h3>

      <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}
