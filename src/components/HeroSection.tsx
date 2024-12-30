"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-4xl mx-auto rounded-2xl p-12 backdrop-blur-sm "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Game & Backend Developer
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting immersive gaming experiences and scalable backend solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="border border-gray-800 hover:border-primary text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-opacity-100" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button size="lg" className="border border-gray-800 hover:border-primary text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-opacity-100" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
