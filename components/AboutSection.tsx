"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Sparkle Star Component
function SparkleStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

// Python Badge Icon
function PythonIcon() {
  return (
    <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.3 0c-17.6 0-16.5 7.6-16.5 7.6l.1 7.9h16.8v2.4H20.4S2.8 16 2.8 33.6c0 17.6 15.4 17 15.4 17h9.2v-13s-.5-15.5 15.5-15.5h26.7s14.8.2 14.8-14.4c0-14.6-14.8-17.7-14.8-17.7l-6.3.1zm-8.8 9.5c2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7z" />
      <path fill="#FFD43B" d="M64.7 128c17.6 0 16.5-7.6 16.5-7.6l-.1-7.9H64.3v-2.4h43.3s17.6 1.9 17.6-15.7c0-17.6-15.4-17-15.4-17h-9.2v13s.5 15.5-15.5 15.5H38.4s-14.8-.2-14.8 14.4c0 14.6 14.8 17.7 14.8 17.7l6.3-.1zm8.8-9.5c-2.6 0-4.7-2.1-4.7-4.7 0-2.6-2.1-4.7-4.7-4.7 2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7z" />
    </svg>
  );
}

// PyTorch Badge Icon
function PyTorchIcon() {
  return (
    <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="#EE4C2C">
      <path d="M15.42 2.58a.75.75 0 00-1.12.16L12.4 5.4a.75.75 0 01-1.22-.16l-.58-.96a.75.75 0 00-1.28 0l-5.5 9.17A7.5 7.5 0 1017.5 16.5c0-2.82-1.57-5.32-3.92-6.58l1.9-3.17a.75.75 0 00-.06-1.17zM12 20.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" />
    </svg>
  );
}

// TensorFlow Badge Icon
function TensorFlowIcon() {
  return (
    <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24">
      <path fill="#FF6F00" d="M12 2L3 7v10l4 2.33V10.83L12 7.5l5 3.33v8.5L21 17V7l-9-5z" />
      <path fill="#FF8F00" d="M12 7.5L7 10.83v8.5L12 21.67V7.5z" />
    </svg>
  );
}

// Docker Badge Icon
function DockerIcon() {
  return (
    <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.575a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm0 5.43h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.074a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.716h2.119a.186.186 0 00.185-.185V6.29a.185.185 0 00-.185-.185H8.074a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185zm-2.955 2.716h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.716h2.119a.186.186 0 00.186-.185V6.29a.185.185 0 00-.186-.185H5.119a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185zm-2.954 2.716h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186H2.165a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.716h2.118a.185.185 0 00.186-.185V6.29a.185.185 0 00-.186-.185H2.165a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185zm.04 4.542c-.886.502-1.92.83-2.205.856h-.14v.68c.068.324.78 1.48 2.215 2.222 2.015 1.042 5.097 1.34 7.643 1.34 4.743 0 8.788-1.503 10.37-4.808a.186.186 0 00-.03-.205l-.01-.01c-.417-.464-1.258-.87-2.148-.87h-1.635l-.01.01c-.13.344-.658 1.58-2.38 1.58-1.42 0-2.21-1.077-2.316-1.59h-9.35z" />
    </svg>
  );
}

// AWS Badge Icon
function AWSIcon() {
  return (
    <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="#FF9900">
      <path d="M6.73 12.08c-.76 0-1.44.17-2.02.5-.59.33-.88.75-.88 1.27 0 .42.17.75.5.99.34.25.79.37 1.35.37.58 0 1.13-.17 1.63-.51.51-.34.8-.75.88-1.24v-1.38h-1.46zm4.98 2.91c0-.49-.13-.98-.38-1.46-.25-.48-.62-.89-1.1-1.22-.48-.33-1.07-.58-1.77-.75l-1.92-.47c-.52-.13-.91-.28-1.17-.46-.26-.18-.39-.42-.39-.72 0-.32.17-.58.51-.79.34-.21.82-.32 1.44-.32.55 0 1.05.1 1.5.3.45.2.82.47 1.11.81l1.62-1.45c-.56-.63-1.26-1.1-2.1-1.41-.84-.31-1.78-.46-2.82-.46-1.22 0-2.25.26-3.09.78-.84.52-1.26 1.24-1.26 2.16 0 .7.22 1.27.66 1.71.44.44 1.07.76 1.89.96l1.89.47c.56.14.98.31 1.26.51.28.2.42.47.42.81 0 .37-.19.67-.57.9-.38.23-.94.35-1.68.35-.74 0-1.42-.14-2.04-.42-.62-.28-1.14-.68-1.56-1.2l-1.65 1.48c.7.83 1.55 1.45 2.55 1.86 1 .41 2.13.62 3.39.62 1.34 0 2.45-.28 3.33-.84.88-.56 1.32-1.34 1.32-2.34zM16.5 7h-2.1v9.5h2.1V7zm5.5 0h-2.1v9.5h2.1V7z" />
    </svg>
  );
}

