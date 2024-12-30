"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Particles } from "@/components/utils/particles";
import { experienceData, projectsData } from "@/data";

export default function Portfolio() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
      <div className="">
        <HeroSection />

        <AboutSection fadeIn={fadeIn} />

        <ExperienceSection experience={experienceData} fadeIn={fadeIn} />

        <ProjectsSection projects={projectsData} fadeIn={fadeIn} />

        <SkillsSection fadeIn={fadeIn} />

        <ContactSection fadeIn={fadeIn} />

        <Footer />
      </div>
      <Particles className="absolute inset-0" quantity={100} ease={80} color="#ffffff" refresh />
    </div>
      
  );
}
