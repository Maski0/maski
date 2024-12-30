"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceSectionProps {
  experience: ExperienceItem[];
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export default function ExperienceSection({
  experience,
  fadeIn,
}: ExperienceSectionProps) {
  // Custom components for ReactMarkdown
  const components = {
    // Style links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300/50 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    // Style paragraphs
    p: ({ children }) => (
      <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
    ),
    // Style unordered lists
    ul: ({ children }) => (
      <ul className="text-gray-300 list-disc pl-6 space-y-2 mb-4">{children}</ul>
    ),
    // Style ordered lists
    ol: ({ children }) => (
      <ol className="text-gray-300 list-decimal pl-6 space-y-2 mb-4">{children}</ol>
    ),
    // Style list items
    li: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    // Style strong/bold text
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    // Style emphasis/italic text
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <motion.div className="max-w-4xl mx-auto px-4" {...fadeIn}>
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
                <ReactMarkdown components={components}>{exp.description}</ReactMarkdown>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}