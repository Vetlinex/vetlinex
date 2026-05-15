import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css"
import { Footer } from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vetlinex",
  description: "Productos veterinarios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        <Suspense fallback={null}>
          {children}
          <WhatsAppFloatButton />
        </Suspense>
        <Footer/>
      </body>
    </html>
  );
}
