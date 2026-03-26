import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/constants/landing";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const title = "EZIELTS – Complete IELTS Preparation | Score Band 7+";
const description =
  "Expert IELTS coaching for Speaking, Listening, Writing, and Reading. Structured practice, real feedback, and personalised study plans to help you score Band 7+.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | EZIELTS",
  },
  description,
  keywords: [
    "IELTS preparation",
    "IELTS coaching",
    "IELTS online coaching",
    "IELTS Speaking",
    "IELTS Writing",
    "IELTS Listening",
    "IELTS Reading",
    "Band 7 IELTS",
    "IELTS Band 7",
    "IELTS tutor",
    "IELTS training",
    "score Band 7",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title,
    description,
    siteName: "EZIELTS",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
