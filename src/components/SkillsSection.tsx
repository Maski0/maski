"use client";

import ForceGraph from "@/components/SkillForceGraph";
import { SkillsData } from "@/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[#3c3e42]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        <div className="w-full">
          <ForceGraph 
            data={SkillsData}
            aspectRatio={0.75}
          />
        </div>
      </div>
    </section>
  );
}
