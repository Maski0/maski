"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Portfolio() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    // Smooth scrolling setup
    gsap.config({
      autoSleep: 60,
      force3D: false,
      nullTargetWarn: false,
    });

    // Set up scroll animations
    const sections = gsap.utils.toArray('.scroll-section');
    
    sections.forEach((section) => {
      gsap.fromTo(section as gsap.TweenTarget, 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section as Element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#212121]">
      <Navbar isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
      <div className="">
        <HeroSection />

        <div className="scroll-section">
          <AboutSection />
        </div>

        <div className="scroll-section">
          <ExperienceSection experience={experienceData} />
        </div>

        <div className="scroll-section">
          <ProjectsSection projects={projectsData} />
        </div>

        <div className="scroll-section">
          <SkillsSection />
        </div>

        <div className="scroll-section">
          <ContactSection />
        </div>

        <Footer />
      </div>
      <Particles className="absolute inset-0" quantity={100} ease={80} color="#ffffff" refresh />
    </div>
  );
}
