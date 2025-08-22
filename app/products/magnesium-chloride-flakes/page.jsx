import Mcf1 from "../../nopage/product/mcf1"
import Mcf2 from "../../nopage/product/mcf2"
import Head from "next/head"


export const metadata = {
  title: "Vasud Exim | Magnesium Chloride Flakes | Industrial & Commercial Use ",
  description:
    "Vasud Exim offers high-purity Magnesium Chloride Flakes in technical grade, ideal for de-icing, construction, moisture control, and industrial applications. Available in 25kg, 50kg, and jumbo bags.",
  keywords: [
    "Magnesium Chloride Flakes",
    "Industrial Magnesium Chloride",
    "Magnesium Chloride De-Icing",
    "Magnesium Chloride Construction",
    "Magnesium Chloride Moisture Control",
    "Magnesium Chloride Supplier India",
    "Magnesium Chloride Exporter",
    "Vasud Exim"
  ],
  alternates: {
    canonical: "https://www.vasudexim.com/products/magnesium-chloride-flakes",
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
    title: "Vasud Exim | Magnesium Chloride Flakes | Industrial & Commercial Use ",
    description:
      "High-purity Magnesium Chloride Flakes in technical grade for de-icing, construction, and moisture control. Available in various packaging options.",
    url: "https://www.vasudexim.com/products/magnesium-chloride-flakes",
    siteName: "Vasud Exim",
    images: [
      {
        url: "https://www.vasudexim.com/magnesium-chloride-flakes.webp", // Replace with actual product image URL
        alt: "Magnesium Chloride Flakes by Vasud Exim",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasud Exim | Magnesium Chloride Flakes | Industrial & Commercial Use ",
    description:
      "Vasud Exim offers high-purity Magnesium Chloride Flakes in technical grade, suitable for de-icing, construction, and moisture control applications.",
    images: ["https://www.vasudexim.com/magnesium-chloride-flakes.webp"], // Replace with actual product image URL
    creator: "@vasudexim",
  },
  metadataBase: new URL("https://vasudexim.com"),
};
export default function Page(){
    return(
        <>
        <Mcf1/>
        <Mcf2/>
        </>
    )
}

