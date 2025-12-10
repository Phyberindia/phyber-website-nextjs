'use client';

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Tent,
  Users,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import FAQSection from '@/components/FAQ';

/* ---------------------------------------------
   Local image placeholders (add these later)
   --------------------------------------------- */
const BG_MIND = '/images/mind/bg_mental.jpg';
const IMG_THERAPY = '/images/mind/therapy.jpg';
const IMG_GROUPS = '/images/mind/support_groups.jpg';
const IMG_RETREATS = '/images/mind/retreats.jpg';
const CTA_IMAGE = '/images/mind/cta_member.jpg';

const SITE_URL = 'https://phyber.care';
const PAGE_PATH = '/mind';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;
const ORG_LOGO = `${SITE_URL}/phyber-wordmark.png`;

type FAQPair = { q: string; a: string };

/* ---------------------------
   SEO-friendly FAQ copy (A)
   --------------------------- */
const faqItems: FAQPair[] = [
  {
    q: 'How does online therapy with Phyber work?',
    a:
      'Book an initial assessment with a licensed clinician through our secure portal. Sessions occur via video or audio, and your clinician will develop a personalized plan including therapy modalities (CBT, DBT, trauma-focused therapy) and, if appropriate, psychiatric consultation.',
  },
  {
    q: 'Can psychiatrists on Phyber prescribe medication?',
    a:
      'Yes — board-certified psychiatrists provide diagnostic evaluations and can prescribe medications where clinically indicated. All prescriptions follow local telemedicine regulations and include follow-up monitoring.',
  },
  {
    q: 'Are my sessions and medical records private?',
    a:
      "Absolutely. Phyber uses encrypted communications and stores records in HIPAA-like secure systems. We adhere to strict privacy protocols and only share information with your consent or when legally required.",
  },
  {
    q: 'What is included in a mental wellness retreat?',
    a:
      'Our retreats combine guided mindfulness, nature therapy, structured workshops, and restorative practices. Each retreat includes accommodation, expert-led sessions, and integration plans to maintain gains after you return home.',
  },
  {
    q: 'How do support groups work and who leads them?',
    a:
      'Support groups are peer-led with professional facilitation from trained clinicians. Groups focus on topics like anxiety, grief, addiction recovery, and workplace burnout — creating safe, ongoing spaces for shared healing.',
  },
  {
    q: 'Do you offer packages or membership plans?',
    a:
      'Yes. Phyber Pro membership provides priority booking, discounted sessions, monthly check-ins, and access to exclusive tools and retreats. Membership details and pricing are available on our plans page.',
  },
  {
    q: 'Is telepsychiatry suitable for severe mental health conditions?',
    a:
      'Telepsychiatry is effective for many conditions and enables timely access to care. For acute crises or severe conditions that require in-person care, we coordinate with local services and provide urgent referrals as needed.',
  },
];

