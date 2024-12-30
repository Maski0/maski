"use client";

import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import ForceGraph from "@/components/SkillForceGraph";
import { SkillsData } from "@/data";

interface Skills {
  languages: string[];
  gamedev: string[];
  backend: string[];
  tools: string[];
}

interface SkillsSectionProps {
  skills: Skills;
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export default function SkillsSection({ skills, fadeIn }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <motion.div className="max-w-7xl mx-auto px-4" {...fadeIn}>
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        {/* <Tabs defaultValue="languages" className="max-w-3xl mx-auto">
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
        </Tabs> */}
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
