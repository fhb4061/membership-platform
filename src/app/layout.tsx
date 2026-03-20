import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Lopeti | Senior Full-Stack Engineer",
  description:
    "Portfolio of Jonathan Lopeti, a Senior Full-Stack Engineer specializing in full-stack web development and architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${fraunces.variable} antialiased`}>
        <TooltipProvider>
          {children}
          <Toaster richColors position="top-right" />
          <SpeedInsights />
        </TooltipProvider>
      </body>
    </html>
  );
}
