'use client';

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

import WellnessCard from '@/components/WellnessCard';
import FAQSection from '@/components/FAQ';

import {
  Activity,
  Microscope,
  Flower2,
  Dumbbell,
  Trophy,
  BarChart3,
  Footprints,
  ArrowRight,
} from 'lucide-react';

const SITE_URL = 'https://phyber.care';
const PAGE_PATH = '/body';
const CANONICAL = `${SITE_URL}${PAGE_PATH}`;
const ORG_LOGO = `${SITE_URL}/phyber-wordmark.png`;

type FAQPair = { q: string; a: string };

/* ---------------------------
   FAQ items (SEO-friendly)
   --------------------------- */
const faqItems: FAQPair[] = [
  {
    q: "What services are included in Phyber’s Physical Wellness program?",
    a: "Phyber’s Physical Wellness program includes running clubs, physiotherapy, recovery therapy, diagnostics, metabolic testing, gym access and evidence-based training programs designed for longevity, performance and injury prevention.",
  },
  {
    q: 'Do you offer fitness programs tailored to beginners?',
    a: 'Yes. We provide structured beginner-level programs such as Couch to 5K, habit coaching, low-impact training and personalized fitness plans with progressive milestones to ensure safe, consistent progress.',
  },
  {
    q: 'Can I get physiotherapy or pain management support?',
    a: 'Absolutely. Our physiotherapists provide injury rehabilitation, mobility therapy, posture correction and long-term pain management plans integrated with exercise prescription and recovery modalities.',
  },
  {
    q: 'Do you offer metabolic and performance testing?',
    a: 'Yes. We offer VO2 Max testing, DEXA body composition scans, resting metabolic rate testing and advanced biometric assessments to create precise, data-driven training and nutrition plans.',
  },
  {
    q: 'Is gym access included with membership?',
    a: 'Members receive discounted access to partner gyms, functional fitness centers, CrossFit facilities and yoga studios. Access levels depend on your membership tier and regional partnerships.',
  },
];

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
      name: 'Physical Wellness | Phyber',
      description:
        'Physical wellness services including running clubs, physiotherapy, diagnostics, performance analytics, gym access and long-term fitness coaching.',
      isPartOf: { '@id': `${SITE_URL}#website` },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Physical Wellness', item: CANONICAL },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}#physical-service`,
      name: 'Physical Health & Wellness Programs',
      provider: { '@type': 'Organization', name: 'Phyber', url: SITE_URL, logo: ORG_LOGO },
      serviceType: 'Running clubs, physiotherapy, fitness coaching, diagnostics, metabolic testing and performance optimization.',
      areaServed: 'India',
      description:
        'Precision fitness, physiotherapy, diagnostics, metabolic testing, body composition analysis and habit coaching for long-term physical wellness.',
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
        name: 'Find a Center',
        description: 'Locate partner centers, gyms and recovery suites near you via the Phyber app.',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/app` },
      },
    },
  ],
};

const PhysicalPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Physical Wellness | Phyber — Fitness, Physiotherapy & Diagnostics</title>
        <meta
          name="description"
          content="Physical wellness services including running clubs, physiotherapy, diagnostics, performance analytics, gym access and long-term fitness coaching."
        />
        <meta name="keywords" content="physical wellness, physiotherapy, running clubs, VO2 Max, DEXA, fitness coaching, recovery suites" />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Physical Wellness | Phyber" />
        <meta property="og:description" content="Precision fitness, physiotherapy and diagnostics for long-term physical performance and resilience." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content={`${SITE_URL}/images/body/og_body.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Script id="physical-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="animate-fade-in pb-20 bg-[#F8FAFC]">
        {/* HERO SECTION */}
        <div className="relative pt-32 pb-20 overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/body/body-hero-bg.jpg"
              alt="Physical wellness fitness physiotherapy diagnostics Phyber"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-[#F8FAFC]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-50/80 text-orange-600 text-xs font-bold uppercase mb-6 border border-orange-100/50">
              Physical Wellness
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
              Transform Your <span className="text-orange-600">Body. Mind. Life.</span>
            </h1>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-bold">
              Evidence{' '}
              <strong>based fitness, physiotherapy, diagnostics, metabolic
              health and performance optimization</strong>—all under one platform.
              Whether you&apos;re training for longevity, weight loss, athletic performance,
              or injury-free movement, we help you unlock your best physical self.
            </p>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <WellnessCard
              title="Running Clubs"
              icon={<Activity size={32} />}
              image="/images/body/running-club.jpg"
              color="orange"
              text="Build endurance, speed and cardiovascular health through expert-led running communities."
              bullets={[
                'Couch to 5K programs',
                'Marathon coaching',
                'Weekly guided runs',
                'Gait analysis & injury prevention',
              ]}
            />

            <WellnessCard
              title="Lab Diagnostics"
              icon={<Microscope size={32} />}
              image="/images/body/lab-diagnostics.jpg"
              color="red"
              text="Deep-dive into metabolic health with scientific diagnostics for personalized fitness planning."
              bullets={[
                'Full-body checkups',
                'Genetic & metabolic testing',
                'Blood biomarkers',
                'Home sample collection',
              ]}
            />

            <WellnessCard
              title="Recovery Suites"
              icon={<Flower2 size={32} />}
              image="/images/body/recovery-suite.jpg"
              color="blue"
              text="Accelerate healing and performance recovery through certified physiotherapists and partner centers."
              bullets={[
                'Hydrotherapy',
                'Sports massage',
                'Deep tissue therapy',
                'Mobility & flexibility work',
              ]}
            />

            <WellnessCard
              title="Gym & Studio Access"
              icon={<Dumbbell size={32} />}
              image="/images/body/gym-access.jpg"
              color="indigo"
              text="Exclusive access to partner gyms, strength studios and specialty fitness centers."
              bullets={[
                'Discounted memberships',
                'CrossFit & HIIT',
                'Yoga & Pilates',
                'Strength coaching programs',
              ]}
            />

            <WellnessCard
              title="Running Events"
              icon={<Trophy size={32} />}
              image="/images/body/running-events.jpg"
              color="yellow"
              text="Race-day support and priority access to national and international running events."
              bullets={[
                'Early marathon slots',
                'Pre-race prep',
                'Warm-up & cooldown support',
                'Community runners network',
              ]}
            />

            <WellnessCard
              title="Performance Analytics"
              icon={<BarChart3 size={32} />}
              image="/images/body/performance-analytics.jpg"
              color="cyan"
              text="Precision testing for athletic potential, metabolic rate and long-term performance."
              bullets={[
                'VO2 Max testing',
                'DEXA body composition',
                'Resting metabolic rate',
                'Strength & endurance profiling',
              ]}
            />
          </div>
        </div>

        {/* COMMUNITY SECTION */}
        <section className="py-24 bg-white border-y border-slate-100 mb-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-[10px] font-black uppercase tracking-widest mb-6">
                <Footprints size={12} className="mr-2" /> Community
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Build a Resilient,
                <br />
                Powerful Body.
              </h2>

              <p className="text-xl text-slate-500 mb-10 font-medium leading-relaxed">
                Train smarter, recover better and move pain-free with a community
                that lifts you up. From structured programs to expert-led movement
                coaching, Phyber helps you stay consistent for life.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => (window.location.href = 'https://app.phyber.care')}
                  className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl flex items-center"
                >
                  Find a Center <ArrowRight className="ml-2" />
                </button>

                <Link href="/community" className="inline-flex items-center px-6 py-4 rounded-full border border-slate-200 bg-white text-slate-900 font-semibold hover:shadow-md">
                  Join the community
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl">
                <Image
                  src="/images/body/body-community-fitness.jpg"
                  alt="Fitness community training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <FAQSection
            title="Physical Wellness — Frequently Asked Questions"
            description="Answers to common questions about Phyber’s physical wellness programs, diagnostics and community offerings."
            items={faqItems}
          />
        </section>
      </div>
    </>
  );
};

export default PhysicalPage;
