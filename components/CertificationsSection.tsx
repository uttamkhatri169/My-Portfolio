"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Award,
  ExternalLink,
  Download,
  FileText,
  Copy,
  Check,
  X,
  Eye,
  Calendar,
  Building2,
  Briefcase,
} from "lucide-react";

interface Certificate {
  id: string;
  type: "certification" | "internship";
  title: string;
  issuer: string;
  date: string;
  period?: string;
  credentialId?: string;
  link: string;
  thumbnail: string;
  image: string;
  badge: string;
  badgeColors: {
    bg: string;
    text: string;
    border: string;
  };
  description: string;
  tags: string[];
}

const credentialsData: Certificate[] = [
  {
    id: "cert-oracle",
    type: "certification",
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle Corporation / Oracle University",
    date: "Valid: Oct 31, 2025 – Oct 31, 2027",
    credentialId: "103047540OCI25GAIOCP",
    link: "/certificates/Oracle-certified.pdf",
    thumbnail: "/certificates/oracle-cert.png",
    image: "/certificates/oracle-cert.png",
    badge: "Official Oracle Cloud Certification",
    badgeColors: {
      bg: "bg-amber-500/15",
      text: "text-amber-300",
      border: "border-amber-400/40",
    },
    description:
      "Official professional accreditation validating production mastery of Large Language Models (LLMs), Vector RAG pipelines, fine-tuning, embeddings, and enterprise AI deployment on Oracle Cloud Infrastructure.",
    tags: ["Generative AI", "LLMs & RAG", "Prompt Tuning", "OCI Cloud AI"],
  },
  {
    id: "cert-dsa",
    type: "certification",
    title: "Alpha — Data Structures & Algorithms (DSA with Java)",
    issuer: "Apna College (Shradha Khapra)",
    date: "Verified Completion",
    credentialId: "6630d585708f58cc1e0d59dd",
    link: "/certificates/DSA-Apna College.pdf",
    thumbnail: "/certificates/dsa-cert.png",
    image: "/certificates/dsa-cert.png",
    badge: "Core CS & Algorithms",
    badgeColors: {
      bg: "bg-cyan-500/15",
      text: "text-cyan-300",
      border: "border-cyan-400/40",
    },
    description:
      "Rigorous algorithms certification demonstrating deep software engineering skills in Java, complexity analysis, dynamic programming, binary trees, heaps, and graph problem-solving.",
    tags: ["Java & OOP", "Graphs & Trees", "Dynamic Programming", "Time Complexity"],
  },
  {
    id: "internship-futurense-2",
    type: "internship",
    title: "Summer Internship — LLM Systems & Applied GenAI",
    issuer: "Futurense Technologies (School of AI)",
    date: "June 2026 – July 2026",
    period: "26 June 2026 – 26 July 2026",
    link: "/certificates/Futurense-School of AI Internship2.pdf",
    thumbnail: "/certificates/futurense-internship2.png",
    image: "/certificates/futurense-internship2.png",
    badge: "Industry AI Internship",
    badgeColors: {
      bg: "bg-purple-500/15",
      text: "text-purple-300",
      border: "border-purple-400/40",
    },
    description:
      "Hands-on summer internship focused on large language model systems, applied generative AI techniques, prompt chaining, and the complete lifecycle of building and deploying GenAI-driven applications.",
    tags: ["LLM Systems", "Applied GenAI", "Model Deployment", "Vikas Gupta (MD) Signed"],
  },
  {
    id: "internship-futurense-1",
    type: "internship",
    title: "Summer Internship — AI & Data Engineering",
    issuer: "Futurense Technologies (School of AI)",
    date: "June 2025 – August 2025",
    period: "09 June 2025 – 30 August 2025",
    link: "/certificates/Futurense-School of AI Internship.jpeg",
    thumbnail: "/certificates/Futurense-School of AI Internship.jpeg",
    image: "/certificates/Futurense-School of AI Internship.jpeg",
    badge: "Industry Data Internship",
    badgeColors: {
      bg: "bg-emerald-500/15",
      text: "text-emerald-300",
      border: "border-emerald-400/40",
    },
    description:
      "3-month intensive engineering internship introducing advanced analytical methods, empirical data interpretation, and structuring raw intelligence into actionable decision-making frameworks.",
    tags: ["Data Engineering", "Analytical Insights", "Decision Systems", "Futurense AI"],
  },
];

interface CertificationsSectionProps {
  onModalToggle?: (isOpen: boolean) => void;
}

