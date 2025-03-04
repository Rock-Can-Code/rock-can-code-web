import { Navigation } from "@/src/views/common/components/nav";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "../global.css";
import { Analytics } from "../src/views/common/components/analytics";
import { Metadata } from "@/src/views/common/components/metadata";

export const metadata: Metadata = {
  title: {
    default: "rockcancode.com",
    template: "%s | rockcancode.com",
  },
  description: "un grupo de desarrolladores entusiastas",
  openGraph: {
    title: "rockcancode.com",
    description:
      "un grupo de desarrolladores entusiastas",
    url: "https://rockcancode.com",
    siteName: "rockcancode.com",
    images: [
      {
        url: "https://rockcancode.com/og.png",
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
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <Navigation>
          {children}
        </Navigation>
      </body>
    </html>
  );
}
