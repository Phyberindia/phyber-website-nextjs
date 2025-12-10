import Image from "next/image";
import {
  Pill,
  Zap,
  RefreshCw,
  Truck,
  ShoppingBag,
} from "lucide-react";

import FAQ from "@/components/FAQ";
import ClientNavButton from "./ClientNavButton";

/* -------------------------------------------------------------------------- */
/*                               SEO METADATA                                 */
/* -------------------------------------------------------------------------- */

export const metadata = {
  title: "Phyber Store | Wellness Marketplace & Smart Pharmacy",
  description:
    "Shop verified medicines, supplements, med-tech rentals, and automated chronic-care replenishment on the Phyber Store. Fast delivery and members-only pricing.",
  openGraph: {
    title: "Phyber Store | Smart Pharmacy & Wellness Marketplace",
    description:
      "Discover medicines, supplements, med-tech rentals and automated refills. Trusted partners, fast delivery, members-only pricing.",
    url: "https://phyber.care/store",
    siteName: "Phyber",
    images: [
      {
        url: "/og/store.png",
        width: 1200,
        height: 630,
        alt: "Phyber Store",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phyber Store | Smart Pharmacy & Wellness Marketplace",
    description:
      "Your trusted wellness marketplace—medicines, supplements, rentals and chronic-care automation.",
    images: ["/og/store.png"],
  },
};

/* -------------------------------------------------------------------------- */
/*                           FEATURES FOR JSON-LD                             */
/* -------------------------------------------------------------------------- */

const features = [
  {
    id: "smart-pharmacy",
    title: "Smart Pharmacy",
    description:
      "Upload prescriptions and get medicines delivered in 60 minutes from verified pharmacists.",
    image: "/store/smart-pharmacy.jpg",
  },
  {
    id: "bio-active-fuel",
    title: "Bio-Active Fuel",
    description:
      "Lab-tested supplements, vitamins, and protein essentials for fitness and recovery.",
    image: "/store/bio-active-fuel.jpg",
  },
  {
    id: "auto-pilot",
    title: "Auto-Pilot",
    description:
      "Set automatic replenishment for chronic medication. Never run out again.",
    image: "/store/auto-pilot.jpg",
  },
  {
    id: "med-tech-rentals",
    title: "Med-Tech Rentals",
    description:
      "Rent hospital beds, oxygen concentrators, and wheelchairs with assisted delivery.",
    image: "/store/med-tech-rentals.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  PAGE                                      */
/* -------------------------------------------------------------------------- */

export default function StorePage() {
  const jsonLd = [
    /* WebPage Schema */
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Phyber Store",
      url: "https://phyber.care/store",
      description:
        "Order medicines, supplements, med-tech rentals and automated chronic-care refills from the Phyber wellness marketplace.",
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
    },

    /* ItemList Schema */
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Phyber Store Categories",
      itemListElement: features.map((feat, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: feat.title,
        description: feat.description,
        url: `https://phyber.care/store#${feat.id}`,
      })),
    },
  ];

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="animate-fade-in pb-20 bg-[#F8FAFC]">
        {/* ------------------------------------------------------------------ */}
        {/* HERO */}
        {/* ------------------------------------------------------------------ */}
        <div className="relative pt-32 pb-20 overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/store/store-bg.jpg"
              alt="Store Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-[#F8FAFC]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-200/80 backdrop-blur-sm text-slate-700 text-xs font-bold uppercase tracking-widest mb-6 border border-slate-300/50">
              Marketplace
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
              The Wellness <span className="text-slate-500">Shop</span>.
            </h1>

            <p className="text-xl text-slate-600 font-bold max-w-2xl mx-auto">
              Curated wellness marketplace. Verified medicines, medical devices,
              supplements and rentals delivered to your door.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* FOUR FEATURES */}
        {/* ------------------------------------------------------------------ */}
        <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Pill size={24} />}
              bg="bg-blue-50 text-blue-600"
              title="Smart Pharmacy"
              text="Upload prescriptions and get medicines delivered in 60 minutes from verified pharmacists."
              image="/images/store/smart-pharmacy.jpg"
              id="smart-pharmacy"
            />

            <FeatureCard
              icon={<Zap size={24} />}
              bg="bg-orange-50 text-orange-600"
              title="Bio-Active Fuel"
              text="Lab-tested supplements, vitamins, and protein for your fitness goals."
              image="/images/store/bio-active-fuel.jpg"
              id="bio-active-fuel"
            />

            <FeatureCard
              icon={<RefreshCw size={24} />}
              bg="bg-purple-50 text-purple-600"
              title="Auto-Pilot"
              text="Never run out. Automated replenishment for chronic medications."
              image="/images/store/auto-pilot.jpg"
              id="auto-pilot"
            />

            <FeatureCard
              icon={<Truck size={24} />}
              bg="bg-emerald-50 text-emerald-600"
              title="Med-Tech Rentals"
              text="Rent hospital beds, oxygen concentrators, and wheelchairs with home delivery."
              image="/images/store/med-tech-rentals.jpg"
              id="med-tech-rentals"
            />
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* CTA SECTION */}
        {/* ------------------------------------------------------------------ */}
        <section className="py-24 bg-white border-y border-slate-100 mb-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-widest mb-6">
                <ShoppingBag size={12} className="mr-2" /> Exclusive
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
                Members Only <br /> Pricing.
              </h2>

              <p className="text-xl text-slate-500 mb-10 font-medium">
                Save up to 20% on all orders with your Phyber membership.
                Genuine products, guaranteed.
              </p>

              {/* Client-only interactive button */}
              <ClientNavButton />
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/store/store-cta.jpg"
                  alt="Wellness Products"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* FAQ SECTION */}
        {/* ------------------------------------------------------------------ */}
        <div className="max-w-7xl mx-auto px-6">
          <FAQ
            title="Store & Shopping FAQs"
            items={[
              {
                q: "Are all medicines and supplements on Phyber verified?",
                a: "Yes, all medicines are dispensed by licensed pharmacists and all supplements undergo purity and safety testing.",
              },
              {
                q: "How fast can I get medicines delivered?",
                a: "In most cities, Smart Pharmacy offers delivery in under 60 minutes for valid prescriptions.",
              },
              {
                q: "Do I need a prescription for all medicines?",
                a: "Prescription medications require a valid doctor’s prescription. OTC products do not.",
              },
              {
                q: "How does the Auto-Pilot refill program work?",
                a: "Set your refill frequency once — Phyber automatically processes and delivers recurring medications.",
              },
              {
                q: "Can I rent medical equipment?",
                a: "Yes. Hospital beds, oxygen concentrators, and wheelchairs can be rented short-term or long-term with home delivery.",
              },
              {
                q: "Do Phyber members get discounts?",
                a: "Yes, members get up to 20% off across medicines, supplements, and med-tech rentals.",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                        FEATURE CARD COMPONENT                              */
/* -------------------------------------------------------------------------- */

type FeatureCardProps = {
  icon: React.ReactNode;
  bg: string;
  title: string;
  text: string;
  image: string;
  id?: string;
};

function FeatureCard({ icon, bg, title, text, image, id }: FeatureCardProps) {
  return (
    <div
      id={id}
      className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl hover:-translate-y-1 transition-transform"
    >
      <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>

      <h3 className="text-xl font-black text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 font-medium mb-4">{text}</p>

      <div className="rounded-2xl overflow-hidden shadow-md h-36 relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}
