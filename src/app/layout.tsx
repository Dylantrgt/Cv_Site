import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Site CV",
  description: "CV sur site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1C162E] p-0 w-[100%]`}
      >
        <section className="lg:px-[48px] py-0 bg-[#181322] px-0 w-[99.7%] lg:w-[100%] pt-2 ">
        <NavBar/>
        {children}
        <Footer/>
        </section>
      </body>
    </html>
  );
}
