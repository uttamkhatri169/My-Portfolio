"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Code2,
  Layers,
  Cloud,
  Database,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  title: string;
  categoryTag: string;
  badgeText?: string;
  icon: React.ElementType;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "gen-ai-agentic",
    title: "GENERATIVE AI & AGENTIC SYSTEMS",
    categoryTag: "AI & ML",
    badgeText: "SPECIALIZATION",
    icon: Bot,
    skills: [
      { name: "Agentic AI & Autonomous Agents", level: 95 },
      { name: "RAG Architectures & Vector Search", level: 94 },
      { name: "Generative AI & LLM Fine-Tuning", level: 92 },
      { name: "Prompt Engineering & LangChain", level: 95 },
    ],
  },
  {
    id: "deep-ml",
    title: "DEEP LEARNING & COMPUTER VISION",
    categoryTag: "AI & ML",
    badgeText: "CORE AI",
    icon: BrainCircuit,
    skills: [
      { name: "Deep Learning (ANN, CNN, RNN)", level: 94 },
      { name: "Natural Language Processing (NLP)", level: 92 },
      { name: "Computer Vision (OpenCV, YOLO)", level: 90 },
      { name: "PyTorch & TensorFlow", level: 92 },
    ],
  },
  {
    id: "languages",
    title: "PROGRAMMING LANGUAGES",
    categoryTag: "LANGUAGES",
    icon: Code2,
    skills: [
      { name: "Python", level: 96 },
      { name: "C & C++", level: 88 },
      { name: "Java", level: 86 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    id: "fullstack",
    title: "FULL STACK DEVELOPMENT",
    categoryTag: "FULL STACK",
    icon: Layers,
    skills: [
      { name: "Next.js / React", level: 92 },
      { name: "Node.js & Express", level: 88 },
      { name: "MERN Stack", level: 90 },
      { name: "HTML5 & CSS3 / Tailwind", level: 95 },
    ],
  },
  {
    id: "devops-mlops",
    title: "DEVOPS & CLOUD INFRASTRUCTURE",
    categoryTag: "DEVOPS",
    icon: Cloud,
    skills: [
      { name: "Docker & Containerization", level: 88 },
      { name: "AWS (S3, EC2, Lambda)", level: 85 },
      { name: "CI/CD & MLOps Pipelines", level: 84 },
      { name: "Git & GitHub", level: 95 },
    ],
  },
  {
    id: "databases-vector",
    title: "DATABASES & VECTOR STORES",
    categoryTag: "DATABASES",
    icon: Database,
    skills: [
      { name: "Vector DBs (Pinecone, Chroma)", level: 90 },
      { name: "MongoDB & PostgreSQL", level: 90 },
      { name: "Redis & Vector Caching", level: 85 },
      { name: "System Design & Architecture", level: 88 },
    ],
  },
];

const filterTabs = [
  { label: "ALL SKILLS", filter: "ALL" },
  { label: "AI, DEEP ML & AGENTS", filter: "AI & ML" },
  { label: "LANGUAGES", filter: "LANGUAGES" },
  { label: "FULL STACK", filter: "FULL STACK" },
  { label: "DEVOPS & DATABASES", filter: "DEVOPS" },
];

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredCategories =
    activeFilter === "ALL"
      ? skillCategories
      : skillCategories.filter((cat) =>
          activeFilter === "DEVOPS"
            ? cat.categoryTag === "DEVOPS" || cat.categoryTag === "DATABASES"
            : cat.categoryTag === activeFilter
        );

  return (
    <section
      id="skills"
      className="relative w-full bg-[#0A0A0A] text-white py-24 sm:py-32 px-6 sm:px-12 md:px-16 overflow-hidden selection:bg-[#FF3B2E] selection:text-white"
    >
      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF3B2E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[#FF5722]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/12 backdrop-blur-md mb-4 shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-[#FF3B2E]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-white/90 uppercase font-sora">
              AI/ML &amp; ENGINEERING CAPABILITIES
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-4"
          >
            MY <span className="bg-gradient-to-r from-white via-neutral-200 to-[#FF3B2E] bg-clip-text text-transparent">SKILLSET</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base sm:text-lg text-white/70 max-w-2xl font-normal leading-relaxed mb-8"
          >
            Specialized in Deep Machine Learning, Agentic AI, RAG Systems, Computer Vision, and scalable Full-Stack engineering.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.filter}
                onClick={() => setActiveFilter(tab.filter)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 font-sora ${
                  activeFilter === tab.filter
                    ? "text-white font-semibold shadow-lg"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeFilter === tab.filter && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-[#FF3B2E] rounded-xl z-0 shadow-[0_0_20px_rgba(255,59,46,0.6)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* 6 Category Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              const isFeaturedAI = category.categoryTag === "AI & ML";
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className={`group relative bg-[#121212]/90 rounded-2xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    isFeaturedAI
                      ? "border-2 border-[#FF3B2E]/60 shadow-[0_0_30px_rgba(255,59,46,0.2)] hover:border-[#FF3B2E]"
                      : "border border-white/10 hover:border-[#FF3B2E]/50"
                  }`}
                >
                  {/* Top Animated Accent Glow Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF3B2E] via-[#FF5722] to-[#FF8A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header: Icon + Title + Specialization Tag */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 group-hover:border-[#FF3B2E]/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/12 flex items-center justify-center text-[#FF3B2E] group-hover:bg-[#FF3B2E]/10 group-hover:border-[#FF3B2E]/40 transition-colors shadow-inner flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-sora font-extrabold text-xs sm:text-sm text-white tracking-wider uppercase leading-snug">
                          {category.title}
                        </h3>
                      </div>
                      {category.badgeText ? (
                        <span className="text-[9px] font-sora font-extrabold text-[#FF3B2E] bg-[#FF3B2E]/15 border border-[#FF3B2E]/30 px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">
                          {category.badgeText}
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-1 rounded-md border border-white/5 flex-shrink-0">
                          {category.skills.length} SKILLS
                        </span>
                      )}
                    </div>

                    {/* Skill List */}
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
                            <span className="text-white/90 font-inter flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3B2E]" />
                              {skill.name}
                            </span>
                            <span className="text-[#FF3B2E] font-mono text-xs px-2 py-0.5 rounded bg-[#FF3B2E]/10 border border-[#FF3B2E]/25 font-bold">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Dual-Track Progress Bar with Glow Tip */}
                          <div className="relative h-2 w-full bg-neutral-900/90 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.2,
                                ease: [0.25, 0.1, 0.25, 1.0],
                                delay: 0.15,
                              }}
                              className="h-full bg-gradient-to-r from-[#FF3B2E] via-[#FF5722] to-[#FF8A00] rounded-full shadow-[0_0_12px_rgba(255,59,46,0.8)] relative"
                            >
                              {/* Glowing Right Tip */}
                              <div className="absolute top-0 right-0 bottom-0 w-2 bg-white rounded-full blur-[1px]" />
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
