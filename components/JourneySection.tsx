"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
  Trophy,
} from "lucide-react";

interface TimelineItem {
  id: string;
  type: "experience" | "education" | "achievements";
  badgeText: string;
  badgeColor: string;
  title: string;
  organization: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
  align: "left" | "right";
  icon: React.ElementType;
}

const timelineData: TimelineItem[] = [
  {
    id: "exp-futurense-2",
    type: "experience",
    badgeText: "AI & LLM INTERNSHIP",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
    title: "Applied GenAI & LLM Systems Intern",
    organization: "Futurense Technologies (School of AI)",
    location: "Remote / Bengaluru, India",
    duration: "JUNE 2026 - JULY 2026",
    description:
      "Selected for an intensive summer internship program focusing on Large Language Model (LLM) architectures, applied Generative AI techniques, prompt chaining, and the engineering lifecycle of building and deploying enterprise GenAI solutions. Certified by Chairman & MD Vikas Gupta.",
    skills: [
      "LLM Systems",
      "Applied GenAI",
      "Prompt Engineering",
      "Model Deployment",
      "Python",
      "Vikas Gupta (MD) Certified",
    ],
    align: "left",
    icon: Briefcase,
  },
  {
    id: "exp-futurense-1",
    type: "experience",
    badgeText: "DATA ANALYST INTERN",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    title: "Data Analyst & AI Intern",
    organization: "Futurense Technologies",
    location: "Remote, India",
    duration: "JUNE 2025 - AUGUST 2025",
    description:
      "Analyzed and interpreted large-scale enterprise datasets to extract actionable business insights, improving reporting accuracy by 20%. Automated end-to-end data cleaning and preprocessing pipelines using Python and Pandas, cutting processing time by 40%. Designed interactive Power BI executive dashboards for KPI tracking.",
    skills: [
      "Data Analytics",
      "Python & Pandas",
      "Power BI Dashboards",
      "Data Preprocessing",
      "Decision Intelligence",
      "Reporting Accuracy +20%",
    ],
    align: "right",
    icon: Briefcase,
  },
  {
    id: "edu-lpu",
    type: "education",
    badgeText: "B.TECH CSE (AI & DATA ENGINEERING)",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/40",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Lovely Professional University (LPU)",
    location: "Phagwara, Punjab, India",
    duration: "AUG 2023 - PRESENT",
    description:
      "Pursuing Bachelor of Technology with specialization in Artificial Intelligence & Data Engineering. Maintained a strong academic record with 8.01 CGPA. Deep coursework and practical projects in Machine Learning, Deep Learning, Data Structures & Algorithms, DBMS, and Cloud Infrastructure.",
    skills: [
      "CGPA: 8.01 / 10",
      "AI & Data Engineering",
      "Data Structures & Java",
      "Machine Learning",
      "DBMS & SQL",
      "Phagwara Punjab",
    ],
    align: "left",
    icon: GraduationCap,
  },
  {
    id: "achieve-hackathons",
    type: "achievements",
    badgeText: "NATIONAL HACKATHONS",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/40",
    title: "Adobe India & Smart India Hackathon Shortlist",
    organization: "Adobe India & SIH Ministry of Education",
    location: "National Level, India",
    duration: "2024 - 2025",
    description:
      "Qualified for Round 2 of Adobe India Hackathon 2025 — ranking among the Top 4,000 teams nationwide out of 95,000+ competing engineering teams. Shortlisted for Smart India Hackathon (SIH) 2024 among the Top 900+ national teams for automated AI problem-solving.",
    skills: [
      "Adobe Hackathon (Top 4k / 95k+ Teams)",
      "Smart India Hackathon (Top 900+)",
      "Applied AI Solutions",
      "Competitive Engineering",
    ],
    align: "right",
    icon: Trophy,
  },
  {
    id: "edu-12th",
    type: "education",
    badgeText: "INTERMEDIATE (12TH CBSE)",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
    title: "Class 12th (Intermediate) — 87.6%",
    organization: "Mata Sheetla Public Sr Sec School",
    location: "Rindhana, Sonipat, Haryana",
    duration: "APR 2021 - MAR 2022",
    description:
      "Completed Senior Secondary Class 12th under CBSE curriculum with 87.6% marks. Developed a strong mathematical and computational foundation in Physics, Chemistry, Mathematics, and Computer Science.",
    skills: [
      "87.6% Marks",
      "CBSE Board",
      "PCM & Computer Science",
      "Sonipat Haryana",
    ],
    align: "left",
    icon: GraduationCap,
  },
  {
    id: "edu-10th",
    type: "education",
    badgeText: "MATRICULATION (10TH CBSE)",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
    title: "Class 10th (Matriculation) — 94.0%",
    organization: "The Aaryan Public School",
    location: "Lakhan Majra, Rohtak, Haryana",
    duration: "APR 2019 - MAR 2020",
    description:
      "Secured an outstanding 94.0% in Class 10th Board examinations with academic distinction in Mathematics, Science, and Information Technology.",
    skills: [
      "94.0% Score",
      "Academic Distinction",
      "Mathematics & Science",
      "Rohtak Haryana",
    ],
    align: "right",
    icon: GraduationCap,
  },
];

