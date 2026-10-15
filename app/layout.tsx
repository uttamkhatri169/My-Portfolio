import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uttam Khatri | AI/ML Developer & Software Engineer",
  description:
    "I design and deploy ML-driven applications, backed by strong full-stack, DevOps, and system design skills — from model to production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-white antialiased selection:bg-[#FF3B2E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
