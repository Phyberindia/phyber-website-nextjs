"use client";

import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Zap,
  ArrowRight,
  Layers,
} from "lucide-react";

import FAQSection from "@/components/FAQ"; // matches your file name FAQ.tsx

export default function PlansIndividualPage() {
  const faqItems = [
    {
      q: "What is the Phybercare Vault Account and how does it secure my digital health records?",
      a: "The Vault Account is your encrypted digital health identity where you can store Electronic Health Records (EHR), prescriptions, lab reports, and insurance documents with bank-grade encryption. It ensures complete privacy, secure access management, and full portability across healthcare providers.",
    },
    {
      q: "How does Guardian Mode work for family health management?",
      a: "Guardian Mode allows you to manage health data, vitals, medical files, and appointments for up to 4 dependants. It is ideal for parents, caregivers, and families who want a unified, secure dashboard to track wellbeing and share records with doctors instantly.",
    },
    {
      q: "What are the benefits of building a personalised health stack with add-on subscriptions?",
      a: "Phybercare’s Stack Builder lets you customise your health plan with modules such as Mental Health Pro, Body Elite, and OPD Shield. These subscriptions offer therapy sessions, nutrition coaching, diagnostics, OPD coverage, and exclusive member benefits designed to enhance ongoing wellbeing.",
    },
    {
      q: "Can I book on-demand medical services using my membership?",
      a: "Yes. Members can access on-demand services including doctor consultations, therapy sessions, home diagnostics, nursing care, and pharmacy deliveries. These services integrate seamlessly with your digital health records for continuous, personalised care.",
    },
    {
      q: "Is my data protected when I store health records and insurance documents?",
      a: "Absolutely. Phybercare uses multi-layer encryption, secure authentication, and globally aligned data protection practices to keep your EHR files, insurance policies, and personal health information safe from misuse or unauthorised access.",
    },
    {
      q: "Can I switch or upgrade my health membership plan later?",
      a: "Yes. You can upgrade, downgrade, or add new subscriptions anytime. Your digital health vault, records, history, and family profiles remain intact, giving you full flexibility as your healthcare needs evolve.",
    },
  ];

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

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <div className="relative pt-32 pb-20 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plans/individual/individual-bg.jpg"
            alt="Plans Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-[#F8FAFC]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50/80 text-purple-700 text-xs font-bold uppercase tracking-widest mb-6 border border-purple-100/50">
            Membership
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Your Health. <span className="text-purple-600">Your Rules.</span>
          </h1>

          <p className="text-xl text-slate-600 font-bold max-w-2xl mx-auto">
            Secure your data, protect your family, and build a care stack that actually works with full portability.
          </p>
        </div>
      </div>

      {/* TWO PLAN CARDS */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* CARD 1 */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl relative overflow-hidden group h-full flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16" />

            <div className="relative z-10 flex-grow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                    The Vault Account
                  </h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                    Single Source of Truth
                  </p>
                </div>
              </div>

              <p className="text-slate-500 font-medium leading-relaxed mb-8 text-lg">
                Your comprehensive health identity. Securely store Digital Electronic Health Records (EHR), manage family vitals, and access care on demand.
                <span className="text-slate-900 font-bold block mt-2">
                  Bank-grade encryption. 100% Privacy.
                </span>
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-black text-slate-900 tracking-tight">
                  Lifetime Access
                </span>
              </div>

              <div className="space-y-4 mb-10">
                <p className="text-xs font-black text-slate-400 uppercase">Core Utilities</p>

                <ul className="space-y-3">
                  {[
                    "Health ID Creation",
                    "Encrypted Medical Record Storage (10GB)",
                    "Family Guardian Mode (Up to 4 Dependants)",
                    "Vitals & Lab Report Trending",
                    "Insurance Policy Digital Locker",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center text-sm font-bold text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-500 mr-3" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <p className="text-xs font-black text-slate-400 uppercase mt-6">Pay-As-You-Go Access</p>

                <ul className="space-y-3">
                  {[
                    "Specialist Consultations (Therapy/Medical)",
                    "Home Diagnostics & Nursing",
                    "Pharmacy Orders & Replenishment",
                    "Wellness Webinars & Community Events",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center text-sm font-bold text-slate-700">
                      <Zap size={16} className="text-amber-500 mr-3" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FIXED BUTTON */}
              <button
                onClick={() => (window.location.href = "https://app.phyber.care")}
                className="w-full py-5 bg-black text-white rounded-2xl font-bold text-lg mt-auto flex items-center justify-center"
              >
                Create Free Vault <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden group h-full flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -mr-16 -mt-16" />

            <div className="relative z-10 flex-grow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Layers size={32} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-black">Build Your Stack</h3>
                  <p className="text-sm font-bold text-slate-400 uppercase">A La Carte Premium</p>
                </div>
              </div>

              <p className="text-slate-300 font-medium leading-relaxed mb-8 text-lg">
                Customize your experience with exclusive subscriptions.
              </p>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-black">Custom</span>
                <span className="text-xl font-medium text-slate-400 ml-2">/ month</span>
              </div>

              <div className="space-y-6 mb-10">
                <p className="text-xs font-black text-slate-500 uppercase">Available Add-ons</p>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-purple-300">Mental Health Pro</span>
                    <span className="text-xs font-bold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                      ₹1999/mo
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">2 Therapy Sessions + Unlimited AI Chat.</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-orange-300">Body Elite</span>
                    <span className="text-xs font-bold bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded">
                      ₹2499/mo
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">Nutritionist + Fitness Coach + Diagnostics.</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-blue-300">OPD Shield</span>
                    <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                      ₹999/yr
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">Priority doctor access + 20% off medicines.</p>
                </div>
              </div>

              {/* FIXED BUTTON */}
              <button
                onClick={() => (window.location.href = "https://app.phyber.care")}
                className="w-full py-5 bg-white text-black rounded-2xl font-bold text-lg mt-auto flex items-center justify-center"
              >
                Explore Subscriptions <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <div className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-xl">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500" />

          <div className="flex flex-col items-center">
            <Image
              src="/images/plans/individual/individual-testimonial.jpg"
              alt="User testimonial"
              width={100}
              height={100}
              className="w-20 h-20 rounded-full border-4 border-slate-50 shadow-md mb-6"
            />

            <p className="text-xl font-bold text-slate-700 italic mb-6">
              “I feel in control with all the health data of me and my family in one secure place.”
            </p>

            <div className="font-black text-slate-900">Divik Malhotra</div>
            <div className="text-xs font-bold text-slate-400 uppercase">Phyber Vault User</div>
          </div>
        </div>
      </div>

      {/* FINAL FAQ SECTION */}
      <FAQSection
        title="Individual Plans — Frequently Asked Questions"
        description="Answers to common questions about Vault Accounts, personalised health stacks, subscriptions, data security and Phybercare’s digital health ecosystem."
        items={faqItems}
      />
    </div>
  );
}
