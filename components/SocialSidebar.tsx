"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";

export default function SocialSidebar() {
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const lightSectionIds = ["process", "soft-skills"];
      const midY = window.innerHeight / 2;
      let inLight = false;

      for (const id of lightSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= midY && rect.bottom >= midY) {
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

  const socialLinks = [
    {
      name: "GitHub",
      icon: GithubIcon,
      href: "https://github.com/uttamkhatri169",
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/uttam16/ ",
    },
  ];

  return (
    <aside className="social-sidebar-item hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center">
      <div
        className={`p-2.5 rounded-full flex flex-col gap-5 transition-all duration-300 ${isLightSection
          ? "bg-[#121212]/90 border border-white/20 shadow-2xl backdrop-blur-2xl text-white"
          : "glass-panel border border-white/15 shadow-2xl backdrop-blur-xl"
          }`}
      >
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/15 transition-all duration-300 flex items-center justify-center group relative"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.name}
            >
              <Icon className="w-5 h-5 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,59,46,0.8)]" />
              <span className="absolute left-14 bg-black/80 text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-white/10 shadow-lg">
                {social.name}
              </span>
            </motion.a>
          );
        })}
      </div>
    </aside>
  );
}
