"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Microscope,
  Syringe,
  Smile,
  Bone,
  Baby,
  ArrowRight,
} from "lucide-react";

// Simple color map for icon backgrounds
const colorMap = {
  blue: "bg-blue-50 text-blue-600",
  purple: "bg-purple-50 text-purple-600",
  red: "bg-red-50 text-red-600",
  teal: "bg-teal-50 text-teal-600",
  orange: "bg-orange-50 text-orange-600",
  yellow: "bg-yellow-50 text-yellow-600",
} as const;

// Card component for facility services
function FacilityCard({
  title,
  icon,
  image,
  text,
  bullets,
  color,
}: {
  title: string;
  icon: React.ReactNode;
  image: string;
  text: string;
  bullets: string[];
  color: keyof typeof colorMap;
}) {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:-translate-y-1 transition-transform flex flex-col">
      {/* Image */}
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
            colorMap[color]
          }`}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-500 font-medium leading-relaxed mb-4">
          {text}
        </p>
        <ul className="space-y-2 mt-auto">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-center text-sm font-semibold text-slate-600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const facilityServices = [
  {
    title: "Premium Multi-Specialty Clinics",
    icon: <Building2 size={28} />,
    image: "/images/consult/at-facility/facility-premium-clinics.jpg",
    color: "blue" as const,
    text:
      "Access a curated network of premium hospitals and clinics for in-clinic consultations with top specialists. Enjoy zero-wait OPD, dedicated coordinators, and a smoother in-person experience for you and your family.",
    bullets: [
      "Priority in-clinic appointments with specialists",
      "Zero-wait OPD queues at partner hospitals",
      "Dedicated care coordinator at the facility",
    ],
  },
  {
    title: "Advanced Diagnostics & Scans",
    icon: <Microscope size={28} />,
    image: "/images/consult/at-facility/facility-advanced-diagnostics.jpg",
    color: "purple" as const,
    text:
      "Book high-quality diagnostic tests including MRI, CT, ultrasound, and pathology with pre-scheduled slots and digital report delivery integrated into your Phyber vault.",
    bullets: [
      "MRI, CT, ultrasound, and blood work",
      "Pre-booked slots to avoid long waits",
      "Reports auto-linked to your health record",
    ],
  },
  {
    title: "Surgery Planning & IPD Support",
    icon: <Syringe size={28} />,
    image: "/images/consult/at-facility/facility-surgery-planning.jpg",
    color: "red" as const,
    text:
      "From second opinions to admission, insurance coordination, and discharge planning, our surgical concierge helps you navigate complex procedures with confidence.",
    bullets: [
      "End-to-end surgery concierge",
      "Admission & discharge coordination",
      "Insurance paperwork and TPA liaison",
    ],
  },
  {
    title: "Dental & Vision Care",
    icon: <Smile size={28} />,
    image: "/images/consult/at-facility/facility-dental-vision.jpg",
    color: "teal" as const,
    text:
      "In-clinic dental and eye care with trusted providers for preventive, cosmetic, and corrective treatments including orthodontics, implants, and LASIK.",
    bullets: [
      "Routine dental and eye check-ups",
      "Cosmetic dentistry & orthodontics",
      "LASIK and comprehensive vision care",
    ],
  },
  {
    title: "Physiotherapy & Rehabilitation",
    icon: <Bone size={28} />,
    image: "/images/consult/at-facility/facility-physio-rehab.jpg",
    color: "orange" as const,
    text:
      "Recover from injuries and chronic pain with structured, in-person physiotherapy and rehabilitation programs designed by sports medicine and ortho specialists.",
    bullets: [
      "Post-injury and post-surgery rehab",
      "Back, neck, and joint pain protocols",
      "Sports-specific physiotherapy plans",
    ],
  },
  {
    title: "Pediatric & Family Health",
    icon: <Baby size={28} />,
    image: "/images/consult/at-facility/facility-pediatric-care.jpg",
    color: "yellow" as const,
    text:
      "Child-friendly clinics for routine pediatric visits, growth monitoring, vaccinations, and family medicine support so your household health is always on track.",
    bullets: [
      "Growth and development tracking",
      "Vaccination schedules and reminders",
      "Family physician for long-term follow-up",
    ],
  },
];

const faqs = [
  {
    q: "What is the difference between virtual consults and in-clinic consultations at Phyber facilities?",
    a: "Virtual consults let you talk to a doctor online via telemedicine from anywhere, while in-clinic consultations give you face-to-face access to specialists at partner hospitals and clinics. Many users start with a virtual consultation and then move to an in-person visit for physical examination, diagnostic tests, or surgery planning.",
  },
  {
    q: "Can I use Phyber to book doctor appointments at hospitals near me?",
    a: "Yes. Through Phyber’s in-clinic network, you can book appointments with doctors at premium hospitals and neighborhood clinics. Our team coordinates with the facility to secure slots and reduce your waiting time at the hospital.",
  },
  {
    q: "Do you help with insurance and cashless hospitalization?",
    a: "For planned procedures and surgeries, our care team can assist with documentation, coordination with your insurer or TPA, and cashless hospitalization workflows at partner hospitals. This reduces last-minute stress for you and your family.",
  },
  {
    q: "Are diagnostic test reports available online inside Phyber?",
    a: "Yes. Most lab and radiology partners share digital reports that are automatically linked to your Phyber profile. This helps your doctors access historical data, compare trends, and make better clinical decisions across future visits.",
  },
  {
    q: "Can I book physiotherapy sessions or rehabilitation packages through Phyber?",
    a: "You can book single physiotherapy sessions or structured rehabilitation packages for back pain, sports injuries, post-operative recovery, and chronic musculoskeletal issues. Sessions are delivered at partner physio centers with standardized clinical protocols.",
  },
  {
    q: "Do you support pediatric and dental care for children?",
    a: "Yes. Phyber’s in-clinic network includes pediatricians, dentists, and eye specialists who are experienced with children. You can manage routine pediatric visits, vaccinations, dental check-ups, and eye exams from a single platform.",
  },
];

export default function AtFacilityPage() {
  return (
    <>
      {/* JSON-LD: WebPage for in-clinic consultations */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "In-Clinic Consultations | Phyber",
            description:
              "Book in-clinic doctor consultations, diagnostics, physiotherapy, surgery planning, dental and pediatric care at partner hospitals and clinics.",
            url: "https://phyber.care/consult/at-facility",
            isPartOf: {
              "@type": "Website",
              url: "https://phyber.care",
            },
          }),
        }}
      />

      {/* JSON-LD: Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "In-Clinic Doctor Consultation & Diagnostics",
            provider: {
              "@type": "Organization",
              name: "Phyber",
              url: "https://phyber.care",
            },
            serviceType:
              "In-clinic doctor consultation, diagnostics, physiotherapy, surgery planning and pediatric care.",
            areaServed: "India",
            url: "https://phyber.care/consult/at-facility",
            description:
              "Book physical hospital and clinic visits through Phyber’s partner network for specialist consultations, lab tests, radiology, surgery and rehabilitation.",
          }),
        }}
      />

      {/* JSON-LD: Hospital / MedicalOrganization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hospital",
            name: "Phyber Facility Network",
            url: "https://phyber.care/consult/at-facility",
            medicalSpecialty: [
              "Cardiovascular",
              "Orthopedic",
              "Dental",
              "Ophthalmologic",
              "Pediatric",
              "Physiotherapy",
            ],
            areaServed: "India",
          }),
        }}
      />

      {/* JSON-LD: CTA Action */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Action",
            name: "Book in-clinic appointment",
            target: "https://app.phyber.care",
            agent: {
              "@type": "Organization",
              name: "Phyber",
            },
          }),
        }}
      />

      <div className="animate-fade-in pb-20 bg-[#F8FAFC]">
        {/* HERO SECTION */}
        <div className="relative pt-32 pb-20 overflow-hidden text-center">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/consult/at-facility/consult-facility-hero.jpg"
              alt="In-clinic doctor consultation at hospital facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/85 to-[#F8FAFC]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-sm text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100/60">
              In-Clinic Consults
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
              World-class care,{" "}
              <span className="text-blue-600">at the hospital</span>.
            </h1>

            <p className="text-lg md:text-xl text-slate-700 font-semibold max-w-3xl mx-auto leading-relaxed">
              Book in-clinic doctor consultations, advanced diagnostics, surgery
              planning, dental, physiotherapy and pediatric care at trusted
              hospitals and clinics. Phyber coordinates the offline journey so
              you and your family spend more time with doctors and less time in
              queues and paperwork.
            </p>
          </div>
        </div>

        {/* TABS: Virtual / At Facility */}
        <div className="flex justify-center mb-12 relative z-10">
          <div className="bg-slate-200 p-1.5 rounded-full inline-flex">
            <Link
              href="/consult/virtual"
              className="px-8 py-3 rounded-full text-sm font-bold text-slate-500 hover:text-slate-900 transition-all"
            >
              Virtual (Telemedicine)
            </Link>
            <span className="px-8 py-3 rounded-full text-sm font-bold bg-white shadow-md text-slate-900">
              At Facility (Clinic Visits)
            </span>
          </div>
        </div>

        {/* FACILITY SERVICES GRID */}
        <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilityServices.map((svc) => (
              <FacilityCard
                key={svc.title}
                title={svc.title}
                icon={svc.icon}
                image={svc.image}
                text={svc.text}
                bullets={svc.bullets}
                color={svc.color}
              />
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <section className="py-24 bg-white border-y border-slate-100 mb-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-6">
                In-Person Care
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">
                Plan your
                <br />
                next hospital visit.
              </h2>

              <p className="text-xl text-slate-500 mb-10 font-medium leading-relaxed">
                Share your reports, choose a specialist, and let our team handle
                appointment booking, insurance coordination, and follow-up.
                Phyber keeps your in-clinic and virtual journeys linked to the
                same health record so nothing is lost between visits.
              </p>

              <button
                onClick={() => (window.location.href = "https://app.phyber.care")}
                className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl flex items-center"
              >
                Book In-Clinic Visit
                <ArrowRight className="ml-2" />
              </button>
            </div>

            {/* CTA IMAGE */}
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 relative shadow-2xl">
                <Image
                  src="/images/consult/at-facility/facility-cta-hospital.jpg"
                  alt="Patient at hospital reception booking appointment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white max-w-xs">
                  <p className="text-2xl font-black tracking-tight">
                    “The entire hospital visit felt organized and stress-free.”
                  </p>
                  <p className="mt-2 font-bold opacity-80">
                    — Phyber Member, Bengaluru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 text-center">
            In-Clinic Consultation FAQs
          </h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-10">
            Learn how in-person consultations, hospital visits, diagnostic
            tests, and physiotherapy sessions work when booked through Phyber.
          </p>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-slate-100 rounded-2xl p-4 md:p-5 shadow-sm"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-sm md:text-base font-semibold text-slate-900">
                    {f.q}
                  </span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