export default function JourneySection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems =
    activeFilter === "all"
      ? timelineData
      : timelineData.filter((item) => item.type === activeFilter);

  return (
    <section
      id="journey"
      className="relative w-full bg-[#0A0A0A] text-white py-24 sm:py-32 px-6 sm:px-12 md:px-16 overflow-hidden selection:bg-[#FF3B2E] selection:text-white"
    >
      {/* Top Red Ambient Lighting Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF3B2E] to-transparent opacity-80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF3B2E]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Block (Centered) */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm font-semibold tracking-wider text-white/90 uppercase font-sora shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#FF3B2E]" />
            <span>Career &amp; Academic Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]"
          >
            Experience &amp; <span className="text-[#FF3B2E]">Education</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base sm:text-lg text-white/60 font-normal leading-relaxed max-w-xl"
          >
            A chronological timeline of my academic milestones, AI &amp; data engineering internships, and national hackathon achievements.
          </motion.p>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { label: "All Milestones (6)", value: "all" },
              { label: "Work & Internships (2)", value: "experience" },
              { label: "Education (3)", value: "education" },
              { label: "Hackathons & Awards (1)", value: "achievements" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sora font-semibold transition-all duration-300 border cursor-pointer ${
                  activeFilter === tab.value
                    ? "bg-[#FF3B2E] text-white border-[#FF3B2E] shadow-lg shadow-[#FF3B2E]/20 scale-105"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Center Vertical Timeline Flow Container */}
        <div className="relative pt-6">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#FF3B2E] via-red-500/40 to-neutral-800 hidden md:block" />

          {/* Timeline Cards Stream */}
          <div className="space-y-12 sm:space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const Icon = item.icon;
                const isLeft = item.align === "left";

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex flex-col md:flex-row items-center"
                  >
                    {/* Glowing Center Red Node Dot */}
                    <div className="absolute left-1/2 top-8 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-[#121214] border-2 border-[#FF3B2E] flex items-center justify-center shadow-[0_0_15px_rgba(255,59,46,0.8)]">
                        <div className="w-2 h-2 rounded-full bg-[#FF3B2E] animate-ping" />
                      </div>
                    </div>

                    {/* Timeline Item Content (Left vs Right positioning) */}
                    <div
                      className={`w-full md:w-1/2 ${
                        isLeft
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:ml-auto md:text-left"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="group bg-[#121214] p-7 sm:p-8 rounded-[2.2rem] border border-white/15 hover:border-[#FF3B2E]/50 transition-all duration-400 shadow-2xl relative overflow-hidden text-left"
                      >
                        {/* Ambient Card Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF3B2E]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Top Metadata Header */}
                        <div
                          className={`flex flex-wrap items-center gap-3 mb-4 ${
                            isLeft ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          <span
                            className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-sora font-extrabold tracking-widest border uppercase inline-flex items-center gap-1.5 ${item.badgeColor}`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{item.badgeText}</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-inter text-white/60 font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            <Calendar className="w-3.5 h-3.5 text-[#FF3B2E]" />
                            {item.duration}
                          </span>
                        </div>

                        {/* Title & Organization */}
                        <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white mb-2 group-hover:text-[#FF3B2E] transition-colors leading-snug">
                          {item.title}
                        </h3>

                        <div
                          className={`flex items-center gap-2 text-sm font-inter text-white/80 font-medium mb-4 ${
                            isLeft ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          <Building2 className="w-4 h-4 text-[#FF3B2E]" />
                          <span>{item.organization}</span>
                          <span className="text-white/40">•</span>
                          <span className="text-white/60">{item.location}</span>
                        </div>

                        {/* Description */}
                        <p className="font-inter text-sm sm:text-base text-white/70 leading-relaxed font-normal mb-6">
                          {item.description}
                        </p>

                        {/* Skill Badges */}
                        <div
                          className={`flex flex-wrap gap-2 pt-4 border-t border-white/10 ${
                            isLeft ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs font-inter px-3 py-1 rounded-lg bg-white/5 text-white/75 border border-white/10 font-medium flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#FF3B2E]" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
