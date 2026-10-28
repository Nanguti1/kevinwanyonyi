import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Kevin Wafula Wanyonyi",
  description: "Get in touch with Kevin Wafula Wanyonyi, Senior Full Stack Software Engineer. Available for Laravel, Next.js, and enterprise software development projects.",
  keywords: [
    "Contact Kevin Wanyonyi",
    "Hire Laravel Developer Kenya",
    "Hire Next.js Developer",
    "Freelance Software Engineer Kenya",
    "Web Development Services",
    "Full Stack Developer Contact",
    "Software Development Services Kenya",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Kevin Wafula Wanyonyi",
    description: "Get in touch with Kevin Wafula Wanyonyi, Senior Full Stack Software Engineer. Available for Laravel, Next.js, and enterprise software development projects.",
    url: "https://wanyonyikevin.co.ke/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
