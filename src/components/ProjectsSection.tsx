"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export default function ProjectsSection({ projects, fadeIn }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20">
      <motion.div className="max-w-4xl mx-auto px-4" {...fadeIn}>
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-black/50 border-gray-800 hover:border-primary transition-colors"
            >
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
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
  );
}
