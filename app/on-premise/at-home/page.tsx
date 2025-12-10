// app/on-premise/at-home/page.tsx
'use client';

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  HeartHandshake,
  Activity,
  Stethoscope,
  Baby,
  PawPrint,
  Armchair,
  Network,
  ArrowRight,
} from 'lucide-react';
import FAQSection from '@/components/FAQ';

type CardItem = {
  id: string;
  title: string;
  text: string;
  imageSrc: string;
  alt: string;
  icon: React.ReactNode;
  bgClass?: string;
};

type FAQPair = { q: string; a: string };

const SITE_URL = 'https://phyber.care';
const PAGE_PATH = '/on-premise/at-home';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;
const ORG_NAME = 'Phyber';
const ORG_LOGO = `${SITE_URL}/phyber-wordmark.png`;

/* ----------------------
   Cards (local image paths)
   images live in: /public/images/on-premise/at-home/
   ---------------------- */
const cards: CardItem[] = [
  {
    id: 'card-elder',
    title: 'Elder Care',
    text:
      'Comprehensive geriatric care at home — dementia support, medication management, mobility assistance and compassionate companionship to help ageing-in-place safely.',
    imageSrc: '/images/on-premise/at-home/elder-care.jpg',
    alt: 'elder care nurse visiting patient at home',
    icon: <HeartHandshake size={24} />,
    bgClass: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: 'card-nursing',
    title: 'Home Nursing',
    text:
      'Post-operative nursing, wound care, IV therapy, and monitored, high-acuity clinical support delivered by certified nurses in the comfort of your home.',
    imageSrc: '/images/on-premise/at-home/home-nursing.jpg',
    alt: 'nurse providing home nursing care',
    icon: <Activity size={24} />,
    bgClass: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'card-doctor',
    title: 'Doctor at Home',
    text:
      "Book general physicians and specialists for in-home consultations, chronic-condition follow-up, urgent assessments and personalized treatment plans.",
    imageSrc: '/images/on-premise/at-home/doctor-at-home.jpg',
    alt: 'doctor visiting patient at home',
    icon: <Stethoscope size={24} />,
    bgClass: 'bg-green-50 text-green-600',
  },
  {
    id: 'card-child',
    title: 'Child Care',
    text:
      'Neonatal checks, pediatric consultations, routine vaccinations and early development monitoring performed by experienced child health specialists.',
    imageSrc: '/images/on-premise/at-home/child-care.jpg',
    alt: 'pediatrician visiting a child at home',
    icon: <Baby size={24} />,
    bgClass: 'bg-pink-50 text-pink-600',
  },
  {
    id: 'card-pet',
    title: 'Pet Care',
    text:
      'Veterinary home visits, basic vaccinations, wellness checks and minor procedures — because pets are part of the family too.',
    imageSrc: '/images/on-premise/at-home/pet-care.jpg',
    alt: 'vet examining a dog at home',
    icon: <PawPrint size={24} />,
    bgClass: 'bg-orange-50 text-orange-600',
  },
  {
    id: 'card-seniorhomes',
    title: 'Senior Homes',
    text:
      'Access to premium assisted-living communities and senior-care residences with integrated medical support and periodic physician rounds.',
    imageSrc: '/images/on-premise/at-home/senior-homes.jpg',
    alt: 'assisted living community exterior',
    icon: <Armchair size={24} />,
    bgClass: 'bg-teal-50 text-teal-600',
  },
];

/* ----------------------
   SEO-friendly FAQ items
   ---------------------- */
const faqItems: FAQPair[] = [
  {
    q: 'How do I request an in-home visit?',
    a:
      'Request a home visit through the Phyber app or website. Choose the service (doctor, nurse, pediatrician, etc.), select a time slot, and our care coordinator confirms and dispatches the qualified clinician.',
  },
  {
    q: 'What areas do you serve for on-premise care?',
    a:
      'We operate in multiple major cities and metro regions — availability depends on your location. Enter your PIN code in the app to check coverage and booking options.',
  },
  {
    q: 'Are your nurses and clinicians certified?',
    a:
      'Yes. All in-home providers are fully licensed, background-checked, and trained to our clinical protocols for safety and quality care.',
  },
  {
    q: 'What safety protocols are followed for home visits?',
    a:
      'Clinicians follow strict infection control and PPE protocols, perform pre-visit health screening, and document each visit in a secure electronic health record linked to your Phyber profile.',
  },
  {
    q: 'Can I schedule recurring home nursing visits?',
    a:
      'Absolutely. You can set up recurring nursing or therapy visits for chronic care, wound management, or rehabilitation programs using the Phyber scheduler.',
  },
];

