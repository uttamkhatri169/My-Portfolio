"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  X,
  Layers,
  Code2,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface Project {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  filterCategory: "all" | "ai-ml" | "cv-cloud" | "fullstack";
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  tags: string[];
  features: string[];
  github: string;
}

const projects: Project[] = [
  {
    id: "vidhi-compliance",
    projectNumber: "PROJECT 01",
    title: "Vidhi – Conflict-Aware Legal Compliance AI",
    category: "Legal Tech & AI Compliance",
    filterCategory: "ai-ml",
    shortDescription:
      "AI-powered regulatory compliance assistant for MSME, GST & Labour laws that identifies chronological contradictions across circular amendments with dated citations.",
    fullDescription:
      "Vidhi is an intelligent compliance assistant engineered to help small business owners and compliance officers navigate contradictory regulatory frameworks across GST, MSME, and Labour laws. Rather than averaging out overlapping amendments into a hallucinated answer, Vidhi actively detects chronological contradictions, providing multi-tiered reasoning with dated source citations, an evaluation harness, Claude AI synthesis, and an offline-first fallback mode.",
    coverImage: "/projects/vidhi-compliance.jpg",
    tags: ["Python", "FastAPI", "Next.js", "Anthropic Claude", "Legal AI", "Evaluation Harness", "Tailwind CSS"],
    features: [
      "Chronological conflict detection across amended GST & Labour circulars",
      "Dated citation tracking preventing hallucinated regulatory interpretations",
      "Dual-engine architecture with FastAPI and lightweight offline mode",
      "Deterministic evaluation test harness for continuous compliance verification",
    ],
    github: "https://github.com/uttamkhatri169/vidhi-conflict-aware-compliance",
  },
  {
    id: "clausecraft-rag",
    projectNumber: "PROJECT 02",
    title: "ClauseCraft – AI Contract Intelligence Platform",
    category: "Legal AI & Vector RAG",
    filterCategory: "ai-ml",
    shortDescription:
      "End-to-end legal intelligence platform leveraging Retrieval-Augmented Generation (RAG) and vector search to audit contracts, extract clauses, and evaluate risk.",
    fullDescription:
      "ClauseCraft is an end-to-end AI legal document intelligence system that automates contract analysis using vector embeddings and semantic search. It ingests PDF and DOCX agreements, preserves paragraph metadata and section hierarchies, and executes vector similarity queries to detect high-risk liabilities, termination conditions, non-competes, and indemnifications with precise clause-level citations.",
    coverImage: "/projects/clausecraft.jpg",
    tags: ["Python", "LangChain", "ChromaDB", "Vector Search", "LLMs", "RAG", "Streamlit"],
    features: [
      "Automated clause classification (Termination, Liability, Non-Compete, IP)",
      "Multi-format document parsing (PDF & DOCX) with page & section metadata",
      "Vector semantic retrieval for pinpoint question answering with citations",
      "Automated risk scoring and contract clause comparison dashboard",
    ],
    github: "https://github.com/uttamkhatri169/Contract-Intelligence",
  },
  {
    id: "ai-financial-copilot",
    projectNumber: "PROJECT 03",
    title: "AI Financial Copilot – Wealth & Expense Engine",
    category: "FinTech & Predictive AI",
    filterCategory: "ai-ml",
    shortDescription:
      "Full-stack personal finance copilot combining Next.js 16 and FastAPI with automated spending anomaly detection, predictive budgeting, and conversational advisory.",
    fullDescription:
      "An enterprise-grade personal wealth and expense intelligence platform. Features automated CSV transaction parsing, ML anomaly detection for abnormal expenditures, predictive budgeting models based on historical cash flow, interactive Recharts financial analytics, and a conversational financial advisory assistant powered by FastAPI and Next.js 16.",
    coverImage: "/projects/ai-finance.jpg",
    tags: ["Next.js 16", "React 19", "FastAPI", "SQLite", "Recharts", "Tailwind CSS", "Scikit-Learn"],
    features: [
      "Automated transaction categorization & real-time spending anomaly detection",
      "Predictive budget forecasting engine based on historical cash flow trends",
      "Conversational AI financial assistant for interactive advisory & insights",
      "Interactive dashboard with Recharts, Tailwind CSS v4, and FastAPI backend",
    ],
    github: "https://github.com/uttamkhatri169/AI-Financial-Copilot",
  },
  {
    id: "persona-driven-pdf",
    projectNumber: "PROJECT 04",
    title: "Persona-Driven Document Intelligence",
    category: "NLP & Semantic Search",
    filterCategory: "cv-cloud",
    shortDescription:
      "Offline-capable semantic extraction pipeline ranking and summarizing multi-page PDFs based on user persona and task-specific relevance.",
    fullDescription:
      "Built for personalized document understanding, this system extracts and ranks relevant sections from complex multi-page PDFs tailored to specific professional roles (e.g., nutritionists, legal analysts, chefs). Powered by PyMuPDF text geometry extraction, e5-base-v2 sentence embeddings, cosine similarity ranking, and containerized with Docker for 100% air-gapped execution.",
    coverImage: "/projects/persona-pdf.jpg",
    tags: ["Python", "PyMuPDF", "Sentence-Transformers", "e5-base", "Docker", "PyTorch"],
    features: [
      "Role-aware semantic ranking mapping document content to specific personas",
      "Font-geometry and structural heading detection via PyMuPDF",
      "100% offline air-gapped execution with pre-bundled e5-base-v2 model",
      "Fully containerized Docker deployment with automated evaluation pipeline",
    ],
    github: "https://github.com/uttamkhatri169/Persona-Driven-PDF-Understading-System",
  },
  {
    id: "typeform-clone",
    projectNumber: "PROJECT 05",
    title: "TypeForm Clone – Dynamic Form Builder & Analytics",
    category: "Full-Stack Web & UX Engineering",
    filterCategory: "fullstack",
    shortDescription:
      "Interactive drag-and-drop form creation suite featuring one-question-at-a-time animated response flows and live survey analytics.",
    fullDescription:
      "A modern, high-fidelity replica of Typeform. Features an intuitive drag-and-drop builder for designing multi-type question flows, a public responder interface with fluid Framer Motion keyboard transitions, persistent SQLite/SQLAlchemy backend via FastAPI, and real-time response aggregation with CSV exports.",
    coverImage: "/projects/typeform.jpg",
    tags: ["Next.js 14", "TypeScript", "FastAPI", "Tailwind CSS", "Framer Motion", "SQLAlchemy"],
    features: [
      "Drag-and-drop question builder with live preview canvas",
      "Fluid, keyboard-navigable one-question-at-a-time responder experience",
      "FastAPI & SQLite persistence layer with typed Pydantic v2 schemas",
      "Real-time completion analytics & one-click CSV export",
    ],
    github: "https://github.com/uttamkhatri169/TypeForm-Clone",
  },
  {
    id: "sign-language-cv",
    projectNumber: "PROJECT 06",
    title: "Sign Language Recognition & Gesture-to-Text",
    category: "Computer Vision & Deep Learning",
    filterCategory: "cv-cloud",
    shortDescription:
      "Real-time American Sign Language (ASL) recognition pipeline converting hand gestures into text using MediaPipe and custom PyTorch CNN.",
    fullDescription:
      "An assistive computer vision application that captures live camera feeds via OpenCV, extracts 21 hand landmarks using Google MediaPipe, and classifies 29 ASL alphabet gestures using a custom PyTorch Convolutional Neural Network. Features temporal smoothing buffers and NLP autocorrection to build grammatically coherent sentences.",
    coverImage: "/projects/sign-language.jpg",
    tags: ["Python", "PyTorch", "OpenCV", "MediaPipe", "CNN", "NLP", "Computer Vision"],
    features: [
      "Real-time 21-point hand landmark extraction via MediaPipe Hands",
      "Custom trained PyTorch CNN predicting 29 ASL alphabet and action classes",
      "Temporal deque buffering to prevent flickering and false positives",
      "Integrated NLP word assembly and automatic spell-correction pipeline",
    ],
    github: "https://github.com/uttamkhatri169/Sign-Language-Recognition-With-Gesture-To-Text-Translation",
  },
  {
    id: "audio-analysis-azure",
    projectNumber: "PROJECT 07",
    title: "Audio Analytics Pipeline & Dashboard",
    category: "Cloud Architecture & Multimodal AI",
    filterCategory: "cv-cloud",
    shortDescription:
      "Automated end-to-end pipeline transcribing and analyzing speech using Azure Speech Services, Blob Storage, and Google Gemini 2.0.",
    fullDescription:
      "An enterprise audio intelligence system that ingests audio recordings, transcribes multi-speaker dialogues with Azure Cognitive Services Speech-to-Text, processes transcripts with Google Gemini 2.0 Flash for sentiment and key insights, and caches metadata in Azure Blob Storage with an interactive Flask analytics dashboard.",
    coverImage: "/projects/audio-analytics.jpg",
    tags: ["Azure Speech", "Azure Blob Storage", "Google Gemini 2.0", "Python", "Flask", "Cloud AI"],
    features: [
      "Automated speech-to-text transcription via Azure Cognitive Services",
      "Generative AI sentiment analysis and key-topic extraction using Gemini 2.0 Flash",
      "High-throughput caching pipeline using Azure Blob Storage",
      "Interactive audio playback and analytical dashboard",
    ],
    github: "https://github.com/uttamkhatri169/Audio-Analysis-Dashboard",
  },
  {
    id: "studydocs-rag",
    projectNumber: "PROJECT 08",
    title: "StudyDocs RAG – Dual-Engine AI Study Assistant",
    category: "GenAI & Local LLM Orchestration",
    filterCategory: "ai-ml",
    shortDescription:
      "Dual-engine offline RAG system comparing Pure Python and LangChain LCEL implementations running locally on Ollama & ChromaDB.",
    fullDescription:
      "A local, private document question-answering architecture built for computer science students. Ingests textbook PDFs into ChromaDB vector storage and supports dual execution modes: a zero-dependency Pure Python retrieval pipeline and a LangChain Expression Language (LCEL) engine, surfaced through a dark Next.js chat interface with streaming responses.",
    coverImage: "/projects/studydocs-rag.jpg",
    tags: ["Next.js", "Python", "LangChain", "ChromaDB", "Ollama", "Tailwind CSS", "LCEL"],
    features: [
      "Dual RAG engine architecture: Pure Python vs LangChain LCEL benchmark",
      "100% private, local execution with Ollama and ChromaDB vector store",
      "Streaming response generation with citation source inspection",
      "Automated PDF document chunking and vector indexing",
    ],
    github: "https://github.com/uttamkhatri169/LangChainRAG",
  },
  {
    id: "nexus-hr-core",
    projectNumber: "PROJECT 09",
    title: "Nexus HR Core – Enterprise HRMS Platform",
    category: "Full-Stack SaaS & Enterprise Systems",
    filterCategory: "fullstack",
    shortDescription:
      "Comprehensive HR management system with role-based access control, attendance tracking, leave workflows, and Docker orchestration.",
    fullDescription:
      "Nexus HR Core is an enterprise Human Resource Management System engineered with a high-throughput FastAPI backend and a React 18 / Vite frontend. Backed by Supabase PostgreSQL with strict Row-Level Security, JWT authentication, administrative leave approval queues, Recharts attendance metrics, and multi-container Docker Compose deployment.",
    coverImage: "/projects/nexus-hrms.jpg",
    tags: ["React 18", "Vite", "FastAPI", "Supabase", "PostgreSQL", "Docker", "Tailwind CSS"],
    features: [
      "Role-Based Access Control (Admin vs Employee dashboards)",
      "Real-time attendance logging, leave approval workflows, and departmental tracking",
      "Supabase PostgreSQL database with Pydantic validation and JWT auth",
      "Production-ready Docker Compose orchestration with Nginx reverse proxy",
    ],
    github: "https://github.com/uttamkhatri169/HRMS",
  },
  {
    id: "ums-placement-portal",
    projectNumber: "PROJECT 10",
    title: "UMS Placement Portal – University Recruitment Suite",
    category: "Full-Stack EdTech & Career Platform",
    filterCategory: "fullstack",
    shortDescription:
      "University placement management system with Supabase PostgreSQL, JWT student authentication, and automated drive tracking.",
    fullDescription:
      "A centralized campus placement portal designed to connect graduating students with recruitment drives. Built on FastAPI and Supabase, it handles student profile management, resume submission, drive eligibility verification, real-time application status tracking, and automated admin review systems configured for Render deployment.",
    coverImage: "/projects/placement-portal.jpg",
    tags: ["FastAPI", "Supabase", "PostgreSQL", "JWT", "Python", "Tailwind CSS", "Render"],
    features: [
      "Secure student authentication and verified profile onboarding",
      "Company recruitment drive listings with automated eligibility criteria matching",
      "Real-time application tracking and administrative candidate evaluation",
      "Cloud deployment configured for Render with Gunicorn/Uvicorn workers",
    ],
    github: "https://github.com/uttamkhatri169/Placement-Portal",
  },
  {
    id: "dataforge-ml",
    projectNumber: "PROJECT 11",
    title: "DataForge AI – Interactive Machine Learning Studio",
    category: "MLOps & Automated Analytics",
    filterCategory: "ai-ml",
    shortDescription:
      "Zero-code browser-based ML platform for automated dataset preprocessing, clustering, regression, and model evaluation.",
    fullDescription:
      "An intuitive machine learning studio built with Streamlit and Scikit-Learn. Allows users to upload custom CSV datasets, automatically perform missing value imputation and correlation analysis, train supervised and unsupervised models (Regression, Classification, KMeans Clustering), and visualize feature importance graphs.",
    coverImage: "/projects/dataforge-ml.jpg",
    tags: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "Matplotlib", "Seaborn"],
    features: [
      "Zero-code automated data cleaning, normalization, and outlier detection",
      "Interactive Model Studio supporting Regression, Classification & Clustering",
      "Correlation heatmaps, confusion matrices, and ROC-AUC curve visualizers",
      "One-click downloadable trained model weights and analytical reports",
    ],
    github: "https://github.com/uttamkhatri169/MLProject",
  },
  {
    id: "aimath-agent",
    projectNumber: "PROJECT 12",
    title: "AI Math Agent – ReAct Reasoning Calculator",
    category: "Autonomous AI & Tool Calling",
    filterCategory: "ai-ml",
    shortDescription:
      "Autonomous AI agent leveraging Qwen2.5-Coder via Ollama and ReAct protocol for step-by-step reasoning and safe code calculation.",
    fullDescription:
      "An autonomous agent that tackles complex multi-step math and logic problems. Instead of relying on unreliable LLM arithmetic, it implements the ReAct framework (Thought → Action → Observation) using Ollama (Qwen2.5-Coder), dynamically generating Python mathematical functions to calculate exact numerical solutions with complete memory retention.",
    coverImage: "/projects/aimath-agent.jpg",
    tags: ["Python", "FastAPI", "Ollama", "Qwen2.5-Coder", "ReAct Framework", "Tailwind CSS"],
    features: [
      "ReAct reasoning loop decomposing word problems into sequential logic steps",
      "Safe sandboxed calculation delegating arithmetic to deterministic Python code",
      "Dual interface: interactive chat Web UI with Tailwind CSS and debugging CLI",
      "Conversational state tracking preserving intermediate calculation memory",
    ],
    github: "https://github.com/uttamkhatri169/AgentLlma",
  },
];

