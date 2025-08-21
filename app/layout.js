import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./nopage/components/navbar";
import Footer from "./nopage/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased vintage`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
