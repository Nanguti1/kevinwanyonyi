import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Kevin Wafula Wanyonyi",
  description: "Learn about Kevin Wafula Wanyonyi, a Senior Full Stack Software Engineer from Kenya with 8+ years of experience in Laravel, Next.js, React, and system architecture.",
  keywords: [
    "About Kevin Wanyonyi",
    "Senior Full Stack Software Engineer Kenya",
    "Laravel Developer Profile",
    "Next.js Developer Portfolio",
    "Web Developer Kenya",
    "Software Engineer Biography",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Kevin Wafula Wanyonyi",
    description: "Learn about Kevin Wafula Wanyonyi, a Senior Full Stack Software Engineer from Kenya with 8+ years of experience.",
    url: "https://wanyonyi.co.ke/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
