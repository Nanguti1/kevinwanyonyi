"use client";
import { useEffect, useState } from "react";
import { FadeIn } from "../components/animations/PageTransition";
import BackgroundScene from "../components/animations/BackgroundScene";
import { ChevronDown, ChevronUp, Briefcase, Code, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";

const projects = [
  {
    title: "Hamaline Insurance Management Platform",
    role: "Lead Solution Architect & Software Developer",
    overview: "A comprehensive enterprise-grade insurance management platform built to handle end-to-end insurance workflows.",
    problem: "Inefficient and manual workflows for policy administration, member tracking, and claims processing, which lacked secure integration channels and auditing.",
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Git"],
    features: [
      "Policy administration modules for active and archive policies",
      "Member management system with status tracking and history logs",
      "Automated claims processing and verification system",
      "Reporting and analytics dashboard for operational insights",
      "Role-Based Access Control (RBAC) and authentication systems"
    ],
    responsibilities: [
      "Conducted extensive stakeholder engagement and requirement elicitation sessions",
      "Designed full application architecture and relational database structures",
      "Developed main policy management and claims processing modules",
      "Integrated secure third-party and internal APIs",
      "Led server deployment, performance optimization, and production support"
    ],
    impact: "Streamlined operational workflows, reduced claim processing turnaround times, enhanced auditing capabilities, and secured sensitive policy and member data.",
    challenges: "Integrating multiple independent systems (claims, policy creation, reporting) into a single unified workspace while maintaining low response times.",
  },
  {
    title: "BLVDGuide Marketplace Platform",
    role: "Solution Architect & Full-Stack Developer",
    overview: "A specialized multi-vendor marketplace platform supporting the discovery and management of coworking spaces, conference venues, wedding venues, studios, and serviced offices.",
    problem: "The lack of a consolidated, responsive, and real-time portal for finding and booking local workspaces, studios, and event venues.",
    technologies: ["Laravel", "React.js", "Inertia.js", "MySQL", "Tailwind CSS", "Git"],
    features: [
      "Dynamic search engine with location and capacity filters",
      "Interactive workspace listing and registration workflows for hosts",
      "Real-time booking and availability calendar management",
      "User profile management and secure role-based access control (RBAC)",
      "Fully responsive and mobile-friendly UI/UX"
    ],
    responsibilities: [
      "Defined platform architecture, domain models, and entity-relationship diagrams",
      "Developed advanced search, filtering, and listing management algorithms",
      "Built responsive, dynamic front-end interfaces using React and Tailwind CSS",
      "Implemented secure authentication and user management APIs",
      "Designed and optimized the database schema to handle high-frequency booking requests"
    ],
    impact: "Created a unified marketplace that enabled venue hosts to monetize their spaces and simplified the booking process for end-users, boosting bookings and user retention.",
    challenges: "Synchronizing listing availability in real-time across dynamic calendars to avoid double-bookings.",
  },
  {
    title: "2B Gamers E-Commerce Platform",
    role: "Full-Stack Software Developer",
    overview: "A tailored e-commerce solution built for gaming enthusiasts, enabling console, game, and accessory purchasing with local payment integration.",
    problem: "Slow manual checkout pipelines, lack of automated inventory tracking, and missing local mobile payment channels (like M-Pesa).",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "REST APIs", "M-Pesa API"],
    features: [
      "Automated product inventory tracking and catalog management",
      "Intuitive shopping cart and checkout pipeline",
      "Integrated M-Pesa payment gateway for real-time transactions",
      "Customer account creation and order tracking history",
      "Admin dashboard for product uploads and order fulfillment"
    ],
    responsibilities: [
      "Designed complete commerce architecture and domain models",
      "Integrated M-Pesa payment APIs and transaction validation webhooks",
      "Developed REST APIs supporting shopping cart actions and order status tracking",
      "Built and styled product catalog and shopping cart interfaces",
      "Optimized query performance and platform load times"
    ],
    impact: "Automated the purchasing cycle, significantly reduced transaction abandonment rates via instant M-Pesa checkouts, and provided accurate real-time inventory levels.",
    challenges: "Handling real-time payment reconciliation and ensuring transactions are secure and resilient to network dropouts.",
  },
  {
    title: "Enterprise CRM Platform",
    role: "Software Developer",
    overview: "A custom customer relationship management (CRM) solution built to streamline lead generation, customer tracking, and sales workflow automation.",
    problem: "Disconnected sales pipelines and scattered contact information leading to delayed client communications and poor operational analytics.",
    technologies: ["Python", "Django", "PostgreSQL", "REST APIs", "Git"],
    features: [
      "Centralized customer directory and lead tracking pipeline",
      "Workflow automation and task scheduling triggers",
      "Relational contact mapping and activity logging",
      "Analytical report generator for team sales performance",
      "Authentication and secure role-based access controls"
    ],
    responsibilities: [
      "Developed core backend business logic and database migrations using Django",
      "Designed highly normalized relational database structures in PostgreSQL",
      "Created RESTful APIs to feed client-facing dashboards and applications",
      "Implemented security controls including authentication and RBAC",
      "Provided ongoing support, bug fixing, and feature enhancements"
    ],
    impact: "Centralized client management, accelerated the lead-to-conversion lifecycle, and gave managers actionable data on individual and team performance.",
    challenges: "Ensuring complex customer relation maps (many-to-many structures) could be queried quickly without database overhead.",
  },
  {
    title: "Simplifi Networks Platform",
    role: "Software Developer",
    overview: "An enterprise platform built to support telecommunications and networking product distribution operations across East Africa.",
    problem: "Manual stock management and distribution tracking for thousands of physical telecommunication devices.",
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Git"],
    features: [
      "Comprehensive product catalog supporting rich details and serial number tracking",
      "Backend services for inventory tracking and warehouse distribution",
      "Integration modules for partners and distributors",
      "Deployment configuration and server administration modules"
    ],
    responsibilities: [
      "Designed product catalog architecture and relational database structures",
      "Developed backend web services, middleware, and integration endpoints",
      "Built internal content and information management tools",
      "Supported server deployment and infrastructure planning"
    ],
    impact: "Minimized stock discrepancy, improved order fulfillment accuracy, and simplified partner integration and data sharing.",
    challenges: "Structuring the product catalog to support complex, hierarchical categories and varied SKU metadata dynamically.",
  },
  {
    title: "MwalimuPLUS Platform",
    role: "Software Developer",
    overview: "An interactive, intelligent digital learning platform tailored for primary and secondary students, teachers, and parents in Kenya.",
    problem: "Lack of interactive, real-time evaluation tools for students learning remotely, along with missing analytics dashboards for parents and teachers.",
    technologies: ["Yii2", "Laravel", "JavaScript", "SQL", "Git"],
    features: [
      "Interactive learning modules and problem-solving modules for students",
      "Real-time analytics dashboards for parents to monitor progress",
      "Teaching management system for lesson planning and assignments",
      "Detailed reporting modules for student performance",
      "Secure authentication and permission management"
    ],
    responsibilities: [
      "Developed primary web applications and interfaces using Yii2, Laravel, and JavaScript",
      "Built role-based authentication and authorization mechanisms for multiple user categories",
      "Developed rich progress reporting dashboards and data exports",
      "Designed and optimized complex SQL queries for student learning logs",
      "Maintained production environments and resolved operational support tickets"
    ],
    impact: "Enabled thousands of Kenyan students to learn remotely with real-time feedback, providing parents and educators with granular performance insights.",
    challenges: "Optimizing database queries to aggregate millions of individual student quiz responses and actions into real-time reporting dashboards.",
  },
  {
    title: "Ajira Connect Fleet Management",
    role: "Software Developer",
    overview: "An advanced fleet tracking and telematics application designed to optimize fleet routing, driver logs, and fuel management.",
    problem: "Lack of a centralized portal to process telemetry data in real-time, resulting in fleet tracking gaps and manual reporting.",
    technologies: ["Yii2", "Laravel", "JavaScript", "SQL", "Git", "REST APIs"],
    features: [
      "Real-time vehicle location and telemetry tracking",
      "Comprehensive reporting dashboard for fuel consumption and idle times",
      "Driver management and route scheduling logs",
      "Geofencing and instant alerts for route violations",
      "Robust API integration with GPS tracking hardware"
    ],
    responsibilities: [
      "Developed web modules and backend logic using Yii2, Laravel, and JavaScript",
      "Implemented APIs to receive and parse telemetry data packets",
      "Built vehicle activity logging dashboards and export features",
      "Designed optimized SQL databases to log massive telemetry data points",
      "Participated in Agile sprints, feature development, and software testing"
    ],
    impact: "Reduced fuel waste, minimized unauthorized vehicle use, and streamlined logistics operations for client fleets.",
    challenges: "Handling high volumes of concurrent HTTP requests containing GPS coordinates and processing them without blocking main workflows.",
  },
  {
    title: "AfriQ Network Solutions Enterprise Platform",
    role: "Software Developer",
    overview: "An enterprise platform and suite of business services designed to streamline networking product distributions and operations.",
    problem: "A legacy system with database bottlenecks and slow reporting response times, causing friction in partner operations.",
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Git"],
    features: [
      "High-performance backend APIs for internal and external consumers",
      "Interactive frontend views for enterprise administration",
      "Inventory reconciliation and partner reporting modules",
      "Agile-based software lifecycle enhancements"
    ],
    responsibilities: [
      "Developed scalable RESTful APIs and business services using Laravel",
      "Built dynamic, responsive frontend components for partner dashboards",
      "Refactored legacy MySQL database schemas and optimized slow SQL queries",
      "Diagnosed, debugged, and resolved critical production issues",
      "Collaborated closely with developers, QA testers, and business analysts in Agile sprints"
    ],
    impact: "Significantly improved application response times, resolved long-standing database bottlenecks, and enhanced data reliability for enterprise clients.",
    challenges: "Debugging complex, undocumented legacy codebases to identify root causes of production bugs without interrupting daily operations.",
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg card-hover h-full flex flex-col transition-all duration-300">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gradient mb-2">{project.title}</h2>
        
        <div className="flex items-center gap-2 mb-4 text-sm text-blue-400 font-medium">
          <Briefcase size={14} />
          <span>{project.role}</span>
        </div>
        
        <p className="text-gray-300 mb-6 text-[15px] leading-relaxed">{project.overview}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs bg-gray-800/80 border border-gray-700 text-gray-300 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 pt-6 border-t border-white/10 text-gray-300 text-[14px] space-y-5 animate-fadeIn">
          <div>
            <h4 className="font-bold text-blue-400 flex items-center gap-1.5 mb-1.5">
              <Lightbulb size={14} /> Problem Solved
            </h4>
            <p className="leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h4 className="font-bold text-purple-400 flex items-center gap-1.5 mb-1.5">
              <AlertTriangle size={14} /> Challenge Solved
            </h4>
            <p className="leading-relaxed">{project.challenges}</p>
          </div>

          <div>
            <h4 className="font-bold text-pink-400 flex items-center gap-1.5 mb-1.5">
              <Code size={14} /> Key Features
            </h4>
            <ul className="list-disc pl-5 space-y-1 leading-relaxed">
              {project.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-yellow-500 flex items-center gap-1.5 mb-1.5">
              <Briefcase size={14} /> Responsibilities
            </h4>
            <ul className="list-disc pl-5 space-y-1 leading-relaxed">
              {project.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-emerald-400 flex items-center gap-1.5 mb-1.5">
              <CheckCircle2 size={14} /> Business Impact
            </h4>
            <p className="leading-relaxed">{project.impact}</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-6 w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-colors cursor-pointer text-gray-300"
      >
        <span>{isOpen ? "Hide Details" : "View Details & Impact"}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
    </div>
  );
}

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
                A showcase of key systems and applications I have architected and developed.
              </p>
            </FadeIn>
          </div>
        </div>
        {/* Main Content */}
        <div className="container-custom pb-24">
          <FadeIn direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
