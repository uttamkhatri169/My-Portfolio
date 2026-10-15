"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import CertificationsSection from "@/components/CertificationsSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const isAnyModalOpen = isProjectModalOpen || isProcessModalOpen || isCertModalOpen;

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF3B2E] selection:text-white overflow-x-hidden">
      {/* Floating Left Social Bar */}
      <SocialSidebar />

      {/* Navigation Header */}
      <Navbar isHidden={isAnyModalOpen} />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProcessSection onModalToggle={(isOpen) => setIsProcessModalOpen(isOpen)} />
        <ProjectsSection onModalToggle={(isOpen) => setIsProjectModalOpen(isOpen)} />
        <JourneySection />
        <CertificationsSection onModalToggle={(isOpen) => setIsCertModalOpen(isOpen)} />
        <SoftSkillsSection />
        <Footer />
      </div>
    </main>
  );
}
