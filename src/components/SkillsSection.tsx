"use client";

import { motion } from "framer-motion";

import ForceGraph from "@/components/SkillForceGraph";
import { SkillsData } from "@/data";


export default function SkillsSection({ fadeIn }) {
  return (
    <section id="skills" className="py-20  bg-gray-900">
      <motion.div className="max-w-7xl mx-auto px-4" {...fadeIn}>
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        <div className="w-full h-full">
          <ForceGraph 
            data={SkillsData}
            aspectRatio={0.75}
          />
        </div>
      </motion.div>
    </section>
  );
}
