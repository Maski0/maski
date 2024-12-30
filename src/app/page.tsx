"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Particles } from "@/components/utils/particles";

export default function Portfolio() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const skills = {
    languages: ["Python", "JavaScript", "C#", "Java", "SQL"],
    gamedev: ["Unity", "Unreal Engine", "Godot", "WebGL", "Three.js"],
    backend: ["Node.js", "Django", "FastAPI", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
  };

  const projects = [
    {
      title: "3D RPG Game",
      description:
        "A fantasy RPG built with Unity featuring procedural generation and advanced AI systems.",
      tech: ["Unity", "C#", "Blender"],
      link: "#",
    },
    {
      title: "Game Backend Service",
      description:
        "Scalable backend service handling game state, multiplayer, and leaderboards.",
      tech: ["Node.js", "MongoDB", "WebSocket"],
      link: "#",
    },
    {
      title: "Physics Engine",
      description:
        "Custom 2D physics engine with rigid body dynamics and collision detection.",
      tech: ["C++", "OpenGL"],
      link: "#",
    },
  ];

  const experience = [
    {
      role: "Senior Game Developer",
      company: "GameStudio Inc",
      period: "2020 - Present",
      description:
        "Led development of multiple successful game titles, implemented core gameplay systems.",
    },
    {
      role: "Backend Engineer",
      company: "TechCorp",
      period: "2018 - 2020",
      description:
        "Developed scalable backend services for mobile games and real-time applications.",
    },
    {
      role: "Game Developer",
      company: "IndieGames Ltd",
      period: "2016 - 2018",
      description:
        "Created indie games and prototypes, handled both gameplay and backend systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />
      <div className="">
        <HeroSection />

        <AboutSection fadeIn={fadeIn} />

        <ExperienceSection experience={experience} fadeIn={fadeIn} />

        <ProjectsSection projects={projects} fadeIn={fadeIn} />

        <SkillsSection skills={skills} fadeIn={fadeIn} />

        <ContactSection fadeIn={fadeIn} />

        <Footer />
      </div>
      <Particles className="absolute inset-0" quantity={100} ease={80} color="#ffffff" refresh />
    </div>
      
  );
}
