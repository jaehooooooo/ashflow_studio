﻿import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import Link from "next/link";
//import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "최재호(Ash) Portfolio",
  description: "인터랙티브 아트와 프로젝트를 확인해보세요.",
  openGraph: {
    title: "최재호(Ash) Portfolio",
    description: "인터랙티브 아트와 프로젝트를 확인해보세요.",
    url: "https://www.ashflow.info",
    siteName: "Ashflow Studio",
    images: [
      {
        url: "https://www.ashflow.info/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashflow OG Image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-16`} // 🔹 헤더 높이만큼 padding-top 추가
      >
        {/* 🔹 상단 고정 헤더 */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black px-4 py-3 shadow-md">
  <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-white">
    <a href="#" className="block">About me</a>
    <a href="#" className="block">Skills</a>
    <a href="#" className="block">Projects</a>
    <a href="#" className="block">Artworks</a>
    <a href="#" className="block">Career</a>
    <a href="#" className="block">Info</a>
  </nav>
</header>

        {/* 🔹 메인 콘텐츠 */}
        {children}
      </body>
    </html>
  );
}
