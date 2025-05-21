// src/components/common/Footer.tsx
import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { FadeIn } from "../animations/PageTransition";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/kevinwanyonyi",
    },
    {
      name: "X (Twitter)",
      icon: <Twitter size={20} />,
      url: "https://twitter.com/kevinwanyonyi",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/kevinwanyonyi",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://instagram.com/kevinwanyonyi",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:wanyonyi@wanyonyikevin.co.ke",
    },
  ];

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-custom mx-auto py-12">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Information */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-xl font-bold">
                <span className="text-gradient">Kevin</span>
                <span className="text-white"> Wanyonyi</span>
              </Link>
              <p className="mt-4 text-gray-400 max-w-md">
                Full Stack Software Developer based in Nairobi, Kenya with over
                5 years of experience in Laravel, Next.js, and more.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-gray-400">wanyonyi@wanyonyikevin.co.ke</p>
            </div>
          </div>
        </FadeIn>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Kevin Wanyonyi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
