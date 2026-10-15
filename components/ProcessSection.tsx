"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Compass,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
  X,
  ExternalLink,
  ShieldCheck,
  Zap,
  Users,
  Lightbulb,
} from "lucide-react";

interface ProcessModalDetails {
  tools: string[];
  mentorsAndValidation: string;
  focusAreas: string[];
  deepDiveText: string;
}

interface ProcessStep {
  number: string;
  stageTag: string;
  title: string;
  description: string;
  align: "right" | "left";
  icon: React.ElementType;
  details: ProcessModalDetails;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    stageTag: "01 / DISCOVERY & RESEARCH",
    title: "Research & Strategy",
    description:
      "Understanding business goals, target user personas, and technical constraints to architect a rock-solid roadmap for high-performance systems.",
    align: "right",
    icon: Compass,
    details: {
      tools: [
        "ChatGPT & Claude AI",
        "YouTube Tech Breakdown",
        "Google & Academic Papers",
        "Senior Tech Reviews",
      ],
      mentorsAndValidation:
        "I regularly validate project concepts with university teachers, mentors, and senior software engineers to ensure the idea solves a genuine, real-world problem.",
      focusAreas: [
        "Real-World Problem Validation",
        "Code Quality & Clean Architecture",
        "Production-Ready Infrastructure",
        "Security & Scalability First",
      ],
      deepDiveText:
        "My main purpose when creating any application is to ensure it makes a tangible real-world impact. Before writing a single line of code, I leverage AI tools (ChatGPT, Claude AI) alongside direct feedback from experienced seniors to guarantee high technical feasibility, security, and scalability from Day 1.",
    },
  },
  {
    number: "02",
    stageTag: "02 / UX & ARCHITECTURE",
    title: "System & UI Design",
    description:
      "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    align: "left",
    icon: Palette,
    details: {
      tools: [
        "Pinterest & Dribbble",
        "Top SaaS Apps Showcase",
        "ChatGPT & Midjourney",
        "YouTube Design Breakdown",
      ],
      mentorsAndValidation:
        "Gathering visual inspiration from global design showcases (Pinterest, Dribbble) and refining UI layouts through user testing and peer reviews.",
      focusAreas: [
        "Pixel-Perfect UI/UX Design",
        "Glassmorphic & Modern Aesthetics",
        "Responsive Grid Systems",
        "Scalable Database Schematics",
      ],
      deepDiveText:
        "I believe exceptional software must look stunning and feel liquid-smooth. I research design inspirations across Pinterest, Google, and award-winning web platforms to craft intuitive visual hierarchies, modern typography, glassmorphism elements, and highly responsive user interfaces.",
    },
  },
  {
    number: "03",
    stageTag: "03 / FULL STACK & AI",
    title: "Development & AI Models",
    description:
      "Building robust backends, integrating AI/ML models, and delivering ultra-responsive frontends with clean, production-ready code.",
    align: "right",
    icon: Code2,
    details: {
      tools: [
        "Python & PyTorch",
        "Next.js & TypeScript",
        "LangChain & RAG Vector DBs",
        "Node.js & MongoDB",
      ],
      mentorsAndValidation:
        "Pair-programming, code audits, and strict adherence to modular software engineering design patterns.",
      focusAreas: [
        "Deep Learning & Agentic AI",
        "Modular & Reusable Components",
        "High-Performance REST/GraphQL APIs",
        "Strict Type-Safety & Optimization",
      ],
      deepDiveText:
        "Hands-on execution where frontend engineering meets cutting-edge AI. I write modular, clean code for Next.js web applications while building custom Deep Learning pipelines (ANN/CNN/RNN), Agentic AI workflows, and RAG vector search models tuned for high speed and accuracy.",
    },
  },
  {
    number: "04",
    stageTag: "04 / CLOUD & MLOPS",
    title: "Testing & Deployment",
    description:
      "Automated testing, security auditing, and continuous zero-downtime deployment to AWS/Cloud infrastructure with 24/7 monitoring.",
    align: "left",
    icon: Rocket,
    details: {
      tools: [
        "Docker Containers",
        "AWS (S3, EC2, Lambda)",
        "GitHub Actions (CI/CD)",
        "MLOps & Uptime Monitoring",
      ],
      mentorsAndValidation:
        "Rigorous peer testing, load testing, and automated security vulnerability auditing before production release.",
      focusAreas: [
        "Containerized Deployments",
        "Automated CI/CD Pipelines",
        "Zero-Downtime Releases",
        "24/7 Performance Monitoring",
      ],
      deepDiveText:
        "Preparing the application for real-world production users. I containerize services with Docker, automate deployment pipelines via GitHub Actions to AWS cloud infrastructure, and enforce continuous uptime and security monitoring so the product is 100% production-ready.",
    },
  },
];

