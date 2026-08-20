import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BackToTop } from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "ZENMOTION | Cinematic Video Editing & Motion Design",
    template: "%s | ZENMOTION"
  },
  description: "An award-winning creative agency specializing in high-end video editing, motion design, color grading, and visual effects for forward-thinking brands.",
  keywords: ["video editing", "motion design", "VFX", "creative agency", "color grading", "post-production", "commercials"],
  authors: [{ name: "Zenmotion Studios" }],
  creator: "Zenmotion Studios",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zenmotion.studio",
    title: "ZENMOTION | Cinematic Video Editing & Motion Design",
    description: "An award-winning creative agency specializing in high-end video editing, motion design, color grading, and visual effects for forward-thinking brands.",
    siteName: "ZENMOTION",
    images: [{
      url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2670&auto=format&fit=crop",
      width: 1200,
      height: 630,
      alt: "Zenmotion Studios Preview"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZENMOTION | Cinematic Video Editing & Motion Design",
    description: "An award-winning creative agency specializing in high-end video editing, motion design, color grading, and visual effects.",
    creator: "@zenmotion",
    images: ["https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2670&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col cursor-none font-sans bg-background text-foreground">
        <SmoothScroll />
        <NoiseOverlay />
        <Preloader />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
