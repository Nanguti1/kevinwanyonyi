"use client";
import { useState } from "react";
import { Briefcase } from "lucide-react";

// Sample work history data
const workHistory = [
  {
    company: "Eclectics IO",
    role: "Senior Software Developer",
    period: "2024 — Present",
    startYear: 2024,
    endYear: "Present",
  },
  {
    company: "Freelancer",
    role: "Fullstack Software Developer",
    period: "2023 — 2024",
    startYear: 2023,
    endYear: 2024,
  },
  {
    company: "AfriQ Networks Solution Limited",
    role: "Fullstack Developer",
    period: "2022 — 2023",
    startYear: 2022,
    endYear: 2023,
  },
  {
    company: "Ajira Connect & MwalimuPLUS",
    role: "Software Developer",
    period: "2018 — 2022",
    startYear: 2018,
    endYear: 2022,
  },
];

export default function WorkHistory() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A journey through my professional career, showcasing my growth and
            expertise in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {workHistory.map((work, index) => (
            <div
              key={index}
              className="relative pl-12 pb-20 last:pb-8"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline connector */}
              {index < workHistory.length - 1 && (
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              )}

              {/* Experience dot */}
              <div
                className={`absolute left-0 top-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center transform transition-all duration-300 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              >
                <Briefcase size={16} className="text-white" />
              </div>

              {/* Content */}
              <div
                className={`glass-effect rounded-xl p-6 md:p-8 transition-all duration-300 shadow-lg ${
                  hoveredIndex === index
                    ? "transform -translate-y-1 shadow-blue-500/20"
                    : ""
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold">{work.company}</h3>
                  <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium inline-block">
                    {work.period}
                  </span>
                </div>
                <p className="text-xl text-gray-300 mb-2">{work.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/about"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-colors shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
          >
            Learn More About My Experience
          </a>
        </div>
      </div>
    </section>
  );
}
