import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://nelsun-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nelsun Tea Company — Global Export & Private Label Tea Solutions",
    template: "%s · Nelsun Tea Company",
  },
  description:
    "Nelsun Tea Company is a vertically integrated tea manufacturer, blender and global bulk supplier headquartered in Delhi, India — specialising in BOPSM Assam CTC black tea, bulk container export and private label packaging.",
  keywords: [
    "Assam CTC tea exporter",
    "BOPSM black tea",
    "bulk tea supplier India",
    "private label tea manufacturer",
    "tea contract packing",
    "Nelsun Tea Company",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nelsun Tea Company",
    title: "Nelsun Tea Company — Global Export & Private Label Tea Solutions",
    description:
      "High-grade BOPSM Assam CTC black tea, green teas and custom blends. Bulk container export and end-to-end private label packaging, direct from origin.",
    images: [{ url: "/images/hero-plantation.jpg", width: 2200, height: 1467 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelsun Tea Company — Global Export & Private Label Tea Solutions",
    description:
      "High-grade BOPSM Assam CTC black tea, green teas and custom blends. Bulk container export and private label packaging, direct from origin.",
    images: ["/images/hero-plantation.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1C3B29",
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nelsun Tea Company",
  url: siteUrl,
  description:
    "Vertically integrated tea manufacturer, blender and global bulk supplier of BOPSM Assam CTC black tea, green teas and custom blends.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  email: "vseth1@yahoo.in",
  telephone: "+91-9818204877",
  slogan: "Global Export & Private Label Tea Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
