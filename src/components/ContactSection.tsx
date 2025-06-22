"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <p className="text-gray-300 mb-6">
          I&apos;m currently open to new opportunities and collaborations.
          Feel free to reach out if you&apos;d like to work together!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button size="lg" className="border border-gray-800 hover:border-primary text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-opacity-100" asChild>
            <Link href="mailto:maskikarsrikar@gmail.com" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email
            </Link>
          </Button>
          <Button size="lg" className="border border-gray-800 hover:border-primary text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-opacity-100" asChild>
            <Link href="https://github.com/Maski0" className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </Link>
          </Button>
          <Button size="lg" className="border border-gray-800 hover:border-primary text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-opacity-100" asChild>
            <Link href="https://www.linkedin.com/in/maski-srikar/" className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
