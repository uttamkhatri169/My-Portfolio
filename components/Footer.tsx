"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] text-white pt-16 pb-12 px-6 sm:px-12 md:px-16 border-t border-white/10 relative overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Metadata Info Bar (Matching Screenshot 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono text-white/60 border-b border-white/10 pb-12">
          {/* Left Column */}
          <div className="space-y-1.5">
            <p className="text-white font-semibold font-sora">Software Engineering &amp; AI / ML</p>
            <p>Python • PyTorch • Next.js • React</p>
            <p>Full Stack &amp; Autonomous AI Systems</p>
          </div>

          {/* Center Column */}
          <div className="md:text-center space-y-1.5">
            <p className="text-white font-semibold font-sora">B.Tech CSE (AI &amp; ML)</p>
            <a
              href="#journey"
              className="inline-block text-[#FF3B2E] underline underline-offset-4 hover:text-white transition-colors"
            >
              View Journey ➔
            </a>
          </div>

          {/* Right Column */}
          <div className="md:text-right space-y-1.5">
            <p className="text-white font-semibold font-sora">Available for opportunities</p>
            <p className="text-white/40">2026</p>
          </div>
        </div>

        {/* CENTER GIANT HERO NAME TYPOGRAPHY "Uttam Khatri" */}
        <div className="py-6 flex justify-center text-center select-none pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sora font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[9.5vw] text-white tracking-tight leading-none uppercase whitespace-nowrap"
          >
            Uttam Khatri
          </motion.h1>
        </div>

        {/* Bottom Bar  */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/50 font-mono">
          {/* Left copyright */}
          <div>
            <p>© 2026 Uttam Khatri | Built with Next.js &amp; Tailwind</p>
          </div>

          {/* Center Email & Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="mailto:uttamkhatri169@gmail.com"
              className="text-white/80 hover:text-[#FF3B2E] transition-colors font-medium underline underline-offset-4"
            >
              uttamkhatri169@gmail.com
            </a>

            <div className="flex items-center gap-3 pl-0 sm:pl-4 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0">
              <a
                href="https://github.com/uttamkhatri169"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/uttam16/ "
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Explore GitHub link */}
          <div>
            <a
              href="https://github.com/uttamkhatri169"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors font-sora font-semibold"
            >
              <span>Explore My GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
