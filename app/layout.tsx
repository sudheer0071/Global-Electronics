import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createRoot } from 'react-dom/client';
import { Footer } from "./components/cards/Footer";
import Navbar from "./components/Navbar";
import RecoilContextProvider from "./recoilContextProvider";
import Script from "next/script";
import { Analytics } from "./components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Electronics Solutions",
  description: "Industrial Automation Products Distributor in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
     <Analytics/>
      </head>
      <body className={inter.className}>
        <RecoilContextProvider>
        <div className=" mt-20">
        <Navbar/>
        {children} 
        </div>
        </RecoilContextProvider>
        </body>
    </html>
  );
}
