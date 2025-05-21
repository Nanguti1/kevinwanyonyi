// src/app/page.tsx
import { Metadata } from "next";
import BackgroundScene from "./components/animations/BackgroundScene";
import HeroSection from "./components/home/HeroSection";
import TechStack from "./components/home/TechStack";
import ServiceSection from "./components/home/ServiceSection";
import WorkHistory from "./components/home/WorkHistory";
import CollaboratorsSection from "./components/home/CollaboratorsSection";

export const metadata: Metadata = {
  title: "Kevin Wanyonyi | Full Stack Developer in Kenya",
  description:
    "Kevin Wanyonyi is a seasoned Full Stack Developer based in Nairobi, Kenya with over 5 years of experience in Laravel, Next.js, and modern web development.",
  keywords: [
    "Full Stack Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Kenya",
    "Web Development",
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
