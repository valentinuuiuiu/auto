import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import StarsCanvas from "@/components/main/StarBackground";
import Skills from "@/components/main/Skills";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merseyside Car Keys",
  description: "Locksmith for emergencyes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>

        <StarsCanvas />
        <Navbar /> 
     
        
        {children}</body>
    </html>
  );
}
