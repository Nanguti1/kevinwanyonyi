import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { PageTransition } from "./components/animations/PageTransition";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wanyonyikevin.co.ke"),
  title: {
    default: "Laravel, Next.js, and Tailwind CSS Developer in Kenya",
    template: "%s | Kevin Wanyonyi",
  },
  description:
    "Kevin Wanyonyi is a top Full Stack Developer in Kenya specializing in Laravel, Next.js, Tailwind CSS, and scalable web solutions.",
  keywords: [
    "Laravel developer in Kenya",
    "Next.js developer in Kenya",
    "Tailwind CSS developer",
    "Full Stack Developer Nairobi",
    "Web Developer Kenya",
    "Laravel expert Kenya",
    "Next.js portfolio",
    "Freelance developer Kenya",
    "Hire Laravel Developer Kenya",
    "Hire Next.js Developer Kenya",
  ],
  authors: [{ name: "Kevin Wanyonyi", url: "https://wanyonyikevin.co.ke" }],
  creator: "Kevin Wanyonyi",
  publisher: "Kevin Wanyonyi",
  themeColor: "#0f172a",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      sw: "/sw",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wanyonyikevin.co.ke",
    title: "Laravel, Next.js, and Tailwind CSS Developer in Kenya",
    description:
      "Kevin Wanyonyi is a top Full Stack Developer in Nairobi, Kenya with 6+ years of experience in Laravel, Next.js, and Tailwind CSS.",
    siteName: "Kevin Wanyonyi - Full Stack Developer",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kevin Wanyonyi - Laravel and Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Wanyonyi | Laravel & Next.js Developer in Kenya",
    description:
      "Kevin Wanyonyi is a Full Stack Web Developer in Kenya focusing on Laravel, Next.js, and Tailwind CSS. View portfolio, hire or connect.",
    images: ["/images/twitter-image.jpg"],
    site: "@kevinwanyonyi",
    creator: "@kevinwanyonyi",
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

// ✅ Viewport refactored separately
export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0f172a",
  };
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Wanyonyi",
  url: "https://wanyonyikevin.co.ke",
  sameAs: [
    "https://github.com/nanguti",
    "https://linkedin.com/in/kevin-w-wanyonyi",
    "https://twitter.com/profnanguti",
  ],
  jobTitle: "Full Stack Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bachelor of Computer Science",
  },
  description:
    "Kevin Wanyonyi is a Full Stack Developer from Kenya with deep expertise in Laravel, Next.js, Tailwind CSS, MySQL, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${fontSans.variable} bg-gray-950 text-gray-100 antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