export default function CertificationsSection({ onModalToggle }: CertificationsSectionProps) {
  const [filter, setFilter] = useState<"all" | "certification" | "internship">("all");
  const [selectedCred, setSelectedCred] = useState<Certificate | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Notify parent page so Navbar automatically slides up/hides
  useEffect(() => {
    onModalToggle?.(!!selectedCred);
  }, [selectedCred, onModalToggle]);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCred(null);
      }
    };

    if (selectedCred) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCred]);

  const filteredCredentials = credentialsData.filter(
    (item) => filter === "all" || item.type === filter
  );

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownload = (link: string, title: string) => {
    const fileName = link.split("/").pop() || `${title}.pdf`;
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.download = fileName;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <section
      id="certifications"
      className="relative w-full bg-[#B81910] text-white py-24 sm:py-32 px-6 sm:px-12 md:px-16 overflow-hidden selection:bg-white selection:text-black"
    >
      {/* Heavy Dark Vignette Overlay for High-Intensity Dark Aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/90 z-0 pointer-events-none" />

      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-[45px] sm:h-[70px] lg:h-[95px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L1440,0 L1440,45 C1080,85 720,15 0,55 Z" fill="#0A0A0A" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto pt-10 relative z-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16 space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-xs sm:text-sm font-semibold tracking-wider text-white uppercase font-sora shadow-xl backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-[#FF3B2E]" />
            <span>Verified Credentials &amp; Honors</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] drop-shadow-2xl"
          >
            Certifications, Internships &amp; CV
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl drop-shadow-md"
          >
            Verified technical credentials from Oracle, Apna College, and Futurense Technologies — establishing validated competence in Generative AI, Algorithms, and enterprise decision systems.
          </motion.p>

          {/* Interactive Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2.5 pt-3"
          >
            {[
              { key: "all", label: "All Credentials (4)" },
              { key: "certification", label: "Industry Certifications (2)" },
              { key: "internship", label: "Internship Experience (2)" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as any)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-sora font-bold transition-all duration-300 cursor-pointer ${
                  filter === tab.key
                    ? "bg-white text-black shadow-2xl scale-105"
                    : "bg-black/70 text-white/90 hover:bg-black/90 border border-white/25 shadow-lg backdrop-blur-md"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* 2x2 Grid of Solid Pitch-Black Luxury Cards - ALL 4 HAVE CERTIFICATE IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredCredentials.map((cred, index) => (
              <motion.div
                key={cred.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                /* SOLID, 100% PITCH-BLACK INTENSE CONTAINER (#070709) */
                className="group relative rounded-[2rem] bg-[#070709] border border-white/15 hover:border-white/35 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-hidden transition-all duration-300"
              >
                {/* Visual Thumbnail for ALL 4 Certificates */}
                <div
                  onClick={() => setSelectedCred(cred)}
                  className="relative w-full h-48 sm:h-52 overflow-hidden bg-black border-b border-white/10 cursor-pointer"
                >
                  <Image
                    src={cred.thumbnail}
                    alt={cred.title}
                    fill
                    className="object-cover object-center filter contrast-[1.04] brightness-[0.92] group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/30" />

                  {/* Hover Hint */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-sora text-xs font-bold backdrop-blur-[2px]">
                    <Eye className="w-4 h-4" />
                    <span>Click for Full Certificate View</span>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sora font-bold uppercase tracking-wider border shadow-xl bg-black/85 backdrop-blur-md ${cred.badgeColors.text} ${cred.badgeColors.border}`}
                    >
                      {cred.type === "internship" ? (
                        <Briefcase className="w-3 h-3" />
                      ) : (
                        <Award className="w-3 h-3" />
                      )}
                      <span>{cred.badge}</span>
                    </span>
                  </div>

                  {/* Top Right Verified Indicator */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-400 bg-black/85 border border-emerald-500/30 px-2.5 py-0.5 rounded-full shadow-lg backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>

                {/* Card Inner Content */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Issuer & Date Header */}
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                      <span className="flex items-center gap-1.5 truncate">
                        <Building2 className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
                        <span className="truncate">{cred.issuer}</span>
                      </span>
                      <span className="flex items-center gap-1 flex-shrink-0 text-neutral-400">
                        <Calendar className="w-3 h-3 text-neutral-500" />
                        <span>{cred.date}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-sora font-extrabold text-lg sm:text-xl text-white group-hover:text-white leading-snug mb-2.5 tracking-tight">
                      {cred.title}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-xs text-neutral-300 leading-relaxed mb-4">
                      {cred.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cred.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-mono text-neutral-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Verification Box & Buttons */}
                  <div>
                    {/* Credential ID or Tenure Box */}
                    {cred.credentialId ? (
                      <div className="bg-black border border-white/15 rounded-xl px-3.5 py-2.5 mb-4 flex items-center justify-between shadow-inner">
                        <div className="min-w-0 pr-2">
                          <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">
                            Credential ID (Click to Copy)
                          </span>
                          <span className="text-xs font-mono text-white font-semibold truncate block">
                            {cred.credentialId}
                          </span>
                        </div>
                        <button
                          onClick={() => handleCopy(cred.id, cred.credentialId!)}
                          title="Copy Credential ID"
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0 cursor-pointer"
                        >
                          {copiedId === cred.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-neutral-300" />
                          )}
                        </button>
                      </div>
                    ) : (
                      <div className="bg-black border border-white/15 rounded-xl px-3.5 py-2.5 mb-4 flex items-center justify-between shadow-inner">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                          Program Tenure
                        </span>
                        <span className="text-xs font-mono text-white font-semibold">
                          {cred.period}
                        </span>
                      </div>
                    )}

                    {/* Action Buttons Row */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => setSelectedCred(cred)}
                        className="py-2.5 px-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sora font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-white/80" />
                        <span>Quick View</span>
                      </button>

                      <a
                        href={cred.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-full bg-white hover:bg-neutral-200 text-black font-sora font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xl"
                      >
                        <span>Original</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Executive Curriculum Vitae (CV) Showcase Dossier */}
        <div className="pt-6 border-t border-white/20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="relative rounded-[2.5rem] bg-[#070709] border-2 border-white/20 hover:border-emerald-500/60 p-7 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-grow space-y-4 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-sora font-bold text-xs tracking-wider uppercase shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Executive CV (2026 Edition)</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-neutral-300 font-mono text-xs border border-white/15">
                    1-Page ATS Standard PDF
                  </span>
                </div>

                <div>
                  <h3 className="font-sora font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                    Uttam Khatri — Official Curriculum Vitae
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed mt-2">
                    Comprehensive technical dossier detailing production AI/ML engineering, Full-Stack software development, Java &amp; Python mastery, verified certifications, and academic background at Lovely Professional University.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                  {[
                    "AI & Machine Learning",
                    "Java & Python",
                    "Vector RAG & LLMs",
                    "Next.js & React",
                    "FastAPI & Node.js",
                    "PostgreSQL & MySQL",
                  ].map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-mono text-neutral-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleDownload("/certificates/my_cv.pdf", "Uttam_Khatri_CV")}
                  className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-sora font-bold text-sm sm:text-base shadow-2xl shadow-emerald-500/30 transition-all text-center cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/certificates/my_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sora font-semibold text-xs sm:text-sm shadow-md transition-all text-center"
                >
                  <FileText className="w-3.5 h-3.5 text-white/80" />
                  <span>Open Full PDF in New Tab</span>
                  <ExternalLink className="w-3 h-3 text-white/60" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ULTRA-HIGH Z-INDEX MODAL (z-[9999] so Navbar can NEVER block it) */}
      <AnimatePresence>
        {selectedCred && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-8">
            {/* Dark Frosted Glass Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCred(null)}
              className="absolute inset-0 bg-black/92 backdrop-blur-2xl cursor-pointer"
            />

            {/* Modal Dialog Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] bg-[#0A0A0C] border-2 border-white/25 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/15 bg-black relative z-20">
                <div className="flex items-center gap-2.5 min-w-0 pr-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sora font-bold uppercase border bg-white/5 ${selectedCred.badgeColors.text} ${selectedCred.badgeColors.border}`}
                  >
                    {selectedCred.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 hidden sm:inline truncate">
                    {selectedCred.issuer}
                  </span>
                </div>

                {/* Prominent Action Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDownload(selectedCred.link, selectedCred.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white font-sora text-xs font-semibold transition-all shadow-md cursor-pointer"
                    title="Download Credential File"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </button>

                  <button
                    onClick={() => setSelectedCred(null)}
                    className="inline-flex items-center justify-center p-2 rounded-full bg-red-600 hover:bg-red-500 text-white transition-all shadow-xl cursor-pointer"
                    title="Close Preview (or press Esc)"
                  >
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Viewer - High-Res Crisp Image View (No Scrollbars!) */}
              <div className="flex-grow overflow-y-auto p-4 sm:p-6 flex flex-col items-center justify-center bg-black">
                <div className="relative w-full max-w-3xl rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                  <Image
                    src={selectedCred.image}
                    alt={selectedCred.title}
                    width={1600}
                    height={1150}
                    className="w-full h-auto object-contain max-h-[70vh] rounded-xl"
                    priority
                  />
                </div>
              </div>

              {/* Modal Bottom Footer */}
              <div className="px-5 sm:px-7 py-3.5 border-t border-white/15 bg-black flex flex-col sm:flex-row items-center justify-between gap-3 relative z-20">
                <div className="text-center sm:text-left min-w-0">
                  <h4 className="font-sora font-bold text-xs sm:text-sm text-white truncate">
                    {selectedCred.title}
                  </h4>
                  {selectedCred.credentialId && (
                    <span className="text-[11px] font-mono text-neutral-400">
                      ID: {selectedCred.credentialId}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={selectedCred.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 rounded-full bg-white text-black hover:bg-neutral-200 font-sora font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
                  >
                    <span>Open Original Document</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedCred(null)}
                    className="py-2 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-sora font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
