"use client";

import { motion } from "framer-motion";

import ForceGraph from "@/components/SkillForceGraph";
import { SkillsData } from "@/data";


export default function SkillsSection({ fadeIn }: { fadeIn: object }) {
  return (
    <section id="skills" className="py-20  bg-[#3c3e42]">
      <motion.div className="max-w-7xl mx-auto px-4" {...fadeIn}>
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        <div className="w-full">
          <ForceGraph 
            data={SkillsData}
            aspectRatio={0.75}
          />
        </div>
      </motion.div>
    </section>
  );
}
