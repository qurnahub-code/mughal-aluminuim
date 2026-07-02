import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mughal Aluminium & Glass | Premium Glass & Aluminum Services Lahore",
  description: "Lahore's trusted partner for premium tempered glass doors, shower cabins, aluminum window frames, office partitions, and custom smart mirrors. Serving DHA, Bahria Town, and Gulberg.",
  keywords: [
    "Mughal Aluminium",
    "Mughal Aluminum Lahore",
    "Tempered Glass Doors Lahore",
    "Glass Shower Cabins Lahore",
    "Aluminum Windows Lahore",
    "Office Glass Partitions Lahore",
    "Smart Mirror Lahore",
    "Aluminium Works DHA Lahore",
    "Bahria Town Aluminum Shop",
    "Glass Fabricators Lahore"
  ],
  openGraph: {
    title: "Mughal Aluminium & Glass | Premium Glass & Aluminum Services Lahore",
    description: "Lahore's trusted partner for premium tempered glass doors, shower cabins, aluminum window frames, office partitions, and custom smart mirrors.",
    url: "https://mughal-aluminium.vercel.app",
    siteName: "Mughal Aluminium & Glass",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Mughal Aluminium & Glass Showroom Lahore"
      }
    ],
    locale: "en_PK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mughal Aluminium & Glass | Premium Glass & Aluminum Services Lahore",
    description: "Lahore's trusted partner for premium tempered glass doors, shower cabins, aluminum window frames, office partitions, and custom smart mirrors.",
    images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&h=630&q=80"]
  },
  alternates: {
    canonical: "https://mughal-aluminium.vercel.app"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
