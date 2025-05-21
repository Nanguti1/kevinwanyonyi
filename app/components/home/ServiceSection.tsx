// src/components/home/ServiceSection.tsx
"use client";

import { FadeIn } from "../animations/PageTransition";
import { Code, Search, Wrench } from "lucide-react";

const services = [
  {
    title: "Custom Software Development & Maintenance",
    description:
      "We provide tailored software development and ongoing maintenance, ensuring your systems evolve with your business needs. From web applications to enterprise-level software, we deliver solutions that enhance efficiency and drive growth.",
    icon: <Code size={28} />,
    features: [
      "End-to-end software development from ideation to deployment.",
      "Integration of cutting-edge technologies like AI and machine learning.",
      "Regular updates and maintenance to keep your software secure and up-to-date.",
      "Scalable solutions tailored to your specific business requirements.",
    ],
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your online visibility with our expert SEO services. We optimize your website to rank higher on search engines, driving more traffic and potential customers to your business.",
    icon: <Search size={28} />,
    features: [
      "Comprehensive keyword research and analysis.",
      "On-page optimization for better search engine ranking.",
      "High-quality link building to enhance your site's authority.",
      "Content creation strategies that engage and convert.",
      "Regular performance monitoring and reporting.",
    ],
  },
  {
    title: "Technical Maintenance & Support",
    description:
      "Keep your digital assets running smoothly with our dedicated maintenance and support services, ensuring minimal downtime and maximum performance.",
    icon: <Wrench size={28} />,
    features: [
      "Proactive system monitoring and issue prevention.",
      "Rapid response to technical issues and emergencies.",
      "Regular security audits and vulnerability patching.",
      "Performance optimization for speed and reliability.",
    ],
  },
];

export default function ServiceSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Professional Services</span> To
              Accelerate Your Business
            </h2>
            <p className="text-xl text-gray-300">
              Leveraging the latest technologies and industry best practices to
              deliver exceptional solutions for your unique challenges.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up">
              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 h-full card-hover">
                <div className="bg-primary/20 p-3 rounded-lg w-fit mb-6 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
