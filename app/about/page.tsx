"use client";
import { useEffect, useState } from "react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/PageTransition";
import BackgroundScene from "../components/animations/BackgroundScene";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Code,
  Database,
  Layout,
  Server,
  Cpu,
  Wrench,
  Shield,
} from "lucide-react";

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <BackgroundScene />

      <div className="relative overflow-hidden min-h-screen">
        {/* Header With Parallax Effect */}
        <div
          className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden"
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-500/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-purple-500/20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-indigo-500/20"></div>
          </div>

          <div className="relative z-10 text-center px-4">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-gradient">Senior Full-Stack Engineer</span>
              </h1>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-lg md:text-2xl text-gray-300 mb-8">
                <span className="inline-flex items-center px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full">
                  7+ Years Experience
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full">
                  BSc Computer Science
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full">
                  Kenya
                </span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* About Content */}
        <div className="container-custom pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeIn direction="up">
                <div className="glass-effect p-8 rounded-2xl mb-12 border border-white/10 shadow-lg">
                  <h2 className="text-3xl font-bold mb-8">
                    About <span className="text-gradient">Me</span>
                  </h2>

                  <div className="space-y-6 text-gray-300">
                    <p>
                      I am a results-driven Senior Full-Stack Software Engineer with 7+ years of experience designing, developing, deploying, and supporting enterprise-grade web applications, business systems, ERP/CRM solutions, and API-driven platforms. I hold a Bachelor of Science in Computer Science from Multimedia University of Kenya (2013 – 2017).
                    </p>

                    <p>
                      My career journey is built on high-impact full-stack development across multiple sectors, including Insurance, E-commerce, EdTech, Telematics, and Telecommunications. I have developed a wide array of systems ranging from insurance policy administration platforms and ERP/CRM software to payment-integrated e-commerce stores, fleet tracking applications, and interactive learning platforms.
                    </p>

                    <p>
                      On the backend, my expertise lies in PHP (Laravel, Yii2) and Python (Django), backed by Node.js and Express.js. I design robust system architectures, implement secure authentication/authorization (JWT, RBAC), and build scalable RESTful APIs. For database management, I design and optimize MySQL, PostgreSQL, and MongoDB database schemas, focusing on complex query optimization and data modeling.
                    </p>

                    <p>
                      On the frontend, I create responsive, user-centered web applications using Next.js, React.js, TypeScript, and Vue.js, styling them with Tailwind CSS. I specialize in translating complex Figma designs into high-performance, mobile-first, and accessible interfaces.
                    </p>

                    <p>
                      Beyond coding, I possess hands-on experience configuring and maintaining Linux servers, setting up Nginx, and building automated CI/CD deployment pipelines. My technical support background, testing practices (unit and integration testing), and code review workflows ensure the delivery of secure, well-documented, and production-ready applications.
                    </p>

                    <p>
                      <strong>Professional Philosophy:</strong> I believe in a clean-code approach, focusing on scalability and reliability. I approach problem-solving with a structured, analytical mindset, ensuring that the software architecture matches real-world business requirements while providing an exceptional experience for the end-user.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn direction="left" delay={0.3}>
                <div className="glass-effect p-6 rounded-2xl mb-8 border border-white/10 shadow-lg sticky top-24">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src="/kevin-wanyonyi-fullstack-software-developer.jpg"
                          alt="Kevin Wanyonyi"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mt-4">Kevin W. Wanyonyi</h3>
                    <p className="text-gray-300 font-medium">Senior Full-Stack Engineer</p>
                  </div>

                  <div className="flex justify-center gap-4 mb-6">
                    <a
                      href="https://x.com/profnanguti"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="https://instagram.com/kevin_nanguti"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://github.com/nanguti1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://linkedin.com/in/kevin-w-wanyonyi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="mailto:g.nanguti@gmail.com"
                      className="flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-colors"
                    >
                      <Mail size={18} />
                      <span>Contact Me</span>
                    </a>

                    <a
                      href="/cv.pdf"
                      download
                      className="flex items-center justify-center gap-2 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      <span>Download CV</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          <StaggerContainer>
            <h2 className="text-3xl font-bold mb-8">
              Technical <span className="text-gradient">Skills</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Programming Languages */}
              <StaggerItem>
                <div className="glass-effect p-6 rounded-2xl border border-white/10 h-full shadow-lg">
                  <div className="flex items-center mb-4">
                    <Cpu className="text-blue-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold">Programming Languages</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      PHP
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Python
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      JavaScript (ES6+)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      SQL
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              {/* Backend Frameworks */}
              <StaggerItem>
                <div className="glass-effect p-6 rounded-2xl border border-white/10 h-full shadow-lg">
                  <div className="flex items-center mb-4">
                    <Server className="text-purple-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold">Backend & Frameworks</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Laravel
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Yii2
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Django
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      Node.js & Express.js
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              {/* Frontend Technologies */}
              <StaggerItem>
                <div className="glass-effect p-6 rounded-2xl border border-white/10 h-full shadow-lg">
                  <div className="flex items-center mb-4">
                    <Layout className="text-indigo-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold">Frontend Technologies</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Next.js & React.js
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Vue.js
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Responsive Web Design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      Mobile-First Development
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              {/* API & Database Management */}
              <StaggerItem>
                <div className="glass-effect p-6 rounded-2xl border border-white/10 h-full shadow-lg">
                  <div className="flex items-center mb-4">
                    <Database className="text-pink-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold">APIs & Databases</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      MySQL & PostgreSQL
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      MongoDB
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      RESTful API Development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      JWT Auth & RBAC
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                      Payment Integrations (M-Pesa)
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              {/* DevOps & Tools */}
              <StaggerItem>
                <div className="glass-effect p-6 rounded-2xl border border-white/10 h-full shadow-lg">
                  <div className="flex items-center mb-4">
                    <Wrench className="text-amber-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold">DevOps & Infrastructure</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      Git, GitHub & GitLab
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      Linux Server Management & Nginx
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      Docker & CI/CD Pipelines
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      Vercel & Postman
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              {/* Testing & QA */}
              <StaggerItem>
                <div className="glass-effect p-6 rounded-2xl border border-white/10 h-full shadow-lg">
                  <div className="flex items-center mb-4">
                    <Shield className="text-emerald-500 mr-3" size={24} />
                    <h3 className="text-xl font-bold">Quality & Methodology</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      Unit Testing & Integration Testing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      System Architecture & DB Design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      Performance & Query Optimization
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      Agile & Scrum Development
                    </li>
                  </ul>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
