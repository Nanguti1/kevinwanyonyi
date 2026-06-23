// src/app/page.tsx
import { Metadata } from "next";
import BackgroundScene from "./components/animations/BackgroundScene";
import HeroSection from "./components/home/HeroSection";
import TechStack from "./components/home/TechStack";
import ServiceSection from "./components/home/ServiceSection";
import WorkHistory from "./components/home/WorkHistory";
import CollaboratorsSection from "./components/home/CollaboratorsSection";

export const metadata: Metadata = {
  title: "Kevin Wafula Wanyonyi | Senior Full Stack Software Engineer",
  description:
    "Kevin Wafula Wanyonyi is a Senior Full Stack Software Engineer based in Nairobi, Kenya with 7+ years of experience in Laravel, Next.js, React, and system architecture.",
  keywords: [
    "Senior Full Stack Software Engineer",
    "Laravel Developer",
    "Next.js Developer",
    "Kenya",
    "Web Development",
    "System Architecture",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Animated Background */}
      <BackgroundScene />

      {/* Hero Section */}
      <HeroSection />

      {/* Tech Stack */}
      <TechStack />

      {/* Services */}
      <ServiceSection />

      {/* Work History */}
      <WorkHistory />

      {/* Collaborators */}
      <CollaboratorsSection />

      {/* Newsletter Signup - Removed but could be added here */}
    </>
  );
}
