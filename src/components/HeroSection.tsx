"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextScramble } from "./utils/text-scramble";
import { MouseTrail } from "./utils/mouse-trail";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

      // Floating animation for the container
      gsap.to(heroRef.current, {
        y: -10,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <MouseTrail />
      <div
        ref={heroRef}
        className="w-full max-w-4xl mx-auto rounded-2xl p-12 backdrop-blur-sm"
      >
        <div className="text-center space-y-6">
          <div ref={titleRef}>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                <TextScramble className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Hello, Friend
                </TextScramble>
              </span>{" "}
              <span className="inline-block align-middle">👋</span>{" "}
              <div className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                <TextScramble className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  I'm Maski Srikar
                </TextScramble>
              </div>
            </h1>
          </div>
          
          <p ref={subtitleRef} className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building immersive gaming worlds and crafting scalable Full Stack
            solutions to power modern experiences.
          </p>
          
          <div ref={buttonsRef} className="space-x-4">
            <Button
              size="lg"
              className="border border-gray-800 hover:border-primary text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-opacity-100"
              asChild
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button
              size="lg"
              className="border border-gray-800 hover:border-primary text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-opacity-100"
              asChild
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
