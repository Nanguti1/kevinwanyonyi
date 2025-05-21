import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { PageTransition } from "./components/animations/PageTransition";
import { Metadata } from "next";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: {
    default: "Kevin Wanyonyi | Laravel & Next.js Full Stack Developer",
    template: "%s | Kevin Wanyonyi",
  },
  description:
    "Kevin Wanyonyi is a seasoned Full Stack Developer based in Nairobi, Kenya with over 6 years of experience in Laravel, Next.js, and more.",
  keywords: [
    "Laravel developer",
    "Next.js developer",
    "Tailwind CSS",
    "Full Stack Developer",
    "Kenya",
    "Nairobi",
  ],
  authors: [{ name: "Kevin Wanyonyi" }],
  creator: "Kevin Wanyonyi",
  publisher: "Kevin Wanyonyi",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://wanyonyikevin.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wanyonyikevin.co.ke",
    title: "Kevin Wanyonyi | Full Stack Developer",
    description:
      "Kevin Wanyonyi is a seasoned Full Stack Developer based in Nairobi, Kenya with over 5 years of experience.",
    siteName: "Kevin Wanyonyi Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kevin Wanyonyi - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Wanyonyi | Full Stack Developer",
    description:
      "Kevin Wanyonyi is a seasoned Full Stack Developer based in Nairobi, Kenya with over 5 years of experience.",
    images: ["/images/twitter-image.jpg"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
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
