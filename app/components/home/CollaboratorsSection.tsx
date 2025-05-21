// src/components/home/CollaboratorsSection.tsx
"use client";

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../animations/PageTransition";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

type Collaborator = {
  name: string;
  role: string;
  description: string;
};

const collaborators: Collaborator[] = [
  {
    name: "Patrick Wakasiaka",
    role: "Lead Graphic, Product and UX/UI Designer",
    description:
      "Patrick brings creative expertise in graphic design, product development, and UX/UI, enhancing our projects with visually stunning and user-friendly designs.",
  },
  {
    name: "Johnmark Odoyo",
    role: "Content Writer",
    description:
      "Johnmark writes engaging content that communicates our message effectively, capturing the essence of each project.",
  },
  {
    name: "Brian Mulunda",
    role: "Senior Backend Software Engineer",
    description:
      "Brian builds reliable backend systems, ensuring our applications are secure and perform flawlessly.",
  },
  {
    name: "Victor Odhiambo",
    role: "Senior Software Engineer",
    description:
      "Victor develops complex software solutions, driving our projects to successful completion.",
  },
  {
    name: "Andrew Ananda",
    role: "Mobile Developer",
    description:
      "Andrew focuses on creating dynamic mobile apps that deliver exceptional user experiences.",
  },
  {
    name: "Emmanuel Wanyonyi",
    role: "Junior Software Developer",
    description:
      "Emmanuel contributes fresh ideas and provides support across various projects, bringing enthusiasm to the team.",
  },
];

// Function to get initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("");
}

// Function to get a deterministic color based on name
function getAvatarColor(name: string): string {
  const colors = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-400",
    "from-amber-500 to-orange-400",
    "from-pink-500 to-rose-400",
    "from-indigo-500 to-purple-400",
  ];

  const index =
    name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;
  return colors[index];
}

export default function CollaboratorsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-3 rounded-full">
                <Users size={32} className="text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Collaborators &{" "}
              <span className="text-gradient">Key Contributors</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trusted experts who support my success and help deliver
              exceptional results for clients.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborators.map((collaborator, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 h-full flex flex-col"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${getAvatarColor(
                      collaborator.name
                    )} flex items-center justify-center text-white font-bold`}
                  >
                    {getInitials(collaborator.name)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">
                      {collaborator.name}
                    </h3>
                    <p className="text-sm text-primary">{collaborator.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{collaborator.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <div>
            <p className="text-gray-300 mb-4">
              Interested in collaborating on a project?
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
