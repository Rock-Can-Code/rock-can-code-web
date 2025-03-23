import { Navigation } from "@/src/views/common/components/nav";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "../../global.css";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { Analytics } from "@/src/views/common/components/analytics";
import { Footer } from "@/src/views/common/components/footer";

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
  src: "../../public/fonts/Oswald-SemiBold.ttf",
  variable: "--font-calsans",
});

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  return (
    <html lang={locale} className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <NextIntlClientProvider>
          <Navigation>
            {children}
          </Navigation>
        </NextIntlClientProvider>
        
        <Footer />
      </body>
    </html>
  );
}
