import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createRoot } from 'react-dom/client';
import { Footer } from "./components/cards/Footer";
import Navbar from "./components/Navbar";
import RecoilContextProvider from "./recoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilContextProvider>
        <Navbar/>
        <div className=" mt-20">
        {children} 
        </div>
        </RecoilContextProvider>
        </body>
    </html>
  );
}