// React Atom / MERN Stack Icon
function ReactAtomIcon() {
  return (
    <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#61DAFB] animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#FF3B2E] text-white pt-20 pb-24 sm:pt-28 sm:pb-36 px-6 sm:px-12 md:px-16 overflow-hidden">
      {/* Top Organic Wave Transition from Hero Section */}
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
        </svg>
      </div>
      {/* Decorative Sparkle Stars */}
      <SparkleStar className="absolute top-10 right-8 sm:right-16 w-10 h-10 sm:w-14 sm:h-14 text-black/35 pointer-events-none" />
      <SparkleStar className="absolute bottom-28 left-6 sm:left-12 w-10 h-10 sm:w-14 sm:h-14 text-black/35 pointer-events-none" />

      {/* Main Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 relative">

        {/* Left Column: Hanging Lanyard ID Card (Drops from above on scroll) */}
        <motion.div
          initial={{ opacity: 0, y: -220, rotate: -8, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
            mass: 1.1,
            delay: 0.15,
          }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative origin-top"
        >
          {/* Lanyard Top Strap & Ring Clip */}
          <div className="flex flex-col items-center z-20 mb-[-12px]">
            <div className="w-3.5 h-16 bg-neutral-900 rounded-b-sm shadow-md" />
            <div className="w-9 h-5 border-4 border-neutral-900 bg-neutral-800 rounded-md shadow-lg" />
          </div>

          {/* ID Card Outer Frame with gentle hover swing */}
          <motion.div
            whileHover={{ rotate: 2, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-black p-3.5 rounded-[2.5rem] shadow-2xl border-4 border-black/80 max-w-[320px] sm:max-w-[360px] w-full"
          >
            {/* Inner Card Frame */}
            <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden bg-[#FF3B2E] border-2 border-neutral-900 shadow-inner">
              <Image
                src="/raj.png"
                alt="Uttam Khatri ID Card"
                fill
                priority
                quality={100}
                className="object-cover filter contrast-[1.04]"
                style={{ objectPosition: "72% 35%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Hello text & Bio (Slides in smoothly from right) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
          {/* Heading "Hello!" */}
          <motion.h2
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.25 }}
            className="font-sora font-extrabold text-5xl sm:text-6xl lg:text-7xl text-black tracking-tight drop-shadow-sm"
          >
            Hello!
          </motion.h2>

          {/* Paragraph Bio */}
          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.4 }}
            className="font-inter text-base sm:text-xl lg:text-2xl text-white font-medium leading-relaxed max-w-2xl"
          >
            Hi, my name is{" "}
            <span className="font-extrabold text-black uppercase tracking-wide">
              Uttam Khatri
            </span>
            . I am a 4th-year B.Tech CSE (AI &amp; ML) student at Lovely Professional University, Punjab (8.01 CGPA), schooling from Mata Sheetla Public Sr Sec School Rindhana, Sonipat.
          </motion.p>

          {/* 6 Tech Stack Circular Badges (Grid of 6) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.45,
                },
              },
            }}
            className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 md:gap-5 pt-4 max-w-2xl"
          >
            {/* PYTHON */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.8 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16 rounded-full bg-[#18181b] border-2 border-white/30 flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer">
                <PythonIcon />
              </div>
              <span className="font-sora font-extrabold text-[10px] sm:text-[11px] text-white tracking-wider uppercase text-center">
                PYTHON
              </span>
            </motion.div>

            {/* PYTORCH */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.8 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16 rounded-full bg-[#18181b] border-2 border-[#EE4C2C]/50 flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer">
                <PyTorchIcon />
              </div>
              <span className="font-sora font-extrabold text-[10px] sm:text-[11px] text-white tracking-wider uppercase text-center">
                PYTORCH
              </span>
            </motion.div>

            {/* TENSORFLOW */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.8 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16 rounded-full bg-[#18181b] border-2 border-[#FF6F00]/50 flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer">
                <TensorFlowIcon />
              </div>
              <span className="font-sora font-extrabold text-[10px] sm:text-[11px] text-white tracking-wider uppercase text-center">
                TENSORFLOW
              </span>
            </motion.div>

            {/* DOCKER */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.8 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16 rounded-full bg-[#18181b] border-2 border-[#2496ED]/50 flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer">
                <DockerIcon />
              </div>
              <span className="font-sora font-extrabold text-[10px] sm:text-[11px] text-white tracking-wider uppercase text-center">
                DOCKER
              </span>
            </motion.div>

            {/* AWS */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.8 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16 rounded-full bg-[#18181b] border-2 border-[#FF9900]/50 flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer">
                <AWSIcon />
              </div>
              <span className="font-sora font-extrabold text-[10px] sm:text-[11px] text-white tracking-wider uppercase text-center">
                AWS
              </span>
            </motion.div>

            {/* MERN STACK */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.8 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-13 h-13 sm:w-15 sm:h-15 lg:w-16 lg:h-16 rounded-full bg-[#20232A] border-2 border-[#61DAFB]/50 flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer">
                <ReactAtomIcon />
              </div>
              <span className="font-sora font-extrabold text-[10px] sm:text-[11px] text-white tracking-wider uppercase text-center">
                MERN STACK
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wavy Organic Bottom Curve Transition with White Outline Accent */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-[50px] sm:h-[80px] lg:h-[110px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          {/* White Border Outline along the curve */}
          <path
            d="M0,32 C360,110 720,0 1440,70"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="70"
            strokeLinecap="round"
            className="opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          />
          {/* Black Skills Section background fill */}
          <path
            d="M0,32 C360,110 720,0 1440,70 L1440,120 L0,120 Z"
            fill="#0A0A0A"
          />
        </svg>
      </div>
    </section>
  );
}
