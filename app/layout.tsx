import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { CursorFollower } from "@/components/ui/cursor-follower";
import { StructuredData } from "@/components/seo/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nguyenhongquan-portfolio.vercel.app'), // TODO: Update with actual domain
  title: {
    default: "Nguyen Hong Quan - Senior Fullstack Developer",
    template: "%s | Nguyen Hong Quan",
  },
  description:
    "Senior Fullstack Developer specializing in Next.js, React, and modern web technologies. 5+ years of experience building scalable applications with strong frontend expertise.",
  keywords: [
    "Fullstack Developer",
    "Senior Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Frontend Developer",
    "Vietnam",
    "Web Developer",
    "NestJS",
    "Node.js",
  ],
  authors: [{ name: "Nguyen Hong Quan", url: "https://nguyenhongquan-portfolio.vercel.app" }],
  creator: "Nguyen Hong Quan",
  publisher: "Nguyen Hong Quan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nguyenhongquan-portfolio.vercel.app",
    title: "Nguyen Hong Quan - Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer specializing in Next.js, React, and modern web technologies.",
    siteName: "Nguyen Hong Quan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Hong Quan - Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer specializing in Next.js, React, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SkipToContent />
          <CursorFollower />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

