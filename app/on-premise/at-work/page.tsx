"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Building,
  Zap,
  Activity,
  Armchair,
  Siren,
  Network,
  ArrowRight,
} from "lucide-react";

import FAQSection from "@/components/FAQ"; // your FAQ.tsx component

export default function OnPremiseAtWorkPage() {
  const router = useRouter();

  // ---------------------------------------------------
  // FAQ ITEMS (SEO-OPTIMIZED FOR ON-PREMISE CARE)
  // ---------------------------------------------------
  const faqItems = [
    {
      q: "What on-premise healthcare services does Phyber provide for corporate offices?",
      a: "Phyber offers comprehensive on-premise healthcare including staffed office clinics, emergency response readiness, ergonomic assessments, corporate health camps, and preventive wellness programs such as yoga, meditation, and Zumba sessions. All services are delivered by certified medical professionals and wellness experts.",
    },
    {
      q: "Can Phyber set up and manage a full-time medical room or office clinic?",
      a: "Yes. Phyber provides end-to-end setup and management of in-office clinics including certified nurses, visiting doctors, medical equipment, vitals monitoring, first-aid supplies, and digital record integration. Corporates receive transparent dashboards and compliance-ready reports.",
    },
    {
      q: "What types of corporate health camps can be conducted on-site?",
      a: "Organizations can host annual checkups, eye screenings, dental camps, blood tests, vaccination drives, ergonomic screenings, and chronic condition monitoring. Phyber’s medical partners ensure accurate diagnostics and seamless reporting.",
    },
    {
      q: "Does Phyber offer emergency response and first-aid training at workplaces?",
      a: "Absolutely. Phyber provides CPR and first-aid training, fire and evacuation response modules, emergency simulation drills, and real-time ambulance coordination support. These programs enhance workplace safety and ensure teams are crisis-ready.",
    },
    {
      q: "Are wellness programs like yoga, mindfulness sessions, and fitness workshops included?",
      a: "Yes. Phyber arranges certified instructors for on-site yoga, Zumba, meditation, desk-stretch therapy, and posture correction sessions. These programs help reduce employee stress, improve focus, and enhance overall workplace wellbeing.",
    },
    {
      q: "Can Phyber customize on-premise services for different office sizes or hybrid teams?",
      a: "Yes. Whether you operate a single office, distributed teams, or hybrid workspaces, Phyber designs customizable on-premise care packages including periodic clinics, mobile medical units, ergonomic audits, and preventive wellness schedules aligned to each team’s needs.",
    },
  ];

  // ---------------------------------------------------
  // JSON-LD STRUCTURED DATA FOR GOOGLE SEO
  // ---------------------------------------------------
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

      {/* SEO JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <div className="relative pt-32 pb-20 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/on-premise/at-work/office-bg.jpg"
            alt="On Premise Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-[#F8FAFC]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-green-50/80 backdrop-blur-sm text-green-600 text-xs font-bold uppercase tracking-widest mb-6 border border-green-100/50">
            On-Premise
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Care at your <span className="text-green-600">Doorstep</span>.
          </h1>

          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-bold">
            Get trusted, professional medical care delivered directly to your home or office.
            From on-site consultations and diagnostics to preventive wellness checks, Phyber
            makes quality healthcare accessible, convenient, and on demand—wherever you need it.
          </p>
        </div>
      </div>

      {/* TOGGLE */}
      <div className="flex justify-center mb-12 relative z-10">
        <div className="bg-slate-200 p-1.5 rounded-full inline-flex">
          <button
            onClick={() => router.push("/on-premise/at-home")}
            className="px-8 py-3 rounded-full text-sm font-bold text-slate-500 hover:text-slate-900"
          >
            At Home
          </button>

          <button className="px-8 py-3 rounded-full text-sm font-bold bg-white shadow-md text-slate-900">
            In Office
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">

        <FeatureCard
          icon={<Building size={28} />}
          bg="bg-slate-100 text-slate-600"
          title="Office Clinics"
          text="Setup and management of in-office medical rooms with stationed nurses and doctors."
          image="/images/on-premise/at-work/office-clinics.jpg"
        />

        <FeatureCard
          icon={<Zap size={28} />}
          bg="bg-yellow-50 text-yellow-600"
          title="Corporate Health Camps"
          text="On-site annual health checkups, eye tests, and dental screenings."
          image="/images/on-premise/at-work/health-camps.jpg"
        />

        <FeatureCard
          icon={<Activity size={28} />}
          bg="bg-purple-50 text-purple-600"
          title="Wellness Sessions"
          text="Yoga, Zumba, and mindfulness workshops to improve focus and reduce stress."
          image="/images/on-premise/at-work/wellness-sessions.jpg"
        />

        <FeatureCard
          icon={<Armchair size={28} />}
          bg="bg-rose-50 text-rose-600"
          title="Ergonomic Audits"
          text="Workplace posture correction, safety assessments, and movement screening."
          image="/images/on-premise/at-work/ergonomic-audit.jpg"
        />

        <FeatureCard
          icon={<Siren size={28} />}
          bg="bg-red-50 text-red-600"
          title="Emergency Response"
          text="CPR & First Aid training, emergency readiness, and ambulance coordination."
          image="/images/on-premise/at-work/emergency-response.jpg"
        />
      </div>

      {/* CTA SECTION */}
      <section className="py-24 bg-white border-y border-slate-100 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest mb-6">
              <Network size={12} className="mr-2" /> Corporate Wellness
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Transform your<br /> workplace.
            </h2>

            <p className="text-xl text-slate-500 mb-10 font-medium">
              Boost productivity and morale with on-site health initiatives.
            </p>

            <button
              onClick={() => router.push("/plans/enterprise")}
              className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 shadow-xl flex items-center"
            >
              View Corporate Plans <ArrowRight className="ml-2" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 relative shadow-2xl">
              <Image
                src="/images/on-premise/at-work/work-cta.jpg"
                alt="Corporate Wellness"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL FAQ SECTION */}
      <FAQSection
        title="On-Premise Corporate Wellness — Frequently Asked Questions"
        description="Answers to common questions about office clinics, corporate health camps, ergonomic audits, emergency readiness, wellness sessions, and custom workplace healthcare packages."
        items={faqItems}
      />
    </div>
  );
}

/* COMPONENT */
type FeatureCardProps = {
  icon: React.ReactNode;
  bg: string;
  title: string;
  text: string;
  image: string;
};

function FeatureCard({ icon, bg, title, text, image }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl hover:-translate-y-1 transition-transform">
      <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>

      <h3 className="text-2xl font-black text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed mb-4">{text}</p>

      <div className="rounded-2xl overflow-hidden shadow-md h-40 relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}
