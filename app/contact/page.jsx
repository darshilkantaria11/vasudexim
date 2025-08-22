import Contact from "../nopage/contact/contact1"
import Head from "next/head"

export const metadata = {
  title: "Contact Us | Vasud Exim - Global Chemical Trading Company",
  description:
    "Get in touch with Vasud Exim for inquiries about Calcium Chloride (lumps, powders, granules) and Magnesium Chloride flakes. Reach our corporate headquarters in India or connect via email, phone, or WhatsApp for reliable global chemical solutions.",
  keywords: [
    "Contact Vasud Exim",
    "Calcium Chloride Supplier contact",
    "Magnesium Chloride supplier contact",
    "Chemical Trading Company India contact",
    "Vasud Exim support",
    "Chemical Export inquiries"
  ],
  alternates: {
    canonical: "https://vasudexim.com/contact",
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
    title: "Contact Us | Vasud Exim - Global Chemical Trading Company",
    description:
      "Contact Vasud Exim’s corporate office in India or reach out via email, phone, or WhatsApp for inquiries about our Calcium and Magnesium Chloride products and global supply services.",
    url: "https://vasudexim.com/contact",
    siteName: "Vasud Exim",
    images: [
      {
        url: "https://vasudexim.com/Logo.png", // Replace with a contact-specific banner image if available
        alt: "Contact Vasud Exim",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Vasud Exim",
    description:
      "Need chemical trading solutions? Contact Vasud Exim via email, phone, or WhatsApp for inquiries about Calcium Chloride and Magnesium Chloride exports.",
    images: ["https://vasudexim.com/Logo.png"], // Optionally replace with a contact-specific image
    creator: "@vasudexim",
  },
  metadataBase: new URL("https://vasudexim.com"),
};


export default function Page(){
    return(
        <>
        <Contact/>
       
        </>
    )
}