interface ProjectsSectionProps {
  onModalToggle?: (isOpen: boolean) => void;
}

export default function ProjectsSection({ onModalToggle }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "ai-ml" | "cv-cloud" | "fullstack">("all");

  const filterTabs = [
    { id: "all" as const, label: "All Projects", count: projects.length },
    { id: "ai-ml" as const, label: "AI / ML & GenAI", count: projects.filter((p) => p.filterCategory === "ai-ml").length },
    { id: "cv-cloud" as const, label: "Vision & Cloud", count: projects.filter((p) => p.filterCategory === "cv-cloud").length },
    { id: "fullstack" as const, label: "Full-Stack & SaaS", count: projects.filter((p) => p.filterCategory === "fullstack").length },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterCategory === activeFilter);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    if (onModalToggle) onModalToggle(true);
  };

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
    if (onModalToggle) onModalToggle(false);
  }, [onModalToggle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, handleCloseModal]);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0A0A0A] text-white py-24 sm:py-32 px-6 sm:px-12 md:px-16 overflow-hidden selection:bg-[#FF3B2E] selection:text-white"
    >
      {/* Background Ambient Glow Halo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF3B2E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block Centered */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-4 max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm font-semibold tracking-wider text-white/90 uppercase font-sora shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#FF3B2E]" />
            <span>Featured Repositories</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]"
          >
            Work that speaks for <span className="text-[#FF3B2E]">itself</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base sm:text-lg text-white/60 font-normal leading-relaxed max-w-xl"
          >
            Production-grade systems, autonomous AI agents, computer vision pipelines, and full-stack platforms from my GitHub repository.
          </motion.p>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 pt-4"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-sora font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#FF3B2E] text-white shadow-lg shadow-[#FF3B2E]/25 scale-105"
                      : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-black/30 text-white" : "bg-white/10 text-white/60"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-16"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => handleOpenProject(project)}
                className="group relative bg-[#121214] rounded-[2.2rem] border border-white/15 overflow-hidden shadow-2xl hover:border-[#FF3B2E]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Card Cover Image with Zoom Effect */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/30 opacity-90 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-sora font-extrabold text-[#FF3B2E] border border-white/10 shadow-lg tracking-wider uppercase">
                      {project.projectNumber}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-sora font-semibold text-white/80 border border-white/10 shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* View Project Button Overlay */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF3B2E] text-white font-sora font-bold text-xs shadow-xl">
                      View Architecture
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white mb-3 group-hover:text-[#FF3B2E] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="font-inter text-sm sm:text-base text-white/70 leading-relaxed mb-6 font-normal">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech Stack Pills & Action Buttons */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-inter px-3 py-1 rounded-lg bg-white/5 text-white/70 border border-white/10 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenProject(project);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sora font-bold text-[#FF3B2E] group-hover:underline cursor-pointer"
                      >
                        <span>View Project Details</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      {/* GitHub Link Button Only */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 transition-colors text-xs font-sora font-semibold"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore More Projects CTA Option */}
        <div className="flex justify-center pt-6">
          <motion.a
            href="https://github.com/uttamkhatri169"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-white/20 text-white font-sora font-bold text-sm sm:text-base shadow-2xl hover:border-[#FF3B2E] transition-all cursor-pointer"
          >
            <Layers className="w-5 h-5 text-[#FF3B2E]" />
            <span>Explore All 34 Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>

      {/* Full Project Detail Interactive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-[#121214] text-white rounded-[2.5rem] border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden z-20"
            >
              {/* Modal Cover Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900">
                <Image
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/60" />

                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseModal();
                  }}
                  className="absolute top-5 right-5 z-50 p-3 rounded-full bg-black/80 hover:bg-[#FF3B2E] text-white backdrop-blur-md border border-white/30 shadow-2xl transition-all cursor-pointer hover:scale-110 active:scale-95"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Stage Pill */}
                <div className="absolute bottom-5 left-6 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FF3B2E] text-white font-sora font-extrabold text-xs shadow-lg tracking-wider">
                    {selectedProject.projectNumber}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white/80 font-sora font-medium text-xs border border-white/20">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="p-6 sm:p-9 space-y-6 max-h-[60vh] overflow-y-auto">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-sora font-extrabold text-white mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="font-inter text-sm sm:text-base text-white/80 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3 pt-3 border-t border-white/10">
                  <span className="text-xs font-sora font-extrabold tracking-wider uppercase text-neutral-400 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#FF3B2E]" />
                    <span>Key Architecture Features</span>
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FF3B2E] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2.5 pt-3 border-t border-white/10">
                  <span className="text-xs font-sora font-extrabold tracking-wider uppercase text-neutral-400 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#FF3B2E]" />
                    <span>Technologies &amp; Frameworks</span>
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link: GitHub Repository Only */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-full bg-[#FF3B2E] hover:bg-[#e02e22] text-white font-sora font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-[#FF3B2E]/20 transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Source Code on GitHub</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
