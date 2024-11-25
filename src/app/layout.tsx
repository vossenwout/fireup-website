import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FireUp - AI-Powered Startup Idea Generator | Turn Problems Into Opportunities",
  description:
    "Wondering how to get startup ideas? Transform your daily frustrations into viable startup ideas with FireUp.",
  openGraph: {
    title: "FireUp - AI-Powered Startup Idea Generator",
    description:
      "How to get startup ideas? Transform your daily frustrations into viable startup ideas with FireUp. AI-powered problem logging and solution generation for solo founders.",
    images: [
      {
        url: "/og-image.jpg", // Create an attractive OG image
        width: 1200,
        height: 630,
        alt: "FireUp App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FireUp - AI-Powered Startup Idea Generator",
    description: "Transform your daily frustrations into viable startup ideas with FireUp",
    images: ["/og-image.jpg"],
  },
  keywords: [
    "startup ideas",
    "AI startup generator",
    "problem solving",
    "entrepreneurship",
    "startup validation",
    "MVP ideas",
    "solo founder",
  ],
  applicationName: "FireUp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
