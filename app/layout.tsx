import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

// -------------------------------------------------------
// GLOBAL METADATA (SEO + Social + Favicon)
// -------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL("https://phyber.care"),

  title: {
    default: "Phyber — On-demand care, anywhere.",
    template: "%s | Phyber",
  },

  description:
    "Your unified digital infrastructure for on-demand mental and physical wellbeing — mind, body, consult, at-home care, and more.",

  icons: {
    icon: "/favicon.png",          // UPDATED
    shortcut: "/favicon.png",      // UPDATED
    apple: "/favicon.png",         // UPDATED
  },

  alternates: {
    canonical: "https://phyber.care",
  },

  openGraph: {
    title: "Phyber — On-demand care, anywhere.",
    description:
      "Unified digital infrastructure for wellbeing: mental health, physical care, teleconsultation, on-premise services, store, and digital resources.",
    url: "https://phyber.care",
    siteName: "Phyber",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/brand/og-image.png",       // UPDATED (recommended folder)
        width: 1200,
        height: 630,
        alt: "Phyber – On-demand care, anywhere.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Phyber — On-demand care, anywhere.",
    description:
      "Your digital operating system for wellbeing — mind, body, teleconsults, home care, and more.",
    images: ["/images/brand/og-image.png"],      // UPDATED
    creator: "@phybercare",
  },

  keywords: [
    "mental health",
    "wellbeing",
    "online consult",
    "teleconsultation",
    "therapy online",
    "psychiatry",
    "employee wellness",
    "campus wellbeing",
    "physical wellness",
    "on-demand care",
    "digital health platform",
    "home medical services",
  ],
};

// -------------------------------------------------------
// VIEWPORT
// -------------------------------------------------------
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FFFFFF",
};

// -------------------------------------------------------
// ROOT LAYOUT
// -------------------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Required for Chrome to display P3 colors like Safari */}
        <meta name="color-scheme" content="light only" />
        <meta name="color-gamut" content="p3" />

        {/* =============================================== */}
        {/* ORGANIZATION JSON-LD (SEO BOOST)                */}
        {/* =============================================== */}
        <Script
          id="phyber-org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Phyber",
              "url": "https://phyber.care",
              "logo": "https://phyber.care/images/brand/logo.png",
              "sameAs": [
                "https://www.instagram.com/phybercare/",
                "https://x.com/phybercare",
                "https://www.linkedin.com/company/phybercare/",
                "https://www.facebook.com/phybercare",
              ],
            }),
          }}
        />
      </head>

      <body className="bg-[#F8FAFC] text-slate-900 antialiased flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
