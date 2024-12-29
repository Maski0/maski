'use client'

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Terminal, Menu } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function Portfolio() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const skills = {
    languages: ["Python", "JavaScript", "C#", "Java", "SQL"],
    gamedev: ["Unity", "Unreal Engine", "Godot", "WebGL", "Three.js"],
    backend: ["Node.js", "Django", "FastAPI", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
  }

  const projects = [
    {
      title: "3D RPG Game",
      description: "A fantasy RPG built with Unity featuring procedural generation and advanced AI systems.",
      tech: ["Unity", "C#", "Blender"],
      link: "#"
    },
    {
      title: "Game Backend Service",
      description: "Scalable backend service handling game state, multiplayer, and leaderboards.",
      tech: ["Node.js", "MongoDB", "WebSocket"],
      link: "#"
    },
    {
      title: "Physics Engine",
      description: "Custom 2D physics engine with rigid body dynamics and collision detection.",
      tech: ["C++", "OpenGL"],
      link: "#"
    }
  ]

  const experience = [
    {
      role: "Senior Game Developer",
      company: "GameStudio Inc",
      period: "2020 - Present",
      description: "Led development of multiple successful game titles, implemented core gameplay systems."
    },
    {
      role: "Backend Engineer",
      company: "TechCorp",
      period: "2018 - 2020",
      description: "Developed scalable backend services for mobile games and real-time applications."
    },
    {
      role: "Game Developer",
      company: "IndieGames Ltd",
      period: "2016 - 2018",
      description: "Created indie games and prototypes, handled both gameplay and backend systems."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Center Square Nav */}
      <nav 
        className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300
          ${isNavExpanded ? 'w-64' : 'w-16'} 
          bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800
          hover:shadow-lg hover:shadow-primary/20`}
        onMouseEnter={() => setIsNavExpanded(true)}
        onMouseLeave={() => setIsNavExpanded(false)}
      >
        <div className="p-4 flex flex-col">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 mb-8">
            <Terminal className="w-8 h-8 min-w-[2rem]" />
            <span className={`overflow-hidden transition-all duration-300 whitespace-nowrap font-bold text-xl
              ${isNavExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
              John.dev
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex flex-col gap-4">
            {[
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 min-w-[2rem] flex items-center justify-center 
                  bg-gray-800/50 rounded-lg group-hover:bg-primary/20">
                  {link.href === "#about" && "01"}
                  {link.href === "#experience" && "02"}
                  {link.href === "#projects" && "03"}
                  {link.href === "#skills" && "04"}
                  {link.href === "#contact" && "05"}
                </div>
                <span className={`overflow-hidden transition-all duration-300 whitespace-nowrap
                  ${isNavExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-col gap-4">
            {[
              { href: "mailto:contact@example.com", icon: Mail, label: "Email" },
              { href: "https://github.com", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
            ].map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors"
              >
                <social.icon className="w-8 h-8 min-w-[2rem]" />
                <span className={`overflow-hidden transition-all duration-300 whitespace-nowrap
                  ${isNavExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                  {social.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pl-24">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Game & Backend Developer
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Crafting immersive gaming experiences and scalable backend solutions
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <motion.div 
            className="max-w-4xl mx-auto px-4"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate game developer and backend engineer with over 6 years of experience in creating
                engaging games and scalable backend systems.
              </p>
              <p>
                My journey in game development started with modding existing games, which led me to pursue
                a career in both game development and backend engineering.
              </p>
              <p>
                I specialize in Unity and Unreal Engine for game development, and Node.js/Python for backend services.
                I'm particularly interested in multiplayer game architectures and real-time systems.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-900">
          <motion.div 
            className="max-w-7xl mx-auto px-4"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-12">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-black/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                      <span className="text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <motion.div className="max-w-7xl mx-auto px-4" {...fadeIn}>
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="bg-black/50 border-gray-800 hover:border-primary transition-colors"
                >
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <Button variant="link" asChild className="p-0">
                      <Link href={project.link}>View Project →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900">
          <motion.div 
            className="max-w-7xl mx-auto px-4"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-12">Skills</h2>
            <Tabs defaultValue="languages" className="max-w-3xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="languages">Languages</TabsTrigger>
                <TabsTrigger value="gamedev">Game Dev</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
              {Object.entries(skills).map(([category, items]) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, index) => (
                      <Badge 
                        key={index}
                        className="text-lg py-2 px-4 hover:bg-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <motion.div 
            className="max-w-7xl mx-auto px-4"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-gray-300">
              I'm currently open to new opportunities and collaborations.
              Feel free to reach out if you'd like to work together!
            </p>
            <div className="flex justify-center gap-6">
              <Button variant="outline" size="lg" asChild>
                <Link href="mailto:contact@example.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://github.com" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://linkedin.com" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
            <p>© {new Date().getFullYear()} John.dev. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}