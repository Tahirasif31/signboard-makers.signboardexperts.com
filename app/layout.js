// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emergency Plumber Dubai | FAM Plumbing – 24/7 Plumbing Services",
  description:
    "FAM Plumbing Dubai: #1 emergency plumber in Dubai. 24/7 same‑day service, engineer‑led diagnostics, transparent pricing. Expert plumbing for leaks, drains, water heaters & more. Call +971 52 580 1764.",
  keywords:
    "plumber dubai, emergency plumber dubai, plumbing services dubai, leak detection dubai, drain cleaning dubai, blocked drain dubai, water heater repair dubai, geyser repair dubai, toilet repair dubai, tap repair dubai, bathroom plumbing dubai, kitchen plumbing dubai, pipe repair dubai, re-piping dubai, 24 hour plumber dubai, plumber near me",
  metadataBase: new URL("https://famplumbingdubai.ae"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Emergency Plumber Dubai | FAM Plumbing – 24/7 Plumbing Services",
    description:
      "24/7 emergency plumbing in Dubai. Engineer‑led diagnostics, same‑day service, transparent pricing. Licensed plumbers for all plumbing issues.",
    url: "https://famplumbingdubai.ae",
    siteName: "FAM Plumbing Dubai - Engineer-Led Plumbing Specialists",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FAM Plumbing Dubai - Emergency Plumber Service in Dubai",
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
        <link rel="canonical" href="https://famplumbingdubai.ae" />
        <meta
          name="author"
          content="FAM Plumbing Dubai - Engineer-Led Plumbing Specialists"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
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
              name: "FAM Plumbing Dubai",
              description:
                "Emergency plumbing, leak detection, drain cleaning & water heater repair in Dubai",
              url: "https://famplumbingdubai.ae",
              telephone: "+971525801764",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
              openingHours: "Mo-Su 00:00-23:59",
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
                  opens: "00:00",
                  closes: "23:59",
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
                "Emergency Plumbing",
                "Leak Detection",
                "Drain Cleaning",
                "Water Heater Repair",
                "Geyser Installation",
                "Toilet Repair",
                "Tap & Mixer Repair",
                "Pipe Replacement",
                "Bathroom Plumbing",
                "Kitchen Plumbing",
              ],
              priceRange: "$$",
              image: "https://famplumbingdubai.ae/images/og-image.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: [
                "https://www.facebook.com/famplumbingdubai",
                "https://www.instagram.com/famplumbingdubai",
                "https://www.linkedin.com/company/famplumbingdubai",
              ],
            }),
          }}
        />

        {/* Structured Data - Plumbing Service (more specific) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Plumbing",
              provider: {
                "@type": "LocalBusiness",
                name: "FAM Plumbing Dubai",
                telephone: "+971525801764",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Dubai",
                  addressCountry: "AE",
                },
                areaServed: "Dubai, UAE",
              },
              description:
                "24/7 emergency plumbing, leak detection, drain cleaning, water heater repair, and comprehensive plumbing solutions.",
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
                  name: "How much does plumbing service in Dubai typically cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our pricing is transparent: AED 99 for the first hour diagnostic visit (deducted from repair cost). Repairs like tap replacement start from AED 150, toilet repairs from AED 250, drain cleaning from AED 300, and water heater repairs from AED 350. We provide a fixed-price quote after diagnosis—no hidden fees.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How quickly can you get a plumber to my location in Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For emergencies, we aim to arrive within 45 minutes. Standard service requests are scheduled same-day or next-day at your convenience. We cover all Dubai communities including Marina, JLT, Palm, Arabian Ranches, Downtown, Business Bay, Deira, and more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are your plumbers licensed and insured?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. All our plumbers are licensed by Dubai Municipality and fully insured. We also comply with SABER product safety regulations. Your property is protected.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you guarantee your plumbing repairs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we stand behind our work with a comprehensive warranty on both parts and labor. The duration depends on the repair type, but we always provide peace of mind.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What causes low water pressure in my apartment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Low pressure can be caused by a partially closed main valve, a faulty pressure reducing valve (PRV), scale buildup in aerators, or hidden leaks. Our technicians use pressure gauges to diagnose the exact cause and fix it systematically.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer commercial plumbing services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide tailored plumbing maintenance contracts for offices, restaurants, retail stores, and commercial buildings. Contact us for a custom quote.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I prevent blocked drains in my home?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Regular maintenance helps: avoid pouring grease down sinks, use drain strainers to catch hair, and flush drains with hot water weekly. We also offer professional drain cleaning and CCTV inspections to keep your drains clear.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you repair all brands of water heaters?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We repair all major brands including Ariston, Rheem, Super General, Bosch, and local UAE brands. Our technicians are certified to work on both tankless and storage-type geysers.",
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
