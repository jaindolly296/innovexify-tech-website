import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.innovexify.com"),

  title: {
    default: "Innovexify Tech | AI Automation, Data & Digital Solutions",
    template: "%s | Innovexify Tech",
  },

  description:
    "Innovexify Tech provides AI automation, Power BI dashboards, data analytics, API integrations, AI chatbots, software solutions and digital services for modern businesses.",

  keywords: [
    "Innovexify Tech",
    "AI automation services",
    "business automation",
    "Power BI dashboard development",
    "Power BI services",
    "data analytics services",
    "API integration services",
    "AI chatbot development",
    "AI solutions",
    "machine learning services",
    "software development",
    "digital marketing services",
    "social media management",
    "Meta advertising",
    "business intelligence",
  ],

  authors: [
    {
      name: "Innovexify Tech",
      url: "https://www.innovexify.com",
    },
  ],

  creator: "Innovexify Tech",
  publisher: "Innovexify Tech",

  category: "technology",

  applicationName: "Innovexify Tech",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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

  icons: {
    icon: "/images/innovexify-logo.svg",
    shortcut: "/images/innovexify-logo.svg",
    apple: "/images/innovexify-logo.svg",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.innovexify.com",
    siteName: "Innovexify Tech",
    title: "Innovexify Tech | AI Automation, Data & Digital Solutions",
    description:
      "AI automation, Power BI dashboards, data analytics, API integrations, AI chatbots and digital solutions for modern businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Innovexify Tech | AI Automation, Data & Digital Solutions",
    description:
      "AI automation, Power BI dashboards, data analytics, API integrations and digital solutions for modern businesses.",
  },

  alternates: {
    canonical: "https://www.innovexify.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
