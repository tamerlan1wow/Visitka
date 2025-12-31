"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
});

// SVG иконки для меню
const MenuIcon = () => (
  <svg 
    className="w-6 h-6" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M4 6h16M4 12h16M4 18h16" 
    />
  </svg>
);

const CloseIcon = () => (
  <svg 
    className="w-6 h-6" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M6 18L18 6M6 6l12 12" 
    />
  </svg>
);

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className={`${jetBrainsMono.variable} font-mono antialiased min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 relative overflow-hidden`}>
      {/* 3D Metal Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top'
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Metal effect background with grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm">
          <div 
            className="absolute inset-0 opacity-20" 
            style={{ 
              backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '100px 20px',
            }} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/30" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-100/20 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-lg blur-sm opacity-50" />
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-lg p-0 backdrop-blur-sm">
                <Image 
                  src="/images/TamLab-27-12-2025.png" 
                  alt="Logo" 
                  width={300} 
                  height={70} 
                  className="w-16 h-16 sm:w-65 sm:h-20 object-contain" 
                  priority 
                />
              </div>
            </div>
            <div className="ml-2 sm:ml-4">
              <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider">TAMERLAN</div>
              <div className="text-lg sm:text-lg font-bold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent">
                SERGALI
              </div>
            </div>
          </div>

          {/* Hamburger button for mobile */}
          <button 
            className="sm:hidden text-gray-300 text-2xl ml-2 focus:outline-none z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Navigation */}
          <nav className={`flex flex-col sm:flex-row items-center gap-2 sm:gap-2 absolute sm:static top-full left-0 w-full sm:w-auto bg-gray-900/95 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-0 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-96 py-2 sm:py-0" : "max-h-0 sm:max-h-full"}`}>
            <Link 
              href="#" 
              onClick={() => {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="relative px-4 py-2 sm:px-5 sm:py-2.5 group w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/50 rounded-lg group-hover:border-cyan-500/40 transition-all duration-300" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-900/20" />
              <span className="relative text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium text-sm tracking-wide text-center block">
                HOME
              </span>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 transition-opacity duration-300" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-start mb-20">
          <div className="mb-8 w-full">
            {/* Profile with Photo and Name */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
              {/* Photo Container with Metal Frame */}
              <div className="relative group">
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Metal frame */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-1">
                  {/* Inner gradient border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 opacity-50"></div>
                  
                  {/* Photo */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-600 to-gray-800 overflow-hidden">
                    <Image 
                      src="/images/photo_2025-12-28_00-14-41.jpg" 
                      alt="Tamerlan Sergali" 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 768px) 160px, 160px" 
                    />
                  </div>
                  
                  {/* Metallic corners */}
                  <div className="absolute top-0 left-1/2 w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-400 transform -translate-x-1/2"></div>
                </div>
                
                {/* Small decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Name and Title */}
              <div className="flex-1">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 tracking-tight">
                  <span className="block text-gray-300">TAMERLAN</span>
                  <span className="block text-white mt-2 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
                    SERGALI
                  </span>
                </h1>
                <div className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mt-4">
                  <span className="text-cyan-400">//</span> 3rd year Information Systems In Management student {"\n"}
                  <span className="text-cyan-400">//</span> Specializing in modern web development {"\n"}
                  <span className="text-cyan-400">//</span> NestJS • Next.js • PostgreSQL • MongoDB
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">EMAIL</div>
              <a href="mailto:slatergt228@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                slatergt228@gmail.com
              </a>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">PHONE</div>
              <a href="tel:+77718177759" className="text-gray-300 hover:text-cyan-400 transition-colors">
                +7 (771) 817-77-59
              </a>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-sm text-gray-500 mb-2">LOCATION</div>
              <div className="text-gray-300">Petropavl, Kazakhstan</div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <div className="text-sm text-gray-500 mb-4">TECH STACK</div>
            <div className="flex flex-wrap gap-3">
              {["NestJS", "Next.js", "Nuxt.js", "PostgreSQL", "MongoDB", "TypeScript", "React", "Vue"].map((tech) => (
                <div key={tech} className="px-4 py-2 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mr-4">01.</span>
                <span className="text-white">ABOUT</span>
              </h2>
              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  Information Systems In Management student passionate about building scalable and efficient web applications. Currently focusing on mastering full-stack development with modern JavaScript ecosystem.
                </p>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-gray-300 font-medium mb-2">Kozybaev University</div>
                  <div className="text-gray-500 text-sm mb-1">Information Systems of Management</div>
                  <div className="text-gray-600 text-xs">3rd Year 2023-Present</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mr-4">02.</span>
                <span className="text-white">EXPERIENCE</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-gray-300 font-medium mb-2">Frontend Developer</div>
                  <div className="text-gray-500 text-sm mb-3">Final University Project</div>
                  <div className="text-gray-600 text-xs">Nuxt.js • Database Integration • Modern Web Practices</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-gray-300 font-medium mb-2">Volunteer</div>
                  <div className="text-gray-500 text-sm mb-3">Greening Project, Kokshetau</div>
                  <div className="text-gray-600 text-xs">Team Coordination • Environmental Initiatives</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mr-4">03.</span>
            <span className="text-white">PROJECTS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "E-COMMERCE PLATFORM",
                description: "Full-stack solution with real-time a software solution that applies Object-Oriented Programming, the Repository Pattern using Interfaces, and integrates with real database systems PostgreSQL and MongoDB. Additionally, it implements a web-based CRUD application for the entity stored in PostgreSQL or MongoDB, using Node.js, HTML, CSS, and jQuery.",
                tech: ["Next.js", "NestJS", "PostgreSQL", "JavaScript", "Java", "MongoDB"],
                year: "2025",
                link: "https://youtu.be/RuviWLh4xCQ?si=8qeHI-fnhLQEw9WS"
              },
              {
                title: "UNIVERSITY PROJECT",
                description: "Front-end project based on the Nuxt.js framework. The structure of the multi-page website includes the use and implementation of local and global state management elements such as ref, reactive, computed, and Pinia. The project demonstrates the use of components and layouts, incorporate computer vision modules from the TensorFlow.js (TF.js) library, and include a REST API within the server folder using PostgreSQL and the Prisma ORM. Additionally, the project implements user authentication via a GitHub application using NuxtAuth.",
                tech: ["Nuxt.js", "Vue.js", "Prisma", "SQL", "ts", "pinia-plugin", "git-authorization"],
                year: "2025",
                link: "https://youtu.be/F1_jxHxRwug"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-900/70 border border-gray-700 rounded text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                    VIEW REVIEW
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mr-4">04.</span>
            <span className="text-white">MY SKILLS</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "FRONTEND",
                skills: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind"]
              },
              {
                category: "BACKEND",
                skills: ["NestJS", "Node.js", "Express", "Python", "FastAPI", "REST APIs"]
              },
              {
                category: "DATABASES",
                skills: ["PostgreSQL", "MongoDB", "Prisma", "SQL", "ORM"]
              },
              {
                category: "TOOLS & MORE",
                skills: ["Git", "JWT", "English B2", "Kazakh", "Russian"]
              }
            ].map((group, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-6">
                  <span className="text-cyan-400 mr-2">[</span>
                  {group.category}
                  <span className="text-cyan-400 ml-2">]</span>
                </h3>
                <div className="space-y-3">
                  {group.skills.map((skill, i) => (
                    <div key={i} className="text-gray-400 text-sm hover:text-white transition-colors cursor-default">
                      <span className="text-cyan-500 mr-2">&gt;</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mr-4">05.</span>
            <span className="text-white">CONTACT</span>
          </h2>
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">LOOKING FOR INTERNSHIP OPPORTUNITIES</h3>
              <p className="text-gray-400 mb-10 leading-relaxed">
                I'm currently seeking internship positions where I can contribute to meaningful projects while expanding my skills in modern web development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:slatergt228@gmail.com" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                  SEND EMAIL
                </a>
                <a href="https://github.com/tamerlan1wow" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                  GITHUB PROFILE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-gray-800">
          <div className="text-center">
            <div className="text-gray-600 text-sm mb-2">
              © {new Date().getFullYear()} TAMERLAN SERGALI
            </div>
            <div className="text-gray-700 text-xs">
              INFORMATION SYSTEMS IN MANAGEMENT STUDENT
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