function ProcessCard({
  step,
  index,
  onOpenModal,
}: {
  step: ProcessStep;
  index: number;
  onOpenModal: (step: ProcessStep) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { amount: 0.45 });
  const Icon = step.icon;
  const isRight = step.align === "right";

  return (
    <div
      ref={cardRef}
      className={`w-full flex ${
        isRight ? "justify-end" : "justify-start"
      } relative z-10`}
    >
      <motion.div
        animate={{
          backgroundColor: isInView ? "#FF3B2E" : "#FFFFFF",
          color: isInView ? "#FFFFFF" : "#171717",
          scale: isInView ? 1.05 : 1,
          rotate: isInView ? (isRight ? -2.5 : 2.5) : isRight ? 1.5 : -1.5,
          boxShadow: isInView
            ? "0px 25px 65px rgba(255, 59, 46, 0.42)"
            : "0px 10px 35px rgba(0, 0, 0, 0.06)",
          borderColor: isInView ? "#FF3B2E" : "#E5E5E5",
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        whileHover={{ scale: 1.07 }}
        onClick={() => onOpenModal(step)}
        className="group relative max-w-md w-full p-7 sm:p-9 rounded-[2.4rem] border-2 cursor-pointer z-10 overflow-hidden"
      >
        {/* Active Top Accent Glow Bar */}
        {isInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-white/30 via-white to-white/30"
          />
        )}

        {/* Top Header: Pin Hole Clip + Stage Badge */}
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-3.5 h-3.5 rounded-full border border-black/10 transition-colors ${
              isInView ? "bg-white" : "bg-neutral-300"
            }`}
          />
          <span
            className={`font-sora font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border transition-colors ${
              isInView
                ? "bg-white/15 border-white/30 text-white"
                : "bg-neutral-100 border-neutral-200 text-neutral-500"
            }`}
          >
            {step.stageTag}
          </span>
        </div>

        {/* Title + Stage Icon */}
        <div className="flex items-center gap-3.5 mb-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-inner flex-shrink-0 ${
              isInView
                ? "bg-white/20 text-white border border-white/30"
                : "bg-[#FF3B2E]/10 text-[#FF3B2E] border border-[#FF3B2E]/20"
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="font-sora font-extrabold text-2xl sm:text-3xl tracking-tight">
            {step.title}
          </h3>
        </div>

        {/* Step Description */}
        <p
          className={`font-inter text-sm sm:text-base leading-relaxed font-normal ${
            isInView ? "text-white/95" : "text-neutral-600"
          }`}
        >
          {step.description}
        </p>

        {/* Bottom Bar: Status Indicator + Click Arrow Button */}
        <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
          <span
            className={`text-xs font-sora font-semibold flex items-center gap-1.5 ${
              isInView ? "text-white/90" : "text-neutral-400"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Click card to explore</span>
          </span>

          <motion.div
            whileHover={{ scale: 1.25, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isInView
                ? "bg-white text-[#FF3B2E] shadow-lg"
                : "bg-neutral-100 text-neutral-600 group-hover:bg-[#FF3B2E] group-hover:text-white"
            }`}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>

      {/* Final step "Ready for production 🚀" Animated SaaS Pill Badge */}
      {index === 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 50, rotate: 6 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 18,
            delay: 0.35,
          }}
          className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-4 lg:right-10 z-20"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#121212] text-white border border-emerald-500/40 shadow-[0_10px_35px_rgba(16,185,129,0.3)] backdrop-blur-xl font-sora font-extrabold text-sm sm:text-base lg:text-lg italic cursor-pointer group"
          >
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </span>
            <span className="bg-gradient-to-r from-white via-neutral-100 to-emerald-200 bg-clip-text text-transparent">
              Ready for production
            </span>
            <motion.span
              animate={{ rotate: [0, 10, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.4, rotate: 20 }}
              className="inline-block text-xl sm:text-2xl"
            >
              🚀
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

interface ProcessSectionProps {
  onModalToggle?: (isOpen: boolean) => void;
}

export default function ProcessSection({ onModalToggle }: ProcessSectionProps) {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);

  const handleOpenStep = (step: ProcessStep) => {
    setSelectedStep(step);
    if (onModalToggle) onModalToggle(true);
  };

  const handleCloseStep = () => {
    setSelectedStep(null);
    if (onModalToggle) onModalToggle(false);
  };

  return (
    <section
      id="process"
      className="relative w-full bg-[#FAFAFA] text-neutral-900 py-24 sm:py-32 px-6 sm:px-12 md:px-16 overflow-hidden selection:bg-[#FF3B2E] selection:text-white"
    >
      {/* Subtle Dot Matrix Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none" />

      {/* Top Wave Transition from Dark Skills Section */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-[40px] sm:h-[65px] lg:h-[90px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,45 C1080,85 720,15 0,55 Z"
            fill="#0A0A0A"
          />
          <path
            d="M1440,45 C1080,85 720,15 0,55"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="8"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto pt-10 relative z-20">
        {/* Header Block Centered */}
        <div className="flex flex-col items-center text-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-200/80 border border-neutral-300/80 text-xs sm:text-sm font-semibold tracking-wider text-neutral-700 uppercase font-sora shadow-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#FF3B2E]" />
            <span>MY WORKFLOW &amp; METHODOLOGY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-[1.15] mb-4 max-w-3xl"
          >
            Here’s how I turn ideas into{" "}
            <span className="bg-gradient-to-r from-[#FF3B2E] via-[#FF5722] to-[#FF8A00] bg-clip-text text-transparent">
              real-world
            </span>{" "}
            applications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl"
          >
            Click any process stage card below to explore my tools, design sources, research approach, and production methodology.
          </motion.p>
        </div>

        {/* Zig-Zag Journey Flow (Right -> Left -> Right -> Left) */}
        <div className="relative flex flex-col space-y-24 sm:space-y-36">
          {/* Background Wavy Journey Dashed Line SVG */}
          <svg
            className="absolute left-0 right-0 -top-24 bottom-0 w-full h-[calc(100%+6rem)] pointer-events-none hidden md:block opacity-50 z-0"
            viewBox="0 0 1000 1500"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="7"
                markerHeight="7"
                refX="4"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 7 3.5, 0 7" fill="#171717" />
              </marker>
            </defs>

            {/* Header Subtitle Text to Step 01 (Research & Strategy) */}
            <path
              d="M 500 0 C 500 80, 620 90, 650 140"
              stroke="#171717"
              strokeWidth="3.5"
              strokeDasharray="8 8"
              markerEnd="url(#arrowhead)"
            />

            {/* Step 1 (Right) to Step 2 (Left) */}
            <path
              d="M 650 190 C 450 320, 250 370, 350 520"
              stroke="#171717"
              strokeWidth="3.5"
              strokeDasharray="8 8"
              markerEnd="url(#arrowhead)"
            />
            {/* Step 2 (Left) to Step 3 (Right) */}
            <path
              d="M 350 550 C 450 690, 650 750, 650 890"
              stroke="#171717"
              strokeWidth="3.5"
              strokeDasharray="8 8"
              markerEnd="url(#arrowhead)"
            />
            {/* Step 3 (Right) to Step 4 (Left) */}
            <path
              d="M 650 920 C 450 1070, 250 1150, 350 1290"
              stroke="#171717"
              strokeWidth="3.5"
              strokeDasharray="8 8"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.number}
              step={step}
              index={index}
              onOpenModal={(s) => handleOpenStep(s)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal Dialog */}
      <AnimatePresence>
        {selectedStep && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseStep}
              className="absolute inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#121212] text-white rounded-[2.5rem] border border-neutral-800 shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden z-10"
            >
              {/* Top Banner Accent */}
              <div className="h-2 w-full bg-gradient-to-r from-[#FF3B2E] via-[#FF5722] to-[#FF8A00]" />

              {/* Modal Content Padding */}
              <div className="p-6 sm:p-9 space-y-6 max-h-[85vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF3B2E]/15 border border-[#FF3B2E]/30 flex items-center justify-center text-[#FF3B2E]">
                      <selectedStep.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-sora font-extrabold text-[#FF3B2E] tracking-wider uppercase">
                        {selectedStep.stageTag}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-sora font-extrabold tracking-tight">
                        {selectedStep.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={handleCloseStep}
                    className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Deep Dive Philosophy Paragraph */}
                <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-neutral-300 font-inter text-sm sm:text-base leading-relaxed">
                  <p>{selectedStep.details.deepDiveText}</p>
                </div>

                {/* Mentorship & Real-World Validation */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-sora font-extrabold tracking-wider uppercase text-neutral-400">
                    <Users className="w-4 h-4 text-[#FF3B2E]" />
                    <span>Real-World Validation &amp; Mentorship</span>
                  </div>
                  <p className="font-inter text-sm text-neutral-300 bg-neutral-900/50 p-3.5 rounded-xl border border-neutral-800/80">
                    {selectedStep.details.mentorsAndValidation}
                  </p>
                </div>

                {/* Tools & Resources Tags */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-sora font-extrabold tracking-wider uppercase text-neutral-400">
                    <Lightbulb className="w-4 h-4 text-[#FF3B2E]" />
                    <span>Tools, AI Assistants &amp; Platforms</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedStep.details.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3.5 py-1.5 rounded-xl bg-neutral-800/90 border border-neutral-700/60 text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5 shadow-sm"
                      >
                        <ExternalLink className="w-3 h-3 text-[#FF3B2E]" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Focus & Production Pillars */}
                <div className="space-y-2.5 pt-2 border-t border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-sora font-extrabold tracking-wider uppercase text-neutral-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Core Pillars &amp; Standards</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedStep.details.focusAreas.map((area) => (
                      <div
                        key={area}
                        className="flex items-center gap-2 p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm text-neutral-200 font-medium"
                      >
                        <Zap className="w-4 h-4 text-[#FF3B2E] flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Wave Transition to Dark Projects Section */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none transform translate-y-1">
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
