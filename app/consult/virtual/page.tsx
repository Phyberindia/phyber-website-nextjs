"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  MonitorPlay,
  Brain,
  Target,
  Salad,
  FileText,
  Baby,
  Video,
  ArrowRight,
} from "lucide-react";
import FAQSection from "@/components/FAQ";

export default function VirtualConsultPage() {
  const router = useRouter();
  const pathname = usePathname();

  const activeTab = pathname === "/consult/at-facility" ? "facility" : "virtual";

  /* ------------------------------------------
     JSON-LD: WebPage + Service + FAQ + CTA
  --------------------------------------------*/
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Virtual Doctor Consultation | Online Specialists | Phyber",
    description:
      "Online doctor consultation, telemedicine, mental health therapy, chronic care, clinical nutrition, second opinions and women's health consultations.",
    url: "https://phyber.care/consult/virtual",
    provider: {
      "@type": "Organization",
      name: "Phyber",
      url: "https://phyber.care",
    },
    mainEntity: [
      {
        "@type": "Service",
        name: "Telemedicine & Online Doctor Consultation",
        serviceType:
          "Virtual GP, online doctor, psychiatry, therapy, nutrition, chronic care",
        areaServed: "India",
        availableChannel: "https://app.phyber.care",
        url: "https://phyber.care/consult/virtual",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do online doctor consultations work on Phyber?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Book a virtual appointment through the Phyber app. Your consultation takes place via a secure video call and prescriptions remain stored inside your Phyber Vault.",
            },
          },
          {
            "@type": "Question",
            name: "Are online consultations as effective as physical visits?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Telemedicine is highly effective for common illnesses, follow-ups, mental health therapy, chronic care, medication review, and nutrition consultations.",
            },
          },
          {
            "@type": "Question",
            name: "Can I get an e-prescription?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Doctors provide digital prescriptions that remain securely stored inside your Phyber health vault.",
            },
          },
          {
            "@type": "Question",
            name: "What specialties are available online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "General physicians, psychiatrists, psychologists, nutritionists, pediatricians, dermatologists and endocrinologists are available virtually.",
            },
          },
          {
            "@type": "Question",
            name: "Are virtual consultations private and encrypted?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All video calls and chat interactions on Phyber are encrypted and privacy protected.",
            },
          },
        ],
      },
      {
        "@type": "Action",
        name: "Start Teleconsultation",
        target: "https://app.phyber.care",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="animate-fade-in pb-20 bg-[#F8FAFC]">
        {/* HERO */}
        <div className="relative pt-32 pb-20 overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/consult/virtual/telemedicine-hero.jpg"
              alt="Online doctor telemedicine consultation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/70 to-[#F8FAFC]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50/80 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100">
              Virtual Consultations
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
              Expert doctors.
              <br />
              <span className="text-indigo-600">Zero travel.</span>
            </h1>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-bold">
              Speak to top physicians, psychiatrists, psychologists,
              nutritionists and specialists through secure, private telemedicine
              consultations—right from your home.
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-200 p-1.5 rounded-full inline-flex">
            <button
              onClick={() => router.push("/consult/virtual")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === "virtual"
                  ? "bg-white shadow-md text-slate-900"
                  : "text-slate-500"
              }`}
            >
              Virtual (Telemedicine)
            </button>
            <button
              onClick={() => router.push("/consult/at-facility")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === "facility"
                  ? "bg-white shadow-md text-slate-900"
                  : "text-slate-500"
              }`}
            >
              At Facility (Clinic Visits)
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Online Doctor Consultation",
                icon: <MonitorPlay size={28} />,
                image: "/images/consult/virtual/telemedicine-1.jpg",
                text: "Instant teleconsults with experienced general physicians for fever, infections, allergies and common illnesses—complete with digital prescriptions.",
              },
              {
                title: "Mental Wellness Online",
                icon: <Brain size={28} />,
                image: "/images/consult/virtual/telemedicine-2.jpg",
                text: "Secure therapy and psychiatry sessions for anxiety, depression, burnout, ADHD and mood disorders.",
              },
              {
                title: "Chronic Care Programs",
                icon: <Target size={28} />,
                image: "/images/consult/virtual/telemedicine-3.jpg",
                text: "Virtual chronic care management for diabetes, hypertension, thyroid issues and metabolic disorders.",
              },
              {
                title: "Clinical Nutrition",
                icon: <Salad size={28} />,
                image: "/images/consult/virtual/telemedicine-4.jpg",
                text: "Goal-based metabolic and performance nutrition tailored to your lifestyle.",
              },
              {
                title: "Second Medical Opinion",
                icon: <FileText size={28} />,
                image: "/images/consult/virtual/telemedicine-5.jpg",
                text: "Upload your medical reports and get senior specialist reviews and guidance.",
              },
              {
                title: "Women’s Health (PCOS/PCOD)",
                icon: <Baby size={28} />,
                image: "/images/consult/virtual/telemedicine-6.jpg",
                text: "Virtual gynaecology support for PCOS, hormonal imbalance, menstrual health and fertility guidance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest mb-6">
                <Video size={12} className="mr-2" />
                Telemedicine
              </div>

              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Expert care,
                <br />
                on demand.
              </h2>

              <p className="text-xl text-slate-500 mb-10">
                Skip waiting rooms. Get diagnosed, treated and prescribed from home.
              </p>

              <button
                onClick={() => (window.location.href = "https://app.phyber.care")}
                className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 shadow-xl flex items-center"
              >
                Start Consultation <ArrowRight className="ml-2" />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/consult/virtual/cta-image.jpg"
                  alt="Telemedicine specialist video call"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ (Visible + standardized component) */}
        <FAQSection
          title="Virtual Consultation FAQs"
          description="Everything you need to know about online doctor visits, privacy, prescriptions and care quality."
          items={[
            {
              q: "What conditions can be treated online?",
              a: "Virtual consultations effectively address fevers, infections, cough, anxiety, depression, digestive issues, menstrual health concerns and more.",
            },
            {
              q: "Are virtual consultations private?",
              a: "Yes. All video calls and chat interactions on Phyber are encrypted end-to-end.",
            },
            {
              q: "Can I consult specialists online?",
              a: "Yes. Psychiatrists, dermatologists, pediatricians, cardiologists and other specialists are available.",
            },
            {
              q: "How do I receive my prescription?",
              a: "You receive a digital prescription stored securely inside your Phyber Vault.",
            },
          ]}
        />
      </div>
    </>
  );
}
