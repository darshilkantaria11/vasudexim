import Industry1 from "../nopage/industry/industry1"
import Industry2 from "../nopage/industry/industry2"
import Head from "next/head"


export const metadata = {
  title: "Industries We Serve | Vasud Exim - Calcium & Magnesium Chloride Applications",
  description:
    "Discover how Vasud Exim supplies Calcium Chloride and Magnesium Chloride to industries including food processing, pharmaceuticals, construction, water treatment, oil & gas, textiles, and de-icing solutions.",
  keywords: [
    "Calcium Chloride Applications",
    "Magnesium Chloride Uses",
    "Industries using Calcium Chloride",
    "Food Processing Chemicals",
    "Pharmaceutical Chemical Supplier",
    "Construction Chemicals Supplier",
    "Water Treatment Chemicals",
    "Oil and Gas Chemicals",
    "De-icing Chemicals",
    "Textile Industry Chemicals",
    "Vasud Exim"
  ],
  alternates: {
    canonical: "https://vasudexim.com/industries",
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
    title: "Industries We Serve | Vasud Exim - Calcium & Magnesium Chloride Applications",
    description:
      "Vasud Exim provides Calcium Chloride and Magnesium Chloride for industries like food, pharma, water treatment, oil & gas, textiles, construction, and de-icing.",
    url: "https://vasudexim.com/industries",
    siteName: "Vasud Exim",
    images: [
      {
        url: "https://vasudexim.com/Logo.png", // Replace with industry-specific OG image if available
        alt: "Vasud Exim - Industries Served",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Vasud Exim",
    description:
      "Explore how Vasud Exim’s Calcium Chloride and Magnesium Chloride products are used across industries: pharma, food, construction, oil & gas, textiles, and more.",
    images: ["https://vasudexim.com/Logo.png"], // Replace with actual image if you have industry banner
    creator: "@vasudexim", // Optional Twitter handle
  },
  metadataBase: new URL("https://vasudexim.com"),
};



export default function Page(){
    return(
        <>
        <Industry1/>
        <Industry2/>
        </>
    )
}

