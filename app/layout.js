// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Signboard Experts – Dubai's Premier Signage Company | Custom Sign Boards & 3D Letters",
  description:
    "Signboard Experts: Dubai's trusted signage company. Custom 3D acrylic & stainless steel letters, LED sign boards, ACP signage, and indoor branding. Free consultation & 3D mockup. Call +971 55 228 2608.",
  keywords:
    "signboard dubai, signage company dubai, 3d letters dubai, led sign boards dubai, acrylic signage dubai, stainless steel letters dubai, acp signage dubai, office signage dubai, reception logo wall dubai, outdoor signage dubai, indoor signage dubai, wayfinding signage dubai, custom sign boards, signboard experts",
  metadataBase: new URL("https://signboardexperts.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Signboard Experts – Dubai's Premier Signage Company",
    description:
      "Custom signage solutions in Dubai: 3D acrylic & stainless steel letters, LED sign boards, ACP signage, indoor branding, and more. Free consultation and 3D mockup.",
    url: "https://signboardexperts.com",
    siteName: "Signboard Experts",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Signboard Experts – Premium Signage in Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, UAE" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <link rel="canonical" href="https://signboardexperts.com" />
        <meta
          name="author"
          content="Signboard Experts – Dubai's Trusted Signage Company"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Signboard Experts",
              description:
                "Custom signage solutions in Dubai: 3D acrylic & stainless steel letters, LED sign boards, ACP signage, indoor branding, wayfinding, and approvals assistance.",
              url: "https://signboardexperts.com",
              telephone: "+971552282608",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
              openingHours: "Mo-Su 09:00-20:00",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 25.2048,
                  longitude: 55.2708,
                },
                geoRadius: 50000,
              },
              serviceType: [
                "Custom Signage",
                "3D Acrylic Letters",
                "Stainless Steel Letters",
                "LED Sign Boards",
                "ACP Signage",
                "Reception Logo Walls",
                "Indoor Signage",
                "Outdoor Signage",
                "Wayfinding Signage",
                "Glass Graphics",
                "Signage Approvals (DED, DM, RTA)",
              ],
              priceRange: "$$",
              image: "https://signboardexperts.com/images/og-image.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "237",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: [
                "https://www.facebook.com/signboardexperts",
                "https://www.instagram.com/signboardexperts",
                "https://www.linkedin.com/company/signboardexperts",
              ],
            }),
          }}
        />

        {/* Structured Data - Service (more specific) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Custom Signage Fabrication & Installation",
              provider: {
                "@type": "LocalBusiness",
                name: "Signboard Experts",
                telephone: "+971552282608",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dubai",
                  addressCountry: "AE",
                },
                areaServed: "Dubai, UAE",
              },
              description:
                "Design, fabrication, and installation of custom indoor and outdoor signage including 3D acrylic letters, stainless steel letters, LED sign boards, ACP signs, and reception logo walls. Full assistance with DED, Dubai Municipality, RTA, and Civil Defense approvals.",
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does custom signage cost in Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Costs vary based on material, size, and complexity. Acrylic sign boards start from AED 150-300 for small nameplates; 3D acrylic letters from AED 250-1,500 per letter depending on height and illumination; stainless steel letters from AED 400-2,200+ per letter; lightbox signs from AED 1,500-8,000 per sqm. We provide transparent, detailed quotes with no hidden fees.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What approvals are needed for signage in Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Outdoor signage requires approvals from Dubai Municipality, and if roadside, RTA approval. Illuminated signs also need Dubai Civil Defense approval. Businesses in free zones require additional approvals from their respective authority. Signboard Experts handles all approvals on your behalf.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does the signage fabrication and installation take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Typical timeline: design and approvals 2-4 weeks, fabrication 2-4 weeks, installation 1-5 days. Total project time 6-12 weeks depending on complexity and approvals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer a warranty on your signage?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide a comprehensive warranty on both materials and workmanship. LED components typically carry a 2-5 year warranty, and structural signage is guaranteed for years against defects.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which material is best for outdoor signage in Dubai's climate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Stainless steel (Grade 316L for coastal areas) offers the best durability (20+ years). Premium UV-stabilized acrylic is suitable for 5-10 years. ACP with PVDF coating provides excellent weather resistance for large-format signs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you match my brand colors exactly?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. We use Pantone matching and digital color verification to ensure your brand colors are reproduced accurately on acrylic, painted metal, or digitally printed substrates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer design services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our in-house design team creates 3D mockups and detailed design drawings as part of our quotation process. We work with you to refine concepts until you're completely satisfied.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas of Dubai do you serve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We serve all of Dubai including DIFC, Dubai Marina, JLT, Downtown, Business Bay, Deira, Bur Dubai, Al Barsha, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills, JVC, Motor City, and all other communities.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <GoogleTagManager gtmId="GTM-XXXXXXX" />{" "}
        {/* Replace with your GTM ID */}
        {children}
      </body>
    </html>
  );
}
