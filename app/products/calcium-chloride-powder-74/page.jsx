import Ccp1 from "../../nopage/product/ccp1"
import Ccp2 from "../../nopage/product/ccp2"

import Head from "next/head"

export const metadata = {
  title: "Vasud Exim | Calcium Chloride Powder 74% | Industrial & Commercial Use",
  description:
    "Vasud Exim offers high-purity Calcium Chloride Powder 74%, suitable for de-icing, construction, moisture control, and various industrial applications. Available in 25kg, 50kg, and jumbo bags.",
  keywords: [
    "Calcium Chloride Powder 74%",
    "Industrial Calcium Chloride Powder",
    "Calcium Chloride De-Icing",
    "Calcium Chloride Construction",
    "Calcium Chloride Moisture Control",
    "Calcium Chloride Supplier India",
    "Calcium Chloride Exporter",
    "Vasud Exim"
  ],
  alternates: {
    canonical: "https://www.vasudexim.com/products/calcium-chloride-powder-74",
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
    title: "Vasud Exim | Calcium Chloride Powder 74% | Industrial & Commercial Use",
    description:
      "High-purity Calcium Chloride Powder 74% for de-icing, construction, and moisture control. Available in various packaging options.",
    url: "https://www.vasudexim.com/products/calcium-chloride-powder-74",
    siteName: "Vasud Exim",
    images: [
      {
        url: "https://www.vasudexim.com/calcium-chloride-powder-74.webp", // Replace with actual product image URL
        alt: "Calcium Chloride Powder 74% by Vasud Exim",
      },
    ],
    locale: "en_US",
    type: "product",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasud Exim | Calcium Chloride Powder 74% | Industrial & Commercial Use",
    description:
      "Vasud Exim offers high-purity Calcium Chloride Powder 74%, suitable for de-icing, construction, moisture control, and various industrial applications.",
    images: ["https://www.vasudexim.com/calcium-chloride-powder-74.webp"], // Replace with actual product image URL
    creator: "@vasudexim",
  },
  metadataBase: new URL("https://vasudexim.com"),
};

export default function Page(){
    return(
        <>
        <Ccp1/>
        <Ccp2/>
        </>
    )
}

