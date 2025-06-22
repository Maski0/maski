"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import HeroVideoDialog from "./magicui/hero-video-dialog";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
  video?: {
    videoSrc: string;
    thumbnailSrc: string;
    thumbnailAlt: string;
  };
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({
  projects,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">
          Featured Projects{" "}
          <span className="text-sm italic text-gray-400">
            (*this website as well)
          </span>
        </h2>
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="gap-6">
                  <Card
                    key={index}
                    className="bg-black/50 border-gray-800 hover:border-primary transition-colors"
                  >
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-gray-100">
                        {project.title}
                      </h3>
                      <h4 className="text-sm text-gray-400">{project.subtitle}</h4>
                      {project.video && (
                        <div className="relative">
                          <HeroVideoDialog
                            videoSrc={project.video.videoSrc}
                            thumbnailSrc={project.video.thumbnailSrc}
                            thumbnailAlt={project.video.thumbnailAlt}
                            className="block dark:hidden "
                          />
                        </div>
                      )}
                      <p className="text-gray-300">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="link" asChild className="p-0">
                        <Link href={project.link}>View Project →</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
