import { Navigation } from "@/src/views/common/components/nav";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "../global.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Footer } from "../src/views/common/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Rock Can Code",
    template: "%s | Rock Can Code",
  },
  description: "We are a group of young developers eager to create innovative projects that generate a positive social impact.",
  openGraph: {
    title: "Rock Can Code",
    description:
      "We are a group of young developers eager to create innovative projects that generate a positive social impact.",
    url: "https://rockcancode.com",
    siteName: "rockcancode.com",
    images: [
      {
        url: "https://rockcancode.com/rcc.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
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
  twitter: {
    title: "Rock Can Code",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/Oswald-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <SpeedInsights/>
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <Navigation>
          {children}
        </Navigation>
        <Footer />
      </body>
    </html>
  );
}