/* ---------------------------
   JSON-LD payload
   --------------------------- */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: 'Phyber',
      url: SITE_URL,
      logo: ORG_LOGO,
      sameAs: [
        'https://www.linkedin.com/company/phyber',
        'https://www.instagram.com/phyber',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          telephone: '+91-XXXXXXXXXX',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: 'Phyber',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Mental Wellness | Phyber',
      description:
        'Therapy, psychiatry, support groups and restorative retreats designed to upgrade your mental operating system.',
      isPartOf: { '@id': `${SITE_URL}#website` },
      inLanguage: 'en-IN',
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${SITE_URL}/services`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Mental Wellness',
          item: CANONICAL,
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}#mental-service`,
      name: 'Mental Wellness Services',
      provider: {
        '@type': 'Organization',
        name: 'Phyber',
        url: SITE_URL,
        logo: ORG_LOGO,
      },
      serviceType: 'Mental Health Therapy & Psychiatry',
      areaServed: 'India',
      description:
        'Access therapists, psychiatrists, support groups and curated mental retreats via Phyber.',
    },
    // FAQPage: dynamically generated from faqItems
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    },
    // CTA microdata: RequestAction for booking / contacting
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#request-action`,
      potentialAction: {
        '@type': 'RequestAction',
        name: 'Find a Specialist',
        description: 'Book an assessment with a licensed specialist on Phyber.',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/app`,
        },
      },
    },
  ],
};

const MindPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mental Wellness | Phyber — Therapy, Psychiatry & Retreats</title>
        <meta
          name="description"
          content="Therapy, psychiatry, support groups and retreats designed to upgrade your mental operating system. Online therapy, telepsychiatry, and immersive retreats in India."
        />
        <meta name="keywords" content="mental wellness, online therapy, telepsychiatry, support groups, mental retreats, Phyber" />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Mental Wellness | Phyber" />
        <meta property="og:description" content="Therapy, psychiatry, support groups and retreats designed to upgrade your mental operating system." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content={`${SITE_URL}/images/mind/og_mind.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script id="mind-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} strategy="afterInteractive" />

      <div className="animate-fade-in pb-20 bg-[#F8FAFC]">
        {/* HERO */}
        <div className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <div className="relative w-full h-[600px]">
              <Image src={BG_MIND} alt="Mental health therapy psychiatry mindfulness Phyber" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-[#F8FAFC]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50/80 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100/50">
              Mental Wellness
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-tight drop-shadow-sm">
              Transform your <span className="text-blue-600">Mental Health</span>.
            </h1>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-bold">
              Evidence-based psychiatry, therapeutic interventions, group healing, stress management, and restorative retreats — all integrated into a single digital wellbeing stack.
            </p>

            <p className="text-md text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed">
              Designed for anxiety, depression, burnout, trauma recovery, workplace stress, emotional regulation and long-term mental resilience.
            </p>

            {/* CTA */}
            <div className="mt-10 flex justify-center gap-4">
              <button
                onClick={() => (window.location.href = 'https://app.phyber.care')}
                className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl flex items-center"
                aria-label="Find a specialist on Phyber"
              >
                Find a Specialist <ArrowRight className="ml-2" />
              </button>

              <Link href="/services" className="inline-flex items-center px-6 py-4 rounded-full border border-slate-200 bg-white text-slate-900 font-semibold hover:shadow-md">
                Our services
              </Link>
            </div>
          </div>
        </div>

        {/* OFFERINGS GRID — 3 CARDS */}
        <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Clinical Therapy */}
            <article className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-2xl group hover:bg-white transition-all">
              <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden">
                <Image src={IMG_THERAPY} alt="Online therapy clinical psychology psychiatry" fill className="object-cover" />
              </div>

              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <HeartHandshake size={32} />
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Clinical Therapy</h3>

              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                Work 1:1 with board-certified psychiatrists and clinical psychologists. Evidence-based treatment: CBT, DBT, trauma therapy, medication management, and emotional regulation strategies.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm font-bold text-slate-700"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" /> Psychiatric Consultations</li>
                <li className="flex items-center text-sm font-bold text-slate-700"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" /> Online Psychotherapy Sessions</li>
                <li className="flex items-center text-sm font-bold text-slate-700"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" /> Anxiety, Depression & Burnout Care</li>
              </ul>
            </article>

            {/* Card 2 — Support Groups */}
            <article className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-2xl group hover:bg-white transition-all">
              <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden">
                <Image src={IMG_GROUPS} alt="Mental health support groups anxiety grief addiction recovery" fill className="object-cover" />
              </div>

              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Support Groups</h3>

              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                Guided peer-led emotional spaces for shared healing. Built for individuals dealing with anxiety, grief, work burnout, addiction recovery and life transitions.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm font-bold text-slate-700"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" /> Anxiety Sharing Circles</li>
                <li className="flex items-center text-sm font-bold text-slate-700"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" /> Grief & Loss Support</li>
                <li className="flex items-center text-sm font-bold text-slate-700"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" /> Addiction & Recovery Spaces</li>
              </ul>
            </article>

            {/* Card 3 — Retreats */}
            <article className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-2xl group hover:bg-white transition-all">
              <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden">
                <Image src={IMG_RETREATS} alt="Mental wellness retreats meditation detox nature therapy" fill className="object-cover" />
              </div>

              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Tent size={32} />
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Retreats</h3>

              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                Deep-rest, nature-immersive experiences crafted to reset your nervous system. Designed for burnout, digital overload, emotional overload and mental reset.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm font-bold text-slate-700"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3" /> Silent Meditation & Mindfulness</li>
                <li className="flex items-center text-sm font-bold text-slate-700"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3" /> Digital Detox Retreats</li>
                <li className="flex items-center text-sm font-bold text-slate-700"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3" /> Forest/Nature Therapy Sessions</li>
              </ul>
            </article>
          </div>
        </div>

        {/* CTA SECTION */}
        <section className="py-24 bg-white border-y border-slate-100 mb-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-6">
                <Sparkles size={12} className="mr-2" />
                Membership
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">
                Upgrade your
                <br />
                mental well-being.
              </h2>

              <p className="text-xl text-slate-500 mb-10 font-medium leading-relaxed">
                Join thousands taking control of their emotional health. Unlock premium specialists, advanced tools and priority access through Phyber Pro.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => (window.location.href = 'https://app.phyber.care')}
                  className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl flex items-center"
                  aria-label="Find a specialist"
                >
                  Find a Specialist <ArrowRight className="ml-2" />
                </button>

                <Link href="/membership" className="inline-flex items-center px-6 py-4 rounded-full border border-slate-200 bg-white text-slate-900 font-semibold hover:shadow-md">
                  View plans
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 relative shadow-2xl">
                <Image src={CTA_IMAGE} alt="Mental health member story" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-3xl font-black tracking-tight">“I finally feel like myself again.”</p>
                  <p className="mt-2 font-bold opacity-80">— Reena S.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="container mx-auto px-6 mb-24">
          <FAQSection title="Frequently asked questions" description="Answers to common questions about online therapy, telepsychiatry, support groups and retreats with Phyber." items={faqItems} />
        </section>
      </div>
    </>
  );
};

export default MindPage;
