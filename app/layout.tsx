import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = getSiteUrl();
const shareImage = siteUrl
  ? new URL("/opengraph-image", siteUrl).toString()
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Shobhit Gupta — Full Stack Developer",
    template: "%s | Shobhit Gupta",
  },
  description:
    "Shobhit Gupta is a second-year CSE student at BMSCE who builds practical full-stack products. Explore PawCare, skills, and LeetCode progress.",
  keywords: [
    "Shobhit Gupta",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "BMSCE computer science",
    "PawCare",
    "LeetCode",
  ],
  applicationName: "Shobhit Gupta Portfolio",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    title: "Shobhit Gupta — Full Stack Developer",
    description:
      "Practical full-stack work, startup-minded product building, and the PawCare case study.",
    url: siteUrl?.toString(),
    images: shareImage
      ? [
          {
            url: shareImage,
            width: 1200,
            height: 630,
            alt: "Shobhit Gupta portfolio",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Shobhit Gupta — Full Stack Developer",
    description:
      "Ideas, engineered end to end. Explore my full-stack work and PawCare.",
    images: shareImage ? [shareImage] : undefined,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101311",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${monoFont.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
