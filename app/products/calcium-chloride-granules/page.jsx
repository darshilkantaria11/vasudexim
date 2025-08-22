import Ccg1 from "../../nopage/product/ccg1"
import Ccg2 from "../../nopage/product/ccg2"
import Head from "next/head"


export const metadata = {
  title: "Vasud Exim | Calcium Chloride Granules | Industrial & Commercial Use ",
  description:
    "Vasud Exim offers high-purity Calcium Chloride Granules in technical grade, ideal for de-icing, construction, moisture control, and industrial applications. Available in 25kg, 50kg, and jumbo bags.",
  keywords: [
    "Calcium Chloride Granules",
    "Industrial Calcium Chloride",
    "Calcium Chloride De-Icing",
    "Calcium Chloride Construction",
    "Calcium Chloride Moisture Control",
    "Calcium Chloride Supplier India",
    "Calcium Chloride Exporter",
    "Vasud Exim"
  ],
  alternates: {
    canonical: "https://www.vasudexim.com/products/calcium-chloride-granules",
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
    title: "Vasud Exim | Calcium Chloride Granules | Industrial & Commercial Use ",
    description:
      "High-purity Calcium Chloride Granules in technical grade for de-icing, construction, and moisture control. Available in various packaging options.",
    url: "https://www.vasudexim.com/products/calcium-chloride-granules",
    siteName: "Vasud Exim",
    images: [
      {
        url: "https://www.vasudexim.com/calcium-chloride-granules.webp", // Replace with actual product image URL
        alt: "Calcium Chloride Granules by Vasud Exim",
      },
    ],
    locale: "en_US",
    type: "product",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasud Exim | Calcium Chloride Granules | Industrial & Commercial Use ",
    description:
      "Vasud Exim offers high-purity Calcium Chloride Granules in technical grade, suitable for de-icing, construction, and moisture control applications.",
    images: ["https://www.vasudexim.com/calcium-chloride-granules.webp"], // Replace with actual product image URL
    creator: "@vasudexim",
  },
  metadataBase: new URL("https://vasudexim.com"),
};


export default function Page(){
    return(
        <>
        <Ccg1/>
        <Ccg2/>
        </>
    )
}

