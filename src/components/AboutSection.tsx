"use client";

import { aboutData } from "@/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto rounded-2xl p-12 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="space-y-4 text-gray-300">
          {aboutData.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
