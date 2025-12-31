"use client";

import Link from "next/link";
import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"], 
});

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Metal effect background with grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-sm">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 20px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/30" />
        <div className="absolute bottom-0 left-0 right-0 h-100px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
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
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navigation */}
        <nav className={`flex flex-col sm:flex-row items-center gap-2 sm:gap-2 absolute sm:static top-full left-0 w-full sm:w-auto bg-gray-900/95 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-0 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-96 py-2 sm:py-0" : "max-h-0 sm:max-h-full"}`}>
          <Link href="/" className="relative px-4 py-2 sm:px-5 sm:py-2.5 group w-full sm:w-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/50 rounded-lg group-hover:border-cyan-500/40 transition-all duration-300" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-900/20" />
            <span className="relative text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium text-sm tracking-wide text-center block">
              HOME
            </span>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 transition-opacity duration-300" />
          </Link>

          {/* <Link href="/About" className="relative px-4 py-2 sm:px-5 sm:py-2.5 group w-full sm:w-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/50 rounded-lg group-hover:border-cyan-500/40 transition-all duration-300" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-900/20" />
            <span className="relative text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium text-sm tracking-wide text-center block">
              ABOUT
            </span>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 transition-opacity duration-300" />
          </Link>

          <Link href="#contact" className="relative px-5 py-2.5 group sm:ml-2 w-full sm:w-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border border-gray-600/60 rounded-lg group-hover:border-cyan-500/50 transition-all duration-300" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300/30 to-transparent" />
            <span className="relative text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 font-medium text-sm tracking-wide text-center block">
              CONTACT
            </span>
            <div className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-sm" />
            </div>
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
