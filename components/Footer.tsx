"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Brain,
  User as UserIcon,
  Globe,
  Info,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import BrandLockup from "@/components/brand/BrandLockup";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isNewsletterPopupOpen, setIsNewsletterPopupOpen] = useState(false);

  const handleSubscribe = () => {
    if (!newsletterEmail.trim()) return;
    setIsNewsletterPopupOpen(true);
    setNewsletterEmail("");
  };

  return (
    <>
      {/* FOOTER */}
      <footer className="bg-[#F8FAFC] border-t border-slate-100 pt-20 pb-8 mt-20 relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* GRID SECTIONS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            
            {/* FEATURES */}
            <div>
              <h4 className="font-black mb-6 text-slate-900 uppercase tracking-widest text-xs flex items-center">
                <Brain size={14} className="mr-2 text-blue-500" />
                Features
              </h4>
              <ul className="space-y-4 text-slate-500 font-medium text-sm">
                <li><Link href="/mind" className="hover:text-black hover:translate-x-1 transition-all">Mind</Link></li>
                <li><Link href="/body" className="hover:text-black hover:translate-x-1 transition-all">Body</Link></li>
                <li><Link href="/consult/virtual" className="hover:text-black hover:translate-x-1 transition-all">Consult</Link></li>
                <li><Link href="/on-premise/at-home" className="hover:text-black hover:translate-x-1 transition-all">On-premise</Link></li>
                <li><Link href="/store" className="hover:text-black hover:translate-x-1 transition-all">Store</Link></li>
                <li><Link href="/wiki" className="hover:text-black hover:translate-x-1 transition-all">Wiki</Link></li>
              </ul>
            </div>

            {/* MEMBERSHIP */}
            <div>
              <h4 className="font-black mb-6 text-slate-900 uppercase tracking-widest text-xs flex items-center">
                <UserIcon size={14} className="mr-2 text-purple-500" />
                Membership
              </h4>
              <ul className="space-y-4 text-slate-500 font-medium text-sm">
                <li><Link href="/plans/individual" className="hover:text-black hover:translate-x-1 transition-all">Solo/Family</Link></li>
                <li><Link href="/plans/enterprise" className="hover:text-black hover:translate-x-1 transition-all">Enterprise</Link></li>
                <li><Link href="/plans/campus" className="hover:text-black hover:translate-x-1 transition-all">Campus</Link></li>
              </ul>
            </div>

            {/* BRAND */}
            <div>
              <h4 className="font-black mb-6 text-slate-900 uppercase tracking-widest text-xs flex items-center">
                <Globe size={14} className="mr-2 text-emerald-500" />
                The Brand
              </h4>
              <ul className="space-y-4 text-slate-500 font-medium text-sm">
                <li><Link href="/our-story" className="hover:text-black hover:translate-x-1 transition-all">Our Story</Link></li>
                <li><Link href="#" className="hover:text-black hover:translate-x-1 transition-all">Careers</Link></li>
                <li><Link href="#" className="hover:text-black hover:translate-x-1 transition-all">Press Kit</Link></li>
                <li><Link href="/partners" className="hover:text-black hover:translate-x-1 transition-all">Partners</Link></li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4 className="font-black mb-6 text-slate-900 uppercase tracking-widest text-xs flex items-center">
                <Info size={14} className="mr-2 text-amber-500" />
                Legal
              </h4>
              <ul className="space-y-4 text-slate-500 font-medium text-sm">
                <li><Link href="/privacy" className="hover:text-black hover:translate-x-1 transition-all">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-black hover:translate-x-1 transition-all">Terms of Service</Link></li>
                <li><button className="hover:text-black hover:translate-x-1 transition-all">Cookie Settings</button></li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col lg:flex-row justify-between items-end pt-8 border-t border-slate-100 gap-8">
            
            {/* BRANDING */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BrandLockup />
              </div>
              <p className="text-xs text-slate-400 font-semibold">
                © {new Date().getFullYear()} Phyber (Northoak Technologies Pvt. Ltd.). Built for the future of care.
              </p>
            </div>

            {/* NEWSLETTER + SOCIALS */}
            <div className="flex flex-col items-end gap-6 w-full max-w-sm">
              
              {/* INPUT */}
              <div className="flex items-center bg-slate-50 rounded-full p-1.5 border border-slate-100 focus-within:ring-2 focus-within:ring-blue-100 transition-all shadow-sm w-full">
                <div className="pl-3 text-slate-400"><Mail size={16} /></div>
                <input
                  type="email"
                  placeholder="Join the newsletter"
                  className="bg-transparent border-none focus:outline-none text-slate-900 text-xs font-bold px-3 py-1 flex-grow placeholder-slate-400"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-slate-800"
                >
                  Subscribe
                </button>
              </div>

              {/* SOCIAL ICONS (FIXED) */}
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/phybercare/"
                  aria-label="Phyber on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 rounded-full bg-slate-50 border border-slate-200 
                    flex items-center justify-center
                    text-slate-600 hover:bg-black hover:text-white
                    transition-all shadow-sm
                  "
                >
                  <Instagram size={20} className="stroke-[1.8]" />
                </Link>

                <Link
                  href="https://x.com/phybercare"
                  aria-label="Phyber on X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 rounded-full bg-slate-50 border border-slate-200 
                    flex items-center justify-center
                    text-slate-600 hover:bg-black hover:text-white
                    transition-all shadow-sm
                  "
                >
                  <Twitter size={20} className="stroke-[1.8]" />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/phybercare/"
                  aria-label="Phyber on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 rounded-full bg-slate-50 border border-slate-200 
                    flex items-center justify-center
                    text-slate-600 hover:bg-black hover:text-white
                    transition-all shadow-sm
                  "
                >
                  <Linkedin size={20} className="stroke-[1.8]" />
                </Link>

                <Link
                  href="https://www.facebook.com/phybercare"
                  aria-label="Phyber on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 rounded-full bg-slate-50 border border-slate-200 
                    flex items-center justify-center
                    text-slate-600 hover:bg-black hover:text-white
                    transition-all shadow-sm
                  "
                >
                  <Facebook size={20} className="stroke-[1.8]" />
                </Link>
              </div>

            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="border-t border-slate-100 mt-8 pt-6 text-center">
            <p className="text-[10px] leading-relaxed text-slate-400 max-w-4xl mx-auto font-medium">
              Phyber supports a wide range of mental health needs, but some situations require specialised or intensive clinical care. For urgent assistance in India, contact{" "}
              <span className="text-slate-500 font-bold">Tele MANAS: 1-800-891-4416</span>.
            </p>
          </div>

          {/* WATERMARK */}
          <h1 className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[12rem] font-black text-slate-50 whitespace-nowrap opacity-40 pointer-events-none select-none">
            Phyber
          </h1>
        </div>
      </footer>

      {/* NEWSLETTER POPUP */}
      {isNewsletterPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-[2.5rem] p-10 max-w-sm w-full text-center shadow-2xl border border-slate-100">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-blue-500 w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-2">You are on the list.</h3>
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 mb-6">
              <Sparkles size={10} className="mr-1" /> Inner Circle
            </div>
            <p className="text-slate-500 text-sm mb-8">
              Welcome to the Phyber community. Watch your inbox for curated wellness insights and exclusive drops.
            </p>
            <button
              onClick={() => setIsNewsletterPopupOpen(false)}
              className="w-full py-4 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform"
            >
              Awesome
            </button>
          </div>
        </div>
      )}
    </>
  );
}
