"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Menu,
  X,
  ChevronDown,
  Brain,
  HeartPulse,
  Video,
  MapPin,
  ShoppingBag,
  BookOpen,
  Handshake,
  Info,
} from "lucide-react";

import BrandLockup from "@/components/brand/BrandLockup";

// TYPES
type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type PlanItem = {
  label: string;
  href: string;
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlansOpen, setIsPlansOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // MAIN NAV ITEMS
  const navItems: NavItem[] = [
    { label: "Mind", href: "/mind", icon: Brain },
    { label: "Body", href: "/body", icon: HeartPulse },
    { label: "Consult", href: "/consult/virtual", icon: Video },
    { label: "On-premise", href: "/on-premise/at-home", icon: MapPin },
    { label: "Store", href: "/store", icon: ShoppingBag },
    { label: "Wiki", href: "/wiki", icon: BookOpen },
    { label: "Our Story", href: "/our-story", icon: Info },
    { label: "Partners", href: "/partners", icon: Handshake },
  ];

  const planItems: PlanItem[] = [
    { label: "Solo/Family", href: "/plans/individual" },
    { label: "Enterprise", href: "/plans/enterprise" },
    { label: "Campus", href: "/plans/campus" },
  ];

  const handlePlansEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsPlansOpen(true);
  };

  const handlePlansLeave = () => {
    timeoutRef.current = setTimeout(() => setIsPlansOpen(false), 220);
  };

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-[1000]
        bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/40
        shadow-sm
      "
    >
      {/* FULL-WIDTH NAV WRAPPER */}
      <div className="max-w-[100vw] w-full px-0">

        <div
          className="
            glass w-full 
            h-[72px] md:h-[76px] 
            rounded-[2rem]
            mx-auto
            border border-white/40
            flex items-center
            px-6 md:px-10
          "
        >

          {/* LEFT — BRAND (HARD LEFT) */}
          <div className="flex-shrink-0">
            <BrandLockup />
          </div>

          {/* CENTER — DESKTOP NAV */}
          <div className="hidden xl:flex flex-1 justify-center">

            <div className="flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">

              {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center px-4 py-2 rounded-full text-xs font-bold 
                      transition-all duration-200 whitespace-nowrap
                      ${
                        isActive
                          ? "bg-black text-white shadow-md"
                          : "text-slate-600 hover:bg-slate-100 hover:text-black"
                      }
                    `}
                  >
                    <Icon width={16} height={16} className="mr-1.5" />
                    {item.label}
                  </Link>
                );
              })}

              {/* DIVIDER */}
              <div className="w-px h-6 bg-slate-200"></div>

              {/* PLANS DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={handlePlansEnter}
                onMouseLeave={handlePlansLeave}
              >
                <button
                  className={`
                    flex items-center px-4 py-2 rounded-full text-xs font-bold
                    transition-all duration-200
                    ${
                      pathname.startsWith("/plans")
                        ? "bg-black text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-100 hover:text-black"
                    }
                  `}
                >
                  Plans
                  <ChevronDown
                    width={12}
                    height={12}
                    className={`ml-1 transition-transform duration-200 ${
                      isPlansOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isPlansOpen && (
                  <div className="absolute top-10 right-0 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 animate-fade-in z-[2000]">
                    {planItems.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="block px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* RIGHT — LOGIN BUTTON (HARD RIGHT) */}
          <div className="hidden xl:flex flex-shrink-0 ml-auto">
            <Link
              href="https://app.phyber.care"
              className="
                px-7 py-3 text-xs font-bold bg-black text-white rounded-full
                shadow-md hover:bg-slate-800 transition-all
              "
            >
              Login
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="xl:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 p-2"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div
          className="
            xl:hidden bg-white/95 backdrop-blur-xl absolute top-[96px] left-4 right-4
            rounded-3xl shadow-2xl z-[2000] border border-slate-100 overflow-hidden
          "
        >
          <div className="px-6 pt-6 pb-8 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-4 w-full p-3 rounded-xl transition-colors
                    ${isActive ? "bg-black text-white" : "hover:bg-slate-50"}`}
                >
                  <span className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                    <Icon width={20} height={20} />
                  </span>
                  <span className="text-lg font-bold text-slate-800">{item.label}</span>
                </Link>
              );
            })}

            {/* Mobile Plans */}
            <div className="pt-4 mt-4 border-t border-slate-100">
              <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2 px-2">
                Plans
              </p>

              {planItems.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 w-full py-2 px-2 text-md font-semibold text-slate-600"
                >
                  {p.label}
                </Link>
              ))}
            </div>

            {/* Mobile Login */}
            <button
              onClick={() => (window.location.href = "https://app.phyber.care")}
              className="w-full mt-4 py-4 bg-black text-white rounded-2xl text-lg font-bold shadow-xl"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
