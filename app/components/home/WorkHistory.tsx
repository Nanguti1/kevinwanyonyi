"use client";
import { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

// Sample work history data
const workHistory = [
  {
    company: "Freelance",
    role: "Senior Full-Stack Software Consultant",
    period: "June 2023 — Present",
    startYear: 2023,
    endYear: "Present",
    description: "Designs, builds, deploys and supports software for clients across several industries, usually owning a project from initial requirements through to production and beyond.",
    achievements: [
      "Took projects from requirements through to production, building systems clients rely on for day-to-day operations",
      "Architected Laravel and Django applications designed to handle growing user bases and data volumes",
      "Developed responsive web applications using Next.js, React, Vue.js and Tailwind CSS",
      "Built secure RESTful APIs and integrated third-party platforms, payment gateways, and external services",
      "Automated recurring business workflows using Microsoft Power Automate and custom web tooling",
      "Designed relational database schemas and tuned SQL queries to optimize performance",
      "Deployed and managed production systems on DigitalOcean cloud infrastructure and Linux VPS environments",
      "Configured Nginx web servers, SSL certificates, domain management, and production environments",
      "Managed Docker-based deployments and CI/CD workflows",
      "Wrote comprehensive documentation: deployment guides, API references, and architecture notes"
    ]
  },
  {
    company: "AfriQ Network Solutions Ltd",
    role: "Software Developer",
    period: "May 2022 — May 2023",
    startYear: 2022,
    endYear: 2023,
    description: "Developed and maintained enterprise applications, with a focus on reliability and security in production.",
    achievements: [
      "Developed Laravel systems",
      "Built RESTful APIs",
      "Designed and optimized SQL databases",
      "Supported production deployments",
      "Improved application performance",
      "Resolved production incidents",
      "Worked within an Agile delivery process",
      "Collaborated with cross-functional teams"
    ]
  },
  {
    company: "MwalimuPLUS & Ajira Connect",
    role: "Software Developer",
    period: "October 2018 — April 2022",
    startYear: 2018,
    endYear: 2022,
    description: "Designed and maintained web applications supporting education, recruitment, reporting, and workflow automation.",
    achievements: [
      "Developed applications using Laravel and Yii2",
      "Designed secure authentication systems",
      "Built reusable backend services",
      "Developed reporting dashboards",
      "Optimized SQL performance",
      "Automated business workflows",
      "Maintained production applications",
      "Worked closely with business stakeholders"
    ]
  },
];

export default function WorkHistory() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

                {/* Expandable Details */}
                {expandedIndex === index && (
                  <div className="mt-4 pt-4 border-t border-white/10 animate-fadeIn">
                    <p className="text-gray-400 mb-4">{work.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {work.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-300 text-sm">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="mt-4 text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                  {expandedIndex === index ? (
                    <>
                      <ChevronUp size={16} />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      Show More Details
                    </>
                  )}
                </button>
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
