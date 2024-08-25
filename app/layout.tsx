import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { cn } from "@/lib/utils";
import { Raleway } from "next/font/google";

const raleway = Raleway({subsets: ["latin"], variable: "--font-caption"});

export const metadata: Metadata = {
  title: "Gaël Duclocher-Rougelot · Sofware Engineer",
  description: "React.js / Next.js Freelancer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, raleway.variable, "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
