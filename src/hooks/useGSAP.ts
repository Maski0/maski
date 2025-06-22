"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // All GSAP animations will be scoped to this context
    }, scopeRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return { scopeRef, gsap, ScrollTrigger };
};

export const useScrollAnimation = (selector: string, animation: gsap.TweenVars, scrollOptions?: ScrollTrigger.Vars) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);
    
    elements.forEach((element) => {
      gsap.fromTo(element as gsap.TweenTarget, 
        { opacity: 0, y: 50, ...animation.from },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          ...animation.to,
          scrollTrigger: {
            trigger: element as Element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            ...scrollOptions
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, animation, scrollOptions]);
}; 