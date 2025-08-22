import Export1 from "../nopage/export/export1"
import Export2 from "../nopage/export/export2"
import Head from "next/head"


export const metadata = {
  title: "Export | Vasud Exim - Global Exporter of Calcium & Magnesium Chloride",
  description:
    "Vasud Exim is a trusted exporter of Calcium Chloride (lumps, powder 74%, powder 94%, granules) and Magnesium Chloride flakes. Supplying high-quality chemicals worldwide for industries including food, pharmaceuticals, construction, oil & gas, and water treatment.",
  keywords: [
    "Calcium Chloride Exporter",
    "Magnesium Chloride Exporter",
    "Chemical Export from India",
    "Industrial Chemical Supplier Worldwide",
    "Calcium Chloride Lumps Export",
    "Calcium Chloride Powder Export",
    "Magnesium Chloride Flakes Export",
    "Global Chemical Trading Company",
    "Vasud Exim Export"
  ],
  alternates: {
    canonical: "https://vasudexim.com/export",
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
    title: "Export | Vasud Exim - Global Exporter of Calcium & Magnesium Chloride",
    description:
      "Leading exporter of Calcium Chloride and Magnesium Chloride from India. Vasud Exim delivers high-quality chemicals worldwide for diverse industrial applications.",
    url: "https://vasudexim.com/export",
    siteName: "Vasud Exim",
    images: [
      {
        url: "https://vasudexim.com/Logo.png", // Replace with export/containers OG image if available
        alt: "Vasud Exim Chemical Export Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasud Exim - Global Chemical Exporter",
    description:
      "Exporting Calcium Chloride (lumps, powder, granules) and Magnesium Chloride flakes worldwide. Vasud Exim is your trusted global chemical partner.",
    images: ["https://vasudexim.com/Logo.png"], // Replace with export image if available
    creator: "@vasudexim",
  },
  metadataBase: new URL("https://vasudexim.com"),
};




export default function Page(){
    return(
        <>
        <Export1/>
        <Export2/>
        </>
    )
}

