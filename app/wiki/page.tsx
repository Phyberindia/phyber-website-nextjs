import Image from "next/image";
import {
  FileText,
  PlayCircle,
  Activity,
  Brain,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

// LOCAL images inside /public/images/wiki/
const BG_WIKI = "/images/wiki/bg_wiki.jpg";
const IMG_READ = "/images/wiki/read.jpg";
const IMG_WATCH = "/images/wiki/watch.jpg";
const IMG_ASSESS = "/images/wiki/assess.jpg";
const IMG_FOCUS = "/images/wiki/focus.jpg";

export const metadata = {
  title: "Wiki | Phyber Knowledge Hub",
  description:
    "Explore mental health articles, video masterclasses, clinical assessments, and cognitive training resources inside the Phyber Knowledge Hub.",
  openGraph: {
    title: "Wiki | Phyber Knowledge Hub",
    description:
      "Browse articles, videos, assessments, and cognitive training resources curated for wellbeing and mental resilience.",
    url: "https://phyber.care/wiki",
    siteName: "Phyber",
    images: [
      {
        url: "/og/wiki.png",
        width: 1200,
        height: 630,
        alt: "Phyber Wiki",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiki | Phyber Knowledge Hub",
    description:
      "Curated resources to support wellbeing. Articles, videos, assessments, and cognitive training tools.",
    images: ["/og/wiki.png"],
  },
};

export default function WikiPage() {
  const categories = [
    {
      id: "read",
      title: "Read",
      subtitle: "Mental Health Articles",
      description:
        "Deep dive into expert-curated articles covering mental health, nutritional science, and bio-hacking for longevity.",
      icon: <FileText size={32} />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      image: IMG_READ,
    },
    {
      id: "watch",
      title: "Watch",
      subtitle: "Video Library",
      description:
        "Masterclasses, guided meditations, and expert interviews on workforce resilience and emotional wellbeing.",
      icon: <PlayCircle size={32} />,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
      image: IMG_WATCH,
    },
    {
      id: "assessments",
      title: "Assessments",
      subtitle: "Self-Discovery Tools",
      description:
        "Clinically validated tests to assess stress, burnout risk, emotional resilience, and anxiety levels.",
      icon: <Activity size={32} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      image: IMG_ASSESS,
    },
    {
      id: "focus",
      title: "Focus & Games",
      subtitle: "Cognitive Training",
      description:
        "Interactive brain games and exercises designed to boost focus, working memory, and cognitive performance.",
      icon: <Brain size={32} />,
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-100",
      image: IMG_FOCUS,
    },
  ];

  /* ------------------------------ JSON-LD ------------------------------ */
  const jsonLd = [
    /* WebPage Schema */
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Phyber Wiki",
      url: "https://phyber.care/wiki",
      description:
        "The Phyber Knowledge Hub containing articles, videos, assessments, and cognitive training resources for wellbeing.",
      inLanguage: "en",
    },

    /* Organization Schema */
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Phyber",
      legalName: "Northoak Technologies Private Limited",
      url: "https://phyber.care",
      logo: "https://phyber.care/logo.png",
      sameAs: ["https://www.linkedin.com/company/phybercare"],
      description:
        "Phyber builds the operating system for human health, bringing together care services, health records, insurance, and wellbeing programs.",
    },

    /* ItemList Schema for Wiki Categories */
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Phyber Wiki Categories",
      itemListElement: categories.map((cat, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: cat.title,
        description: cat.description,
        url: `https://phyber.care/wiki#${cat.id}`,
      })),
    },
  ];

  return (
    <>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen pb-20 bg-[#F8FAFC]">
        {/* -------------------------------------------------- */}
        {/* HERO HEADER */}
        {/* -------------------------------------------------- */}
        <div className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={BG_WIKI}
              alt="Knowledge Hub Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-[#F8FAFC]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50/80 backdrop-blur-sm text-purple-600 text-xs font-bold uppercase tracking-widest mb-4 border border-purple-100/50">
              The Wiki
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
              Knowledge <span className="text-gradient">Hub</span>.
            </h2>

          
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-bold">

              Curated intelligence for your well-being journey.
              <br />
              <span className="text-slate-900">Explore our digital library.</span>
            </p>
          </div>
        </div>

        {/* -------------------------------------------------- */}
        {/* CATEGORY GRID */}
        {/* -------------------------------------------------- */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 h-[400px] flex flex-col justify-end cursor-pointer"
              >
                {/* BG Image */}
                <div className="absolute inset-0">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-10">
                  <div
                    className={`w-16 h-16 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md bg-opacity-90`}
                  >
                    {cat.icon}
                  </div>

                  <h3 className="text-4xl font-black text-white mb-2 tracking-tight">
                    {cat.title}
                  </h3>

                  <p className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">
                    {cat.subtitle}
                  </p>

                  <p className="text-slate-200 font-medium leading-relaxed mb-8 max-w-md">
                    {cat.description}
                  </p>

                  <button className="flex items-center text-white font-bold text-lg group-hover:translate-x-2 transition-transform">
                    Explore Category <ArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------- */}
        {/* GLOBAL CTA */}
        {/* -------------------------------------------------- */}
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-white rounded-[3rem] p-16 border border-slate-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Ready to dive deeper?
              </h2>

              <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-10">
                Access advanced search and premium
                resources with our Content Hub.
              </p>

              <button className="px-12 py-5 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center mx-auto">
                Launch Content Hub <ExternalLink className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