/* ----------------------
   JSON-LD (Organization, WebSite, WebPage, Service, Breadcrumb, FAQ, CTA)
   ---------------------- */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}#org`,
      name: ORG_NAME,
      url: SITE_URL,
      logo: ORG_LOGO,
      sameAs: [
        'https://www.linkedin.com/company/phyber',
        'https://www.instagram.com/phyber',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
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
      name: ORG_NAME,
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'On-Premise Care — At Home | Phyber',
      description:
        'On-premise healthcare: home nursing, doctor-at-home, elder care, pediatric home visits, veterinary home care and senior-home access.',
      isPartOf: { '@id': `${SITE_URL}#website` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'On-Premise', item: `${SITE_URL}/on-premise` },
        { '@type': 'ListItem', position: 3, name: 'At Home', item: CANONICAL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}#onpremise-service`,
      name: 'On-Premise Home Care Services',
      provider: { '@type': 'Organization', name: ORG_NAME, url: SITE_URL },
      serviceType: 'Home nursing, Doctor at home, Elder care, Pediatric home visits, Veterinary home visits',
      areaServed: 'India',
      description:
        'Certified clinicians and caregivers delivering in-home nursing, physician visits, elder care, pediatric visits and veterinary support.',
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#request-action`,
      potentialAction: {
        '@type': 'RequestAction',
        name: 'Request Home Visit',
        description: 'Request a licensed clinician to visit your home for nursing or medical care.',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://app.phyber.care',
        },
      },
    },
  ],
};

/* ----------------------
   Page component
   ---------------------- */
const OnPremiseAtHomePage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>On-Premise Care — At Home | Phyber</title>
        <meta
          name="description"
          content="Professional home healthcare: in-home nursing, doctor visits, elder care, pediatric visits and pet care. Book certified clinicians to your doorstep."
        />
        <meta
          name="keywords"
          content="home healthcare, home nursing, doctor at home, elder care, pediatric home visit, vet home visit, in-home care"
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="On-Premise Care — At Home | Phyber" />
        <meta property="og:description" content="Professional home healthcare delivered by certified nurses, doctors and specialists — request a home visit today." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content={`${SITE_URL}/images/on-premise/at-home/hero-bg.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script id="onpremise-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="animate-fade-in pb-20 bg-[#F8FAFC]">
        {/* HERO */}
        <section className="relative pt-32 pb-20 overflow-hidden text-center">
          <div className="absolute inset-0 -z-10">
            <div className="relative w-full h-[620px]">
              <Image src="/images/on-premise/at-home/hero-bg.jpg" alt="On Premise Home Care Hero" fill className="object-cover" priority />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-[#F8FAFC]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50/80 backdrop-blur-sm text-green-600 text-xs font-bold uppercase tracking-widest mb-6 border border-green-100/50">
              On-Premise
            </span>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
              Care at your <span className="text-green-600">Doorstep</span>.
            </h1>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-bold">
      
            Get trusted, professional medical care delivered directly to your home or office. 
            From on-site consultations and diagnostics to preventive wellness checks, Phyber
            makes quality healthcare accessible, convenient, and on demand—wherever you need it.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => (window.location.href = 'https://app.phyber.care')}
                className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 font-semibold text-lg hover:bg-slate-800 transition-shadow shadow"
                aria-label="Request a home visit"
              >
                Request Home Visit <ArrowRight className="ml-2" />
              </button>

              <button onClick={() => router.push('/on-premise/at-work')} className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-slate-900 font-medium hover:shadow-md">
                In Office Services
              </button>
            </div>
          </div>
        </section>

        {/* TOGGLE */}
        <div className="flex justify-center mb-12 relative z-10">
          <div className="bg-slate-200 p-1.5 rounded-full inline-flex">
            <button className="px-8 py-3 rounded-full text-sm font-bold bg-white shadow-md text-slate-900">
              At Home
            </button>

            <button onClick={() => router.push('/on-premise/at-work')} className="px-8 py-3 rounded-full text-sm font-bold text-slate-500 hover:text-slate-900">
              In Office
            </button>
          </div>
        </div>

        {/* GRID */}
        <section className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <article key={c.id} className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl hover:-translate-y-1 transition-transform flex flex-col">
              <div className={`w-14 h-14 ${c.bgClass ?? 'bg-slate-100 text-slate-700'} rounded-2xl flex items-center justify-center mb-6`}>
                {c.icon}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-3">{c.title}</h3>

              <p className="text-slate-500 font-medium leading-relaxed mb-6">{c.text}</p>

              <div className="rounded-2xl overflow-hidden shadow-md h-40 relative mt-auto">
                <Image src={c.imageSrc} alt={c.alt} fill className="object-cover" />
              </div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="py-24 bg-white border-y border-slate-100 mb-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest mb-6">
                <Network size={12} className="mr-2" /> Home Care
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Bring care to
                <br /> your doorstep.
              </h2>

              <p className="text-xl text-slate-500 mb-10 font-medium">
                Professional support for you and your loved ones, at home.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => (window.location.href = 'https://app.phyber.care')}
                  className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 shadow-xl flex items-center"
                >
                  Request Home Visit <ArrowRight className="ml-2" />
                </button>

                <Link href="/on-premise/at-work" className="inline-flex items-center px-6 py-4 rounded-full border border-slate-200 bg-white text-slate-900 font-semibold hover:shadow-md">
                  Explore In-Office
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 relative shadow-2xl">
                <Image src="/images/on-premise/at-home/cta.jpg" alt="Home care staff helping patient" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <FAQSection
            title="Home Care — Frequently Asked Questions"
            description="Common questions about on-premise home visits, nursing, pediatric checks, elder care and pet visits — and how Phyber ensures quality and safety."
            items={faqItems}
          />
        </section>
      </main>
    </>
  );
};

export default OnPremiseAtHomePage;
