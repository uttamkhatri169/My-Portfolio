"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface NavbarProps {
  isHidden?: boolean;
}

export default function Navbar({ isHidden = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const lightSectionIds = ["process", "soft-skills"];
      const navY = 90;
      let inLight = false;

      for (const id of lightSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navY && rect.bottom >= navY) {
            inLight = true;
            break;
          }
        }
      }

      setIsLightSection(inLight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <header className={`navbar-item fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 md:px-16 py-6 w-full flex items-center justify-between transition-all duration-300 ${isHidden ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0 pointer-events-auto"
      }`}>
      {/* Brand Logo - Uttam Khatri */}
      <motion.a
        href="#home"
        className={`font-sora font-extrabold text-2xl sm:text-3xl tracking-tight text-white drop-shadow-xl transition-all duration-300 ${isLightSection
          ? "px-4 py-1.5 rounded-full bg-[#121212]/90 border border-white/20 shadow-2xl backdrop-blur-2xl text-xl sm:text-2xl"
          : ""
          }`}
        whileHover={{ scale: 1.03 }}
      >
        <span className="bg-gradient-to-r from-white via-white to-neutral-200 bg-clip-text text-transparent">
          Uttam Khatri
        </span>
      </motion.a>

      {/* Desktop Navigation Menu */}
      <nav
        className={`hidden lg:flex items-center gap-8 px-7 py-2.5 rounded-full transition-all duration-300 ${isLightSection
          ? "bg-[#121212]/90 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/40"
          : "glass-pill border border-white/15 shadow-xl shadow-black/30"
          }`}
      >
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-sm font-medium transition-all duration-200 ${index === 0
              ? "text-white font-semibold"
              : "text-white/75 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Right side item: GitHub Profile Button */}
      <div className="flex items-center gap-3 sm:gap-4">
        <motion.a
          href="https://github.com/uttamkhatri169"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-black hover:bg-neutral-200 font-semibold px-5 sm:px-6 h-10 sm:h-11 text-xs sm:text-sm shadow-xl shadow-white/10 transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
        </motion.a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/80 hover:text-white glass-pill rounded-full border border-white/15 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-20 left-6 right-6 glass-panel rounded-2xl p-6 flex flex-col gap-4 border border-white/20 shadow-2xl z-50"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-white/80 hover:text-white py-1 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <a
              href="https://github.com/uttamkhatri169"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black hover:bg-neutral-200 font-semibold text-xs w-full py-2.5 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
