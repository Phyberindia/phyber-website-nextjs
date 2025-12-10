"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Building,
  Brain,
  ShieldCheck,
  Activity,
} from "lucide-react";

import FAQSection from "@/components/FAQ";

export default function PlansCampusPage() {
  const router = useRouter();

  // ---------------------------
  // CAMPUS FAQ ITEMS
  // ---------------------------
  const faqItems = [
    {
      q: "What services are included in Phybercare’s campus wellness program?",
      a: "Phybercare offers on-campus clinics, 24/7 mental health support, emergency response protocols, health drives, vaccination camps, and anonymous counseling chat. These services help institutions strengthen physical and mental well-being while improving overall campus safety.",
    },
    {
      q: "How does 24/7 student therapy and counseling support work?",
      a: "Students receive round-the-clock access to licensed counselors through tele-counseling sessions, chat-based therapy, and stress-relief programs. This supports exam anxiety, peer pressure, homesickness, relationship concerns, and emotional distress anonymously and securely.",
    },
    {
      q: "Can Phybercare manage on-campus clinics and infirmary operations?",
      a: "Yes. Phybercare sets up and manages complete infirmaries with qualified nurses, visiting doctors, medical inventory, first-aid equipment, and digital health records. Institutions receive real-time dashboards and compliance-ready reports.",
    },
    {
      q: "Does the platform support campus emergency and safety protocols?",
      a: "Absolutely. Phybercare equips faculty, wardens, and security teams with structured emergency response workflows, SOS escalation, first-aid training, campus triage readiness, and student incident reporting tools for enhanced safety.",
    },
    {
      q: "Are student health records and therapy conversations confidential?",
      a: "Yes. All records are encrypted and stored securely. Therapy chats and counseling calls follow strict confidentiality guidelines, ensuring anonymity unless a critical risk requires escalation. Institutions never see individual student conversations.",
    },
    {
      q: "Can wellness programs be customized for different student groups?",
      a: "Yes. Colleges can tailor programs for hostels, departments, international students, sports teams, or high-stress academic cohorts. Custom modules include awareness workshops, mental wellness campaigns, preventive health drives, and peer-support initiatives.",
    },
  ];

  // ---------------------------
  // JSON-LD — SEO STRUCTURE
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

      {/* SEO LD+JSON */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <div className="relative pt-32 pb-20 overflow-hidden text-center">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plans/campus/campus-bg.jpg"
            alt="Campus Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-[#F8FAFC]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50/80 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100/50">
            Campus
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Campus <span className="text-emerald-600">Wellness</span>.
          </h1>

          <p className="text-xl text-slate-600 font-bold max-w-2xl mx-auto">
            Holistic support systems for students. Enhancing mental health, safety,
            and physical well-being on campus.
          </p>

          {/* CTA UPDATED → Router Push */}
          <button
            onClick={() => router.push("/request-demo?from=campus")}
            className="mt-8 px-10 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Contact Sales
          </button>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* On Campus Clinics */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Building size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              On-Campus Clinics
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Setup and management of infirmaries with qualified nurses and visiting doctors.
            </p>
          </div>

          {/* Student Therapy */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Brain size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Student Therapy
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              24/7 tele-counseling and anonymous chat support for exam stress, peer pressure,
              and anxiety.
            </p>
          </div>

          {/* Safety Protocols */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Safety Protocols
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Emergency response coordination and first-aid training for faculty and student wardens.
            </p>
          </div>

          {/* Health Drives */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <Activity size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Health Drives
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Annual health checkups, vaccination camps, and awareness workshops for the student body.
            </p>
          </div>

        </div>
      </div>

      {/* TESTIMONIAL SECTION */}
      <div className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <div className="bg-white rounded-[2.5rem] p-12 border border-slate-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />

          <div className="flex flex-col items-center">
            <Image
              src="/images/plans/campus/campus-testimonial.jpg"
              alt="Campus Testimonial"
              width={100}
              height={100}
              className="w-20 h-20 rounded-full border-4 border-slate-50 shadow-md mb-6"
            />

            <p className="text-xl font-bold text-slate-700 italic mb-6">
              “This is where your campus testimonial will appear.”
            </p>

            <div className="font-black text-slate-900">Student Name</div>
            <div className="text-xs font-bold text-slate-400 uppercase">
              Student Role
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <FAQSection
        title="Campus Wellness — Frequently Asked Questions"
        description="Answers to common questions about on-campus clinics, mental health support, emergency protocols, wellness drives, privacy, and custom student wellbeing programs."
        items={faqItems}
      />
    </div>
  );
}
