import Home1 from "./nopage/home/home1"
import Home3 from "./nopage/home/home3"
import Home4 from "./nopage/home/home4"
import Home5 from "./nopage/home/home5"

import Head from "next/head"

export const metadata = {
  title: "Vasud Exim | Calcium Chloride & Magnesium Chloride Supplier",
  description:
    "Vasud Exim is a leading chemical trading company supplying Calcium Chloride (lumps, powder 74%, powder 94%, granules) and Magnesium Chloride flakes. Trusted exporter and supplier for industrial and commercial applications.",
  keywords: [
    "Calcium Chloride Supplier",
    "Calcium Chloride Lumps",
    "Calcium Chloride Powder 74%",
    "Calcium Chloride Powder 94%",
    "Calcium Chloride Granules",
    "Magnesium Chloride Flakes",
    "Chemical Trading Company India",
    "Industrial Chemicals Exporter",
    "Vasud Exim"
  ],
  alternates: {
    canonical: "https://vasudexim.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "Vasud Exim", url: "https://vasudexim.com" }],
  creator: "Vasud Exim",
  publisher: "Vasud Exim",
  openGraph: {
    title: "Vasud Exim | Calcium Chloride & Magnesium Chloride Supplier",
    description:
      "Leading supplier & exporter of Calcium Chloride (lumps, powder, granules) and Magnesium Chloride flakes for industrial applications.",
    url: "https://vasudexim.com",
    siteName: "Vasud Exim",
    images: [
      {
        url: "https://vasudexim.com/Logo.png", // Replace with actual OG image
        alt: "Vasud Exim Chemical Trading Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasud Exim - Calcium & Magnesium Chloride Supplier",
    description:
      "Trusted supplier of Calcium Chloride (powder, lumps, granules) & Magnesium Chloride flakes. Exporting industrial chemicals worldwide.",
    images: ["https://vasudexim.com/Logo.png"], // Replace with actual image
    creator: "@vasudexim", // Optional Twitter handle
  },
  metadataBase: new URL("https://vasudexim.com"),
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vasud Exim - Calcium & Magnesium Chloride Supplier",
    "url": "https://vasudexim.com",
    "description":
      "Vasud Exim is a trusted supplier and exporter of Calcium Chloride (lumps, powder 74%, powder 94%, granules) and Magnesium Chloride flakes for industrial applications.",
    "publisher": {
      "@type": "Organization",
      "name": "Vasud Exim",
      "url": "https://vasudexim.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vasudexim.com/Logo.png"
      }
    },
    "mainEntity": {
      "@type": "Product",
      "name": "Calcium Chloride & Magnesium Chloride",
      "description": "High-quality Calcium Chloride (lumps, powder, granules) and Magnesium Chloride flakes supplied by Vasud Exim.",
      "brand": {
        "@type": "Brand",
        "name": "Vasud Exim"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://vasudexim.com/contact",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "India",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales & Support",
      "email": "info@vasudexim.com",
      "url": "https://vasudexim.com/contact"
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Home1 />
      
      <Home3 />
      <Home4 />
      <Home5 />
    </>
  );
}
