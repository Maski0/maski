"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
                <p className="text-gray-300">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
