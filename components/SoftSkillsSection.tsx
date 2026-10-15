"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SoftSkill {
  id: string;
  title: string;
  description: string;
  iconText: string;
}

const softSkills: SoftSkill[] = [
  {
    id: "skill-1",
    title: "LEADERSHIP",
    description:
      "Guiding teams, managing tasks, and driving project completion with shared technical vision.",
    iconText: "👑",
  },
  {
    id: "skill-2",
    title: "PUBLIC SPEAKING",
    description:
      "Confident stage presence, anchoring summits, and delivering articulate technical ideas.",
    iconText: "🎤",
  },
  {
    id: "skill-3",
    title: "TEAM COLLABORATION",
    description:
      "Collaborating across fields, building systems, and engineering production code in sync.",
    iconText: "🤝",
  },
  {
    id: "skill-4",
    title: "COMMUNICATION",
    description:
      "Clear, concise, and structured interactions in both business and technical contexts.",
    iconText: "💬",
  },
  {
    id: "skill-5",
    title: "PROBLEM SOLVING",
    description:
      "Breaking down complex engineering tasks into clean, logical, and modular pieces.",
    iconText: "🧩",
  },
  {
    id: "skill-6",
    title: "ADAPTABILITY",
    description:
      "Quick to pick up new frameworks like FastAPI, Spring Boot, or automation tools like n8n.",
    iconText: "⚡",
  },
  {
    id: "skill-7",
    title: "CREATIVITY",
    description:
      "Blending cinematic aesthetics with software structure to build premium digital experiences.",
    iconText: "🎨",
  },
  {
    id: "skill-8",
    title: "TIME MANAGEMENT",
    description:
      "Balancing B.Tech studies, event hosting, and developing robust production software platforms.",
    iconText: "⏰",
  },
];

export default function SoftSkillsSection() {
  return (
    <section
      id="soft-skills"
      className="relative w-full bg-[#FAFAFA] text-neutral-900 py-24 sm:py-32 px-6 sm:px-12 md:px-16 overflow-hidden selection:bg-[#FF3B2E] selection:text-white"
    >
      {/* Top Wave Transition from Red Certifications Section */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-[45px] sm:h-[70px] lg:h-[95px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,45 C1080,85 720,15 0,55 Z"
            fill="#FF3B2E"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto pt-10 relative z-20">
        {/* Header Block (Centered) */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-200/80 border border-neutral-300/80 text-xs sm:text-sm font-semibold tracking-wider text-neutral-700 uppercase font-sora shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#FF3B2E]" />
            <span>Core Competencies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-[1.15]"
          >
            PROFESSIONAL SOFT SKILLS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl"
          >
            Essential traits that make me an effective engineer, coordinator, and technical communicator.
          </motion.p>
        </div>

        {/* 8 Soft Skills Grid (Matching Reference Screenshot 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group bg-white p-7 rounded-[2.2rem] border-2 border-neutral-200/80 hover:border-[#FF3B2E]/50 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer"
            >
              {/* Emoji Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-neutral-100 group-hover:bg-[#FF3B2E]/10 flex items-center justify-center text-3xl mb-5 transition-colors border border-black/5 shadow-inner">
                {skill.iconText}
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-sora font-extrabold text-lg text-neutral-900 mb-2 group-hover:text-[#FF3B2E] transition-colors tracking-tight">
                  {skill.title}
                </h3>
                <p className="font-inter text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Transition into Dark Contact Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none transform translate-y-1">
        <svg
          className="relative block w-full h-[55px] sm:h-[85px] lg:h-[115px] scale-y-[1.05]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M-10,32 C360,110 720,0 1450,70 L1450,130 L-10,130 Z"
            fill="#0A0A0A"
          />
        </svg>
      </div>
    </section>
  );
}
