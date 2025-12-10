import Image from "next/image";
import { Network, Leaf, Zap, Linkedin } from "lucide-react";

export const metadata = {
  title: "Our Story | Phyber – Built on Science, Driven by Empathy",
  description:
    "Discover Phyber’s mission, vision, values, and leadership. Phyber is building the operating system for human health—unifying care, home visits, records, insurance, and family support.",
  openGraph: {
    title: "Our Story | Phyber",
    description:
      "Learn how Phyber is redefining connected care through science, empathy, and modern health infrastructure.",
    url: "https://phyber.care/our-story",
    siteName: "Phyber",
    images: [
      {
        url: "/og/our-story.png",
        width: 1200,
        height: 630,
        alt: "Phyber - Our Story",
      },
    ],
    type: "website",
  },
};

export default function OurStoryPage() {
  return (
    <>
      {/* ---------- JSON-LD SCHEMA ---------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "Our Story - Phyber",
              description:
                "Built on science and empathy, Phyber is creating the operating system for human health.",
              url: "https://phyber.care/our-story",
              mainEntity: {
                "@type": "Organization",
                name: "Phyber",
                url: "https://phyber.care",
                logo: "https://phyber.care/logo.png",
                sameAs: ["https://www.linkedin.com/company/phybercare"],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Phyber",
              legalName: "Northoak Technologies Private Limited",
              url: "https://phyber.care",
              logo: "https://phyber.care/logo.png",
              foundingDate: "2025",
              description:
                "Phyber is building the operating system for human health — unifying care, home services, health records, and insurance into a single coordinated ecosystem.",
              sameAs: ["https://www.linkedin.com/company/phybercare"],
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Himanshu Vyas",
              jobTitle: "Founder & CEO",
              worksFor: { "@type": "Organization", name: "Phyber" },
              sameAs: ["https://linkedin.com/in/tovyashimanshu"],
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Devesh Mathur",
              jobTitle: "Co-Founder & COO",
              worksFor: { "@type": "Organization", name: "Phyber" },
              sameAs: ["https://linkedin.com/in/deveshduttmathur"],
            },
          ]),
        }}
      />

      {/* ---------- PAGE CONTENT ---------- */}
      <div className="animate-fade-in pb-20 bg-[#F8FAFC]">

        {/* HERO */}
        <div className="relative pt-32 pb-20 text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/our-story/our-story-bg.jpg"
              alt="About Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-[#F8FAFC]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 text-slate-600 text-xs font-bold uppercase tracking-widest mb-8">
              Our Story
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8">
              Built on <span className="text-blue-600">Science</span>.
            </h1>

            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-bold">
              Powered by empathy. Crafted for the realities of modern families. 
            </p>
          </div>
        </div>

        {/* MISSION */}
        <div className="max-w-5xl mx-auto px-6 mb-32 text-center">
          <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-8 inline-block">
            Single Source of Truth
          </span>

          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-10 tracking-tight leading-tight">
          Phyber unifies health records, second opinions, home care and insurance 
          into one place—bringing clarity and connection to every family; <br />
            <span className="text-slate-400">across distances.</span>
          </h2>

        </div>

        {/* THE STORY 
        <div className="max-w-5xl mx-auto px-6 mb-32">
          <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-slate-100 shadow-xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <h3 className="text-3xl font-black text-slate-900 mb-6">
                The Story
              </h3>

              <div className="text-lg text-slate-500 font-medium leading-relaxed space-y-6">
                <p>
                  We grew up in small towns where community meant security.
                  As we moved away, families became more distant—emotionally and geographically.
                </p>

                <p>
                  Technology transformed communication, but care remained siloed.
                  <span className="italic">
                    Why can we video call our parents instantly yet struggle to get trusted care to them when needed?
                  </span>
                </p>

                <p>
                  Phyber bridges this gap—giving people the tools to stay informed, involved, and in control of their family’s wellbeing from anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>*/}

        {/* MISSION / VISION / VALUES */}
        <div className="max-w-6xl mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Mission */}
          <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-black mb-4 text-blue-600">Mission</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              To make high-quality care accessible, coordinated, and personal—
              empowering people to proactively care for themselves and their families.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-black mb-4 text-blue-600">Vision</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              To build the world’s most trusted operating system for human health—
              connecting people, providers, insurers, and institutions into one intelligent ecosystem.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-black mb-4 text-blue-600">Values</h3>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li>• Empathy First</li>
              <li>• Science as Foundation</li>
              <li>• Clarity Over Complexity</li>
              <li>• Connectedness</li>
              <li>• Trust Is Earned</li>
              <li>• Action Over Intent</li>
            </ul>
          </div>
        </div>

        {/* THE NAME */}
        <div className="w-full bg-gradient-to-b from-white to-blue-50/30 py-32 border-y border-slate-50">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-20">
              <h3 className="text-3xl font-black text-slate-900 mb-4">
                Decoding <span className="text-blue-600">Phyber</span>
              </h3>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                What the name represents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
              
              {/* Bond */}
              <div className="flex flex-col items-center bg-white p-10 rounded-[2rem] shadow-lg border border-slate-200 hover:-translate-y-2 transition">
                <div className="w-20 h-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                  <Network size={32} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">
                  The Bond
                </h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Every fibre strengthens the whole. Phyber reflects the ties that hold families together—connection, support, and resilience.
                </p>
              </div>

              {/* Transmission */}
              <div className="flex flex-col items-center bg-white p-10 rounded-[2rem] shadow-lg border border-slate-200 hover:-translate-y-2 transition">
                <div className="w-20 h-20 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-8">
                  <Zap size={32} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">
                  Transmission
                </h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Fast, secure, seamless—like fibre optics. Critical health information reaches the right hands when it matters most.
                </p>
              </div>

              {/* Fuel */}
              <div className="flex flex-col items-center bg-white p-10 rounded-[2rem] shadow-lg border border-slate-200 hover:-translate-y-2 transition">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-8">
                  <Leaf size={32} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">
                  The Fuel
                </h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Just as fibre nourishes the body from within, we focus on strengthening core wellbeing to support the whole.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* LEADERSHIP */}
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h3 className="text-4xl font-black text-slate-900 mb-20">
            The Architects
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-24">

            {/* HIMANSHU */}
            <div className="max-w-sm mx-auto text-center group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-blue-200 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition" />
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/images/our-story/himanshu.png"
                    alt="Himanshu Vyas"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <h4 className="text-3xl font-black text-slate-900">Himanshu Vyas</h4>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                Founder & CEO
              </p>

              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                Engineering graduate and MBA from IIM Lucknow. Former VP at Enkash with leadership experience at GE Capital and HRS Group.  
                Guides Phyber’s product vision and strategy.
              </p>

              <a
                href="https://linkedin.com/in/tovyashimanshu"
                target="_blank"
                className="inline-flex items-center text-slate-400 hover:text-blue-600 text-sm font-bold transition"
              >
                <Linkedin size={16} className="mr-2" /> Connect
              </a>
            </div>

            {/* DEVESH */}
            <div className="max-w-sm mx-auto text-center group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-purple-200 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition" />
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/images/our-story/devesh.png"
                    alt="Devesh Mathur"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <h4 className="text-3xl font-black text-slate-900">Devesh Mathur</h4>
              <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-4">
                Co-Founder & COO
              </p>

              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                B.Tech and MBA from KJ Somaiya. Previously at IBM and Tally, where he scaled partner ecosystems and operations.  
                Leads experience, partnerships, and service delivery at Phyber.
              </p>

              <a
                href="https://linkedin.com/in/deveshduttmathur"
                target="_blank"
                className="inline-flex items-center text-slate-400 hover:text-blue-600 text-sm font-bold transition"
              >
                <Linkedin size={16} className="mr-2" /> Connect
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
