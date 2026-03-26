import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "EZIELTS – IELTS Speaking Training",
  description:
    "Stop memorising answers. Learn to speak naturally and score Band 7+ with structured IELTS Speaking practice and real feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        spaceGrotesk.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
