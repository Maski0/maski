"use client";

import { aboutData } from "@/data";
import { motion } from "framer-motion";


interface AboutSectionProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export default function AboutSection({ fadeIn }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div className="max-w-4xl mx-auto rounded-2xl p-12 backdrop-blur-sm" {...fadeIn}>
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="space-y-4 text-gray-300">
          {aboutData.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
