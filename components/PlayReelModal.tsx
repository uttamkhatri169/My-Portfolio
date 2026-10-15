"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Film } from "lucide-react";

interface PlayReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlayReelModal({ isOpen, onClose }: PlayReelModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Auto-play video on open
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = "unset";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Dark Frosted Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/92 backdrop-blur-2xl cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#0C0C0E] border-2 border-white/20 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF3B2E]/20 border border-[#FF3B2E]/40 flex items-center justify-center text-[#FF3B2E]">
                  <Film className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-sora font-bold text-base sm:text-lg text-white">
                    Uttam Khatri — Developer Showreel
                  </h3>
                  <span className="text-[11px] font-mono text-white/50 block">
                    AI/ML &amp; Full-Stack Engineering Preview
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="inline-flex items-center justify-center p-2 rounded-full bg-red-600 hover:bg-red-500 text-white transition-all shadow-xl cursor-pointer"
                title="Close Reel (or press Esc)"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src="/video-project.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Bottom Footer Info */}
            <div className="px-6 py-3.5 border-t border-white/10 bg-black flex items-center justify-between text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Full HD 1080p Showcase</span>
              </div>
              <button
                onClick={onClose}
                className="py-1.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-sora font-semibold text-xs transition-colors cursor-pointer"
              >
                Close Video
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
