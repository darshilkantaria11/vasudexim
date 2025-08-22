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
