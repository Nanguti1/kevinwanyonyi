import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kevin Wafula Wanyonyi",
  description: "Explore Kevin Wanyonyi's portfolio of enterprise software projects including Hospital Information Systems, Insurance Platforms, E-commerce solutions, and more.",
  keywords: [
    "Kevin Wanyonyi Projects",
    "Laravel Projects Portfolio",
    "Next.js Projects",
    "Hospital Information System",
    "Insurance Management Platform",
    "E-commerce Development Kenya",
    "Enterprise Software Projects",
    "Web Development Portfolio",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Kevin Wafula Wanyonyi",
    description: "Explore Kevin Wanyonyi's portfolio of enterprise software projects including Hospital Information Systems, Insurance Platforms, and E-commerce solutions.",
    url: "https://wanyonyi.co.ke/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
