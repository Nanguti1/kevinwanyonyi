"use client";
import { useEffect, useState } from "react";
import { FadeIn } from "../components/animations/PageTransition";
import BackgroundScene from "../components/animations/BackgroundScene";

const projects = [
  {
    title: "MwalimuPLUS",
    description:
      "An interactive digital learning platform for students, parents, and teachers, enhancing the educational experience in Kenya.",
  },
  {
    title: "Simplifi Networks",
    description:
      "A provider of advanced telecommunications solutions in East Africa, offering products that enhance networking capabilities for businesses.",
  },
  {
    title: "Ajira Telematics",
    description:
      "Providing advanced telematics solutions tailored for fleet management, including GPS tracking and data analytics to improve logistics.",
  },
  {
    title: "2B Gamers Store",
    description:
      "An online hub for gaming enthusiasts in Nairobi, offering a wide range of consoles, games, and accessories.",
  },
  {
    title: "Forever Living Products",
    description:
      "A website focused on health and wellness, offering natural products derived from aloe vera and promoting business opportunities.",
  },
  {
    title: "Ajira Connect",
    description:
      "A specialized platform offering fleet management and vehicle tracking solutions for enhanced operational efficiency.",
  },
  {
    title: "Homeschool Africa",
    description:
      "A resource for parents seeking to homeschool their children, providing educational materials and support.",
  },
  {
    title: "City Spy",
    description:
      "A platform providing news, insights, and resources for urban living and development.",
  },
  {
    title: "Kevin Wanyonyi Portfolio",
    description:
      "Showcasing my web development skills and projects, demonstrating my expertise in full stack development.",
  },
];

const ProjectsPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <BackgroundScene />
      <div className="relative overflow-hidden min-h-screen">
        {/* Header With Parallax Effect */}
        <div
          className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, rgba(30, 41, 59, 0) 70%)",
          }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              opacity: Math.max(0, 1 - scrollY / 500),
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-blue-500/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-purple-500/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border border-indigo-500/20"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-gradient">My Projects</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                A showcase of my web development projects.
              </p>
            </FadeIn>
          </div>
        </div>
        {/* Main Content */}
        <div className="container-custom pb-24">
          <FadeIn direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {projects.map((project, idx) => (
                <div
                  key={project.title}
                  className="glass-effect p-6 rounded-2xl border border-white/10 shadow-lg card-hover h-full flex flex-col"
                >
                  <h2 className="text-xl font-bold mb-2 text-gradient">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 flex-1">{project.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
