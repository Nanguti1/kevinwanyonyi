// src/components/home/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/PageTransition";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom text-center px-4 md:px-8">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block">FullStack</span>
            <span className="text-gradient block">Software Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            I&apos;m Kevin W. Wanyonyi, a seasoned software developer and tech
            entrepreneur based in Nairobi, Kenya. Specializing in Laravel,
            Next.js, and cutting-edge web development.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/projects">
              <motion.button
                className="px-8 py-3 bg-primary text-black font-medium rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight size={18} />
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                className="px-8 py-3 bg-transparent text-white font-medium rounded-lg flex items-center gap-2 hover:bg-white/10 border border-white/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14m-7-7l7 7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
