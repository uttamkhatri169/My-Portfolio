"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  const [isPlayingReel, setIsPlayingReel] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleToggleReel = () => {
    if (!videoRef.current) return;

    if (isPlayingReel) {
      videoRef.current.pause();
      setIsPlayingReel(false);
    } else {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => {
          setIsPlayingReel(true);
        })
        .catch(() => {
          // If browser restricts unmuted autoplay, fallback with muted and play
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play();
            setIsPlayingReel(true);
          }
        });
    }
  };

  const handleVideoEnded = () => {
    setIsPlayingReel(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      id="home"
      className="relative w-full h-[95vh] min-h-[640px] max-h-[850px] overflow-hidden flex flex-col justify-end pb-10 sm:pb-14 px-6 sm:px-12 md:px-20 lg:px-28"
    >
      {/* Background Media: Still Photo (raj.png) & Living Background Video (video-project.mp4) */}
      <div className="absolute inset-0 z-0">
        {/* Still Cover Image Base */}
        <Image
          src="/raj.png"
          alt="Uttam Khatri - AI/ML Developer & Software Engineer"
          fill
          priority
          quality={100}
          className={`object-cover object-[70%_center] sm:object-[68%_center] filter contrast-[1.03] brightness-[0.96] transition-opacity duration-700 ${
            isPlayingReel ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />

        {/* Seamless Living Background Video (No infinite loop; auto closes on complete) */}
        <video
          ref={videoRef}
          src="/video-project.mp4"
          playsInline
          muted={isMuted}
          onEnded={handleVideoEnded}
          className={`absolute inset-0 w-full h-full object-cover object-[70%_center] sm:object-[68%_center] filter contrast-[1.03] brightness-[0.96] transition-opacity duration-700 ${
            isPlayingReel ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Soft Vignette Gradients for Legibility (Overlays both image & video) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent z-10 hidden sm:block pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Bottom Content Area: Left details + Right Play Reel Button */}
      <div className="relative z-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 w-full">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl lg:max-w-3xl"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4 text-xs sm:text-sm font-medium text-white/90 shadow-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Hire &amp; New Opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-sora font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.15] tracking-tight mb-4 drop-shadow-xl">
            Hi, I’m Uttam Khatri<br />
            <span className="text-white/90 font-normal">
              AI/ML Developer &amp; Software Engineer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-base sm:text-lg text-white/80 max-w-xl mb-6 sm:mb-8 leading-relaxed font-normal drop-shadow-md">
            I design and deploy ML-driven applications, backed by strong full-stack, DevOps, and system design skills — from model to production.
          </p>

          {/* Action Buttons: View My Work & Download CV */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* View My Work */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                variant="default"
                className="rounded-full bg-white text-black hover:bg-neutral-200 font-semibold px-7 h-11 sm:h-12 text-sm sm:text-base shadow-xl shadow-white/10 cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
              </Button>
            </motion.div>

            {/* Download Resume / CV */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <a
                href="/certificates/my_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass-pill border border-white/25 text-white hover:bg-white/15 px-6 h-11 sm:h-12 text-sm sm:text-base font-medium shadow-lg transition-all"
              >
                <Download className="w-4 h-4 text-white/90" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Circular Play / Pause Living Reel Button & Audio Toggle (Icon-only, no text) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 self-end md:self-end pb-1"
        >
          {/* Audio Mute / Unmute Button (Shows when video is playing) */}
          {isPlayingReel && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleToggleMute}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all cursor-pointer hover:border-white/40"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white/80" />
              ) : (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              )}
            </motion.button>
          )}

          {/* Circular Play / Pause Icon Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={handleToggleReel}
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl transition-all cursor-pointer backdrop-blur-md border ${
              isPlayingReel
                ? "bg-red-600/90 hover:bg-red-600 border-red-500 text-white shadow-red-600/40 ring-4 ring-red-500/20"
                : "bg-black/50 hover:bg-black/70 border-white/30 hover:border-white/60 text-white group"
            }`}
            title={isPlayingReel ? "Pause" : "Play"}
            aria-label={isPlayingReel ? "Pause" : "Play"}
          >
            <div
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all ${
                isPlayingReel
                  ? "bg-white text-red-600"
                  : "bg-[#FF3B2E] text-white group-hover:scale-105 shadow-md"
              }`}
            >
              {isPlayingReel ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current translate-x-0.5" />
              )}
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
