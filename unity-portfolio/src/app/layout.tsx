import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unity Portfolio",
  description: "Ash-Studio",
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
        <header className="fixed top-0 left-0 w-full z-50 bg-black px-8 py-4 shadow-md">
          <nav className="flex space-x-10 text-sm font-medium">
            <a href="#" className="text-white block">제품</a>
            <a href="#" className="text-white block">솔루션</a>
            <a href="#" className="text-white block">리소스</a>
            <a href="#" className="text-white block">커뮤니티</a>
            <a href="#" className="text-white block">레벨업 아카데미</a>
            <a href="#" className="text-white block">문의하기</a>
          </nav>
        </header>

        {/* 🔹 메인 콘텐츠 */}
        {children}
      </body>
    </html>
  );
}
