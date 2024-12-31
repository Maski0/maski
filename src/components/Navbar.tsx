"use client";

import Link from "next/link";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  isNavExpanded: boolean;
  setIsNavExpanded: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ isNavExpanded, setIsNavExpanded }: NavbarProps) {
  return (
    <nav
      className={` hidden lg:block fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300
        ${isNavExpanded ? "w-64" : "w-16"} 
        bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800
        hover:shadow-lg hover:shadow-primary/20`}
      onMouseEnter={() => setIsNavExpanded(true)}
      onMouseLeave={() => setIsNavExpanded(false)}
    >
      <div className="p-4 flex flex-col">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 mb-8">
          <Terminal className="w-8 h-8 min-w-[2rem]" />
          <span
            className={`overflow-hidden transition-all duration-300 whitespace-nowrap font-bold text-xl
              ${isNavExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
          >
            Maski Srikar
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex flex-col gap-4">
          {[
            { href: "#about", label: "About" },
            { href: "#experience", label: "Experience" },
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
            >
              <div
                className="w-8 h-8 min-w-[2rem] flex items-center justify-center 
                  bg-gray-800/50 rounded-lg group-hover:bg-primary/20"
              >
                {link.href === "#about" && "01"}
                {link.href === "#experience" && "02"}
                {link.href === "#projects" && "03"}
                {link.href === "#skills" && "04"}
                {link.href === "#contact" && "05"}
              </div>
              <span
                className={`overflow-hidden transition-all duration-300 whitespace-nowrap
                  ${isNavExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-8 flex flex-col gap-4">
          {[
            { href: "mailto:maskikarsrikar@gmail.com", icon: Mail, label: "Email" },
            { href: "https://github.com/Maski0", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/maski-srikar/", icon: Linkedin, label: "LinkedIn" },
          ].map((social) => (
            <Link
              key={social.href}
              href={social.href}
              className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors"
            >
              <social.icon className="w-8 h-8 min-w-[2rem]" />
              <span
                className={`overflow-hidden transition-all duration-300 whitespace-nowrap
                  ${isNavExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
              >
                {social.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
