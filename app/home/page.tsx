"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  LayoutGrid,
  Briefcase,
  GraduationCap,
  Tent,
  Users,
  FileText,
  Activity,
  Layers,
  Database,
  HeartHandshake,
  Home as HomeIcon,
  Brain,
  Sparkles,
  Shield,
  CreditCard,
  ShoppingBag,
} from "lucide-react";

import SectionWrapper from "@/components/layout/SectionWrapper";

export default function HomePage() {
  /**
   * ===========================================================
   *  PARTNER LOGOS — stored under:
   *  /public/images/homepage/partner-logos/
   * ===========================================================
   */
  const PARTNER_LOGOS = [
    { name: "Jain University", url: "/images/homepage/partner-logos/jain.jpeg" },
    { name: "Sharda University", url: "/images/homepage/partner-logos/sharda.jpeg" },
    { name: "KJ Somaiya", url: "/images/homepage/partner-logos/somaiya.png" },
    { name: "Symbiosis", url: "/images/homepage/partner-logos/symbi.png" },
    { name: "LogicLoom", url: "/images/homepage/partner-logos/logicloom.png" },
  ];

  /**
   * ===========================================================
   *  TESTIMONIALS — images stored under:
   *  /public/images/homepage/testimonials/
   * ===========================================================
   */
  const TESTIMONIALS = [
    {
      id: 1,
      name: "Manish Kumar",
      role: "Senior Developer",
      text:
        "Phyber completely changed how I approach my work-life balance. The access to Cognitive Behavioral Therapy fit perfectly into my remote work schedule.",
      image: "/images/homepage/testimonials/manish.jpg",
    },
    {
      id: 2,
      name: "Ankur Dahiya",
      role: "HR Director",
      text:
        "The employee wellness plan we implemented has boosted retention rates. The health records integration is seamless for our remote team.",
      image: "/images/homepage/testimonials/ankur.jpg",
    },
    {
      id: 3,
      name: "Akriti Tandon",
      role: "University Student",
      text:
        "I was hesitant about tele-therapy, but the resources made me feel understood. The instant booking workflow is super smooth.",
      image: "/images/homepage/testimonials/prashati.jpg",
    },
  ];

  /**
   * ===========================================================
   *  HERO AVATARS — stored under:
   *  /public/images/homepage/avatars/
   * ===========================================================
   */
  const AVATARS = [
    "/images/homepage/avatars/u1.jpg",
    "/images/homepage/avatars/u2.jpg",
    "/images/homepage/avatars/u3.jpg",
    "/images/homepage/avatars/u4.jpg",
  ];

  return (
    <div className="animate-fade-in text-slate-900">

      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* Background images: /public/images/homepage/hero/home-background.png */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-24 overflow-hidden bg-white">

        {/* HERO BACKGROUND IMAGE */}
        <div className="absolute right-0 top-0 h-full w-1/2 z-0 opacity-80">
          <Image
            src="/images/homepage/hero/home-background1.png"
            alt="Home Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Ambient Blurs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-200/50 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-200/50 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT SIDE — TEXT */}
          <div className="flex flex-col items-start text-left space-y-8">
            <h1 className="text-[58px] md:text-[78px] font-black tracking-tighter text-slate-900 leading-[1.05]">
              On-demand care, <br />
              <span className="inline-block bg-gradient-to-r from-blue-700 via-teal-500 to-emerald-500 bg-clip-text text-transparent pr-4 pb-1">
                anywhere.
              </span>
            </h1>

            <p className="text-xl text-slate-800 font-medium max-w-lg leading-relaxed">
              Your health comes first — take charge and access comprehensive care on demand,{" "}
              <span className="text-slate-900 font-bold">for yourself and those who matter</span>{" "}
              across distances.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4">
              <Link href="https://app.phyber.care">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full font-bold text-lg overflow-hidden shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-1">
                  <span className="relative flex items-center z-10">
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>

              <Link href="/plans/enterprise">
                <button className="px-10 py-5 text-slate-900 bg-white border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl">
                  Get Demo
                </button>
              </Link>
            </div>

            {/* AVATARS ROW */}
            <div className="flex items-center space-x-6 pt-6 opacity-90">
              <div className="flex -space-x-3">
                {AVATARS.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={avatar}
                      alt="User"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="text-sm font-bold text-slate-600">
                <span className="text-slate-900">Join 10k+</span> Users Taking Control Of Their Health
              </div>
            </div>
          </div>

          {/* RIGHT FLOATING CARDS (unchanged) */}
          <div className="hidden lg:block relative h-[600px] w-full">
            {/* Card 1 */}
<div className="absolute top-16 right-12 glass-card p-3 rounded-2xl w-48 animate-float z-20 border border-white/60 bg-white/60">
  <div className="flex items-center space-x-2 mb-2">
    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
      <LayoutGrid size={16} />
    </div>
    <div>
      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
        Ecosystem
      </p>
      <p className="text-sm font-black text-slate-900">Integrated Care</p>
    </div>
  </div>

  <div className="space-y-1.5">
    {["Consults", "Diagnostics", "Pharmacy"].map((item) => (
      <div
        key={item}
        className="flex items-center justify-between text-[10px] font-bold text-slate-600 bg-white/50 p-1 rounded-md"
      >
        <span>{item}</span>
        <CheckCircle2 size={10} className="text-blue-500" />
      </div>
    ))}
  </div>
</div>

{/* Card 2 */}
<div className="absolute bottom-24 right-20 glass-card p-3 rounded-2xl w-48 animate-float animation-delay-2000 border border-white/60 bg-white/60">
  <div className="flex items-center justify-between mb-2">
    <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center">
      <FileText size={16} />
    </div>
    <div className="px-1.5 py-0.5 bg-purple-100 text-purple-600 rounded text-[9px] font-bold uppercase">
      Synced
    </div>
  </div>

  <p className="text-sm font-black text-slate-900 mb-0.5">Health ID</p>
  <p className="text-[10px] font-bold text-slate-500 leading-tight">
    Insurance Claims & Electronic Health Records (EHR). Sorted by AI.
  </p>
</div>

{/* Card 3 */}
<div className="absolute top-1/3 left-8 glass-card p-4 rounded-2xl w-56 animate-float animation-delay-1000 border border-white/60 bg-white/80 shadow-2xl z-30">
  <div className="flex items-center space-x-3 mb-3">
    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
      <Users size={16} />
    </div>
    <div>
      <p className="text-sm font-black text-slate-900">Family Circle</p>
      <p className="text-[9px] font-bold text-emerald-500 uppercase">
        6 Dependants Active
      </p>
    </div>
  </div>

  <div className="flex -space-x-2 mb-2">
    {AVATARS.map((avatar, index) => (
      <div
        key={index}
        className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
      >
        <Image
          src={avatar}
          alt="Family"
          width={24}
          height={24}
          className="object-cover"
        />
      </div>
    ))}
    <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-500">
      +2
    </div>
  </div>

  <div className="bg-emerald-50 rounded-lg p-1.5 flex items-center justify-between">
    <span className="text-[9px] font-bold text-emerald-700">Parent Vitals</span>
    <span className="text-[9px] font-black text-emerald-600">Stable</span>
  </div>
</div>

{/* Big Glow */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-blue-200 to-emerald-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

          </div>
        </div>
      </section>

  {/* ============================================================ */}
{/* PARTNER LOGOS SECTION */}
{/* ============================================================ */}
<section className="py-12 border-y border-slate-100 bg-[#F8FAFC] overflow-hidden relative">
  <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
    <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
      Backed and Believed in by the Best
    </p>
  </div>

  <div className="relative flex overflow-x-hidden group">
    {/* Left Fade Mask */}
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10"></div>

    {/* Right Fade Mask */}
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10"></div>

    <div className="flex animate-marquee whitespace-nowrap items-center">
      {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, i) => (
        <div
          key={i}
          className="mx-14 h-28 flex-shrink-0 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500 relative group cursor-pointer"
        >
          <Image
            src={logo.url}
            alt={logo.name}
            width={200}
            height={100}
            className="h-16 md:h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.08] group-hover:brightness-110"
          />

          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-700 bg-gradient-to-tr from-white/30 via-transparent to-transparent"
          ></div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ============================================================ */}
      {/* BUILT FOR EVERY JOURNEY (UPDATED WITH THUMBNAILS) */}
      {/* ============================================================ */}
      <SectionWrapper id="built-for-every-journey">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Built for{" "}
            <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pr-4 pb-1">
              every journey
            </span>
            .
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Whether you are scaling a remote team, managing a university campus, or prioritizing
            personal longevity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* INDIVIDUALS */}
          <Link href="/plans/individual" className="block">
            <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden hover:bg-slate-100 transition-all cursor-pointer group border border-slate-100">

              {/* IMAGE: Individuals Thumbnail */}
              {/* PATH: /public/images/homepage/cards/individuals.jpg */}
              <div className="w-full h-40 relative">
                <Image
                  src="/images/homepage/cards/individuals.jpg"
                  alt="Individuals"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <Users size={32} className="text-blue-600" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Individuals</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  Comprehensive care plans for you and your family. Access therapy, fitness, and
                  health tools on demand.
                </p>
                <span className="text-blue-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                  View Plans <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </div>
          </Link>

          {/* ENTERPRISE */}
          <Link href="/plans/enterprise" className="block">
            <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden hover:bg-slate-100 transition-all cursor-pointer group border border-slate-100">

              {/* IMAGE: Enterprise Thumbnail */}
              {/* PATH: /public/images/homepage/cards/enterprise.jpg */}
              <div className="w-full h-40 relative">
                <Image
                  src="/images/homepage/cards/enterprise.jpg"
                  alt="Enterprise"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <Briefcase size={32} className="text-purple-600" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Enterprises</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  Empower your workforce with Employee Wellness Plans. Reduce burnout and improve
                  performance.
                </p>
                <span className="text-purple-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                  Corporate Solutions <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </div>
          </Link>

          {/* INSTITUTES */}
          <Link href="/plans/campus" className="block">
            <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden hover:bg-slate-100 transition-all cursor-pointer group border border-slate-100">

              {/* IMAGE: Institutes Thumbnail */}
              {/* PATH: /public/images/homepage/cards/institutes.jpg */}
              <div className="w-full h-40 relative">
                <Image
                  src="/images/homepage/cards/institutes.jpg"
                  alt="Institutes"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <GraduationCap size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Institutes</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  Create resilient academic environments with mental health and preventative care
                  support.
                </p>
                <span className="text-emerald-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                  Campus Programs <ArrowRight size={16} className="ml-2" />
                </span>
              </div>
            </div>
          </Link>

        </div>
      </SectionWrapper>

      {/* ============================================================ */}
      {/* EVERYTHING YOU NEED — unchanged */}
      {/* ============================================================ */}
      <SectionWrapper id="everything-you-need">
  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
      Everything you need.
      <br />
      <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent pr-4 pb-1">
        Zero fluff.
      </span>
    </h2>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[800px]">

    {/* LARGE FAMILY CARE CARD */}
    <Link
      href="/on-premise/at-home"
      className="md:col-span-2 md:row-span-2 bg-slate-100 rounded-[2.5rem] p-8 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/homepage/cards/family-care.jpg"
          alt="Family Care"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      <div className="absolute bottom-8 left-8 text-white max-w-md">
        <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
          <HomeIcon size={12} className="mr-2" />
          The Village
        </div>

        <h3 className="text-4xl font-black tracking-tight mb-2">Family Care Ecosystem.</h3>
        <p className="text-slate-200 font-medium text-lg leading-relaxed">
          Pediatric support, elder care monitoring, and emergency response — wrapped into one
          ecosystem.
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-2 py-1 bg-white/10 rounded-md text-[10px] font-bold uppercase border border-white/10">
            Elder Vitals
          </span>
          <span className="px-2 py-1 bg-white/10 rounded-md text-[10px] font-bold uppercase border border-white/10">
            Child Care
          </span>
          <span className="px-2 py-1 bg-white/10 rounded-md text-[10px] font-bold uppercase border border-white/10">
            Home Visits
          </span>
        </div>
      </div>
    </Link>

    {/* Mind OS */}
    <Link
      href="/mind"
      className="bg-blue-50 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-blue-100 transition-all cursor-pointer group"
    >
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
          <Brain size={24} />
        </div>
        <div className="flex flex-col gap-1 items-end">
          <span className="text-[9px] font-black uppercase text-blue-500 bg-blue-100 px-2 py-0.5 rounded">
            CBT
          </span>
          <span className="text-[9px] font-black uppercase text-blue-500 bg-blue-100 px-2 py-0.5 rounded">
            Trauma
          </span>
          <span className="text-[9px] font-black uppercase text-blue-500 bg-blue-100 px-2 py-0.5 rounded">
            Sleep
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-black text-slate-900">Mind OS</h3>
        <p className="text-sm text-slate-500 font-bold mt-1">
          Therapy & Psychiatry. Access clinical psychologists, trauma-informed care, and medication management.
        </p>
      </div>
    </Link>

    {/* Physical Health */}
    <Link
      href="/body"
      className="bg-orange-50 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-orange-100 transition-all cursor-pointer group"
    >
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm group-hover:scale-110 transition-transform">
          <Activity size={24} />
        </div>
        <div className="flex flex-col gap-1 items-end">
          <span className="text-[9px] font-black uppercase text-orange-500 bg-orange-100 px-2 py-0.5 rounded">
            VO2 Max
          </span>
          <span className="text-[9px] font-black uppercase text-orange-500 bg-orange-100 px-2 py-0.5 rounded">
            Cortisol
          </span>
          <span className="text-[9px] font-black uppercase text-orange-500 bg-orange-100 px-2 py-0.5 rounded">
            DNA
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-black text-slate-900">Bio-Hacking</h3>
        <p className="text-sm text-slate-500 font-bold mt-1">
          Fitness & Diagnostics. Track metabolic markers and genetic predispositions.
        </p>
      </div>
    </Link>

    {/* PLANS CARD */}
    <Link
      href="/plans/individual"
      className="md:row-span-2 bg-purple-50 rounded-[2.5rem] p-8 relative overflow-hidden hover:bg-purple-100 transition-all cursor-pointer group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full blur-2xl -mr-8 -mt-8"></div>

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm group-hover:scale-110 transition-transform">
            <Layers size={24} />
          </div>
          <span className="text-[9px] font-black uppercase text-white bg-purple-500 px-2 py-1 rounded-full shadow-md">
            Recommended
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-black text-slate-900 mb-2">Curated Plans</h3>
          <p className="text-sm text-slate-600 font-medium leading-relaxed">
            Personalized roadmaps for your specific health goals.
          </p>

          <div className="space-y-2">
            {["Online Therapy", "Metabolic Reset", "Gut Health Fix"].map((item, i) => (
              <div key={i} className="flex items-center text-xs font-bold text-slate-500">
                <CheckCircle2 size={12} className="mr-2 text-purple-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>

    {/* IRL LABS */}
    <Link
      href="/mind"
      className="md:col-span-2 bg-emerald-50 rounded-[2.5rem] p-8 flex items-center justify-between hover:bg-emerald-100 transition-all cursor-pointer group"
    >
      <div>
        <div className="inline-flex items-center px-3 py-1 bg-emerald-200/50 rounded-full text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-3">
          Retreats
        </div>
        <h3 className="text-2xl font-black text-slate-900">IRL Labs</h3>
        <p className="text-sm text-slate-600 font-medium mt-1 mb-2">
          Immersive wellness camps & nature escapes for nervous system regulation.
        </p>
        <div className="flex gap-2">
          {["Bali", "Alps", "Tuscany"].map((loc, i) => (
            <span
              key={i}
              className="text-[10px] font-bold text-emerald-600 bg-emerald-100/50 px-2 py-1 rounded"
            >
              {loc}
            </span>
          ))}
        </div>
      </div>

      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm group-hover:rotate-12 transition-transform">
        <Tent size={32} />
      </div>
    </Link>

    {/* MERCH */}
    <Link
      href="/store"
      className="bg-slate-900 rounded-[2.5rem] p-8 flex flex-col justify-between hover:bg-slate-800 transition-all cursor-pointer group text-white"
    >
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
          <ShoppingBag size={24} />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-black">Merch</h3>
        <p className="text-sm text-slate-400 font-bold mt-1 mb-3">Wellness Shop</p>
        <div className="flex flex-wrap gap-1.5">
          <span className="text-[9px] bg-white/10 px-2 py-0.5 rounded text-slate-300">
            Supplements
          </span>
          <span className="text-[9px] bg-white/10 px-2 py-0.5 rounded text-slate-300">
            Wearables
          </span>
        </div>
      </div>
    </Link>

  </div>
</SectionWrapper>

      {/* ============================================================ */}
      {/* HEALTH OS SECTION — Thumbnails Added */}
      {/* ============================================================ */}
      <SectionWrapper id="architecture">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px]"></div>

        <div className="relative z-10 text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6 border border-slate-200">
            Architecture
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900">
            The{" "}
            <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pr-4 pb-1">
              Health OS
            </span>
            .
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

          {/* HEALTH ID */}
          <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all">

            {/* IMAGE: Health ID Thumbnail */}
            {/* PATH: /public/images/homepage/cards/health-id.jpg */}
            <div className="w-full h-40 relative">
              <Image
                src="/images/homepage/cards/health-id.jpg"
                alt="Health ID"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Health ID</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Store digital EHR, prescriptions, and lab reports securely — fully interoperable.
              </p>
            </div>
          </div>

          {/* GUARDIAN MODE */}
          <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all">

            {/* IMAGE: Guardian Mode Thumbnail */}
            {/* PATH: /public/images/homepage/cards/guardian-mode.jpg */}
            <div className="w-full h-40 relative">
              <Image
                src="/images/homepage/cards/guardian-mode.jpg"
                alt="Guardian Mode"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Guardian Mode</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Remote monitoring for aging parents. Track vitals and medication adherence.
              </p>
            </div>
          </div>

          {/* INSURANCE */}
          <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all">

            {/* IMAGE: Insurance Thumbnail */}
            {/* PATH: /public/images/homepage/cards/insurance.jpg */}
            <div className="w-full h-40 relative">
              <Image
                src="/images/homepage/cards/insurance.jpg"
                alt="Insurance & OPD"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Insurance & OPD</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Manage corporate insurance claims, OPD coverage, and integrated payments.
              </p>
            </div>
          </div>

          {/* AI HEALTH INSIGHTS */}
          <div className="bg-slate-900 text-white rounded-[2rem] overflow-hidden border border-slate-800 hover:shadow-2xl transition-all relative">

            {/* IMAGE: AI Insights Thumbnail */}
            {/* PATH: /public/images/homepage/cards/ai-insights.jpg */}
            <div className="w-full h-40 relative">
              <Image
                src="/images/homepage/cards/ai-insights.jpg"
                alt="AI Health Insights"
                fill
                className="object-cover opacity-60"
              />
            </div>

            <div className="p-8 relative z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/30 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md relative z-10">
                <Sparkles size={28} />
              </div>
              <h3 className="text-2xl font-black mb-3 relative z-10">AI Health Insights</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed relative z-10">
                Intelligent agent that connects diagnostics, lifestyle, and history to offer proactive insights.
              </p>
            </div>
          </div>

        </div>
      </SectionWrapper>

      {/* ============================================================ */}
      {/* TESTIMONIALS SECTION — unchanged */}
      {/* ============================================================ */}
      <SectionWrapper id="testimonials">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900">
            Vibe{" "}
            <span className="inline-block bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent pr-4 pb-1">
              Checks
            </span>
            .
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Real stories from the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase">{t.role}</p>
                </div>
              </div>

              <p className="text-slate-600 font-medium leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ============================================================ */}
      {/* FINAL CTA SECTION — unchanged */}
      {/* ============================================================ */}
      <SectionWrapper id="final-cta" className="bg-[#F8FAFC] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE TEXT */}
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-none">
              Ready to <br />
              <span className="inline-block bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent pr-4 pb-1">
                Ascend?
              </span>
            </h2>

            <div className="space-y-4 mb-10">
              {[
                "Zero Waiting Rooms",
                "Bank-grade Encryption",
                "24/7 Crisis Support",
                "Curated Specialists",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link href="https://app.phyber.care">
              <button className="px-12 py-6 bg-black text-white rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl flex items-center">
                Join Phyber
                <ArrowRight className="ml-3" />
              </button>
            </Link>
          </div>

          {/* RIGHT SIDE FLOATING CARDS */}
          <div className="relative h-[400px] overflow-hidden">

            <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl animate-pulse"></div>

            {/* CARD 1 */}
            <div className="absolute top-0 right-0 glass-card p-6 rounded-[2rem] w-64 animate-float bg-white border border-slate-100 shadow-xl">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                <Database size={24} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-1">Single Source</h4>
              <p className="text-sm font-medium text-slate-500">
                Of truth for your Health ID and Records.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="absolute bottom-10 left-10 glass-card p-6 rounded-[2rem] w-64 animate-float animation-delay-2000 bg-white border border-slate-100 shadow-xl">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-4">
                <HeartHandshake size={24} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-1">For You & Yours</h4>
              <p className="text-sm font-medium text-slate-500">Family-first care ecosystem.</p>
            </div>
          </div>

        </div>
      </SectionWrapper>

    </div>
  );
}
