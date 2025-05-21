"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../animations/PageTransition";

type TechItem = {
  name: string;
  description: string;
  icon: string;
  category: "language" | "framework";
};

const technologies: TechItem[] = [
  {
    name: "PHP",
    description:
      "Specializing in developing dynamic websites and web applications using PHP, a versatile server-side scripting language.",
    icon: "<?php ?>",
    category: "language",
  },
  {
    name: "Python",
    description:
      "Expertise in Python enables the creation of powerful backend systems and data-driven applications.",
    icon: "🐍",
    category: "language",
  },
  {
    name: "JavaScript",
    description:
      "Utilizing JavaScript to build interactive and responsive user interfaces for modern web applications.",
    icon: "{ }",
    category: "language",
  },
  {
    name: "Laravel",
    description:
      "Developing robust and scalable web applications with Laravel, leveraging its powerful MVC architecture.",
    icon: "🔷",
    category: "framework",
  },
  {
    name: "Django",
    description:
      "Creating secure and efficient web applications using Django, a high-level Python web framework.",
    icon: "🎯",
    category: "framework",
  },
  {
    name: "Express.js",
    description:
      "Building fast and minimalist server-side applications with Express, a flexible Node.js framework.",
    icon: "⚡",
    category: "framework",
  },
  {
    name: "React",
    description:
      "Designing dynamic and component-based user interfaces using React, ensuring high performance and reusability.",
    icon: "⚛️",
    category: "framework",
  },
  {
    name: "Next.js",
    description:
      "Developing optimized and SEO-friendly web applications with Next.js, leveraging its server-side rendering capabilities.",
    icon: "▲",
    category: "framework",
  },
  {
    name: "Vue.js",
    description:
      "Crafting intuitive and reactive user interfaces with Vue.js, focusing on simplicity and flexibility.",
    icon: "🟢",
    category: "framework",
  },
];

export default function TechStack() {
  return (
    <section className="section-padding bg-[rgba(17,24,39,0.5)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Work with the <span className="text-gradient">Best Toolkit</span>
          </h2>
          <p className="text-xl text-[rgba(var(--foreground),0.8)] max-w-2xl mx-auto">
            These are a few of my favorite technologies that I use to build
            modern, scalable, and maintainable applications.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <StaggerItem key={tech.name} className="h-full">
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(59, 130, 246, 0.5)",
                }}
                className="bg-[rgba(31,41,55,0.8)] rounded-xl p-6 h-full border border-[rgba(55,65,81,0.5)] card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3 text-[var(--color-primary)]">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                </div>
                <p className="text-[rgba(var(--foreground),0.8)]">
                  {tech.description}
                </p>
                <div className="mt-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs rounded-full ${
                      tech.category === "language"
                        ? "bg-[rgba(30,58,138,0.5)] text-[rgba(147,197,253,1)]"
                        : "bg-[rgba(88,28,135,0.5)] text-[rgba(216,180,254,1)]"
                    }`}
                  >
                    {tech.category === "language" ? "Language" : "Framework"}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
