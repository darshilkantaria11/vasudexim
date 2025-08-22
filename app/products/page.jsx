import Product1 from "../nopage/product/product1"
import Product2 from "../nopage/product/product2"
import Head from "next/head"

export const metadata = {
  title: "Products | Vasud Exim - Calcium & Magnesium Chloride Supplier",
  description:
    "Explore Vasud Exim’s premium chemical products — Calcium Chloride (lumps, powder 74%, powder 94%, granules) and Magnesium Chloride flakes — suitable for industries like construction, agriculture, de-icing, refrigeration, food processing, and more.",
  keywords: [
    "Calcium Chloride Lumps",
    "Calcium Chloride Powder 74%",
    "Calcium Chloride Powder 94%",
    "Calcium Chloride Granules",
    "Magnesium Chloride Flakes",
    "Chemical Products Supplier",
    "Industrial Chemicals India",
    "Vasud Exim Products"
  ],
  alternates: {
    canonical: "https://vasudexim.com/products",
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
    title: "Products | Vasud Exim - Calcium & Magnesium Chloride Supplier",
    description:
      "Discover Vasud Exim's product range: high-quality Calcium Chloride (lumps, powders, granules) and eco-friendly Magnesium Chloride flakes — designed for moisture control, de-icing, food processing, and more.",
    url: "https://vasudexim.com/products",
    siteName: "Vasud Exim",
    images: [
      {
        url: "https://vasudexim.com/Logo.png", // Replace with a product-focused OG image if available
        alt: "Vasud Exim Product Range",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Vasud Exim",
    description:
      "Check out Vasud Exim’s Calcium Chloride (lumps, powder, granules) and Magnesium Chloride flakes for a variety of industrial applications.",
    images: ["https://vasudexim.com/Logo.png"], // Optionally replace with product imagery
    creator: "@vasudexim",
  },
  metadataBase: new URL("https://vasudexim.com"),
};


export default function Page(){
    return(
        <>
        <Product1/>
        <Product2/>
        </>
    )
}

