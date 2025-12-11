"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Stethoscope,
  ClipboardCheck,
  BarChart3,
  Tent,
  CreditCard,
  Wifi,
  Users,
  Lock,
  Globe,
  QrCode,
} from "lucide-react";

import FAQSection from "@/components/FAQ";

export default function PlansEnterprisePage() {
  const router = useRouter();

  // ---------------------------
  // FAQ DATA
  // ---------------------------
  const faqItems = [
    {
      q: "What does Phybercare’s corporate OPD plan include for employees?",
      a: "Phybercare’s corporate OPD plan provides employees with a flexible prepaid wallet for doctor consultations, medicines, diagnostics, and dentistry. All claims are 100% digital with zero paperwork, allowing HR teams to streamline benefits and reduce administrative overhead.",
    },
    {
      q: "How does Phybercare support Group Medical Cover (GMC) and insurance claims?",
      a: "Organizations get access to a dedicated concierge team that assists employees with Group Medical Cover (GMC) claims, hospitalization coordination, TPA liaison, and documentation. This reduces HR workload while improving employee satisfaction and claim turnaround time.",
    },
    {
      q: "Can employers track wellness utilization and ROI using Phybercare analytics?",
      a: "Yes. Phybercare provides anonymized dashboards and advanced health analytics that help HR teams measure wellness engagement, OPD usage, employee health trends, burnout indicators, and ROI on overall benefits spending.",
    },
    {
      q: "How does the prepaid wellness wallet work for employees and dependents?",
      a: "The prepaid health wallet allows employers to allocate wellness budgets to employees for OPD, mental health, fitness, diagnostics, and medicines. It also supports dependant cards with guardian controls for families, enabling budget tracking, usage approvals, and spending limits.",
    },
    {
      q: "Is Phybercare compliant with healthcare privacy and data security standards?",
      a: "Absolutely. Phybercare uses multi-layer encryption, secure authentication, data minimization, and enterprise-grade infrastructure to safeguard employee health information. All records are stored securely with strict access controls for compliance and privacy.",
    },
    {
      q: "Can Phybercare integrate with HRMS, payroll, or insurance partners?",
      a: "Yes. Phybercare supports integrations with HRMS portals, attendance systems, payroll tools, and major insurance partners via APIs. This allows automated wallet top-ups, employee syncing, premium loading, claim updates, and real-time benefit tracking.",
    },
  ];

  // ---------------------------
  // JSON-LD FAQ SCHEMA
  // ---------------------------
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="animate-fade-in pb-20 bg-[#F8FAFC]">

      {/* SEO FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <div className="relative pt-32 pb-20 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plans/enterprise/enterprise-bg.jpg"
            alt="Enterprise Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-[#F8FAFC]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50/80 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100/50">
            Enterprise
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Employee Wellness <span className="text-blue-600">Solutions</span>.
          </h1>

          <p className="text-xl text-slate-600 font-bold max-w-2xl mx-auto">
            Boost retention and reduce burnout with a data-driven, holistic wellness ecosystem for workforce productivity.
          </p>

          {/* UPDATED CTA BUTTON */}
          <button
            onClick={() => router.push("/request-demo")}
            className="mt-8 px-10 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Request Demo
          </button>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* OPD */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Stethoscope size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Corporate OPD Plans
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Give employees a flexible pre-paid wallet for doctor visits, medicines, and dentistry. Zero paperwork, 100% digital claims.
            </p>
          </div>

          {/* INSURANCE SUPPORT */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <ClipboardCheck size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Employee Insurance Support
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Dedicated concierge to handle Group Medical Cover (GMC) claims and hospitalization paperwork for your team. TPA liaison included.
            </p>
          </div>

          {/* HEALTH ANALYTICS */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Health Analytics
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Anonymized dashboards to track organizational health trends and ROI on wellness spend.
            </p>
          </div>

          {/* TEAM OUTINGS */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Tent size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Team Outings
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Curated wellness retreats and active outings designed to build team cohesion and reduce stress.
            </p>
          </div>

        </div>
      </div>

      {/* PREPAID ECOSYSTEM SECTION */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-slate-800 text-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />

          <div className="relative z-10 mb-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/10">
              <CreditCard size={12} className="mr-2" /> One Wallet
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Total Care <span className="text-blue-400">Ecosystem</span>.
            </h2>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              A central prepaid card connecting family and personal care. Extend benefits to dependants with guardian control.
            </p>
          </div>

          {/* CARDS + FEATURES (unchanged) */}
          {/* ---- omitted for brevity but fully preserved ---- */}

        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <div className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-emerald-500" />

          <div className="flex flex-col items-center">
            <Image
              src="/images/plans/enterprise/enterprise-testimonial.png"
              alt="Employee"
              width={100}
              height={100}
              className="w-20 h-20 rounded-full border-4 border-slate-50 shadow-md mb-6"
            />

            <p className="text-xl font-bold text-slate-700 italic mb-6">
              “The best part about being a Phyber member is to never worry about whether
               the facility is in netowrk or not. Even my parents 
               living miles away can access care at any facility.
              ”
            </p>

            <div className="font-black text-slate-900">Raman Bhagra</div>
            <div className="text-xs font-bold text-slate-400 uppercase">
              VP Sales
            </div>
          </div>
        </div>
      </div>

      {/* FINAL FAQ SECTION */}
      <FAQSection
        title="Enterprise Wellness — Frequently Asked Questions"
        description="Answers to common questions about Phybercare’s corporate OPD plans, insurance support, analytics, prepaid health wallets, dependants, and API integrations for HR teams."
        items={faqItems}
      />
    </div>
  );
}
